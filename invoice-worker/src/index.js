// sculptclub-invoices — Acuity order notification (via Cloudflare Email Routing) -> numbered PDF invoice -> R2 + D1
// -> (only when SEND_ENABLED === "true") email to the buyer. See README.md.
import PostalMime from "postal-mime";
import { parseOrder, htmlToText } from "./parse.js";
import { buildInvoicePdf, splitVat } from "./invoice-pdf.js";

const nowISO = () => new Date().toISOString();
const amsDate = (d) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
const eur = (c) => "€ " + (c / 100).toFixed(2).replace(".", ",");

async function sha(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("").slice(0, 24);
}

function trustedSender(headers) {
  const from = (headers.get("from") || "").toLowerCase();
  const auth = (headers.get("authentication-results") || "").toLowerCase();
  // Auto-send only when the receiving side saw a passing DKIM for Acuity's own domain. Anything else is stored for review.
  return from.includes("acuityscheduling.com") && /dkim=pass[^;]*(header\.d|d)=([a-z0-9.]*)acuityscheduling\.com/.test(auth);
}

export async function createInvoice(env, order, { dateISO, orderKey, trusted, note }) {
  const year = Number(dateISO.slice(0, 4));
  const lines = order.lines.map((l) => ({ desc: l.desc, qty: l.qty, grossCents: l.unitGrossCents, certs: l.certs }));
  const gross = order.totalGrossCents;
  const { net, vat } = splitVat(gross, order.vatPct);
  const key0 = `inv/${year}/pending-${orderKey}.pdf`;
  await env.DB.prepare(
    `INSERT OR IGNORE INTO invoices (number, year, seq, order_key, issue_date, customer_name, customer_email, lines_json, vat_pct, gross_cents, net_cents, vat_cents, pdf_key, status, note, created_at)
     SELECT printf('%d-%04d', ?1, s), CAST(?1 AS INTEGER), s, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, 'stored', ?12, ?13
     FROM (SELECT COALESCE(MAX(seq), 0) + 1 AS s FROM invoices WHERE year = CAST(?1 AS INTEGER))`
  ).bind(year, orderKey, dateISO, order.name, order.email, JSON.stringify(lines), order.vatPct, gross, net, vat, key0, (trusted ? "" : "sender not verified; ") + (note || ""), nowISO()).run();
  const row = await env.DB.prepare("SELECT * FROM invoices WHERE order_key = ?").bind(orderKey).first();
  if (row.pdf_key !== key0 && row.pdf_key.startsWith(`inv/${year}/`) && !row.pdf_key.includes("pending-")) return { row, duplicate: true };
  const certs = lines.flatMap((l) => l.certs);
  const pdf = buildInvoicePdf({ number: row.number, dateISO, customer: { name: order.name, email: order.email }, lines, vatPct: order.vatPct, ref: certs.length ? "Pakketcode " + certs.join(", ") : undefined });
  const pdfKey = `inv/${year}/${row.number}.pdf`;
  await env.PDFS.put(pdfKey, pdf, { httpMetadata: { contentType: "application/pdf" } });
  await env.DB.prepare("UPDATE invoices SET pdf_key = ? WHERE id = ?").bind(pdfKey, row.id).run();
  return { row: { ...row, pdf_key: pdfKey }, duplicate: false, pdf };
}

export async function sendInvoice(env, row) {
  if (env.SEND_ENABLED !== "true") return { sent: false, reason: "SEND_ENABLED is off" };
  if (row.status === "sent") return { sent: false, reason: "already sent" };
  const obj = await env.PDFS.get(row.pdf_key);
  if (!obj) return { sent: false, reason: "pdf missing" };
  const first = row.customer_name.split(" ")[0];
  const text = `Hoi ${first},\n\nBedankt voor je aankoop bij SculptClub. In de bijlage vind je de factuur (${row.number}, ${eur(row.gross_cents)} incl. ${row.vat_pct}% BTW).\nVragen? Reageer gewoon op deze mail.\n\nGroet,\nSculptClub\n\n---\nHi ${first},\n\nThanks for your purchase at SculptClub. Your invoice (${row.number}, ${eur(row.gross_cents)} incl. ${row.vat_pct}% VAT) is attached.\nQuestions? Just reply to this email.\n\nSculptClub\nEgelantiersgracht 424, 1015 RR Amsterdam · KvK 64708101 · BTW-id NL002250100B57`;
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#222">` + text.replace(/&/g, "&amp;").replace(/</g, "&lt;").split("\n").join("<br>") + `</div>`;
  try {
    await env.EMAIL.send({
      to: row.customer_email,
      from: { email: env.FROM_ADDRESS, name: "SculptClub" },
      replyTo: "contact@sculptclub.nl",
      subject: `Factuur ${row.number} · SculptClub`,
      text, html,
      attachments: [{ content: await obj.arrayBuffer(), filename: `Factuur-${row.number}-SculptClub.pdf`, type: "application/pdf", disposition: "attachment" }],
    });
    await env.DB.prepare("UPDATE invoices SET status='sent', sent_at=? WHERE id=?").bind(nowISO(), row.id).run();
    return { sent: true };
  } catch (e) {
    await env.DB.prepare("UPDATE invoices SET status='send_failed', note=COALESCE(note,'')||?||' ' WHERE id=?").bind("send error: " + String(e).slice(0, 200), row.id).run();
    return { sent: false, reason: String(e) };
  }
}

async function hold(env, message, parsed, raw, reason) {
  const key = `held/${nowISO()}-${await sha(raw.byteLength + (message.headers.get("message-id") || ""))}.eml`;
  await env.PDFS.put(key, raw);
  await env.DB.prepare("INSERT INTO held (received_at, subject, from_addr, reason, raw_key) VALUES (?,?,?,?,?)")
    .bind(nowISO(), message.headers.get("subject"), message.from, reason, key).run();
  // Show it to Paulo (this also carries Gmail's forwarding-confirmation code). Only to a verified destination.
  try { await message.forward(env.REVIEW_FORWARD_TO); } catch (e) { console.log("forward failed", String(e)); }
}

export default {
  async email(message, env) {
    const raw = await new Response(message.raw).arrayBuffer();
    const parsed = await PostalMime.parse(raw);
    const subject = message.headers.get("subject") || parsed.subject || "";
    const text = parsed.text && /Item\s*Unit\s*Price/i.test(parsed.text) ? parsed.text : htmlToText(parsed.html || parsed.text || "");
    const order = parseOrder(subject, text);
    if (!order.ok) return hold(env, message, parsed, raw, order.reason);

    const msgId = message.headers.get("message-id") || "";
    const orderKey = order.certs.length ? "cert:" + [...order.certs].sort().join(",") : "msg:" + (await sha(msgId + subject));
    const dateISO = amsDate(new Date(message.headers.get("date") || Date.now()));
    const trusted = trustedSender(message.headers);
    console.log("order-mail headers", JSON.stringify({ from: message.headers.get("from"), auth: message.headers.get("authentication-results"), envFrom: message.from, trusted }));
    const { row, duplicate } = await createInvoice(env, order, { dateISO, orderKey, trusted });
    await env.PDFS.put(`raw/${row.number}.eml`, raw);
    if (duplicate) return;
    if (trusted) await sendInvoice(env, row);
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    if ((request.headers.get("authorization") || "") !== `Bearer ${env.ADMIN_TOKEN}` || !env.ADMIN_TOKEN) return new Response("forbidden", { status: 403 });
    const p = url.pathname;
    if (p === "/list") {
      const r = await env.DB.prepare("SELECT number,issue_date,customer_name,customer_email,gross_cents,vat_pct,status,sent_at,note FROM invoices ORDER BY year,seq").all();
      const h = await env.DB.prepare("SELECT received_at,subject,from_addr,reason FROM held ORDER BY id DESC LIMIT 20").all();
      return Response.json({ send_enabled: env.SEND_ENABLED, invoices: r.results, held: h.results });
    }
    if (p === "/export.csv") {
      const r = (await env.DB.prepare("SELECT number,issue_date,customer_name,customer_email,net_cents,vat_cents,gross_cents,vat_pct,status FROM invoices ORDER BY year,seq").all()).results;
      const csv = ["number,date,customer,email,net,vat,gross,vat_pct,status", ...r.map((x) => [x.number, x.issue_date, `"${x.customer_name}"`, x.customer_email, (x.net_cents / 100).toFixed(2), (x.vat_cents / 100).toFixed(2), (x.gross_cents / 100).toFixed(2), x.vat_pct, x.status].join(","))].join("\n");
      return new Response(csv, { headers: { "content-type": "text/csv" } });
    }
    let m;
    if ((m = p.match(/^\/pdf\/(\d{4}-\d{4})$/))) {
      const row = await env.DB.prepare("SELECT pdf_key FROM invoices WHERE number=?").bind(m[1]).first();
      const o = row && (await env.PDFS.get(row.pdf_key));
      return o ? new Response(o.body, { headers: { "content-type": "application/pdf" } }) : new Response("not found", { status: 404 });
    }
    if (request.method === "POST" && (m = p.match(/^\/send\/(\d{4}-\d{4})$/))) {
      const row = await env.DB.prepare("SELECT * FROM invoices WHERE number=?").bind(m[1]).first();
      if (!row) return new Response("not found", { status: 404 });
      return Response.json(await sendInvoice(env, row));
    }
    return new Response("sculptclub-invoices", { status: 200 });
  },
};

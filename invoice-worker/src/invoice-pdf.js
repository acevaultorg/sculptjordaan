// Dependency-free A4 invoice PDF (Helvetica, WinAnsi). Runs in Node and in Cloudflare Workers/Pages Functions.
// Same template for hand-made and automatic invoices. Amounts are integer cents; VAT is derived from the
// VAT-inclusive price the customer actually paid (Acuity prices include BTW).

export const SELLER = {
  name: "SculptClub",
  owner: "P.M. de Vries",
  street: "Egelantiersgracht 424",
  city: "1015 RR Amsterdam",
  kvk: "64708101",
  btw: "NL002250100B57",
  email: "contact@sculptclub.nl",
  phone: "+31 6 15 14 79 52",
  web: "sculptclub.nl",
};

export function splitVat(grossCents, ratePct) {
  const net = Math.round((grossCents * 100) / (100 + ratePct));
  return { net, vat: grossCents - net, gross: grossCents };
}

const eur = (c) => "€ " + (c / 100).toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const nlDate = (iso) => {
  const m = ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
  const [y, mo, d] = iso.split("-").map(Number);
  return `${d} ${m[mo - 1]} ${y}`;
};

// width tables (Helvetica / Helvetica-Bold) are approximated per char class; good enough for right-align + wrapping
const W = {};
const regular = "  !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
const hv = [278,278,355,556,556,889,667,191,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,278,278,584,584,584,556,1015,667,667,722,722,667,611,778,722,278,500,667,556,833,722,778,667,778,722,667,611,722,667,944,667,667,611,278,278,278,469,556,333,556,556,500,556,556,278,556,556,222,222,500,222,833,556,556,556,556,333,500,278,556,500,722,500,500,500,334,260,334,584];
const hvb = [278,333,474,556,556,889,722,238,333,333,389,584,278,333,278,278,556,556,556,556,556,556,556,556,556,556,333,333,584,584,584,611,975,722,722,722,722,667,611,778,722,278,556,722,611,833,722,778,667,778,722,667,611,722,667,944,667,667,611,333,278,333,584,556,333,556,611,556,611,556,333,611,611,278,278,556,278,889,611,611,611,611,389,556,333,611,556,778,556,556,500,389,280,389,584];
for (let i = 0; i < regular.length; i++) { W["F1" + regular[i]] = hv[i]; W["F2" + regular[i]] = hvb[i]; }
const tw = (s, f, size) => { let w = 0; for (const ch of s) w += (W[f + ch] ?? (f === "F2" ? 611 : 556)); return (w * size) / 1000; };

function enc(s) { // -> PDF string literal bytes in WinAnsi
  let out = "";
  for (const ch of s) {
    let c = ch.codePointAt(0);
    if (ch === "€") c = 0x80; else if (ch === "–") c = 0x96; else if (ch === "—") c = 0x97; else if (ch === "·") c = 0xB7; else if (c > 255) c = 63;
    if (c === 40 || c === 41 || c === 92) out += "\\" + String.fromCharCode(c);
    else if (c < 32 || c > 126) out += "\\" + c.toString(8).padStart(3, "0");
    else out += String.fromCharCode(c);
  }
  return out;
}

function wrap(s, f, size, maxW) {
  const words = s.split(" "); const lines = []; let cur = "";
  for (const w of words) { const t = cur ? cur + " " + w : w; if (tw(t, f, size) > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
  if (cur) lines.push(cur); return lines;
}

/**
 * inv: { number, dateISO, supplyDateISO?, customer:{name,email?,address?[]}, lines:[{desc, qty, grossCents}], vatPct, paidNote?, ref? }
 * Returns Uint8Array.
 */
export function buildInvoicePdf(inv) {
  const ops = [];
  const T = (x, y, s, f = "F1", size = 10, gray = 0) => ops.push(`${gray} g BT /${f} ${size} Tf ${x} ${y} Td (${enc(s)}) Tj ET`);
  const TR = (xr, y, s, f = "F1", size = 10) => T(xr - tw(s, f, size), y, s, f, size);
  const LINE = (x1, y1, x2, y2, g = 0.8) => ops.push(`${g} G 0.6 w ${x1} ${y1} m ${x2} ${y2} l S`);
  const L = 50, R = 545;

  T(L, 780, "FACTUUR", "F2", 22);
  TR(R, 780, SELLER.name, "F2", 16);
  TR(R, 764, SELLER.owner, "F1", 9.5, 0.3);
  TR(R, 752, SELLER.street, "F1", 9.5, 0.3);
  TR(R, 740, SELLER.city, "F1", 9.5, 0.3);
  TR(R, 728, `KvK ${SELLER.kvk} · BTW-id ${SELLER.btw}`, "F1", 9.5, 0.3);
  TR(R, 716, `${SELLER.email} · ${SELLER.phone}`, "F1", 9.5, 0.3);
  LINE(L, 700, R, 700);

  let y = 676;
  T(L, y, "Factuur aan", "F2", 9, 0.4);
  T(300, y, "Factuurgegevens", "F2", 9, 0.4);
  const cust = [inv.customer.name, ...(inv.customer.address || []), ...(inv.customer.email ? [inv.customer.email] : [])];
  cust.forEach((c, i) => T(L, y - 16 - i * 13, c, i === 0 ? "F2" : "F1", 10.5));
  const meta = [["Factuurnummer", inv.number], ["Factuurdatum", nlDate(inv.dateISO)], ["Leverdatum", nlDate(inv.supplyDateISO || inv.dateISO)]];
  if (inv.ref) meta.push(["Referentie", inv.ref]);
  meta.forEach(([k, v], i) => { T(300, y - 16 - i * 13, k, "F1", 10, 0.4); T(390, y - 16 - i * 13, v, "F2", 10); });

  y = 590;
  const cDesc = L, cQty = 325, cNet = 400, cVat = 450, cTot = R;
  ops.push("0.95 g " + L + " " + (y - 6) + " " + (R - L) + " 22 re f");
  T(cDesc + 6, y, "Omschrijving", "F2", 9); TR(cQty, y, "Aantal", "F2", 9); TR(cNet, y, "Prijs excl.", "F2", 9); TR(cVat, y, "BTW", "F2", 9); TR(cTot - 6, y, "Totaal excl.", "F2", 9);
  y -= 24;
  let net = 0, vat = 0, gross = 0;
  for (const ln of inv.lines) {
    const unitGross = ln.grossCents; const q = ln.qty || 1;
    const s = splitVat(unitGross * q, inv.vatPct);
    net += s.net; vat += s.vat; gross += s.gross;
    const unitNet = Math.round(s.net / q);
    const dl = wrap(ln.desc, "F1", 10, cQty - cDesc - 50);
    dl.forEach((t, i) => T(cDesc + 6, y - i * 13, t, "F1", 10));
    TR(cQty, y, String(q), "F1", 10); TR(cNet, y, eur(unitNet), "F1", 10); TR(cVat, y, inv.vatPct + "%", "F1", 10); TR(cTot - 6, y, eur(s.net), "F1", 10);
    y -= Math.max(dl.length * 13, 13) + 8;
  }
  LINE(L, y + 4, R, y + 4);
  y -= 14;
  const row = (k, v, bold) => { const f = bold ? "F2" : "F1"; TR(cNet + 70, y, k, f, 10.5); TR(cTot - 6, y, v, f, 10.5); y -= 16; };
  row("Totaal excl. BTW", eur(net));
  row(`BTW ${inv.vatPct}%`, eur(vat));
  LINE(360, y + 11, R, y + 11, 0.5);
  y -= 2;
  row("Totaal incl. BTW", eur(gross), true);

  y -= 14;
  T(L, y, inv.paidNote || "Dit bedrag is reeds online voldaan. Er hoeft niets meer te worden betaald.", "F1", 10);
  y -= 13;
  T(L, y, "Alle bedragen in euro. De prijs die je hebt betaald is inclusief BTW.", "F1", 10, 0.4);

  LINE(L, 70, R, 70);
  T(L, 54, `${SELLER.name} · ${SELLER.owner} · KvK ${SELLER.kvk} · BTW-id ${SELLER.btw} · ${SELLER.email}`, "F1", 8.5, 0.45);

  const content = ops.join("\n");
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    `<< /Title (${enc("Factuur " + inv.number)}) /Producer (SculptClub) >>`,
  ];
  let pdf = "%PDF-1.4\n"; const offs = [];
  objs.forEach((o, i) => { offs.push(pdf.length); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => String(o).padStart(10, "0") + " 00000 n \n").join("");
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R /Info 7 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const bytes = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i++) bytes[i] = pdf.charCodeAt(i) & 255;
  return bytes;
}

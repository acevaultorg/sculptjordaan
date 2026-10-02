// Parse an Acuity "Product Order" notification (the owner copy of a package/product purchase).
// Never guesses: anything it cannot read exactly returns { ok:false, reason } and the order is held for review.

export function htmlToText(html) {
  return html
    .replace(/<(style|script)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(td|th)>/gi, " ")
    .replace(/<(br|\/p|\/tr|\/div|\/h\d)\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&euro;/g, "€").replace(/&#8364;/g, "€")
    .replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

const cents = (s) => Math.round(parseFloat(s) * 100);

export function parseOrder(subject, text) {
  if (!/^\s*(Fwd:\s*)?(Product|Package|Gift Certificate|Subscription)\s+Order/i.test(subject || "") && !/Product Order/i.test(subject || "")) {
    return { ok: false, reason: "subject is not a product/package order" };
  }
  const t = text.replace(/ /g, " ").replace(/[ \t]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();
  const flat = t.replace(/\n/g, " ");

  const head = flat.match(/Factuur \/ Invoice\s+(.+?)\s+phone:\s*(.*?)\s*\|\s*email:\s*([^\s|]+@[^\s|]+)/i);
  if (!head) return { ok: false, reason: "customer block not found" };
  const name = head[1].trim();
  const email = head[3].trim().toLowerCase();

  const tableStart = flat.search(/Item\s*Unit\s*Price\s*Quantity\s*Total/i);
  const tableEnd = flat.search(/\sTotal\s+\d[\d.,]*\s+Includes\s+\d+%\s*BTW/i);
  if (tableStart < 0 || tableEnd < 0 || tableEnd < tableStart) return { ok: false, reason: "item table not found" };
  const table = flat.slice(tableStart, tableEnd).replace(/^Item\s*Unit\s*Price\s*Quantity\s*Total\s*/i, "");

  const lines = [];
  const re = /(.+?)€\s*(\d+\.\d{2})\s*(\d+)\s*€\s*(\d+\.\d{2})(?:\s*Certificate codes?:\s*((?:[A-Z0-9]{6,12}[\s,]*)+?)\s*Schedule)?/g;
  let m, consumed = 0;
  while ((m = re.exec(table))) {
    const unit = cents(m[2]), qty = parseInt(m[3], 10), total = cents(m[4]);
    if (unit * qty !== total) return { ok: false, reason: `line arithmetic mismatch (${unit}x${qty}!=${total})` };
    lines.push({ desc: m[1].trim().replace(/\s+/g, " "), qty, unitGrossCents: unit, totalGrossCents: total, certs: (m[5] || "").split(/[\s,]+/).filter(Boolean) });
    consumed = re.lastIndex;
  }
  if (!lines.length) return { ok: false, reason: "no item lines parsed" };
  if (table.slice(consumed).trim()) return { ok: false, reason: "unparsed text after item lines: " + table.slice(consumed).trim().slice(0, 80) };

  const tot = flat.match(/\sTotal\s+(\d[\d.,]*)\s+Includes\s+(\d+)%\s*BTW/i);
  const orderTotal = cents(tot[1].replace(",", "."));
  const sum = lines.reduce((a, l) => a + l.totalGrossCents, 0);
  if (orderTotal !== sum) return { ok: false, reason: `order total ${orderTotal} != sum of lines ${sum}` };

  return { ok: true, name, email, vatPct: parseInt(tot[2], 10), totalGrossCents: orderTotal, lines, certs: lines.flatMap((l) => l.certs) };
}

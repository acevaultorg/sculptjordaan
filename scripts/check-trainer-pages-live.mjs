#!/usr/bin/env node
/**
 * Live trainer-page check: every trainer x NL+EN page, five fields measured from the SERVED html
 * and compared to src/config/trainers.ts (the source of truth).
 *
 *   name      <h1> and <title> contain the trainer's name
 *   duration  no hourly rate / "/ 60 min" prints (operator 2026-09-21); the SCULPT TRANSFORMATION line
 *             (from €329 per 4 weeks) and the duo line (€199 p.p. / €399) do; a bookingUrl trainer's link carries its slot
 *   location  the page says Jordaan
 *   text      the first 70 chars of the locale's bio appear in the page text
 *   booking   exactly the configured booking link: bookingUrl, else the trainer's own wa.me; no other
 *             wa.me / calendly / acuity number from a different trainer, never the retired 0683178934
 *
 * READ-ONLY: plain GET + parse of hrefs. Never follows or clicks a booking link (real conversions).
 * Usage: node scripts/check-trainer-pages-live.mjs [baseUrl=https://sculptclub.nl]   exit 1 on any mismatch
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const base = (process.argv[2] || "https://sculptclub.nl").replace(/\/$/, "");
const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");
const { trainers } = await import(join(REPO, "src/config/trainers.ts"));

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const textOf = (html) => decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const norm = (s) => s.replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
const digits = (u) => (u.match(/wa\.me\/(\d+)/) || [])[1];
const allWa = new Set(trainers.map((t) => t.whatsapp && digits(t.whatsapp)).filter(Boolean));

const rows = [];
let bad = 0;
for (const t of trainers) {
  for (const loc of ["nl", "en"]) {
    const url = `${base}/${loc}/${t.slug[loc]}?cb=${Date.now()}`;
    const r = await fetch(url, { redirect: "follow" });
    const html = r.ok ? await r.text() : "";
    const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
    const txt = norm(textOf(main));
    const fails = [];
    if (!r.ok) fails.push(`HTTP ${r.status}`);
    const h1 = norm(textOf((html.match(/<h1[\s\S]*?<\/h1>/) || [""])[0]));
    const title = norm(textOf((html.match(/<title[\s\S]*?<\/title>/) || [""])[0]));
    if (!h1.includes(t.name) || !title.includes(t.name)) fails.push(`name: h1="${h1.slice(0, 50)}" title="${title.slice(0, 50)}"`);
    // Duration / price: operator 2026-09-21 ("we dont name hourly rate, we say 'from 299 / 4 weeks'"):
    // NO hourly rate or "/ 60 min" session length may print on a trainer page. What must print is the
    // shared SCULPT TRANSFORMATION line (from EUR 329 per 4 weeks incl. unlimited Open Gym) and the duo line.
    const compact = txt.replace(/\s+/g, "");
    let dur = "from €329 / 4 wk, duo €199 p.p.";
    if (!/329/.test(compact) || !/(4weken|4weeks)/.test(compact)) fails.push("duration: SCULPT TRANSFORMATION line (€329 per 4 weeks) missing");
    if (!/199/.test(compact) || !/399/.test(compact)) fails.push("duration: duo line (€199 p.p. / €399) missing");
    if (/€\s?\d+\s?\/\s?\d+\s?min/.test(txt)) fails.push("duration: an hourly rate prints on the page (operator ruled none)");
    if (t.rate && txt.includes(t.rate.replace(/^vanaf /, ""))) fails.push(`duration: config rate "${t.rate}" prints on the page`);
    if (t.bookingUrl) dur += ` · slot ${(t.bookingUrl.match(/(\d+)min/) || [])[0] || "n/a"}`;
    if (!/Jordaan/.test(txt + h1)) fails.push("location: Jordaan not on page");
    const bio = norm(t.bio[loc]).slice(0, 70);
    if (!txt.includes(bio)) fails.push(`text: bio start not found ("${bio.slice(0, 30)}...")`);
    const hrefs = [...main.matchAll(/href="([^"]+)"/g)].map((m) => decode(m[1]));
    const wa = [...new Set(hrefs.filter((h) => /wa\.me\//.test(h)).map(digits))];
    const cal = [...new Set(hrefs.filter((h) => /calendly\.com|acuityscheduling\.com/.test(h)).map((h) => h.split("?")[0]))];
    let expected;
    if (t.bookingUrl) {
      expected = t.bookingUrl;
      if (!cal.includes(t.bookingUrl)) fails.push(`booking: expected ${t.bookingUrl}, found ${cal.join(",") || "none"}`);
      if (wa.length) fails.push(`booking: wa.me present on a bookingUrl trainer (${wa.join(",")})`);
    } else {
      const own = t.whatsapp ? digits(t.whatsapp) : null;
      expected = own ? `wa.me/${own}` : "studio";
      if (own && !wa.includes(own)) fails.push(`booking: own wa.me/${own} missing, found ${wa.join(",") || "none"}`);
      for (const n of wa) if (n !== own && allWa.has(n)) fails.push(`booking: another trainer's number wa.me/${n}`);
      if (cal.length) fails.push(`booking: unexpected ${cal.join(",")}`);
    }
    if (/0683178934|31683178934/.test(html)) fails.push("booking: retired number 0683178934 present");
    rows.push({ trainer: t.name, loc, name: h1 ? "ok" : "?", duration: dur, location: /Jordaan/.test(txt + h1) ? "Jordaan" : "MISSING", text: txt.includes(bio) ? "ok" : "MISMATCH", booking: expected, status: fails.length ? "FAIL" : "ok" });
    if (fails.length) { bad++; console.error(`FAIL ${t.name} /${loc}: ${fails.join(" | ")}`); }
  }
}
console.table(rows);
console.log(`${trainers.length} trainers x 2 locales = ${rows.length} pages, ${bad} failing`);
process.exit(bad ? 1 : 0);

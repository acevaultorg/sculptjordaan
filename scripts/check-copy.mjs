#!/usr/bin/env node
/**
 * check-copy.mjs — scores the built site (out/) against COPY_STANDARD.md.
 * Run after `npm run build` (it runs automatically as `postbuild`). Report only, never
 * edits, always exits 0: over a limit is a signal, not a crime (COPY_STANDARD.md).
 *
 * Per sitemap page: H1 ≤45, sub-line under the H1 ≤110, paragraphs ≤250 chars / ≤3
 * sentences, buttons ≤22 chars / ≤4 words, image alt ≤125, meta title ≤60, meta
 * description ≤155, em dashes used as rhythm, and slop words. Legal pages and blog body
 * paragraphs are counted but marked (allowed longer when every sentence carries a fact).
 *
 *   node scripts/check-copy.mjs                       # built out/
 *   node scripts/check-copy.mjs --live                # fetch the pages from https://sculptclub.nl
 *   node scripts/check-copy.mjs --sessions f.json     # {"/path": sessions30d} → sort by traffic
 *   node scripts/check-copy.mjs --json                # full result as JSON
 *
 * Length measures added 2026-09-28 (card mukvc0ygxl9drd, Paulo: "Did you also optimise
 * text length?"): the sub-line, paragraph, button-word and alt limits were in the standard
 * but were never measured.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const SITE = "https://sculptclub.nl";
const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const LIVE = process.argv.includes("--live");
const sessions = arg("--sessions") ? JSON.parse(readFileSync(arg("--sessions"), "utf8")) : null;

const UA = { "User-Agent": "Mozilla/5.0 (compatible; SculptClubCopyCheck/1.0)" };
const get = async (u) => { try { const r = await fetch(u, { headers: UA, redirect: "follow" }); return r.ok ? r.text() : null; } catch { return null; } };

const sitemap = LIVE ? (await get(`${SITE}/sitemap.xml`)) || "" : existsSync(join(OUT, "sitemap.xml")) ? readFileSync(join(OUT, "sitemap.xml"), "utf8") : "";
const paths = [...sitemap.matchAll(/<loc>https:\/\/sculptclub\.nl([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
if (!paths.length) { console.log(`check-copy: no sitemap ${LIVE ? "on the live site" : "in out/ (build first)"}; skipped`); process.exit(0); }

const SLOP = /\b(elevate|unlock|seamless(ly)?|journey|discover|unleash|empower|next level|game[- ]changer|tailored|curated|holistic|vibrant|nestled|ontdek|naadloos|transformeer|hoger niveau)\b/gi;
const LEGAL = /algemene-voorwaarden|terms-conditions|privacy|cookie|toegankelijkheid|accessibility/;
const BLOG = /\/blog\//;

const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
   .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
   .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
// Sentence count: a stop followed by a space and a capital/digit. Abbreviations like "o.a." do not split.
const sentences = (t) => (t.match(/[.!?](?=\s+[A-Z0-9À-Ý€])/g) || []).length + 1;

const rows = [];
for (const p of paths) {
  let html;
  if (LIVE) html = await get(`${SITE}${p}`);
  else {
    const f = p === "/" ? join(OUT, "index.html") : join(OUT, `${p.replace(/^\//, "")}.html`);
    html = existsSync(f) ? readFileSync(f, "utf8") : null;
  }
  if (!html) continue;
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const title = strip((html.match(/<title>([\s\S]*?)<\/title>/) || ["", ""])[1]);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || ["", ""])[1].replace(/&amp;/g, "&");
  const h1m = main.match(/<h1[\s\S]*?<\/h1>/);
  const h1 = strip(h1m ? h1m[0] : "");
  // Sub-line: the first non-empty <p> within ~2,500 chars after the H1 closes.
  let sub = "";
  if (h1m) {
    const after = main.slice(main.indexOf(h1m[0]) + h1m[0].length).slice(0, 2500);
    for (const m of after.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)) { const t = strip(m[1]); if (t) { sub = t; break; } }
  }
  // Customer review quotes (they open with a curly quote) are the reviewer's own words: never counted.
  const paras = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1])).filter((t) => t && t !== sub && !/^[“"„]/.test(t));
  const longParas = paras.filter((t) => t.length > 250 || sentences(t) > 3);
  const text = strip(main);
  const buttonTexts = [...main.matchAll(/<(?:a|button)\b[^>]*class="[^"]*(?:rounded-full|inline-flex)[^"]*"[^>]*>([\s\S]*?)<\/(?:a|button)>/g)]
    .map((m) => strip(m[1])).filter((t) => t && t.length < 80);
  // Words = tokens with a letter or digit ("€ 9 · 60 min" is 3 words, not 5).
  const words = (t) => t.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  const buttons = [...new Set(buttonTexts.filter((t) => t.length > 22 || words(t) > 4))];
  const alts = [...main.matchAll(/<img\b[^>]*\balt="([^"]*)"/g)].map((m) => m[1]).filter((a) => a.length > 125);
  const dashes = (text.match(/\s—\s/g) || []).length;
  const slop = [...new Set((text.match(SLOP) || []).map((s) => s.toLowerCase()))];
  const legal = LEGAL.test(p), blog = BLOG.test(p);
  const issues = [];
  if (h1.length > 45) issues.push(`h1 ${h1.length}`);
  if (sub.length > 110) issues.push(`sub ${sub.length}`);
  if (longParas.length) issues.push(`para>250/3s ${longParas.length}${blog || legal ? " (allowed longer)" : ""}`);
  if (title.length > 60) issues.push(`title ${title.length}`);
  if (desc.length > 155) issues.push(`desc ${desc.length}`);
  if (buttons.length) issues.push(`buttons ${buttons.length}`);
  if (alts.length) issues.push(`alt>125 ${alts.length}`);
  if (dashes) issues.push(`em-dash ${dashes}`);
  if (slop.length) issues.push(`slop ${slop.join("/")}`);
  const score = (h1.length > 45) + (sub.length > 110) + (legal || blog ? 0 : longParas.length) + (title.length > 60) +
    (desc.length > 155) + buttons.length + alts.length + dashes + slop.length * 2;
  const s = sessions ? (sessions[p] ?? sessions[p.replace(/\/$/, "")] ?? 0) : null;
  rows.push({ p, sessions30d: s, score, issues, h1, sub, title, desc, buttons, longParas, alts, legal, blog });
}
rows.sort((a, b) => sessions ? (b.sessions30d - a.sessions30d) || (b.score - a.score) : b.score - a.score);
if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(rows, null, 1) + "\n");
} else {
  const failing = rows.filter((r) => r.score > 0);
  console.log(`check-copy: ${rows.length} sitemap pages scanned${LIVE ? " (live)" : ""}, ${failing.length} with at least one issue (report only)`);
  for (const r of failing.slice(0, 40)) console.log(`${sessions ? String(r.sessions30d).padStart(4) + "s " : ""}${String(r.score).padStart(3)}  ${r.p}${r.legal ? " (legal)" : ""}  ${r.issues.join(" · ")}`);
  const tot = (k) => rows.filter((r) => r.issues.some((i) => i.startsWith(k))).length;
  console.log(`totals: h1>45 ${tot("h1")} · sub>110 ${tot("sub")} · para ${tot("para")} · title>60 ${tot("title")} · desc>155 ${tot("desc")} · buttons ${tot("buttons")} · alt>125 ${tot("alt")} · em-dash ${tot("em-dash")} · slop ${tot("slop")}`);
}
process.exit(0);

#!/usr/bin/env node
/**
 * check-copy.mjs — scores the built site (out/) against COPY_STANDARD.md.
 * Run after `npm run build`. Report only, never edits, exits 0.
 *
 * Per sitemap page: H1 length, meta title/description length, buttons over 22 chars,
 * em dashes used as rhythm in visible text, and slop words. Prints one line per failing
 * page, worst first, plus totals. `--json` writes the full result to stdout as JSON.
 * Blog body paragraphs and legal pages are counted but flagged separately (allowed longer).
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/sculptclub\.nl([^<]*)<\/loc>/g)].map((m) => m[1] || "/");

const SLOP = /\b(elevate|unlock|seamless(ly)?|journey|discover|unleash|empower|next level|game[- ]changer|tailored|curated|holistic|vibrant|nestled|ontdek|naadloos|transformeer|hoger niveau)\b/gi;
const LEGAL = /algemene-voorwaarden|terms-conditions|privacy|cookie|toegankelijkheid|accessibility/;

const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ")
   .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
   .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

const rows = [];
for (const p of paths) {
  const f = p === "/" ? join(OUT, "index.html") : join(OUT, `${p.replace(/^\//, "")}.html`);
  if (!existsSync(f)) continue;
  const html = readFileSync(f, "utf8");
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const title = strip((html.match(/<title>([\s\S]*?)<\/title>/) || ["", ""])[1]);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || ["", ""])[1].replace(/&amp;/g, "&");
  const h1 = strip((main.match(/<h1[\s\S]*?<\/h1>/) || [""])[0]);
  const text = strip(main);
  const buttons = [...main.matchAll(/<(?:a|button)\b[^>]*class="[^"]*(?:rounded-full|inline-flex)[^"]*"[^>]*>([\s\S]*?)<\/(?:a|button)>/g)]
    .map((m) => strip(m[1])).filter((t) => t && t.length > 22 && t.length < 80);
  const dashes = (text.match(/\s—\s/g) || []).length;
  const slop = [...new Set((text.match(SLOP) || []).map((s) => s.toLowerCase()))];
  const issues = [];
  if (h1.length > 45) issues.push(`h1 ${h1.length}`);
  if (title.length > 60) issues.push(`title ${title.length}`);
  if (desc.length > 155) issues.push(`desc ${desc.length}`);
  if (buttons.length) issues.push(`buttons>22 ${buttons.length}`);
  if (dashes) issues.push(`em-dash ${dashes}`);
  if (slop.length) issues.push(`slop ${slop.join("/")}`);
  const score = (h1.length > 45) + (title.length > 60) + (desc.length > 155) + buttons.length + dashes + slop.length * 2;
  rows.push({ p, score, issues, h1, title, desc, buttons, legal: LEGAL.test(p) });
}
rows.sort((a, b) => b.score - a.score);
if (process.argv.includes("--json")) {
  process.stdout.write(JSON.stringify(rows, null, 1) + "\n");
} else {
const failing = rows.filter((r) => r.score > 0);
console.log(`check-copy: ${rows.length} sitemap pages scanned, ${failing.length} with at least one issue`);
for (const r of failing.slice(0, 40)) console.log(`${String(r.score).padStart(3)}  ${r.p}${r.legal ? " (legal)" : ""}  ${r.issues.join(" · ")}`);
const tot = (k) => rows.filter((r) => r.issues.some((i) => i.startsWith(k))).length;
console.log(`totals: h1>45 ${tot("h1")} · title>60 ${tot("title")} · desc>155 ${tot("desc")} · buttons>22 ${tot("buttons")} · em-dash ${tot("em-dash")} · slop ${tot("slop")}`);
}

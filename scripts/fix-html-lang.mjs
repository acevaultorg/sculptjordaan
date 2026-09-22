#!/usr/bin/env node
/**
 * fix-html-lang — give the English pages `<html lang="en">`.
 *
 * WHY
 * `src/app/layout.tsx` is the ONE root layout for both locales and it hardcodes
 * `lang="nl"`. Locale is a path segment (/en/...), not a route group with its own
 * layout, so every page in the export — all 221, including all 108 English ones —
 * ships `<html lang="nl">`. Verified live 2026-09-22 on /, /en, /en/studio-rental
 * and /nl/studio-huren: all four served lang="nl".
 *
 * What that costs:
 *   - a screen reader picks its speech synthesiser from `lang`, so an English
 *     visitor on /en hears English words read by a DUTCH voice;
 *   - it is a language signal Google and Bing read alongside hreflang, and the
 *     hreflang here is correct, so the two disagree;
 *   - /en is the site's single best search surface (position 9.4, 27.8% CTR,
 *     30 of 86 total clicks in the last 30 days), and the English angle —
 *     every trainer speaks English, no Dutch required — is a stated strategy
 *     for the Amsterdam expat audience.
 *
 * WHY A POSTBUILD REWRITE AND NOT A ROUTE-GROUP REFACTOR
 * The correct Next fix is per-locale layouts, which means moving 100+ routes into
 * route groups — a large blast radius on a live site for a one-attribute defect.
 * This edits the built artifact, which is the thing visitors and crawlers read,
 * and it is trivially reversible (delete the postbuild line).
 *
 * SAFETY
 *   - touches only `out/en.html` and `out/en/**` — never an NL page;
 *   - rewrites only the `lang` attribute inside the FIRST `<html …>` tag, so no
 *     other "nl" anywhere in the document can be hit;
 *   - leaves 404.html / _not-found.html alone: they are deliberately bilingual;
 *   - asserts before and after, and exits non-zero if the NL count moved or any
 *     English page still says nl. A silent no-op would look exactly like success,
 *     which is the failure mode worth guarding.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const OUT = "out";
const HTML_TAG = /<html\b[^>]*>/i;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

const isEnglish = (rel) => rel === "en.html" || rel.startsWith("en/");

let en = 0, nl = 0, fixed = 0, stillNl = [];
const after = [];

for await (const file of walk(OUT)) {
  const rel = relative(OUT, file).split("\\").join("/");
  const s = await readFile(file, "utf8");
  const m = s.match(HTML_TAG);
  if (!m) continue;
  if (!isEnglish(rel)) { nl++; continue; }
  en++;
  const tag = m[0];
  if (!/lang="nl"/i.test(tag)) { after.push(rel); continue; }
  const next = s.replace(HTML_TAG, tag.replace(/lang="nl"/i, 'lang="en"'));
  await writeFile(file, next);
  fixed++;
}

// Verify by re-reading, not by trusting the writes above.
for await (const file of walk(OUT)) {
  const rel = relative(OUT, file).split("\\").join("/");
  if (!isEnglish(rel)) continue;
  const m = (await readFile(file, "utf8")).match(HTML_TAG);
  if (m && /lang="nl"/i.test(m[0])) stillNl.push(rel);
}

console.log(`html lang: ${fixed} English pages set to "en" (${en} English, ${nl} other left untouched)`);
if (en === 0) { console.error("REFUSING: found 0 English pages — the path test is wrong, not the site"); process.exit(1); }
if (stillNl.length) { console.error(`FAILED: ${stillNl.length} English pages still say lang="nl": ${stillNl.slice(0,5).join(", ")}`); process.exit(1); }

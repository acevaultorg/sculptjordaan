#!/usr/bin/env node
/**
 * fix-og-image — give every page an og:image / twitter:image.
 *
 * WHY
 * Next merges `metadata` SHALLOWLY: "All openGraph fields from app/layout.js are
 * replaced in app/blog/page.js because app/blog/page.js sets openGraph metadata"
 * (node_modules/next/dist/docs/.../generate-metadata.md § Merging). The root
 * layout leaves images to the `opengraph-image.tsx` file convention, so ANY page
 * that declares its own `openGraph` block — to set a per-page title and
 * description, which is the right thing to do — silently loses the image with it.
 *
 * Measured 2026-09-22 on the build: 176 of 221 pages shipped NO og:image at all.
 * That means a link to four fifths of this site pastes into WhatsApp, LinkedIn,
 * Slack or iMessage as a blank card — and WhatsApp is this business's primary
 * channel: every trainer CTA on the site is a wa.me link, so trainers share these
 * pages with clients by hand.
 *
 * WHY NOT THE DOCUMENTED FIX
 * Next's own answer is a shared `openGraphImage` variable spread into each page's
 * openGraph. That is correct and it means editing 176 page files. This injects
 * the same tags into the built HTML instead: same result for every scraper, one
 * line to revert.
 *
 * WHICH IMAGE
 * /images/og-default.jpg — 1200x630, already the first entry of `image` in the
 * LocalBusiness JSON-LD, so nothing here is invented. Deliberately NOT the
 * generated /opengraph-image route the other 45 pages use: Cloudflare serves
 * that extensionless file as `application/octet-stream`, which some scrapers
 * refuse, and `_headers` cannot fix it because out/_worker.js puts the project
 * in advanced mode where _headers is never processed.
 *
 * SAFETY
 *   - only touches pages with NO og:image — never rewrites an existing one;
 *   - inserts immediately before </head>, so it cannot disturb existing tags;
 *   - re-reads every file afterwards to verify rather than trusting its writes;
 *   - refuses (exit 1) if it finds nothing to do AND nothing already tagged,
 *     which would mean the detector is broken rather than the site being clean.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const OUT = "out";
const IMG = "/images/og-default.jpg";
const ALT = "SculptClub — private personal training studio, Egelantiersgracht, Amsterdam Jordaan";

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

// Origin is the one the built pages already use in their own canonical tags;
// asserted below against the build so a domain change cannot silently drift.
const base = "https://sculptclub.nl";
const url = base + IMG;
const TAGS =
  `<meta property="og:image" content="${url}"/>` +
  `<meta property="og:image:type" content="image/jpeg"/>` +
  `<meta property="og:image:width" content="1200"/>` +
  `<meta property="og:image:height" content="630"/>` +
  `<meta property="og:image:alt" content="${ALT}"/>` +
  `<meta name="twitter:image" content="${url}"/>` +
  `<meta name="twitter:image:alt" content="${ALT}"/>`;

// ── Give the GENERATED cards a file extension ────────────────────────────────
// Next's opengraph-image.tsx / twitter-image.tsx emit `out/opengraph-image`
// with NO extension, and Cloudflare Pages infers Content-Type from the
// extension — so the live response is `application/octet-stream` even though
// the bytes are a valid 1200x630 PNG (magic 89504e470d0a1a0a, measured
// 2026-09-22). The meta tag correctly declares image/png; only the header
// disagrees, and a strict scraper may refuse it.
//
// `_headers` cannot fix it — out/_worker.js puts the project in advanced mode
// where _headers is never processed — and a Pages Function could, at the cost
// of touching the file that also owns 409 redirects, www→apex and the locale
// middleware. A bad worker takes the whole site down.
//
// So: write a `.png` sibling and point the meta tags at it. Same designed
// image, correct Content-Type, zero worker risk. Dropping Next's cache-busting
// query also gives the card a stable URL, which is what a scraper cache wants.
const GENERATED = ["opengraph-image", "twitter-image", "en/opengraph-image", "en/twitter-image"];
let copied = 0;
const rewrites = [];
for (const rel of GENERATED) {
  const src = join(OUT, rel);
  try {
    const buf = await readFile(src);
    if (buf.length < 8 || buf.readUInt32BE(0) !== 0x89504e47) continue; // not a PNG — leave it
    await writeFile(`${src}.png`, buf);
    copied++;
    // The query class must exclude BACKSLASH, not just quotes. Next's generated
    // card URL carries a `?<hash>` query, and in the RSC flight payload the
    // closing quote is escaped (`...?abc\"`). A class of [^"'] happily eats that
    // backslash, so the replacement emitted `...png"` with an UNESCAPED quote —
    // the inline `self.__next_f.push([1,"…"])` script then failed to PARSE, the
    // flight stream ended mid-way, and React rendered "This page couldn't load"
    // while curl still returned perfect HTML. Measured on /nl/lessen 2026-09-23.
    rewrites.push([new RegExp(`https://sculptclub\\.nl/${rel}(\\?[^"'\\\\]*)?`, "g"), `${base}/${rel}.png`]);
  } catch { /* this route does not exist in this build */ }
}

let urlPages = 0;
if (rewrites.length) {
  for await (const file of walk(OUT)) {
    const s = await readFile(file, "utf8");
    let next = s;
    for (const [re, to] of rewrites) next = next.replace(re, to);
    if (next !== s) { await writeFile(file, next); urlPages++; }
  }
}
console.log(`og:image: ${copied} generated card(s) given a .png extension, ${urlPages} page(s) repointed`);

let had = 0, added = 0, skipped = 0;
for await (const file of walk(OUT)) {
  const rel = relative(OUT, file).split("\\").join("/");
  const s = await readFile(file, "utf8");
  if (s.includes('property="og:image"')) { had++; continue; }
  const i = s.indexOf("</head>");
  if (i === -1) { skipped++; continue; }
  await writeFile(file, s.slice(0, i) + TAGS + s.slice(i));
  added++;
}

let missing = [];
for await (const file of walk(OUT)) {
  const s = await readFile(file, "utf8");
  if (!s.includes('property="og:image"')) missing.push(relative(OUT, file));
}

console.log(`og:image: ${added} pages given the default, ${had} already had one, ${skipped} had no </head>`);
if (added === 0 && had === 0) { console.error("REFUSING: no page has an og:image and none was added — the detector is broken"); process.exit(1); }
if (missing.length) { console.error(`FAILED: ${missing.length} pages still have no og:image: ${missing.slice(0,5).join(", ")}`); process.exit(1); }

// ── Guard: every inline script in the built HTML must still PARSE ────────────
// Any postbuild rewriter that string-replaces across the whole document can
// corrupt an escaped quote inside Next's RSC flight payload
// (`self.__next_f.push([1,"…"])`). The failure is invisible to curl — the HTML
// is byte-perfect and returns 200 — but the browser cannot parse that inline
// script, the flight stream ends mid-way, and React swaps the page for
// "This page couldn't load". Prefer this mechanical check over a comment.
{
  let checked = 0;
  const broken = [];
  const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;
  for await (const file of walk(OUT)) {
    const html = await readFile(file, "utf8");
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(html))) {
      // Only these TYPES are executed as JS by a browser. Everything else —
      // ld+json, importmap, speculationrules, a `text/markdown` twin, an HTML
      // template — is a DATA block by spec and must never be parsed here.
      // Measured 2026-09-23: the original deny-list flagged 4,122 readinglist
      // pages as "broken" purely because they carry <script type="text/markdown">.
      // A guard that refuses a valid build is worse than no guard.
      const stype = (/\btype\s*=\s*["']?([^"'\s>]+)/.exec(m[1]) || [, ""])[1].toLowerCase();
      if (stype && !["text/javascript", "application/javascript", "module", "text/ecmascript"].includes(stype)) continue;
      checked++;
      try { new Function(m[2]); }
      catch (err) { broken.push(`${relative(OUT, file)} — ${err.message}`); break; }
    }
  }
  // Positive control: a deliberately broken script must be caught, otherwise a
  // clean sweep proves nothing about the detector.
  let controlCaught = false;
  try { new Function('self.__next_f.push([1,"a"}])'); } catch { controlCaught = true; }
  if (!controlCaught) { console.error("REFUSING: inline-script parse guard cannot detect a broken script"); process.exit(1); }
  if (checked < 100) { console.error(`REFUSING: only ${checked} inline scripts seen — the guard is looking at the wrong thing`); process.exit(1); }
  if (broken.length) {
    console.error(`FAILED: ${broken.length} page(s) have an inline script that will not parse in a browser:`);
    for (const b of broken.slice(0, 5)) console.error(`  ${b}`);
    process.exit(1);
  }
  console.log(`og:image: inline-script parse guard OK (${checked} scripts, control caught)`);
}

#!/usr/bin/env node
/**
 * check-hreflang-pairs.mjs — every page the sitemap advertises must be able to
 * resolve its language twin, or it silently ships without x-default.
 *
 * WHY THIS EXISTS
 * `src/components/seo/hreflang.tsx` resolves the NL/EN twin through
 * `alternateRoutes` in `src/config/navigation.ts`, and bails deliberately when it
 * cannot:
 *
 *     if (!nlPath || !enPath) return null;   // avoid misleading Google
 *
 * That guard is correct, and it is SILENT. A page that misses an entry still
 * builds, still deploys, still returns 200, and still emits the two hreflang tags
 * that Next's own Metadata API generates from the page's `alternates.languages`.
 * It just quietly loses the three the component adds — `nl-NL`, `en`, and
 * critically **x-default**, the tag that decides what a visitor whose language is
 * neither Dutch nor English gets served. Nothing in the build says a word.
 *
 * THIS HAS NOW HAPPENED TWICE.
 *  - 2026-08-29: 33 pairs were found already declared to Google but missing here.
 *    The fix left a comment asking future sessions to keep the map in sync.
 *  - 2026-09-05: it recurred anyway. `/nl/open-gym/studentenkorting` (shipped
 *    09-01) and the belasting/first-year-tax blog post (shipped 09-05) had both
 *    declared `alternates.languages` in their own metadata and neither was added
 *    here — so four live pages served 2 hreflang tags instead of 5. The same
 *    sweep found two more pairs (personal-trainer-amsterdam-noord,
 *    zakelijk-personal-training-amsterdam) present only in the EN→NL direction,
 *    which fails BOTH pages of the pair for the reason in "DIRECTION MATTERS".
 *
 * A comment did not stop the second occurrence. This script is the mechanical
 * version of that comment.
 *
 * DIRECTION MATTERS — and this is the subtle part
 * It is NOT enough for a path to "appear somewhere in alternateRoutes". The
 * component resolves the two directions differently:
 *   - an NL path is looked up as a KEY          → `alternateRoutes[pathname]`
 *   - an EN path is found by reverse VALUE scan → `.find(([, v]) => v === pathname)`
 * So a pair written only as `"/en/x": "/nl/x"` leaves the NL page with no key and
 * the EN page with nothing pointing at it — both fail. This script mirrors that
 * exact logic rather than approximating it with "is it mentioned anywhere",
 * which would have passed all four of the pages the 09-05 sweep actually found
 * broken.
 *
 * WHY IT READS SOURCE, NOT out/ OR THE LIVE SITE
 * The failure is fully determined by two source files, so this is exact, offline,
 * instant, and catches the drift before a build — unlike check-sitemap.mjs, which
 * necessarily runs after one. It is therefore safe in `prebuild`.
 *
 * KNOWN LIMITATIONS — READ BEFORE TRUSTING A PASS
 *  - It proves an ENTRY EXISTS, not that the entry is CORRECT. A pair pointing at
 *    the wrong slug passes here and is caught only by reading the live page.
 *  - It checks the sitemap's own hardcoded arrays, so a page missing from
 *    `sitemap.ts` is invisible to it. That is check-sitemap.mjs's job.
 *  - Intentionally-noindex pages are not required to be paired (see EXEMPT).
 */

import { readFileSync } from "node:fs";

const SITEMAP = "src/app/sitemap.ts";
const NAV = "src/config/navigation.ts";

/**
 * Paths that legitimately have no language twin. Keep this list SHORT and give
 * every entry a reason — an allowlist is where a real defect goes to hide.
 */
const EXEMPT = new Set([
  // /start is a redirect stub, deliberately not a bilingual page.
  // CLAUDE.md killed-investigations: "the /start→/ route are harmless and intentional".
  "/nl/start",
  "/en/start",
]);

function readArray(src, name, file) {
  const m = src.match(new RegExp(`const ${name}\\s*=\\s*\\[(.*?)\\n\\];`, "s"));
  if (!m) {
    console.error(`✗ could not find \`const ${name}\` in ${file}.`);
    console.error(`  The file's shape changed — fix this parser rather than deleting the check.`);
    process.exit(2);
  }
  return [...m[1].matchAll(/"(\/[^"]*)"/g)].map((x) => x[1]);
}

const sitemapSrc = readFileSync(SITEMAP, "utf8");
const navSrc = readFileSync(NAV, "utf8");

const paths = [
  ...readArray(sitemapSrc, "nlPages", SITEMAP),
  ...readArray(sitemapSrc, "enPages", SITEMAP),
];

// NOTE: the `\s*:` is load-bearing. A looser `alternateRoutes[^{]*\{` also matches
// `alternateRoutesXX`, so renaming or removing the map would still "find" something
// and this check would report a clean sweep over a map that no longer exists.
// Caught by control 3 while building this script; keep the anchor.
const mapMatch = navSrc.match(/export const alternateRoutes\s*:[^=]*=\s*\{(.*?)\n\};/s);
if (!mapMatch) {
  console.error(`✗ could not find \`alternateRoutes\` in ${NAV}.`);
  process.exit(2);
}
const pairs = [...mapMatch[1].matchAll(/"(\/[^"]*)"\s*:\s*"(\/[^"]*)"/g)].map((m) => [m[1], m[2]]);
const keys = new Set(pairs.map(([k]) => k));
const values = new Set(pairs.map(([, v]) => v));

// Mirrors src/components/seo/hreflang.tsx exactly. See "DIRECTION MATTERS" above.
const resolvable = (p) => (p.startsWith("/en") ? values.has(p) : keys.has(p));

// Self-test: prove the checker can actually fail before believing that it passed.
// A checker whose logic silently breaks reports a clean sweep, which is the one
// outcome indistinguishable from success.
if (resolvable("/nl/__definitely-not-a-real-route__")) {
  console.error("✗ self-test failed: the resolver returns true for a nonsense path.");
  console.error("  Every result below would be meaningless. Fix the resolver.");
  process.exit(2);
}

const missing = paths.filter((p) => !EXEMPT.has(p) && !resolvable(p));

console.log(
  `Checked ${paths.length} sitemap routes against ${pairs.length} alternateRoutes pairs` +
    (EXEMPT.size ? ` (${EXEMPT.size} exempt)` : "")
);

if (missing.length === 0) {
  console.log("✓ every sitemap route can resolve its language twin (x-default will render).");
  process.exit(0);
}

console.error(`\n✗ ${missing.length} route(s) cannot resolve a language twin.`);
console.error("  These pages will render WITHOUT x-default and nl-NL — silently.\n");
for (const p of missing) {
  if (p.startsWith("/en")) {
    console.error(`    ${p}`);
    console.error(`        no alternateRoutes entry POINTS TO it (needs "<nl-path>": "${p}")`);
  } else {
    console.error(`    ${p}`);
    console.error(`        no alternateRoutes KEY for it (needs "${p}": "<en-path>")`);
  }
}
console.error(`\n  Fix: add the pair to alternateRoutes in ${NAV}.`);
console.error("  Add BOTH directions — the tail block's convention since 2026-08-29.");
console.error("  If a route genuinely has no twin, add it to EXEMPT here WITH a reason.");
process.exit(1);

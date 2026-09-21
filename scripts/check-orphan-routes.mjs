#!/usr/bin/env node
/**
 * check-orphan-routes.mjs — find pages nothing links to.
 *
 * WHY THIS EXISTS
 * On 2026-09-01 the €39 student tier (/nl/open-gym/studentenkorting +
 * /en/open-gym/student-discount) was found to have ZERO inbound internal
 * links. The pages were live, in the sitemap, and backed by a real Acuity
 * product — but the ONLY reference anywhere in src/ was sitemap.ts. A live
 * revenue product was reachable by direct URL or search only, which on this
 * domain is close to zero reach (non-brand organic: 1,861 impressions -> 2
 * clicks / 30d). It shipped that way and nobody noticed for 12 hours.
 *
 * A sitemap entry is NOT discovery. This makes "is it actually reachable?"
 * mechanical instead of something someone has to remember to check.
 *
 * WARN-ONLY BY DESIGN. Some routes are legitimately unlinked (campaign
 * landers, vanity targets, legal pages reached from a footer built at
 * runtime). Blocking a deploy on a judgement call would train people to
 * bypass it. Use --strict in CI if you ever want it to fail.
 *
 * KNOWN LIMITATION — READ BEFORE TRUSTING A RESULT
 * This is a STATIC scan. It cannot see links built from template literals or
 * variables, e.g. trainer-match-quiz.tsx does
 *     const intakeHref = `/${locale}/${trainer.slug[locale]}`
 * Those routes ARE reachable but look orphaned here. Chasing one cost a
 * session a false "6 trainers unreachable in English" finding. Before acting
 * on any hit: grep for the route built dynamically, and only then treat it as
 * a real orphan. False positives go in ALLOW with a reason.
 *
 * Verified against the bug it was written for: with the student links removed
 * it reports both student routes as ORPHAN; with them present, linked.
 *
 * Usage: node scripts/check-orphan-routes.mjs [--strict]
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SRC = "src";
const APP = join(SRC, "app");

// Routes that are intentionally not linked from other pages.
// Add here WITH A REASON rather than silencing the whole check.
const ALLOW = [
  /^\/$/, /^\/en$/, /^\/nl$/,                       // roots
  /\/opengraph-image/, /\/icon/, /\/apple-icon/,    // asset routes
  /^\/social\//,                                     // per-post social deep links
  /^\/api\//,
  /booking-confirmed|boeking-bevestigd/,             // Acuity redirect targets — arrived at externally
  /-ads$/,                                           // paid-ad landers — entered from Google Ads only
  /^\/(en|nl)\/start$/,                              // vanity/campaign entry (see CLAUDE.md killed-investigations)
  /^\/intake-plan$/, /^\/pt-cheat-sheet$/,           // lead magnets, shared by direct link
  /^\/(en|nl)\/feedback(\/trainers)?$/,               // feedback forms: reached by QR code + direct link only (noindex)
  // Trainer intake pages are linked DYNAMICALLY, not by literal href:
  //   src/components/marketing/trainer-match-quiz.tsx:452
  //   const intakeHref = `/${locale}/${trainer.slug[locale]}`
  // A static scan cannot see that, so they would be permanent false positives.
  /plan-free-intro-with-/, /plan-gratis-intake-met-/,
];

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(APP);

// Collect routes from page.tsx files
const routes = files
  .filter((f) => /[\\/]page\.tsx$/.test(f))
  .map((f) => {
    const rel = relative(APP, f).replace(/\\/g, "/").replace(/(^|\/)page\.tsx$/, "");
    return rel === "" ? "/" : "/" + rel.replace(/\/$/, "");
  })
  .filter((r) => !r.includes("[")); // skip dynamic segments

// Everything we might link from: all source files except the sitemap itself
const haystackFiles = walk(SRC).filter(
  (f) => /\.(tsx|ts|mdx|json)$/.test(f) && !/sitemap\.ts$/.test(f) && !/check-orphan-routes/.test(f)
);
const haystack = haystackFiles.map((f) => readFileSync(f, "utf8")).join("\n");

// Only an actual href counts as discovery.
//
// LEARNED THE HARD WAY: a naive substring match reports "no orphans" while
// missing real ones, because a page references ITSELF in metadata --
// `canonical: "/nl/foo"`, breadcrumb `url: "/nl/foo"`, its own
// `alternates.languages` -- and its translation sibling points at it via
// hreflang (`nl: "/nl/foo"`). None of those are navigation. A detector that
// fails toward "all clear" is worse than no detector, so match on href only.
const hrefRe = (r) => {
  const q = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // accept BOTH JSX `href="/x"` and config-object `href: "/x"` — navigation.ts
  // shapes nav/footer items as objects, so an href-attribute-only match
  // over-reports. Still rejects `canonical:`, hreflang `nl:`/`en:` and
  // breadcrumb `url:` — none of which are navigation, only self/translation refs.
  return new RegExp("href\\s*[:=]\\s*\\{?\\s*[\"'`]" + q + "[\"'`]");
};

const orphans = routes.filter((r) => {
  if (ALLOW.some((re) => re.test(r))) return false;
  return !hrefRe(r).test(haystack);
});

console.log(`  scanned ${routes.length} static routes across ${haystackFiles.length} source files`);
if (orphans.length === 0) {
  console.log("✓ No orphan routes — every static page has at least one internal reference.");
  process.exit(0);
}
console.log(`\n⚠ ${orphans.length} route(s) with NO internal link (sitemap.ts excluded):\n`);
for (const o of orphans) console.log(`    ${o}`);
console.log(`\n  A sitemap entry is not discovery. If a route is meant to be reachable,`);
console.log(`  link it from where the decision happens. If it is intentionally unlinked,`);
console.log(`  add it to ALLOW in scripts/check-orphan-routes.mjs with a reason.\n`);
process.exit(process.argv.includes("--strict") ? 1 : 0);

#!/usr/bin/env node
/**
 * check-sitemap.mjs — every URL the sitemap advertises must exist in the build.
 *
 * WHY THIS EXISTS
 * `src/app/sitemap.ts` is a HARDCODED list — 196 literal paths, zero filesystem
 * enumeration (verified 2026-09-02). So it does NOT self-heal: delete or rename a
 * route and the sitemap keeps advertising the old URL. Nothing else catches that.
 * The site stays 200, the build stays green, and only Google and Bing notice.
 *
 * This is not hypothetical. readinglist.school shipped **65 sitemap-indexed 404
 * URLs** and it went unnoticed until an AdSense audit; the fleet rule
 * `adsense-thin-content-prevention.md` records it as a live cause of a "Low value
 * content" rejection. A sitemap full of 404s teaches crawlers to distrust the
 * whole file, which is expensive on a site whose binding constraint is acquisition.
 *
 * WHY IT CHECKS THE BUILD, NOT THE LIVE SITE
 * 196 HEAD requests to production takes ~40s, hammers the origin, and can only
 * tell you about a mistake you have ALREADY shipped. Comparing `out/sitemap.xml`
 * against the HTML actually present in `out/` is exact, offline, instant, and
 * catches the drift BEFORE it deploys. (Measured 2026-09-02: live was 196/196 =
 * 200, so this ships as regression protection, not as a fix for a current bug.)
 *
 * KNOWN LIMITATION — READ BEFORE TRUSTING A RESULT
 * It only proves a FILE EXISTS. It does not open it, so it cannot tell you the
 * page renders correctly, is not an error page, or is not `noindex`. And it is
 * only as current as `out/` — a stale build gives a stale answer, which is why a
 * staleness warning is printed loudly rather than left for you to remember.
 *
 * NOT IN prebuild: it must run AFTER the build, since out/ is the thing it reads.
 *
 * Usage:  node scripts/check-sitemap.mjs
 */

import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "out");
const SITEMAP = join(OUT, "sitemap.xml");

if (!existsSync(SITEMAP)) {
  console.error("✗ out/sitemap.xml not found — run `npm run build` first.");
  console.error("  (This check reads the BUILD, not the live site, on purpose.)");
  process.exit(1);
}

const xml = readFileSync(SITEMAP, "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urls.length === 0) {
  console.error("✗ parsed 0 <loc> entries — the parser is broken, not the sitemap.");
  process.exit(1);
}

// Staleness: a stale out/ makes this check report about a build nobody is shipping.
let stale = 0;
try {
  const outMtime = statSync(join(OUT, "index.html")).mtimeMs;
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx?|json)$/.test(e.name) && statSync(p).mtimeMs > outMtime) stale++;
    }
  };
  walk(join(ROOT, "src"));
} catch { /* non-fatal */ }

const missing = [];
for (const u of urls) {
  let p;
  try { p = new URL(u).pathname; } catch { missing.push([u, "unparseable URL"]); continue; }
  const rel = p.replace(/^\/+|\/+$/g, "");
  const candidates = rel === ""
    ? ["index.html"]
    : [`${rel}.html`, join(rel, "index.html")];
  if (!candidates.some((c) => existsSync(join(OUT, c)))) {
    missing.push([u, `no ${candidates.join(" or ")} in out/`]);
  }
}

const built = urls.length - missing.length;
console.log(`Checked ${urls.length} sitemap URLs against out/\n`);

if (stale > 0) {
  console.log(`⚠ out/ is STALE — ${stale} source file(s) are newer than out/index.html.`);
  console.log(`  This result describes the LAST build, not your current source.`);
  console.log(`  Re-run \`npm run build\` before trusting it.\n`);
}

if (missing.length === 0) {
  console.log(`✓ all ${built} sitemap URLs have a built page.`);
  process.exit(0);
}

console.log(`✗ ${missing.length} sitemap URL(s) have NO built page:\n`);
for (const [u, why] of missing) console.log(`   ${u}\n     ${why}`);
console.log(`\nA sitemap advertising URLs that do not exist teaches crawlers to`);
console.log(`distrust the whole file. Either restore the route or remove it from`);
console.log(`src/app/sitemap.ts (it is a hardcoded list — it will not self-heal).`);
process.exit(1);

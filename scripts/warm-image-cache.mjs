#!/usr/bin/env node
/**
 * Pre-warm Vercel _next/image transform cache for above-the-fold hero images.
 *
 * What it does:
 *   - For each top-entry-page hero image, fetches all
 *     (deviceSize × format) variants from the production _next/image endpoint.
 *   - Vercel transforms the source JPEG → AVIF/WebP at the requested width
 *     and caches the result on the edge for subsequent requests.
 *   - First request per (url, w, accept) is the slow one (~3-10s on the
 *     server). After this script runs, real users hit warm cache.
 *
 * Why:
 *   6-run Lighthouse mobile measurement showed median LCP ~15.5s on
 *   /nl/studio-huren — dominated by cold-transform processing time on
 *   the specific mobile-viewport `w=` variants Lighthouse requests
 *   (typically w=640 or w=828 AVIF). Pre-warming after each deploy
 *   means the first real user gets warm-cache LCP instead of cold.
 *
 *   See docs/PERF-EXPERIMENTS-2026-05-07.md for full data.
 *
 * What it does NOT do:
 *   - Doesn't warm every image in /public/images/ (89 images × 8 variants =
 *     712 requests = Vercel rate limit risk). Targets only LCP-critical
 *     above-the-fold heroes on top entry pages from Plausible.
 *   - Doesn't warm blog post heroes (blog posts have text LCP, not image).
 *
 * Usage:
 *   node scripts/warm-image-cache.mjs
 *
 *   # After a deploy:
 *   npm run deploy && npm run warm-images
 *
 * Configurable via env:
 *   SITE_URL — defaults to https://sculptclub.nl
 *   VERBOSE  — set "1" to print each request
 */

const SITE_URL = process.env.SITE_URL || "https://sculptclub.nl";
const VERBOSE = process.env.VERBOSE === "1";

// Hero images that are LCP elements on top-entry-page or conversion-path
// routes (per Plausible 2026-05-07 + site-wide grep of `loading="eager"`
// usage on critical routes). Grow this list when adding new high-traffic
// landing pages or conversion-funnel entry points.
//
// Coverage map:
//   training-barbell-squat.jpg     → /, /en (homepage NL+EN)
//   gym-latest.jpg                 → /nl/studio-huren, /en/studio-rental
//   training-dumbbells-focus.jpg   → /nl/boek-gym, /nl/open-gym,
//                                    /en/book-gym (booking conversion path)
//   model-facade-full.jpg          → /nl/word-trainer, /en/become-trainer
//                                    (freelance-trainer acquisition path)
const HEROES = [
  "/images/studio/training-barbell-squat.jpg",
  "/images/studio/gym-latest.jpg",
  "/images/studio/training-dumbbells-focus.jpg",
  "/images/studio/model-facade-full.jpg",
];

// Match next.config.ts deviceSizes. Plus 384 for typical 1× mobile srcset.
const WIDTHS = [384, 640, 828, 1080, 1920];
const QUALITY = 75;

// Distinct Accept headers force Vercel to generate each format separately.
// Each (url, w, q, format) is its own cache key on the edge.
const FORMATS = [
  { accept: "image/avif,image/webp,image/*,*/*", label: "avif" },
  { accept: "image/webp,image/*,*/*",             label: "webp" },
];

// Mobile user agent so Vercel's image optimizer sees a mobile request profile
// (matches what Lighthouse mobile + real mobile users send).
const MOBILE_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";

async function warmOne(src, width, format) {
  const url = `${SITE_URL}/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;
  const start = Date.now();
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: format.accept,
        "User-Agent": MOBILE_UA,
      },
    });
    const elapsed = Date.now() - start;
    const contentType = res.headers.get("content-type") || "";
    const cacheStatus = res.headers.get("x-vercel-cache") || res.headers.get("age") || "?";
    const ok = res.ok;
    if (VERBOSE || !ok) {
      console.log(
        `  ${ok ? "✓" : "✗"} ${src} w=${width} ${format.label} → ` +
          `${res.status} ${contentType} ${elapsed}ms cache=${cacheStatus}`,
      );
    }
    // Drain the body so the connection can pool
    await res.arrayBuffer();
    return { ok, elapsed, src, width, format: format.label, status: res.status };
  } catch (e) {
    console.warn(`  ✗ ${src} w=${width} ${format.label} → ERROR: ${e.message}`);
    return { ok: false, elapsed: Date.now() - start, src, width, format: format.label, error: e.message };
  }
}

async function main() {
  console.log(`Warming ${HEROES.length} heroes × ${WIDTHS.length} widths × ${FORMATS.length} formats = ${HEROES.length * WIDTHS.length * FORMATS.length} requests`);
  console.log(`Target: ${SITE_URL}`);
  console.log("");

  const results = [];
  // Sequential to avoid Vercel rate-limit on concurrent transforms.
  // 20 requests × ~1-3s each = 20-60s total — acceptable for post-deploy.
  for (const src of HEROES) {
    for (const width of WIDTHS) {
      for (const format of FORMATS) {
        const result = await warmOne(src, width, format);
        results.push(result);
      }
    }
  }

  // Summary
  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok).length;
  const total = results.reduce((s, r) => s + r.elapsed, 0);
  const slowest = results.sort((a, b) => b.elapsed - a.elapsed)[0];
  console.log("");
  console.log(`✓ Warmed ${ok}/${results.length} variants in ${(total / 1000).toFixed(1)}s total`);
  if (failed) console.log(`✗ ${failed} failed`);
  if (slowest) {
    console.log(`  Slowest: ${slowest.src} w=${slowest.width} ${slowest.format} → ${slowest.elapsed}ms`);
  }
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});

import { test } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Mobile screenshot harness — drops `playwright-screenshots/<device>/<slug>.png`
 * for each route × device combo. Default: 8 routes × 3 devices = 24 screenshots.
 *
 * Output is gitignored (see .gitignore) since these are generated artifacts.
 * Re-run anytime to audit visual state of every key page on every device.
 *
 * Routes chosen for the SculptClub conversion funnel:
 *   - `/` is the brand entry (60%+ of organic landings)
 *   - `/nl/vind-jouw-personal-trainer` is the primary CTA destination
 *   - `/nl/studio-huren` + `/nl/voor-trainers` are the trainer-acquisition
 *     funnel split (consumer vs ZZP-trainer prospecting)
 *   - `/nl/open-gym` + `/nl/prijzen` are the open-gym product surfaces
 *   - `/nl/gratis-intake` is the Google Ads paid-search landing
 *   - `/nl/eerste-bezoek` is the post-first-click info bridge
 *
 * Add a route by appending to ROUTES. Add a device by editing
 * playwright.config.ts `projects`.
 */
const ROUTES = [
  { slug: "home",          path: "/" },
  { slug: "find-trainer",  path: "/nl/vind-jouw-personal-trainer" },
  { slug: "studio-huren",  path: "/nl/studio-huren" },
  { slug: "voor-trainers", path: "/nl/voor-trainers" },
  { slug: "open-gym",      path: "/nl/open-gym" },
  { slug: "prijzen",       path: "/nl/prijzen" },
  { slug: "gratis-intake", path: "/nl/gratis-intake" },
  { slug: "eerste-bezoek", path: "/nl/eerste-bezoek" },
];

for (const route of ROUTES) {
  test(`screenshot · ${route.slug}`, async ({ page }, testInfo) => {
    const deviceName = testInfo.project.name;

    // Use domcontentloaded (not networkidle) — Plausible + GA + Clarity +
    // Cloudflare beacons + IndexNow + retries can keep "networkidle" from
    // firing on a real production site for 10+s. domcontentloaded is enough
    // for visual audit since we wait explicitly for fonts + animations below.
    await page.goto(route.path, { waitUntil: "domcontentloaded" });

    // Wait for web fonts (Syne + Instrument Sans) — catches the FOUT class
    // where a screenshot taken before font-load shows fallback-font width
    // overflow (this is exactly how the PRIVATE GYM hero clip showed up
    // 2026-05-17 even in production).
    await page.evaluate(() => document.fonts.ready);

    // Dismiss EU cookie banner so it doesn't obscure ~25% of viewport.
    // Pattern: locator.click() with explicit timeout. .click() auto-waits for
    // the element to be attached AND visible AND enabled — more reliable than
    // the prior .isVisible() race (banner sometimes mounts at 2.5s+ on routes
    // with heavier above-fold JS like /nl/prijzen + /nl/gratis-intake).
    // Wrapped in try/catch so the run doesn't fail if banner is genuinely
    // absent (already-consented state, or route-specific banner suppression).
    try {
      await page
        .getByRole("button", { name: /alleen essentieel/i })
        .first()
        .click({ timeout: 5_000 });
      // Allow the slide-out animation + post-dismiss reflow.
      await page.waitForTimeout(500);
    } catch {
      // Banner not present within 5s — proceed.
    }

    // Final breath for any animation/lazy-load settle.
    await page.waitForTimeout(500);

    const outDir = path.join("playwright-screenshots", deviceName);
    fs.mkdirSync(outDir, { recursive: true });

    // Two screenshots per route:
    //   - <slug>.png         → viewport-only (393×852 on iPhone) — readable
    //                          detail; what visitors see on first paint
    //   - <slug>-fullpage.png → entire scrollable page — layout audit
    //
    // Viewport-only is the audit primary because Claude/operator can read it
    // at full resolution. fullPage is secondary for layout/below-fold review.
    await page.screenshot({
      path: path.join(outDir, `${route.slug}.png`),
      fullPage: false,
    });
    await page.screenshot({
      path: path.join(outDir, `${route.slug}-fullpage.png`),
      fullPage: true,
    });
  });
}

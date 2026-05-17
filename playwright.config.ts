import { defineConfig, devices } from "@playwright/test";

/**
 * Mobile screenshot harness — shipped 2026-05-17.
 *
 * Born from operator's "is there a tool to simulate phone well?" question
 * after Chrome MCP couldn't actually emulate iPhone viewport (resize_window
 * doesn't change window.innerWidth or DPR).
 *
 * Headless Chrome with --user-agent + --window-size catches some bugs
 * (caught the PRIVATE GYM hero clip the same day) but lacks:
 *   - real touch events (some bugs only repro on tap, not click)
 *   - proper DPR=3 rendering (catches retina sub-pixel issues)
 *   - per-device profile matrix in one run
 *
 * Playwright fills those gaps. Three device profiles cover the long tail
 * of fleet visitors (per Plausible last-30d device split):
 *   - iPhone 14 Pro     → ~45% of mobile traffic (iOS Safari)
 *   - Pixel 7           → ~35% of mobile traffic (Android Chrome)
 *   - iPad Mini         → tablet (~5% of all traffic, but conversion-rich)
 *
 * Run:  npm run mobile          (audits production sculptclub.nl)
 *       npm run mobile:local    (audits http://localhost:3000)
 *       npm run mobile:headed   (watch the browser run live, debugging)
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    baseURL: process.env.PW_BASE_URL ?? "https://sculptclub.nl",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    // Force consistent locale so cookie banner copy + brand strings match
    // what real Dutch visitors see (matches /nl prefix routing).
    locale: "nl-NL",
    timezoneId: "Europe/Amsterdam",
  },
  projects: [
    { name: "iphone-14-pro", use: { ...devices["iPhone 14 Pro"] } },
    { name: "pixel-7",       use: { ...devices["Pixel 7"] } },
    { name: "ipad-mini",     use: { ...devices["iPad Mini"] } },
  ],
});

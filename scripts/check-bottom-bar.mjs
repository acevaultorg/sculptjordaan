#!/usr/bin/env node
// Quick one-off mobile screenshot that scrolls past 60vh first so the
// sticky bottom CTA bar reveals (it's hidden until scroll passes that
// threshold). Used 2026-05-19 to verify the integrated-WhatsApp swap on
// production.
//
// Output: /tmp/sc-bar-<slug>.png per route. Read tool can view them.
// Usage: node scripts/check-bottom-bar.mjs

import { chromium, devices } from "@playwright/test";

const ROUTES = [
  { slug: "home", url: "https://sculptclub.nl/" },
  { slug: "trainer-hub", url: "https://sculptclub.nl/nl/vind-jouw-personal-trainer" },
  { slug: "studio-huren", url: "https://sculptclub.nl/nl/studio-huren" },
];

const browser = await chromium.launch();
for (const { slug, url } of ROUTES) {
  const ctx = await browser.newContext({ ...devices["iPhone 14 Pro"], locale: "nl-NL" });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => document.fonts.ready);
  // dismiss cookie banner if present
  try {
    await page.getByRole("button", { name: /alleen essentieel/i }).first().click({ timeout: 3000 });
    await page.waitForTimeout(400);
  } catch {}
  // scroll past 60vh so the sticky bar reveals
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 1.2 }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: `/tmp/sc-bar-${slug}.png`, fullPage: false });
  console.log(`✓ /tmp/sc-bar-${slug}.png`);
  await ctx.close();
}
await browser.close();

// One-off verification: sticky mobile CTA bar + cookie-banner minimize
// on the free-trial + summer-deal pages. Run: node scripts/verify-sticky-bars.mjs [baseUrl]
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3999";
const results = [];
const ok = (name, pass, extra = "") => {
  results.push({ name, pass, extra });
  console.log(`${pass ? "✓" : "✗"} ${name}${extra ? " — " + extra : ""}`);
};

const browser = await chromium.launch({ channel: "chrome" });
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
const page = await ctx.newPage();

async function scan(path, expectLabel, expectAnchor) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  // Cookie banner visible initially
  const banner = page.locator('div[role="dialog"][aria-label="Cookies"]');
  ok(`${path} cookie banner shows`, await banner.isVisible());

  // Sticky bar hidden at top (pre-scroll)
  const bar = page.locator('[data-cta="' + expectLabel.cta + '"]');
  const barWrap = page.locator('div.fixed.bottom-0.z-40');
  const hiddenAtTop = !(await barWrap.first().isVisible()) || (await barWrap.first().evaluate(el => getComputedStyle(el).opacity)) === "0";
  ok(`${path} bar hidden at top`, hiddenAtTop);

  // Scroll deep → banner minimizes to chip, bar appears
  await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2, behavior: "instant" }));
  await page.waitForTimeout(700);
  ok(`${path} cookie banner minimized after scroll`, !(await banner.isVisible()));
  const chip = page.locator('button[aria-label*="Cookie"]');
  ok(`${path} cookie chip visible`, await chip.isVisible());
  ok(`${path} sticky bar visible with CTA`, await bar.isVisible(), await bar.textContent().catch(() => ""));

  // Chip reopens banner; further scroll re-minimizes it (delta-based)
  await chip.click();
  await page.waitForTimeout(400);
  ok(`${path} chip reopens banner`, await banner.isVisible());
  await page.evaluate(() => window.scrollBy({ top: 450, behavior: "instant" }));
  await page.waitForTimeout(600);
  ok(`${path} banner re-minimizes on further scroll`, !(await banner.isVisible()));

  if (expectAnchor) {
    // Scroll DEEP (past the #book card) so the anchor is out of view and the
    // bar is interactive, then tap → scrolls back to #book → bar hides.
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight * 0.6, behavior: "instant" }));
    await page.waitForTimeout(600);
    ok(`${path} bar interactive deep on page`, await bar.evaluate(el => {
      const w = el.closest("div.fixed");
      return getComputedStyle(w).opacity === "1" && getComputedStyle(w).pointerEvents !== "none";
    }));
    await bar.click();
    await page.waitForTimeout(1000);
    const anchorVisible = await page.locator(expectAnchor).evaluate(el => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.75 && r.bottom > 0;
    });
    ok(`${path} bar scrolls to ${expectAnchor}`, anchorVisible);
    await page.waitForTimeout(600);
    const barGone = (await barWrap.first().evaluate(el => getComputedStyle(el).opacity)) === "0";
    ok(`${path} bar hides when anchor in view`, barGone);
  } else {
    const href = await bar.getAttribute("href");
    ok(`${path} bar links to Acuity tryout`, /acuityscheduling\.com/.test(href || ""), href || "");
  }
  await ctx.clearCookies();
}

await scan("/en/studio-rental/free-trial", { cta: "mobile-cta-freetrial-book" }, "#book");
await scan("/nl/studio-huren/gratis-test", { cta: "mobile-cta-freetrial-book" }, "#book");
await scan("/en/open-gym/unlimited-summer-deal", { cta: "mobile-cta-summerdeal-tryout" }, null);
await scan("/nl/open-gym/onbeperkt-zomerdeal", { cta: "mobile-cta-summerdeal-tryout" }, null);

// Content presence checks (video, map, reviews)
for (const p of ["/en/open-gym/unlimited-summer-deal", "/en/studio-rental/free-trial"]) {
  await page.goto(BASE + p, { waitUntil: "networkidle" });
  const html = await page.content();
  if (p.includes("summer-deal")) ok(`${p} canal video present`, html.includes("opengym-canal"));
  ok(`${p} map present`, html.includes("maps.google.com") || html.includes("output=embed"));
  ok(`${p} reviews present`, html.includes("Pien") || html.includes("Bryan"));
}

await browser.close();
const fails = results.filter(r => !r.pass);
console.log(`\n${results.length - fails.length}/${results.length} passed`);
process.exit(fails.length ? 1 : 0);

#!/usr/bin/env node
/**
 * check-deal-honesty.mjs — stop the site claiming a deadline it isn't keeping.
 *
 * WHY THIS EXISTS
 * `openGymSummerDeal.endDate` is a DISPLAY field. It appends ", t/m <date>" /
 * ", until <date>" to the offer line — it does NOT switch the deal off. Only
 * `active:false` does that. The config says endDate must be "a REAL operator-set
 * date … never faked", which relies on someone remembering to flip `active` on
 * the day. Miss that and the site advertises a deadline it has already blown
 * past: textbook fake urgency, forbidden by CLAUDE.md ("no fake scarcity") and
 * by I-23. This makes remembering mechanical instead of a promise.
 *
 * HARD FAIL  active + endDate in the past  → an unambiguous false claim.
 * WARN ONLY  a seasonal label out of season → a judgement call for the operator,
 *            so it must never block an unrelated deploy.
 *
 * Usage: npm run check:deal      (exit 1 = the site would ship a false deadline)
 */
import fs from "node:fs";

const SRC = "src/config/acuity.ts";
const t = fs.readFileSync(SRC, "utf8");
const block = t.slice(t.indexOf("export const openGymSummerDeal"));
const decl = block.slice(0, block.indexOf("}"));

const active = /active:\s*true/.test(decl);
const endRaw = decl.match(/endDate:\s*"([^"]+)"/);
const problems = [];
const warnings = [];

if (active && endRaw) {
  const end = Date.parse(endRaw[1]);
  if (Number.isNaN(end)) {
    problems.push(`endDate "${endRaw[1]}" is not a parseable date.`);
  } else if (Date.now() > end) {
    problems.push(
      `endDate ${endRaw[1]} has PASSED but active is still true.\n` +
        `      The site is advertising a deadline it did not keep.\n` +
        `      Fix: set active:false, or move endDate, or clear it to null.`,
    );
  }
}

// Seasonal label sanity — warn only. NH summer ≈ Jun-Aug (months 6-8).
// Scans the actual deal copy (2026-09-14: labels were relabelled to the
// time-neutral "Introductieprijs" / "Intro offer"), so it only warns when a
// season word is really on a deal surface out of season.
const month = new Date().getMonth() + 1;
if (active && (month < 6 || month > 8)) {
  const DEAL_FILES = [
    "src/app/nl/open-gym/page.tsx", "src/app/en/open-gym/page.tsx",
    "src/app/nl/open-gym/onbeperkt-zomerdeal/page.tsx", "src/app/en/open-gym/unlimited-summer-deal/page.tsx",
    "src/app/nl/prijzen/page.tsx", "src/app/en/pricing/page.tsx",
  ];
  const SEASON = /["'`>]\s*(Zomeractie|Zomeraanbieding|Zomerdeal|Summer(?: deal| offer)?)\b|deze zomer|this summer/;
  const hits = DEAL_FILES.filter((f) => fs.existsSync(f) && SEASON.test(fs.readFileSync(f, "utf8")));
  if (hits.length) {
    warnings.push(
      `Deal is active in month ${month}, but a seasonal label is still on a deal surface:\n` +
        hits.map((f) => `      - ${f}`).join("\n") +
        `\n      Outside Jun-Aug that reads as stale. Not blocking.`,
    );
  }
}

for (const w of warnings) console.warn(`\n⚠️  check-deal-honesty: ${w}\n`);
if (problems.length) {
  console.error(`\n❌ check-deal-honesty FAILED (${SRC}):`);
  for (const p of problems) console.error(`   • ${p}`);
  console.error("");
  process.exit(1);
}
console.log("✓ check-deal-honesty: no false deadline.");

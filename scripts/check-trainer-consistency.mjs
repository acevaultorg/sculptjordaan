#!/usr/bin/env node
/**
 * Trainer roster consistency check (runs as prebuild step).
 *
 * Verifies that every trainer in src/config/trainers.ts is also present in:
 *   - public/llms.txt § Trainers section
 *   - src/app/sitemap-ai.xml/route.ts (both NL + EN slug variants)
 *   - functions/_middleware.ts    (prefix-less alias, both locales)
 *
 * Why: rounds 14 + 15 of the 2026-05-07 audit found that Gezina + Joey were
 * missing from llms.txt + sitemap-ai.xml even though they had pages and were
 * in trainers.ts. The drift had silently propagated to AI-engine answers.
 * This check makes that drift class fail loudly at build time.
 *
 * Exit codes:
 *   0 — all canonical surfaces in sync
 *   1 — drift detected (build fails)
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

const TRAINERS_TS = join(REPO, "src", "config", "trainers.ts");
const LLMS_TXT = join(REPO, "public", "llms.txt");
const SITEMAP_AI = join(REPO, "src", "app", "sitemap-ai.xml", "route.ts");
const MIDDLEWARE = join(REPO, "functions", "_middleware.ts");

// Extract the canonical roster from trainers.ts via regex on the slug fields.
// Pattern: `slug: {\n      nl: "plan-gratis-intake-met-X",\n      en: "plan-free-intro-with-X",`
function extractTrainers() {
  const content = readFileSync(TRAINERS_TS, "utf8");
  const trainers = [];
  // Match name + slug pairs in order
  const blockRe = /name:\s*"([^"]+)",[\s\S]{0,400}?slug:\s*\{\s*nl:\s*"([^"]+)",\s*en:\s*"([^"]+)"/g;
  for (const m of content.matchAll(blockRe)) {
    trainers.push({ name: m[1], nlSlug: m[2], enSlug: m[3] });
  }
  return trainers;
}

function main() {
  const roster = extractTrainers();

  if (roster.length === 0) {
    console.error("❌ Could not parse any trainers from src/config/trainers.ts");
    process.exit(1);
  }

  const llms = readFileSync(LLMS_TXT, "utf8");
  const sitemapAi = readFileSync(SITEMAP_AI, "utf8");
  const middleware = readFileSync(MIDDLEWARE, "utf8");

  const errors = [];

  for (const t of roster) {
    // llms.txt — name should appear in the Trainers section as "- {name} —"
    const llmsPattern = new RegExp(`^- ${t.name}\\s+—`, "m");
    if (!llmsPattern.test(llms)) {
      errors.push(
        `  • ${t.name} missing from public/llms.txt § Trainers (expected line: "- ${t.name} — ...")`,
      );
    }

    // sitemap-ai.xml — both NL + EN slugs should appear
    if (!sitemapAi.includes(t.nlSlug)) {
      errors.push(
        `  • /nl/${t.nlSlug} missing from src/app/sitemap-ai.xml/route.ts`,
      );
    }
    if (!sitemapAi.includes(t.enSlug)) {
      errors.push(
        `  • /en/${t.enSlug} missing from src/app/sitemap-ai.xml/route.ts`,
      );
    }

    // functions/_middleware.ts — the PREFIX-LESS alias must exist for both locales.
    // Trainer booking pages are the highest-intent URLs on the site, and without
    // the locale prefix they 404. On 2026-08-26 GSC surfaced
    // /plan-free-intro-with-andrea/ as a 404; a live sweep found 18 of 26 dead
    // (5 NL never added, all 13 EN never added).
    //
    // Check the MIDDLEWARE, not public/_redirects: CF Pages only honours roughly
    // the first 100 rules of _redirects, so with 375 rules that file is a partial
    // fast path and a rule added there alone is silently inert. Adding these to
    // _redirects and deploying was exactly the mistake made while fixing this —
    // the live re-test caught it. The middleware EXACT map is the source of truth.
    for (const [locale, slug] of [["nl", t.nlSlug], ["en", t.enSlug]]) {
      const rule = `"/${slug}":["/${locale}/${slug}",301]`;
      if (!middleware.includes(rule)) {
        errors.push(
          `  • prefix-less alias missing from functions/_middleware.ts EXACT — add: ${rule}`,
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error(
      `\n❌ Trainer roster consistency check FAILED (${errors.length} drift${errors.length === 1 ? "" : "s"}):\n`,
    );
    errors.forEach((e) => console.error(e));
    console.error(
      `\n  ${roster.length} trainer${roster.length === 1 ? "" : "s"} in src/config/trainers.ts:`,
    );
    roster.forEach((t) => console.error(`    - ${t.name}`));
    console.error(
      "\n  See the comment at the top of src/config/trainers.ts for the canonical update checklist.\n",
    );
    process.exit(1);
  }

  console.log(
    `✓ Trainer roster consistency: ${roster.length} trainers, all surfaces in sync (llms.txt + sitemap-ai.xml)`,
  );
}

main();

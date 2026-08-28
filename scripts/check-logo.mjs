#!/usr/bin/env node
/**
 * check-logo.mjs — fail the build if anything draws the SculptClub wordmark as TEXT.
 *
 * WHY THIS EXISTS
 * On 2026-08-26 social frames shipped to a live TikTok post with the logo set as
 * type — `<div class="mark">SCULPTCLUB</div>` in Syne 800, letter-spacing .24em.
 * The real mark is public/images/logo-sculptclub.svg: TWO words, "SCULPT CLUB",
 * a heavy custom grotesque with tight spacing. Operator: "dont make the logo
 * mistake in the future! very important".
 *
 * The logo is a FILE, never type. This makes that mechanical instead of a promise.
 *
 * Usage: npm run check:logo      (exit 1 = a violation is present)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["scripts", "src", "public/social"];
const SCAN_EXT = new Set([".mjs", ".js", ".jsx", ".ts", ".tsx", ".py", ".html", ".css"]);
const SKIP = /node_modules|\.next|\/out\/|\.git|\.image-backups|check-logo\.mjs/;

/**
 * The wordmark is UPPERCASE — that is what separates the logo from the brand
 * NAME. "SculptClub" in a byline, a legal page or body copy is correct prose and
 * must never be flagged; a guard that cries wolf on 60 blog posts gets disabled,
 * which is worse than no guard. Case-SENSITIVE on purpose.
 */
const WORDMARK = /\bSCULPT ?CLUB\b/;

/**
 * Calls that RASTERISE TEXT. A wordmark on one of these lines means someone is
 * drawing the logo instead of embedding it.
 */
const DRAWS_TEXT = [
  /\.text\s*\(/,                     // PIL: d.text((x,y), 'SCULPTCLUB', font=...)
  /fillText\s*\(|strokeText\s*\(/,   // canvas
  /<text[\s>]/i,                     // raw SVG <text>
  /class=["'][^"']*\bmark\b[^"']*["']\s*>\s*SCULPT/i, // <div class="mark">SCULPT…
  />\s*SCULPT\s*CLUB\s*</i,          // any element whose text node IS the wordmark
  />\s*SCULPTCLUB\s*</i,
];

/** A line that is purely a comment is documentation, not a render. */
const IS_COMMENT = /^\s*(\/\/|\/\*|\*|#|<!--)/;

const violations = [];

function walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (SKIP.test(full)) continue;
    if (e.isDirectory()) { walk(full); continue; }
    if (!SCAN_EXT.has(path.extname(e.name))) continue;

    const lines = fs.readFileSync(full, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (IS_COMMENT.test(line)) return;
      // Explicit, justified opt-out for the brand NAME used as type (a column
      // label, an eyebrow) rather than the logo. Must carry a reason.
      const prev = i > 0 ? lines[i - 1] : "";
      if (/logo-check:allow/.test(line) || /logo-check:allow/.test(prev)) return;
      if (!WORDMARK.test(line)) return;
      if (DRAWS_TEXT.some((re) => re.test(line))) {
        violations.push({
          file: path.relative(ROOT, full),
          line: i + 1,
          text: line.trim().slice(0, 130),
        });
      }
    });
  }
}

for (const d of SCAN_DIRS) walk(path.join(ROOT, d));

// The real asset must also still exist — a correct reference to a missing file
// ships a frame with no logo at all.
const ASSET = path.join(ROOT, "public/images/logo-sculptclub.svg");
if (!fs.existsSync(ASSET)) {
  console.error("✗ MISSING: public/images/logo-sculptclub.svg — the canonical wordmark is gone.");
  process.exit(1);
}

if (violations.length) {
  console.error("\n✗ LOGO DRAWN AS TEXT — the wordmark is a FILE, never type.\n");
  for (const v of violations) console.error(`  ${v.file}:${v.line}\n    ${v.text}\n`);
  console.error("  Fix: embed public/images/logo-sculptclub.svg as an <img> (or PIL paste).");
  console.error("  Dark backgrounds: filter:invert(1) — the source art is near-black.");
  console.error("  Scope the CSS '.f img.mark', NOT '.mark' — '.f img' wins on specificity");
  console.error("  and will full-bleed the logo cropped to its middle.\n");
  process.exit(1);
}

console.log("✓ logo: no text-drawn wordmark found; canonical asset present.");

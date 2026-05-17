#!/usr/bin/env node
// scripts/build-tiktok-avatar.mjs
// Builds public/images/tiktok-avatar.png — 1080×1080 social avatar showing
// the full SCULPT CLUB wordmark in a 2-line stacked layout. Operator
// directive 2026-05-17: full "SculptClub" wordmark, NOT the "sc" mark.
//
// Why 2-line stacked: source wordmark is 2560×199 (13:1 aspect). At single-line
// on 1080×1080 canvas it would be 900×70 → 7% canvas height → unreadable at
// TikTok's ~96px circular crop display. Splitting at the inter-word gap
// (column 1534, found via pixel scan) gives two ~127px-tall lines = 24% canvas
// height covered → ~11px text height at 96px display → readable.
//
// Source: public/images/logo-sculptclub.png (black wordmark, transparent bg)
//   "SCULPT" spans columns 0-1486 (1486×199)
//   gap     spans columns 1486-1582 (97px wide)
//   "CLUB"  spans columns 1582-2559 (978×199)
//
// Output: public/images/tiktok-avatar.png (1080×1080, white wordmark on
// brand-dark #0A0A0A background, ready for TikTok/IG/X/LinkedIn avatar upload).

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC = path.join(root, "public/images/logo-sculptclub.png");
const OUT = path.join(root, "public/images/tiktok-avatar.png");

const SIZE = 1080;
// SculptClub Orange #EA580C — brand primary (refined 2026-05-17).
// Was #134DE1 SaaS-blue → #FF6B00 saturated-mandarin (same day) → #EA580C
// burnt-tangerine (Tailwind orange-600). #EA580C reads more "premium-tool"
// vs #FF6B00 "consumer-energy" — matches 90%-trainer-rental revenue model +
// BRAND-STRATEGY.md "darkroom + music-studio + after-hours" DNA. Penguin
// Classics + Hermès lineage. Pairs gracefully with Tailwind orange-50→950.
// Black-on-#EA580C = 5.41:1 (passes WCAG AA + AAA Large at avatar size).
const BG = { r: 234, g: 88, b: 12, alpha: 1 }; // #EA580C

// Pixel coordinates of "SCULPT" and "CLUB" within the 2560×199 source.
const SCULPT = { left: 0, top: 0, width: 1486, height: 199 };
const CLUB = { left: 1582, top: 0, width: 978, height: 199 };

// Target: each word ~190px tall on canvas (uniform letter-height across both
// lines). SCULPT is the longer word so it caps the width budget.
const TARGET_LETTER_HEIGHT = 190;
const HORIZONTAL_MARGIN = 70; // px each side
const MAX_WORD_WIDTH = SIZE - 2 * HORIZONTAL_MARGIN; // 940

// Compute scale based on SCULPT (longer word). If 190px tall makes it too wide,
// scale down so SCULPT fits within MAX_WORD_WIDTH.
const sculptAtTargetH = SCULPT.width * (TARGET_LETTER_HEIGHT / SCULPT.height);
const scale =
  sculptAtTargetH > MAX_WORD_WIDTH
    ? MAX_WORD_WIDTH / SCULPT.width
    : TARGET_LETTER_HEIGHT / SCULPT.height;

const sculptW = Math.round(SCULPT.width * scale);
const sculptH = Math.round(SCULPT.height * scale);
const clubW = Math.round(CLUB.width * scale);
const clubH = Math.round(CLUB.height * scale);

// Gap between the two lines: 20% of letter height = ~25-40px (visually clean).
const GAP = Math.round(sculptH * 0.2);

const totalBlockH = sculptH + GAP + clubH;
const blockTop = Math.round((SIZE - totalBlockH) / 2);

// Each word horizontally centered (SCULPT is wider so naturally fills more).
const sculptLeft = Math.round((SIZE - sculptW) / 2);
const clubLeft = Math.round((SIZE - clubW) / 2);
const sculptTop = blockTop;
const clubTop = blockTop + sculptH + GAP;

// Extract + invert + resize each half. negate() turns black wordmark to white
// so it pops on the dark canvas. ensureAlpha keeps the transparent background.
const sculptBuf = await sharp(SRC)
  .extract(SCULPT)
  .ensureAlpha()
  .resize({ width: sculptW })
  .toBuffer();

const clubBuf = await sharp(SRC)
  .extract(CLUB)
  .ensureAlpha()
  .resize({ width: clubW })
  .toBuffer();

await sharp({
  create: { width: SIZE, height: SIZE, channels: 4, background: BG },
})
  .composite([
    { input: sculptBuf, top: sculptTop, left: sculptLeft },
    { input: clubBuf, top: clubTop, left: clubLeft },
  ])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(
  `tiktok-avatar.png · ${SIZE}×${SIZE}\n` +
    `  SCULPT: ${sculptW}×${sculptH} at (${sculptLeft}, ${sculptTop})\n` +
    `  CLUB:   ${clubW}×${clubH} at (${clubLeft}, ${clubTop})\n` +
    `  block H: ${totalBlockH}px (gap ${GAP}px)\n` +
    `  → ${OUT}`,
);

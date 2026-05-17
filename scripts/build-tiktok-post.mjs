#!/usr/bin/env node
// scripts/build-tiktok-post.mjs (rev 2 — readstacks-grade craft)
//
// Design principles applied per industry-best social-card design:
//   1. 96px consistent edge margins (no text touches edges)
//   2. Generous whitespace between hierarchy levels
//   3. 3-tier typography hierarchy max (HERO · PRICE · META)
//   4. Brand wordmark as anchor (real PNG, not rendered text)
//   5. Single focal message (Huur de Studio €12/uur · 0% commissie)
//   6. High contrast (AA Large minimum on every text/bg pair)
//   7. Photo + dark gradient stacked layer model
//
// Outputs (all 1080×1920 vertical TikTok-spec):
//   public/social/best-tiktok-post.png       (slide 1 · main offer)
//   public/social/best-tiktok-post-2.png     (slide 2 · USP detail)
//   public/social/best-tiktok-post-3.png     (slide 3 · location pitch)
//
// Phone workflow:
//   Operator opens sculptclub.nl/social/post.html → downloads → posts to TikTok.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const STUDIO_OVERVIEW = path.join(root, "public/images/studio/studio-overview.jpeg");
const STUDIO_INTERIOR = path.join(root, "public/images/studio/studio-interior-2.jpeg");
const STUDIO_CANAL = path.join(root, "public/images/studio/canal-view-doors.jpg");
const WORDMARK_PNG = path.join(root, "public/images/logo-sculptclub.png");

const OUT_DIR = path.join(root, "public/social");
await mkdir(OUT_DIR, { recursive: true });

const W = 1080;
const H = 1920;
const MARGIN = 96; // consistent edge spacing
const CONTENT_W = W - MARGIN * 2; // 888px usable width

// Brand palette (unified warm-neutral)
const BRAND = "#EA580C";
const BRAND_LIGHT = "#F97316";
const NEAR_BLACK = "#0E0C0A";
const WARM_OFF_WHITE = "#EDE5DA";
const WARM_MUTED = "#A69D98";

// Prepare the SCULPT CLUB wordmark, recolored to warm-off-white, sized to fit
// max 480px wide (fits comfortably in 888px content width with generous side air)
const wordmarkWhite = await sharp(WORDMARK_PNG)
  .ensureAlpha()
  .negate({ alpha: false }) // black wordmark → white wordmark for dark bg
  .resize({ width: 480 })
  .toBuffer({ resolveWithObject: true });

// Build one slide given a base photo + content config
async function buildSlide(opts) {
  const {
    out,
    photoPath,
    eyebrow,
    hero,
    price,
    usp,
    cta,
  } = opts;

  // 1. Photo base: full-bleed cover, slight darken for text-zone contrast
  const photoBuf = await sharp(photoPath)
    .resize({ width: W, height: H, fit: "cover", position: "center" })
    .modulate({ brightness: 0.75, saturation: 0.92 })
    .toBuffer();

  // 2. SVG overlay: gradients + typography
  const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0B0907" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0B0907" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="botfade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0B0907" stop-opacity="0"/>
        <stop offset="35%" stop-color="#0B0907" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#0B0907" stop-opacity="0.95"/>
      </linearGradient>
    </defs>

    <!-- Top fade for wordmark legibility -->
    <rect x="0" y="0" width="${W}" height="${H * 0.25}" fill="url(#topfade)"/>

    <!-- Bottom fade for text legibility (covers lower 55% of canvas) -->
    <rect x="0" y="${H * 0.45}" width="${W}" height="${H * 0.55}" fill="url(#botfade)"/>

    <!-- EYEBROW · ALL-CAPS · brand-orange · tracking-wide -->
    <text
      x="${W / 2}"
      y="1180"
      font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-weight="700"
      font-size="44"
      letter-spacing="10"
      text-anchor="middle"
      fill="${BRAND}"
    >${eyebrow}</text>

    <!-- HERO HEADLINE · warm-off-white · large but balanced -->
    <text
      x="${W / 2}"
      y="1340"
      font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-weight="900"
      font-size="108"
      letter-spacing="-2"
      text-anchor="middle"
      fill="${WARM_OFF_WHITE}"
    >${hero}</text>

    <!-- PRICE · BIG · brand-orange · the single focal element -->
    <text
      x="${W / 2}"
      y="1530"
      font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-weight="900"
      font-size="180"
      letter-spacing="-6"
      text-anchor="middle"
      fill="${BRAND}"
    >${price}</text>

    <!-- USP · warm-off-white · supporting -->
    <text
      x="${W / 2}"
      y="1660"
      font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-weight="600"
      font-size="48"
      letter-spacing="0.5"
      text-anchor="middle"
      fill="${WARM_OFF_WHITE}"
    >${usp}</text>

    <!-- CTA + URL · warm-muted · small -->
    <text
      x="${W / 2}"
      y="1770"
      font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-weight="500"
      font-size="34"
      letter-spacing="3"
      text-anchor="middle"
      fill="${WARM_MUTED}"
    >${cta}</text>
  </svg>`;

  // 3. Composite: photo → overlay → wordmark
  await sharp(photoBuf)
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      {
        // Wordmark centered top, with consistent MARGIN from top edge
        input: wordmarkWhite.data,
        top: 140,
        left: Math.round((W - wordmarkWhite.info.width) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`✓ ${path.basename(out)} · ${W}×${H}`);
}

// === SLIDE 1 · Main offer (trainer-acquisition primary) ===
await buildSlide({
  out: path.join(OUT_DIR, "best-tiktok-post.png"),
  photoPath: STUDIO_OVERVIEW,
  eyebrow: "VOOR TRAINERS",
  hero: "Huur de Studio",
  price: "€12 / uur",
  usp: "0% commissie · geen contract",
  cta: "Probeer gratis · sculptclub.nl",
});

// === SLIDE 2 · USP focus (why this beats other studios) ===
await buildSlide({
  out: path.join(OUT_DIR, "best-tiktok-post-2.png"),
  photoPath: STUDIO_INTERIOR,
  eyebrow: "ZERO COMMISSIE",
  hero: "Houd 100%",
  price: "€12 / uur",
  usp: "Jouw klanten · jouw tarief · jouw studio",
  cta: "sculptclub.nl/voor-trainers",
});

// === SLIDE 3 · Location pitch (jordaan canal-side) ===
await buildSlide({
  out: path.join(OUT_DIR, "best-tiktok-post-3.png"),
  photoPath: STUDIO_CANAL,
  eyebrow: "AAN DE GRACHT",
  hero: "Jordaan",
  price: "€12 / uur",
  usp: "Privé studio · 06:30 – 22:00",
  cta: "sculptclub.nl · Egelantiersgracht 424",
});

console.log("\n✅ 3 carousel slides built. Phone-download: /social/post.html");

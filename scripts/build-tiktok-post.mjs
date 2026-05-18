#!/usr/bin/env node
// scripts/build-tiktok-post.mjs (rev 3 — directory-per-post layout)
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
// Usage:
//   node scripts/build-tiktok-post.mjs [post-id]
//   (defaults to "trainer-pitch-001" when no arg passed)
//
// Outputs land in   public/social/<post-id>/  alongside that post's index.html:
//   tiktok-main-offer.png    instagram-main-offer.png   (1080×1920 vs 1080×1080)
//   tiktok-usp-focus.png     instagram-usp-focus.png
//   tiktok-location.png      instagram-location.png
//
// Phone workflow:
//   Operator opens sculptclub.nl/social/<post-id>/ → downloads → posts to TikTok / Instagram.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const STUDIO_OVERVIEW = path.join(root, "public/images/studio/studio-overview.jpeg");
const STUDIO_INTERIOR = path.join(root, "public/images/studio/studio-interior-2.jpeg");
const STUDIO_CANAL = path.join(root, "public/images/studio/canal-view-doors.jpg");
// Consumer-pitch photo set (intake-pitch-001):
//   PT_SESSION_BARBELL  → trainer + client mid-set (matches "1-op-1 PT" framing)
//   TRAINING_JOY        → smiling-during-training (matches "8 trainers · 5.0 ★" social proof)
//   STUDIO_CANAL reused → location anchor close (same brand recognition cue as
//                         trainer-pitch-001 slide 3 — canal-view-doors becomes the
//                         "every SculptClub post closes on the door" brand signature)
const PT_SESSION_BARBELL = path.join(root, "public/images/studio/pt-session-barbell.jpg");
const TRAINING_JOY = path.join(root, "public/images/studio/training-dumbbells-joy.jpg");
const WORDMARK_PNG = path.join(root, "public/images/logo-sculptclub.png");

// Post identifier — drives output directory under public/social/<post-id>/.
// Override via CLI: `node scripts/build-tiktok-post.mjs intake-pitch-001`.
// Available posts: see POSTS map further down.
const POST_ID = process.argv[2] || "trainer-pitch-001";
const OUT_DIR = path.join(root, "public/social", POST_ID);
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

// Build one slide given a base photo + content config + target dimensions
async function buildSlide(opts) {
  const {
    out,
    photoPath,
    eyebrow,
    hero,
    price,
    usp,
    cta,
    heroScale = 1,         // per-slide hero-text scale (1.0 = full 108px on 9:16)
    width = W,
    height = H,
  } = opts;

  // 1. Photo base: full-bleed cover, slight darken for text-zone contrast
  const photoBuf = await sharp(photoPath)
    .resize({ width, height, fit: "cover", position: "center" })
    .modulate({ brightness: 0.72, saturation: 0.92 })
    .toBuffer();

  // Compute positions proportionally so both vertical (9:16) + square (1:1) work
  const cx = width / 2;
  const isSquare = Math.abs(width - height) < 50;

  // Content zone vertical positions (relative to canvas height)
  const wordmarkTop = isSquare ? 75 : 140;
  const eyebrowY = isSquare ? height * 0.45 : 1180;
  const heroY = isSquare ? height * 0.55 : 1340;
  const priceY = isSquare ? height * 0.72 : 1530;
  const uspY = isSquare ? height * 0.82 : 1660;
  const ctaY = isSquare ? height * 0.92 : 1770;

  // Font scale: square slides have less vertical room, scale headlines smaller
  const scale = isSquare ? 0.65 : 1;

  // 2. SVG overlay: gradients + typography
  const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
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

    <rect x="0" y="0" width="${width}" height="${height * 0.25}" fill="url(#topfade)"/>
    <rect x="0" y="${height * 0.4}" width="${width}" height="${height * 0.6}" fill="url(#botfade)"/>

    <text x="${cx}" y="${eyebrowY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="${Math.round(44 * scale)}" letter-spacing="${10 * scale}" text-anchor="middle" fill="${BRAND}">${eyebrow}</text>

    <text x="${cx}" y="${heroY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="900" font-size="${Math.round(108 * scale * heroScale)}" letter-spacing="-2" text-anchor="middle" fill="${WARM_OFF_WHITE}">${hero}</text>

    <text x="${cx}" y="${priceY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="900" font-size="${Math.round(180 * scale)}" letter-spacing="-6" text-anchor="middle" fill="${BRAND}">${price}</text>

    <text x="${cx}" y="${uspY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="${Math.round(48 * scale)}" letter-spacing="0.5" text-anchor="middle" fill="${WARM_OFF_WHITE}">${usp}</text>

    <text x="${cx}" y="${ctaY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="500" font-size="${Math.round(34 * scale)}" letter-spacing="3" text-anchor="middle" fill="${WARM_MUTED}">${cta}</text>
  </svg>`;

  // Resize wordmark proportionally for square slides (smaller)
  const wmTargetWidth = isSquare ? 280 : 480;
  const wmResized = await sharp(WORDMARK_PNG)
    .ensureAlpha()
    .negate({ alpha: false })
    .resize({ width: wmTargetWidth })
    .toBuffer({ resolveWithObject: true });

  // 3. Composite: photo → overlay → wordmark
  await sharp(photoBuf)
    .composite([
      { input: Buffer.from(overlaySvg), top: 0, left: 0 },
      {
        input: wmResized.data,
        top: wordmarkTop,
        left: Math.round((width - wmResized.info.width) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`✓ ${path.basename(out)} · ${width}×${height}`);
}

// Slide content — same copy used for both TT (9:16) + IG (1:1) variants.
// Keyed by POST_ID so one build script handles every post in the campaign series.
// Add a new post: append a new key here, then run `node scripts/build-tiktok-post.mjs <new-id>`.
const POSTS = {
  "trainer-pitch-001": [
    {
      name: "main-offer",
      photoPath: STUDIO_OVERVIEW,
      eyebrow: "VOOR TRAINERS",
      hero: "Huur de Studio",
      price: "€12 / uur",
      usp: "0% commissie · geen contract",
      cta: "Probeer gratis · sculptclub.nl",
    },
    {
      name: "usp-focus",
      photoPath: STUDIO_INTERIOR,
      // Was "ZERO COMMISSIE" — mixed English+Dutch and inconsistent with the caption
      // (which uses "0% commissie") + slide 1 USP (also "0% commissie"). "0% COMMISSIE"
      // matches both surfaces + reads pure Dutch.
      eyebrow: "0% COMMISSIE",
      // "Houd 100%" alone reads as a fragment in Dutch — "Houd 100% zelf"
      // makes the trainer-keeps-everything meaning explicit + complete.
      hero: "Houd 100% zelf",
      heroScale: 0.85,  // 14 chars (vs 9 in "Houd 100%") needs slight downscale to clear 96px edges
      price: "€12 / uur",
      usp: "Jouw klanten · jouw tarief · jouw studio",
      cta: "sculptclub.nl/voor-trainers",
    },
    {
      name: "location",
      photoPath: STUDIO_CANAL,
      eyebrow: "AAN DE GRACHT",
      hero: "Jordaan",
      price: "€12 / uur",
      usp: "Privé studio · 06:30 – 22:00",
      cta: "sculptclub.nl · Egelantiersgracht 424",
    },
  ],

  // 2026-05-17: consumer-side complement to trainer-pitch-001. Same brand
  // language + 3-slide arc + canal-door close. Different audience: consumers
  // considering PT, not ZZP-trainers looking for rental space.
  //
  // Slide arc:
  //   1. Hook + offer (1-op-1 PT, 100% gratis)
  //   2. Address objection + social proof (test eerst, 8 trainers, 5.0 ★)
  //   3. Location anchor + soft CTA (Jordaan · gratis · gracht-door brand cue)
  //
  // Funnel: TikTok/IG → sculptclub.nl/gratis-intake → WhatsApp/trainer-picker.
  "intake-pitch-001": [
    {
      name: "main-offer",
      // PT session photo (trainer + client) makes the "1-op-1" framing literal
      // before the eye even reads the hero text.
      photoPath: PT_SESSION_BARBELL,
      eyebrow: "🧡 EERSTE INTAKE",
      hero: "Probeer 1-op-1 PT",
      heroScale: 0.85,  // "Probeer 1-op-1 PT" = 17 chars; same downscale ratio
                        // as trainer-pitch slide 2 ("Houd 100% zelf" = 14 chars
                        // with same heroScale). Empirically clears 96px edges.
      price: "100% gratis",  // focal value — matches /nl/gratis-intake page hero
      usp: "45 min · in onze privé studio",
      cta: "sculptclub.nl/gratis-intake",
    },
    {
      name: "no-pressure",
      photoPath: TRAINING_JOY,
      eyebrow: "GEEN VERPLICHTING",
      // "Test eerst. Beslis dan." addresses the #1 conversion objection in
      // boutique-fitness sales (commitment fear). Period-separator beats
      // comma because it implies two equal-weight clauses, both reassuring.
      hero: "Test eerst. Beslis dan.",
      heroScale: 0.65,  // 23 chars → smaller heroScale needed than slide 1
      price: "8 trainers",  // focal — social proof number; matches site's
                            // "8 trainers" trust badge on /vind-jouw-personal-trainer
      usp: "Persoonlijk plan · 5.0 ★ Google",
      cta: "Geen contract · gratis annuleren",
    },
    {
      name: "location",
      photoPath: STUDIO_CANAL,
      eyebrow: "AAN DE GRACHT",
      hero: "In de Jordaan",
      heroScale: 0.95,  // 13 chars · slight downscale for clean side margins
      price: "Gratis",      // ties back to slide 1 focal (gratis = leitmotif)
      usp: "Egelantiersgracht 424 · 06:30 – 22:00",
      cta: "Plan je intake · sculptclub.nl",
    },
  ],
};

const slides = POSTS[POST_ID];
if (!slides) {
  console.error(`Unknown POST_ID: ${POST_ID}`);
  console.error(`Available: ${Object.keys(POSTS).join(", ")}`);
  process.exit(1);
}

// Build vertical (1080×1920) for TikTok feed + IG Reels/Stories
for (let i = 0; i < slides.length; i++) {
  await buildSlide({
    out: path.join(OUT_DIR, `tiktok-${slides[i].name}.png`),
    photoPath: slides[i].photoPath,
    eyebrow: slides[i].eyebrow,
    hero: slides[i].hero,
    heroScale: slides[i].heroScale,
    price: slides[i].price,
    usp: slides[i].usp,
    cta: slides[i].cta,
    width: W,
    height: H,
  });
}

// Build square (1080×1080) for Instagram Feed
for (let i = 0; i < slides.length; i++) {
  await buildSlide({
    out: path.join(OUT_DIR, `instagram-${slides[i].name}.png`),
    photoPath: slides[i].photoPath,
    eyebrow: slides[i].eyebrow,
    hero: slides[i].hero,
    heroScale: slides[i].heroScale,
    price: slides[i].price,
    usp: slides[i].usp,
    cta: slides[i].cta,
    width: 1080,
    height: 1080,
  });
}

console.log(`\n✅ ${slides.length} slides × 2 formats (TT vertical + IG square) = ${slides.length * 2} images built.`);
console.log(`Phone-download hub: /social/${POST_ID}/`);

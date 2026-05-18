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

// Open-Gym photo set (open-gym-pitch-001):
//   STUDIO_INTERIOR_1  → empty private studio shot (literal "your own gym" framing
//                        — visitors think "I could train there alone, no crowd")
//   TRAINING_BIKE_SMILE → cardio + smile · matches "accessible fun training" vibe
//                         of the broader Open Gym audience (less premium than PT)
const STUDIO_INTERIOR_1 = path.join(root, "public/images/studio/studio-interior-1.jpeg");
const TRAINING_BIKE_SMILE = path.join(root, "public/images/studio/training-bike-smile.jpg");
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

  // Premium-register escape hatch (2026-05-18): when `price` is empty/null,
  // skip the 180px-orange focal slot entirely and shift usp+cta up by ~130px
  // so the composition doesn't have a dead-air gap. Used when the slide's
  // value-prop is qualitative ("vrijblijvend", "privé", a confident statement)
  // rather than a competitive numeric price. Trainer-pitch-001 keeps the 180px
  // price slot (€12/uur IS the news for trainer audience); intake-pitch and
  // open-gym-pitch use the premium register (the giant "GRATIS" was reading as
  // Black Friday flyer, not boutique-Jordaan).
  const hasPrice = price != null && String(price).trim().length > 0;

  // Content zone vertical positions (relative to canvas height)
  const wordmarkTop = isSquare ? 75 : 140;
  const eyebrowY = isSquare ? height * 0.45 : 1180;
  const heroY = isSquare ? height * 0.55 : 1340;
  const priceY = isSquare ? height * 0.72 : 1530;
  // When no price slot, usp+cta move up into the void to fill the composition.
  const uspY = hasPrice
    ? (isSquare ? height * 0.82 : 1660)
    : (isSquare ? height * 0.72 : 1530);
  const ctaY = hasPrice
    ? (isSquare ? height * 0.92 : 1770)
    : (isSquare ? height * 0.82 : 1640);

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

    ${hasPrice ? `<text x="${cx}" y="${priceY}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="900" font-size="${Math.round(180 * scale)}" letter-spacing="-6" text-anchor="middle" fill="${BRAND}">${price}</text>` : ''}

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
  // 2026-05-18 v2 (premium-register rewrite per operator feedback): the v1
  // "GRATIS" at 180px orange read as Black Friday flyer, not boutique-Jordaan.
  // Equinox/Barry's-tier brands never lead with FREE in big type — they let
  // the architecture + one confident statement do the work. "Vrijblijvend"
  // replaces "gratis" wherever possible (same no-obligation promise, premium
  // register). Word "gratis" appears once per post (URL slug + CTA line), not
  // 180px-orange-screamed three times.
  "intake-pitch-001": [
    {
      name: "main-offer",
      photoPath: PT_SESSION_BARBELL,
      eyebrow: "PERSONAL TRAINING",
      // Two-stop confident hero. Says PT (audience signal) + Privé +
      // 1-op-1 (differentiators vs commercial gym group classes).
      hero: "Privé. 1-op-1.",
      heroScale: 0.85,
      price: "",  // premium register — empty = no 180px shout
      // Free is in here via "vrijblijvend" — premium synonym, no flyer feel.
      usp: "Eerste sessie vrijblijvend · 45 minuten",
      cta: "Plan je gratis intake · sculptclub.nl",
    },
    {
      name: "no-pressure",
      photoPath: TRAINING_JOY,
      // Social proof moves from 180px-orange focal to small eyebrow position.
      // Confident, not shouty. The "8 trainers · 5.0 ★" is positioning, not pitch.
      eyebrow: "8 TRAINERS · 5.0 ★ GOOGLE",
      hero: "Test eerst. Beslis dan.",
      heroScale: 0.65,
      price: "",
      usp: "Kracht · Voeding · Houding · Calisthenics",
      cta: "Geen contract · sculptclub.nl/gratis-intake",
    },
    {
      name: "location",
      photoPath: STUDIO_CANAL,
      eyebrow: "SCULPT CLUB · JORDAAN",
      // The address IS the value prop — gracht location, premium neighborhood,
      // adjacency to brand. No price-style focal needed; the address carries
      // brand weight by itself.
      hero: "Egelantiersgracht 424",
      heroScale: 0.7,
      price: "",
      usp: "Dagelijks 06:30 – 22:00 · privé studio",
      cta: "Plan je gratis intake · sculptclub.nl",
    },
  ],

  // 2026-05-18: third post in the series. Open Gym = low-friction entry
  // product (vs intake-pitch's PT = premium). Same brand chassis, broader
  // audience including DIY-lifters, training duos (max 3/slot), and
  // budget-conscious gym-shoppers.
  //
  // Slide arc:
  //   1. Hook (free first session · 60 min private studio)
  //   2. Substance (post-trial price · €7,25/session via 4-pack)
  //   3. Location anchor (canal door close — brand-consistent with prior posts)
  //
  // Funnel: TikTok/IG → sculptclub.nl/open-gym → "Gratis proefles boeken" CTA.
  // 2026-05-18 v2 (premium-register rewrite — same rationale as intake-pitch-001).
  // "Gratis" word-shouts removed; the cheap-vs-premium price (€7,25/sessie) stays
  // in the hero slot at hero size (108px), NOT 180px-orange focal. Real price is
  // OK to show — it's "GRATIS" the WORD at promo scale that reads cheap.
  "open-gym-pitch-001": [
    {
      name: "main-offer",
      photoPath: STUDIO_INTERIOR_1,
      eyebrow: "OPEN GYM",
      // Two-stop confident hero, mirrors intake-pitch slide 1.
      hero: "Solo trainen. Privé.",
      heroScale: 0.75,
      price: "",  // premium register
      usp: "60 min · max 3 personen · in de Jordaan",
      cta: "Eerste les vrijblijvend · sculptclub.nl/open-gym",
    },
    {
      name: "price-substance",
      photoPath: TRAINING_BIKE_SMILE,
      eyebrow: "OPEN GYM",
      // Price stays — but consolidated into hero size, not split between
      // hero "Vanaf €7,25" + 180px focal "/ sessie". One confident line.
      hero: "Vanaf €7,25 / sessie.",
      heroScale: 0.6,  // 22 chars including punctuation
      price: "",
      usp: "4 sessies · €29 / 4 weken · geen contract",
      cta: "Boek je proefles · sculptclub.nl",
    },
    {
      name: "location",
      photoPath: STUDIO_CANAL,
      eyebrow: "SCULPT CLUB · JORDAAN",
      // Same brand-anchor close as intake-pitch slide 3 — building visual
      // recognition across the series. Different CTA line per post.
      hero: "Egelantiersgracht 424",
      heroScale: 0.7,
      price: "",
      usp: "Dagelijks 06:30 – 22:00 · privé studio",
      cta: "Boek je proefles · sculptclub.nl",
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

#!/usr/bin/env node
// scripts/build-tiktok-post.mjs
// Builds public/social/best-tiktok-post.png — 1080×1920 vertical TikTok-spec
// post replicating the operator's 10.5K-view winning formula:
//   • Studio-floor photo as base (numbered rubber flooring = visual anchor)
//   • Bottom dark gradient for text readability
//   • Bold white overlay headline (huur de studio €12/uur)
//   • Brand-orange accent strip
//   • Trainer-acquisition focused (90% revenue model)
//
// Operator workflow:
//   1. iPhone Safari → https://sculptclub.nl/social/best-tiktok-post.png
//   2. Long-press → Add to Photos
//   3. TikTok app → "+" → Camera roll → pick this image → add music → post

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { mkdir } from "node:fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC = path.join(root, "public/images/studio/studio-overview.jpeg");
const OUT_DIR = path.join(root, "public/social");
const OUT = path.join(OUT_DIR, "best-tiktok-post.png");

await mkdir(OUT_DIR, { recursive: true });

const W = 1080;
const H = 1920;

// 1. Take studio photo, crop to 9:16 vertical, slight darken for text contrast
const studioBuf = await sharp(SRC)
  .resize({ width: W, height: H, fit: "cover", position: "center" })
  .modulate({ brightness: 0.65, saturation: 0.9 }) // darken for text legibility
  .toBuffer();

// 2. SVG overlay with bold typography + brand orange accent
const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <!-- Bottom dark gradient for text legibility -->
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="40%" stop-color="#000000" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.65"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Top brand-orange accent bar with SCULPT CLUB wordmark -->
  <rect x="0" y="0" width="${W}" height="120" fill="#EA580C"/>
  <text x="${W / 2}" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="56" letter-spacing="6" text-anchor="middle" fill="#0E0C0A">SCULPT CLUB</text>

  <!-- Top fade for separation -->
  <rect x="0" y="120" width="${W}" height="200" fill="url(#topfade)"/>

  <!-- Bottom fade for text area -->
  <rect x="0" y="${H * 0.5}" width="${W}" height="${H * 0.5}" fill="url(#fade)"/>

  <!-- Eyebrow / category tag -->
  <text x="${W / 2}" y="1100" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="42" letter-spacing="8" text-anchor="middle" fill="#EA580C">VOOR TRAINERS</text>

  <!-- Hero headline -->
  <text x="${W / 2}" y="1290" font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="120" letter-spacing="-2" text-anchor="middle" fill="#FFFFFF">HUUR DE STUDIO</text>

  <!-- Big price -->
  <text x="${W / 2}" y="1490" font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="200" letter-spacing="-4" text-anchor="middle" fill="#EA580C">€12/UUR</text>

  <!-- USP -->
  <text x="${W / 2}" y="1620" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="64" letter-spacing="2" text-anchor="middle" fill="#FFFFFF">0% COMMISSIE</text>

  <!-- CTA + URL -->
  <text x="${W / 2}" y="1740" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="48" letter-spacing="2" text-anchor="middle" fill="#FFFFFF">Probeer gratis</text>
  <text x="${W / 2}" y="1820" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="36" letter-spacing="3" text-anchor="middle" fill="#EA580C" opacity="0.95">sculptclub.nl · Jordaan</text>
</svg>`;

await sharp(studioBuf)
  .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`✓ best-tiktok-post.png · ${W}×${H} · ${OUT}`);

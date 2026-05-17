#!/usr/bin/env node
// scripts/build-pwa-icons.mjs
// Generates PWA icon set + favicon in SculptClub brand orange #EA580C.
//
// Output files (all brand-orange #EA580C with black wordmark/glyph):
//   public/images/icon-192.png  · 192×192 · SCULPT/CLUB stacked wordmark (Android home-screen)
//   public/images/icon-512.png  · 512×512 · SCULPT/CLUB stacked wordmark (Android home-screen large)
//   public/favicon.png          · 64×64   · "SC" monogram (browser tab — legible at small size)
//   public/apple-touch-icon.png · 180×180 · SCULPT/CLUB stacked wordmark (iOS home-screen)
//
// Sourcing: derives from public/images/tiktok-avatar.png which is already
// SCULPT/CLUB stacked on #EA580C orange. PWA icons reuse same source for
// brand consistency. Favicon uses a generated "SC" monogram via SVG since the
// stacked wordmark is illegible at 16-64px tab sizes.

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SOURCE_AVATAR = path.join(root, "public/images/tiktok-avatar.png");
const ICON_192 = path.join(root, "public/images/icon-192.png");
const ICON_512 = path.join(root, "public/images/icon-512.png");
const FAVICON_PNG = path.join(root, "public/favicon.png");
const APPLE_TOUCH = path.join(root, "public/apple-touch-icon.png");

// 1. icon-192 + icon-512 + apple-touch-icon: resize the 1080×1080 SCULPT/CLUB avatar
await sharp(SOURCE_AVATAR)
  .resize({ width: 192, height: 192, kernel: "lanczos3" })
  .png({ compressionLevel: 9 })
  .toFile(ICON_192);
console.log(`✓ icon-192.png · 192×192 · ${ICON_192}`);

await sharp(SOURCE_AVATAR)
  .resize({ width: 512, height: 512, kernel: "lanczos3" })
  .png({ compressionLevel: 9 })
  .toFile(ICON_512);
console.log(`✓ icon-512.png · 512×512 · ${ICON_512}`);

await sharp(SOURCE_AVATAR)
  .resize({ width: 180, height: 180, kernel: "lanczos3" })
  .png({ compressionLevel: 9 })
  .toFile(APPLE_TOUCH);
console.log(`✓ apple-touch-icon.png · 180×180 · ${APPLE_TOUCH}`);

// 2. Favicon: SINGLE bold "S" via SVG — redesign 2026-05-17 (rev 2).
// Reason: Google search results render favicon at ~20px circle-clipped. A
// 2-letter "SC" gets squished into illegible smudge at that size. A single
// big bold "S" filling the canvas reads instantly at any rendering size +
// keeps brand recognition (orange = SculptClub).
// Renders at 256x256 base for crisp downscaling to all favicon sizes.
// Letter fills ~75% of canvas (vs ~50% for two-letter SC) = much more
// visible at 16-20px tab/search-result size.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="#EA580C"/>
  <text x="128" y="190" font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="220" text-anchor="middle" fill="#0E0C0A" letter-spacing="-8">S</text>
</svg>`;

await sharp(Buffer.from(faviconSvg))
  .resize({ width: 256, height: 256 })
  .png({ compressionLevel: 9 })
  .toFile(FAVICON_PNG);
console.log(`✓ favicon.png · 256×256 single-S · ${FAVICON_PNG}`);

// Also generate explicit 48px (Google's preferred favicon spec is multiple of 48)
const FAVICON_48 = path.join(root, "public/favicon-48.png");
await sharp(Buffer.from(faviconSvg))
  .resize({ width: 48, height: 48 })
  .png({ compressionLevel: 9 })
  .toFile(FAVICON_48);
console.log(`✓ favicon-48.png · 48×48 (Google preferred) · ${FAVICON_48}`);

// Explicit 96px for Google search results (rendered at ~20-32px circle clip)
const FAVICON_96 = path.join(root, "public/favicon-96.png");
await sharp(Buffer.from(faviconSvg))
  .resize({ width: 96, height: 96 })
  .png({ compressionLevel: 9 })
  .toFile(FAVICON_96);
console.log(`✓ favicon-96.png · 96×96 · ${FAVICON_96}`);

// 3. Multi-resolution favicon.ico from favicon.png (browsers fall back to
// /favicon.ico when metadata icons aren't honored — Safari quirks, legacy).
// Uses `png-to-ico` via npx (no install needed); generates 16/24/32/48px ICO.
import { execSync } from "node:child_process";
const ICO_OUT = path.join(root, "public/favicon.ico");
execSync(`npx --yes png-to-ico "${FAVICON_PNG}" > "${ICO_OUT}"`, {
  stdio: "inherit",
});
console.log(`✓ favicon.ico · multi-res 16/24/32/48 · ${ICO_OUT}`);

console.log("\n✅ All PWA icons rebuilt on brand orange #EA580C.");

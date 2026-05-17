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

// 2. Favicon: generate "SC" monogram via SVG (legible at browser-tab 16-32px)
// At small sizes the stacked SCULPT/CLUB wordmark becomes unreadable smudge,
// so favicon uses single-line "SC" — Maximum legibility, brand-orange BG.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#EA580C" rx="10" ry="10"/>
  <text x="32" y="44" font-family="system-ui, -apple-system, Arial, sans-serif" font-weight="900" font-size="34" text-anchor="middle" fill="#0A0A0A" letter-spacing="-1">SC</text>
</svg>`;

await sharp(Buffer.from(faviconSvg))
  .png({ compressionLevel: 9 })
  .toFile(FAVICON_PNG);
console.log(`✓ favicon.png · 64×64 · ${FAVICON_PNG}`);

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

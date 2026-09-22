#!/usr/bin/env node
/**
 * Responsive image variants — pre-generate width-scaled WebP next to each source.
 *
 * WHY (measured 2026-09-22, live, 375px mobile viewport with DPR 2):
 *   The homepage shipped 2,022 KB of JPEG across 11 images, and 17 of its 18
 *   images had NO srcset at all — every phone downloaded the full-size file.
 *   Worst case: /images/studio/boutique-corner.jpg is 1440px wide / 426 KB and
 *   is rendered at 166 CSS px in the gallery. That is ~19x more pixels than the
 *   device can use. The images are already compressed (q80, long edge 1920, see
 *   optimize-images.mjs) — what was missing was RESOLUTION, not compression.
 *
 * WHY NOT the obvious alternatives:
 *   - next/image's own optimizer is off: `output: "export"` has no server.
 *   - Cloudflare Image Resizing (`/cdn-cgi/image/`) is the follow-up named in
 *     next.config.ts, and it is a PAID Cloudflare feature. This zone is on the
 *     free plan, so that path is a money decision, not an engineering one.
 *   - Editing the ~122 files that import next/image is a 238-page blast radius.
 *   A build-time variant set + a custom loader changes ZERO call sites.
 *
 * WHY WebP and not AVIF: WebP has been universal since 2020. AVIF would be
 *   ~20% smaller again, but a single-format srcset gives no format negotiation,
 *   so every visitor gets whatever we emit. The resolution win is the large one
 *   (1440px -> 384px is ~93% fewer pixels); the format win is the small one.
 *   Revisit AVIF behind a <picture> if it is ever worth the extra machinery.
 *
 * Output: public/images/**\/_rs/<base>-<width>.webp
 *         src/lib/responsive-image-manifest.ts  (src -> natural width)
 *
 * The manifest is what makes the loader SAFE: it only rewrites a URL for an
 * image it knows it generated, at a width it knows is below the natural width.
 * Anything else falls through to the original file, so a missing variant can
 * never produce a 404 on a live page.
 *
 * Idempotent: a variant newer than its source is left alone. Safe to re-run.
 */

import sharp from "sharp";
import { readdir, stat, mkdir, writeFile } from "node:fs/promises";
import { join, dirname, basename, extname, relative } from "node:path";

// public/videos holds poster frames (a <video poster> is an image request like
// any other — the homepage poster was 101 KB of JPEG and was invisible to a
// scan rooted at public/images).
const ROOTS = ["public/images", "public/videos"];
const WIDTHS = [384, 640, 750, 828, 1080, 1920];
const QUALITY = 72;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG"]);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "_rs") continue;
      yield* walk(full);
    } else if (EXTS.has(extname(e.name))) {
      yield full;
    }
  }
}

const manifest = {};
let made = 0, skipped = 0, bytesIn = 0, bytesOut = 0, files = 0;

async function* walkAll() {
  for (const r of ROOTS) {
    try { yield* walk(r); } catch { /* optional root */ }
  }
}

for await (const file of walkAll()) {
  let meta;
  try {
    meta = await sharp(file).metadata();
  } catch {
    continue; // not a decodable image — leave it to the original path
  }
  if (!meta.width) continue;
  files++;
  const srcUrl = "/" + relative("public", file).split("\\").join("/");
  manifest[srcUrl] = meta.width;

  const outDir = join(dirname(file), "_rs");
  const base = basename(file, extname(file));
  const srcStat = await stat(file);

  for (const w of WIDTHS) {
    if (w >= meta.width) continue; // never upscale — the loader falls back
    const out = join(outDir, `${base}-${w}.webp`);
    try {
      const o = await stat(out);
      if (o.mtimeMs >= srcStat.mtimeMs) { skipped++; bytesOut += o.size; continue; }
    } catch { /* not built yet */ }
    await mkdir(outDir, { recursive: true });
    await sharp(file).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
    const o = await stat(out);
    made++; bytesOut += o.size;
  }

  // Full-size WebP — the FORMAT-only win, for when the device genuinely needs
  // the natural resolution. Measured 2026-09-22 on desktop (1440x900, DPR 1):
  // the homepage still pulled 1,547 KB because a 100vw hero on a 1440 viewport
  // asks for ~1440px and every resized variant is below that, so the loader
  // correctly fell back to the original JPEG. Same pixels, WebP instead of
  // JPEG, is ~35-45% off with no resolution loss at all.
  const full = join(outDir, `${base}-full.webp`);
  let needFull = true;
  try {
    const o = await stat(full);
    if (o.mtimeMs >= srcStat.mtimeMs) { needFull = false; skipped++; bytesOut += o.size; }
  } catch { /* not built yet */ }
  if (needFull) {
    await mkdir(outDir, { recursive: true });
    await sharp(file).webp({ quality: QUALITY }).toFile(full);
    const o = await stat(full);
    made++; bytesOut += o.size;
  }
  bytesIn += srcStat.size;
}

const header = `// GENERATED by scripts/generate-responsive-images.mjs — do not edit by hand.
// Maps a public image URL to its natural width. src/image-loader.ts consults
// this before rewriting any URL, so an image without variants is served
// unchanged rather than 404ing. Regenerate with: npm run images:responsive
export const RESPONSIVE_WIDTHS: Record<string, number> = ${JSON.stringify(
  Object.fromEntries(Object.entries(manifest).sort()),
  null,
  2,
)};

export const RESPONSIVE_VARIANT_WIDTHS = ${JSON.stringify(WIDTHS)} as const;
`;
await writeFile("src/lib/responsive-image-manifest.ts", header);

console.log(
  `responsive images: ${files} sources · ${made} written · ${skipped} up-to-date\n` +
  `  sources ${(bytesIn / 1048576).toFixed(1)} MB → variants ${(bytesOut / 1048576).toFixed(1)} MB`,
);

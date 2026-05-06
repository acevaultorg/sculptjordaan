#!/usr/bin/env node
/**
 * Image optimization — one-shot batch compression for /public/images.
 *
 * What it does:
 *   - Resizes any image with long edge > 1920px down to 1920px
 *   - Re-encodes JPEG at quality 80 with mozjpeg
 *   - Re-encodes PNG at compressionLevel 9
 *   - Strips EXIF / metadata
 *   - Writes in place (atomic via temp file)
 *
 * Why:
 *   Source JPEGs were 580-1012KB at ~95 quality. Vercel charges per
 *   `_next/image` transform; smaller source = smaller cache-miss payload =
 *   less bandwidth, faster transforms. Visual quality at q=80 is
 *   indistinguishable from q=95 for web display.
 *
 * Run: `node scripts/optimize-images.mjs`
 *   (or `npm run optimize:images` if added to package.json scripts)
 *
 * Safe to re-run — sharp will not re-encode an already-tiny file beyond
 * the quality target.
 */

import sharp from "sharp";
import { readdir, stat, rename, unlink, copyFile } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = "public/images";
const MAX_LONG_EDGE = 1920;
const JPEG_QUALITY = 80;
const SKIP_IF_KB_UNDER = 80; // already small — leave alone

const EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile() && EXTS.has(extname(e.name).toLowerCase())) yield full;
  }
}

async function processOne(file) {
  const before = (await stat(file)).size;
  const beforeKB = Math.round(before / 1024);

  if (beforeKB < SKIP_IF_KB_UNDER) {
    return { file, beforeKB, afterKB: beforeKB, skipped: true };
  }

  const tmp = file + ".opt.tmp";
  const ext = extname(file).toLowerCase();

  let pipe = sharp(file, { failOn: "none" }).rotate(); // honor EXIF orientation, then strip

  const meta = await pipe.metadata();
  const longEdge = Math.max(meta.width || 0, meta.height || 0);

  if (longEdge > MAX_LONG_EDGE) {
    pipe = pipe.resize({
      width: meta.width >= meta.height ? MAX_LONG_EDGE : null,
      height: meta.height > meta.width ? MAX_LONG_EDGE : null,
      withoutEnlargement: true,
    });
  }

  if (ext === ".png") {
    pipe = pipe.png({ compressionLevel: 9, palette: true });
  } else {
    pipe = pipe.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:2:0" });
  }

  await pipe.toFile(tmp);
  const after = (await stat(tmp)).size;
  const afterKB = Math.round(after / 1024);

  if (after >= before) {
    // re-encoding made it bigger (already optimal) — drop the temp
    await unlink(tmp);
    return { file, beforeKB, afterKB: beforeKB, skipped: true };
  }

  await rename(tmp, file);
  return { file, beforeKB, afterKB, skipped: false };
}

async function main() {
  const results = [];
  let totalBefore = 0;
  let totalAfter = 0;

  for await (const f of walk(ROOT)) {
    const r = await processOne(f);
    results.push(r);
    totalBefore += r.beforeKB;
    totalAfter += r.afterKB;
  }

  // Print sorted by savings
  const optimized = results.filter((r) => !r.skipped).sort((a, b) => (b.beforeKB - b.afterKB) - (a.beforeKB - a.afterKB));
  const skipped = results.filter((r) => r.skipped);

  for (const r of optimized) {
    const saved = r.beforeKB - r.afterKB;
    const pct = Math.round((saved / r.beforeKB) * 100);
    console.log(`  ${String(r.beforeKB).padStart(5)}KB → ${String(r.afterKB).padStart(5)}KB  (-${pct}%)  ${r.file}`);
  }

  console.log("");
  console.log(`Optimized:  ${optimized.length} files`);
  console.log(`Skipped:    ${skipped.length} files (already small or already optimal)`);
  console.log(`Total before: ${(totalBefore / 1024).toFixed(1)} MB`);
  console.log(`Total after:  ${(totalAfter / 1024).toFixed(1)} MB`);
  console.log(`Total saved:  ${((totalBefore - totalAfter) / 1024).toFixed(1)} MB (-${Math.round(((totalBefore - totalAfter) / totalBefore) * 100)}%)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

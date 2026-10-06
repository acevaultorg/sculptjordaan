#!/usr/bin/env node
/**
 * Art-directed picture variants for <ArtDirectedPicture> (src/components/ui/art-directed-picture.tsx).
 *
 * WHY this exists next to generate-responsive-images.mjs:
 *   That script feeds next/image a WebP-only srcset of the WHOLE photo. A
 *   full-bleed background in a split layout needs more: the phone slot is
 *   roughly square and the desktop slot is portrait, so one crop of a landscape
 *   photo either wastes most of its pixels or loses the faces. Here every photo
 *   gets one crop per slot shape (art direction via <source media>), and each
 *   crop is written as AVIF + WebP + a JPEG fallback, so the browser picks
 *   both the format and the width.
 *
 * Variants were written GRAYSCALE (v1-v3). Since v4 (2026-10-02) they keep their natural colour so skin
 * reads natural; the hue identity now comes from a soft CSS wash. Old note: the colour came from the CSS
 * duotone in the component (tokens stay in code, not baked into pixels), and a
 * single-channel image is markedly smaller than a colour one.
 *
 * Output (committed, so a build never depends on this script having run):
 *   public/images/_pic/<id>-<crop>-<width>.{avif,webp,jpg}
 *   src/lib/art-directed-picture-manifest.ts
 *
 * Adding a photo: add an entry to PICTURES, run `npm run images:pictures`,
 * commit both outputs. Crops are in source pixels: { left, top, width, height }.
 */

import sharp from "sharp";
import { mkdir, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = "public/images/_pic";
const MANIFEST = "src/lib/art-directed-picture-manifest.ts";

/** Breakpoint crops. `media` is the <source media> query; the last crop without media is the default. */
const PICTURES = [
  {
    id: "landing-trainer",
    // v4 (2026-10-02): a man and a woman training in the studio (Paulo: both halves showed women).
    // Same photo the small-group blog posts use, so the rights are already settled.
    src: "public/images/studio/training-duo-lunge-wall.jpg", // 1066x1600
    crops: {
      // Desktop half (>=768px) is portrait, roughly 0.4 to 0.9 wide-to-tall.
      desktop: { media: "(min-width: 768px)", left: 0, top: 120, width: 1066, height: 1422, widths: [480, 640, 800, 1066] },
      // Phone half is close to square (375x333 to 430x466). Faces sit at y 340-620 of 1600.
      mobile: { left: 0, top: 230, width: 1066, height: 1066, widths: [640, 828, 1066] },
    },
  },
  {
    id: "landing-client",
    // v5 (2026-10-06): Paulo offered two photos of this model to replace the barbell shot (thought
    // mutu7zf99zd2sj); this is the dumbbell one. Dark background keeps the white copy readable and her
    // face sits high in the frame, so the headline no longer covers it. Was training-barbell-squat.jpg.
    src: "public/images/studio/training-dumbbells-focus.jpg", // 1280x1920, face at y 520-790
    // Low-key photo (mostly black): the global 0.7 cap made her face muddy. Her lit skin is the only
    // bright area and the copy sits on the dark background, so a higher cap keeps text contrast.
    cap: 0.85,
    crops: {
      // Portrait desktop half: start at y 300 so her face lands in the top fifth, above the centred copy.
      desktop: { media: "(min-width: 768px)", left: 0, top: 300, width: 1280, height: 1620, widths: [480, 720, 960, 1280] },
      // Phone half: square from y 160 so her face lands in the free band between the copy and the buttons.
      mobile: { left: 0, top: 160, width: 1280, height: 1280, widths: [640, 828, 1080] },
    },
  },
];

const CAP = 0.7; // brightest output value, 0..1

const FORMATS = {
  avif: (img) => img.avif({ quality: 48, effort: 6, chromaSubsampling: "4:2:0" }),
  webp: (img) => img.webp({ quality: 68, effort: 6 }),
  jpg: (img) => img.jpeg({ quality: 70, mozjpeg: true, progressive: true }),
};

await mkdir(OUT_DIR, { recursive: true });
const manifest = {};
let total = 0;

for (const pic of PICTURES) {
  const entry = { sources: [] };
  for (const [name, c] of Object.entries(pic.crops)) {
    const variants = { avif: [], webp: [], jpg: [] };
    for (const w of c.widths) {
      const h = Math.round((w * c.height) / c.width);
      for (const [fmt, encode] of Object.entries(FORMATS)) {
        const file = `${pic.id}-${name}-${w}.${fmt}`;
        const out = join(OUT_DIR, file);
        const img = sharp(pic.src)
          .rotate()
          .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
          .resize(w, h, { kernel: "lanczos3" })
          .normalise({ lower: 1, upper: 99 })
          // Local contrast, so faces and kit still read once the duotone squeezes the
          // range between two dark-ish tokens. Safe for text: the duotone caps every
          // pixel at the tint colour whatever the photo's brightness.
          .clahe({ width: Math.round(w / 6), height: Math.round(h / 6), maxSlope: 2 })
;
        // Cap the brightest pixel so white text keeps its contrast over natural colour. A second
        // pipeline on purpose: sharp runs linear() BEFORE normalise/clahe within one pipeline, so
        // chaining it above left the max at 255.
        const capped = sharp(await img.png().toBuffer()).linear(pic.cap ?? CAP, 0);
        await encode(capped).toFile(out);
        total += (await stat(out)).size;
        variants[fmt].push({ url: `/images/_pic/${file}`, w });
      }
    }
    entry.sources.push({
      name,
      media: c.media ?? null,
      width: c.widths.at(-1),
      height: Math.round((c.widths.at(-1) * c.height) / c.width),
      variants,
    });
  }
  manifest[pic.id] = entry;
}

const ts = `// GENERATED by scripts/generate-art-directed-pictures.mjs. Do not edit by hand.
// Run \`npm run images:pictures\` after changing a crop or adding a photo.

export type PictureVariant = { url: string; w: number };
export type PictureSource = {
  name: string;
  /** <source media>. null = the default crop, used by the <img> itself. */
  media: string | null;
  /** Intrinsic size of the largest variant, for width/height (no layout shift). */
  width: number;
  height: number;
  variants: { avif: PictureVariant[]; webp: PictureVariant[]; jpg: PictureVariant[] };
};

export const ART_DIRECTED_PICTURES = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, { sources: readonly PictureSource[] }>;

export type ArtDirectedPictureId = keyof typeof ART_DIRECTED_PICTURES;
`;
await writeFile(MANIFEST, ts);
console.log(`art-directed pictures: ${PICTURES.length} photos, ${(total / 1024).toFixed(0)} KB written to ${OUT_DIR}`);

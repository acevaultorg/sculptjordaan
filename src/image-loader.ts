"use client";

/**
 * Custom next/image loader — serves pre-generated width variants.
 *
 * `output: "export"` has no server, so next/image's own optimizer is off and
 * `images.unoptimized` was true: every <Image> rendered a single full-size src
 * with NO srcset. Measured live 2026-09-22 at 375px: 17 of the homepage's 18
 * images had no srcset and the page shipped 2,022 KB of JPEG, worst case a
 * 1440px/426 KB file rendered at 166 CSS px.
 *
 * A custom loader restores srcset generation WITHOUT touching the ~122 files
 * that import next/image. Next calls this once per entry in `deviceSizes` +
 * `imageSizes` and assembles the srcset itself.
 *
 * SAFETY — this is the whole point of the manifest. The loader rewrites a URL
 * only when BOTH hold:
 *   1. the manifest says we generated variants for that exact src, and
 *   2. the requested width is strictly below the source's natural width.
 * Anything else returns `src` untouched. A variant that was never written
 * therefore cannot be requested, so this can never 404 a live image — the
 * failure mode is "no saving", not "broken page".
 *
 * Regenerate variants + manifest with `npm run images:responsive` (also wired
 * into prebuild, so a new photo is covered on the next build).
 */

import { RESPONSIVE_WIDTHS, RESPONSIVE_VARIANT_WIDTHS } from "@/lib/responsive-image-manifest";

export default function responsiveImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // Remote URLs, SVG, and anything we did not generate: leave alone.
  const natural = RESPONSIVE_WIDTHS[src];
  if (!natural) return src;

  // Smallest generated width that still covers the requested width.
  const pick = RESPONSIVE_VARIANT_WIDTHS.find((w) => w >= width && w < natural);
  // Nothing below the natural width covers it → the original IS the right file.
  if (!pick) return src;

  const slash = src.lastIndexOf("/");
  const dir = src.slice(0, slash);
  const file = src.slice(slash + 1);
  const dot = file.lastIndexOf(".");
  const base = dot === -1 ? file : file.slice(0, dot);
  return `${dir}/_rs/${base}-${pick}.webp`;
}

import type { CSSProperties } from "react";
import {
  ART_DIRECTED_PICTURES,
  type ArtDirectedPictureId,
  type PictureVariant,
} from "@/lib/art-directed-picture-manifest";

/**
 * <ArtDirectedPicture> — reusable block for a full-bleed photo that needs a
 * different crop per layout (phone vs desktop) and modern formats.
 *
 * Renders a <picture> with, per crop: an AVIF <source>, a WebP <source>, and a
 * JPEG fallback on the <img>. Crops, widths and files come from
 * `src/lib/art-directed-picture-manifest.ts`, written by
 * `scripts/generate-art-directed-pictures.mjs` (`npm run images:pictures`).
 *
 * Why not next/image: this site's next/image loader emits a WebP-only srcset of
 * the whole photo. Art direction (a different crop per breakpoint) and AVIF
 * with a JPEG fallback need <source> elements, which next/image does not emit.
 *
 * Usage
 *   <ArtDirectedPicture id="landing-trainer" alt="…" sizes="(min-width: 768px) 50vw, 100vw"
 *     priority position={{ base: "50% 40%", md: "50% 30%" }} className="absolute inset-0 h-full w-full object-cover" />
 *
 * - `priority`: fetchpriority="high" + eager. Give it to the FIRST visible image
 *   only; everything else loads lazily.
 * - `position`: object-position per layout, so faces stay in frame at 375px and
 *   on desktop. `md` applies from 768px, matching the desktop crop.
 * - width/height are set from the default crop, so the box is reserved before
 *   the image arrives (no layout shift; for `fill`-style use the parent sizes it).
 * - Variants are grayscale: colour the photo in CSS (see split-landing.tsx for
 *   the duotone). Do not use this block for photos that must show true colour
 *   unless the generator is changed to keep colour for that entry.
 */
export function ArtDirectedPicture({
  id,
  alt,
  sizes,
  priority = false,
  position,
  className,
}: {
  id: ArtDirectedPictureId;
  alt: string;
  /** Rendered width per layout, like next/image `sizes`. */
  sizes: string;
  priority?: boolean;
  position?: { base: string; md?: string };
  className?: string;
}) {
  const { sources } = ART_DIRECTED_PICTURES[id];
  const fallback = sources.find((s) => s.media === null) ?? sources[sources.length - 1];
  const srcSet = (list: readonly PictureVariant[]) => list.map((v) => `${v.url} ${v.w}w`).join(", ");
  const jpgDefault = fallback.variants.jpg;

  const style = {
    "--pic-pos": position?.base ?? "50% 50%",
    "--pic-pos-md": position?.md ?? position?.base ?? "50% 50%",
  } as CSSProperties;

  return (
    <picture>
      {sources.map((s) =>
        (["avif", "webp", "jpg"] as const).map((fmt) =>
          // The default crop's JPEG lives on the <img> itself.
          s.media === null && fmt === "jpg" ? null : (
            <source
              key={`${s.name}-${fmt}`}
              type={fmt === "jpg" ? "image/jpeg" : `image/${fmt}`}
              media={s.media ?? undefined}
              srcSet={srcSet(s.variants[fmt])}
              sizes={sizes}
              width={s.width}
              height={s.height}
            />
          ),
        ),
      )}
      <img
        src={jpgDefault[jpgDefault.length - 1].url}
        srcSet={srcSet(jpgDefault)}
        sizes={sizes}
        width={fallback.width}
        height={fallback.height}
        alt={alt}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        style={style}
        className={`[object-position:var(--pic-pos)] md:[object-position:var(--pic-pos-md)] ${className ?? ""}`}
      />
    </picture>
  );
}

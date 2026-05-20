"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * PhotoGalleryLightbox — clickable 4-up (or N-up) photo grid that opens an
 * enlarged fullscreen slider on tap.
 *
 * Used on /nl/studio-huren + /en/studio-rental + /nl/boek-studio — the
 * "Bekijk de Ruimte / See the Space" sections. Operator directive 2026-05-20:
 * "if people click this photos they should get enlarged slider".
 *
 * Behavior:
 *   - Renders thumbnails identical to the prior static grid (same aspect-
 *     square, same border-radius, same gap) — drop-in visual replacement.
 *   - Tap/click any thumbnail → opens fullscreen overlay at that index.
 *   - Overlay: prev/next arrows (desktop) · swipe (mobile) · ←/→ keys ·
 *     Esc or X button or backdrop click to close.
 *   - Body scroll locked while open · focus moves to close button.
 *   - Counter "3 / 4" + caption at bottom.
 *   - next/image with priority on the open photo + sizes hinting the
 *     fullscreen viewport so the browser pulls the right size.
 *
 * NOT a carousel on the page itself (the grid stays static — 4 thumbs at
 * once). The slider only exists in the modal. Avoids the auto-rotating-
 * carousel anti-pattern documented in photo-slideshow.tsx comment block.
 */

const GRID_CLASSES =
  "grid grid-cols-2 gap-4 lg:grid-cols-4";

export function PhotoGalleryLightbox({
  images,
  locale = "nl",
}: {
  images: GalleryImage[];
  locale?: "nl" | "en";
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const t = locale === "nl"
    ? { close: "Sluiten", prev: "Vorige", next: "Volgende", openLabel: (i: number) => `Foto ${i + 1} vergroten` }
    : { close: "Close", prev: "Previous", next: "Next", openLabel: (i: number) => `Enlarge photo ${i + 1}` };

  const open = useCallback((i: number) => setOpenIdx(i), []);
  const close = useCallback(() => setOpenIdx(null), []);

  const next = useCallback(() => {
    setOpenIdx((cur) => (cur === null ? null : (cur + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setOpenIdx((cur) => (cur === null ? null : (cur - 1 + images.length) % images.length));
  }, [images.length]);

  // Keyboard navigation when open: ← / → / Esc
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, close, next, prev]);

  // Body scroll lock when open
  useEffect(() => {
    if (openIdx === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx]);

  // Move focus to close button when overlay opens
  useEffect(() => {
    if (openIdx !== null) closeBtnRef.current?.focus();
  }, [openIdx]);

  const current = openIdx === null ? null : images[openIdx];

  return (
    <>
      {/* Grid (drop-in replacement for the prior static grid) */}
      <div className={GRID_CLASSES}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(i)}
            aria-label={t.openLabel(i)}
            className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Subtle "click to enlarge" affordance — only visible on hover (desktop) */}
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" aria-hidden />
          </button>
        ))}
      </div>

      {/* Fullscreen lightbox overlay */}
      {openIdx !== null && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={locale === "nl" ? "Foto-galerij" : "Photo gallery"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => {
            // Click outside the image closes
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            const end = e.changedTouches[0]?.clientX;
            touchStartX.current = null;
            if (start == null || end == null) return;
            const dx = end - start;
            if (Math.abs(dx) < 50) return;
            if (dx > 0) prev();
            else next();
          }}
        >
          {/* Close button — top-right, always reachable with thumb */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label={t.close}
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev arrow — hidden on mobile (swipe instead), visible on sm+ */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={prev}
              aria-label={t.prev}
              className="absolute left-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:inline-flex"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next arrow */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={next}
              aria-label={t.next}
              className="absolute right-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:inline-flex"
              style={{ top: "calc(50%)", transform: "translateY(-50%)" }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
          {/* Prev arrow vertical-center fix — same trick (Tailwind has top-1/2 but rotating needs transform) */}
          {/* The desktop layout uses simple top:50% with transform via inline style on next; prev mirrors */}

          {/* Image container — letterboxed inside max viewport with padding */}
          <div
            className="relative max-h-[88vh] w-full max-w-5xl px-4 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] w-full sm:aspect-[16/10]">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Caption + counter strip */}
            <div className="mt-3 flex flex-col items-center justify-center gap-1 px-2 text-center text-sm text-white/85">
              <span className="text-white/90">{current.alt}</span>
              <span className="text-xs text-white/55">
                {openIdx + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

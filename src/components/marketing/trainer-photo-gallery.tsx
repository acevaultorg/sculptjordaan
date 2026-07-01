"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type TrainerGalleryImage = {
  src: string;
  alt: string;
};

/**
 * TrainerPhotoGallery — the trainer intake page's hero portrait, made
 * clickable, with an optional thumbnail strip for any extra photos. Tapping
 * either opens the same fullscreen slider (prev/next arrows, swipe, ←/→,
 * Esc/backdrop/X to close) proven on the studio-rental pages.
 *
 * Copy-forked from photo-gallery-lightbox.tsx (per CLAUDE.md CRAFT rule:
 * "copy-fork a proven pattern, let it diverge" — the studio-rental grid is a
 * fixed always-visible 2x2/4-up layout; this page needs a single priority
 * hero (LCP-critical, see the comment in trainer-intake.tsx) plus a small
 * thumbnail row, so the trigger markup differs even though the fullscreen
 * overlay behavior is identical). Never import cross-file — each stays
 * independently editable.
 *
 * `images[0]` is always the hero (rendered `priority`, matches the existing
 * aspect-[4/5] card). `images[1+]` render as small thumbnail chips below it
 * ONLY when present — a trainer with a single photo renders exactly like
 * before (no visual change, no extra DOM).
 */
export function TrainerPhotoGallery({
  images,
  locale = "nl",
}: {
  images: TrainerGalleryImage[];
  locale?: "nl" | "en";
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const t = locale === "nl"
    ? { close: "Sluiten", prev: "Vorige", next: "Volgende", openLabel: (i: number) => `Foto ${i + 1} vergroten`, morePhotos: "Meer foto's" }
    : { close: "Close", prev: "Previous", next: "Next", openLabel: (i: number) => `Enlarge photo ${i + 1}`, morePhotos: "More photos" };

  const hero = images[0];
  const extra = images.slice(1);

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

  if (!hero) return null;

  const heroImage = (
    <Image
      src={hero.src}
      alt={hero.alt}
      fill
      className="object-cover object-top"
      sizes="(max-width: 768px) 100vw, 320px"
      priority
    />
  );

  return (
    <>
      {/* Hero portrait. Only wrapped in a clickable/lightbox-enabled button
          when there ARE extra photos worth expanding into (design review
          2026-07-01: a plain single photo has nothing to gain from a
          fullscreen re-showing of itself — a clickable affordance there is a
          tap-for-nothing + unwanted hover-scale/focus-ring on 11 of 12
          trainer pages). Single-photo case renders pixel-identical to the
          original static Image block (same container/aspect/priority). */}
      {extra.length > 0 ? (
        <button
          type="button"
          onClick={() => open(0)}
          aria-label={t.openLabel(0)}
          className="group relative block w-full aspect-[4/5] max-w-xs rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
          />
          <span
            className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
            aria-hidden
          >
            +{extra.length}
          </span>
        </button>
      ) : (
        <div className="relative w-full aspect-[4/5] max-w-xs rounded-2xl overflow-hidden">
          {heroImage}
        </div>
      )}

      {/* Thumbnail strip for any extra photos — renders nothing for the
          11 trainers without a `gallery` array (extra.length === 0). */}
      {extra.length > 0 && (
        <div className="flex max-w-xs gap-2">
          {extra.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => open(i + 1)}
              aria-label={t.openLabel(i + 1)}
              className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen lightbox overlay — identical behavior to photo-gallery-lightbox.tsx */}
      {openIdx !== null && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={locale === "nl" ? "Foto-galerij" : "Photo gallery"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => {
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
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label={t.close}
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={prev}
              aria-label={t.prev}
              className="absolute left-3 z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:inline-flex"
              style={{ top: "calc(50%)", transform: "translateY(-50%)" }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

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

            <div className="mt-3 flex flex-col items-center justify-center gap-1 px-2 text-center text-sm text-white/85">
              <span className="text-white/90">{current.alt}</span>
              {images.length > 1 && (
                <span className="text-xs text-white/55">
                  {openIdx + 1} / {images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

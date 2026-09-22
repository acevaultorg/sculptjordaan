"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SlideshowImage = {
  src: string;
  alt: string;
};

/**
 * autoAdvanceMs default changed 2026-05-19 from 5000 → 0 (static by default).
 *
 * Research-backed decision matching the static-hero direction operator picked
 * for the homepage (Saints & Stars / Equinox / Barry's pattern, 2026-05-19
 * hero refresh). Auto-rotating carousels are one of the most-tested anti-
 * patterns in CRO literature:
 *   - Notre Dame study (Erik Runyon, oft-cited): only 1% of all clicks on
 *     rotating-hero carousels reach past slide 1.
 *   - WiderFunnel multi-vertical A/B test (2017): static heroes beat rotating
 *     heroes by 6–23% across 4 B2B industries.
 *   - Nielsen Norman Group: carousels distract, hurt accessibility, lower
 *     perceived trust.
 *
 * The motion of an auto-rotating image competes with the CTA for visual
 * attention — exactly the opposite of what conversion design wants. Today's
 * IG-webview cohort has a 6-second avg session; slide 2 of any rotating
 * gallery is dead inventory.
 *
 * Manual navigation (chevrons + indicator dots + swipe) is preserved so
 * visitors who DO want to see multiple photos can — they just don't have
 * motion competing with the CTAs above. Callers that explicitly want
 * rotation can opt-in by passing `autoAdvanceMs={5000}` (kept as the
 * documented rotation speed if anyone needs it back).
 */
export function PhotoSlideshow({
  images,
  aspect = "aspect-[4/3]",
  autoAdvanceMs = 0,
}: {
  images: SlideshowImage[];
  aspect?: string;
  autoAdvanceMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = scroller.children[index] as HTMLElement | undefined;
    if (target) {
      scroller.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const next = useCallback(() => {
    const i = (active + 1) % images.length;
    scrollTo(i);
  }, [active, images.length, scrollTo]);

  const prev = useCallback(() => {
    const i = (active - 1 + images.length) % images.length;
    scrollTo(i);
  }, [active, images.length, scrollTo]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const w = scroller.clientWidth;
        const i = Math.round(scroller.scrollLeft / w);
        setActive(Math.max(0, Math.min(images.length - 1, i)));
        ticking = false;
      });
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [images.length]);

  useEffect(() => {
    if (paused || autoAdvanceMs <= 0 || images.length < 2) return;
    const id = window.setInterval(next, autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [paused, autoAdvanceMs, next, images.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Foto galerij"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative ${aspect} w-full flex-none snap-center`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Vorige foto"
            className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 sm:left-3"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Volgende foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-3"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Ga naar foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

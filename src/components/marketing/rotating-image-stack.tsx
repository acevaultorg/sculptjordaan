"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type RotatingStackImage = {
  src: string;
  alt: string;
};

/**
 * RotatingImageStack — crossfade slideshow that fills its parent container.
 *
 * Drop-in replacement for a single <Image fill /> inside a relative-positioned
 * wrapper. The wrapper keeps its own aspect-ratio + rounded-corner + bg-color
 * styling (caller's responsibility); this component only manages the stack of
 * absolute-positioned images that crossfade between active slides.
 *
 * Same discipline as hero.tsx slideshow:
 *   - First image keeps priority + fetchPriority="high" for LCP protection.
 *   - Images 2..N mount after a delay so they don't compete for initial
 *     network budget.
 *   - Rotation starts only after secondary images mount.
 *   - Respects prefers-reduced-motion (rotation paused if opted out).
 *   - Pauses when document.hidden (no compute spent off-screen).
 *   - No slide indicators / chevrons — motion is decorative; the parent's
 *     headline + CTA carry the page meaning. Avoids the auto-rotating-
 *     carousel anti-pattern (Notre Dame 1% / WiderFunnel / NN/g).
 *
 * Usage:
 *   <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"
 *        style={{ backgroundColor: getColor(images[0].src) }}>
 *     <RotatingImageStack images={images} sizes="(max-width: 1024px) 100vw, 50vw" />
 *     <HeroPriceBadge ... />
 *   </div>
 */
export function RotatingImageStack({
  images,
  sizes,
  rotationMs = 6000,
  secondaryMountDelayMs = 2000,
  objectPositionClass = "",
}: {
  images: RotatingStackImage[];
  sizes: string;
  rotationMs?: number;
  secondaryMountDelayMs?: number;
  /** Override object-position via Tailwind class, e.g. "[object-position:center_30%]". */
  objectPositionClass?: string;
}) {
  const [active, setActive] = useState(0);
  const [secondaryMounted, setSecondaryMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2) return;
    const t = window.setTimeout(() => setSecondaryMounted(true), secondaryMountDelayMs);
    return () => window.clearTimeout(t);
  }, [images.length, secondaryMountDelayMs]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePause = () => setPaused(mq.matches || document.hidden);
    updatePause();
    mq.addEventListener("change", updatePause);
    document.addEventListener("visibilitychange", updatePause);
    return () => {
      mq.removeEventListener("change", updatePause);
      document.removeEventListener("visibilitychange", updatePause);
    };
  }, []);

  useEffect(() => {
    if (!secondaryMounted || paused || images.length < 2) return;
    const id = window.setInterval(() => {
      setActive((cur) => (cur + 1) % images.length);
    }, rotationMs);
    return () => window.clearInterval(id);
  }, [secondaryMounted, paused, images.length, rotationMs]);

  return (
    <>
      {images.map((img, i) => {
        if (i > 0 && !secondaryMounted) return null;
        return (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover ${objectPositionClass} transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            sizes={sizes}
            loading={i === 0 ? "eager" : "lazy"}
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        );
      })}
    </>
  );
}

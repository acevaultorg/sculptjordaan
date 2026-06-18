"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Play } from "lucide-react";

// prefers-reduced-motion as an external store (SSR-safe, no setState-in-effect).
let rmMql: MediaQueryList | null = null;
function rmStore(): MediaQueryList | null {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  if (!rmMql) rmMql = window.matchMedia("(prefers-reduced-motion: reduce)");
  return rmMql;
}
function rmSubscribe(cb: () => void) {
  const mq = rmStore();
  if (!mq) return () => {};
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const rmGet = () => rmStore()?.matches ?? false;
const rmServer = () => false;

interface LandingVideoProps {
  /** Web-optimized, muted (no audio track), faststart mp4 in /public/videos */
  src: string;
  /** Poster image shown before the clip loads (and as the reduced-motion still) */
  poster: string;
  /** Accessible description of the clip */
  label: string;
  className?: string;
  /** Aspect-ratio lock (prevents CLS). Default vertical 9:16 to match phone footage. */
  aspectClassName?: string;
  /** Max width of the contained card so a vertical clip doesn't dominate desktop. */
  maxWidthClassName?: string;
}

/**
 * Perf-safe landing video. Never affects initial load / LCP:
 *  - preload="none" + src is only attached once the card scrolls near the viewport
 *    (IntersectionObserver, 200px rootMargin), so the file isn't fetched until needed.
 *  - muted + playsInline + loop → mobile-safe autoplay once in view.
 *  - prefers-reduced-motion → no autoplay; poster + a tap-to-play affordance.
 *  - if the browser blocks autoplay (data-saver etc.), fall back to the same affordance.
 *  - aspect-ratio container locks layout (zero CLS).
 */
export function LandingVideo({
  src,
  poster,
  label,
  className = "",
  aspectClassName = "aspect-[9/16]",
  maxWidthClassName = "max-w-[340px]",
}: LandingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  // true when IntersectionObserver is unavailable (e.g. SSR) so playback still triggers.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");
  const [needsTap, setNeedsTap] = useState(false);
  const [tapped, setTapped] = useState(false);
  const reduceMotion = useSyncExternalStore(rmSubscribe, rmGet, rmServer);

  const play = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (!v.src) v.src = src;
    v.muted = true;
    v.playsInline = true;
    const p = v.play();
    // setState only inside the async rejection callback — not synchronous-in-effect.
    if (p && typeof p.catch === "function") p.catch(() => setNeedsTap(true));
  }, [src]);

  // Lazy: attach src + autoplay only when the card scrolls near (skips below-fold cost).
  useEffect(() => {
    if (inView) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true); // inside subscription callback — allowed
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  // Autoplay once in view, unless the user prefers reduced motion. Ref guard avoids
  // setState in the effect body.
  useEffect(() => {
    if (inView && !reduceMotion && !startedRef.current) {
      startedRef.current = true;
      play();
    }
  }, [inView, reduceMotion, play]);

  const showTapAffordance = (reduceMotion && !tapped) || needsTap;

  const handleTap = () => {
    startedRef.current = true;
    setTapped(true);
    setNeedsTap(false);
    play();
  };

  return (
    <div
      ref={wrapRef}
      className={`relative mx-auto w-full ${maxWidthClassName} overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <video
          ref={videoRef}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {showTapAffordance && (
          <button
            type="button"
            onClick={handleTap}
            aria-label={label}
            className="plausible-event-name=landing_video_play absolute inset-0 flex items-center justify-center bg-foreground/10 transition hover:bg-foreground/20"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

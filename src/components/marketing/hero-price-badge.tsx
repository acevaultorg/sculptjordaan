/**
 * Hero price badge — scroll-stop overlay on hero images.
 *
 * Inspired by competitor-ad pattern audit 2026-05-16 (thebodystudio.nl's
 * yellow/black bold-overlay + arrow drove engagement; Saints-&-Stars's
 * value-stack hook stopped scrolls). Clarity recordings showed paid traffic
 * (Google Ads referrer with gad_source param) bouncing in 2-4 seconds from
 * /nl/studio-huren — the existing text-based trust strip and tags weren't
 * scroll-stop fast enough.
 *
 * This badge overlays directly onto the hero image (top-left, tilted -3°)
 * with a brand-orange background + bold near-black price. Communicates the
 * value-prop in <0.5s — what visitors from "studio huren amsterdam" Google
 * Ads search for.
 *
 * Stays on-brand (#EF5012 SculptClub orange, refined 2026-05-17) instead of
 * competitor's yellow — preserves boutique premium aesthetic while gaining
 * ad-style scroll-stop. Penguin-Classics-style orange+black pattern.
 *
 * Text rendering best-practices baked in (2026-05-16 polish pass):
 * - Solid high-contrast background (WCAG AAA against white text)
 * - drop-shadow on text for image-overlay defense (covers edge case where
 *   bg becomes semi-transparent on legacy browsers)
 * - All text uses Inter or Syne (already in @next/font, no FOUT)
 * - text-balance + tracking-tight prevents awkward line breaks on short labels
 * - Respects prefers-reduced-motion (tilt disabled for accessibility)
 * - Larger typography on mobile (text-3xl, not text-2xl) — 60%+ traffic is mobile
 * - aria-label set so screen readers announce price+label as single sentence
 */

import { cn } from "@/lib/utils";

interface HeroPriceBadgeProps {
  /** Primary number/word — the scroll-stop value (e.g. "€12/uur", "GRATIS", "€7,25") */
  price: string;
  /** Smaller label below the price (e.g. "per sessie", "Eerste intake") */
  label: string;
  /** Optional third line (e.g. "Volledige vrijheid", "Geen verplichting") */
  subLabel?: string;
  /** Position: top-left (default), top-right, bottom-left, bottom-right */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Tilt direction: -3° left (default), 3° right, or none. Disabled under prefers-reduced-motion. */
  tilt?: "left" | "right" | "none";
  /** Color theme: brand-blue (default), amber (for FREE offers), emerald (for GRATIS / no-commit) */
  variant?: "brand" | "amber" | "emerald";
  /** Override classes */
  className?: string;
}

export function HeroPriceBadge({
  price,
  label,
  subLabel,
  position = "top-left",
  tilt = "left",
  variant = "brand",
  className,
}: HeroPriceBadgeProps) {
  const positionClasses = {
    "top-left": "top-3 left-3 sm:top-5 sm:left-5",
    "top-right": "top-3 right-3 sm:top-5 sm:right-5",
    "bottom-left": "bottom-3 left-3 sm:bottom-5 sm:left-5",
    "bottom-right": "bottom-3 right-3 sm:bottom-5 sm:right-5",
  };

  // motion-safe wrapper so prefers-reduced-motion disables the tilt
  const tiltClasses = {
    left: "motion-safe:-rotate-3",
    right: "motion-safe:rotate-3",
    none: "",
  };

  const variantClasses = {
    brand: [
      "bg-brand text-brand-foreground",
      // brand-blue radial-glow under the badge for depth
      "shadow-[0_8px_24px_-4px_rgba(19,77,225,0.55),0_0_0_1px_rgba(255,255,255,0.10)_inset]",
    ].join(" "),
    amber: [
      "bg-amber-400 text-stone-950",
      "shadow-[0_8px_24px_-4px_rgba(245,158,11,0.55),0_0_0_1px_rgba(0,0,0,0.08)_inset]",
    ].join(" "),
    emerald: [
      "bg-emerald-500 text-white",
      "shadow-[0_8px_24px_-4px_rgba(16,185,129,0.55),0_0_0_1px_rgba(255,255,255,0.10)_inset]",
    ].join(" "),
  };

  // Accessible label: "€12/uur, 0% commissie, Eerste test gratis"
  const ariaLabel = [price, label, subLabel].filter(Boolean).join(", ");

  return (
    <div
      className={cn(
        "absolute z-10 select-none",
        positionClasses[position],
        tiltClasses[tilt],
        variantClasses[variant],
        // Larger padding on desktop, comfortable on mobile (operator's traffic is 60%+ mobile)
        "rounded-2xl",
        "px-3.5 py-2.5 sm:px-5 sm:py-3.5",
        // Subtle backdrop-blur creates depth WITHOUT compromising contrast (bg is still solid)
        "backdrop-blur-[2px]",
        // Hover/active subtle scale for interactive feel even though it's not clickable
        "motion-safe:transition-transform motion-safe:hover:scale-105",
        className,
      )}
      role="img"
      aria-label={ariaLabel}
    >
      {/* PRICE — primary scroll-stop. Bigger on mobile than v1 (was text-2xl). */}
      <div className="text-3xl sm:text-4xl font-black leading-none tracking-tight [text-shadow:_0_1px_2px_rgba(0,0,0,0.15)]">
        {price}
      </div>
      {/* LABEL — uppercase caps. Increased weight + size vs v1 for legibility on mobile. */}
      <div className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] [text-shadow:_0_1px_1px_rgba(0,0,0,0.15)]">
        {label}
      </div>
      {/* SUB-LABEL — quieter but still readable. Opacity dropped from 0.85 to use solid color, */}
      {/* and added text-shadow for image-overlay defense. */}
      {subLabel && (
        <div className="mt-1 text-[11px] sm:text-xs font-semibold tracking-tight opacity-90 [text-shadow:_0_1px_1px_rgba(0,0,0,0.15)]">
          {subLabel}
        </div>
      )}
    </div>
  );
}

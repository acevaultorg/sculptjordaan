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
 * with a brand-blue background + bold white price. Communicates the value-prop
 * in <0.5s — what visitors from "studio huren amsterdam" Google Ads search for.
 *
 * Stays on-brand (#134DE1 SculptClub blue) instead of competitor's yellow —
 * preserves boutique premium aesthetic while gaining ad-style scroll-stop.
 */

import { cn } from "@/lib/utils";

interface HeroPriceBadgeProps {
  /** Primary number/word — the scroll-stop value (e.g. "€12/uur", "GRATIS", "€7,25") */
  price: string;
  /** Smaller label below the price (e.g. "per sessie", "Eerste intake") */
  label: string;
  /** Optional third line (e.g. "0% commissie", "Geen verplichting") */
  subLabel?: string;
  /** Position: top-left (default) or top-right */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Tilt direction: -3° (default), 3°, or 0 (none) */
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
    "top-left": "top-3 left-3 sm:top-4 sm:left-4",
    "top-right": "top-3 right-3 sm:top-4 sm:right-4",
    "bottom-left": "bottom-3 left-3 sm:bottom-4 sm:left-4",
    "bottom-right": "bottom-3 right-3 sm:bottom-4 sm:right-4",
  };

  const tiltClasses = {
    left: "-rotate-3",
    right: "rotate-3",
    none: "",
  };

  const variantClasses = {
    brand: "bg-brand text-white shadow-brand/40",
    amber: "bg-amber-400 text-stone-950 shadow-amber-500/40",
    emerald: "bg-emerald-500 text-white shadow-emerald-500/40",
  };

  return (
    <div
      className={cn(
        "absolute z-10 select-none",
        positionClasses[position],
        tiltClasses[tilt],
        variantClasses[variant],
        "rounded-2xl shadow-lg",
        "px-3 py-2 sm:px-4 sm:py-3",
        "ring-1 ring-white/10",
        className,
      )}
      aria-hidden
    >
      <div className="text-2xl sm:text-3xl font-black leading-none tracking-tight">{price}</div>
      <div className="mt-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-95">
        {label}
      </div>
      {subLabel && (
        <div className="mt-0.5 text-[10px] sm:text-xs font-medium opacity-85">{subLabel}</div>
      )}
    </div>
  );
}

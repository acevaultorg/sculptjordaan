"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { detectBookingType, isAcuityUrl, trackBeginBooking } from "@/lib/tracking";

/**
 * StudioRateTable — the per-hour studio rate rows on the trainer-rental funnel
 * (/nl/studio-huren, /en/studio-rental, /nl/boek-studio, /en/book-studio).
 *
 * WHY THIS EXISTS (2026-08-26, SculptClub-002):
 * The four pages each carried a byte-identical <table> whose only clickable
 * element was a size="sm" ("Boek"/"Book") pill. Measured live on the rendered
 * page: the row was 766x53px, the pill 52x28px — **4% of the row was tappable,
 * 96% was dead space**, and the pill's 28px height is well under the 44px
 * minimum touch target. Clarity (3d) reported DeadClickCount on exactly those
 * pages: /nl/studio-huren 25% of sessions (n=8), /en/studio-rental 16.7% (n=6).
 * Visitors were tapping the room name or the price — the natural targets — and
 * getting nothing. This is the funnel behind ~93% of studio revenue (trainer
 * studio rental), so the dead zone was sitting on the highest-€ surface we own.
 *
 * THE FIX: the whole row is ONE anchor. Dead zone 96% -> 0%, row height stays
 * >=44px, and the pill is kept purely as the visual affordance (aria-hidden so
 * it is not announced twice inside the link).
 *
 * Tracking parity: mirrors ButtonLink's Acuity hook exactly (isAcuityUrl ->
 * detectBookingType -> trackBeginBooking) so begin_booking attribution is
 * unchanged from the pill-only version. target=_blank + rel=noopener kept.
 */

export type StudioRate = {
  /** Room label, e.g. "Halve studio (voor 2 personen)". */
  label: string;
  /** Display price, e.g. "€12". */
  price: string;
  /** Acuity booking URL. */
  href: string;
};

export function StudioRateTable({
  headSpace,
  headDuration,
  cta,
  rows,
  className,
}: {
  headSpace: string;
  headDuration: string;
  cta: string;
  rows: StudioRate[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border bg-card text-sm", className)}>
      <div className="flex items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3 font-medium">
        <span>{headSpace}</span>
        <span className="shrink-0">{headDuration}</span>
      </div>

      {rows.map((row, i) => (
        <a
          key={row.href}
          href={row.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${cta} — ${row.label}, ${row.price}`}
          onClick={() => {
            if (isAcuityUrl(row.href)) {
              const { bookingType, planName } = detectBookingType(row.href);
              trackBeginBooking(bookingType, planName);
            }
          }}
          className={cn(
            "flex min-h-11 items-center justify-between gap-3 px-4 py-3 transition-colors",
            "hover:bg-muted/40 focus-visible:bg-muted/40 focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
            i < rows.length - 1 && "border-b",
          )}
        >
          <span className="font-medium">{row.label}</span>
          <span className="flex shrink-0 items-center gap-2">
            <span className="font-semibold">{row.price}</span>
            <span aria-hidden className={cn(buttonVariants({ size: "sm" }), "pointer-events-none")}>
              {cta}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

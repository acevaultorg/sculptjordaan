import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainers } from "@/config/trainers";

/**
 * TrainerChoiceGrid — all-trainers grid for the conversion-landing pages
 * /nl/gratis-intake + /en/free-intro.
 *
 * Operator directive 2026-05-20: "let people choose their trainers directly
 * on this page. people should not send whatsapp to general number, that's
 * only if they can not choose."
 *
 * Funnel change before/after:
 *   Before: visitor lands → dual CTA ("WhatsApp direct" || "Of kies je
 *           trainer") → if "kies trainer" → /nl/vind-jouw-personal-trainer
 *           → pick trainer → /nl/plan-gratis-intake-met-<id> → contact.
 *           4 steps; the WA fallback got equal visual weight as the chosen-
 *           trainer path → trainers send to general number, operator routes
 *           manually.
 *   After:  visitor lands → sees 9 trainer cards inline → tap one → that
 *           trainer's intake page (already mobile-fold-optimised today) →
 *           per-trainer WA OR form. 2 steps. General-WA available as a
 *           small fallback link below the grid for the rare visitor who
 *           can't decide.
 *
 * Differs from TrainerPreviewGrid (used on homepage):
 *   - shows ALL trainers, not just the top 4
 *   - links to /<locale>/plan-gratis-intake-met-<id> (the per-trainer intake
 *     PAGE) instead of direct WhatsApp — so the visitor sees the trainer
 *     they picked + can choose WA / form / Calendly there
 *   - no section header, no trust row, no footer CTAs — those live on the
 *     parent gratis-intake page already
 *   - tighter padding for the in-hero placement
 *
 * Server component — no client state needed.
 */

type Locale = "nl" | "en";

const COPY = {
  nl: {
    ctaCard: "Plan gratis intake",
    onRequest: "Op aanvraag",
    photoAlt: (name: string) => `${name}, personal trainer bij SculptClub Amsterdam Jordaan`,
  },
  en: {
    ctaCard: "Book free intro",
    onRequest: "On request",
    photoAlt: (name: string) => `${name}, personal trainer at SculptClub Amsterdam Jordaan`,
  },
} as const;

export function TrainerChoiceGrid({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {trainers.map((trainer) => (
        <Link
          key={trainer.id}
          href={`/${locale === "nl" ? "nl" : "en"}/${trainer.slug[locale]}`}
          data-cta={`gratis-intake-trainer-${trainer.id}`}
          className={`plausible-event-name=gratis_intake_pick_${trainer.id} group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-left transition-all hover:border-primary/60 hover:shadow-brand-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
        >
          {/* Square photo on mobile (denser per-card), 4:5 on larger screens. */}
          <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden">
            <Image
              src={trainer.image}
              alt={c.photoAlt(trainer.name)}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
            <div>
              <p className="text-base font-bold leading-tight text-foreground sm:text-lg">
                {trainer.name}
              </p>
              <p className="mt-1 line-clamp-1 text-xs text-muted-foreground sm:text-sm">
                {trainer.specialization[locale][0]}
                {trainer.specialization[locale].length > 1 && (
                  <span className="text-muted-foreground">
                    {" "}+ {trainer.specialization[locale].length - 1}
                  </span>
                )}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between gap-2 pt-2">
              <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                {trainer.rate ?? c.onRequest}
              </span>
              {/* CTA chip visible-at-rest on mobile — no hover state on touch. */}
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform sm:text-sm group-hover:translate-x-0.5"
                aria-hidden
              >
                {c.ctaCard}
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

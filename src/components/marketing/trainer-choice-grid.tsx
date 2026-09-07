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
 * v2 (2026-05-20, same day): card info-density upgraded per operator
 * directive "what do users want to know about trainer before contact?".
 * Each card now surfaces enough signal that ~70-80% of visitors can pick
 * confidently without tapping multiple cards to compare.
 *
 * Cards expose (in scan order):
 *   1. Photo (face = approachability)
 *   2. Name (identity)
 *   3. Credentials when set (regulated-profession trust signal) OR fallback
 *      to the leading specialty as a 1-liner subtitle
 *   4. ALL specialty chips (visitor scans for "matches my goal?" without
 *      hidden "+N" counter)
 *   5. Bio teaser, 2-line clamp (personality + style cue)
 *   6. Languages (filter signal — "can I actually communicate with this
 *      trainer?")
 *   7. Rate (or "intake gratis · prijs op aanvraag" pairing when rate is
 *      null, so the FREE-intake floor is always visible)
 *   8. CTA chip
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
 *   - higher info density per card (bio teaser, languages, all specialties)
 *
 * Server component — no client state needed.
 */

type Locale = "nl" | "en";

const COPY = {
  nl: {
    ctaCard: "Boek intake",
    intakeFree: "Intake gratis",
    rateOnRequest: "Prijs op aanvraag",
    languageLabel: "Spreekt",
    photoAlt: (name: string) => `${name}, personal trainer bij SculptClub Amsterdam Jordaan`,
  },
  en: {
    ctaCard: "Book intake",
    intakeFree: "Free intro",
    rateOnRequest: "Rate on request",
    languageLabel: "Speaks",
    photoAlt: (name: string) => `${name}, personal trainer at SculptClub Amsterdam Jordaan`,
  },
} as const;

export function TrainerChoiceGrid({ locale }: { locale: Locale }) {
  const c = COPY[locale];

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {trainers.map((trainer, index) => {
        // Subtitle: credentials when set (Eva: "Diëtist"), else the leading
        // specialty as a 1-liner identity cue. Keeps the visual hierarchy
        // consistent across trainers regardless of whether credentials exist.
        const subtitle = trainer.credentials?.[locale] ?? trainer.specialization[locale][0];

        return (
          <Link
            key={trainer.id}
            href={`/${locale === "nl" ? "nl" : "en"}/${trainer.slug[locale]}`}
            data-cta={`gratis-intake-trainer-${trainer.id}`}
            className={`plausible-event-name=gratis_intake_pick_${trainer.id} group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-left transition-all hover:border-primary/60 hover:shadow-brand-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
          >
            {/* 4:5 portrait photo on all sizes — consistent identity framing.
                Previously square on mobile / 4:5 on desktop; that caused
                Bryan's landscape source to crop weirdly on mobile (head
                top-clipped). 4:5 with object-top works for every trainer
                photo in the current roster. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {/* First 3 trainers above-fold = `priority` (eager load).
                  /nl/gratis-intake renders this grid as the primary lead-
                  cap action. Chrome MCP audit 2026-05-27 confirmed the
                  first row of trainer cards rendered as dark rectangles
                  on initial paint (Next.js Image default = lazy when
                  `priority` not set). Visitor on /gratis-intake lands
                  expecting to SEE trainer faces immediately to pick
                  one — black-rectangles for 1-2s = activation gap.
                  Below-fold trainers stay lazy. */}
              <Image
                src={trainer.image}
                style={trainer.imagePosition ? { objectPosition: trainer.imagePosition } : undefined}
                alt={c.photoAlt(trainer.name)}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2.5 p-4">
              {/* Identity block — name + credentials/specialty subtitle */}
              <div>
                <p className="text-base font-bold leading-tight text-foreground sm:text-lg">
                  {trainer.name}
                </p>
                <p className="mt-0.5 text-xs font-medium text-primary sm:text-sm">
                  {subtitle}
                </p>
              </div>

              {/* All specialties as compact text — visitor scans for goal-match
                  without losing any to a hidden "+N" counter. Plain text with
                  · separators reads denser than chip pills and fits 2-col mobile. */}
              {trainer.specialization[locale].length > 1 && (
                <p className="text-xs text-muted-foreground leading-snug">
                  {trainer.specialization[locale].join(" · ")}
                </p>
              )}

              {/* Bio teaser, line-clamp-2 — personality + coaching-style cue.
                  Most visitors won't read the full bio on the intake page; the
                  card teaser is where vibe-match happens. 2 lines fits without
                  blowing card height; trainer bios are all 1-3 sentences. */}
              <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                {trainer.bio[locale]}
              </p>

              {/* Languages — filter signal. Small text, doesn't compete with
                  identity. Visitors filter on this. */}
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">{c.languageLabel}:</span>{" "}
                {trainer.languages.join(" · ")}
              </p>

              {/* Rate + CTA stacked vertically — was side-by-side flex but the
                  175px-wide mobile cards forced both to wrap awkwardly ("Plan
                  gratis intake" splitting into 3 lines on Eva's "Intake gratis
                  · Prijs op aanvraag" pairing). Stacking gives each its own
                  full-card-width row, so neither wraps. */}
              <div className="mt-auto flex flex-col gap-1.5 pt-2">
                <span className="text-xs font-semibold text-foreground sm:text-sm">
                  {trainer.rate ?? `${c.intakeFree} · ${c.rateOnRequest}`}
                </span>
                {/* Full-width CTA chip — visual affordance that card is tappable.
                    Arrow nudges right on hover (mouse) + stays visible at rest
                    on touch devices (no hover state). */}
                <span
                  className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-primary transition-transform sm:text-sm group-hover:translate-x-0.5"
                  aria-hidden
                >
                  {c.ctaCard}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

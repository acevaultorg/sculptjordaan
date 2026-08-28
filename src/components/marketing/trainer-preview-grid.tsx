import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { trainers } from "@/config/trainers";
import { whatsappLinks } from "@/config/acuity";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";

/**
 * TrainerPreviewGrid — landing-page scroll-stop showing the trainer roster.
 *
 * Operator directive 2026-05-16: "i think landing page should already show
 * all trainers, after scroll for example."
 *
 * Funnel logic: today's Plausible audit (18 visitors, 63% bounce, Google
 * source 86% bounce / 29s avg) shows visitors LOOK but don't act. The
 * landing page never surfaced trainer faces — visitors had to navigate to
 * /nl/vind-jouw-personal-trainer to discover them. Faces + names + clear
 * "Plan gratis intake" CTAs on the homepage convert the curious "what does
 * SculptClub actually offer" scroller into a trainer-picker on first visit.
 *
 * Design: compact 4-card preview (top of DISPLAY_ORDER) + "view all"
 * footer link. Full TrainerFilterGrid (filters + 8 cards + bios) remains
 * on /nl/vind-jouw-personal-trainer for visitors who land there directly
 * (paid Google Ads for "personal trainer" now route here per 2026-05-16
 * ad-URL change).
 */

type Locale = "nl" | "en";

const COPY = {
  nl: {
    overline: "Onze trainers",
    title: "Maak kennis met je trainer",
    subtitle: `${trainers.length} personal trainers, eigen specialisatie, gratis intake. Geen abonnement, geen tussenpersoon.`,
    ctaCard: "Boek intake",
    ctaProfile: "Bekijk profiel",
    ariaProfile: (name: string) => `Bekijk het profiel van ${name}`,
    ctaAll: `Bekijk alle ${trainers.length} trainers`,
    ctaSeeStudio: "Bekijk de studio",
    seeStudioHref: "/nl/studio",
    rating: "5.0 op Google",
    photoAlt: (name: string) => `${name}, personal trainer bij SculptClub Amsterdam Jordaan`,
    rateLabel: "Tarief",
    onRequest: "Op aanvraag",
    viewAllHref: "/nl/vind-jouw-personal-trainer",
    ariaIntake: (name: string) => `Plan gratis intake met ${name} via WhatsApp`,
  },
  en: {
    overline: "Our trainers",
    title: "Meet your trainer",
    // 2026-06-02 (H) expat hook — every Jordaan rival (U.P., B-One, Omnia)
    // targets expats hard; SculptClub has bilingual trainers but buried it.
    // ALL trainers speak English (every roster entry has "EN" in languages),
    // so "all English-speaking" is accurate. No-Dutch-required removes the
    // single biggest hesitation for Amsterdam expats researching in English.
    subtitle: `${trainers.length} personal trainers — all English-speaking, no Dutch required. Distinct specialties, free intro. No membership, no middleman.`,
    ctaCard: "Book intake",
    ctaProfile: "View profile",
    ariaProfile: (name: string) => `View ${name}'s profile`,
    ctaAll: `View all ${trainers.length} trainers`,
    ctaSeeStudio: "See the studio",
    seeStudioHref: "/en/studio",
    rating: "5.0 on Google",
    photoAlt: (name: string) => `${name}, personal trainer at SculptClub Amsterdam Jordaan`,
    rateLabel: "Rate",
    onRequest: "On request",
    viewAllHref: "/en/find-personal-trainer",
    ariaIntake: (name: string) => `Book free intro with ${name} via WhatsApp`,
  },
} as const;

// Preview surfaces the top 4 trainers per the canonical DISPLAY_ORDER
// (eva, joey, alex, gezina). The full roster lives at /vind-jouw-personal-trainer.
// Why 4: fits a 4-column row on lg+ AND keeps the section to ~1 viewport
// height on mobile (2 col × 2 row) — strong scroll-stop without dominating.
const PREVIEW_COUNT = 4;

export function TrainerPreviewGrid({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const previewTrainers = trainers.slice(0, PREVIEW_COUNT);

  return (
    <Section wide className="bg-background">
      <SectionHeader
        overline={c.overline}
        title={c.title}
        description={c.subtitle}
      />

      {/* Trust row — Google rating signal directly under the section header.
          Small, single-line on mobile, doesn't compete with cards below. */}
      <FadeIn>
        <div className="mb-8 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold text-foreground">5.0</span>
          <span>·</span>
          <span>{c.rating}</span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {previewTrainers.map((trainer, i) => (
          <FadeIn key={trainer.id} delay={i * 0.08}>
            <div
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/60 hover:shadow-brand-lg"
            >
            {/* Card BODY -> the trainer's own page, not WhatsApp. Until
                2026-08-28 the whole card was a single target="_blank" link to
                WhatsApp, so the homepage — the site's busiest page — was the
                only trainer surface with no route to the 26 profile pages.
                TrainerFilterGrid already made exactly this change on
                2026-06-11 ("the grid previously bypassed intake pages"); the
                preview grid was missed. Information should lead to
                information; the booking CTA below stays one tap away. */}
            <Link
              href={`/${locale}/${trainer.slug[locale]}`}
              aria-label={c.ariaProfile(trainer.name)}
              data-cta={`home-trainer-profile-${trainer.id}`}
              className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {/* Square photo on mobile, 4:3 on larger screens — denser visual
                  per card on small screens where every pixel counts. */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden">
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
                  {/* Show one specialty chip + count of remaining — compact form
                      of the full chip list on /vind-jouw-personal-trainer.
                      Keeps each card readable at mobile-2-col size. */}
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground sm:text-sm">
                    {trainer.specialization[locale][0]}
                    {trainer.specialization[locale].length > 1 && (
                      // Was text-muted-foreground/70 → contrast 2.94:1 (fails
                      // WCAG AA 4.5:1 small text). Lighthouse mobile audit
                      // 2026-05-17 flagged. Bumped to base text-muted-foreground
                      // (4.5:1+) — still visually distinct from the primary
                      // specialty (no extra opacity needed; this is the "+ N"
                      // counter, secondary by virtue of being shorter).
                      <span className="text-muted-foreground">
                        {" "}+ {trainer.specialization[locale].length - 1}
                      </span>
                    )}
                  </p>
                  {/* Language line (H, 2026-06-02) — compact "NL · EN · PT"
                      under the specialty. Expat signal at the decision point:
                      every visitor sees which trainers speak their language.
                      Light + small so it reads as metadata, not a 4th chip. */}
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {trainer.languages.join(" · ")}
                  </p>
                </div>

              </div>
            </Link>

              <div className="mt-auto flex items-center justify-between gap-2 p-3 pt-0 sm:p-4 sm:pt-0">
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {trainer.rate ?? c.onRequest}
                  </span>
                  {/* Mobile users have no hover state — the CTA chip must be
                      visible-at-rest or visitors won't realize each card is
                      tappable. Was opacity-0+group-hover:opacity-100 before
                      2026-05-16 fix (operator audit: cards rendered but lacked
                      obvious "tap to book" affordance on mobile). */}
                  {/* Booking CTA — its own link, so the card body can reach
                      the profile. Honours trainer.bookingUrl: Roberta asked
                      (email 2026-07-25) not to publish a private mobile and
                      uses Calendly instead. The old code always called
                      trainerIntake(), which silently falls back to the STUDIO
                      number when a trainer has no whatsapp — she is outside
                      the top-4 preview today, so nothing was exposed, but a
                      DISPLAY_ORDER change would have routed her leads wrong. */}
                  <Link
                    href={
                      trainer.bookingUrl ??
                      whatsappLinks.trainerIntake(trainer.name, locale, trainer.whatsapp)
                    }
                    target="_blank"
                    rel="noopener"
                    aria-label={
                      trainer.bookingUrl
                        ? `${trainer.bookingLabel?.[locale] ?? c.ctaCard} — ${trainer.name}`
                        : c.ariaIntake(trainer.name)
                    }
                    data-cta={`home-trainer-${trainer.id}`}
                    className={`plausible-event-name=home_trainer_${trainer.id} inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-1 text-xs font-semibold text-primary transition-transform hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-sm group-hover:translate-x-0.5`}
                  >
                    {trainer.bookingUrl
                      ? trainer.bookingLabel?.[locale] ?? c.ctaCard
                      : c.ctaCard}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Dual footer CTAs — per operator funnel goals 2026-05-16:
          "every new user should book try-out / book see-the-studio / click
          try-out with trainer". Primary = view-all-trainers (book intake),
          secondary = see-the-studio (gallery/tour route for visitors who
          aren't yet ready to pick a trainer). Each trainer CARD above
          already exposes the third path: per-trainer WhatsApp intake. */}
      <FadeIn delay={PREVIEW_COUNT * 0.08}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Primary action — clean orange fill, no brand-tinted halo shadow.
              Was 'shadow-lg shadow-primary/30 hover:shadow-brand-lg' which produced
              the same orange aura we removed from the sticky bottom bar. Reduces
              total orange real-estate per viewport. */}
          <Link
            href={c.viewAllHref}
            data-cta="home-trainer-view-all"
            className="plausible-event-name=home_trainer_view_all inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            {c.ctaAll}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href={c.seeStudioHref}
            data-cta="home-trainer-see-studio"
            className="plausible-event-name=home_trainer_see_studio inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]"
          >
            {c.ctaSeeStudio}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}

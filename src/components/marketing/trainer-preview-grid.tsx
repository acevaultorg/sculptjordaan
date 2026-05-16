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
    subtitle: `${trainers.length} personal trainers, eigen specialisatie, gratis intake — vanaf €45 per sessie. 0% commissie, geen abonnement.`,
    ctaCard: "Plan gratis intake",
    ctaAll: `Bekijk alle ${trainers.length} trainers`,
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
    subtitle: `${trainers.length} personal trainers, distinct specialties, free intro — from €45 per session. 0% commission, no membership.`,
    ctaCard: "Book free intro",
    ctaAll: `View all ${trainers.length} trainers`,
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
            <Link
              href={whatsappLinks.trainerIntake(trainer.name, locale, trainer.whatsapp)}
              target="_blank"
              rel="noopener"
              aria-label={c.ariaIntake(trainer.name)}
              data-cta={`home-trainer-${trainer.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/60 hover:shadow-brand-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
                      <span className="text-muted-foreground/70">
                        {" "}+ {trainer.specialization[locale].length - 1}
                      </span>
                    )}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {trainer.rate ?? c.onRequest}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm"
                    aria-hidden
                  >
                    {c.ctaCard}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* View-all CTA — for visitors who want the full roster with filters,
          bios, and language/specialty selection. Routes to the canonical
          trainer hub where paid Google Ads also land (per 2026-05-16 fix). */}
      <FadeIn delay={PREVIEW_COUNT * 0.08}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href={c.viewAllHref}
            data-cta="home-trainer-view-all"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-brand-lg active:scale-[0.98]"
          >
            {c.ctaAll}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight, SlidersHorizontal, ChevronDown, Globe } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/sections/section";
import { whatsappLinks } from "@/config/acuity";
import type { Trainer } from "@/config/trainers";

type LocaleProp = "nl" | "en";

interface TrainerFilterGridProps {
  trainers: Trainer[];
  locale: LocaleProp;
  /** Hide the specialty/language filter (used when the list is already a goal match). */
  hideFilters?: boolean;
  /** Goal the visitor picked on the PT hub — prefilled into the WhatsApp intake message. */
  goalLabel?: string;
  /** Goal id — carried to the trainer profile as ?doel= so the intake form is preselected. */
  goalId?: string;
}

const copy = {
  nl: {
    filterHeading: "Filter op specialiteit of taal",
    filterToggle: "Filteren",
    specLabel: "Specialiteit",
    langLabel: "Taal",
    clearAll: "Alles wissen",
    showing: (shown: number, total: number) =>
      shown === total ? `Alle ${total} trainers` : `${shown} van ${total} trainers`,
    noMatches: "Geen trainers gevonden voor deze filters.",
    resetFilters: "Reset filters",
    languages: "Talen",
    rate: "Tarief",
    onRequest: "Op aanvraag",
    requestPrice: "Vraag prijs aan →",
    bookIntro: "Boek intake",
    /** SCULPT TRANSFORMATION — the shared FORMAT SculptClub markets; the trainer
     *  sells it and sets the exact price at or above the €299 floor, which is why
     *  every line here keeps "vanaf" and defers the exact price to the intake. */
    transformationPrice: "vanaf €299 / 4 weken",
    transformationIncl: "incl. onbeperkt Open Gym",
    transformationCta: "Start transformatie · vanaf €299",
    tryFree: "Probeer gratis",
    ariaTransformation: (name: string) =>
      `Start een SCULPT TRANSFORMATION van 4 weken met ${name}. Vanaf €299, prijs afgesproken bij de gratis intake`,
    viewProfile: "Bekijk profiel & beschikbaarheid",
    photoAlt: (name: string) => `Foto van ${name}, personal trainer bij SculptClub Amsterdam`,
    ariaIntro: (name: string) => `Plan een gratis intake met ${name} via WhatsApp`,
    ariaProfile: (name: string) => `Bekijk het profiel van ${name}`,
    ariaInstagram: (handle: string) => `Bekijk ${handle} op Instagram`,
    website: (label: string) => `Methode & ervaringen: ${label}`,
  },
  en: {
    filterHeading: "Filter by specialty or language",
    filterToggle: "Filter",
    specLabel: "Specialty",
    langLabel: "Language",
    clearAll: "Clear all",
    showing: (shown: number, total: number) =>
      shown === total ? `All ${total} trainers` : `${shown} of ${total} trainers`,
    noMatches: "No trainers match these filters.",
    resetFilters: "Reset filters",
    languages: "Languages",
    rate: "Rate",
    onRequest: "On request",
    requestPrice: "Ask for price →",
    bookIntro: "Book intake",
    /** See the nl block — "from" is load-bearing, the trainer sets the price. */
    transformationPrice: "from €299 / 4 weeks",
    transformationIncl: "unlimited Open Gym included",
    transformationCta: "Start your transformation · from €299",
    tryFree: "Try for free",
    ariaTransformation: (name: string) =>
      `Start a 4-week SCULPT TRANSFORMATION with ${name}. From €299, price agreed at the free intro`,
    viewProfile: "View profile & availability",
    photoAlt: (name: string) => `Photo of ${name}, personal trainer at SculptClub Amsterdam`,
    ariaIntro: (name: string) => `Book a free intro with ${name} via WhatsApp`,
    ariaProfile: (name: string) => `View ${name}'s profile`,
    ariaInstagram: (handle: string) => `View ${handle} on Instagram`,
    website: (label: string) => `Method & client stories: ${label}`,
  },
} as const;

/** Fires a one-time "Trainer Impression" Plausible event when a trainer card
 *  first scrolls >=50% into view (IntersectionObserver, deduped per page load).
 *  Exposure denominator for a fair per-trainer CTR — WhatsApp Click ÷ Trainer
 *  Impression, both keyed on trainer_name so the two join. Set up 2026-06-08 to
 *  replace raw click counts (which only reflected traffic + each trainer's own
 *  following, not appeal at equal exposure). */
function ImpressionCard({ name, children }: { name: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fired.current) {
          fired.current = true;
          // Dual-fire — GA4 is the live destination. window.plausible is a
          // deliberate no-op stub since Plausible was retired 2026-07-04, so
          // before 2026-08-29 this impression was recorded nowhere: the TOP of
          // the trainer-discovery funnel (which trainers actually get seen) was
          // invisible, making impression -> click -> intake unanswerable.
          window.plausible?.("Trainer Impression", {
            props: { trainer_name: name, source_page: window.location.pathname },
          });
          const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
          if (typeof g === "function") {
            g("event", "trainer_impression", {
              trainer_name: name,
              source_page: window.location.pathname,
            });
          }
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [name]);
  return (
    <div ref={ref} className="h-full">
      {children}
    </div>
  );
}

export function TrainerFilterGrid({ trainers, locale, hideFilters = false, goalLabel, goalId }: TrainerFilterGridProps) {
  const t = copy[locale];

  const allSpecs = useMemo(() => {
    const set = new Set<string>();
    trainers.forEach((tr) => tr.specialization[locale].forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [trainers, locale]);

  const allLangs = useMemo(() => {
    const set = new Set<string>();
    trainers.forEach((tr) => tr.languages.forEach((l) => set.add(l)));
    return Array.from(set).sort();
  }, [trainers]);

  const [selectedSpecs, setSelectedSpecs] = useState<Set<string>>(new Set());
  const [selectedLangs, setSelectedLangs] = useState<Set<string>>(new Set());
  // The specialty list is long (~25 tags); keep the filter folded by default so
  // it doesn't push the trainer cards far down the page (operator 2026-07-04
  // "this filters should be fold in fold out, its too long"). One tap expands it.
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleSpec = (spec: string) => {
    setSelectedSpecs((prev) => {
      const next = new Set(prev);
      if (next.has(spec)) next.delete(spec);
      else next.add(spec);
      return next;
    });
  };

  const toggleLang = (lang: string) => {
    setSelectedLangs((prev) => {
      const next = new Set(prev);
      if (next.has(lang)) next.delete(lang);
      else next.add(lang);
      return next;
    });
  };

  const clearAll = () => {
    setSelectedSpecs(new Set());
    setSelectedLangs(new Set());
  };

  const hasActiveFilters = selectedSpecs.size > 0 || selectedLangs.size > 0;

  const filteredTrainers = useMemo(() => {
    return trainers.filter((tr) => {
      const specMatch =
        selectedSpecs.size === 0 ||
        tr.specialization[locale].some((s) => selectedSpecs.has(s));
      const langMatch =
        selectedLangs.size === 0 ||
        tr.languages.some((l) => selectedLangs.has(l));
      return specMatch && langMatch;
    });
  }, [trainers, selectedSpecs, selectedLangs, locale]);

  return (
    <>
      {/* Filter controls */}
      {!hideFilters && (
      <FadeIn>
        <div
          className="mb-8 rounded-2xl border border-border/60 bg-muted/40 p-5 sm:p-6"
          aria-label={t.filterHeading}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Toggle: the whole "count + Filter" control folds the tag lists
                in/out. aria-expanded/controls make it a proper disclosure. */}
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              aria-controls="trainer-filter-panel"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <span>{t.filterToggle}</span>
              <span className="text-muted-foreground">· {t.showing(filteredTrainers.length, trainers.length)}</span>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${filtersOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
                {t.clearAll}
              </button>
            )}
          </div>

          {filtersOpen && (
            <div id="trainer-filter-panel" className="mt-4 space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t.specLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {allSpecs.map((spec) => {
                    const active = selectedSpecs.has(spec);
                    return (
                      <button
                        key={spec}
                        type="button"
                        onClick={() => toggleSpec(spec)}
                        aria-pressed={active}
                        className={
                          active
                            ? "rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all"
                            : "rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-muted"
                        }
                      >
                        {spec}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t.langLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {allLangs.map((lang) => {
                    const active = selectedLangs.has(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleLang(lang)}
                        aria-pressed={active}
                        className={
                          active
                            ? "rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all"
                            : "rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-muted"
                        }
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeIn>
      )}

      {/* Results */}
      {filteredTrainers.length === 0 ? (
        <FadeIn>
          <div className="rounded-2xl border border-dashed border-border/60 bg-muted/30 px-6 py-12 text-center">
            <p className="mb-4 text-sm text-muted-foreground">{t.noMatches}</p>
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.resetFilters}
            </button>
          </div>
        </FadeIn>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTrainers.map((trainer, i) => (
            <FadeIn key={trainer.id} delay={i * 0.1}>
              <ImpressionCard name={trainer.name}>
              <Card className="h-full flex flex-col overflow-hidden !rounded-none hover:shadow-brand-lg transition-shadow duration-300 !pt-0 !gap-0">
                <div className="relative aspect-[4/3] w-full">
                  {/* First 3 trainers above-fold get `priority` to render
                      immediately. /vind-jouw-personal-trainer is the SEO-
                      indexed hub + organic traffic destination — Chrome
                      MCP audit 2026-05-27 confirmed the first row of
                      trainer cards rendered as dark rectangles for
                      ~1-2s on initial paint (Next.js Image default =
                      lazy). Below-fold trainers stay lazy to preserve
                      LCP budget. Index from filteredTrainers map below. */}
                  <Image
                    src={trainer.image}
                    style={trainer.imagePosition ? { objectPosition: trainer.imagePosition } : undefined}
                    alt={t.photoAlt(trainer.name)}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <CardTitle className="text-lg">{trainer.name}</CardTitle>
                      {trainer.credentials && (
                        <CardDescription>{trainer.credentials[locale]}</CardDescription>
                      )}
                    </div>
                    {trainer.instagram && trainer.instagramHandle && (
                      <a
                        href={trainer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.ariaInstagram(trainer.instagramHandle)}
                        className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialization[locale].map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trainer.bio[locale]}
                  </p>

                  <div className="space-y-0.5 text-sm">
                    <p>
                      <span className="text-muted-foreground">{t.languages}:</span>{" "}
                      {trainer.languages.join(", ")}
                    </p>
                    {/* SCULPT TRANSFORMATION price line (operator 2026-09-19:
                        "we dont name hourly rate, we say 'from 299/4 weeks'").
                        The per-session rate is NOT shown on the hub any more —
                        it still lives on the trainer's own intake page, which
                        the "Bekijk profiel" link below reaches, so someone who
                        wants an hour can still find the hourly price.

                        Shown identically for every trainer ON PURPOSE: this is
                        the shared format SculptClub markets, not a per-trainer
                        quote. That also retires the old "Op aanvraag" /
                        "Vraag prijs aan" split, which advertised the absence of
                        a price on the 8 trainers whose rate is null. */}
                    <p className="font-semibold">
                      {t.transformationPrice}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {t.transformationIncl}
                      </span>
                    </p>
                  </div>
                  {trainer.website && (
                    <a
                      href={trainer.website.url}
                      target="_blank"
                      rel="noopener"
                      data-trainer-website={trainer.name}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
                    >
                      <Globe className="h-4 w-4" aria-hidden="true" />
                      {t.website(trainer.website.label)}
                    </a>
                  )}
                </CardContent>

                <CardFooter className="flex-col gap-2 border-t-0 bg-transparent pt-2 pb-4">
                  {/* Trainers with their own booking link (Calendly) get that
                      as the card CTA, with their own wording — Roberta offers a
                      free discovery call, not an intake, and asked us not to
                      publish a private number (2026-07-25). Everyone else keeps
                      the WhatsApp intake link. */}
                  {/* PRIMARY — SCULPT TRANSFORMATION (paid intent).
                      Goes to the TRAINER's WhatsApp, never to a SculptClub
                      checkout: the trainer sells and collects the package and
                      SculptClub earns the room rent, exactly as before. A
                      SculptClub-collected €299 would be a different business
                      (payment flow, VAT, liability, trainer agreements) and is
                      explicitly NOT authorised — do not "upgrade" this to a
                      purchase link without a written operator decision.
                      Roberta has no published number (2026-07-25): trainerTransformation
                      falls back to the central SculptClub line for her, which is
                      correct here. Do NOT route her transformation to her
                      bookingUrl — that Calendly is a FREE discovery call, so a
                      "vanaf €299" button pointing at it would promise one thing
                      and open another. Her free call stays the secondary CTA. */}
                  <Link
                    href={whatsappLinks.trainerTransformation(trainer.name, locale, trainer.whatsapp, goalLabel)}
                    target="_blank"
                    rel="noopener"
                    data-intent="trainer"
                    data-pricing="paid"
                    aria-label={t.ariaTransformation(trainer.name)}
                    className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    {t.transformationCta}
                  </Link>
                  {/* SECONDARY — the existing free intake, unchanged in
                      destination and wording ("probeersessie" family, never
                      "proefles"); only demoted from filled to outline so the
                      paid action leads. */}
                  <Link
                    href={
                      trainer.bookingUrl ??
                      whatsappLinks.trainerIntake(trainer.name, locale, trainer.whatsapp, goalLabel)
                    }
                    target="_blank"
                    rel="noopener"
                    data-intent="trainer"
                    data-pricing="free"
                    aria-label={
                      trainer.bookingUrl
                        ? `${trainer.bookingLabel?.[locale] ?? t.bookIntro} — ${trainer.name}`
                        : t.ariaIntro(trainer.name)
                    }
                    className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-transparent px-6 py-3 text-center text-sm font-semibold text-foreground hover:border-brand hover:text-brand transition-colors"
                  >
                    {trainer.bookingUrl
                      ? trainer.bookingLabel?.[locale] ?? t.tryFree
                      : t.tryFree}
                  </Link>
                  {/* Secondary, low-weight path to the trainer's intake page —
                      where bio detail, the structured intake form, and (when
                      operator-supplied) availability + real testimonials live.
                      The grid's primary CTA goes straight to WhatsApp (fewest
                      taps); this text link captures the segment that wants to
                      read more / fill a form before reaching out, without adding
                      a second competing filled button (paralysis-safe). Added
                      2026-06-11 to connect the richer-profiles work to the main
                      discovery path (the grid previously bypassed intake pages). */}
                  <Link
                    href={`/${locale}/${trainer.slug[locale]}${goalId ? `?doel=${goalId}` : ""}`}
                    aria-label={t.ariaProfile(trainer.name)}
                    className="inline-flex items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-brand transition-colors"
                  >
                    {t.viewProfile}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              </ImpressionCard>
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}

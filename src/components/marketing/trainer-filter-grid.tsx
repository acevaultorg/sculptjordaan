"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/sections/section";
import { whatsappLinks } from "@/config/acuity";
import type { Trainer } from "@/config/trainers";

type LocaleProp = "nl" | "en";

interface TrainerFilterGridProps {
  trainers: Trainer[];
  locale: LocaleProp;
}

const copy = {
  nl: {
    filterHeading: "Filter op specialiteit of taal",
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
    bookIntro: "Plan gratis intake",
    requestPrice: "Vraag tarief aan",
    photoAlt: (name: string) => `Foto van ${name}, personal trainer bij SculptClub Amsterdam`,
    ariaPrice: (name: string) => `Vraag tarief aan bij ${name} via WhatsApp`,
  },
  en: {
    filterHeading: "Filter by specialty or language",
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
    bookIntro: "Book free intro",
    requestPrice: "Request price",
    photoAlt: (name: string) => `Photo of ${name}, personal trainer at SculptClub Amsterdam`,
    ariaPrice: (name: string) => `Request ${name}'s price via WhatsApp`,
  },
} as const;

export function TrainerFilterGrid({ trainers, locale }: TrainerFilterGridProps) {
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
      <FadeIn>
        <div
          className="mb-8 rounded-2xl border border-border/60 bg-muted/40 p-5 sm:p-6"
          aria-label={t.filterHeading}
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              {t.showing(filteredTrainers.length, trainers.length)}
            </p>
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

          <div className="space-y-4">
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
        </div>
      </FadeIn>

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
              <Link
                href={whatsappLinks.trainerPriceRequest(trainer.name, locale, trainer.whatsapp)}
                target="_blank"
                rel="noopener"
                aria-label={t.ariaPrice(trainer.name)}
                className="block h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-brand-lg transition-shadow duration-300 !pt-0 !gap-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={trainer.image}
                      alt={t.photoAlt(trainer.name)}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    {trainer.credentials && (
                      <CardDescription>{trainer.credentials}</CardDescription>
                    )}
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
                      <p>
                        <span className="text-muted-foreground">{t.rate}:</span>{" "}
                        {trainer.rate ?? t.onRequest}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="border-t-0 bg-transparent pt-2 pb-4">
                    <span className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground">
                      {trainer.rate ? t.bookIntro : t.requestPrice}
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </>
  );
}

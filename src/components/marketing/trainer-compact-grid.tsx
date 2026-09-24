"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Globe } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";
import type { Trainer } from "@/config/trainers";
import type { PtGoal } from "@/config/pt-goals";

type LocaleProp = "nl" | "en";

/**
 * Compact trainer grid for the PT hub (/nl/vind-jouw-personal-trainer +
 * /en/find-personal-trainer). Operator 2026-09-24, from his phone: the page was
 * "very long and confusing" and "can look way better, big good images".
 *
 * Each card is a BIG 4:5 photo, the name, ONE specialty line and ONE button —
 * the existing free-intake link (same destination, same data-intent/pricing
 * attributes as the old TrainerFilterGrid's intake button). Everything else
 * (bio, languages, the paid SCULPT TRANSFORMATION link, own website, profile)
 * sits behind a native <details> "Meer" so it stays in the HTML for search and
 * AI crawlers but off the scroll.
 *
 * Filters reuse existing data only: goals from src/config/pt-goals.ts
 * (trainerIds) and trainer.languages. Order is always trainers.ts DISPLAY_ORDER.
 */

const copy = {
  nl: {
    goalLabel: "Doel",
    langLabel: "Taal",
    all: "Alle",
    anyLang: "Elke taal",
    count: (n: number, total: number) => (n === total ? `${total} trainers` : `${n} van ${total} trainers`),
    none: "Geen trainer voor deze combinatie.",
    reset: "Toon alle trainers",
    tryFree: "Probeer gratis",
    more: "Meer",
    less: "Minder",
    languages: "Talen",
    price: "Vanaf €299 per 4 weken, incl. onbeperkt Open Gym",
    transformation: "Start transformatie · vanaf €299",
    ariaTransformation: (name: string) =>
      `Start een SCULPT TRANSFORMATION van 4 weken met ${name}. Vanaf €299, prijs afgesproken bij de gratis intake`,
    website: (label: string) => `Methode & ervaringen: ${label}`,
    profile: "Profiel & beschikbaarheid",
    instagram: "Instagram",
    tiktok: "TikTok",
    photoAlt: (name: string) => `Foto van ${name}, personal trainer bij SculptClub Amsterdam`,
    ariaIntro: (name: string) => `Plan een gratis intake met ${name} via WhatsApp`,
    langNames: { NL: "Nederlands", EN: "Engels", PT: "Portugees", RU: "Russisch", IT: "Italiaans", ES: "Spaans", FR: "Frans", DE: "Duits" } as Record<string, string>,
  },
  en: {
    goalLabel: "Goal",
    langLabel: "Language",
    all: "All",
    anyLang: "Any language",
    count: (n: number, total: number) => (n === total ? `${total} trainers` : `${n} of ${total} trainers`),
    none: "No trainer for this combination.",
    reset: "Show all trainers",
    tryFree: "Try for free",
    more: "More",
    less: "Less",
    languages: "Languages",
    price: "From €299 per 4 weeks, unlimited Open Gym included",
    transformation: "Start your transformation · from €299",
    ariaTransformation: (name: string) =>
      `Start a 4-week SCULPT TRANSFORMATION with ${name}. From €299, price agreed at the free intro`,
    website: (label: string) => `Method & client stories: ${label}`,
    profile: "Profile & availability",
    instagram: "Instagram",
    tiktok: "TikTok",
    photoAlt: (name: string) => `Photo of ${name}, personal trainer at SculptClub Amsterdam`,
    ariaIntro: (name: string) => `Book a free intro with ${name} via WhatsApp`,
    langNames: { NL: "Dutch", EN: "English", PT: "Portuguese", RU: "Russian", IT: "Italian", ES: "Spanish", FR: "French", DE: "German" } as Record<string, string>,
  },
} as const;

/** One-time trainer_impression event per card (same event the old grid fired,
 *  so the impression → click funnel in GA4 keeps its denominator). */
function useImpression(name: string) {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fired.current) {
          fired.current = true;
          window.plausible?.("Trainer Impression", {
            props: { trainer_name: name, source_page: window.location.pathname },
          });
          const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
          if (typeof g === "function") {
            g("event", "trainer_impression", { trainer_name: name, source_page: window.location.pathname });
          }
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [name]);
  return ref;
}

const chip = (active: boolean) =>
  active
    ? "inline-flex min-h-11 shrink-0 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background"
    : "inline-flex min-h-11 shrink-0 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40";

function TrainerCard({
  trainer,
  locale,
  goal,
  priority,
}: {
  trainer: Trainer;
  locale: LocaleProp;
  goal: PtGoal | null;
  priority: boolean;
}) {
  const t = copy[locale];
  const ref = useImpression(trainer.name);
  const goalLabel = goal?.title[locale];
  const specialty = trainer.specialization[locale].slice(0, 2).join(" · ");
  const introHref = trainer.bookingUrl ?? whatsappLinks.trainerIntake(trainer.name, locale, trainer.whatsapp, goalLabel);
  const introLabel = trainer.bookingUrl ? trainer.bookingLabel?.[locale] ?? t.tryFree : t.tryFree;

  return (
    <article
      ref={ref}
      data-trainer-card={trainer.id}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[4/5] w-full bg-muted">
        {trainer.image ? (
          <Image
            src={trainer.image}
            alt={t.photoAlt(trainer.name)}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top"
            style={trainer.imagePosition ? { objectPosition: trainer.imagePosition } : undefined}
          />
        ) : (
          // Branded placeholder — never a scraped photo (trainer's copyright + face).
          <div className="absolute inset-0 flex items-center justify-center bg-brand/10" aria-hidden="true">
            <span className="font-heading text-6xl font-bold text-foreground/40">{trainer.name.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-heading text-lg font-bold leading-tight sm:text-xl">{trainer.name}</h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground sm:text-sm">{specialty}</p>

        <Link
          href={introHref}
          target="_blank"
          rel="noopener"
          data-intent="trainer"
          data-pricing="free"
          aria-label={trainer.bookingUrl ? `${introLabel} — ${trainer.name}` : t.ariaIntro(trainer.name)}
          className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-brand px-3 py-2 text-center text-sm font-semibold leading-tight text-brand-foreground transition-colors hover:bg-brand-dark"
        >
          {introLabel}
        </Link>

        <details className="group mt-1">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">{t.more}</span>
            <span className="hidden group-open:inline">{t.less}</span>
            <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="space-y-3 pb-1 pt-1 text-sm">
            {trainer.credentials && <p className="font-medium">{trainer.credentials[locale]}</p>}
            <p className="leading-relaxed text-muted-foreground">{trainer.bio[locale]}</p>
            <p>
              <span className="text-muted-foreground">{t.languages}:</span>{" "}
              {trainer.languages.map((l) => t.langNames[l] ?? l).join(", ")}
            </p>
            <p className="font-semibold">{t.price}</p>
            {/* Paid intent, unchanged destination + tracking (trainer's WhatsApp;
                the trainer sells and collects — see whatsappLinks.trainerTransformation). */}
            <Link
              href={whatsappLinks.trainerTransformation(trainer.name, locale, trainer.whatsapp, goalLabel)}
              target="_blank"
              rel="noopener"
              data-intent="trainer"
              data-pricing="paid"
              aria-label={t.ariaTransformation(trainer.name)}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-border px-3 py-2 text-center text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {t.transformation}
            </Link>
            {trainer.website && (
              <a
                href={trainer.website.url}
                target="_blank"
                rel="noopener"
                data-trainer-website={trainer.name}
                className="flex min-h-11 items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
              >
                <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                {t.website(trainer.website.label)}
              </a>
            )}
            <div className="flex flex-wrap items-center gap-x-4">
              <Link
                href={`/${locale}/${trainer.slug[locale]}${goal ? `?doel=${goal.id}` : ""}`}
                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-brand hover:underline underline-offset-4"
              >
                {t.profile}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              {trainer.instagram && (
                <a
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-brand hover:underline underline-offset-4"
                >
                  {t.instagram}
                </a>
              )}
              {trainer.tiktok && (
                <a
                  href={trainer.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-brand hover:underline underline-offset-4"
                >
                  {t.tiktok}
                </a>
              )}
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}

export function TrainerCompactGrid({
  trainers,
  goals,
  locale,
}: {
  trainers: Trainer[];
  goals: PtGoal[];
  locale: LocaleProp;
}) {
  const t = copy[locale];
  const [goalId, setGoalId] = useState<string | null>(null);
  const [lang, setLang] = useState<string | null>(null);

  const langs = useMemo(() => {
    const set = new Set<string>();
    trainers.forEach((tr) => tr.languages.forEach((l) => set.add(l)));
    // Most-spoken first (EN/NL cover everyone), then the rest alphabetically.
    return Array.from(set).sort((a, b) => {
      const ca = trainers.filter((tr) => tr.languages.includes(a)).length;
      const cb = trainers.filter((tr) => tr.languages.includes(b)).length;
      return cb - ca || a.localeCompare(b);
    });
  }, [trainers]);

  const goal = goals.find((g) => g.id === goalId) ?? null;
  const shown = trainers.filter(
    (tr) => (!goal || goal.trainerIds.includes(tr.id)) && (!lang || tr.languages.includes(lang)),
  );

  const pickGoal = (id: string | null) => {
    setGoalId(id);
    if (!id) return;
    const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof g === "function") g("event", "goal_select", { goal_id: id, source_page: window.location.pathname });
  };

  return (
    <div>
      <div className="space-y-2">
        <div role="group" aria-label={t.goalLabel} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          <button type="button" aria-pressed={!goalId} onClick={() => pickGoal(null)} className={chip(!goalId)}>
            {t.all}
          </button>
          {goals.map((g) => (
            <button key={g.id} type="button" aria-pressed={goalId === g.id} onClick={() => pickGoal(g.id)} className={chip(goalId === g.id)}>
              {g.short[locale]}
            </button>
          ))}
        </div>
        <div role="group" aria-label={t.langLabel} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          <button type="button" aria-pressed={!lang} onClick={() => setLang(null)} className={chip(!lang)}>
            {t.anyLang}
          </button>
          {langs.map((l) => (
            <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)} className={chip(lang === l)}>
              {t.langNames[l] ?? l}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {t.count(shown.length, trainers.length)}
        </p>
      </div>

      {shown.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-dashed border-border px-6 py-10 text-center">
          <p className="mb-3 text-sm text-muted-foreground">{t.none}</p>
          <button
            type="button"
            onClick={() => {
              setGoalId(null);
              setLang(null);
            }}
            className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold"
          >
            {t.reset}
          </button>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((trainer, i) => (
            <TrainerCard key={trainer.id} trainer={trainer} locale={locale} goal={goal} priority={i < 2} />
          ))}
        </div>
      )}
    </div>
  );
}

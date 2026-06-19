"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { whatsappLinks } from "@/config/acuity";
import type { Locale } from "@/config/site";

/**
 * Studio-rental cost calculator — the rent-vs-commission truth as live math.
 *
 * Premise (operator's true model, kept as the LEGIT comparative contrast, not
 * the killed "0% commissie" self-framing): a freelance PT renting the SculptClub
 * studio pays only hourly rent (€12 half / €17 full) and keeps 100% of their
 * session rate — vs a commercial gym that takes 30-50% commission on every
 * session. This makes that delta concrete + euro-denominated for the highest-LTV
 * audience (renting trainers).
 *
 * All-controlled-state + inline-derived math → no effects (respects the
 * react-hooks/set-state-in-effect lint rule). Sliders, not number inputs, so
 * the 81%-mobile audience never gets a keyboard.
 */

const WEEKS_PER_MONTH = 4.33;

type Studio = "half" | "full";

const COPY = {
  nl: {
    a11ySessions: "Sessies per week",
    a11yRate: "Jouw tarief per sessie in euro",
    a11yCommission: "Commissie die een sportschool pakt, in procent",
    sessionsLabel: "Sessies per week",
    rateLabel: "Jouw tarief per sessie",
    studioLabel: "Welke studio",
    studioHalf: "Halve studio · 1-op-1 (€12/uur)",
    studioFull: "Hele studio · small group (€17/uur)",
    commissionLabel: "Een gym pakt commissie van",
    commissionHint: "Sportscholen in Amsterdam (Sportcity, David Lloyd…) pakken doorgaans 30–50% van je sessietarief.",
    resultEyebrow: "Bij SculptClub huur je alleen de ruimte",
    resultLead: "Je houdt",
    resultTail: "méér per maand",
    vsGym: (c: number) => `dan bij een gym met ${c}% commissie`,
    perYear: (y: string) => `Dat is ${y} per jaar die je zelf houdt.`,
    breakdownRevenue: "Jouw omzet",
    breakdownSculpt: "Bij SculptClub — alleen huur",
    breakdownSculptKeep: "je houdt",
    breakdownGym: (c: number) => `Bij een ${c}%-commissie gym`,
    breakdownGymTakes: "de gym pakt",
    perMonth: "/maand",
    rentLine: (r: string) => `huur ${r}`,
    note: "Op basis van sessies van 60 min. Met een strippenkaart (tot 23% korting) houd je nog meer over. Jij bepaalt je eigen tarief, klanten en rooster.",
    ctaWhatsapp: "WhatsApp ons over studio huren",
    ctaRates: "Bekijk alle tarieven & pakketten",
    ratesHref: "/nl/studio-huren",
  },
  en: {
    a11ySessions: "Sessions per week",
    a11yRate: "Your rate per session in euros",
    a11yCommission: "Commission a gym takes, in percent",
    sessionsLabel: "Sessions per week",
    rateLabel: "Your rate per session",
    studioLabel: "Which studio",
    studioHalf: "Half studio · 1-on-1 (€12/hr)",
    studioFull: "Full studio · small group (€17/hr)",
    commissionLabel: "A gym takes a commission of",
    commissionHint: "Amsterdam chain gyms (Sportcity, David Lloyd…) typically take 30–50% of your session rate.",
    resultEyebrow: "At SculptClub you only rent the space",
    resultLead: "You keep",
    resultTail: "more per month",
    vsGym: (c: number) => `than at a gym taking ${c}% commission`,
    perYear: (y: string) => `That's ${y} a year you keep yourself.`,
    breakdownRevenue: "Your revenue",
    breakdownSculpt: "At SculptClub — rent only",
    breakdownSculptKeep: "you keep",
    breakdownGym: (c: number) => `At a ${c}%-commission gym`,
    breakdownGymTakes: "the gym takes",
    perMonth: "/month",
    rentLine: (r: string) => `rent ${r}`,
    note: "Based on 60-min sessions. With a discount pack (up to 23% off) you keep even more. You set your own rate, clients and schedule.",
    ctaWhatsapp: "WhatsApp us about renting the studio",
    ctaRates: "See all rates & packages",
    ratesHref: "/en/studio-rental",
  },
} as const;

function euro(n: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "nl" ? "nl-NL" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));
}

export function StudioRentalCalculator({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const wa = locale === "nl" ? whatsappLinks.studioNl : whatsappLinks.studioEn;

  const [sessionsWk, setSessionsWk] = useState(8);
  const [rate, setRate] = useState(60);
  const [studio, setStudio] = useState<Studio>("half");
  const [commission, setCommission] = useState(40);

  // Derived — computed every render from state, no effect needed.
  const hourly = studio === "full" ? 17 : 12;
  const sessionsMo = Math.round(sessionsWk * WEEKS_PER_MONTH);
  const revenueMo = sessionsMo * rate;
  const rentMo = sessionsMo * hourly;
  const netSculpt = revenueMo - rentMo;
  const netGym = revenueMo * (1 - commission / 100);
  const deltaMo = netSculpt - netGym;
  const deltaYr = deltaMo * 12;

  const rangeCls =
    "w-full cursor-pointer [accent-color:var(--brand)] h-2 rounded-full";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="grid gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
        {/* Sessions per week */}
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-sessions" className="text-sm font-medium">
              {c.sessionsLabel}
            </label>
            <span className="text-lg font-bold text-brand">{sessionsWk}</span>
          </div>
          <input
            id="calc-sessions"
            type="range"
            min={1}
            max={30}
            step={1}
            value={sessionsWk}
            aria-label={c.a11ySessions}
            onChange={(e) => setSessionsWk(Number(e.target.value))}
            className={`mt-2 ${rangeCls}`}
          />
        </div>

        {/* Rate per session */}
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-rate" className="text-sm font-medium">
              {c.rateLabel}
            </label>
            <span className="text-lg font-bold text-brand">{euro(rate, locale)}</span>
          </div>
          <input
            id="calc-rate"
            type="range"
            min={30}
            max={150}
            step={5}
            value={rate}
            aria-label={c.a11yRate}
            onChange={(e) => setRate(Number(e.target.value))}
            className={`mt-2 ${rangeCls}`}
          />
        </div>

        {/* Studio toggle */}
        <div>
          <span className="text-sm font-medium">{c.studioLabel}</span>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {(["half", "full"] as Studio[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStudio(s)}
                aria-pressed={studio === s}
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  studio === s
                    ? "border-brand bg-brand/10 text-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-brand/50"
                }`}
              >
                {s === "half" ? c.studioHalf : c.studioFull}
              </button>
            ))}
          </div>
        </div>

        {/* Commission slider */}
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-commission" className="text-sm font-medium">
              {c.commissionLabel}
            </label>
            <span className="text-lg font-bold text-foreground">{commission}%</span>
          </div>
          <input
            id="calc-commission"
            type="range"
            min={20}
            max={50}
            step={5}
            value={commission}
            aria-label={c.a11yCommission}
            onChange={(e) => setCommission(Number(e.target.value))}
            className={`mt-2 ${rangeCls}`}
          />
          <p className="mt-1.5 text-xs text-muted-foreground">{c.commissionHint}</p>
        </div>

        {/* Result */}
        <div className="mt-1 rounded-xl border border-brand/30 bg-brand/5 p-5 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">
            {c.resultEyebrow}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {c.resultLead}{" "}
            <span className="text-3xl font-bold text-foreground sm:text-4xl">
              {euro(deltaMo, locale)}
            </span>{" "}
            {c.resultTail}
          </p>
          <p className="text-sm text-muted-foreground">{c.vsGym(commission)}</p>
          <p className="mt-2 text-sm font-semibold text-brand">
            {c.perYear(euro(deltaYr, locale))}
          </p>

          {/* Breakdown */}
          <dl className="mx-auto mt-4 max-w-sm space-y-1.5 text-left text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">{c.breakdownRevenue}</dt>
              <dd className="font-medium">{euro(revenueMo, locale)}{c.perMonth}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                {c.breakdownSculpt}{" "}
                <span className="text-xs">({c.rentLine(euro(rentMo, locale))})</span>
              </dt>
              <dd className="font-semibold text-brand">
                {c.breakdownSculptKeep} {euro(netSculpt, locale)}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                {c.breakdownGym(commission)}{" "}
                <span className="text-xs">({c.breakdownGymTakes} {euro(revenueMo - netGym, locale)})</span>
              </dt>
              <dd className="font-medium">{euro(netGym, locale)}</dd>
            </div>
          </dl>
        </div>

        <p className="text-xs text-muted-foreground">{c.note}</p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={wa}
            external
            size="lg"
            className="w-full sm:flex-1 plausible-event-name=calc_whatsapp"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {c.ctaWhatsapp}
          </ButtonLink>
          <ButtonLink
            href={c.ratesHref}
            variant="outline"
            size="lg"
            className="w-full sm:flex-1 plausible-event-name=calc_rates"
          >
            {c.ctaRates}
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

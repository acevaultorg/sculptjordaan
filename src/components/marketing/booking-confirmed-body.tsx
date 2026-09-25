"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, KeyRound, MapPin, Backpack, RefreshCw, MessageCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";

/**
 * Visible body of /nl/boeking-bevestigd + /en/booking-confirmed (Paulo 2026-09-25,
 * card mugky1uhlwvo8c: "read the text, improve UX/UI").
 *
 * ⚠️ PRESENTATION ONLY. The conversion tags live in the pages' own useEffect and in
 * the inline `booking-confirmed-conversion` script in analytics.tsx. Nothing here
 * fires, reads or changes an analytics call. Keep it that way.
 * ⚠️ NEVER open the live URL to QA this: every load fires a real conversion.
 *
 * Why the rewrite: the old cards used text-white on bg-*-500/5 surfaces, so in light
 * mode (most phones) "Wat nu?", the upsell text and "Nog een sessie boeken" were white
 * on near-white and unreadable (Paulo's screenshots IMG_7012/7013).
 *
 * `type` comes from Acuity's redirect (%appointmentType% title, e.g.
 * "Free try out: Full Studio 60 min", "Halve Studio 60 min / Half Studio 60 min",
 * "Open Gym Sessie / Open Gym Session"). Anything else, or nothing, falls back to a
 * plain "your booking" wording. Acuity sends no date, so "when" points to the mail.
 * Facts (door code the evening before via WhatsApp, entrance, what to bring, free
 * cancellation) match /nl/eerste-bezoek and CLAUDE.md.
 */

type Locale = "nl" | "en";
type Kind = "studio" | "opengym" | "other";

type Parsed = { kind: Kind; trial: boolean; what: string | null };

const COPY = {
  nl: {
    overline: "Bevestigd",
    title: "Je bent geboekt. Tot snel!",
    whatLabel: "Je boeking",
    when: "Dag en tijd staan in je bevestigingsmail.",
    names: {
      trialStudio: "Gratis proefsessie in de studio",
      trialGym: "Gratis Open Gym-probeersessie",
      trial: "Gratis proefsessie",
      half: "Halve studio",
      full: "Hele studio",
      studio: "Studio huren",
      gym: "Open Gym",
    },
    stepsTitle: "Wat gebeurt er nu?",
    steps: [
      { icon: CheckCircle2, title: "Bevestigingsmail", text: "Binnen een paar minuten krijg je een mail van Acuity met alle details. Niets gezien? Kijk even in je spam." },
      { icon: KeyRound, title: "Deurcode via WhatsApp", text: "De avond voor je sessie sturen we je persoonlijke deurcode via WhatsApp. Er is geen receptie." },
      { icon: MapPin, title: "Waar", text: "Egelantiersgracht 424, Jordaan. Fietsenrekken voor de deur. Kom 5 minuten eerder." },
      { icon: Backpack, title: "Neem mee", text: "Sportkleding, een handdoek, een waterfles en schone indoor sportschoenen. Er is een kleedruimte, douchen kan niet." },
      { icon: RefreshCw, title: "Wijzigen of annuleren", text: "Via de link in je bevestigingsmail. Annuleren is altijd gratis." },
    ],
    route: "Route in Google Maps",
    whatsapp: "Vraag? App ons",
    whatsappText: "Hoi! Ik heb net geboekt en heb een vraag.",
    firstVisit: "Alles over je eerste bezoek",
    home: "Terug naar home",
    upsell: {
      studio: { title: "Huur je vaker? Dan is een strippenkaart goedkoper.", text: "Met een strippenkaart koop je studiotegoed met 10% tot 23% korting. Je tegoed is 1 jaar geldig, handig als je elke week klanten traint.", cta: "Bekijk de strippenkaarten", href: "/nl/prijzen", dataCta: "booking-confirmed-next-studio" },
      opengym: { title: "Vaker trainen?", text: "Met het Instapplan train je 4 keer per 4 weken voor €29. Onbeperkt kan ook. Geen contract, altijd opzegbaar.", cta: "Bekijk de Open Gym-plannen", href: "/nl/open-gym", dataCta: "booking-confirmed-next-opengym" },
    },
    other: { title: "Wil je daarna verder?", text: "Elke trainer heeft eigen pakketten en prijzen. Je trainer laat ze zien na je intake. Geen verplichting, je beslist daarna of het past.", cta: "WhatsApp je trainer over het pakket", wa: "Hoi! Ik wil graag meer weten over de pakketten na m'n intake.", dataCta: "boeking-bevestigd-upsell-whatsapp" },
    imgAlt: "Tot snel: de SculptClub studio met merkmuur en power rack",
    firstVisitHref: "/nl/eerste-bezoek",
    homeHref: "/",
  },
  en: {
    overline: "Confirmed",
    title: "You're booked. See you soon!",
    whatLabel: "Your booking",
    when: "The day and time are in your confirmation email.",
    names: {
      trialStudio: "Free trial session in the studio",
      trialGym: "Free Open Gym trial session",
      trial: "Free trial session",
      half: "Half studio",
      full: "Full studio",
      studio: "Studio rental",
      gym: "Open Gym",
    },
    stepsTitle: "What happens next?",
    steps: [
      { icon: CheckCircle2, title: "Confirmation email", text: "Within a few minutes you get an email from Acuity with all the details. Nothing there? Check your spam folder." },
      { icon: KeyRound, title: "Door code via WhatsApp", text: "The evening before your session we send your personal door code via WhatsApp. There is no reception." },
      { icon: MapPin, title: "Where", text: "Egelantiersgracht 424, Jordaan. Bike racks right outside. Arrive 5 minutes early." },
      { icon: Backpack, title: "Bring", text: "Sportswear, a towel, a water bottle and clean indoor sports shoes. There is a changing area; no showers." },
      { icon: RefreshCw, title: "Change or cancel", text: "Use the link in your confirmation email. Cancelling is always free." },
    ],
    route: "Directions in Google Maps",
    whatsapp: "Question? WhatsApp us",
    whatsappText: "Hi! I just booked and have a question.",
    firstVisit: "Everything about your first visit",
    home: "Back to home",
    upsell: {
      studio: { title: "Renting often? A credit pack is cheaper.", text: "With a credit pack you buy studio credit at 10% to 23% off. Credit is valid for 1 year, handy if you train clients every week.", cta: "See the credit packs", href: "/en/pricing", dataCta: "booking-confirmed-next-studio" },
      opengym: { title: "Training more often?", text: "The Starter plan gives you 4 sessions per 4 weeks for €29. Unlimited is also available. No contract, cancel anytime.", cta: "See the Open Gym plans", href: "/en/open-gym", dataCta: "booking-confirmed-next-opengym" },
    },
    other: { title: "Want to continue afterwards?", text: "Each trainer has their own packages and prices. Your trainer shows them after your intro. No obligation, you decide afterwards if it fits.", cta: "WhatsApp your trainer about packages", wa: "Hi! I'd like to know more about the packages after my intro.", dataCta: "booking-confirmed-upsell-whatsapp" },
    imgAlt: "See you soon: the SculptClub studio with brand wall and power rack",
    firstVisitHref: "/en/first-visit",
    homeHref: "/en",
  },
} as const;

const MAPS = "https://www.google.com/maps/search/?api=1&query=SculptClub%2C+Egelantiersgracht+424%2C+Amsterdam";

function parseType(raw: string | null, locale: Locale): Parsed {
  const n = COPY[locale].names;
  const t = (raw ?? "").toLowerCase();
  if (!t.trim()) return { kind: "other", trial: false, what: null };
  const trial = /free|gratis|try|proef/.test(t);
  const isGym = t.includes("gym");
  const isStudio = t.includes("studio") && !isGym;
  const kind: Kind = isStudio ? "studio" : isGym ? "opengym" : "other";
  let what: string | null = null;
  if (trial) what = isStudio ? n.trialStudio : isGym ? n.trialGym : n.trial;
  else if (isStudio) what = /half|halve/.test(t) ? n.half : /full|hele/.test(t) ? n.full : n.studio;
  else if (isGym) what = n.gym;
  return { kind, trial, what };
}

const tall = "inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition sm:w-auto";

export function BookingConfirmedBody({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const [p, setP] = useState<Parsed>({ kind: "other", trial: false, what: null });
  useEffect(() => {
    setP(parseType(new URLSearchParams(window.location.search).get("type"), locale));
  }, [locale]);
  const up = p.kind === "studio" ? c.upsell.studio : p.kind === "opengym" ? c.upsell.opengym : null;

  return (
    <PageLayout>
      <Section className="pt-28">
        <FadeIn className="mx-auto max-w-xl">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400" aria-hidden />
            <p className="overline mt-3 text-primary">{c.overline}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{c.title}</h1>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarCheck className="h-4 w-4" aria-hidden />
              {c.whatLabel}
            </p>
            {p.what && <p className="mt-1 text-lg font-semibold text-foreground">{p.what}</p>}
            <p className="mt-1 text-sm text-muted-foreground">{c.when}</p>
          </div>

          <h2 className="mt-8 text-xl font-bold text-foreground">{c.stepsTitle}</h2>
          <ol className="mt-3 space-y-3">
            {c.steps.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  {title === c.steps[2].title && (
                    <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-medium text-primary hover:underline">
                      {c.route} →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/31615147952?text=${encodeURIComponent(c.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="booking-confirmed-whatsapp"
              className={`${tall} border border-border bg-card text-foreground hover:bg-muted`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {c.whatsapp}
            </a>
          </div>
          <p className="mt-4 text-center text-sm sm:text-left">
            <Link href={c.firstVisitHref} className="font-medium text-primary hover:underline">{c.firstVisit}</Link>
            <span className="text-muted-foreground"> · </span>
            <Link href={c.homeHref} className="font-medium text-primary hover:underline">{c.home}</Link>
          </p>

          {up && (
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-5">
              <h3 className="text-lg font-bold text-foreground">{up.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{up.text}</p>
              <Link href={up.href} data-cta={up.dataCta} className={`${tall} mt-4 bg-brand text-brand-foreground hover:bg-brand/85`}>
                {up.cta} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          )}

          {p.kind === "other" && !p.trial && (
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-5">
              <h3 className="text-lg font-bold text-foreground">{c.other.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.other.text}</p>
              <a
                href={`https://wa.me/31615147952?text=${encodeURIComponent(c.other.wa)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={c.other.dataCta}
                className={`plausible-event-name=booking_confirmed_upsell_whatsapp ${tall} mt-4 bg-brand text-brand-foreground hover:bg-brand/85`}
              >
                {c.other.cta}
              </a>
            </div>
          )}

          <div className="relative mt-10 aspect-[1376/720] overflow-hidden rounded-2xl shadow-lg">
            <Image src="/images/hero/homepage-hero.jpg" alt={c.imgAlt} fill className="object-cover" sizes="(max-width: 576px) 100vw, 576px" loading="lazy" />
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

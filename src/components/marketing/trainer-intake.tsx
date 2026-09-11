"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Mail, Send, ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PersonJsonLd } from "@/components/seo/json-ld";
import { TrainerPhotoGallery } from "@/components/marketing/trainer-photo-gallery";
import Image from "next/image";
import Link from "next/link";
import { trainers } from "@/config/trainers";
import { ptGoals } from "@/config/pt-goals";
import { whatsappLinks } from "@/config/acuity";
import { trackNavClick } from "@/lib/tracking";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

interface TrainerIntakeProps {
  trainerId: string;
  locale: Locale;
}

// Join a trainer's specialisation list the way each language actually reads it:
// "Kracht, mobiliteit en techniek" / "Strength, mobility and technique". Guards
// on 0/1/2 items because the roster is hand-maintained and lengths vary.
function listNl(xs: readonly string[]): string {
  const v = xs.filter(Boolean);
  if (v.length === 0) return "Personal training";
  if (v.length === 1) return v[0];
  return `${v.slice(0, -1).join(", ")} en ${v[v.length - 1]}`;
}
function listEn(xs: readonly string[]): string {
  const v = xs.filter(Boolean);
  if (v.length === 0) return "Personal training";
  if (v.length === 1) return v[0];
  return `${v.slice(0, -1).join(", ")} and ${v[v.length - 1]}`;
}

/**
 * Pick 3 sibling trainers for the "other trainers" cards, preferring shared
 * specialisation terms so the suggestion is a real alternative (someone on
 * Gezina's page sees strength/women's-training peers, not a random trio).
 * Deterministic — token overlap, tie-broken by roster order — because this
 * renders at build time on a static export; no randomness allowed.
 *
 * Why this exists (2026-08-28): the 13 profile pages each had 4 inbound
 * internal links against 106 for /nl/studio-huren, and linked to ZERO other
 * trainers — a disconnected leaf layer. A cold visitor landing on the wrong
 * trainer had no lateral move except back to the hub. Sibling links fix both
 * the link-graph gap and the marketplace UX in one section.
 */
function relatedTrainers(selfId: string, locale: Locale) {
  const self = trainers.find((t) => t.id === selfId);
  if (!self) return trainers.filter((t) => t.id !== selfId).slice(0, 3);
  const tokens = new Set(
    self.specialization[locale].flatMap((x) => x.toLowerCase().split(/[^a-zà-ü]+/)).filter((w) => w.length > 3)
  );
  return trainers
    .filter((t) => t.id !== selfId)
    .map((t, i) => ({
      t,
      score: t.specialization[locale]
        .flatMap((x) => x.toLowerCase().split(/[^a-zà-ü]+/))
        .filter((w) => tokens.has(w)).length,
      i,
    }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, 3)
    .map((x) => x.t);
}

export function TrainerIntakePage({ trainerId, locale }: TrainerIntakeProps) {
  const trainer = trainers.find((t) => t.id === trainerId)!;

  // Some trainers book via their own scheduling link instead of WhatsApp
  // (Roberta, 2026-07-25 — asked not to publish a private number). When
  // `bookingUrl` is set we render THAT as the primary CTA and never fall back
  // to the studio WhatsApp, which would wrongly imply it reaches the trainer.
  const bookingUrl = trainer.bookingUrl;
  const bookingLabel = trainer.bookingLabel?.[locale];

  // WhatsApp base URL — trainer's own number if configured, else studio
  const waBase = trainer.whatsapp ?? siteConfig.whatsapp;
  // WhatsApp button with simple pre-filled greeting
  const trainerWhatsapp = `${waBase}?text=${encodeURIComponent(
    locale === "nl"
      ? `Hoi ${trainer.name}! Ik wil graag een gratis intake boeken.`
      : `Hi ${trainer.name}! I'd like to book a free intro.`
  )}`;

  const trainersUrl = locale === "nl" ? "/nl/vind-jouw-personal-trainer" : "/en/find-personal-trainer";

  // Copy for the trainer's own programmes block (trainers.ts `programmes`, 2026-09-11).
  const pt = locale === "nl"
    ? {
        title: `Trajecten van ${trainer.name}`,
        ask: "Vraag naar dit traject",
        details: (label: string) => `Meer op ${label}`,
        note: "Zo beschrijft de trainer het zelf. Duur, inhoud en prijs spreek je af in de gratis intake.",
      }
    : {
        title: `${trainer.name}'s programmes`,
        ask: "Ask about this programme",
        details: (label: string) => `More on ${label}`,
        note: "As the trainer describes it. Length, content and price are agreed at the free intro.",
      };
  const trackProgramme = (programme: string, action: "ask" | "details") => {
    const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof g === "function")
      g("event", "programme_click", { trainer_name: trainer.id, programme, action, source_page: window.location.pathname });
  };

  const t = locale === "nl" ? {
  // 2026-08-28 — this page now has TWO audiences, and the H1 has to serve both.
  //
  // The original H1 "Plan je gratis intake met <naam>" was written (see the
  // mobile-fold note further down) for visitors who ALREADY chose this trainer
  // via the quiz or the grid — warm, high intent, name-recognition is the job.
  //
  // That assumption changed the same day: the 26 profile TITLES were rewritten
  // from "Plan gratis intake met <naam>" to discoverable long-tails
  // ("Gezina — personal trainer voor vrouwen, Amsterdam"), because the profiles
  // were drawing 1 session per 3 days and 0 AI citations while the studio-rental
  // page drew 60. Those titles are meant to bring COLD traffic from search and
  // AI — people who have never heard of this trainer. For them, an H1 that opens
  // with a commitment ("plan je intake") asks before it introduces.
  //
  // So: the overline still carries the promise ("Gratis intake") and stays the
  // first line read, the H1 now says WHO this is, and the description says WHAT
  // they do — pulled from trainer.specialization, so it is their own copy and
  // nothing is invented. The WhatsApp button and form below are untouched, so
  // the warm path from quiz/grid is unchanged.
    overline: "Gratis intake",
    title: `${trainer.name} — personal trainer in de Jordaan`,
    description: `${listNl(trainer.specialization.nl)}. Vertel wat je wilt bereiken, dan plannen we een gratis kennismaking.`,
    specializations: "Specialisaties",
    languages: "Talen",
    rate: "Tarief",
    availability: "Beschikbaarheid",
    testimonialsTitle: "Wat klanten zeggen",
    onRequest: "Op aanvraag",
    requestPrice: "Vraag prijs aan →",
    contactTitle: "Neem contact op",
    nameLabel: "Naam",
    namePlaceholder: "Je volledige naam",
    phoneLabel: "Telefoon",
    phonePlaceholder: "+31 6 1234 5678",
    goalLabel: "Mijn doel",
    goalOptions: [...ptGoals.map((g) => g.short.nl), "Anders"],
    experienceLabel: "Ervaring",
    experienceOptions: ["Beginner", "Gemiddeld", "Gevorderd"] as const,
    frequencyLabel: "Hoe vaak per week?",
    frequencyOptions: ["1×", "2×", "3+×", "Weet ik nog niet"] as const,
    messageLabel: "Iets dat we moeten weten? (optioneel)",
    messagePlaceholder: "Blessures, eerdere ervaring, of wat dan ook...",
    submitLabel: "Verstuur bericht",
    whatsappLabel: `WhatsApp ${trainer.name} direct`,
    emailLabel: "Of stuur een e-mail",
    responseTime: "We reageren meestal binnen 1 uur",
    sent: "Bericht verstuurd! We nemen snel contact op.",
    browseAll: "Bekijk alle trainers",
    otherTrainerCta: "Niet zeker? Bekijk alle trainers en vind je match.",
  } : {
    overline: "Free intro",
    title: `${trainer.name} — personal trainer in Amsterdam Jordaan`,
    description: `${listEn(trainer.specialization.en)}. Tell us what you want to achieve and we'll set up a free intro.`,
    specializations: "Specializations",
    languages: "Languages",
    rate: "Rate",
    availability: "Availability",
    testimonialsTitle: "What clients say",
    onRequest: "On request",
    requestPrice: "Ask for price →",
    contactTitle: "Get in touch",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+31 6 1234 5678",
    goalLabel: "My goal",
    goalOptions: [...ptGoals.map((g) => g.short.en), "Other"],
    experienceLabel: "Experience",
    experienceOptions: ["Beginner", "Intermediate", "Advanced"] as const,
    frequencyLabel: "How often per week?",
    frequencyOptions: ["1×", "2×", "3+×", "Not sure yet"] as const,
    messageLabel: "Anything else we should know? (optional)",
    messagePlaceholder: "Injuries, prior experience, or anything else...",
    submitLabel: "Send message",
    whatsappLabel: `WhatsApp ${trainer.name} directly`,
    emailLabel: "Or send an email",
    responseTime: "We usually respond within 1 hour",
    sent: "Message sent! We'll get back to you soon.",
    browseAll: "View all trainers",
    otherTrainerCta: "Not sure yet? Browse all trainers and find your match.",
  };

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
    goal: "" as string,
    experience: "" as string,
    frequency: "" as string,
  });

  // Goal carried from the PT hub (?doel=<goal id>, 2026-09-11) preselects the
  // form's goal, so the lead reaches the trainer with the goal already stated.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("doel");
    const g = id ? ptGoals.find((x) => x.id === id) : undefined;
    if (g) setFormState((st) => ({ ...st, goal: g.short[locale] }));
  }, [locale]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const greeting = locale === "nl"
      ? `Hoi ${trainer.name}! Ik wil graag een gratis intake boeken.`
      : `Hi ${trainer.name}! I'd like to book a free intro.`;
    const lbl = locale === "nl"
      ? { name: "Naam", phone: "Tel", goal: "Doel", exp: "Ervaring", freq: "Frequentie" }
      : { name: "Name", phone: "Phone", goal: "Goal", exp: "Experience", freq: "Frequency" };
    const parts = [
      greeting,
      formState.name ? `${lbl.name}: ${formState.name}` : "",
      formState.phone ? `${lbl.phone}: ${formState.phone}` : "",
      formState.goal ? `${lbl.goal}: ${formState.goal}` : "",
      formState.experience ? `${lbl.exp}: ${formState.experience}` : "",
      formState.frequency ? `${lbl.freq}: ${formState.frequency}` : "",
      formState.message ? formState.message : "",
    ].filter(Boolean);
    // Fire full conversion stack BEFORE window.open (popup blockers can clip async work).
    // High-intent lead: visitor filled name + phone + WhatsApp greeting for a SPECIFIC trainer.
    type W = Window & {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
      ttq?: { track: (...args: unknown[]) => void };
      plausible?: (event: string, opts?: { props: Record<string, unknown> }) => void;
    };
    const w = window as W;
    const path = window.location.pathname;
    if (typeof w.gtag === "function") {
      w.gtag("event", "conversion", {
        send_to: "AW-18011741633/NwwsCNGZlp8cEMG71YxD",
        value: 45,
        currency: "EUR",
      });
      // trainer_name is now the ONLY param for this concept (2026-09-06). The dual emit added
      // 2026-08-29 was a deliberate bridge, and it named its own exit condition: "whichever the
      // operator registers works, and the loser can be dropped later with no data gap." That
      // condition is met — all 17 custom dimensions were registered on property 497501213 on
      // 2026-09-06, and trainer_name is the keeper (whatsapp_click and trainer_impression
      // already emit it, so it carries 3 events to `trainer`'s 2).
      // Checked BEFORE dropping `trainer`, because doing it blind would silently end per-trainer
      // reporting: a ga4-probe on customEvent:trainer_name returns a row rather than "not a
      // valid dimension", so the dimension exists and keeps receiving. The `trainer` DIMENSION
      // stays registered in GA4 until ≥2026-09-13 so its historical window still reports —
      // stopping the WRITE and archiving the DIMENSION are separate steps.
      w.gtag("event", "generate_lead", {
        method: "trainer_intake_form",
        value: 45,
        currency: "EUR",
        booking_source: path,
        trainer_name: trainer.id,
      });
      w.gtag("event", "trainer_intake_submit", {
        trainer_name: trainer.id,
        locale,
        booking_source: path,
        intake_goal: formState.goal || "(unset)",
        intake_experience: formState.experience || "(unset)",
        intake_frequency: formState.frequency || "(unset)",
      });
    }
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead", {
        value: 45,
        currency: "EUR",
        content_name: `trainer_intake_${trainer.id}`,
      });
    }
    if (w.ttq && typeof w.ttq.track === "function") {
      w.ttq.track("SubmitForm", { value: 45, currency: "EUR" });
    }
    if (typeof w.plausible === "function") {
      w.plausible("Trainer Intake Submit", {
        props: {
          trainer: trainer.id,
          locale,
          source_page: path,
          intake_goal: formState.goal || "(unset)",
          intake_experience: formState.experience || "(unset)",
          intake_frequency: formState.frequency || "(unset)",
        },
      });
      w.plausible("Lead Generated", {
        props: { method: "trainer_intake_form", value: 45, source_page: path },
      });
    }
    window.open(
      `${waBase}?text=${encodeURIComponent(parts.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <PersonJsonLd
        name={trainer.name}
        description={trainer.bio[locale]}
        image={trainer.image}
        url={`/${locale}/${trainer.slug[locale]}`}
        jobTitle={locale === "nl" ? "Personal Trainer" : "Personal Trainer"}
        languages={trainer.languages}
        sameAs={[trainer.instagram, trainer.website?.url].filter((u): u is string => Boolean(u))}
      />
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back to trainers */}
          <a
            href={trainersUrl}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.browseAll}
          </a>

          <SectionHeader as="h1" overline={t.overline} title={t.title} description={t.description} />

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Trainer info — mobile order: 2 (below contact). Desktop order: 1 (left column).
                  Mobile fold audit 2026-05-19: original 1-column stack put the WhatsApp CTA at
                  y=1147 px on iPhone 14 Pro — almost 2 viewports below the fold. Visitors who
                  reached this page ALREADY chose this trainer (high intent) and were forced to
                  scroll through bio + photo + specs + languages before they could act.
                  Fix: swap mobile order via Tailwind order-2 / md:order-1. Visitor lands → sees
                  H1 ("Plan je gratis intake met Andrea") naming the trainer → WhatsApp button
                  + form immediately below → bio/photo/specs as supporting validation when they
                  scroll. Desktop 2-col grid unaffected (still trainer-info left, contact right). */}
              <div className="space-y-5 order-2 md:order-1">
                {/* `priority` on the hero photo (not the default `loading="lazy"`)
                    because it's the primary above-fold proof on this page. The
                    visitor has either (a) finished the match-quiz and clicked
                    "Plan gratis intake met <name>", or (b) tapped a trainer card
                    from the grid — either way they EXPECT to see this trainer's
                    face immediately, not a black rectangle that pops in after
                    scroll. Chrome MCP audit 2026-05-27: image was lazy-loaded;
                    landing on the page showed an empty portrait container that
                    filled in only after the visitor scrolled, which is exactly
                    the wrong moment to introduce doubt ("is this trainer real?
                    is this site broken?"). One priority Image per per-trainer
                    intake page = negligible LCP impact; conversion impact =
                    preserving the warm-handoff from quiz/grid → intake-form.
                    TrainerPhotoGallery renders that same hero photo + (when
                    trainer.gallery is set) a thumbnail strip below it; clicking
                    either opens a fullscreen slider over all the trainer's
                    photos (added 2026-07-01, Tom — 3 operator-provided shots). */}
                <TrainerPhotoGallery
                  locale={locale}
                  images={[
                    { src: trainer.image, alt: `${locale === "nl" ? "Foto van" : "Photo of"} ${trainer.name}, personal trainer bij/at SculptClub Amsterdam` },
                    ...(trainer.gallery?.map((g) => ({ src: g.src, alt: g.alt[locale], video: g.video })) ?? []),
                  ]}
                />

                <h3 className="text-xl font-bold">
                  {trainer.name}
                  {trainer.credentials && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {trainer.credentials[locale]}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{trainer.bio[locale]}</p>
                {trainer.website && (
                  <a
                    href={trainer.website.url}
                    target="_blank"
                    rel="noopener"
                    data-trainer-website={trainer.name}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
                  >
                    {locale === "nl" ? `Methode & ervaringen van cliënten: ${trainer.website.label}` : `Method & client stories: ${trainer.website.label}`} ↗
                  </a>
                )}

                {/* The trainer's OWN named trajecten. Primary action keeps the lead
                    on the trainer's WhatsApp (or booking link) with the programme
                    named in the message; the secondary link reads more on their site. */}
                {trainer.programmes && trainer.programmes.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">{pt.title}</p>
                    <ul className="space-y-3">
                      {trainer.programmes.map((p) => {
                        const pname = p.name[locale];
                        const ask = bookingUrl ?? whatsappLinks.trainerIntake(trainer.name, locale, waBase, pname);
                        const more = locale === "en" && p.urlEn ? p.urlEn : p.url;
                        return (
                          <li key={pname} className="rounded-xl border border-border bg-card p-4">
                            <p className="text-sm font-semibold">{pname}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.summary[locale]}</p>
                            {/* min-h-11 = 44px tap target (measured 20px at 375px before, 2026-09-11). */}
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 text-sm">
                              <a
                                href={ask}
                                target="_blank"
                                rel="noopener"
                                data-programme={pname}
                                onClick={() => trackProgramme(pname, "ask")}
                                className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4"
                              >
                                {pt.ask} →
                              </a>
                              <a
                                href={more}
                                target="_blank"
                                rel="noopener"
                                onClick={() => trackProgramme(pname, "details")}
                                className="inline-flex min-h-11 items-center text-muted-foreground hover:underline underline-offset-4"
                              >
                                {pt.details(trainer.website?.label ?? trainer.name)} ↗
                              </a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-xs text-muted-foreground">{pt.note}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold mb-1.5">{t.specializations}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialization[locale].map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="font-semibold">{t.languages}</p>
                    <p className="text-muted-foreground">{trainer.languages.join(", ")}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t.rate}</p>
                    <p className="text-muted-foreground">
                      {trainer.rate ? (
                        trainer.rate
                      ) : bookingUrl ? (
                        t.onRequest
                      ) : (
                        <a
                          href={whatsappLinks.trainerPriceRequest(trainer.name, locale, waBase, formState.goal || undefined)}
                          target="_blank"
                          rel="noopener"
                          data-price-request={trainer.name}
                          className="font-semibold text-brand hover:underline underline-offset-4"
                        >
                          {t.requestPrice}
                        </a>
                      )}
                    </p>
                  </div>
                </div>

                {/* Availability — renders ONLY when operator supplied real data
                    in trainers.ts (see Trainer.availability JSDoc). */}
                {trainer.availability && (
                  <div className="text-sm">
                    <p className="font-semibold">{t.availability}</p>
                    <p className="text-muted-foreground">{trainer.availability[locale]}</p>
                  </div>
                )}

                {/* Real client testimonials — renders ONLY when operator supplied
                    consented real quotes in trainers.ts (see Trainer.testimonials
                    JSDoc). UI-only by design: no Review schema. */}
                {trainer.testimonials && trainer.testimonials.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">{t.testimonialsTitle}</p>
                    {trainer.testimonials.map((tm, i) => (
                      <blockquote
                        key={i}
                        className="border-l-2 border-brand pl-3 text-sm text-muted-foreground italic"
                      >
                        “{tm.quote[locale]}”
                        <footer className="not-italic mt-1 text-xs font-medium text-foreground/70">
                          — {tm.author}
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact form + WhatsApp — mobile order: 1 (above bio). Desktop order: 2 (right column). */}
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-lg font-bold">{t.contactTitle}</h3>

                {/* Primary CTA — the trainer's own booking link when they have
                    one (brand-orange, calendar icon), otherwise WhatsApp. */}
                {bookingUrl ? (
                  <ButtonLink
                    href={bookingUrl}
                    external
                    size="lg"
                    className="w-full rounded-xl px-6 py-5 text-base font-semibold transition-all"
                  >
                    <CalendarCheck className="mr-2 w-5 h-5" />
                    {bookingLabel ?? t.title}
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href={trainerWhatsapp}
                    external
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl px-6 py-5 text-base font-semibold transition-all"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    {t.whatsappLabel}
                  </ButtonLink>
                )}

                {/* Contact form */}
                {submitted ? (
                  <div className="rounded-xl border border-brand/30 bg-brand/5 p-6 text-center">
                    <p className="font-semibold text-brand">{t.sent}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="intake-name" className="block text-sm font-semibold mb-1.5">
                        {t.nameLabel} *
                      </label>
                      <input
                        id="intake-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder={t.namePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      />
                    </div>

                    <div>
                      <label htmlFor="intake-phone" className="block text-sm font-semibold mb-1.5">
                        {t.phoneLabel} *
                      </label>
                      <input
                        id="intake-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                        placeholder={t.phonePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      />
                    </div>

                    {/* Qualifying questions — added 2026-05-20 per operator
                        "what are good intake questions to ask client? so i can
                        make the best match with trainer". 3 single-tap radio-
                        pills (not native radios — better mobile target). Field
                        count stays ≤6 (best-practice cap before drop-off
                        spike). All 3 optional — high-intent visitors who skip
                        still convert; visitors who answer give trainer + ops
                        the qualifying signal to prep + route. Answers pre-fill
                        into WhatsApp greeting + log to gtag/Plausible props so
                        operator can segment which goals/levels/frequencies
                        convert best across the fleet. */}
                    <div>
                      <label className="block text-sm font-semibold mb-1.5">{t.goalLabel}</label>
                      <div className="flex flex-wrap gap-1.5">
                        {t.goalOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormState((s) => ({ ...s, goal: s.goal === opt ? "" : opt }))}
                            aria-pressed={formState.goal === opt}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                              formState.goal === opt
                                ? "border-brand bg-brand text-brand-foreground"
                                : "border-border bg-background text-muted-foreground hover:border-brand/60 hover:text-foreground"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5">{t.experienceLabel}</label>
                      <div className="flex flex-wrap gap-1.5">
                        {t.experienceOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormState((s) => ({ ...s, experience: s.experience === opt ? "" : opt }))}
                            aria-pressed={formState.experience === opt}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                              formState.experience === opt
                                ? "border-brand bg-brand text-brand-foreground"
                                : "border-border bg-background text-muted-foreground hover:border-brand/60 hover:text-foreground"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1.5">{t.frequencyLabel}</label>
                      <div className="flex flex-wrap gap-1.5">
                        {t.frequencyOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormState((s) => ({ ...s, frequency: s.frequency === opt ? "" : opt }))}
                            aria-pressed={formState.frequency === opt}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                              formState.frequency === opt
                                ? "border-brand bg-brand text-brand-foreground"
                                : "border-border bg-background text-muted-foreground hover:border-brand/60 hover:text-foreground"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="intake-message" className="block text-sm font-semibold mb-1.5">
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="intake-message"
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        placeholder={t.messagePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.015] active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.submitLabel}
                    </button>
                  </form>
                )}

                {/* Email fallback — contact@sculptclub.nl */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{t.emailLabel}:</span>
                  <a
                    href="mailto:contact@sculptclub.nl"
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    contact@sculptclub.nl
                  </a>
                </div>

                {/* Response time */}
                <p className="text-sm text-muted-foreground text-center bg-secondary/50 rounded-xl py-3 px-4">
                  {t.responseTime}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Other trainers — 3 concrete sibling cards + the browse-all button.
          Upgraded 2026-08-28 from a lone "browse all" button: see the
          relatedTrainers() note for the measured link-graph gap this closes. */}
      <Section bg="muted">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
              {locale === "nl" ? "Andere trainers bij SculptClub" : "More trainers at SculptClub"}
            </h2>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
              {relatedTrainers(trainer.id, locale).map((rt) => (
                <Link
                  key={rt.id}
                  href={`/${locale}/${rt.slug[locale]}`}
                  onClick={() => trackNavClick("related_trainers", rt.slug[locale], locale)}
                  className="group rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-brand transition-colors"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={rt.image}
                      style={rt.imagePosition ? { objectPosition: rt.imagePosition } : undefined}
                      alt={rt.name}
                      fill
                      sizes="(max-width: 640px) 30vw, 220px"
                      className="object-cover object-top transition-transform group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="font-semibold text-sm sm:text-base">{rt.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {rt.specialization[locale].join(" · ")}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center max-w-lg mx-auto">
              <p className="text-muted-foreground mb-4">{t.otherTrainerCta}</p>
              <ButtonLink href={trainersUrl} size="lg" variant="outline">
                {t.browseAll}
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

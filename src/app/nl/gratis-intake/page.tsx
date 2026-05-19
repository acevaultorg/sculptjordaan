import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: { absolute: "Gratis Intake Personal Training — SculptClub Jordaan" },
  description:
    "Plan je gratis intake bij SculptClub. Privé personal training studio in de Jordaan. Geen contract, geen abonnement. Eerste kennismaking 100% gratis.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/gratis-intake",
    languages: {
      nl: "/nl/gratis-intake",
      en: "/en/free-intro",
    },
  },
};

const steps = [
  {
    step: "1",
    title: "Kies je trainer",
    desc: "Bekijk de trainers en kies degene die past bij jouw doelen, stijl en taal.",
  },
  {
    step: "2",
    title: "Stuur de trainer een berichtje",
    desc: "Via WhatsApp of het contactformulier. De trainer antwoordt snel en jullie stemmen samen een moment af — geen rigide agenda, gewoon op maat.",
  },
  {
    step: "3",
    title: "45 minuten gratis kennismaking",
    desc: "Ontmoet je trainer in onze privé studio in de Jordaan. Bespreek je doelen, leer de aanpak kennen, voel of het klikt. Geen verplichting, geen verborgen kosten.",
  },
];

const trustItems = [
  { icon: Shield, text: "Geen contract" },
  { icon: Clock, text: "Dagelijks 06:30–22:00" },
  { icon: MessageCircle, text: "Snel antwoord via WhatsApp" },
];

const faqs = [
  {
    q: "Kost de intake echt niets?",
    a: "Ja. De eerste kennismaking van 45 minuten is altijd gratis — geen creditcard vereist.",
  },
  {
    q: "Ben ik ergens aan gebonden na de intake?",
    a: "Nee. Je beslist daarna zelf of je verder wilt. Geen abonnement, geen contract.",
  },
  {
    q: "Wat gebeurt er tijdens de intake?",
    a: "Je leert de trainer kennen, bespreekt je doelen en maakt kennis met de studio. De trainer legt uit wat hij of zij voor je kan betekenen.",
  },
  {
    q: "Hoe kom ik binnen?",
    a: "Je trainer regelt de studio en zorgt dat je binnen kunt. Bij je intake ontmoet je de trainer bij de deur of krijg je vooraf instructies via WhatsApp — geen bel, geen receptie, alles via je trainer.",
  },
];

export default function GratisIntakePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Link href="/nl" aria-label="Terug naar homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto dark:invert"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-12 text-center">
        {/* Stars */}
        <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-semibold text-foreground ml-1">5.0</span>
          <span>op Google</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.95] mb-4">
          Eerste intake{" "}
          <span className="text-brand">100% gratis</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Maak kennis met je personal trainer in ons privé studio aan de gracht
          in de Jordaan. Geen verplichting, geen abonnement.
        </p>

        {/* DUAL PRIMARY CTAs — paid-traffic conversion rescue 2026-05-16.
            Plausible + Clarity audit showed 2 paid visitors from Google Ads
            today both bounced /nl/gratis-intake in 5-11s with 0 clicks. The
            prior single-CTA "Kies je trainer" forced visitors to pick from
            4 trainers BEFORE booking — too many steps for ad-clickers.

            Fix: WhatsApp-match becomes the dual-primary (instant 1-click
            conversion via pre-filled message asking us to match them with the
            right trainer). "Kies je trainer" stays as secondary for visitors
            who want to evaluate options themselves. */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={whatsappLinks.intakeMatchNl}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=gratis_intake_whatsapp_direct inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-600/30"
            data-cta="gratis-intake-whatsapp-direct"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp direct
          </a>
          <Link
            href="/nl/vind-jouw-personal-trainer"
            className="plausible-event-name=gratis_intake_pick_trainer inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
            data-cta="gratis-intake-pick-trainer"
          >
            Of kies je trainer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Geen contract · Gratis annuleren · 45 minuten · Meestal antwoord binnen 1 uur
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Lachend met dumbbells bij SculptClub privé studio"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
            fetchPriority="high"
          />
        </div>

        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Hoe werkt het?</h2>
          <div className="grid gap-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust icons */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary border border-border/50"
            >
              <item.icon className="w-5 h-5 text-brand" />
              <span className="text-xs text-center text-muted-foreground leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="mt-16 text-left p-6 rounded-2xl bg-secondary border border-border/50">
          <h2 className="text-xl font-bold mb-4">Wat krijg je?</h2>
          <ul className="space-y-3">
            {[
              "45 minuten gratis persoonlijke kennismaking",
              "Privé studio — geen drukte, geen afleidingen",
              "Inzicht in jouw doelen en de beste aanpak",
              "Direct contact met je trainer — geen tussenpersoon",
              "Trainers vanaf €45/sessie",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real reviews */}
        <div className="mt-16 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Wat klanten zeggen</h2>
          {[
            {
              name: "Pien B.",
              text: "Wat een cadeau — een boutique sportschool met goede trainers op loopafstand. Klein maar zeer fijn.",
            },
            {
              name: "Bryan van L.",
              text: "Geweldige locatie! Klein maar fijn. Heeft alles wat wij nodig hebben.",
            },
          ].map((r) => (
            <div key={r.name} className="p-5 rounded-xl border border-border/50 bg-secondary">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs text-muted-foreground mt-2">— {r.name} · Google</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border/50 bg-secondary">
                <p className="font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA — primary "Kies je trainer" + secondary "WhatsApp direct"
            shortcut. The shortcut closes a gap surfaced in 2026-05-19 funnel
            audit: visitors who scrolled through reviews + FAQ losing the
            quick-path WhatsApp option at the moment of decision (the top-of-
            page emerald CTA is now 1 viewport above their scroll position).
            Tagged with a distinct Plausible event so the secondary path
            converts measurably on its own. */}
        <div className="mt-16 p-8 rounded-2xl bg-brand text-brand-foreground text-center">
          <h2 className="text-2xl font-bold mb-2">Klaar om te beginnen?</h2>
          <p className="text-white/80 mb-6">
            Plan nu je gratis intake. Duurt 2 minuten.
          </p>
          <Link
            href="/nl/vind-jouw-personal-trainer"
            className="plausible-event-name=gratis_intake_final_pick_trainer inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all active:scale-95"
            data-cta="gratis-intake-final-pick-trainer"
          >
            Kies je trainer
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-4">
            <a
              href={whatsappLinks.intakeMatchNl}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=gratis_intake_final_whatsapp_direct inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
              data-cta="gratis-intake-final-whatsapp-direct"
            >
              <MessageCircle className="w-4 h-4" />
              Of WhatsApp direct
            </a>
          </div>
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          Egelantiersgracht 424, Amsterdam Jordaan
        </p>
      </main>
    </div>
  );
}

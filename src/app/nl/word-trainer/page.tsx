import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { RotatingImageStack } from "@/components/marketing/rotating-image-stack";
import { getColor } from "@/lib/image-color-manifest";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { TrainerReferralBanner } from "@/components/marketing/trainer-referral-banner";
import { TrainerApplicationForm } from "@/components/marketing/trainer-application-form";
import { RentalTabs } from "@/components/marketing/rental-tabs";
import {
  ArrowRight,
  MessageCircle,
  Percent,
  Building2,
  CalendarClock,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Word trainer bij SculptClub: studio huren in de Jordaan" },
  description:
    "Start of groei je personal training praktijk bij SculptClub. Eigen tarief en klanten, eigen profiel op onze website, privé studio vanaf €12/uur.",
  keywords: [
    "word personal trainer amsterdam",
    "personal trainer worden amsterdam",
    "studio huren personal trainer",
    "trainingsruimte huren amsterdam",
    "freelance personal trainer amsterdam",
    "zzp trainer amsterdam",
    "personal trainer praktijk starten",
  ],
  alternates: {
    canonical: "/nl/word-trainer",
    languages: {
      nl: "/nl/word-trainer",
      en: "/en/become-trainer",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/word-trainer",
    title: "Word trainer bij SculptClub: studio huren in de Jordaan",
    description:
      "Start of groei je personal training praktijk bij SculptClub. Eigen tarief en klanten, eigen profiel op onze website, privé studio vanaf €12/uur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word trainer bij SculptClub: studio huren in de Jordaan",
    description:
      "Start of groei je personal training praktijk bij SculptClub. Eigen tarief en klanten, eigen profiel op onze website, privé studio vanaf €12/uur.",
  },
};

const HERO_IMAGES = [
  { src: "/images/studio/model-facade-full.jpg", alt: "Atleet bij de ingang van SculptClub Private Gym aan Egelantiersgracht 424" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal trainer geeft een sessie bij SculptClub" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Atleet traint met barbell onder de lichtkoepel bij SculptClub" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
];

const benefits = [
  {
    icon: Percent,
    title: "Jij houdt 100%",
    description: "Eigen tarief, eigen klanten, eigen agenda. Jij huurt de studio; wij verdienen alleen aan de huur.",
  },
  {
    icon: Building2,
    title: "Premium privé studio",
    description: "Powerrack, kabelmachine, dumbbells tot 40 kg, cardio. Alles staat klaar in onze studio aan de Egelantiersgracht.",
  },
  {
    icon: Globe,
    title: "Eigen profiel op onze website",
    description: "Je krijgt een eigen profielpagina met foto, bio, specialisaties en directe boekingslink. Wij brengen klanten naar jou.",
  },
  {
    icon: CalendarClock,
    title: "Flexibel rooster",
    description: "Boek de studio wanneer het jou uitkomt. Per uur, per dag, of via een vast pakket. Geen vaste tijden, geen verplichtingen.",
  },
  {
    icon: Users,
    title: "Klanten via SculptClub",
    description: "Onze website trekt maandelijks honderden bezoekers die zoeken naar personal training in Amsterdam. Jouw profiel staat daartussen.",
  },
  {
    icon: TrendingUp,
    title: "Groei je praktijk",
    description: "Van startende trainer tot gevestigde praktijk. Wij helpen je groeien zonder overhead — geen huur van een hele ruimte, geen vaste lasten.",
  },
];

const steps = [
  { step: "1", title: "Neem contact op", description: "Stuur een WhatsApp of vul het formulier in. We reageren meestal binnen een uur." },
  { step: "2", title: "Gratis kennismaking", description: "Kom langs in de studio. Bekijk de ruimte, stel vragen, en kijk of het past." },
  { step: "3", title: "Start direct", description: "Kies je pakket, lever je foto en bio aan, en je profiel gaat live. Geen wachttijd." },
];

const faqs = [
  { q: "Wat kost het om de studio te huren?", a: "Vanaf €12 per 60 minuten. Met een strippenkaart koop je tegoed met korting: Starter €89 voor €99 (10%), Routine €179 voor €210 (15%), Pro €299 voor €375 (20%), Volume €499 voor €650 (23%). Pakketten zijn 1 jaar geldig." },
  { q: "Heb ik een eigen verzekering nodig?", a: "Ja, je dient een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid." },
  { q: "Hoeveel klanten kan ik tegelijk trainen?", a: "In de halve studio train je 1-op-1 (max 2 personen). De hele studio huur je voor groepen van 1 tot 8 personen." },
  { q: "Krijg ik echt een profiel op de website?", a: "Ja. Je krijgt een eigen profielpagina met foto, bio, specialisaties, tarieven en een directe boekingslink. Dit is inbegrepen bij elk huurpakket — en ook bij losse uur-huur. Vraag er via WhatsApp om en we zetten je erop." },
  { q: "Moet ik een contract tekenen?", a: "Nee. Je boekt per uur of koopt een pakket. Geen langetermijncontract, geen verplichtingen. Stop wanneer je wilt." },
  { q: "Welke apparatuur is beschikbaar?", a: "Powerrack, verstelbare bank, dumbbells (4-40 kg), kabelmachine, assault bike, roeier en accessoires. Alles wat je nodig hebt voor professionele sessies." },
  { q: "Kan ik de studio eerst bekijken?", a: "Natuurlijk. Stuur een WhatsApp en we plannen een gratis rondleiding in. Geen verplichtingen." },
  { q: "In welke buurt zit SculptClub?", a: "Egelantiersgracht 424, Amsterdam Jordaan. Centraal gelegen, goed bereikbaar met fiets en OV vanuit heel Amsterdam." },
];

export default function WordTrainerNL() {
  return (
    <PageLayout audience="rental">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Word Trainer", url: "/nl/word-trainer" }]} />
      {/* FAQPage schema — page had visible FAQs but no schema. Enables AI-extraction /
          citation for trainer-acquisition queries (the #1 revenue lever: studio rental). */}
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="overline mb-3 text-brand">Voor onafhankelijke trainers</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                <span className="text-brand">Jij houdt 100%.</span> Jouw klanten, jouw tarief, jouw agenda.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Een privé studio in de Jordaan waar je 100% houdt van wat je rekent. Huur per uur vanaf €12, betaal alleen wanneer je traint, en krijg een gratis profiel op sculptclub.nl om je agenda te vullen.
              </p>
              {/* 5★ Google trust signal — trainer-funnel parity 2026-05-20.
                  Studio-huren + voor-trainers already had this rating; word-trainer
                  was missing it. Same pattern, same position. */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400" aria-hidden>★★★★★</span>
                  <span className="font-semibold">5,0 op Google</span>
                </span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Privé studio</strong> · Vanaf €12/uur · Volledige vrijheid · Geen contract · Altijd gratis annuleren
                </span>
              </div>
              {/* CTAs moved ABOVE the bullet list 2026-05-19 (parallel to
                  /en/become-trainer). Mobile fold at iPhone 14 Pro put the
                  WhatsApp button at y=661 px in a 660 px viewport — exactly
                  1 px below the fold. IG-webview audience (6s avg duration)
                  doesn't scroll, so the action button effectively didn't
                  exist for them. Action first, bullets as proof below. */}
              {/* Hero CTAs (2026-05-27): primary = aanmeld-form (on-page,
                  structured data capture); secondary = WhatsApp (instant
                  chat for trainers who prefer not to fill anything).
                  Pre-fix: primary was WhatsApp + secondary "Bekijk studio
                  & tarieven" → sent trainer AWAY to studio-huren losing
                  the trainer-funnel context. Operator: "vage funnels!!"
                  Now: structured first-touch via form, WA stays available.
                  2026-09-24: the BOTTOM secondary button goes to the trainer free-trial page
                  (studio trial -> paying renter 52%, card muevvylus84iuu) instead of the
                  general studio page. Hero untouched. */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink
                  href="#aanmelden"
                  size="lg"
                  className="plausible-event-name=word_trainer_hero_aanmelden bg-brand hover:bg-brand-dark text-brand-foreground"
                >
                  Meld je aan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag meer weten over werken bij SculptClub")}`}
                  external
                  variant="outline"
                  size="lg"
                  className="plausible-event-name=word_trainer_hero_whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ons
                </ButtonLink>
              </div>
              {/* 2026-05-27: copy lifted to natural NL ("wees bewust van AI
                  taalgebruik" — operator). Replaced em-dash chains + 3-clause
                  bullets with normal sentences. Each line ≤8 words, no "—". */}
              <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">✓ Privé studio</strong>. Geen wachtrij, geen pottenkijkers.</li>
                <li>✓ Jouw tarief is voor jou — jij huurt alleen de ruimte.</li>
                <li>✓ Per uur vanaf €12, of bespaar 23% met een pakket.</li>
                <li>✓ Gratis profielpagina op sculptclub.nl.</li>
                <li>✓ Geen contract. Altijd opzegbaar.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Gratis kennismaking</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Geen contract</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Vanaf €12/uur</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Hero slideshow — crossfade through 4 "trainer at SculptClub"
                angles every 4.8s. Same RotatingImageStack pattern as
                homepage + rental hero + hub hero (commits 0d594e7 / 9ea1a93
                / 5a33396 / ecca7c9). ZZP-trainer prospect lands → sees
                rotating "this could be you working here" mix. */}
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 1024px) 100vw, 50vw"
                objectPositionClass="object-top"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="muted">
        <SectionHeader
          overline="Waarom SculptClub"
          title="Alles wat je nodig hebt, niets wat je niet nodig hebt"
          description="Geen eigen studio nodig. Geen vaste lasten. Volledige vrijheid. Focus op wat je het beste doet: trainen."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 stappen live"
          description="Van eerste contact tot je eigen profiel op de website — het duurt geen week."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio showcase */}
      <Section bg="muted">
        <SectionHeader
          overline="De studio"
          title="Egelantiersgracht 424, Amsterdam Jordaan"
          description="Centraal gelegen privé studio met professionele apparatuur. Dagelijks open van 06:00 tot 22:00."
        />
        <FadeIn>
          {/* Studio gallery — 3 visually distinct shots covering people +
              equipment + place. Audit 2026-05-27 found prior set
              (bike-smile + barbell-dramatic + barbell-skylight) shipped 2
              near-identical dark barbell shots stacked on mobile (operator
              screenshot showed the "duplicate hero" feel). Also
              barbell-skylight was already in HERO_IMAGES line 49 → same
              image appearing twice on one page. Swapped to:
              bike-smile (person energy) + dumbbells-power (equipment
              variety) + canal-view-doors (place identity, reinforces the
              "Egelantiersgracht 424, Jordaan" caption above). */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/studio/training-bike-smile.jpg", alt: "Lachend op de assault bike bij SculptClub" },
              { src: "/images/studio/training-dumbbells-power.jpg", alt: "Dumbbell-training bij SculptClub" },
              { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht op de Egelantiersgracht vanuit de SculptClub studio" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink
            href="/nl/studio"
            variant="outline"
            size="lg"
            className="plausible-event-name=word_trainer_studio_gallery"
          >
            <MapPin className="w-4 h-4" />
            Bekijk de studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing — Per uur / Pakketten tabs.
          Operator 2026-05-27: pointed at /nl/boek-studio's tabbed
          Per uur ⇄ Pakketten + "bespaar tot 23%" badge as the design
          to use here too ("this one is better, with also the packages
          slider"). Same <RentalTabs> component as boek-studio; trainer
          context = no Acuity-booking buttons inline (the booking action
          for trainers = sign up via the form below). Read-only rate
          table per tab is enough at this stage of the funnel. */}
      <Section>
        <SectionHeader
          overline="Tarieven"
          title="Wat je betaalt"
          description="Reserveer per uur of koop een pakket. Geen contract, altijd gratis annuleren."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <RentalTabs
              locale="nl"
              hourly={
                <div className="rounded-2xl border border-border bg-card/30 overflow-hidden">
                  <div className="grid grid-cols-2 text-sm font-medium text-muted-foreground border-b border-border px-5 py-3">
                    <div>Ruimte</div>
                    <div className="text-right">60 min</div>
                  </div>
                  <div className="grid grid-cols-2 items-center px-5 py-4 border-b border-border/50">
                    <div className="font-semibold">Halve studio</div>
                    <div className="text-right text-lg font-bold">€12</div>
                  </div>
                  <div className="grid grid-cols-2 items-center px-5 py-4">
                    <div className="font-semibold">Hele studio</div>
                    <div className="text-right text-lg font-bold">€17</div>
                  </div>
                </div>
              }
              packages={
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {/* 2026-09-23: real Acuity packages (CLAUDE.md, checked live). The old 5/10/20-hour
                      packs at €11.40/€10.20/€9.24 per hour did not exist. */}
                  <div className="rounded-2xl border border-border bg-card/30 px-4 py-5 text-center">
                    <p className="text-sm font-semibold">Starter</p>
                    <p className="text-3xl font-bold mt-1">€89</p>
                    <p className="text-xs text-muted-foreground mt-1">€99 tegoed</p>
                    <p className="text-xs text-brand mt-1">10% korting</p>
                  </div>
                  <div className="rounded-2xl border border-brand bg-brand/5 px-4 py-5 text-center">
                    <p className="text-sm font-semibold">Routine</p>
                    <p className="text-3xl font-bold mt-1">€179</p>
                    <p className="text-xs text-muted-foreground mt-1">€210 tegoed</p>
                    <p className="text-xs text-brand mt-1 font-semibold">15% korting</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/30 px-4 py-5 text-center">
                    <p className="text-sm font-semibold">Pro</p>
                    <p className="text-3xl font-bold mt-1">€299</p>
                    <p className="text-xs text-muted-foreground mt-1">€375 tegoed</p>
                    <p className="text-xs text-brand mt-1">20% korting</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/30 px-4 py-5 text-center">
                    <p className="text-sm font-semibold">Volume</p>
                    <p className="text-3xl font-bold mt-1">€499</p>
                    <p className="text-xs text-muted-foreground mt-1">€650 tegoed</p>
                    <p className="text-xs text-brand mt-1">23% korting</p>
                  </div>
                </div>
              }
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">Alle pakketten zijn 1 jaar geldig. <a href="/nl/prijzen" className="text-brand hover:underline">Bekijk alle tarieven</a></p>
        </FadeIn>
      </Section>

      {/* Aanmelden — primary conversion section.
          Operator directive 2026-05-27: trainer must be able to leave
          their info on the page OR send a WhatsApp. Form does both:
          captures structured data (name + phone required, email +
          message optional) and opens WhatsApp with that data pre-filled
          so the trainer reviews + sends. No backend, no spam-filter
          deliverability risk. Anchor #aanmelden — hero primary CTA
          + MobileBottomCTABar route here. */}
      <Section id="aanmelden">
        <SectionHeader
          overline="Aanmelden"
          title="Stuur je gegevens — we bellen je binnen 24 uur"
          description="Vul kort je naam en nummer in. We openen WhatsApp met je gegevens — jij verstuurt zelf. Geen verplichtingen."
        />
        <FadeIn>
          <TrainerApplicationForm locale="nl" />
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="Veelgestelde vragen"
          title="Alles wat je wilt weten"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Referral incentive for current trainers */}
      <TrainerReferralBanner locale="nl" />

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            {/* Bottom-CTA trust strip — closes the decision loop at the
                exact moment visitor decides. Same 5★ + value-prop as hero. */}
            <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400" aria-hidden>★★★★★</span>
                <span className="font-semibold text-white">5,0 op Google</span>
              </span>
              <span aria-hidden className="text-white/40">·</span>
              <span className="text-white/70"><strong className="text-white/90">Privé studio</strong> · Volledige vrijheid · Geen contract · Altijd gratis annuleren</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Stuur een WhatsApp en plan een gratis rondleiding. Geen verplichtingen. Even kijken of het past.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag de studio bekijken")}`}
                external
                size="lg"
                className="plausible-event-name=word_trainer_bottom_whatsapp w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
              <ButtonLink
                href="/nl/studio-huren/gratis-test"
                variant="outline"
                size="lg"
                className="plausible-event-name=word_trainer_bottom_gratis_test w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                Gratis proefuur boeken
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

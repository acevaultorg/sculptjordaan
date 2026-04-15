import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
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
  title: "Word Trainer bij SculptClub — Studio Huren in Amsterdam Jordaan",
  description:
    "Start of groei je personal training praktijk bij SculptClub. 0% commissie, eigen profiel op onze website, privé studio vanaf €12/uur. Gratis kennismaking.",
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
};

const benefits = [
  {
    icon: Percent,
    title: "0% commissie",
    description: "Houd 100% van je inkomsten. Wij rekenen geen commissie — nul. Je tarief is je tarief.",
  },
  {
    icon: Building2,
    title: "Premium privé studio",
    description: "Volledig uitgeruste studio aan de Egelantiersgracht. Powerrack, kabelmachine, dumbbells, cardio. Alles aanwezig.",
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
  { q: "Wat kost het om de studio te huren?", a: "Vanaf €12 per 60 minuten. Met een 10-uren pakket betaal je €10,20/uur (15% korting). Met een 20-uren pakket €9,24/uur (23% korting). Pakketten zijn 3 maanden geldig." },
  { q: "Heb ik een eigen verzekering nodig?", a: "Ja, je dient een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid." },
  { q: "Hoeveel klanten kan ik tegelijk trainen?", a: "De studio is geschikt voor 1-op-1 sessies en kleine groepen tot maximaal 3 personen." },
  { q: "Krijg ik echt een profiel op de website?", a: "Ja. Je krijgt een eigen profielpagina met foto, bio, specialisaties, tarieven en een directe boekingslink. Dit is inbegrepen bij elk huurpakket." },
  { q: "Moet ik een contract tekenen?", a: "Nee. Je boekt per uur of koopt een pakket. Geen langetermijncontract, geen verplichtingen. Stop wanneer je wilt." },
  { q: "Welke apparatuur is beschikbaar?", a: "Powerrack, verstelbare bank, dumbbells (2-40 kg), kabelmachine, assault bike, roeier en accessoires. Alles wat je nodig hebt voor professionele sessies." },
  { q: "Kan ik de studio eerst bekijken?", a: "Natuurlijk. Stuur een WhatsApp en we plannen een gratis rondleiding in. Geen verplichtingen." },
  { q: "In welke buurt zit SculptClub?", a: "Egelantiersgracht 424, Amsterdam Jordaan. Centraal gelegen, goed bereikbaar met fiets en OV vanuit heel Amsterdam." },
];

export default function WordTrainerNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Word Trainer", url: "/nl/word-trainer" }]} />

      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="overline mb-3 text-brand">Voor onafhankelijke trainers</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                <span className="text-brand">0% commissie.</span> Jouw klanten, jouw tarief, jouw agenda.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Een privé studio in de Jordaan waar je 100% houdt van wat je rekent. Huur per uur vanaf €12, betaal alleen wanneer je traint, en krijg een gratis profiel op sculptclub.nl om je agenda te vullen.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>✓ 0% commissie — wat jij rekent, hou jij</li>
                <li>✓ Huur per uur vanaf €12, of bespaar tot 23% met een pakket</li>
                <li>✓ Gratis profiel + WhatsApp-CTA op onze website</li>
                <li>✓ Geen lidmaatschap, geen vaste lasten, altijd opzegbaar</li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink
                  href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag meer weten over werken bij SculptClub")}`}
                  external
                  size="lg"
                  className="bg-brand hover:bg-brand-dark text-brand-foreground"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ons
                </ButtonLink>
                <ButtonLink href="/nl/studio-huren" variant="outline" size="lg">
                  Bekijk studio & tarieven
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Gratis kennismaking</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Geen contract</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Vanaf €12/uur</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/studio/model-facade-full.jpg"
                alt="Atleet bij de ingang van SculptClub Private Gym aan Egelantiersgracht 424"
                fill
                className="object-cover object-top"
                preload
                sizes="(max-width: 1024px) 100vw, 50vw"
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
          description="Geen eigen studio nodig. Geen vaste lasten. Geen commissie. Focus op wat je het beste doet: trainen."
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
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white text-xl font-bold">
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
          description="Centraal gelegen privé studio met professionele apparatuur. Dagelijks open van 06:30 tot 22:00."
        />
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/studio/training-bike-smile.jpg", alt: "Lachend op de assault bike bij SculptClub" },
              { src: "/images/studio/training-barbell-dramatic.jpg", alt: "Dramatische barbell close-up bij SculptClub" },
              { src: "/images/studio/training-barbell-skylight.jpg", alt: "Barbell training onder het daklicht bij SculptClub" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href="/nl/studio" variant="outline" size="lg">
            <MapPin className="w-4 h-4" />
            Bekijk de studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing snapshot */}
      <Section>
        <SectionHeader
          overline="Tarieven"
          title="Transparante prijzen, geen verrassingen"
          description="Boek per uur of koop een pakket met korting. Geen langetermijncontract."
        />
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€12</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">Halve studio</p>
              </CardContent>
            </Card>
            <Card className="text-center border-brand">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€10,20</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">10-uren pakket · 15% korting</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-3xl font-bold">€9,24</p>
                <p className="text-sm text-muted-foreground mt-1">per 60 min</p>
                <p className="text-xs text-muted-foreground mt-2">20-uren pakket · 23% korting</p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">Alle pakketten zijn 3 maanden geldig. <a href="/nl/prijzen" className="text-brand hover:underline">Bekijk alle tarieven</a></p>
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

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om te starten?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Stuur een WhatsApp en plan een gratis rondleiding. Geen verplichtingen — gewoon kijken of het past.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag de studio bekijken")}`}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
              <ButtonLink
                href="/nl/studio-huren"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                Bekijk tarieven
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

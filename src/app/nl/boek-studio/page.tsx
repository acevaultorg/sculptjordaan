import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { CheckCircle, MessageCircle, ArrowRight, Eye, Key, Repeat } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam",
  description:
    "Huur een volledig uitgeruste privé studio in de Jordaan. Vanaf €12/uur, geen contract, gratis proefsessie. Professionele apparatuur, flexibel per uur.",
  alternates: {
    canonical: "/nl/boek-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
  },
};

const benefits = [
  "Gratis proefsessie — bekijk de studio zonder verplichtingen",
  "Halve studio (1:1) vanaf €12/uur, hele studio (max 6) vanaf €17/uur",
  "Professionele apparatuur: powerrack, kabelmachine, Concept2, dumbbells tot 40kg",
  "Geen contract, geen commissie — jij houdt 100% van je omzet",
  "Bespaar 10-23% met een strippenkaart (1 jaar geldig)",
  "Eigen deurcode via WhatsApp — geen receptie, geen wachttijd",
];

const steps = [
  {
    icon: Eye,
    title: "Bekijk de studio",
    description: "Boek een gratis proefsessie en test de ruimte en apparatuur zelf.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Boek per uur via het systeem. Je krijgt een eigen code via WhatsApp.",
  },
  {
    icon: Repeat,
    title: "Train je klanten",
    description: "Gebruik de studio wanneer het jou uitkomt. Flexibel, zonder vast contract.",
  },
];

const studioImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "SculptClub studio interieur" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in de SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in de SculptClub studio" },
];

const faqs = [
  {
    q: "Wat kost het om de studio te huren?",
    a: "Halve studio (1:1) vanaf €12 per 60 minuten. Hele studio (max 6 personen) vanaf €17 per 60 minuten. Bespaar 10-23% met een kortingspakket.",
  },
  {
    q: "Welke apparatuur is beschikbaar?",
    a: "Powerrack, kabelmachine, Concept2 roeier, verstelbare bank, dumbbells tot 40kg, kettlebells, resistance bands en meer. Alles wat je nodig hebt voor een complete sessie.",
  },
  {
    q: "Hoe werkt het boeken?",
    a: "Je boekt online via het boekingssysteem. De avond voor je sessie ontvang je een deurcode via WhatsApp waarmee je de studio kunt betreden.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, boek een gratis proefsessie. Bekijk de ruimte, test de apparatuur — geen verplichtingen.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
  },
  {
    q: "Welke kortingspakketten zijn er?",
    a: "Starter €89 (10% korting), Routine €199 (15% korting) en Volume €549 (23% korting). Pakketten zijn 1 jaar geldig.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BoekStudioPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Boek Studio", url: "/nl/boek-studio" },
        ]}
      />
      <ServiceJsonLd
        name="Studio Verhuur"
        description="Huur een privé personal training studio in de Jordaan, Amsterdam. Professionele apparatuur, flexibel per uur."
        url="/nl/boek-studio"
        priceRange="Vanaf €12 per uur"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Voor Personal Trainers"
          title="Boek de Studio"
          description="Huur een volledig uitgeruste privé studio per uur. Direct beschikbaar, geen vast contract. Jouw klanten, jouw ruimte."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Boek gratis proefsessie
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/nl/studio-huren#tarieven" size="lg" variant="outline">
            Bekijk tarieven
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              Vanaf €12/uur · 0% commissie · Geen contract
            </p>
            <p className="text-sm text-muted-foreground">
              Dagelijks 06:30 – 22:00 · Proefsessie gratis · Vaste trainers huren regelmatig
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 Stappen Starten"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What you get */}
      <Section bg="muted">
        <SectionHeader
          overline="Wat je krijgt"
          title="Volledig Uitgeruste Privé Studio"
          description="Alles om je klanten professioneel te trainen, zonder overhead."
        />
        <FadeIn>
          <div className="mx-auto max-w-lg">
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Boek gratis proefsessie
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Studio gallery */}
      <Section>
        <SectionHeader overline="De studio" title="Bekijk de Ruimte" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section bg="muted">
        <SectionHeader overline="Trainers over SculptClub" title="Wat Collega-Trainers Zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Eindelijk een studio waar ik mijn klanten in alle rust kan
                trainen. Goede apparatuur, mooie locatie, geen gedoe met
                abonnementen.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Personal trainer, SculptClub
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Ik huur hier nu wekelijks. Mijn klanten waarderen de rust en
                privacy. Het boekingssysteem werkt soepel en de deurcode is altijd
                op tijd.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Fysiotherapeut, SculptClub
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Veelgestelde vragen" title="Heb je een Vraag?" />
        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar om je klanten hier te trainen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Probeer de studio gratis uit. Geen verplichtingen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                external
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

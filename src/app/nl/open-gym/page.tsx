import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks } from "@/config/acuity";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { Clock, Key, Dumbbell, Info } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Gym — Train Zelfstandig in een Priv\u00e9 Studio | SculptClub Amsterdam Jordaan",
  description:
    "Boek sessies van 60 minuten in een rustige, volledig uitgeruste priv\u00e9 studio in de Jordaan. Max. 3 personen per slot. Lidmaatschap vanaf \u20ac29 per 4 weken.",
  alternates: {
    canonical: "/nl/open-gym",
    languages: {
      nl: "/nl/open-gym",
      en: "/en/open-gym",
    },
  },
};

const plans = [
  {
    name: "Instapplan",
    sessions: "4 sessies",
    frequency: "1x / week",
    tagline: "Ideaal om te beginnen",
    price: "\u20ac29",
    period: "/ 4 weken",
    perSession: "\u20ac7,25 / sessie",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Populair",
    sessions: "8 sessies",
    frequency: "2x / week",
    tagline: "Regelmatig trainen zonder te veel druk",
    price: "\u20ac49",
    period: "/ 4 weken",
    perSession: "\u20ac6,13 / sessie",
    badge: "Meest gekozen",
    link: acuityLinks.openGymPlans.populair,
  },
  {
    name: "Intensief",
    sessions: "12 sessies",
    frequency: "3x / week",
    tagline: "Serieus resultaat behalen",
    price: "\u20ac69",
    period: "/ 4 weken",
    perSession: "\u20ac5,75 / sessie",
    badge: null,
    link: acuityLinks.openGymPlans.intensief,
  },
  {
    name: "Onbeperkt",
    sessions: "Onbeperkt",
    frequency: "Onbeperkt",
    tagline: "Maximale vrijheid en flexibiliteit",
    price: "\u20ac89",
    period: "/ 4 weken",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymPlans.onbeperkt,
  },
];

const steps = [
  {
    icon: Clock,
    title: "Boek een sessie",
    description: "Kies een tijdslot dat bij je past via ons boekingssysteem.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Je ontvangt een unieke code om de studio binnen te komen.",
  },
  {
    icon: Dumbbell,
    title: "Train op jouw tijd",
    description:
      "Gebruik de volledige studio met professionele apparatuur, helemaal voor jezelf.",
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub studio" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Assault bike in SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht SculptClub studio" },
];

const faqs = [
  {
    q: "Wat is Open Gym precies?",
    a: "Open Gym geeft je toegang tot onze priv\u00e9 studio om zelfstandig te trainen. Je boekt een tijdslot, ontvangt een deurcode en hebt de volledige ruimte en apparatuur tot je beschikking.",
  },
  {
    q: "Welke apparatuur is beschikbaar?",
    a: "De studio is volledig uitgerust met een powerrack, verstelbare bank, dumbbells, kabelmachine, cardio apparatuur en meer. Alles wat je nodig hebt voor een complete training.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Elke Open Gym sessie duurt 60 minuten. Je kunt meerdere sessies achter elkaar boeken als je langer wilt trainen.",
  },
  {
    q: "Kan ik een vriend meenemen?",
    a: "Er mogen maximaal 3 personen tegelijk in de studio. Wil je samen trainen? Bekijk dan onze studio verhuur opties voor small group training.",
  },
  {
    q: "Wat als ik mijn sessie moet annuleren?",
    a: "Je kunt tot 12 uur van tevoren kosteloos annuleren via het boekingssysteem. Bij te laat annuleren wordt de sessie in mindering gebracht op je tegoed.",
  },
  {
    q: "Is het echt een lidmaatschap?",
    a: "Ja, Open Gym werkt met een lidmaatschap per 4 weken. Je kiest een plan dat bij je past en kunt elk moment opzeggen. Geen langlopend contract.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function OpenGymPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Open Gym","url":"/nl/open-gym"}]} />
      <ServiceJsonLd
        name="Open Gym"
        description="Zelfstandig trainen in een privé studio in de Jordaan, Amsterdam. Boek sessies van 60 minuten, max 3 personen tegelijk."
        url="/nl/open-gym"
        priceRange="€99 - €249 per maand"
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Open Gym"
          title="Open Gym in een Priv\u00e9 Studio"
          description="Boek sessies van 60 minuten in een rustige, volledig uitgeruste studio in de Jordaan. Max. 3 personen per slot."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.openGymBook} size="lg">
            Al lid? Reserveer jouw uur
          </ButtonLink>
          <ButtonLink href={acuityLinks.generic} size="lg" variant="outline">
            Nieuw? Begin met een gratis proefles
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              De meeste leden starten met 2x per week
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              <span>Sessies van 60 minuten. Voor 1 persoon.</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          overline="Lidmaatschap"
          title="Kies Jouw Plan"
          description="Alle plannen lopen per 4 weken. Geen langlopend contract."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center flex flex-col ${plan.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge className="mx-auto mb-2">{plan.badge}</Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.sessions}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}
                      {plan.period}
                    </span>
                  </p>
                  {plan.perSession && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.perSession}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <ButtonLink href={plan.link} size="sm" className="w-full">
                    Start
                  </ButtonLink>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section bg="muted">
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 Stappen aan de Slag"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio gallery */}
      <Section>
        <SectionHeader
          overline="De Studio"
          title="Volledig Uitgerust"
          description="Powerrack, dumbbells, kabelmachine, cardio en meer. Alles wat je nodig hebt."
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
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

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Open Gym FAQ" />

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
        <SectionHeader
          overline="Klaar om te starten?"
          title="Kies Jouw Lidmaatschap"
          description="Kies een lidmaatschap als je nieuw bent, of reserveer direct als je al lid bent."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink
            href={acuityLinks.openGymPlans.populair}
            size="lg"
            className="text-white"
          >
            Word lid
          </ButtonLink>
          <ButtonLink
            href={acuityLinks.openGymBook}
            size="lg"
            variant="outline"
            className="text-white border-white/30 hover:bg-white/10"
          >
            Reserveer een sessie
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

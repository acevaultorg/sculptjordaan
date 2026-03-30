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
import { acuityLinks } from "@/config/acuity";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  CreditCard,
  ArrowRight,
  XCircle,
  Key,
  Handshake,
  Dumbbell,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijzen — Personal Training, Open Gym & Studio Huur | SculptClub Amsterdam Jordaan",
  description:
    "Overzicht van alle prijzen bij SculptClub Amsterdam. Personal training vanaf \u20ac45, Open Gym vanaf \u20ac29/4wk, studio huur vanaf \u20ac12/uur. Geen contract, geen verplichtingen.",
  alternates: {
    canonical: "/nl/prijzen",
    languages: {
      nl: "/nl/prijzen",
      en: "/en/pricing",
    },
  },
};

const openGymPlans = [
  {
    name: "Instapplan",
    sessions: "4 sessies",
    price: "\u20ac29",
    period: "/ 4 weken",
    perSession: "\u20ac7,25 / sessie",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Populair",
    sessions: "8 sessies",
    price: "\u20ac49",
    period: "/ 4 weken",
    perSession: "\u20ac6,13 / sessie",
    badge: "Meest gekozen",
    link: acuityLinks.openGymPlans.populair,
  },
  {
    name: "Intensief",
    sessions: "12 sessies",
    price: "\u20ac69",
    period: "/ 4 weken",
    perSession: "\u20ac5,75 / sessie",
    badge: null,
    link: acuityLinks.openGymPlans.intensief,
  },
  {
    name: "Onbeperkt",
    sessions: "Onbeperkt",
    price: "\u20ac89",
    period: "/ 4 weken",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymPlans.onbeperkt,
  },
];

const included = [
  {
    icon: XCircle,
    title: "Altijd gratis annuleren",
    description: "Verzet of annuleer je sessie zonder kosten.",
  },
  {
    icon: Key,
    title: "Deurcode via WhatsApp",
    description: "Je ontvangt de avond ervoor je unieke toegangscode.",
  },
  {
    icon: Handshake,
    title: "Geen contract, geen verplichtingen",
    description: "Stop wanneer je wilt. Geen opzegboete.",
  },
  {
    icon: Dumbbell,
    title: "Alle apparatuur inbegrepen",
    description: "Powerrack, dumbbells, kabelmachine, cardio en meer.",
  },
];

export default function PricingPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Prijzen","url":"/nl/prijzen"}]} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Prijzen"
          title="Alle Prijzen op een Rij"
          description="Geen verborgen kosten, geen langlopende contracten. Bekijk alle tarieven voor personal training, Open Gym en studio verhuur."
        />
      </Section>

      {/* Personal Training */}
      <Section bg="muted">
        <SectionHeader
          overline="Personal Training"
          title="Train met een Personal Trainer"
          description="Gratis intake. Trainers bepalen hun eigen tarieven. 0% commissie."
        />

        <FadeIn>
          <Card className="mx-auto max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Vanaf &euro;45 / sessie</CardTitle>
              <CardDescription>Trainers bepalen hun eigen tarieven</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Eerste kennismaking altijd gratis. 0% commissie &mdash; de prijs die je van je trainer hoort is wat je betaalt.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                Bekijk trainers
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </CardFooter>
          </Card>
        </FadeIn>
      </Section>

      {/* Open Gym */}
      <Section>
        <SectionHeader
          overline="Open Gym"
          title="Lidmaatschap per 4 Weken"
          description="Train zelfstandig in onze priv\u00e9 studio. Sessies van 60 minuten, max. 3 personen."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {openGymPlans.map((plan, i) => (
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

        <FadeIn delay={0.4} className="mt-6 flex justify-center">
          <ButtonLink href="/nl/open-gym" variant="outline" size="lg">
            Boek Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Studio Rental */}
      <Section bg="muted">
        <SectionHeader
          overline="Studio Verhuur"
          title="Huur de Studio"
          description="Train je klanten in een volledig uitgeruste priv\u00e9 studio. Flexibel per uur."
        />

        {/* Rate table */}
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Ruimte</th>
                    <th className="px-4 py-3 text-center font-medium">60 min</th>
                    <th className="px-4 py-3 text-center font-medium">90 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Halve studio (1:1)</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;12</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;17</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;17</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        {/* Discount packages */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;99</span>
                </p>
                <p className="text-3xl font-bold">&euro;89</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 10%</span>
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;234</span>
                </p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 15%</span>
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Beste deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;713</span>
                </p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Bespaar 23%</span>
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="h-4 w-4" />
            <span>Betaal met CreditCard, Apple Pay, Google Pay of per factuur</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-6 flex justify-center">
          <ButtonLink href="/nl/studio-huren" variant="outline" size="lg">
            Huur de studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* What's included */}
      <Section>
        <SectionHeader
          overline="Inbegrepen"
          title="Wat Is Altijd Inbegrepen"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om te beginnen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Start met een gratis proefles of neem contact met ons op via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href={acuityLinks.generic} size="lg">
                Boek Gratis Proefles
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/nl/vind-jouw-personal-trainer"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Bekijk trainers
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

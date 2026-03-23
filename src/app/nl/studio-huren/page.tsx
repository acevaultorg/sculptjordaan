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
} from "@/components/ui/card";
import { acuityLinks } from "@/config/acuity";
import { Dumbbell, Lock, Clock, Ban } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Huren — Privé Trainingsruimte | SculptClub Amsterdam Jordaan",
  description:
    "Huur onze privé studio in de Jordaan voor personal training of small group sessies. Vanaf €12/uur, geen commissie. Professionele apparatuur, flexibel per uur.",
  alternates: {
    canonical: "/nl/studio-huren",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const rates = [
  {
    type: "Halve studio (1:1)",
    prices: [
      { duration: "60 min", price: "€12" },
      { duration: "90 min", price: "€17" },
    ],
  },
  {
    type: "Hele studio (max 6)",
    prices: [
      { duration: "60 min", price: "€17" },
      { duration: "90 min", price: "€24" },
    ],
  },
];

const packages = [
  {
    name: "Starter",
    price: "€89",
    badge: null,
    savings: "bespaar 10%",
  },
  {
    name: "Routine",
    price: "€199",
    badge: "Meest gekozen",
    savings: "bespaar 15%",
  },
  {
    name: "Volume",
    price: "€549",
    badge: "Beste waarde",
    savings: "bespaar 23%",
  },
];

const features = [
  {
    icon: Dumbbell,
    title: "Professionele apparatuur",
    description:
      "Powerrack, kabelmachine, dumbbells en alles wat je nodig hebt.",
  },
  {
    icon: Lock,
    title: "Privé ruimte",
    description: "Geen pottenkijkers. Alleen jij en je klant(en).",
  },
  {
    icon: Clock,
    title: "Flexibel per uur",
    description: "Boek wanneer het jou uitkomt. Geen vaste tijden.",
  },
  {
    icon: Ban,
    title: "Geen commissie",
    description: "Jij bepaalt je eigen tarieven. Wij rekenen alleen huur.",
  },
];

export default function StudioRentalPageNL() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Studio Verhuur"
          title="Huur de Studio"
          description="Jouw klanten. Onze ruimte. Huur onze volledig uitgeruste privé studio per uur en geef je personal training sessies in een professionele omgeving."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Huur de Studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing table */}
      <Section bg="muted">
        <SectionHeader
          overline="Tarieven"
          title="Uurtarieven"
          description="Flexibel per sessie, geen abonnement verplicht."
        />

        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Ruimte</th>
                    <th className="px-4 py-3 text-center font-medium">
                      60 min
                    </th>
                    <th className="px-4 py-3 text-center font-medium">
                      90 min
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((rate) => (
                    <tr key={rate.type} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium">{rate.type}</td>
                      {rate.prices.map((p) => (
                        <td
                          key={p.duration}
                          className="px-4 py-3 text-center font-semibold"
                        >
                          {p.price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Discount packages */}
      <Section>
        <SectionHeader
          overline="Voordeelpakketten"
          title="Meer Trainen, Meer Besparen"
          description="Koop een strippenkaart en bespaar op elke sessie. Pakketten zijn 1 jaar geldig."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center ${pkg.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {pkg.badge && (
                    <Badge className="mx-auto mb-2">{pkg.badge}</Badge>
                  )}
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                  <p className="mt-2 text-sm">
                    <span className="sc-discount">{pkg.savings}</span>
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Pakketten zijn 1 jaar geldig. Laagste effectieve tarief:{" "}
            <span className="sc-discount">€9,24 / sessie</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8 flex justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Huur de Studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Waarom SculptClub"
          title="Alles Wat Je Nodig Hebt"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}

import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { acuityLinks, acuityPackages, whatsappLinks } from "@/config/acuity";
import {
  Dumbbell,
  Lock,
  Clock,
  Ban,
  CreditCard,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Studio Huren — Priv\u00e9 Trainingsruimte | SculptClub Amsterdam Jordaan",
  description:
    "Huur onze priv\u00e9 studio in de Jordaan voor personal training of small group sessies. Vanaf \u20ac12/uur, geen commissie. Professionele apparatuur, flexibel per uur.",
  alternates: {
    canonical: "/nl/studio-huren",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professionele apparatuur",
    description:
      "Powerrack, kabelmachine, dumbbells en alles wat je nodig hebt.",
  },
  {
    icon: Lock,
    title: "Priv\u00e9 ruimte",
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

const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Studio overzicht" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "Studio interieur" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack" },
];

export default function StudioRentalPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Studio Huren","url":"/nl/studio-huren"}]} />
      <ServiceJsonLd
        name="Studio Verhuur"
        description="Huur onze privé personal training studio in de Jordaan, Amsterdam. Professionele apparatuur, flexibel per uur, geen commissie."
        url="/nl/studio-huren"
        priceRange="Vanaf €25 per uur"
      />
      {/* Hero */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              overline="Studio Verhuur"
              title="Studio huren"
              description="Train je klanten op jouw manier. Betaal per sessie of bespaar 10-23% met een kortingspakket. Geen abonnement. Geen verplichtingen."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek een gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#tarieven" variant="outline" size="lg">
                Bekijk tarieven
              </ButtonLink>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="SculptClub studio overzicht"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Pricing table */}
      <Section bg="muted" id="tarieven">
        <SectionHeader
          overline="Tarieven"
          title="Uurtarieven"
          description="Flexibel per sessie, geen abonnement verplicht."
        />

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
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;12</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio60}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio90}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio60}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;24</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio90}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Betaal met CreditCard, Apple Pay en iDEAL</span>
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
          {/* Starter */}
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
                <ButtonLink
                  href={acuityPackages.studio.starter}
                  size="sm"
                  className="mt-4"
                >
                  Koop Starter
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Routine */}
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
                <ButtonLink
                  href={acuityPackages.studio.routine}
                  size="sm"
                  className="mt-4"
                >
                  Koop Routine
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Volume */}
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
                <ButtonLink
                  href={acuityPackages.studio.volume}
                  size="sm"
                  className="mt-4"
                >
                  Koop Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Geldig 1 jaar. Laagste effectieve tarief:{" "}
            <span className="sc-discount">&euro;9,24/sessie</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Liever per bankoverschrijving?{" "}
            <a
              href={whatsappLinks.bankTransferNl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Stuur ons een WhatsApp
            </a>
          </p>
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

      {/* Gallery */}
      <Section>
        <SectionHeader overline="De studio" title="Bekijk de Ruimte" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
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

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om je klanten hier te trainen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Probeer de studio gratis uit met een proefsessie. Geen
              verplichtingen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek een gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
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

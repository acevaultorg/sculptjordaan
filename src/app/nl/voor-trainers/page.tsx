import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, Building2, Users, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Voor Personal Trainers in Amsterdam | SculptClub Jordaan" },
  description:
    "Hub voor freelance personal trainers in Amsterdam. Studio huren, eigen praktijk starten, ZZP-basics, klanten vinden via SculptClub. 0% commissie.",
  alternates: {
    canonical: "/nl/voor-trainers",
    languages: {
      nl: "/nl/voor-trainers",
      en: "/en/for-trainers",
    },
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Studio huren",
    href: "/nl/studio-huren",
    text:
      "Privé trainingsruimte in Jordaan vanaf €12/uur. Geen commissie, flexibel per sessie, alles inbegrepen.",
    cta: "Bekijk studio huur →",
  },
  {
    icon: Users,
    title: "Word trainer met profiel",
    href: "/nl/word-trainer",
    text:
      "Eigen profiel op sculptclub.nl + klantenmatch via /vind-jouw-personal-trainer. Voor trainers die hun praktijk willen groeien, niet alleen ruimte willen.",
    cta: "Word trainer-member →",
  },
  {
    icon: FileText,
    title: "Freelance trainer worden",
    href: "/nl/voor-trainers/freelance-personal-trainer-worden",
    text:
      "Praktische gids voor personal trainers die overwegen ZZP'er te worden in Amsterdam. KvK, tarieven, eerste klanten, ruimte.",
    cta: "Lees de gids →",
  },
  {
    icon: MapPin,
    title: "Locatie: Jordaan",
    href: "/nl/locatie-uren",
    text:
      "Egelantiersgracht 424. Centraal, bereikbaar, en de meest gezochte Amsterdam-wijk voor boutique PT-cliënten.",
    cta: "Locatie & openingstijden →",
  },
];

export default function VoorTrainersHubNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Voor personal trainers"
          title="Bouw je personal training praktijk in Amsterdam"
          description="SculptClub is gebouwd door en voor freelance trainers. Privé studio in Jordaan, geen commissie op jouw klanten, eigen profiel op onze site. Begin met huren — of word lid en krijg klanten via ons."
          center={false}
        />
        <FadeIn className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/nl/word-trainer" size="lg">
            Word trainer-member
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/nl/studio-huren" variant="outline" size="lg">
            Alleen ruimte huren
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="Vier paden"
          title="Welk pad past bij jou?"
          description="SculptClub werkt voor verschillende type trainers. Kies waar je nu staat — we helpen je groeien vanaf daar."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title}>
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                    <h3 className="text-xl font-semibold leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.text}
                    </p>
                    <ButtonLink href={pillar.href} variant="outline" size="sm">
                      {pillar.cta}
                    </ButtonLink>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Twijfel je? Kom eerst gratis langs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              60 minuten in de studio, kennismaken, vraag stellen. Geen verplichting. Geen pitch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag de studio bekijken")}`}
                external
                size="lg"
              >
                WhatsApp ons
              </ButtonLink>
              <ButtonLink href="/nl/word-trainer" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Lees meer over word-trainer
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

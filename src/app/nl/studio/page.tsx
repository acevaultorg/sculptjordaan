import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  Dumbbell,
  Zap,
  Target,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Studio & Apparatuur — SculptClub Amsterdam Jordaan" },
  description:
    "Volledig uitgeruste privé gym in de Jordaan. Squat rack, dumbbells, Echo Bike, slee, kettlebells en meer. Douches, kleedruimte en vinyl platenspeler.",
  alternates: {
    canonical: "/nl/studio",
    languages: {
      nl: "/nl/studio",
      en: "/en/studio",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/studio",
    title: "Studio & Apparatuur — SculptClub Amsterdam Jordaan",
    description:
      "Volledig uitgeruste privé gym in de Jordaan. Squat rack, dumbbells, Echo Bike, slee, kettlebells en meer. Douches, kleedruimte en vinyl platenspeler.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio & Apparatuur — SculptClub Amsterdam Jordaan",
    description:
      "Volledig uitgeruste privé gym in de Jordaan. Squat rack, dumbbells, Echo Bike, slee, kettlebells en meer. Douches, kleedruimte en vinyl platenspeler.",
  },
};

const equipmentCategories = [
  {
    icon: Dumbbell,
    title: "Kracht",
    items: [
      "Barbell & squat rack met platform",
      "Verstelbare banken",
      "Dumbbells 4-40 kg",
      "Dip attachment",
      "Cable machines",
    ],
  },
  {
    icon: Zap,
    title: "Conditie",
    items: [
      "Echo Bike",
      "Push/pull slee + track",
      "Plyo box",
      "Springtouwen",
    ],
  },
  {
    icon: Target,
    title: "Functioneel",
    items: ["Kettlebells", "Medicine balls", "Resistance bands"],
  },
  {
    icon: Sparkles,
    title: "Voorzieningen",
    items: [
      "Vinyl platenspeler + Bluetooth speaker",
      "Gratis WiFi",
      "Kleedruimte",
      "Beveiligde opbergruimte",
      "Drinkwater",
      "Douches",
      "2 kachels",
    ],
  },
];

const houseRules = [
  {
    title: "Respecteer de ruimte",
    description:
      "Behandel de studio en apparatuur met respect. Dit is jouw gym — houd het netjes voor de volgende.",
  },
  {
    title: "Maak apparatuur schoon na gebruik",
    description:
      "Gebruik de beschikbare doekjes en spray om apparatuur na gebruik schoon te maken.",
  },
  {
    title: "Kom op tijd",
    description:
      "Wees op tijd voor je sessie zodat je de volledige tijd kunt benutten. Laat het ons weten als je niet kunt komen.",
  },
];

export default function StudioPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Studio","url":"/nl/studio"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="De studio"
          title="Volledig uitgerust voor jouw training"
          description="Alles wat je nodig hebt voor kracht, conditie en functionele training — in een privé setting aan de gracht."
        />
      </Section>

      <Section bg="muted">
        <div className="grid sm:grid-cols-2 gap-6">
          {equipmentCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card ring-1 ring-foreground/10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          overline="Huisregels"
          title="Samen houden we het top"
          description="Een paar simpele regels zodat iedereen optimaal kan trainen."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {houseRules.map((rule, i) => (
            <FadeIn key={rule.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">{rule.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {rule.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Dual-audience CTA section — /nl/studio is reached by BOTH consumer
          visitors (via hero secondary CTA "Bekijk de studio" from 2026-05-16)
          AND ZZP trainers (via "Studio Huren" nav). Before 2026-05-16 the
          bottom CTA only served the ZZP audience ("Boek gratis proefles"
          → /studio-huren). Now consumer visitors get a primary path to
          trainer-intake AND ZZP trainers retain the rental-trial path. */}
      <Section bg="muted">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Kom de studio bekijken
            </h2>
            <p className="text-muted-foreground mb-8">
              Plan een gratis intake met een van onze trainers, of — als je
              zelf personal trainer bent — boek een gratis testsessie van de
              studio. WhatsApp blijft altijd open voor vragen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ButtonLink
                href="/nl/vind-jouw-personal-trainer"
                size="lg"
                className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Plan gratis intake met trainer
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={"/nl/studio-huren#schedule"}
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                Studio huren (ZZP trainer)
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="ghost"
                size="lg"
                className="rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

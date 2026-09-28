import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  Users,
  Dumbbell,
  Building2,
  Lock,
  MapPin,
  CalendarCheck,
  KeyRound,
  Clock,
  UserCheck,
  Eye,
  Handshake,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Over Ons — SculptClub Amsterdam Jordaan" },
  description:
    "SculptClub is een boutique personal training studio in Amsterdam Jordaan. Priv\u00e9 training, Open Gym en studio verhuur. Egelantiersgracht.",
  alternates: {
    canonical: "/nl/over-ons",
    languages: {
      nl: "/nl/over-ons",
      en: "/en/about",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/over-ons",
    title: "Over Ons — SculptClub Amsterdam Jordaan",
    description:
      "SculptClub is een boutique personal training studio in Amsterdam Jordaan. Priv\u00e9 training, Open Gym en studio verhuur. Egelantiersgracht.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Ons — SculptClub Amsterdam Jordaan",
    description:
      "SculptClub is een boutique personal training studio in Amsterdam Jordaan. Priv\u00e9 training, Open Gym en studio verhuur. Egelantiersgracht.",
  },
};

// href + linkLabel added (task mta5j62vzskwd7, 2026-08-26) \u2014 /nl/studio-huren
// and /nl/open-gym rank position ~56 despite 495-496 impressions/mo while
// this page (which briefly covers all three pillars) ranks position 5.4 for
// overlapping queries. The pillar cards previously had no outbound link at
// all, so this page absorbed relevance for "studio huren"/"open gym" intent
// with nowhere to hand it off to the dedicated, more substantive pages.
// Keyword-rich anchor text (not generic "Meer info") on the two specialist
// pages, per standard cannibalisation-resolution practice: point Google at
// which page is the specialist for each intent.
const pillars = [
  {
    icon: Users,
    title: "Personal Training",
    description:
      "Onafhankelijke trainers met hun eigen specialisatie en tarieven. De intake is altijd gratis en je betaalt je trainer direct.",
    href: "/nl/vind-jouw-personal-trainer",
    linkLabel: "Vind een personal trainer",
  },
  {
    icon: Dumbbell,
    title: "Open Gym",
    description:
      "Train zelfstandig in een priv\u00e9 studio met professionele apparatuur. Boek je sessie, ontvang een deurcode en train op jouw tijd.",
    href: "/nl/open-gym",
    linkLabel: "Open Gym Amsterdam Jordaan",
  },
  {
    icon: Building2,
    title: "Studio Huren",
    description:
      "Voor ZZP-trainers en fysiotherapeuten: huur onze volledig uitgeruste studio voor je eigen klanten. Flexibel per uur of via pakketten.",
    href: "/nl/studio-huren",
    linkLabel: "Trainingsruimte huren Amsterdam",
  },
];

const uniqueFeatures = [
  {
    icon: Lock,
    title: "Priv\u00e9",
    description: "Bij Open Gym zijn er nooit meer dan 4 mensen tegelijk.",
  },
  {
    icon: MapPin,
    title: "Aan de gracht",
    description:
      "Egelantiersgracht 424, midden in de Jordaan.",
  },
  {
    icon: KeyRound,
    title: "Deurcode toegang",
    description:
      "Er is geen receptie. Om 00:00 in de nacht voor je sessie krijg je een deurcode via WhatsApp.",
  },
  {
    icon: Clock,
    title: "06:00 \u2013 22:00 dagelijks",
    description:
      "Elke dag van de week, ook in het weekend.",
  },
  {
    icon: CalendarCheck,
    title: "Flexibel",
    description:
      "Je boekt per sessie of per 4 weken, zonder contract. Annuleren is altijd gratis.",
  },
  {
    icon: UserCheck,
    title: "Groepsgrootte",
    description:
      "Huur je de hele studio, dan is die alleen van jou en je groep, van 1 tot 8 personen.",
  },
  // M (2026-06-02) — the 2 positioning PRINCIPLES the facility-logistics grid
  // lacked: Transparant + Trainer-eerst (SculptClub's actual moats). Reuses
  // operator-validated terms (transparant wedge, 0% commissie). The other 2
  // M principles (Privé, Vrij≈Flexibel) are already in this grid.
  {
    icon: Eye,
    title: "Transparant",
    description:
      "Alle prijzen staan op de site. Je hoeft niet te bellen voor een offerte.",
  },
  {
    icon: Handshake,
    title: "Trainer-eerst",
    description:
      "Onze trainers houden 100% van hun tarief. Wij verhuren alleen de ruimte.",
  },
];

export default function OverOnsPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Over Ons","url":"/nl/over-ons"}]} />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Over SculptClub"
          title="Een kleine studio aan de Egelantiersgracht"
          description="Een privé trainingsstudio in de Jordaan, sinds 2025. Met een trainer, zelf, of als trainer die de ruimte huurt."
        />
      </Section>

      {/* Story + Photo */}
      <Section bg="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/entrance-smile.jpg"
                alt="Warm welkom bij SculptClub Amsterdam Jordaan, onze studio aan de gracht in de Jordaan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ons verhaal
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SculptClub begon in 2025 uit ergernis over volle sportscholen en
                lange contracten. Hier train je zonder abonnement en zonder
                drukte.
              </p>
              <p>
                De studio is klein: bij Open Gym zijn er nooit meer dan 4 mensen
                tegelijk. Je boekt online en komt binnen met een deurcode die je
                via WhatsApp krijgt.
              </p>
              <p>
                Je traint hier met een personal trainer of zelf via Open Gym. Ben
                je zelf trainer of fysiotherapeut, dan huur je de ruimte per uur
                voor je eigen klanten.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Three Pillars */}
      <Section>
        <SectionHeader
          overline="Wat wij bieden"
          title="Wat je hier kunt doen"
          description="Er zijn drie manieren om hier te trainen."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
                  {pillar.linkLabel} &rarr;
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Wat maakt ons uniek */}
      <Section bg="muted">
        <SectionHeader
          overline="Praktisch"
          title="Hoe het hier werkt"
          description="Wat je wilt weten voor je eerste bezoek."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFeatures.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-3">Locatie</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Aan de Egelantiersgracht
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dagelijks open van 06:00 tot 22:00. Na je boeking krijg je een deurcode.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Kom een keer langs
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Boek een gratis intake of neem contact met ons op via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={"/nl/vind-jouw-personal-trainer"}
                size="lg"
              >
                Boek Gratis Intake
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

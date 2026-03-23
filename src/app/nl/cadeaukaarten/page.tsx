import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import {
  Gift,
  MessageCircle,
  CreditCard,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cadeaukaarten — SculptClub Amsterdam Jordaan",
  description:
    "Geef het cadeau van personal training. SculptClub cadeaukaarten vanaf 75 euro. Geldig 12 maanden. Betaal met iDEAL, Visa of Apple Pay.",
  alternates: {
    canonical: "/nl/cadeaukaarten",
    languages: {
      nl: "/nl/cadeaukaarten",
      en: "/en/gift-cards",
    },
  },
};

const giftCards = [
  {
    name: "Proef Sessie",
    price: "75",
    sessions: "1 sessie",
    badge: null,
    features: [
      "1x personal training sessie (60 min)",
      "Kennismaking met een trainer naar keuze",
      "Persoonlijk trainingsadvies",
    ],
  },
  {
    name: "Duo Pakket",
    price: "150",
    sessions: "2 sessies",
    badge: "Meest gekozen",
    features: [
      "2x personal training sessies (60 min)",
      "Keuze uit alle trainers",
      "Persoonlijk trainingsplan",
      "Voedingsadvies bij Eva",
    ],
  },
  {
    name: "Trainings Pakket",
    price: "300",
    sessions: "Pakket",
    badge: "Beste waarde",
    features: [
      "Meerdere personal training sessies",
      "Volledige trainersbegeleiding",
      "Persoonlijk trainings- en voedingsplan",
      "Toegang tot alle faciliteiten",
      "Prioriteit bij boekingen",
    ],
  },
];

export default function GiftCardsPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Cadeaukaarten"
          title="Geef het cadeau van fitness"
          description="Verras iemand met een personal training ervaring bij SculptClub. Het perfecte cadeau voor iedereen die wil werken aan gezondheid en kracht."
        />
      </Section>

      <Section bg="muted">
        <div className="grid sm:grid-cols-3 gap-6">
          {giftCards.map((card, i) => (
            <FadeIn key={card.name} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-6 rounded-2xl bg-card ring-1 ring-foreground/10 h-full ${
                  card.badge === "Meest gekozen"
                    ? "ring-2 ring-brand"
                    : ""
                }`}
              >
                {card.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-brand-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                )}
                <div className="text-center mb-6">
                  <Gift className="w-8 h-8 mx-auto mb-3 text-brand" />
                  <h3 className="text-lg font-bold">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {card.sessions}
                  </p>
                  <p className="text-4xl font-bold mt-3">
                    &euro;{card.price}
                  </p>
                </div>
                <ul className="space-y-2 flex-1">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkles className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={siteConfig.whatsapp}
                  external
                  size="lg"
                  className={`mt-6 w-full rounded-xl text-sm font-semibold transition-all hover:scale-[1.015] active:scale-[0.97] ${
                    card.badge === "Meest gekozen"
                      ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                      : ""
                  }`}
                  variant={
                    card.badge === "Meest gekozen" ? "default" : "outline"
                  }
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Bestel via WhatsApp
                </ButtonLink>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Hoe het werkt
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <p className="font-semibold">Kies je kaart</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Selecteer het bedrag dat past
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <p className="font-semibold">Bestel via WhatsApp</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Stuur ons een bericht
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <p className="font-semibold">Ontvang je kaart</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Digitaal of fysiek
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Geldig 12 maanden
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" />
                iDEAL, Visa, Apple Pay
              </span>
            </div>

            <ButtonLink
              href={siteConfig.whatsapp}
              external
              size="lg"
              className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              Bestel je cadeaukaart via WhatsApp
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

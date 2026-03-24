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
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Gift Cards — SculptClub Amsterdam Jordaan",
  description:
    "Give the gift of personal training. SculptClub gift cards from 75 euros. Valid for 12 months. Pay with iDEAL, Visa or Apple Pay.",
  alternates: {
    canonical: "/en/gift-cards",
    languages: {
      nl: "/nl/cadeaukaarten",
      en: "/en/gift-cards",
    },
  },
};

const giftCards = [
  {
    name: "Taster Session",
    price: "75",
    sessions: "1 session",
    badge: null,
    features: [
      "1x personal training session (60 min)",
      "Meet a trainer of your choice",
      "Personal training advice",
    ],
  },
  {
    name: "Duo Package",
    price: "150",
    sessions: "2 sessions",
    badge: "Most popular",
    features: [
      "2x personal training sessions (60 min)",
      "Choice of all trainers",
      "Personal training plan",
      "Nutrition advice with Eva",
    ],
  },
  {
    name: "Training Package",
    price: "300",
    sessions: "Package",
    badge: "Best value",
    features: [
      "Multiple personal training sessions",
      "Full trainer guidance",
      "Personal training & nutrition plan",
      "Access to all facilities",
      "Priority booking",
    ],
  },
];

export default function GiftCardsPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Gift Cards","url":"/en/gift-cards"}]} />
      <Section>
        <SectionHeader
          overline="Gift Cards"
          title="Give the Gift of Fitness"
          description="Surprise someone with a personal training experience at SculptClub. The perfect gift for anyone who wants to invest in their health and strength."
        />
      </Section>

      <Section bg="muted">
        <div className="grid sm:grid-cols-3 gap-6">
          {giftCards.map((card, i) => (
            <FadeIn key={card.name} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-6 rounded-2xl bg-card ring-1 ring-foreground/10 h-full ${
                  card.badge === "Most popular"
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
                    card.badge === "Most popular"
                      ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                      : ""
                  }`}
                  variant={
                    card.badge === "Most popular" ? "default" : "outline"
                  }
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Order via WhatsApp
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
              How It Works
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <p className="font-semibold">Choose your card</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Select the amount that fits
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <p className="font-semibold">Order via WhatsApp</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Send us a message
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <p className="font-semibold">Receive your card</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Digital or physical
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Valid for 12 months
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
              Order your gift card via WhatsApp
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

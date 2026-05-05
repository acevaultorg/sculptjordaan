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
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Studio & Equipment — SculptClub Amsterdam Jordaan" },
  description:
    "Fully equipped private gym in the Jordaan. Squat rack, dumbbells, Echo Bike, sled, kettlebells and more. Showers, changing area and vinyl record player.",
  alternates: { canonical: "/en/studio", languages: { nl: "/nl/studio", en: "/en/studio" } },
};

const equipmentCategories = [
  {
    icon: Dumbbell,
    title: "Strength",
    items: [
      "Barbell & squat rack with platform",
      "Adjustable benches",
      "Dumbbells 4–40 kg",
      "Dip attachment",
      "Cable machines",
    ],
  },
  {
    icon: Zap,
    title: "Conditioning",
    items: [
      "Echo Bike (assault bike)",
      "Push/pull sled + track",
      "Plyo jump box",
      "Jump ropes",
    ],
  },
  {
    icon: Target,
    title: "Functional",
    items: ["Kettlebells", "Medicine balls", "Resistance bands"],
  },
  {
    icon: Sparkles,
    title: "Amenities",
    items: [
      "Vinyl record player + Bluetooth speaker",
      "Free WiFi",
      "Changing area",
      "Secure storage",
      "Drinking water",
      "Showers",
      "2 heaters",
    ],
  },
];

const houseRules = [
  {
    title: "Respect the space",
    description:
      "Treat the studio and equipment with care. This is your gym — keep it clean for the next person.",
  },
  {
    title: "Clean equipment after use",
    description:
      "Use the available wipes and spray to clean equipment after each use.",
  },
  {
    title: "Arrive on time",
    description:
      "Be on time for your session so you can make the most of your slot. Let us know if you can't make it.",
  },
];

export default function StudioPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Studio","url":"/en/studio"}]} />
      <Section>
        <SectionHeader
          as="h1"
          overline="The Studio"
          title="Fully equipped for your training"
          description="Everything you need for strength, conditioning and functional training — in a private setting on the canal."
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
          overline="House rules"
          title="Let's keep it great together"
          description="A few simple rules so everyone can train at their best."
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

      <Section bg="muted">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Come see the studio
            </h2>
            <p className="text-muted-foreground mb-8">
              Curious about the space? Book a free trial session or send us a
              message on WhatsApp. We&apos;d love to show you around.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book free trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

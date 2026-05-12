import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, Building2, Users, FileText, MapPin, CheckSquare, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "For Personal Trainers in Amsterdam | SculptClub Jordaan" },
  description:
    "Hub for freelance personal trainers in Amsterdam. Rent the studio, build your practice, get clients via SculptClub. Zero commission, private space in Jordaan.",
  alternates: {
    canonical: "/en/for-trainers",
    languages: {
      nl: "/nl/voor-trainers",
      en: "/en/for-trainers",
    },
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Rent the studio",
    href: "/en/studio-rental",
    text:
      "Private training space in Jordaan from €12/hour. Zero commission, flexible per session, everything included.",
    cta: "See studio rental →",
  },
  {
    icon: Users,
    title: "Become a trainer member",
    href: "/en/become-trainer",
    text:
      "Get your own profile on sculptclub.nl + client matching via /en/find-personal-trainer. For trainers growing their practice, not just renting space.",
    cta: "Become a member →",
  },
  {
    icon: FileText,
    title: "Becoming a freelance trainer",
    href: "/en/for-trainers/becoming-freelance-personal-trainer",
    text:
      "Practical guide for personal trainers considering going freelance in Amsterdam. Registration, rates, first clients, space.",
    cta: "Read the guide →",
  },
  {
    icon: CheckSquare,
    title: "ZZP setup checklist",
    href: "/en/for-trainers/zzp-personal-trainer-checklist",
    text:
      "10-step practical guide: KvK, VAT, insurance, banking, admin. Costs, timeline, first invoice.",
    cta: "See the checklist →",
  },
  {
    icon: MapPin,
    title: "Jordaan location analysis",
    href: "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
    text:
      "Why Jordaan works for PTs: client profile, average rates, competition, realistic earnings.",
    cta: "Read the analysis →",
  },
  {
    icon: Scale,
    title: "Studio vs home vs outdoor",
    href: "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
    text:
      "Comparison with real numbers: own studio lease, at client's home, outdoor, or hourly rental — when to choose what.",
    cta: "See comparison →",
  },
];

export default function ForTrainersHubEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="For personal trainers"
          title="Build your personal training practice in Amsterdam"
          description="SculptClub is built by and for freelance trainers. Private studio in Jordaan, zero commission on your clients, own profile on our site. Start by renting — or become a member and get clients through us."
          center={false}
        />
        <FadeIn className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/en/become-trainer" size="lg">
            Become a trainer member
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/studio-rental" variant="outline" size="lg">
            Just rent the space
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="Six paths"
          title="Which path fits you?"
          description="SculptClub works for different types of trainers. Pick where you are now — we help you grow from there."
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
              Not sure yet? Come visit for free first.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              60 minutes in the studio, get to know us, ask anything. No obligation. No pitch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={`https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to see the studio")}`}
                external
                size="lg"
              >
                WhatsApp us
              </ButtonLink>
              <ButtonLink href="/en/become-trainer" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Learn about membership
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

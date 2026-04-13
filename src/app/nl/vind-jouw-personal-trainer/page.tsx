import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { acuityLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";
import { Star, Users, Gift, Percent, Building2, CalendarClock } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd } from "@/components/seo/json-ld";
import { googleReviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Vind Jouw Personal Trainer — SculptClub Amsterdam Jordaan",
  description: `Personal trainers in Amsterdam Jordaan — gratis intake, tarieven vanaf €45/sessie. ${trainers.length} specialisten, 0% commissie. Vind jouw match bij SculptClub.`,
  alternates: {
    canonical: "/nl/vind-jouw-personal-trainer",
    languages: {
      nl: "/nl/vind-jouw-personal-trainer",
      en: "/en/find-personal-trainer",
    },
  },
};

const trustBadges = [
  { icon: Star, label: "5.0 op Google" },
  { icon: Users, label: `${trainers.length} trainers` },
  { icon: Gift, label: "Gratis intake" },
  { icon: Percent, label: "0% commissie" },
];

const trainerBenefits = [
  { icon: Percent, title: "0% commissie", description: "Houd 100% van je inkomsten. Wij rekenen geen commissie op jouw sessies." },
  { icon: Building2, title: "Premium studio", description: "Train je cli\u00ebnten in een volledig uitgeruste priv\u00e9 studio in de Jordaan." },
  { icon: CalendarClock, title: "Flexibel rooster", description: "Plan je sessies wanneer het jou uitkomt. Volledige vrijheid over je agenda." },
];

export default function TrainersPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Personal Trainers","url":"/nl/vind-jouw-personal-trainer"}]} />
      <ReviewsJsonLd reviews={googleReviews} />
      <ServiceJsonLd
        name="Personal Training"
        description="Privé personal training in een boutique studio in de Jordaan, Amsterdam. Kies je eigen trainer, eerste intake altijd gratis."
        url="/nl/vind-jouw-personal-trainer"
        priceRange="€45 - €120 per sessie"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: trainers.map((trainer, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: trainer.name,
                jobTitle: "Personal Trainer",
                description: trainer.bio.nl,
                image: `${siteConfig.url}${trainer.image}`,
                url: `${siteConfig.url}/nl/${trainer.slug.nl}`,
                worksFor: {
                  "@type": "LocalBusiness",
                  name: siteConfig.name,
                  url: siteConfig.url,
                },
                knowsLanguage: trainer.languages.map((l) =>
                  l === "NL" ? "Dutch" : l === "EN" ? "English" : l === "PT" ? "Portuguese" : l
                ),
                ...(trainer.rate ? { makesOffer: { "@type": "Offer", price: trainer.rate } } : {}),
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Trainers"
          title="Vind Jouw Personal Trainer"
          description="Gratis intake — trainers bepalen hun eigen tarieven. Kom langs, probeer een sessie, kijk of het klikt."
        />

        {/* Trust badges */}
        <FadeIn>
          <div className="mb-12 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="h-5 w-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trainer cards with filter */}
        <TrainerFilterGrid trainers={trainers} locale="nl" />
      </Section>

      {/* Trainer matching form */}
      <Section bg="muted">
        <SectionHeader
          overline="Hulp nodig?"
          title="Weet Je Niet Welke Trainer Bij Je Past?"
          description="Vul het formulier in en we helpen je de juiste trainer te vinden."
        />
        <FadeIn>
          <TrainerMatchForm locale="nl" />
        </FadeIn>
      </Section>

      {/* For trainers — recruitment */}
      <Section>
        <SectionHeader
          overline="Voor trainers"
          title="Groei Je Praktijk Zonder Vaste Lasten"
          description="Start of groei je praktijk in onze premium studio in de Jordaan."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {trainerBenefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 flex justify-center">
          <ButtonLink
            href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag meer weten over werken bij SculptClub")}`}
            size="lg"
          >
            Solliciteer via WhatsApp
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Plan Je Gratis Intake"
          description="Plan je gratis intake met een van onze trainers en ontdek welke aanpak het beste bij je past."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Boek Gratis Intake
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

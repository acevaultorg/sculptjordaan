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
  title: "Find Your Personal Trainer — SculptClub Amsterdam Jordaan",
  description: `Personal trainers in Amsterdam Jordaan — free intro, from €45/session. ${trainers.length} specialists, 0% commission. Find your match at SculptClub.`,
  alternates: {
    canonical: "/en/find-personal-trainer",
    languages: {
      nl: "/nl/vind-jouw-personal-trainer",
      en: "/en/find-personal-trainer",
    },
  },
};

const trustBadges = [
  { icon: Star, label: "5.0 on Google" },
  { icon: Users, label: `${trainers.length} trainers` },
  { icon: Gift, label: "Free intro" },
  { icon: Percent, label: "0% commission" },
];

const trainerBenefits = [
  { icon: Percent, title: "0% commission", description: "Keep 100% of your income. We charge no commission on your sessions." },
  { icon: Building2, title: "Premium studio", description: "Train your clients in a fully equipped private studio in the Jordaan." },
  { icon: CalendarClock, title: "Flexible schedule", description: "Plan your sessions whenever it suits you. Full freedom over your schedule." },
];

export default function TrainersPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Personal Trainers","url":"/en/find-personal-trainer"}]} />
      <ReviewsJsonLd reviews={googleReviews} />
      <ServiceJsonLd
        name="Personal Training"
        description="Private personal training in a boutique studio in the Jordaan, Amsterdam. Choose your own trainer, first intro always free."
        url="/en/find-personal-trainer"
        priceRange="€45 - €120 per session"
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
                description: trainer.bio.en,
                image: `${siteConfig.url}${trainer.image}`,
                url: `${siteConfig.url}/en/${trainer.slug.en}`,
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
          overline="Our Trainers"
          title="Find Your Personal Trainer"
          description="Free intro session — trainers set their own rates. Book a no-obligation introduction and find the perfect match."
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
        <TrainerFilterGrid trainers={trainers} locale="en" />
      </Section>

      {/* Trainer matching form */}
      <Section bg="muted">
        <SectionHeader
          overline="Need help?"
          title="Not Sure Which Trainer Is Right for You?"
          description="Fill in the form and we will help you find the right trainer."
        />
        <FadeIn>
          <TrainerMatchForm locale="en" />
        </FadeIn>
      </Section>

      {/* For trainers — recruitment */}
      <Section>
        <SectionHeader
          overline="For trainers"
          title="Become a Personal Trainer at SculptClub"
          description="Start or grow your practice in our premium studio in the Jordaan."
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
            href={`https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'm a personal trainer and I'd like to know more about working at SculptClub")}`}
            size="lg"
          >
            Apply via WhatsApp
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to start?"
          title="Book Your Free Intro"
          description="Book your free intro with one of our trainers and discover which approach suits you best."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Book Free Intro
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

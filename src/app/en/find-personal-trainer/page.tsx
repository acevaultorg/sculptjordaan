import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { trainers } from "@/config/trainers";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { Star, Users, Gift, Percent, Briefcase, Building2, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Find Your Personal Trainer — SculptClub Amsterdam Jordaan",
  description:
    "Discover our personal trainers in the Jordaan. Free intro session, trainers set their own rates. Find the perfect match for your goals.",
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
  { icon: Users, label: "5 trainers" },
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
      <ServiceJsonLd
        name="Personal Training"
        description="Private personal training in a boutique studio in the Jordaan, Amsterdam. Choose your own trainer, first intro always free."
        url="/en/find-personal-trainer"
        priceRange="€60 - €120 per session"
      />
      {/* Hero */}
      <Section>
        <SectionHeader
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

        {/* Trainer cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <FadeIn key={trainer.id} delay={i * 0.1}>
              <Link href={`/en/${trainer.slug.en}`} className="block h-full">
                <Card className="h-full flex flex-col overflow-hidden cursor-pointer hover:shadow-brand-lg transition-shadow duration-300 !pt-0 !gap-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    {trainer.credentials && (
                      <CardDescription>{trainer.credentials}</CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialization.en.map((spec) => (
                        <Badge key={spec} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {trainer.bio.en}
                    </p>

                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-muted-foreground">Languages:</span>{" "}
                        {trainer.languages.join(", ")}
                      </p>
                      {trainer.rate && (
                        <p>
                          <span className="text-muted-foreground">Rate:</span>{" "}
                          {trainer.rate}
                        </p>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <span className="inline-flex items-center justify-center w-full rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground">
                      Book free intro
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
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

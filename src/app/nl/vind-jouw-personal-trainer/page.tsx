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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vind Jouw Personal Trainer — SculptClub Amsterdam Jordaan",
  description:
    "Ontdek onze personal trainers in de Jordaan. Gratis intake, trainers bepalen hun eigen tarieven. Vind de perfecte match voor jouw doelen.",
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
  { icon: Users, label: "5 trainers" },
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
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Onze Trainers"
          title="Vind Jouw Personal Trainer"
          description="Gratis intake — trainers bepalen hun eigen tarieven. Boek een vrijblijvend kennismakingsgesprek en vind de perfecte match."
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
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
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
                    {trainer.specialization.nl.map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {trainer.bio.nl}
                  </p>

                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-muted-foreground">Talen:</span>{" "}
                      {trainer.languages.join(", ")}
                    </p>
                    {trainer.rate && (
                      <p>
                        <span className="text-muted-foreground">Tarief:</span>{" "}
                        {trainer.rate}
                      </p>
                    )}
                  </div>
                </CardContent>

                <CardFooter>
                  <ButtonLink
                    href={`/nl/${trainer.slug.nl}`}
                    size="lg"
                    className="w-full"
                  >
                    Plan gratis intake
                  </ButtonLink>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
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
          title="Word Personal Trainer bij SculptClub"
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

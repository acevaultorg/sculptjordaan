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

export default function TrainersPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Onze Trainers"
          title="Vind Jouw Personal Trainer"
          description="Gratis intake — trainers bepalen hun eigen tarieven. Boek een vrijblijvend kennismakingsgesprek en vind de perfecte match."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <FadeIn key={trainer.id} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
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
    </PageLayout>
  );
}

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

export default function TrainersPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Our Trainers"
          title="Find Your Personal Trainer"
          description="Free intro session — trainers set their own rates. Book a no-obligation introduction and find the perfect match."
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
                  <ButtonLink
                    href={`/en/${trainer.slug.en}`}
                    size="lg"
                    className="w-full"
                  >
                    Book free intro
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

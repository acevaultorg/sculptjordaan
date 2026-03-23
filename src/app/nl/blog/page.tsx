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
} from "@/components/ui/card";
import { acuityLinks } from "@/config/acuity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tips, Inzichten & Verhalen | SculptClub Amsterdam Jordaan",
  description:
    "Lees onze blog over personal training, open gym, fitness tips en meer vanuit onze studio in de Jordaan, Amsterdam.",
  alternates: {
    canonical: "/nl/blog",
    languages: {
      nl: "/nl/blog",
      en: "/en/blog",
    },
  },
};

const posts = [
  {
    title: "Personal training studio in de Jordaan: waarom kiezen voor priv\u00e9?",
    excerpt:
      "Ontdek waarom steeds meer Amsterdammers kiezen voor een priv\u00e9 personal training studio in plaats van een grote sportschool.",
    category: "Personal Training",
  },
  {
    title: "Open Gym Amsterdam: zelfstandig trainen zonder abonnement",
    excerpt:
      "Hoe werkt Open Gym bij SculptClub? Boek een sessie van 60 minuten en train op jouw tempo in een rustige studio.",
    category: "Open Gym",
  },
  {
    title: "Kosten personal training studio huren in Amsterdam",
    excerpt:
      "Een overzicht van de kosten voor het huren van een personal training studio in Amsterdam. Wat kun je verwachten?",
    category: "Studio",
  },
  {
    title: "ZZP personal trainer beginnen in Amsterdam",
    excerpt:
      "Tips en advies voor zelfstandig personal trainers die willen starten in Amsterdam. Van locatie tot klantopbouw.",
    category: "Voor Trainers",
  },
  {
    title: "Wat te verwachten bij je eerste sessie",
    excerpt:
      "Nieuw bij SculptClub? Dit kun je verwachten bij je eerste personal training sessie of Open Gym bezoek.",
    category: "Tips",
  },
  {
    title: "De beste warm-up routine voor krachttraining",
    excerpt:
      "Een effectieve warm-up maakt het verschil. Ontdek onze favoriete warming-up routine voor krachttraining.",
    category: "Training",
  },
];

export default function BlogPageNL() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Blog"
          title="Tips, Inzichten & Verhalen"
          description="Artikelen over personal training, fitness, voeding en alles rondom onze studio in de Jordaan."
        />
      </Section>

      {/* Posts grid */}
      <Section bg="muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                  <p className="mt-4 text-sm font-medium text-primary">
                    Binnenkort beschikbaar
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Boek een Gratis Proefles"
          description="Ervaar zelf hoe het is om te trainen in onze priv\u00e9 studio in de Jordaan."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Boek Gratis Proefles
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

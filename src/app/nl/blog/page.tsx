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
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityLinks } from "@/config/acuity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
    title: "Personal Training in Amsterdam Jordaan: Wat je moet weten",
    excerpt:
      "Alles over personal training in de Jordaan. Ontdek wat een privé studio biedt, wat je kunt verwachten en waarom de Jordaan de perfecte locatie is.",
    category: "Personal Training",
    href: "/nl/blog/personal-training-amsterdam-jordaan",
    date: "24 maart 2026",
  },
  {
    title: "Krachttraining voor Beginners: Complete Gids",
    excerpt:
      "Begin met krachttraining: leer de basisoefeningen, hoe vaak je moet trainen en hoe je blessures voorkomt.",
    category: "Training",
    href: "/nl/blog/krachttraining-voor-beginners",
    date: "24 maart 2026",
  },
  {
    title: "Open Gym vs Sportschool: Wat past bij jou?",
    excerpt:
      "Vergelijk Open Gym met een reguliere sportschool op prijs, privacy, apparatuur en sfeer.",
    category: "Open Gym",
    href: "/nl/blog/open-gym-vs-sportschool",
    date: "24 maart 2026",
  },
];

export default function BlogPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
        ]}
      />

      {/* Hero + Posts grid */}
      <Section bg="muted">
        <SectionHeader
          overline="Blog"
          title="Tips, Inzichten & Verhalen"
          description="Artikelen over personal training, fitness, voeding en alles rondom onze studio in de Jordaan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Link href={post.href} className="block h-full">
                <Card className="h-full flex flex-col cursor-pointer hover:shadow-brand-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                      Lees meer
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Boek een Gratis Proefles"
          description="Ervaar zelf hoe het is om te trainen in onze privé studio in de Jordaan."
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

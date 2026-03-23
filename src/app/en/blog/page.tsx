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
  title: "Blog — Tips, Insights & Stories | SculptClub Amsterdam Jordaan",
  description:
    "Read our blog about personal training, open gym, fitness tips and more from our studio in the Jordaan, Amsterdam.",
  alternates: {
    canonical: "/en/blog",
    languages: {
      nl: "/nl/blog",
      en: "/en/blog",
    },
  },
};

const posts = [
  {
    title: "Personal training studio in the Jordaan: why choose private?",
    excerpt:
      "Discover why more and more Amsterdammers are choosing a private personal training studio over a big gym.",
    category: "Personal Training",
  },
  {
    title: "Open Gym Amsterdam: train independently without a contract",
    excerpt:
      "How does Open Gym at SculptClub work? Book a 60-minute session and train at your own pace in a quiet studio.",
    category: "Open Gym",
  },
  {
    title: "Cost of renting a personal training studio in Amsterdam",
    excerpt:
      "An overview of the costs of renting a personal training studio in Amsterdam. What can you expect?",
    category: "Studio",
  },
  {
    title: "Starting as a freelance personal trainer in Amsterdam",
    excerpt:
      "Tips and advice for freelance personal trainers looking to start in Amsterdam. From location to building clients.",
    category: "For Trainers",
  },
  {
    title: "What to expect at your first session",
    excerpt:
      "New to SculptClub? Here is what you can expect at your first personal training session or Open Gym visit.",
    category: "Tips",
  },
  {
    title: "The best warm-up routine for strength training",
    excerpt:
      "An effective warm-up makes all the difference. Discover our favourite warm-up routine for strength training.",
    category: "Training",
  },
];

export default function BlogPageEN() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Blog"
          title="Tips, Insights & Stories"
          description="Articles about personal training, fitness, nutrition and everything around our studio in the Jordaan."
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
                    Coming soon
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
          overline="Ready to start?"
          title="Book a Free Trial"
          description="Experience for yourself what it is like to train in our private studio in the Jordaan."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Book Free Trial
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

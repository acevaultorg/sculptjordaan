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
    title: "Personal Training in Amsterdam Jordaan: What to Know",
    excerpt:
      "Everything about personal training in the Jordaan. Discover what a private studio offers, what to expect, and why the Jordaan is the perfect location.",
    category: "Personal Training",
    href: "/en/blog/personal-training-amsterdam-jordaan",
    date: "March 24, 2026",
  },
  {
    title: "Strength Training for Beginners: Complete Guide",
    excerpt:
      "Start strength training the right way. Learn the fundamental exercises, how often to train, and how to avoid injuries.",
    category: "Training",
    href: "/en/blog/strength-training-beginners-guide",
    date: "March 24, 2026",
  },
  {
    title: "Open Gym vs Regular Gym: Which is Right for You?",
    excerpt:
      "Compare Open Gym with a regular gym on price, privacy, equipment, and atmosphere to make the best choice.",
    category: "Open Gym",
    href: "/en/blog/open-gym-vs-regular-gym",
    date: "March 24, 2026",
  },
];

export default function BlogPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
        ]}
      />

      {/* Hero + Posts grid */}
      <Section bg="muted">
        <SectionHeader
          overline="Blog"
          title="Tips, Insights & Stories"
          description="Articles about personal training, fitness, nutrition and everything around our studio in the Jordaan."
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
                      Read more
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

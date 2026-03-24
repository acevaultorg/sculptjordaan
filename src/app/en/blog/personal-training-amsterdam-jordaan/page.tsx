import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training in Amsterdam Jordaan: What to Know — SculptClub",
  description:
    "Everything about personal training in the Jordaan, Amsterdam. Discover what a private studio offers, what to expect from a trainer, and why the Jordaan is the perfect location.",
  keywords: [
    "personal training amsterdam jordaan",
    "personal trainer jordaan",
    "private personal training amsterdam",
    "personal training studio amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/personal-training-amsterdam-jordaan",
    languages: {
      nl: "/nl/blog/personal-training-amsterdam-jordaan",
      en: "/en/blog/personal-training-amsterdam-jordaan",
    },
  },
};

export default function BlogPostEN1() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal Training in Amsterdam Jordaan", url: "/en/blog/personal-training-amsterdam-jordaan" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Training in Amsterdam Jordaan: What to Know"
        description="Everything about personal training in the Jordaan, Amsterdam. Discover what a private studio offers and why the Jordaan is the perfect location."
        url="/en/blog/personal-training-amsterdam-jordaan"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Training in Amsterdam Jordaan: What to Know
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  March 24, 2026
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                The Jordaan is one of Amsterdam&apos;s most sought-after neighborhoods. Picturesque canals, cozy cafes, and a
                relaxed atmosphere make it an ideal place to live and work. But did you know the Jordaan is also becoming a
                hotspot for personal training? In this article, we cover everything you need to know about personal training
                in Amsterdam Jordaan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why personal training in the Jordaan?</h2>
              <p>
                The Jordaan offers something most large gyms in Amsterdam cannot: peace and privacy. Instead of crowded
                fitness floors with queues at every machine, you will find boutique studios where you can train in complete
                tranquility. This makes an enormous difference to your motivation and results.
              </p>
              <p>
                The Jordaan is also incredibly accessible. Whether you cycle from the Haarlemmerbuurt, walk from the city
                center, or take tram 13 or 17 — you will be there in minutes. Many residents choose a personal trainer
                nearby so they do not lose travel time and can train more consistently.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a private personal training studio offer?</h2>
              <p>
                A private studio is fundamentally different from a large gym. At a boutique studio like SculptClub in the
                Jordaan, you train in a closed space with professional equipment, without anyone else disturbing your session.
                This provides several key advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Complete privacy</strong> — no onlookers, no wait times, no distractions.</li>
                <li><strong>Personal attention</strong> — your trainer focuses 100% on you.</li>
                <li><strong>Flexible scheduling</strong> — book sessions when it suits you, often early mornings or late evenings too.</li>
                <li><strong>Professional equipment</strong> — everything you need for a complete workout, from power racks to cable machines.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">How much does personal training in the Jordaan cost?</h2>
              <p>
                Prices for personal training in Amsterdam Jordaan vary by trainer. Generally, you can expect rates between
                49 and 120 euros per session, depending on the trainer&apos;s experience, session duration, and any packages.
                At SculptClub, trainers set their own rates, and the first intro session is always free. This lets you get
                to know a trainer before committing.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to choose the right personal trainer</h2>
              <p>
                Choosing a personal trainer is a personal decision. Here are some tips to find the right match:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Specialization</strong> — Want to lose weight, get stronger, or recover from an injury? Choose a trainer with the right background.</li>
                <li><strong>Chemistry</strong> — A good connection is essential. Always schedule a free intro first.</li>
                <li><strong>Language</strong> — The Jordaan has many expats. Check if the trainer speaks your language.</li>
                <li><strong>Availability</strong> — Find a trainer whose schedule matches yours.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training without a membership</h2>
              <p>
                A major advantage of personal training in a boutique studio is flexibility. At SculptClub, you do not need
                to commit to a long-term membership. You book per session or per package, and you can stop at any time.
                This makes it easy to get started and gives you full control over your budget.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Ready to get started?</h2>
              <p>
                Whether you are a complete beginner or have been training for years — personal training in the Jordaan
                offers a unique experience. The combination of a beautiful location, private studio, and professional
                guidance ensures you get the most out of every session. Schedule your free intro and see for yourself.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Schedule your free intro</h3>
              <p className="text-muted-foreground mb-6">
                Discover which trainer is right for you. The first introduction is always free.
              </p>
              <ButtonLink href="/en/book" size="lg">
                Book now
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

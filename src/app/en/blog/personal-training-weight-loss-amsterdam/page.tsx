import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training for Weight Loss in Amsterdam — SculptClub",
  description:
    "Want to lose weight with a personal trainer in Amsterdam? Discover why strength training beats cardio and how to get started with a free intro.",
  keywords: [
    "personal training weight loss amsterdam",
    "lose weight personal trainer amsterdam",
    "weight loss trainer amsterdam",
    "strength training weight loss",
    "personal trainer for weight loss",
  ],
  alternates: {
    canonical: "/en/blog/personal-training-weight-loss-amsterdam",
    languages: {
      nl: "/nl/blog/personal-training-afvallen-amsterdam",
      en: "/en/blog/personal-training-weight-loss-amsterdam",
    },
  },
};

export default function PersonalTrainingWeightLossEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal training weight loss", url: "/en/blog/personal-training-weight-loss-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Training for Weight Loss in Amsterdam"
        description="Why strength training with a personal trainer is the most effective way to lose weight."
        url="/en/blog/personal-training-weight-loss-amsterdam"
        datePublished="2026-04-02"
      />
      <FaqJsonLd faqs={[
        { question: "What does a personal trainer do for you?", answer: "A personal trainer makes the difference in three areas:" },
        { question: "What does personal training for weight loss cost?", answer: "Personal training at SculptClub starts from €45 per session. Each trainer sets their own rate — we charge 0% commission. The first introduction is always free. During that intro you discuss your goals, your trainer assesses your current level and together you decide on a plan. No obligations upfront." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Training for Weight Loss in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  April 2, 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbells-floor.jpeg"
                alt="Dumbbells on the floor at SculptClub studio"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You want to lose weight. You&apos;ve tried diets, running, counting calories — but the
                results don&apos;t stick. You&apos;re not alone. Many people in Amsterdam are looking for
                a more effective approach. More and more are choosing personal training focused on weight
                loss. Not because it&apos;s easier, but because it works.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why strength training beats cardio for weight loss</h2>
              <p>
                Most people think of running or cycling when they want to lose weight. Cardio burns
                calories, but when you stop, so does the burn. Strength training works differently. By
                building muscle mass you increase your basal metabolic rate — your body burns more
                calories at rest. Research shows that combining strength training with a healthy diet
                is the most effective strategy for sustainable weight loss.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a personal trainer do for you?</h2>
              <p>
                A personal trainer makes the difference in three areas:
              </p>
              <ul>
                <li><strong>Technique:</strong> You learn to perform exercises correctly. No injuries, maximum results.</li>
                <li><strong>Programming:</strong> You get a plan that fits your level, goals and available time.</li>
                <li><strong>Accountability:</strong> Someone who expects you. That alone makes the difference between going or not.</li>
              </ul>
              <p>
                A good trainer adjusts your programme every few weeks based on your progress. That
                prevents plateaus and keeps you motivated.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Nutrition and training: the combination</h2>
              <p>
                Weight loss happens in the kitchen, muscles are built in the gym — it&apos;s a cliche,
                but it&apos;s true. A trainer can guide you, but if your nutrition isn&apos;t in order,
                results will lag. At SculptClub, Eva is a certified dietitian and personal trainer. She
                combines strength training with personal nutritional guidance. That&apos;s unique in
                Amsterdam.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does personal training for weight loss cost?</h2>
              <p>
                Personal training at SculptClub <Link href="/en/pricing" className="text-brand underline-offset-2 hover:underline">starts from €45 per session</Link>. Each trainer sets their own
                rate — we charge 0% commission. The first introduction is always free. During that intro
                you discuss your goals, your trainer assesses your current level and together you decide
                on a plan. No obligations upfront.
              </p>
              <p>
                Expect 2 to 3 sessions per week for optimal results. After 8 to 12 weeks, most people
                see measurable differences in body composition — less fat, more muscle mass, more energy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private studio: no crowded gym</h2>
              <p>
                Many people who want to lose weight feel uncomfortable in a big gym. The stares, the
                crowds, waiting for equipment. At SculptClub you train in a private canal-side studio in
                the Jordaan. Just you and your trainer. No audience, no distractions. For many clients
                that makes all the difference — they dare to work harder and feel safe to start.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Start today</h2>
              <p>
                You don&apos;t have to wait until Monday, until January or until you&apos;re
                &quot;ready.&quot; Book a <Link href="/en/free-intro" className="text-brand underline-offset-2 hover:underline">free intro</Link> with one of our trainers. Discuss your goal, your
                trainer makes a plan and you begin. No threshold, no membership, no excuses.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training Amsterdam Jordaan</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free intro with a trainer specialising in weight loss.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/find-personal-trainer" size="lg">
                  Meet our trainers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hi%2C%20I%20want%20to%20lose%20weight%20with%20personal%20training.%20Can%20you%20help%3F"
                  size="lg"
                  variant="outline"
                  external
                >
                  WhatsApp us
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

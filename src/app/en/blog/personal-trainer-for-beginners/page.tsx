import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer for Beginners in Amsterdam — SculptClub" },
  description:
    "Never trained before or it's been years? A personal trainer helps beginners start safely. Free intro at SculptClub, no experience needed.",
  keywords: [
    "personal trainer for beginners",
    "personal trainer beginners amsterdam",
    "start personal training",
    "personal trainer no experience",
    "fitness beginners amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-for-beginners",
    languages: {
      nl: "/nl/blog/personal-trainer-voor-beginners",
      en: "/en/blog/personal-trainer-for-beginners",
    },
  },
};

export default function PTForBeginnersEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer for beginners", url: "/en/blog/personal-trainer-for-beginners" }]} />
      <BlogPostingJsonLd title="Personal Trainer for Beginners in Amsterdam" description="Why a personal trainer is the best investment when you're just starting out." url="/en/blog/personal-trainer-for-beginners" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer for Beginners in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/assault-bike.jpeg" alt="Training equipment at SculptClub" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You want to start exercising, but you don&apos;t know where to begin. Maybe you&apos;ve
                never set foot in a gym. Or it&apos;s been years and you feel insecure. That&apos;s
                exactly when a personal trainer makes the biggest difference — not when you&apos;re
                advanced, but when you&apos;re starting.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why beginners benefit most from a trainer</h2>
              <p>
                As a beginner you make the most gains in the first months. Your body responds strongly
                to new stimuli. But you also make the most mistakes. Wrong technique leads to injuries.
                Doing too much leads to overtraining. And without a plan you train the wrong things. A
                trainer prevents all of that and makes every session count.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a trainer do with beginners?</h2>
              <ul>
                <li><strong>Teach technique:</strong> Squats, deadlifts, presses — learn them correctly from day 1</li>
                <li><strong>Create a programme:</strong> A plan tailored to your level, pace and available time</li>
                <li><strong>Monitor progress:</strong> Your trainer adjusts the load every few weeks</li>
                <li><strong>Build confidence:</strong> In a private studio you feel safe to learn</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">You don&apos;t need to be fit to start</h2>
              <p>
                The biggest misconception: &quot;I need to get fitter before I go to a trainer.&quot;
                That&apos;s like saying &quot;I need to get healthy before I see a doctor.&quot; A
                trainer exists to take you from zero to your first result. At SculptClub, all five
                trainers work with beginners. No judgement, no pressure — just start.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private studio vs big gym</h2>
              <p>
                Many beginners feel uncomfortable in a big gym. The crowds, the stares, the feeling
                that everyone knows what they&apos;re doing except you. At SculptClub you train in a
                private studio — just you and your trainer. No audience, no pressure. Door code via
                WhatsApp the evening before.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Cost and how to start</h2>
              <p>
                Personal training at SculptClub <Link href="/en/pricing" className="text-brand underline-offset-2 hover:underline">starts from €45 per session</Link>. The <Link href="/en/free-intro" className="text-brand underline-offset-2 hover:underline">first introduction
                is always free</Link> — discuss your goals, your trainer assesses your level and you make
                a plan together. No membership, no contract. Book per session, always cancel for free.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/first-time-gym-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First time gym tips</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training beginners guide</p></a>
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
              <p className="text-muted-foreground mb-6">Book a free intro — no experience needed.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">Meet our trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

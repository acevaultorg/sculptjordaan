import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "How Much Does Personal Training Cost in Amsterdam? — SculptClub" },
  description:
    "How much does personal training cost in Amsterdam? Discover average prices, what affects the cost, and why a boutique studio like SculptClub offers great value from €45/session.",
  keywords: [
    "personal training cost amsterdam",
    "personal trainer price amsterdam",
    "how much personal training amsterdam",
    "personal training rates amsterdam",
    "personal training amsterdam price",
  ],
  alternates: {
    canonical: "/en/blog/personal-training-cost-amsterdam",
    languages: {
      nl: "/nl/blog/wat-kost-personal-training-amsterdam",
      en: "/en/blog/personal-training-cost-amsterdam",
    },
  },
};

export default function PersonalTrainingCostAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal Training Cost in Amsterdam", url: "/en/blog/personal-training-cost-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="How Much Does Personal Training Cost in Amsterdam?"
        description="Discover average prices for personal training in Amsterdam, what affects the cost, and why SculptClub offers great value."
        url="/en/blog/personal-training-cost-amsterdam"
        datePublished="2026-03-24"
      />
      <FaqJsonLd faqs={[
        { question: "What Affects the Cost of Personal Training?", answer: "Several factors determine what you will pay for personal training. Understanding these helps you make an informed decision." },
        { question: "Why Do Boutique Studios Charge More?", answer: "A boutique studio offers something a large gym simply cannot: complete privacy, personal attention, and a premium experience. You do not share the space with dozens of other gym-goers. The equipment is high-quality and used exclusively during your session. The atmosphere is calm and focused." },
        { question: "Is Personal Training Worth the Investment?", answer: "Personal training is an investment in yourself. Research consistently shows that people who train with a personal trainer achieve results faster, sustain fewer injuries, and stay motivated longer. Compare it to learning a language on your own versus hiring a private tutor — both can work, but guided instruction gets you there faster and more effectively." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                How Much Does Personal Training Cost in Amsterdam?
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

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/trainers/eva.jpg"
                alt="Personal training session at SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Thinking about personal training in Amsterdam but wondering what it costs? You are not alone. Prices
                vary widely across the city, and it can be hard to know what you are actually paying for. In this guide,
                we break down the average rates, explain what drives the cost, and show you why a boutique studio like
                SculptClub in the Jordaan delivers excellent value starting from just 45 euros per session.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Average Personal Training Prices in Amsterdam</h2>
              <p>
                Personal training prices in Amsterdam depend on the trainer, location, and type of facility. Here is a
                general overview of what you can expect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Budget trainers (freelance, outdoor or at your home):</strong> 30 &ndash; 50 euros per session</li>
                <li><strong>Mid-range (large gym or shared studio):</strong> 50 &ndash; 80 euros per session</li>
                <li><strong>Premium (private boutique studio):</strong> 70 &ndash; 120 euros per session</li>
                <li><strong>Top-tier (high-profile trainers):</strong> 120 &ndash; 200+ euros per session</li>
              </ul>
              <p>
                At SculptClub, <Link href="/en/pricing" className="text-brand underline-offset-2 hover:underline">rates start from 45 euros per session</Link> depending on which trainer you choose. Each
                trainer sets their own rate, so you can always find the best match for your budget and goals.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What Affects the Cost of Personal Training?</h2>
              <p>
                Several factors determine what you will pay for personal training. Understanding these helps you
                make an informed decision.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">1. Trainer experience and specialization</h3>
              <p>
                A trainer with years of experience, multiple certifications, or a specialization in rehabilitation
                or athletic performance will typically charge more than a recently certified trainer. Think of it
                like any profession: expertise comes at a premium, but it also delivers faster and better results.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">2. Location and studio type</h3>
              <p>
                Training in a private boutique studio costs more than a session in a crowded fitness center. At a
                private studio like SculptClub, you train without distractions, with professional equipment
                exclusively available to you. No queues, no onlookers — just you and your trainer.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">3. Session duration</h3>
              <p>
                Most personal training sessions last 60 minutes, but some trainers offer 45- or 90-minute options.
                Longer sessions tend to be more cost-effective per minute but obviously cost more per appointment.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">4. Packages and commitments</h3>
              <p>
                Nearly all trainers offer discounts when you book multiple sessions at once. A 10-session package
                is typically 10 to 20 percent cheaper than individual sessions. At SculptClub, you can book per
                session or choose a package — with no long-term commitments required.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why Do Boutique Studios Charge More?</h2>
              <p>
                A boutique studio offers something a large gym simply cannot: complete privacy, personal attention,
                and a premium experience. You do not share the space with dozens of other gym-goers. The equipment
                is high-quality and used exclusively during your session. The atmosphere is calm and focused.
              </p>
              <p>
                The difference is immediately noticeable. Without distractions, you can fully concentrate on your
                training. Your trainer does not have to work around other clients in the room. The result: better
                coaching, faster progress, and a far more enjoyable training experience.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Is Personal Training Worth the Investment?</h2>
              <p>
                Personal training is an investment in yourself. Research consistently shows that people who train with
                a personal trainer achieve results faster, sustain fewer injuries, and stay motivated longer. Compare
                it to learning a language on your own versus hiring a private tutor — both can work, but guided
                instruction gets you there faster and more effectively.
              </p>
              <p>
                Consider this: a gym membership at 50 euros per month sounds affordable, but if you quit after three
                months because you are not seeing results, you have spent 150 euros with nothing to show for it. Two
                months of personal training costs more upfront, but delivers concrete results, knowledge, and habits
                you carry with you for life.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal Training at SculptClub</h2>
              <p>
                At SculptClub in the Jordaan, you pay from 45 euros per session for training in a private studio with
                professional equipment. Our trainers each have their own specialization — from strength training and
                weight loss to rehabilitation and athletic performance. Your <Link href="/en/free-intro" className="text-brand underline-offset-2 hover:underline">first introduction is always free</Link>, so you
                can explore which trainer suits you best with no obligation.
              </p>
              <p>
                No subscription, no sign-up fees, no fine print. You book per session or per package and have full
                control over your budget. That is what we believe in: fitness on your terms.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam: find the best match</p></a>
                <a href="/en/blog/personal-training-weight-loss-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training for weight loss</p></a>
                <a href="/en/blog/free-intro-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Free intro personal trainer</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training Amsterdam Jordaan</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Curious about our rates?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free introduction and discover which trainer is the right fit. No commitment, no pressure.
              </p>
              <ButtonLink href="/en/book" size="lg">
                Book free intro
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

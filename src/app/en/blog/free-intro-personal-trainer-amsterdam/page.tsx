import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Intro Personal Trainer Amsterdam: What to Expect — SculptClub",
  description:
    "What happens during a free intro with a personal trainer in Amsterdam? Find out what to expect, how to prepare, and what questions to ask to find the right trainer for you.",
  keywords: [
    "free intro personal trainer amsterdam",
    "free personal trainer consultation amsterdam",
    "free trial personal training amsterdam",
    "personal trainer free session amsterdam",
    "free intro personal training",
    "personal trainer free consultation",
  ],
  alternates: {
    canonical: "/en/blog/free-intro-personal-trainer-amsterdam",
    languages: {
      en: "/en/blog/free-intro-personal-trainer-amsterdam",
      nl: "/nl/blog/gratis-intake-personal-trainer-amsterdam",
    },
  },
};

export default function FreeIntroBlogEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Free Intro Personal Trainer Amsterdam", url: "/en/blog/free-intro-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Free Intro Personal Trainer Amsterdam: What to Expect"
        description="What happens during a free intro with a personal trainer in Amsterdam? Everything about the session, how to prepare, and choosing the right trainer."
        url="/en/blog/free-intro-personal-trainer-amsterdam"
        datePublished="2026-04-01"
      />
      <FaqJsonLd faqs={[
        { question: "What is a free intro with a personal trainer?", answer: "A free intro is a first meeting between you and a personal trainer. In 30 to 45 minutes, you discuss your goals, your current fitness level, and what you expect from working together. The trainer explains how they work and whether their approach is a good fit." },
        { question: "Why do personal trainers offer a free intro?", answer: "Good trainers know that a successful working relationship starts with the right fit. The intro is as much for you as it is for the trainer — they also want to know if you're a good match. A free session removes the barrier to taking that first step, without locking you into anything." },
        { question: "What happens during the intro?", answer: "Every trainer has their own style, but a free intro at SculptClub typically looks like this:" },
        { question: "How do you prepare for a free intro?", answer: "No extensive preparation needed. But a few things help you get more out of it:" },
        { question: "What questions should you ask?", answer: "A few questions worth bringing to your free intro:" },
        { question: "After the intro: how do you decide?", answer: "You don't need to decide on the spot. Take time to think it over. A few questions that help:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Free intro personal trainer Amsterdam: what to expect
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  April 1, 2026
                </span>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                You want to try personal training but you&apos;re not sure if it&apos;s right for you.
                A free intro is the perfect way to find out — no commitment, no cost. But what
                actually happens during one of these sessions?
              </p>

              <h2>What is a free intro with a personal trainer?</h2>
              <p>
                A free intro is a first meeting between you and a personal trainer. In 30 to 45 minutes,
                you discuss your goals, your current fitness level, and what you expect from working
                together. The trainer explains how they work and whether their approach is a good fit.
              </p>
              <p>
                At SculptClub, the <Link href="/en/free-intro" className="text-brand underline-offset-2 hover:underline">free intro</Link> lasts 45 minutes. No preparation needed — just show up
                in your workout clothes. There&apos;s no reception desk and no waiting: you receive a
                personal door code via WhatsApp the evening before.
              </p>

              <h2>Why do personal trainers offer a free intro?</h2>
              <p>
                Good trainers know that a successful working relationship starts with the right fit.
                The intro is as much for you as it is for the trainer — they also want to know if
                you&apos;re a good match. A free session removes the barrier to taking that first step,
                without locking you into anything.
              </p>
              <p>
                At SculptClub, all trainers work independently. They set their own rates and working
                style. The intro is always 100% free — no credit card required, no contract, no
                hidden strings.
              </p>

              <h2>What happens during the intro?</h2>
              <p>
                Every trainer has their own style, but a free intro at SculptClub typically looks
                like this:
              </p>
              <ul>
                <li>
                  <strong>Getting to know each other:</strong> You meet the trainer and share a bit
                  about yourself. What&apos;s your fitness background? What have you tried before?
                </li>
                <li>
                  <strong>Discussing your goals:</strong> Do you want to lose weight, build muscle,
                  recover from an injury, or just get fitter? The trainer asks questions to get a
                  clear picture.
                </li>
                <li>
                  <strong>Approach and method:</strong> The trainer explains how they work, which
                  methods they use, and what you can expect from the sessions.
                </li>
                <li>
                  <strong>Studio tour:</strong> You see the space. At SculptClub, that&apos;s a private
                  studio on the Egelantiersgracht in the Jordaan — no crowds, no queues.
                </li>
                <li>
                  <strong>Rates and scheduling:</strong> If there&apos;s a good fit, you discuss the
                  practical side: how often, when, and what it costs. No pressure to decide right away.
                </li>
              </ul>

              <h2>How do you prepare for a free intro?</h2>
              <p>
                No extensive preparation needed. But a few things help you get more out of it:
              </p>
              <ul>
                <li>
                  <strong>Know what you want to achieve.</strong> Think about your goals beforehand.
                  &ldquo;Getting fitter&rdquo; is a start, but &ldquo;I want to lose 10 kg in 3 months
                  and have less back pain&rdquo; gives the trainer much more to work with.
                </li>
                <li>
                  <strong>Be honest about your level.</strong> Have you trained before? Do you have
                  any injuries or conditions? The more the trainer knows, the better the advice.
                </li>
                <li>
                  <strong>Ask questions.</strong> It&apos;s a two-way conversation. Ask how the trainer
                  handles progress tracking, what happens if you want to skip a session, or what their
                  speciality is.
                </li>
                <li>
                  <strong>Arrive on time.</strong> You&apos;ll receive the door code in advance via
                  WhatsApp. Allow 5 extra minutes to find the studio and get changed.
                </li>
              </ul>

              <h2>What questions should you ask?</h2>
              <p>A few questions worth bringing to your free intro:</p>
              <ul>
                <li>What is your speciality and how does it align with my goals?</li>
                <li>What does a typical session look like?</li>
                <li>How do you track progress?</li>
                <li>What happens if I need to cancel or reschedule?</li>
                <li>How long before I start seeing results?</li>
              </ul>
              <p>
                At SculptClub, you can cancel or reschedule at any time — always free, no exceptions.
              </p>

              <h2>After the intro: how do you decide?</h2>
              <p>
                You don&apos;t need to decide on the spot. Take time to think it over. A few questions
                that help:
              </p>
              <ul>
                <li>Did the conversation feel natural?</li>
                <li>Did the trainer understand what you want to achieve?</li>
                <li>Does their approach suit you?</li>
                <li>Are you comfortable with the rate?</li>
              </ul>
              <p>
                If the answers are yes, you&apos;re probably in the right place. If you&apos;re unsure,
                book a free intro with another trainer. You can do that too — SculptClub has <Link href="/en/find-personal-trainer" className="text-brand underline-offset-2 hover:underline">five
                trainers, each with their own speciality</Link>.
              </p>

              <h2>Free intro at SculptClub in Amsterdam Jordaan</h2>
              <p>
                SculptClub is a boutique personal training studio at Egelantiersgracht 424 in the
                Jordaan. We work with five trainers — each with their own speciality, approach, and
                rate. The first intro is always free, even if you later decide to work with a different
                trainer.
              </p>
              <div className="not-prose my-8 rounded-xl border border-border/50 bg-secondary p-6">
                <ul className="space-y-3">
                  {[
                    "45 minutes free — no time pressure on the intro",
                    "No contract, no membership, no obligation",
                    "Private studio — no crowds, no waiting",
                    "Trainers from €45/session, 0% commission",
                    "Open daily from 06:30 to 22:00",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in the Jordaan</p></a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-brand p-8 text-center text-white">
              <h2 className="mb-2 text-2xl font-bold">Book your free intro</h2>
              <p className="mb-6 text-white/80">
                Find a trainer that fits your goals and book directly online. Takes 2 minutes.
              </p>
              <ButtonLink
                href="/en/find-personal-trainer"
                variant="secondary"
                size="lg"
              >
                Meet our trainers
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

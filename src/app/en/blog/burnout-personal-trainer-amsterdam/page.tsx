import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, PersonJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Burnout & Stress Personal Trainer Amsterdam — SculptClub" },
  description:
    "High-end personal training for entrepreneurs and high performers experiencing stress and burnout.",
  keywords: [
    "burnout personal trainer amsterdam",
    "stress personal trainer amsterdam",
    "high-end personal training amsterdam",
    "breathwork personal training amsterdam",
    "nervous system regulation coach amsterdam",
    "personal trainer for entrepreneurs amsterdam",
    "the ascend method",
    "personal trainer jordaan stress",
  ],
  alternates: {
    canonical: "/en/blog/burnout-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-stress-burnout-amsterdam",
      en: "/en/blog/burnout-personal-trainer-amsterdam",
    },
  },
  openGraph: {
    title: { absolute: "Burnout & Stress Personal Trainer Amsterdam — The Ascend Method" },
    description:
      "For entrepreneurs and high performers: training that regulates your nervous system instead of further taxing it. Strength + breathwork + recovery in a private studio in the Jordaan.",
    url: "/en/blog/burnout-personal-trainer-amsterdam",
    type: "article",
  },
};

export default function BurnoutPersonalTrainerAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Burnout & stress personal trainer", url: "/en/blog/burnout-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Burnout & Stress Personal Trainer Amsterdam"
        description="High-end personal training for entrepreneurs and high performers experiencing stress and burnout. The Ascend Method: strength + breathwork + nervous system regulation."
        url="/en/blog/burnout-personal-trainer-amsterdam"
        datePublished="2026-05-12"
        dateModified="2026-05-12"
      />
      <PersonJsonLd
        name="Joey"
        description="Personal trainer and nervous-system coach in Amsterdam Jordaan. Works with high-performers experiencing stress and burnout through The Ascend Method: strength, breathwork and self-inquiry."
        image="/images/trainers/joey.jpg"
        url="/en/plan-free-intro-with-joey"
        jobTitle="Personal Trainer · The Ascend Method"
        languages={["NL", "EN"]}
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Burnout &amp; Stress Personal Trainer in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Joey · SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  May 12, 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="Calm private studio at SculptClub in the Jordaan — nervous system regulation without unnecessary stimuli"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {/* YMYL_LIGHT disclaimer per v19.45 google-policy-compliance */}
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Important: this is not a substitute for medical care.</strong>
                    <span className="text-muted-foreground">
                      If you’ve been clinically diagnosed with burnout, experience severe
                      exhaustion or depression, or are currently under the care of a GP,
                      occupational doctor, psychologist or psychiatrist, follow their advice
                      first. The Ascend Method is performance and nervous-system coaching for
                      people who are still functional but whose system is overloaded — a
                      complement to clinical care, not a replacement.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                You’re constantly “on.” Busy work, decisions, leading people,
                hitting deadlines. On paper everything runs, but you notice your energy is
                fading, your focus fragments, and in the evening you’re not really present
                anymore. A regular gym often makes this worse: push harder, more stimuli, a
                workout that feels like yet another appointment in an already overcrowded
                calendar.
              </p>
              <p>
                At SculptClub in the Jordaan, <strong>Joey</strong> works with a different
                approach: <em>The Ascend Method — Inner Alignment System</em>. For
                entrepreneurs and high performers who don’t just want to get stronger, but
                want to be back in control of their own system.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is this approach for?</h2>
              <p>
                Entrepreneurs, executives, creative professionals and other high
                performers — men and women — who carry significant responsibility
                and notice their body giving in before their calendar does. Recognise any of
                these signals?
              </p>
              <ul>
                <li>Your mind doesn’t switch off in the evening, sleep gets harder</li>
                <li>Workouts no longer give you the energy they used to — if anything, the opposite</li>
                <li>You train but lack focus, or push too hard and get injured</li>
                <li>You feel “wired but tired” — tense and exhausted at the same time</li>
                <li>You know rationally what to do but can’t seem to do it anymore</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a session look like?</h2>
              <p>
                A 60-minute session, fully tailored to your state and energy in that moment. No
                fixed programme you grind through — we start where you are right now and
                build from there.
              </p>
              <ol>
                <li>
                  <strong>Check-in.</strong> What’s going on this week? How have you slept?
                  Where is tension sitting in your body? This sets the tone of the session.
                </li>
                <li>
                  <strong>Mobility and breathwork.</strong> Targeted breathing and movement to
                  regulate your nervous system and bring you back to focus — before we
                  train, not after.
                </li>
                <li>
                  <strong>Strength training, tailored.</strong> Functional strength and mobility
                  work, adjusted to what your body can handle today. No ego, no unnecessary
                  stimuli — quality over volume.
                </li>
                <li>
                  <strong>Recovery and regulation.</strong> Breathing and regulation techniques
                  to close the session with a calmer nervous system than you started with.
                </li>
                <li>
                  <strong>Mental cue.</strong> A small, specific prompt to take into your week.
                  Self-inquiry, not homework.
                </li>
              </ol>
              <p>
                You leave the studio with more energy than you came in with — not depleted,
                but regulated. That’s the test.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What is The Ascend Method?</h2>
              <p>
                The Ascend Method is an integrated approach where physical training, breathwork
                and nervous-system regulation come together. Instead of just training the body,
                we optimise how your entire system functions — so you don’t just get
                stronger, but also experience more calm, focus and control in daily life.
              </p>
              <p>
                Central to the method is the <strong>SQ-ladder</strong>: a framework that maps
                where you currently function. Are you mostly in survival mode and tension? Is
                there already balance between work and life, but flow is missing? Or are you
                performing near the top but want to peak more sustainably? From your starting
                point, we determine where the focus of the journey lies.
              </p>
              <p>
                The idea is to move from survival to flow — from constant thinking to
                feeling and being present in your body again. Not via meditation as a separate
                discipline, but via training where this is woven in.
              </p>
              <p className="text-muted-foreground italic">
                “Wisdom isn’t studied, it’s embodied.” — Joey
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why this is different from regular personal training</h2>
              <p>
                Standard personal training rarely accounts for chronic stress, overload and
                mental pressure. The assumption: more training = more results. For high
                performers with an overloaded system, that’s wrong. More stimulus on an
                already overloaded nervous system = more exhaustion, not more strength.
              </p>
              <p>The Ascend Method works on your full system:</p>
              <ul>
                <li>You train without depleting yourself further</li>
                <li>You learn to actively regulate your stress level during and outside the session</li>
                <li>You build energy instead of losing it</li>
                <li>You develop physical and mental resilience — not one against the other</li>
              </ul>
              <p>
                It’s training for people who don’t just want to get stronger, but to
                function better on every level.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Practicalities</h2>
              <p>
                <strong>Location:</strong> SculptClub at Egelantiersgracht 424 in the Jordaan,
                Amsterdam. Private studio — no reception, no crowds, no other clients at
                the same time. You receive the door code at midnight before your session via WhatsApp.
              </p>
              <p>
                <strong>Duration:</strong> 60 minutes per session.
              </p>
              <p>
                <strong>Rate:</strong> on request. Joey works with a limited client base so each
                session gets the attention this approach requires — quality over volume.
              </p>
              <p>
                <strong>Languages:</strong> Dutch &amp; English.
              </p>
              <p>
                <strong>Cancellation:</strong> always free. No subscription, no contract.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">A free intro</h2>
              <p>
                The first step is a free intro session. We map together where you are on the
                SQ-ladder, what your goals are, and what a journey might look like. No
                obligations — you decide if it fits.
              </p>
              <p>
                Book your intro via Joey’s{" "}
                <Link href="/en/plan-free-intro-with-joey" className="text-brand hover:underline">
                  page
                </Link>{" "}
                or send a direct WhatsApp:{" "}
                <a
                  href="https://wa.me/31639175337?text=Hi%20Joey%21%20I%27d%20like%20to%20book%20a%20free%20intro."
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +31 6 39 17 53 37
                </a>
                .
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/en/blog/back-pain-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for back pain</p>
                </Link>
                <Link href="/en/blog/strength-training-for-women" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for women</p>
                </Link>
                <Link href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p>
                </Link>
                <Link href="/en/blog/stay-consistent-exercise" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Stay consistent with exercise</p>
                </Link>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Ready for a calmer system?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free intro with Joey. No obligations — we discuss where you are
                and what’s feasible.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/plan-free-intro-with-joey" size="lg">
                  Book free intro with Joey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31639175337?text=Hi%20Joey%21%20I%27d%20like%20to%20book%20a%20free%20intro."
                  external
                  variant="outline"
                  size="lg"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Joey
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

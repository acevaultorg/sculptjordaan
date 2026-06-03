import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";
import { TrainerChoiceGrid } from "@/components/marketing/trainer-choice-grid";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: { absolute: "Free Intro Personal Training — SculptClub Jordaan" },
  description:
    "Book your free intro at SculptClub. Private personal training studio in the Jordaan. No contract, no membership. First session 100% free.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/free-intro",
    languages: {
      nl: "/nl/gratis-intake",
      en: "/en/free-intro",
    },
  },
};

// "The SculptClub Intake" — named 5-step process (L, 2026-06-02). EN parallel
// of "De SculptClub Intake". Published methodology = trust anchor; steps 4+5
// (plan + decide) reduce first-timer hesitation; step 3 phone-or-studio (E);
// step 4 reinforces the transparency wedge (C).
const steps = [
  {
    step: "1",
    title: "Pick your trainer",
    desc: "Browse the trainers or take the match quiz (30 sec). Choose who fits your goal, level and language.",
  },
  {
    step: "2",
    title: "Send a message",
    desc: "Via WhatsApp or the form. Your trainer usually replies within an hour — together you pick a time that works.",
  },
  {
    step: "3",
    title: "Free intro",
    desc: "By phone or in our private studio in the Jordaan — your trainer decides what fits best. Discuss your goal, your experience and what you're after. No obligation.",
  },
  {
    step: "4",
    title: "Your tailored approach",
    desc: "Your trainer proposes a plan around your body, schedule and goal. You know exactly what to expect — and what it costs.",
  },
  {
    step: "5",
    title: "Train on your terms",
    desc: "Clicks? Book your first session. Per session, from €45, no contract. Stop any time.",
  },
];

const trustItems = [
  { icon: Shield, text: "No contract" },
  { icon: Clock, text: "Daily 06:30–22:00" },
  { icon: MessageCircle, text: "Fast replies via WhatsApp" },
];

const faqs = [
  {
    q: "Is the intro really free?",
    a: "Yes. Your first intro is always free — no credit card required. Duration is up to you and your trainer.",
  },
  {
    q: "Am I committing to anything after the intro?",
    a: "No. You decide whether to continue after. No membership, no contract.",
  },
  {
    q: "What happens during the intro?",
    a: "You meet your trainer, discuss your goals and get a feel for the studio. The trainer explains what they can do for you.",
  },
  {
    q: "How do I get in?",
    a: "Your trainer arranges the studio and makes sure you can get in. At your intake the trainer either meets you at the door or sends instructions via WhatsApp beforehand — no buzzer, no reception, everything goes through your trainer.",
  },
];

export default function FreeIntroPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="flex items-center justify-center py-6 px-4 border-b border-border/30">
        <Link href="/en" aria-label="Back to homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto dark:invert"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-12 text-center">
        {/* Stars */}
        <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="font-semibold text-foreground ml-1">5.0</span>
          <span>on Google</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[0.95] mb-4">
          First intro{" "}
          <span className="text-brand">100% free</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
          Meet your personal trainer in our private studio on the canal in the
          Jordaan. No obligation, no membership.
        </p>

        {/* Decision-paralysis killer — see /nl/gratis-intake parallel.
            Shipped 2026-05-26 lead-cap. */}
        <div className="mb-8 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 py-3 rounded-xl bg-brand/10 border border-brand/30">
          <p className="text-sm text-foreground">
            <strong className="font-semibold">11 trainers</strong> — not sure which fits?
          </p>
          <Link
            href="/en/match-trainer"
            className="plausible-event-name=free_intro_quiz_entry inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand text-brand-foreground font-semibold text-sm hover:bg-brand-dark transition-colors"
            data-cta="free-intro-quiz-entry"
          >
            <ArrowRight className="w-4 h-4" />
            Match quiz · 3 questions · 30 sec
          </Link>
        </div>

        {/* PRIMARY ACTION: TRAINER GRID — see /nl/gratis-intake parallel
            for the full rationale (operator directive 2026-05-20). Visitors
            choose their trainer directly on this page instead of routing
            via a general-WA fallback or a separate find-trainer page. */}
        <TrainerChoiceGrid locale="en" />

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground mb-2">
            Not sure which trainer? We'll happily match you.
          </p>
          <a
            href={whatsappLinks.intakeMatchEn}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=free_intro_whatsapp_match_fallback inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 underline-offset-4 hover:underline transition-colors"
            data-cta="free-intro-whatsapp-match-fallback"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp us and we'll match
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Private studio · No contract · Cancel anytime · Reply usually within 1 hour
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Smiling with dumbbells at SculptClub private studio"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
            fetchPriority="high"
          />
        </div>

        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-2">The SculptClub Intake</h2>
          <p className="text-center text-sm text-muted-foreground mb-8">In 5 steps — from intro to your first session.</p>
          <div className="grid gap-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-brand text-brand-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust icons */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary border border-border/50"
            >
              <item.icon className="w-5 h-5 text-brand" />
              <span className="text-xs text-center text-muted-foreground leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className="mt-16 text-left p-6 rounded-2xl bg-secondary border border-border/50">
          <h2 className="text-xl font-bold mb-4">What’s included?</h2>
          <ul className="space-y-3">
            {[
              "Free personal intro",
              "Private studio — no crowds, no distractions",
              "Clarity on your goals and the best approach",
              "Direct contact with your trainer — no middleman",
              "Trainers from €45/session",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real reviews */}
        <div className="mt-16 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">What clients say</h2>
          {[
            {
              name: "Pien B.",
              text: "What a gift — a boutique gym with great trainers within walking distance. Small but very nice.",
            },
            {
              name: "Bryan van L.",
              text: "Great location! Small but nice. Has everything we need. Even free coffee and tea!",
            },
          ].map((r) => (
            <div key={r.name} className="p-5 rounded-xl border border-border/50 bg-secondary">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed">“{r.text}”</p>
              <p className="text-xs text-muted-foreground mt-2">— {r.name} · Google</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl border border-border/50 bg-secondary">
                <p className="font-semibold text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA — see /nl/gratis-intake parallel for rationale. Primary
            "Pick your trainer" + secondary WhatsApp shortcut so visitors who
            scrolled through the page don't lose the quick-path at the moment
            of decision. */}
        <div className="mt-16 p-8 rounded-2xl bg-brand text-brand-foreground text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to get started?</h2>
          <p className="text-white/80 mb-6">
            Book your free intro now. Takes 2 minutes.
          </p>
          <Link
            href="/en/find-personal-trainer"
            className="plausible-event-name=free_intro_final_pick_trainer inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all active:scale-95"
            data-cta="free-intro-final-pick-trainer"
          >
            Pick your trainer
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-4">
            <a
              href={whatsappLinks.intakeMatchEn}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=free_intro_final_whatsapp_direct inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition-colors"
              data-cta="free-intro-final-whatsapp-direct"
            >
              <MessageCircle className="w-4 h-4" />
              Or WhatsApp directly
            </a>
          </div>
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          Egelantiersgracht 424, Amsterdam Jordaan
        </p>
      </main>
      <Footer />
    </div>
  );
}

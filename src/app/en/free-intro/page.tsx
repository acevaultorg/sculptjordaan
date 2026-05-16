import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { whatsappLinks } from "@/config/acuity";

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

const steps = [
  {
    step: "1",
    title: "Pick your trainer",
    desc: "Browse the trainers and pick the one who fits your goals, style and language.",
  },
  {
    step: "2",
    title: "Send the trainer a message",
    desc: "Via WhatsApp or our contact form. The trainer replies fast and you agree on a moment together — no rigid calendar, just on your terms.",
  },
  {
    step: "3",
    title: "45-minute free intro",
    desc: "Meet your trainer in our private studio in the Jordaan. Discuss your goals, get to know the approach, see if it clicks. No obligation, no hidden costs.",
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
    a: "Yes. Your first 45-minute intro is always free — no credit card required.",
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
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Meet your personal trainer in our private studio on the canal in the
          Jordaan. No obligation, no membership.
        </p>

        {/* DUAL PRIMARY CTAs — paid-traffic conversion rescue 2026-05-16
            (mirror of NL /gratis-intake fix; same root cause: paid Google Ads
            visitors bouncing because single-CTA forced multi-step trainer pick). */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={whatsappLinks.intakeMatchEn}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=free_intro_whatsapp_direct inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-600/30"
            data-cta="free-intro-whatsapp-direct"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp us now
          </a>
          <Link
            href="/en/find-personal-trainer"
            className="plausible-event-name=free_intro_pick_trainer inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
            data-cta="free-intro-pick-trainer"
          >
            Or pick your trainer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          No contract · Cancel anytime · 45 minutes · Usually reply within 1 hour
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
          <h2 className="text-2xl font-bold text-center mb-8">How does it work?</h2>
          <div className="grid gap-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary border border-border/50"
              >
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold shrink-0">
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
          <h2 className="text-xl font-bold mb-4">What&apos;s included?</h2>
          <ul className="space-y-3">
            {[
              "45-minute free personal intro",
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
              <p className="text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
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

        {/* Final CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-brand text-white text-center">
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
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          Egelantiersgracht 424, Amsterdam Jordaan
        </p>
      </main>
    </div>
  );
}

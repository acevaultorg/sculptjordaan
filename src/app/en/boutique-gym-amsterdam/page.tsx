import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";

export const metadata: Metadata = {
  title: "Boutique Gym Amsterdam — SculptClub Private Studio Jordaan",
  description:
    "A boutique gym in Amsterdam Jordaan. Private canal-side studio, no contract, no membership. Personal training from €45 per session. First intro free.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/en/boutique-gym-amsterdam",
    languages: {
      nl: "/nl/sportschool-jordaan",
      en: "/en/boutique-gym-amsterdam",
    },
  },
};

const steps = [
  {
    step: "1",
    title: "Book a free intro",
    desc: "45 minutes, on us. Meet a trainer and see the private studio on the Egelantiersgracht — no commitment.",
  },
  {
    step: "2",
    title: "Pick your way to train",
    desc: "Personal training from €45/session, Open Gym from €5.75/session, or rent the studio privately. No membership needed.",
  },
  {
    step: "3",
    title: "Train on your schedule",
    desc: "Open daily 06:30–22:00. Door code via WhatsApp the night before. No reception, no queues, no small talk.",
  },
];

const trustItems = [
  { icon: Shield, text: "No contract" },
  { icon: Clock, text: "Daily 06:30–22:00" },
  { icon: MessageCircle, text: "Quick reply on WhatsApp" },
];

const faqs = [
  {
    q: "What makes this a boutique gym?",
    a: "SculptClub is a private canal-side studio in the Jordaan — small, calm, and personal. Never crowded, no waiting for racks, no chain-gym atmosphere. Just a beautiful space and 5 trainers who know your name.",
  },
  {
    q: "Where is the gym in Amsterdam?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — in the heart of the Jordaan, walking distance from the Westerstraat, Lindengracht, and the Negen Straatjes.",
  },
  {
    q: "Do I need a membership?",
    a: "No. No contract, no membership, no commitment. Pay per session for personal training (from €45) or pick a 4-week Open Gym plan with no auto-renewal lock-in.",
  },
  {
    q: "Is English spoken at the gym?",
    a: "Yes. All five trainers speak English fluently. SculptClub welcomes Amsterdam expats, locals, and visitors alike — book in either language.",
  },
];

export default function BoutiqueGymAmsterdamPage() {
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
          Boutique gym{" "}
          <span className="text-brand">in Amsterdam Jordaan</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          A private canal-side studio. No chain-gym crowds, no contract, no
          small talk. Personal training from €45. First intro free.
        </p>

        {/* Primary CTA */}
        <a
          href={acuityLinks.generic}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
        >
          Book a free intro
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          No contract · Free cancellation · 45 minutes
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Prefer WhatsApp?{" "}
          <a
            href={whatsappLinks.en}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline font-medium"
          >
            Send us a message →
          </a>
        </p>

        {/* Studio photo */}
        <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <Image
            src="/images/studio/training-dumbbells-smile.jpg"
            alt="Inside the boutique gym in Amsterdam Jordaan — private canal-side studio at SculptClub"
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
            fetchPriority="high"
          />
        </div>

        {/* How it works */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold text-center mb-8">How it works</h2>
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
          <h2 className="text-xl font-bold mb-4">Why this boutique gym?</h2>
          <ul className="space-y-3">
            {[
              "Private studio on the Egelantiersgracht in the Jordaan",
              "Small, calm space — never crowded, never queueing",
              "5 trainers, all English-speaking",
              "Personal training from €45 per session, 0% trainer commission",
              "Open Gym from €29 for 4 sessions — no membership lock-in",
              "Open daily 06:30–22:00, door code via WhatsApp",
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
          <h2 className="text-2xl font-bold text-center mb-8">What members say</h2>
          {[
            {
              name: "Pien B.",
              text: "What a gift — a boutique gym with great trainers within walking distance. Small but very lovely.",
            },
            {
              name: "Bryan van L.",
              text: "Wonderful spot! Small but excellent. Has everything we need.",
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
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
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
          <h2 className="text-2xl font-bold mb-2">Try the boutique gym in Amsterdam</h2>
          <p className="text-white/80 mb-6">
            Book your free intro. Takes 2 minutes.
          </p>
          <a
            href={acuityLinks.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all active:scale-95"
          >
            Book free intro
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Address */}
        <p className="mt-8 text-sm text-muted-foreground">
          SculptClub · Egelantiersgracht 424, 1015 RR Amsterdam Jordaan ·{" "}
          <a
            href="https://maps.google.com/?q=Egelantiersgracht+424,+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            View on map
          </a>
        </p>
      </main>
    </div>
  );
}

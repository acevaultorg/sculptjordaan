import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, Clock, Shield, MessageCircle } from "lucide-react";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { trainers } from "@/config/trainers";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam Jordaan & Centrum | SculptClub" },
  description:
    "Personal training in the Jordaan and Centrum. English-speaking trainers, private canal-side studio, from €329 per 4 weeks, no contract, first intro free.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/en/personal-trainer-amsterdam-jordaan",
    languages: {
      nl: "/nl/personal-trainer-jordaan",
      en: "/en/personal-trainer-amsterdam-jordaan",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/personal-trainer-amsterdam-jordaan",
    title: "Personal Trainer Amsterdam Jordaan & Centrum | SculptClub",
    description:
      "Personal training in the Jordaan and Centrum. English-speaking trainers, private canal-side studio, from €329 per 4 weeks, no contract, first intro free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Amsterdam Jordaan & Centrum | SculptClub",
    description:
      "Personal training in the Jordaan and Centrum. English-speaking trainers, private canal-side studio, from €329 per 4 weeks, no contract, first intro free.",
  },
};

const steps = [
  {
    step: "1",
    title: "Pick your personal trainer",
    // 2026-06-02 (K): dynamic count (was hardcoded "7" + drifted names).
    desc: `${trainers.length} English-speaking personal trainers in the Jordaan, each with a different specialty — nutrition, strength, women's training, posture, recovery, small-group and athletic performance.`,
  },
  {
    step: "2",
    title: "Book a free intro",
    desc: "100% free. Meet your personal trainer and see the private studio on the Amsterdam Egelantiersgracht. No commitment.",
  },
  {
    step: "3",
    title: "Train on your terms",
    desc: "Open daily 06:00–22:00. Your programme starts from €329 per 4 weeks. No contract, no membership, free cancellation.",
  },
];

const trustItems = [
  { icon: Shield, text: "No contract" },
  { icon: Clock, text: "Daily 06:00–22:00" },
  { icon: MessageCircle, text: "Direct line on WhatsApp" },
];

const faqs = [
  {
    q: "Where in Amsterdam Jordaan is the studio?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — in the heart of the Jordaan, walking distance from the Centrum, Westerstraat, Lindengracht, the Negen Straatjes and the Westerpark.",
  },
  {
    q: "Is it easy to reach from the Centrum?",
    a: "Yes. Tram 13 or 17 drops you at the Marnixstraat, and bus 18 and 21 stop around the corner. Most clients walk or cycle from the Jordaan, Centrum or Westerpark — no parking stress.",
  },
  {
    q: "Is there parking?",
    a: "Paid street parking nearby; most clients come by bike or on foot. Ask your trainer for the easiest option if you're driving.",
  },
  {
    q: "How much does a personal trainer in Amsterdam Jordaan cost?",
    a: "A SCULPT TRANSFORMATION starts from €329 per 4 weeks, unlimited Open Gym included. Trainers set their own rates and there's no middleman, so what you pay goes straight to your trainer. The first intro is free.",
  },
  {
    q: "Can I choose my own personal trainer?",
    a: `Yes. You pick from ${trainers.length} personal trainers in the Amsterdam Jordaan studio, each with a different specialty and style. All speak English fluently. Browse their profiles on our trainers page.`,
  },
  {
    q: "Do I need a membership or contract?",
    a: "No. No membership, no contract, no long lock-in. You pay per session and can cancel any time at no cost.",
  },
];

export default function PersonalTrainerAmsterdamJordaanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* FAQPage schema (K, 2026-06-02) — EN parallel. LocalBusiness is global. */}
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
          Personal trainer{" "}
          <span className="text-brand">in Amsterdam Jordaan</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          {trainers.length} English-speaking trainers. One private studio on the
          Egelantiersgracht. From €329 per 4 weeks. First intro free.
        </p>

        {/* Primary CTA */}
        <a
          href={"/en/find-personal-trainer"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all active:scale-95 shadow-lg"
        >
          Book a free intro
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          No contract · Free cancellation · 100% no commitment
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
            alt="Personal training in the private SculptClub studio on the Egelantiersgracht in Amsterdam Jordaan"
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
          <h2 className="text-xl font-bold mb-4">What you get in Amsterdam Jordaan</h2>
          <ul className="space-y-3">
            {[
              "Private canal-side studio on the Egelantiersgracht",
              `${trainers.length} personal trainers — your match for goal and style`,
              "First intro free, no credit card needed",
              "From €329 per 4 weeks — you pay your trainer directly",
              "Open daily 06:00–22:00 — train when it suits you",
              "Door code via WhatsApp at midnight before your session — no reception",
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
              <p className="text-sm leading-relaxed">“{r.text}”</p>
              <p className="text-xs text-muted-foreground mt-2">— {r.name} · Google</p>
            </div>
          ))}
        </div>

        {/* Neighbourhood content (K, 2026-06-02) — EN parallel local-SEO
            rank-driver: Jordaan + Centrum + accessibility + ZZP angle. */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-bold mb-5">Personal training in the Jordaan and Centrum</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Our private studio sits at <strong className="text-foreground">Egelantiersgracht 424</strong>, in the heart of the Jordaan — walking distance from the Centrum, Westerpark and the Western Islands. Whether you live in the Jordaan, work along the canals, or come in from the Centrum, you train within a few minutes, no hassle.
            </p>
            <p>
              <strong className="text-foreground">Easy to reach.</strong> Tram 13 or 17 drops you at the Marnixstraat; bus 18 and 21 stop around the corner. Most clients walk or cycle — no hunt for a parking spot, no traffic. Train before work, on your lunch break, or in the evening: we're open daily 06:00–22:00.
            </p>
            <p>
              <strong className="text-foreground">Quiet, not crowded.</strong> Unlike a big gym in the Centrum, you train here in a calm, fully-equipped private studio on the canal — with Rogue, Eleiko and Concept2. No queue, full focus. Just you and your trainer, or a small group.
            </p>
            <p>
              <strong className="text-foreground">Who it's for.</strong> Whether you're starting out, returning after an injury, building strength, or just getting fitter: your trainer builds a plan around your goal, level and schedule. All trainers speak English fluently.
            </p>
            <p>
              <strong className="text-foreground">Are you a trainer yourself?</strong> Personal trainers and physiotherapists rent our studio from €12/hour — your own clients and rates, no contract. Ideal if you're looking for your own space in the Jordaan or Centrum.{" "}
              <Link href="/en/studio-rental" className="text-brand hover:underline font-medium">See studio rental →</Link>
            </p>
          </div>
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
        <div className="mt-16 p-8 rounded-2xl bg-brand text-brand-foreground text-center">
          <h2 className="text-2xl font-bold mb-2">Train with a personal trainer in Amsterdam Jordaan</h2>
          <p className="text-white/80 mb-6">
            Book your free intro. Takes 2 minutes.
          </p>
          <a
            href={"/en/find-personal-trainer"}
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
      <Footer />
    </div>
  );
}

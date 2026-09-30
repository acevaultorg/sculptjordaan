import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { trainers } from "@/config/trainers";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerCompactGrid } from "@/components/marketing/trainer-compact-grid";
import { ptGoals } from "@/config/pt-goals";
import Image from "next/image";
import { Star, MessageCircle, ArrowDown, Sparkles, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd, FaqJsonLd, BUSINESS_REF } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { googleReviews } from "@/data/reviews";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam Jordaan | SculptClub" },
  description: "Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. Free intro with a plan and a fixed price upfront.",
  alternates: {
    canonical: "/en/find-personal-trainer",
    languages: {
      nl: "/nl/vind-jouw-personal-trainer",
      en: "/en/find-personal-trainer",
    },
  },
  // Per-page OG/Twitter so shares of THIS page (esp. Instagram) preview the
  // PT-finder pitch + correct URL, not the homepage studio-rental default.
  openGraph: {
    type: "website",
    url: "/en/find-personal-trainer",
    title: "Personal Trainer Amsterdam Jordaan | SculptClub",
    description: "Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. Free intro with a plan and a fixed price upfront.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Amsterdam Jordaan | SculptClub",
    description: "Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. Free intro with a plan and a fixed price upfront.",
  },
};

const faqs = [
  {
    q: "What is a programme?",
    a: "Personal training with a goal and an end date, for example 8 or 12 weeks. At the free intro your trainer makes a plan: what you want to achieve, how often you train, what you track and what it costs in total. Prefer single sessions? That is always possible too.",
  },
  {
    q: "What does personal training cost at SculptClub?",
    a: "A SCULPT TRANSFORMATION starts from \u20ac299 per 4 weeks, unlimited Open Gym included. Trainers are self-employed and set their own price, so you agree the exact total with your trainer at the free intro, upfront and with no surprises. The first intro is always free: no charge, no commitment after.",
  },
  {
    q: "How does the free intro work?",
    a: "You send your chosen trainer a WhatsApp via their profile page. You agree on a time that suits you, come by the studio in the Jordaan, and do a 30–45 minute kick-off training together. After that you decide whether to continue.",
  },
  {
    q: "What if I don't click with the trainer?",
    a: "Then pick another trainer. There's no contract and switching costs nothing. You can also let us match you via the form below.",
  },
  {
    q: "How long is a session?",
    a: "Standard 60 minutes; some trainers also offer 45-minute or 90-minute sessions. Check your trainer's profile page for exact times and rates.",
  },
  {
    q: "Can I train with a friend or partner?",
    a: "Yes. A duo transformation starts from €199 per person per 4 weeks (for two, €399 total). Many trainers also offer small-group training (2–4 people) at adjusted per-person rates.",
  },
  {
    q: "I don't speak Dutch, is that okay?",
    a: "All trainers coach fluently in English. Several also speak Portuguese or Russian. Use the language filter in the grid to see who speaks your language.",
  },
  {
    q: "What if I have an injury or limitation?",
    a: "Mention it in your first message to the trainer. Some trainers (Andrea: posture & technique; Sergei: recovery & posture correction) are explicitly specialized here. Every trainer adapts the session to what is safe for you.",
  },
  {
    q: "How do I book my sessions?",
    a: "After the free intro you arrange directly with your trainer: set times or one-off sessions. Payments go via your trainer (CreditCard, Apple Pay, or invoice). No membership, no long contracts.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Always free. No time limit, no fees. WhatsApp your trainer and you reschedule or cancel directly.",
  },
  {
    q: "Where is the studio?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam, in the heart of the Jordaan. 5 min walk from Westermarkt (tram 13/17), easy by bike, paid street parking in the area. At midnight before your session you receive the exact address and directions via WhatsApp.",
  },
];


export default function TrainersPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Personal Trainers","url":"/en/find-personal-trainer"}]} />
      <ReviewsJsonLd reviews={googleReviews} />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <ServiceJsonLd
        name="Personal Training"
        description="Personal training as a programme toward a goal, in a private studio in the Jordaan, Amsterdam. Choose your goal and your trainer; the first intro is always free."
        url="/en/find-personal-trainer"
        priceRange="From €299 per 4 weeks"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: trainers.map((trainer, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: trainer.name,
                jobTitle: "Personal Trainer",
                description: trainer.bio.en,
                image: `${siteConfig.url}${trainer.image}`,
                url: `${siteConfig.url}/en/${trainer.slug.en}`,
                worksFor: BUSINESS_REF,
                knowsLanguage: trainer.languages.map((l) =>
                  l === "NL" ? "Dutch" : l === "EN" ? "English" : l === "PT" ? "Portuguese" : l
                ),
                /* No makesOffer here (operator 2026-09-19 + measured 2026-09-21):
                   the visible page stopped naming hourly rates on 2026-09-19, but
                   this JSON-LD still told Google and the AI engines "€45 / 45 min".
                   Structured data outlives the copy, so it is removed rather than
                   replaced — SculptClub does not set trainer prices, and the
                   4-week price is agreed at the free intake. */
              },
            })),
          }),
        }}
      />
      {/* Redesign 2026-09-24 (operator on his phone: "very long and confusing",
          "can look way better, big good images"). One promise, one sub-line,
          the trainers straight after with big photos and ONE button each.
          Studio photo only (no faces). The long blocks (traject steps, traject
          vs losse sessie, method cards, recruitment) are gone; the facts they
          carried live in the hero line, the card "Meer" panels and the FAQ. */}
      <section className="relative isolate overflow-hidden bg-[#0B0907]">
        <Image
          src="/images/studio/studio-overview.jpeg"
          alt="The SculptClub private studio on the Egelantiersgracht in the Jordaan"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/35" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-24 text-white sm:px-6 sm:pb-14 sm:pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">SCULPT TRANSFORMATION · Jordaan</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.05] text-white text-balance sm:text-6xl">
            Find your trainer in the Jordaan.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            First intro session free. Then from €299 per 4 weeks, unlimited Open Gym included.
          </p>
          {/* Brand line (operator 2026-09-20). Literal capitals so a grep of the
              served HTML finds it. */}
          <p className="mt-4 text-sm font-extrabold tracking-[0.18em] text-white">MAKE IT WORK</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#trainers" data-cta="trainerhub-goals" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark">
              See the trainers
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="/en/match-trainer" data-cta="trainerhub-quiz" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Not sure? 3 questions
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4" aria-hidden="true" />5.0 on Google</span>
            <span>{trainers.length} trainers</span>
            <span>Private studio</span>
          </p>
        </div>
      </section>

      {/* Trainers — filter row + big-photo cards. #doelen and #trainer-grid kept
          as anchors so older links into this page still land here. */}
      <section id="trainers" className="scroll-mt-28 py-8 sm:py-12">
        <div id="doelen" className="mx-auto max-w-6xl scroll-mt-28 px-4 sm:px-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Choose your trainer</h2>
          <div id="trainer-grid" className="scroll-mt-28">
            <TrainerCompactGrid trainers={trainers} goals={ptGoals} locale="en" />
          </div>
        </div>
      </section>

      {/* How it works — three short facts, no scroll. */}
      <section className="border-y border-border bg-secondary/50 py-8">
        <ol className="mx-auto grid max-w-5xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {[
            { t: "Free intro", d: "WhatsApp your trainer. You train together once, no commitment." },
            { t: "Your plan, price upfront", d: "You agree on your goal, the length and the total price before you start." },
            { t: "Train in the private studio", d: "From €299 per 4 weeks, unlimited Open Gym included." },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">{i + 1}</span>
              <span>
                <span className="block font-semibold">{s.t}</span>
                <span className="block text-sm text-muted-foreground">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Real Google reviews of the STUDIO (card mub833cd8fiu6l); the aggregate
          reads siteConfig.rating. Studio reviews only, no per-trainer quotes. */}
      <ReviewsPreview locale="en" />

      {/* Specific-need routing — compact links (several pages rely on these
          as their only inbound internal link, e.g. /en/personal-trainer-amsterdam-jordaan). */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-3 text-lg font-bold">Specific situation?</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/en/blog/female-personal-trainer-amsterdam", label: "Female trainer" },
              { href: "/en/personal-trainer-amsterdam-jordaan", label: "Personal trainer in the Jordaan" },
              { href: "/en/blog/english-speaking-personal-trainer-amsterdam", label: "English-speaking trainer" },
              { href: "/en/blog/prenatal-personal-trainer-amsterdam", label: "During pregnancy" },
              { href: "/en/blog/postpartum-personal-trainer-amsterdam", label: "After birth" },
              { href: "/en/blog/small-group-training-amsterdam", label: "Train together (2–4)" },
              { href: "/en/blog/personal-trainer-for-seniors-amsterdam", label: "Seniors (50+)" },
              { href: "/en/blog/personal-trainer-after-injury-amsterdam", label: "Recovering from injury" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — kept in full: FaqJsonLd above must match visible questions. */}
      <Section bg="muted">
        <SectionHeader overline="Frequently asked questions" title="What you want to know before you start" />
        <div className="mx-auto max-w-2xl">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`pt-faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Bottom band — second studio photo, WhatsApp match + the match form
          folded behind one tap. */}
      <section className="relative isolate overflow-hidden bg-[#0B0907] text-white">
        <Image
          src="/images/studio/power-rack.jpeg"
          alt="Power rack and weights in the SculptClub studio"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Not sure? We will match you.</h2>
          <p className="mt-3 text-white/85">No contract, no commitment. We usually reply within an hour.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to book a free intro at SculptClub.")}`}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp us
            </a>
            <a href="/en/match-trainer" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              3 questions, we pick
            </a>
          </div>
          <details className="group mx-auto mt-6 max-w-xl text-left">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-1 text-sm font-semibold text-white/85 hover:text-white [&::-webkit-details-marker]:hidden">
              Or fill in the form
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="mt-4 rounded-2xl bg-card p-4 text-foreground">
              <TrainerMatchForm locale="en" />
            </div>
          </details>
          <p className="mt-6 text-xs text-white/60">
            +31 6 15 14 79 52 · A personal trainer yourself?{" "}
            <a href="/en/for-trainers" className="font-semibold text-white underline underline-offset-4">Rent the studio</a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

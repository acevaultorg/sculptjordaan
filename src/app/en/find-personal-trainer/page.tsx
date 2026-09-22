import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { acuityLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";
import { GoalFunnel } from "@/components/marketing/goal-funnel";
import { ptGoals } from "@/config/pt-goals";
import Image from "next/image";
import { Star, Users, Gift, Percent, Building2, CalendarClock, MessageCircle, ArrowRight, Sparkles, Target, Check, X, Globe } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
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
  title: { absolute: "Personal Trainer Amsterdam — A Programme Toward Your Goal | SculptClub" },
  description: `Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. At a free intro you get a programme plan with a fixed price upfront. ${trainers.length} trainers, private studio in the Jordaan.`,
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
    title: "Personal Trainer Amsterdam — A Programme Toward Your Goal | SculptClub",
    description: `Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. At a free intro you get a programme plan with a fixed price upfront. ${trainers.length} trainers, private studio in the Jordaan.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Amsterdam — A Programme Toward Your Goal | SculptClub",
    description: `Looking for a personal trainer in Amsterdam? Pick your goal: lose fat, get stronger or move pain-free. At a free intro you get a programme plan with a fixed price upfront. ${trainers.length} trainers, private studio in the Jordaan.`,
  },
};

const trustBadges = [
  { icon: Building2, label: "Private studio" },
  { icon: Star, label: "5.0 on Google" },
  { icon: Users, label: `${trainers.length} trainers` },
  { icon: Gift, label: "Free intro" },
  { icon: MessageCircle, label: "Direct with your trainer" },
];

const trainerBenefits = [
  { icon: Percent, title: "You keep 100%", description: "Your rates, your clients. You rent the studio and keep 100% of your income." },
  { icon: Building2, title: "Premium studio", description: "Train your clients in a fully equipped private studio in the Jordaan." },
  { icon: CalendarClock, title: "Flexible schedule", description: "Plan your sessions whenever it suits you. Full freedom over your schedule." },
];

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
    a: "No problem. You can always switch: no contracts, no fees, no awkward conversations. Try another trainer or let us match you via the form below.",
  },
  {
    q: "How long is a session?",
    a: "Standard 60 minutes; some trainers also offer 45-minute or 90-minute sessions. Check your trainer's profile page for exact times and rates.",
  },
  {
    q: "Can I train with a friend or partner?",
    a: "Yes. Many trainers offer duo sessions or small-group training (2–4 people) at adjusted per-person rates. Cheaper and more fun if you want to train together.",
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
    a: "Egelantiersgracht 424, 1015 RR Amsterdam, in the heart of the Jordaan. 5 min walk from Westermarkt (tram 13/17), easy by bike, paid street parking in the area. The evening before your session you receive the exact address and directions via WhatsApp.",
  },
];


// Goal-first PT hub (operator 2026-09-11: sell transformations, not hours).
const trajectSteps = [
  { title: "Free intro", desc: "By phone or in the studio. You share where you are and where you want to go; together you set your starting point." },
  { title: "Your programme plan", desc: "Goal, duration, how often you train, what you track and the total price, agreed upfront. No surprises." },
  { title: "Train in the private studio", desc: "Just you, your trainer and the whole studio. Your trainer adjusts based on how you progress." },
  { title: "Check-in & next step", desc: "You see what has changed. Then you choose: a next programme, continue on your own with Open Gym, or stop." },
];

// Every trainer with a VERIFIED own website (research 2026-09-11, docs/PT-TRANSFORMATION-STRATEGY.md).
const methodCards = trainers
  .filter((t) => t.website)
  .map((t) => ({ id: t.id, label: t.website!.label, text: t.website!.tagline?.en ?? "", kind: "site" as const }));

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
                worksFor: {
                  "@type": "LocalBusiness",
                  name: siteConfig.name,
                  url: siteConfig.url,
                },
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
      {/* Hero — goal-first (operator 2026-09-11: "sell transformations, not hours").
          30d before: 93 views, ~10s engagement/view, 1 lead on the NL hub — a
          directory of 13 bios priced per session. Now the page starts from the
          visitor's goal and routes to the trainers who advertise that goal. */}
      <Section>
        <SectionHeader
          as="h1"
          overline="SCULPT TRANSFORMATION · Jordaan"
          title="Not hours. A transformation in 4 weeks."
          description="Body transformations from €299 per 4 weeks, unlimited Open Gym included. Pick what you want to achieve, meet the trainer who specialises in it, and agree your plan and your price at a free intro."
        />
        {/* Brand line (operator 2026-09-20: slogan "MAKE IT WORK"; he also floated
            "Let it work" and the chief picked this one). Deliberately BELOW the H1
            and description: the card asked for it inside the first 375px screen
            WITHOUT pushing the H1 down, and anything placed above the H1 moves it.
            Measured at 375px before this change: overline top 192, H1 216-298,
            description 314, first CTA 662 — so there is room here and the H1 stays
            at 216. Same line on both locales; it is a brand line, not copy.
            Written in literal capitals rather than CSS uppercase so a grep for
            "MAKE IT WORK" in the served HTML finds it — an audit already reported it
            missing once, and CSS-only capitals would have kept reporting that. */}
        <p className="mt-5 text-center text-sm font-extrabold tracking-[0.18em] text-brand">
          MAKE IT WORK
        </p>
        <FadeIn>
          <div className="mb-8 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="h-5 w-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3">
            <a href="#doelen" data-cta="trainerhub-goals" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-brand-lg transition-all hover:bg-brand-dark active:scale-[0.98]">
              <Target className="h-5 w-5" />
              Choose your goal
            </a>
            <a href="/en/match-trainer" data-cta="trainerhub-quiz" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]">
              <Sparkles className="h-5 w-5" />
              Not sure? 3 questions
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Step 1 — goal picker → traject outline → matched trainers */}
      <Section bg="muted" id="doelen" className="scroll-mt-20">
        <SectionHeader overline="Step 1" title="What do you want to achieve?" description="Pick your goal. You will see what a programme works on and which trainers specialise in it." />
        <GoalFunnel goals={ptGoals} trainers={trainers} locale="en" />
      </Section>

      {/* How a traject works — the SculptClub standard every trainer delivers */}
      <Section>
        <SectionHeader overline="How it works" title="From intro to result" description="Every trainer has their own style. This is what you can expect from every programme at SculptClub." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trajectSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">{i + 1}</div>
                <p className="mb-1 font-semibold">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Want to continue on your own after your programme? <a href="/en/open-gym" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">See Open Gym →</a>
        </p>
      </Section>

      {/* Traject vs single session */}
      <Section bg="muted">
        <SectionHeader overline="Why a programme" title="Programme or single session?" description="Single sessions are always possible. But if you have a goal, a plan gets you further." />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 text-lg font-bold">Single session</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Book one at a time</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />No fixed plan or end date</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />No set check-in moments</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Charged per session</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-brand bg-card p-6 shadow-brand-lg">
            <p className="mb-4 text-lg font-bold">Programme</p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />A concrete goal with an end date</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />A weekly plan that fits your calendar</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Check-ins, so you see what you achieve</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />From €299 per 4 weeks, unlimited Open Gym included</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Fixed total price agreed upfront with your trainer</li>
            </ul>
          </div>
        </div>
        {/* DUO — see the nl page for the reasoning. One sentence, never a third
            button on the trainer cards. */}
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-muted-foreground">
          Training with a partner? Duo transformation from €199 p.p. per 4 weeks (for two, €399 total).
        </p>
      </Section>

      {/* Trainers with their own coaching brand — link out to their sites */}
      <Section>
        <SectionHeader overline="Own method" title="Trainers with their own brand and programmes" description="Many SculptClub trainers run their own coaching business, with programmes and packages. Read how they work and what their clients say on their site." />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {methodCards.map((card) => {
            const tr = trainers.find((x) => x.id === card.id);
            if (!tr) return null;
            const href = card.kind === "site" && tr.website ? tr.website.url : `/en/${tr.slug.en}`;
            const external = card.kind === "site" && Boolean(tr.website);
            return (
              <a
                key={card.id}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                data-trainer-website={external ? tr.name : undefined}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/60"
              >
                <Image src={tr.image} alt={`Photo of ${tr.name}, personal trainer at SculptClub Amsterdam`} width={64} height={64} className="h-16 w-16 shrink-0 rounded-full object-cover object-top" />
                <span className="min-w-0">
                  <span className="block font-bold">{tr.name}</span>
                  <span className="block text-sm font-medium text-brand">{card.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{card.text}</span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-brand">
                    {external ? <Globe className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                    {external ? "See method & client stories" : "View profile"} {external ? "↗" : "→"}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      {/* All trainers — for visitors who prefer to browse */}
      <Section bg="muted">
        <SectionHeader overline="All trainers" title={`Prefer to choose yourself? See all ${trainers.length}`} description="Filter by specialty or language. The first intro is always free." />
        <div id="trainer-grid" className="scroll-mt-24">
          <TrainerFilterGrid trainers={trainers} locale="en" />
        </div>
      </Section>

      {/* Specific-need routing — self-segment for high-intent visitors */}
      <Section>
        <SectionHeader
          overline="Looking for something specific?"
          title="Jump to Your Situation"
          description="Searching for a trainer for a specific life phase or group? Use the shortcuts below."
        />
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/en/blog/female-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Female personal trainer</p>
              <p className="text-sm text-muted-foreground">Gezina, Eva or Andrea: three female trainers, private studio, comfortable learning environment.</p>
            </a>
            {/* De-orphaned 2026-08-28 — zero inbound internal links before this. */}
            <a href="/en/personal-trainer-amsterdam-jordaan" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Personal trainer in Jordaan</p>
              <p className="text-sm text-muted-foreground">Egelantiersgracht 424: private studio in the Jordaan and Centrum, no chain, no queue.</p>
            </a>
            <a href="/en/blog/english-speaking-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">English-speaking trainer</p>
              <p className="text-sm text-muted-foreground">Every trainer coaches fluently in English. Built for expats and international teams.</p>
            </a>
            <a href="/en/blog/prenatal-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">During pregnancy</p>
              <p className="text-sm text-muted-foreground">Stay strong safely by trimester. Mobility, core, birth prep.</p>
            </a>
            <a href="/en/blog/postpartum-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">After birth (postpartum)</p>
              <p className="text-sm text-muted-foreground">Gradual return to strength. Diastasis, pelvic floor, relaxin, with experience.</p>
            </a>
            <a href="/en/blog/small-group-training-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Small group (2–4 people)</p>
              <p className="text-sm text-muted-foreground">Duo or small group with partner, friend or colleagues. Split cost, private studio.</p>
            </a>
            <a href="/en/blog/personal-trainer-for-seniors-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">For seniors (50+)</p>
              <p className="text-sm text-muted-foreground">Stay strong, keep balance, prevent falls. Gradual build in a quiet space.</p>
            </a>
            {/* S-finish (2026-06-02): injury-recovery niche — EN parallel. */}
            <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Recovering from injury</p>
              <p className="text-sm text-muted-foreground">Safely rebuild after an injury or surgery. Rehab-experienced trainers, calm pace, technique first.</p>
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Trainer matching form */}
      <Section bg="muted">
        <SectionHeader
          overline="Need help?"
          title="Not Sure Which Trainer Is Right for You?"
          description="Fill in the form and we will help you find the right trainer."
        />
        <FadeIn>
          <TrainerMatchForm locale="en" />
        </FadeIn>
      </Section>

      {/* For trainers — recruitment cross-link */}
      <Section>
        <SectionHeader
          overline="For trainers"
          title="Personal trainer? Sell programmes, not hours."
          description="Rent the studio from €12/hour, keep 100% of your rate, and get clients who arrive with a goal. This page sends them to you."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {trainerBenefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/en/for-trainers" size="lg">
            See For-Trainers info
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'm a personal trainer and I'd like to know more about working at SculptClub")}`}
            size="lg"
            variant="outline"
          >
            WhatsApp us
          </ButtonLink>
        </FadeIn>
        <p className="mt-6 text-center text-sm">
          <a href="/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">How to price a programme or package →</a>
        </p>
      </Section>

      {/* Real Google reviews of the STUDIO (card mub833cd8fiu6l). See the nl page for the reasoning.
          Reuses the shipped ReviewsPreview, already live on 6+ pages, rather
          than building a second reviews surface: the quotes are real and
          attributed (name + Google mark + Local Guide badge where true), and
          the aggregate line reads siteConfig.rating, so the 5.0/19 stays in one
          place — that single source is what stopped the 21-vs-19 overstatement
          recurring. Studio reviews only; no per-trainer quotes here, because
          trainers.ts testimonials render ONLY where a consented real quote
          exists and none has been collected yet (blocked on mpy22kmsv5acpq). */}
      <ReviewsPreview locale="en" />

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="Frequently asked questions"
          title="What you want to know before you start"
          description="Everything first-time visitors ask us. Missing something? WhatsApp us."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`pt-faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to start?"
          title="Choose your goal, book your free intro"
          description="No contract, no commitment. Your trainer makes a plan with a fixed price upfront. Then you decide."
        />
        <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink
            href="#doelen"
            size="lg"
            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
          >
            Choose your goal
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to book a free intro at SculptClub.")}`}
            external
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp us
          </ButtonLink>
        </FadeIn>
        <FadeIn>
          <p className="mt-6 text-center text-xs text-white/55">
            +31 6 15 14 79 52 · we usually reply within an hour
          </p>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

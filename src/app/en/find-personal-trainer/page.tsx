import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { acuityLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";
import { Star, Users, Gift, Percent, Building2, CalendarClock, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { googleReviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam — Find Your Match | SculptClub" },
  description: `Looking for a personal trainer in Amsterdam? ${trainers.length} specialists in the Jordaan — free intro, from €45/session, no middleman. Find your match at SculptClub.`,
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
    title: "Personal Trainer Amsterdam — Find Your Match | SculptClub",
    description: `Looking for a personal trainer in Amsterdam? ${trainers.length} specialists in the Jordaan — free intro, from €45/session, no middleman. Find your match at SculptClub.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Amsterdam — Find Your Match | SculptClub",
    description: `Looking for a personal trainer in Amsterdam? ${trainers.length} specialists in the Jordaan — free intro, from €45/session, no middleman. Find your match at SculptClub.`,
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
    q: "What does personal training cost at SculptClub?",
    a: "Trainers set their own rates, from €45 per session. The first intro (including a kick-off training) is always free — no charge, no commitment after.",
  },
  {
    q: "How does the free intro work?",
    a: "You send your chosen trainer a WhatsApp via their profile page. You agree on a time that suits you, come by the studio in the Jordaan, and do a 30–45 minute kick-off training together. After that you decide whether to continue.",
  },
  {
    q: "What if I don't click with the trainer?",
    a: "No problem. You can always switch — no contracts, no fees, no awkward conversations. Try another trainer or let us match you via the form below.",
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
    q: "I don't speak Dutch — is that okay?",
    a: "All trainers coach fluently in English. Several also speak Portuguese or Russian. Use the language filter in the grid to see who speaks your language.",
  },
  {
    q: "What if I have an injury or limitation?",
    a: "Mention it in your first message to the trainer. Some trainers (Andrea — posture & technique, Sergei — recovery & posture correction) are explicitly specialized here. Every trainer adapts the session to what is safe for you.",
  },
  {
    q: "How do I book my sessions?",
    a: "After the free intro you arrange directly with your trainer — set times or one-off sessions. Payments go via your trainer (CreditCard, Apple Pay, or invoice). No membership, no long contracts.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Always free. No time limit, no fees. WhatsApp your trainer and you reschedule or cancel directly.",
  },
  {
    q: "Where is the studio?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — in the heart of the Jordaan. 5 min walk from Westermarkt (tram 13/17), easy by bike, paid street parking in the area. The evening before your session you receive the exact address and directions via WhatsApp.",
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
        description="Private personal training in a boutique studio in the Jordaan, Amsterdam. Choose your own trainer, first intro always free."
        url="/en/find-personal-trainer"
        priceRange="€45 - €120 per session"
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
                ...(trainer.rate ? { makesOffer: { "@type": "Offer", price: trainer.rate } } : {}),
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Trainers"
          title="Find Your Personal Trainer"
          description="Private studio · First intro free · Sessions from €45 · Pick your trainer, or let us match."
        />

        {/* Trust badges */}
        <FadeIn>
          <div className="mb-6 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="h-5 w-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Dual-primary CTA strip — see NL version comment. Paid-Google-Ads
            landing conversion lever; emerald WhatsApp-direct gives instant-
            match path, brand-blue anchor preserves "I'll choose" path. */}
        <FadeIn>
          {/* 2-CTA strip — see /nl parallel comment (2026-05-27 UX audit). */}
          <div className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3">
            <a
              href="/en/match-trainer"
              data-cta="trainerhub-quiz"
              className="plausible-event-name=trainerhub_quiz inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-brand-lg transition-all hover:bg-brand-dark active:scale-[0.98]"
            >
              <Sparkles className="h-5 w-5" />
              Find your trainer — 3 questions
            </a>
            <a
              href="#trainer-grid"
              data-cta="trainerhub-scroll-grid"
              className="plausible-event-name=trainerhub_scroll_grid inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]"
            >
              Or browse all {trainers.length} ↓
            </a>
          </div>
        </FadeIn>

        {/* Trainer cards with filter */}
        <div id="trainer-grid">
          <TrainerFilterGrid trainers={trainers} locale="en" />
        </div>
      </Section>

      {/* The Private Session — names the FORMAT (R, 2026-06-02). EN parallel of
          "De Privé Sessie". See NL for positioning rationale. */}
      <Section bg="muted">
        <SectionHeader
          overline="The format"
          title="The Private Session"
          description="Every session is private: you, your trainer and the whole studio. No other clients, no queue, full focus."
        />
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            The format is always the same — private, tailored, from €45, no contract. Your trainer picks the method: from strength and posture to nutrition, recovery or small group. Some trainers work with their own distinct approach — like Joey&apos;s <em>Ascend Method</em> (strength, breathwork, self-inquiry). You&apos;ll find each trainer&apos;s specialty on their profile.
          </p>
        </FadeIn>
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
              <p className="text-sm text-muted-foreground">Gezina, Eva or Andrea — three female trainers, private studio, comfortable learning environment.</p>
            </a>
            {/* De-orphaned 2026-08-28 — zero inbound internal links before this. */}
            <a href="/en/personal-trainer-amsterdam-jordaan" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Personal trainer in Jordaan</p>
              <p className="text-sm text-muted-foreground">Egelantiersgracht 424 — private studio in the Jordaan and Centrum, no chain, no queue.</p>
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
              <p className="text-sm text-muted-foreground">Gradual return to strength. Diastasis, pelvic floor, relaxin — with experience.</p>
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
          title="Are you a personal trainer? Rent the studio."
          description="Your own clients and rates, your own profile on this site, and matching with clients who find SculptClub directly. From €12/hour."
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
      </Section>

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
          title="Book Your Free Intro"
          description="First intro free. No contract. No commitment. Pick your trainer or WhatsApp us."
        />
        <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink
            href="#trainer-grid"
            size="lg"
            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
          >
            See the trainers
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

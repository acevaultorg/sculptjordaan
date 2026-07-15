import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, acuityFreeTrials } from "@/config/acuity";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { LandingVideo } from "@/components/marketing/landing-video";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import { Clock, Key, Dumbbell, Info, Check } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Open Gym Amsterdam — Private Studio Jordaan | SculptClub" },
  description:
    "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people per slot. From \u20ac29 per 4 weeks.",
  alternates: {
    canonical: "/en/open-gym",
    languages: {
      nl: "/nl/open-gym",
      en: "/en/open-gym",
    },
  },
  // Per-page OG/Twitter so social shares of THIS page (esp. Instagram, the #1
  // channel) preview the Open Gym pitch + the correct URL — instead of falling
  // back to the root layout's studio-rental default + homepage URL.
  openGraph: {
    type: "website",
    url: "/en/open-gym",
    title: "Open Gym Amsterdam — Private Studio Jordaan | SculptClub",
    description:
      "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people per slot. From €29 per 4 weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Gym Amsterdam — Private Studio Jordaan | SculptClub",
    description:
      "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people per slot. From €29 per 4 weeks.",
  },
};

const plans = [
  {
    name: "Single Session",
    sessions: "1 session",
    frequency: "Whenever you want",
    tagline: "No membership needed",
    price: "\u20ac10",
    period: "",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymBook,
  },
  {
    name: "Starter Plan",
    sessions: "4 sessions",
    frequency: "1x / week",
    tagline: "Ideal to get started",
    price: "\u20ac29",
    period: "/ 4 weeks",
    perSession: "\u20ac7.25 / session",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Unlimited",
    sessions: "Unlimited",
    frequency: "Unlimited",
    tagline: "Maximum freedom and flexibility",
    price: "\u20ac59",
    period: "/ 4 weeks",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymPlans.onbeperkt,
  },
];

const steps = [
  {
    icon: Clock,
    title: "Book a session",
    description: "Pick a time slot that works for you via our booking system.",
  },
  {
    icon: Key,
    title: "Get your door code",
    description: "You\u2019ll receive a unique code to enter the studio.",
  },
  {
    icon: Dumbbell,
    title: "Train on your time",
    description:
      "Use the full studio with professional equipment, all to yourself.",
  },
];

// Gallery must NOT include training-dumbbells-focus.jpg — that's the hero
// image at line ~250 below. Same-page dup audit 2026-05-27. Swapped to
// training-bike-energy.jpg for cardio variety. NL parity at
// src/app/nl/open-gym/page.tsx.
const studioImages = [
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press on bench at SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang on pull-up bar at SculptClub" },
  { src: "/images/studio/training-bike-energy.jpg", alt: "Cardio on the assault bike at SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Full back room with sled, Rogue rack and bench at SculptClub" },
];

const faqs = [
  {
    q: "What exactly is Open Gym?",
    a: "Open Gym gives you access to our private studio to train independently. You book a time slot, receive a door code, and have the full space and equipment to yourself.",
  },
  {
    q: "What equipment is available?",
    a: "The studio is fully equipped with professional gear from Rogue, Eleiko and Concept2: power rack, adjustable bench, dumbbells, cable machine, cardio and more. Everything you need for a complete workout.",
  },
  {
    q: "How long is a session?",
    a: "Each Open Gym session lasts 60 minutes. You can book consecutive sessions if you want to train longer.",
  },
  {
    q: "Can I bring a friend?",
    a: "Up to 4 people can be in the studio at the same time. Want to train together? Check out our studio rental options for small group training.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel or reschedule anytime via the booking system — always free, no exceptions.",
  },
  {
    q: "Is it really a membership?",
    a: "Yes, Open Gym works with a membership per 4 weeks. You choose a plan that fits you and can cancel at any time. No long-term contract.",
  },
  {
    q: "Is the first trial really free?",
    a: "Yes. You book a free 60-minute trial via the booking system. No credit card required, no obligation, no automatic renewal.",
  },
  {
    q: "What hours can I train?",
    a: "Daily 06:30 to 22:00. Early morning, lunch, after work or late evening — you choose. The studio is always private during your booked slot.",
  },
  {
    q: "Where is the studio and how do I get there?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — in the heart of the Jordaan. 5 min walk from Westermarkt (tram 13/17), easy by bike, paid street parking in the area (Europarking 5 min walk). The evening before your session you receive the door code + directions via WhatsApp.",
  },
  {
    q: "Are there changing rooms and showers?",
    a: "There is a changing area with lockers. Showers are not available in the studio. Most members plan Open Gym so they can head straight home or to work after.",
  },
  {
    q: "What do I bring?",
    a: "Sportswear, a towel, a water bottle and clean indoor sports shoes. Water is also available free in the studio.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function OpenGymPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Open Gym","url":"/en/open-gym"}]} />
      <ServiceJsonLd
        name="Open Gym"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions, max 4 people at a time."
        url="/en/open-gym"
        priceRange="€29 - €59 per 4 weeks"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Memberships"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions."
        url="/en/open-gym"
        recurring
        offers={[
          { name: "Starter Plan — 4 sessions", description: "4 sessions per 4 weeks, €7.25 per session", price: 29 },
          { name: "Unlimited", description: "Unlimited training per 4 weeks", price: 59 },
        ]}
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* Hero — 2-column: text+CTAs left, solo-training image right */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              as="h1"
              overline="Open Gym"
              title="Open Gym Amsterdam — train independently in a private studio"
              description="Train freely in a quiet, fully equipped private studio in the Jordaan. 60-minute sessions, max. 4 people per slot. No annual contract, cancel anytime."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              {/* Free try-out → embedded scheduler below (in-page #schedule anchor).
                  Visitor stays on sculptclub.nl during booking. */}
              <ButtonLink href="#schedule" size="lg">
                Book free trial session
              </ButtonLink>
              {/* Paid Open Gym session — keeps target=_blank for Apple Pay support. */}
              <ButtonLink href={acuityLinks.openGymBook} size="lg" variant="outline">
                Already a member? Reserve your hour
              </ButtonLink>
            </FadeIn>

            {/* Trust strip — 5★ Google + price anchor + key benefits */}
            <FadeIn delay={0.1} className="mt-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="font-semibold">5.0 Google</span>
                </span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="font-medium text-muted-foreground">from €7.25/session</span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="font-medium text-muted-foreground">Cancel anytime</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  First trial free
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-400">
                  Private studio · max 4 people
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                  No contract
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-xs font-medium text-rose-700 dark:text-rose-400">
                  Free cancellation
                </span>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/training-dumbbells-focus.jpg"
                alt="Independent training with dumbbells at SculptClub Open Gym in the Jordaan — focus, no crowd, no wait time"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Embedded Acuity scheduler — free Open Gym try-out stays on sculptclub.nl */}
      {/* Studio in motion — caption-free b-roll before the booking scheduler. */}
      <Section bg="muted">
        <SectionHeader overline="See it in action" title="Train in our private studio" />
        <FadeIn>
          <LandingVideo
            src="/videos/studio-training.mp4"
            poster="/videos/studio-training-poster.jpg"
            label="People training in SculptClub's private studio in Amsterdam Jordaan"
          />
        </FadeIn>
      </Section>

      <Section id="schedule">
        <SectionHeader
          overline="Free trial"
          title="Book your free trial session"
          description="Schedule online directly — pick a time and come by. No commitment, no membership."
        />
        <AcuityEmbed
          url={acuityFreeTrials.openGymTryout}
          title="Book your free Open Gym trial at SculptClub"
          height={900}
          className="-mx-4 rounded-none overflow-hidden bg-white sm:mx-auto sm:max-w-3xl sm:rounded-2xl"
        />
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          overline="Membership"
          title="Choose Your Plan"
          description="All plans run per 4 weeks. No long-term contract."
        />

        <div className="-mt-4 mb-10 flex flex-col items-center gap-1.5 text-center sm:-mt-6">
          <p className="text-base font-semibold text-primary">
            Most members start with 2x per week
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>60-minute sessions. For 1 person.</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center flex flex-col ${plan.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge className="mx-auto mb-2">{plan.badge}</Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.sessions}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {" "}
                      {plan.period}
                    </span>
                  </p>
                  {plan.perSession && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.perSession}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <ButtonLink href={plan.link} size="lg" className="w-full">
                    Start
                  </ButtonLink>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {["Cancel anytime", "No contract", "Free cancellation", "First lesson free"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 flex-shrink-0 text-discount" aria-hidden />
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section bg="muted">
        <SectionHeader
          overline="How it works"
          title="Get Started in 3 Steps"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio gallery */}
      <Section>
        <SectionHeader
          overline="The Studio"
          title="Fully Equipped"
          description="Power rack, dumbbells, cable machine, cardio and more. Everything you need."
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="Frequently asked questions"
          title="Open Gym FAQ"
        />

        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      {/* Read more — internal links into the Open Gym / gym-without-membership topical
          cluster. Open Gym was under-linked; this funnels link authority + targets the
          queries people actually search (gym without membership, open gym vs regular gym). */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More about training on your own</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/en/blog/open-gym-vs-regular-gym" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Open Gym vs. a regular gym: which fits you?</p>
              </a>
              <a href="/en/blog/gym-without-membership-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym without a membership in Amsterdam</p>
              </a>
              <a href="/en/blog/private-gym-vs-big-box-gym" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Private gym vs. a big-box chain</p>
              </a>
              <a href="/en/blog/boutique-gym-vs-big-chain-gym" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Boutique gym vs. big chain gym</p>
              </a>
              <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym in the Jordaan, Amsterdam</p>
              </a>
              <a href="/en/blog/first-time-gym-tips" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">First time at the gym: tips</p>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to start?"
          title="Choose Your Membership"
          description="Choose a membership if you are new, or reserve directly if you are already a member."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink
            href={acuityLinks.openGymPlans.instapplan}
            size="lg"
            className="text-white"
          >
            Become a member
          </ButtonLink>
          <ButtonLink
            href={acuityLinks.openGymBook}
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/30 hover:bg-white/10 dark:bg-transparent"
          >
            Reserve a session
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

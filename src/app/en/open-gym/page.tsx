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
import { acuityPaidSessions, openGymSummerDeal, openGymStudentDeal } from "@/config/acuity";
import { LandingVideo } from "@/components/marketing/landing-video";
import { OpenGymPlanTabs } from "@/components/marketing/open-gym-plan-tabs";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import { Clock, Key, Dumbbell, Info, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Open Gym Amsterdam — Private Studio Jordaan | SculptClub" },
  description:
    "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people at a time. From €29 per 4 weeks.",
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
      "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people at a time. From €29 per 4 weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Gym Amsterdam — Private Studio Jordaan | SculptClub",
    description:
      "Open gym in Amsterdam: train independently in a quiet, fully equipped private studio in the Jordaan. Max. 4 people at a time. From €29 per 4 weeks.",
  },
};

// Summer deal — honest, price-locked (member keeps €49 as long as they stay).
// Every deal surface below gates on `deal.active`; when false the page shows the
// plain regular €79 with no strikethrough/ring/badge/savings/urgency (nothing lies).
const deal = openGymSummerDeal;
const savings = deal.priceRegular - deal.priceDeal;
// When the deal is live all "become an unlimited member" CTAs route to the €49
// Zomerdeal product; otherwise to the regular Onbeperkt product.
const onbeperktUrl = deal.active
  ? deal.dealUrl
  : acuityPaidSessions.openGymPlans.onbeperkt;

// S5 — "How you get in" operational steps (retitled so it doesn't clash with
// the S3 journey ladder above).
const steps = [
  {
    icon: Clock,
    title: "Reserve your moment",
    description: "Pick a time online that suits you.",
  },
  {
    icon: Key,
    title: "Get your door code",
    description: "You'll get a personal code via WhatsApp to let yourself in.",
  },
  {
    icon: Dumbbell,
    title: "Train — the studio is yours",
    description:
      "The full studio with professional equipment, all to yourself.",
  },
];

// Gallery must NOT include training-dumbbells-focus.jpg — that's the hero
// image below. Same-page dup audit 2026-05-27. training-bike-energy.jpg gives
// cardio variety. NL parity at src/app/nl/open-gym/page.tsx.
const studioImages = [
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press on bench at SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang on pull-up bar at SculptClub" },
  { src: "/images/studio/training-bike-energy.jpg", alt: "Cardio on the assault bike at SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Full back room with sled, Rogue rack and bench at SculptClub" },
];

// Two new FAQs at the top (per spec); the summer-deal FAQ is gated so nothing
// stale is served once the deal ends. faqJsonLdData is derived from this array
// so the JSON-LD stays perfectly in sync.
const faqs = [
  {
    q: "What's the difference between a free trial and reserving a session?",
    a: "The free trial is your first time — no obligation, no membership. After that you reserve single sessions (€9, 1 hour) or become a member. New here? Start with the free trial.",
  },
  ...(deal.active
    ? [
        {
          q: "What is the summer offer?",
          a: `Join Unlimited now and train unlimited for €${deal.priceDeal} per 4 weeks instead of €${deal.priceRegular} — and you keep this price as long as you stay a member. New members pay the regular €${deal.priceRegular} after that. Cancel anytime, free.`,
        },
      ]
    : []),
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
    a: "Cancel or reschedule anytime via the booking system — always free, no exceptions. Cancelled? Your credits come back to your account instantly; card payments for single sessions are refunded automatically within a few days.",
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
    a: "Daily 06:00 to 22:00. Early morning, lunch, after work or late evening — you choose. The studio is always private during your booked slot.",
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
        priceRange="€29 - €79 per 4 weeks"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Memberships"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions."
        url="/en/open-gym"
        recurring
        offers={[
          { name: "Starter Plan — 4 sessions", description: "4 sessions per 4 weeks, €7.25 per session", price: 29 },
          { name: "Unlimited", description: "Unlimited training per 4 weeks", price: openGymSummerDeal.priceRegular },
        ]}
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* S1 — HERO · 2-column: text+CTAs left, solo-training image right */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              as="h1"
              overline="Open Gym · Jordaan"
              title="Train whenever you want in a quiet private studio"
              description="Train freely in a fully equipped studio on the Egelantiersgracht, in the heart of the Jordaan. 60-minute sessions, max 4 people at a time. No contract, cancel anytime for free — and your first session is on us."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              {/* G1 — dominant free-trial CTA → dedicated on-site embed page.
                  Internal <Link>, so add data-intent/pricing (bypasses the embed's
                  auto-tracking; the real free conversion fires on /free-trial). */}
              <ButtonLink
                href="/en/free-trial"
                size="lg"
                data-intent="open_gym"
                data-pricing="free"
              >
                Book your free trial
              </ButtonLink>
              {/* G2 — reserve a paid session; target=_blank for Apple Pay support. */}
              <ButtonLink
                href={acuityPaidSessions.openGymSession}
                size="lg"
                variant="outline"
                data-intent="open_gym"
                data-pricing="paid"
              >
                Been here before? Reserve your hour
              </ButtonLink>
            </FadeIn>

            {/* Trust strip — 5★ Google + price anchor + key benefits */}
            <FadeIn delay={0.1} className="mt-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="font-semibold">5.0 on Google</span>
                </span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="font-medium text-muted-foreground">from €7.25 per session</span>
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
              {/* Single-session ⟷ Membership toggle — see the NL twin for the
                  full rationale (operator 2026-07-25: make memberships
                  discoverable in the hero). Defaults to the membership tab. */}
              <OpenGymPlanTabs locale="en" />

              {/* Deal teaser — plain foreground text (never orange, never a button), gated */}
              {deal.active && (
                <p className="mt-4 text-sm font-medium text-foreground">
                  Summer offer — Unlimited €{deal.priceDeal} per 4 weeks (normally €{deal.priceRegular})
                  {deal.endDate ? `, until ${deal.endDate}` : ""}.
                </p>
              )}
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

      {/* S2 — STUDIO VIDEO · see it → book it */}
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

      {/* S3 — JOURNEY LADDER (the router): new / returned / member self-select */}
      <Section id="zo-werkt-het">
        <SectionHeader
          overline="How it works"
          title="Where are you now?"
          description="New here or been before — you'll see your next step right away."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Rung 1 · G1 — the only filled button in this section */}
          <FadeIn>
            <Card className="h-full flex flex-col text-center">
              <CardHeader>
                <Badge variant="secondary" className="mx-auto mb-2">New here</Badge>
                <CardTitle className="text-lg">1. Book your free trial</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Come by with no obligation, feel the studio and train one session free. No membership needed.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href="/en/free-trial"
                  size="lg"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="free"
                >
                  Book your free trial
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Rung 2 · G2 */}
          <FadeIn delay={0.1}>
            <Card className="h-full flex flex-col text-center">
              <CardHeader>
                <Badge variant="outline" className="mx-auto mb-2">After your trial</Badge>
                <CardTitle className="text-lg">2. Reserve your hour</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Liked it? Reserve a session whenever it suits you — €9 per hour single, or cheaper with a plan.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymSession}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Reserve a session
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Rung 3 · G3 — commit rung, highlighted */}
          <FadeIn delay={0.2}>
            <Card className={`h-full flex flex-col text-center ${deal.active ? "ring-2 ring-primary" : ""}`}>
              <CardHeader>
                {deal.active && <Badge className="mx-auto mb-2">Summer</Badge>}
                <CardTitle className="text-lg">3. Become a regular</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {deal.active
                    ? `Here every week? Train unlimited for €${deal.priceDeal} per 4 weeks this summer (normally €${deal.priceRegular}). Cancel anytime for free.`
                    : `Here every week? Train unlimited for €${deal.priceRegular} per 4 weeks. Cancel anytime for free.`}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={onbeperktUrl}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Become an unlimited member
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* S4 — PRICING + SUMMER DEAL (the decision point) */}
      <Section bg="muted">
        <SectionHeader
          overline={deal.active ? "Summer offer" : "Pricing"}
          title="Choose what fits you"
          description="Single session or unlimited, per 4 weeks. Cancel anytime."
        />

        <div className="-mt-4 mb-10 flex flex-col items-center gap-1.5 text-center sm:-mt-6">
          <p className="text-base font-semibold text-foreground">
            Most members start with 2× per week
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>60-minute sessions. For 1 person.</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {/* Single session */}
          <FadeIn>
            <Card className="h-full text-center flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Single Session</CardTitle>
                <CardDescription>1 session</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-3xl font-bold">€9</p>
                <p className="mt-3 text-sm text-muted-foreground">No membership needed</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymSession}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Reserve
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Starter Plan */}
          <FadeIn delay={0.1}>
            <Card className="h-full text-center flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Starter Plan</CardTitle>
                <CardDescription>4 sessions</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-3xl font-bold">
                  €29
                  <span className="text-base font-normal text-muted-foreground"> / 4 weeks</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">€7.25 / session</p>
                <p className="mt-3 text-sm text-muted-foreground">Ideal to get started</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymPlans.instapplan}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Become a member
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Unlimited — deal card (ring + badge + price treatment, all gated) */}
          <FadeIn delay={0.2}>
            <Card className={`h-full text-center flex flex-col ${deal.active ? "ring-2 ring-primary" : ""}`}>
              <CardHeader>
                {deal.active && <Badge className="mx-auto mb-2">Summer</Badge>}
                <CardTitle className="text-lg">Unlimited</CardTitle>
                <CardDescription>Train as often as you like</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {deal.active ? (
                  <>
                    <p>
                      <span className="sc-price-old text-lg">€{deal.priceRegular}</span>{" "}
                      <span className="text-3xl font-bold">€{deal.priceDeal}</span>
                      <span className="text-base font-normal text-muted-foreground"> / 4 weeks</span>
                    </p>
                    <p className="mt-1 sc-discount text-sm">Save €{savings} per 4 weeks</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Join now and you keep this price as long as you stay a member. After that, Unlimited is €{deal.priceRegular} for new members.
                    </p>
                  </>
                ) : (
                  <p className="text-3xl font-bold">
                    €{deal.priceRegular}
                    <span className="text-base font-normal text-muted-foreground"> / 4 weeks</span>
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground">Maximum freedom</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={onbeperktUrl}
                  size="lg"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Become a member
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {["Cancel anytime", "No contract", "Free cancellation", "First trial free"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 flex-shrink-0 text-discount" aria-hidden />
              {t}
            </span>
          ))}
        </div>
        {openGymStudentDeal.active && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Student? Unlimited for €{openGymStudentDeal.priceStudent} per 4 weeks with a valid student ID.{" "}
            <Link
              href="/en/open-gym/student-discount"
              className="font-medium text-primary underline underline-offset-4 hover:no-underline"
              data-intent="open_gym"
              data-pricing="paid"
            >
              See the student discount
            </Link>
          </p>
        )}
      </Section>

      {/* S5 — HOW YOU GET IN (operational, friction-kill) */}
      <Section>
        <SectionHeader
          overline="In the studio"
          title="How you get in"
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

      {/* S6 — STUDIO GALLERY */}
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

      {/* S7 — FAQ */}
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

      {/* S8 — READ MORE — internal links into the Open Gym / gym-without-membership
          topical cluster. Funnels link authority + targets the queries people
          actually search (gym without membership, open gym vs regular gym). */}
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
              {/* De-orphaned 2026-08-28: this page had ZERO inbound internal links from any
                  indexable page (measured across all 194 sitemap pages), so it was submitted
                  to Google but starved of link equity — a prime cause of "crawled/discovered –
                  currently not indexed". It targets a real local head query. */}
              <a href="/en/boutique-gym-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Boutique gym in Amsterdam — the private-studio alternative</p>
              </a>
              {deal.active && (
                <a href="/en/open-gym/unlimited-summer-deal" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                  <p className="text-sm text-muted-foreground mb-1">Summer deal</p>
                  <p className="font-semibold group-hover:text-brand transition-colors">Unlimited Open Gym for €{deal.priceDeal} per 4 weeks</p>
                </a>
              )}
              <a href="/en/blog/boutique-gym-vs-big-chain-gym" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Boutique gym vs. big chain gym</p>
              </a>
              <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym in the Jordaan, Amsterdam</p>
              </a>
              {/* De-orphaned 2026-08-28: this booking page's ONLY inbound link was its own
                  translation (nl<->en language switch) — a closed loop, zero links from any
                  content page, despite being indexable + in the sitemap. */}
              <a href="/en/book-gym" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Booking</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Book Open Gym — single session or membership</p>
              </a>
              <a href="/en/blog/first-time-gym-tips" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">First time at the gym: tips</p>
              </a>
              {/* EN twin of the /nl/eerste-bezoek contextual-link push (see NL page). */}
              <a href="/en/first-visit" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Practical</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Your first visit — what to expect</p>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* S9 — BOTTOM CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to begin?"
          title="Choose your next step"
          description={
            deal.active
              ? "New here? Book a free trial. Ready to join? Grab the summer offer."
              : "New here? Book a free trial. Ready to join? Become an unlimited member."
          }
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink
            href={onbeperktUrl}
            size="lg"
            data-intent="open_gym"
            data-pricing="paid"
          >
            {deal.active ? `Become an unlimited member — now €${deal.priceDeal}` : "Become an unlimited member"}
          </ButtonLink>
          <ButtonLink
            href="/en/free-trial"
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/30 hover:bg-white/10 dark:bg-transparent"
            data-intent="open_gym"
            data-pricing="free"
          >
            Or book a free trial first
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

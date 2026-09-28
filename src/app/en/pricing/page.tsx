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
import { acuityLinks, acuityPackages, openGymSummerDeal, openGymStudentDeal, openGymSinglePrice } from "@/config/acuity";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import {
  CreditCard,
  ArrowRight,
  XCircle,
  Key,
  Handshake,
  Dumbbell,
  Shield,
  Star,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pricing SculptClub Jordaan | PT, Studio Rental, Open Gym" },
  description:
    "All SculptClub prices: personal training from €299 per 4 weeks, studio rental €12 an hour and Open Gym from €29 per 4 weeks. No contract.",
  alternates: {
    canonical: "/en/pricing",
    languages: {
      nl: "/nl/prijzen",
      en: "/en/pricing",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/pricing",
    title: "Pricing SculptClub Jordaan | PT, Studio Rental, Open Gym",
    description:
      "All SculptClub prices: personal training from €299 per 4 weeks, studio rental €12 an hour and Open Gym from €29 per 4 weeks. No contract.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing SculptClub Jordaan | PT, Studio Rental, Open Gym",
    description:
      "All SculptClub prices: personal training from €299 per 4 weeks, studio rental €12 an hour and Open Gym from €29 per 4 weeks. No contract.",
  },
};

const openGymPlans = [
  {
    name: "Single Session",
    sessions: "1 session",
    price: `\u20ac${openGymSinglePrice}`,
    period: "",
    perSession: "No membership needed",
    blurb: "Try the studio, no membership",
    badge: null,
    link: acuityLinks.openGymBook,
  },
  {
    name: "Starter Plan",
    sessions: "4 sessions",
    price: "\u20ac29",
    period: "/ 4 weeks",
    perSession: "\u20ac7.25 / session",
    blurb: "See if Open Gym suits you",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Unlimited",
    sessions: "Unlimited",
    // Sourced from the single deal config (src/config/acuity.ts) \u2014 never
    // re-hardcode this price. A second hardcode here (previously "\u20ac69", the
    // pre-2026-07-21 price) is exactly how the /en/pricing \u2194 /en/open-gym
    // contradiction happened.
    price: `\u20ac${openGymSummerDeal.active ? openGymSummerDeal.priceDeal : openGymSummerDeal.priceRegular}`,
    priceOld: openGymSummerDeal.active ? `\u20ac${openGymSummerDeal.priceRegular}` : null,
    period: "/ 4 weeks",
    perSession: null,
    blurb: openGymSummerDeal.active
      ? `Save \u20ac${openGymSummerDeal.priceRegular - openGymSummerDeal.priceDeal} per 4 weeks, this price stays as long as you're a member`
      : "No limits, no planning",
    badge: openGymSummerDeal.active ? "Intro offer" : null,
    link: openGymSummerDeal.active ? openGymSummerDeal.dealUrl : acuityLinks.openGymPlans.onbeperkt,
  },
];

const trustChipsEN = [
  { icon: Check, label: "First intake free" },
  { icon: XCircle, label: "No lock-in contract" },
  { icon: Shield, label: "Cancel anytime" },
  { icon: Star, label: "5.0\u2605 on Google" },
];

const included = [
  {
    icon: XCircle,
    title: "Free cancellation always",
    description: "Reschedule or cancel your session at no cost.",
  },
  {
    icon: Key,
    title: "Door code via WhatsApp",
    description: "You receive your unique access code at midnight before your session.",
  },
  {
    icon: Handshake,
    title: "No contracts, no obligations",
    description: "Stop whenever you want. No cancellation fees.",
  },
  {
    icon: Dumbbell,
    title: "All equipment included",
    description: "Power rack, dumbbells, cable machine, cardio and more.",
  },
];

export default function PricingPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Pricing","url":"/en/pricing"}]} />
      <ServiceJsonLd
        name="Personal Training"
        description="Personal training in a private studio in Amsterdam Jordaan. Free intro session, transformations from €299 per 4 weeks with unlimited Open Gym, you pay your trainer directly."
        url="/en/pricing"
        priceRange="From €299 per 4 weeks"
      />
      <ServiceJsonLd
        name="Open Gym"
        description="Independent training in a private studio in Amsterdam Jordaan. 60-minute sessions, max 4 people. From €29/4 weeks."
        url="/en/pricing"
        priceRange="€29–€79/4 weeks"
      />
      <ServiceJsonLd
        name="Studio Rental"
        description="Rent a fully equipped personal training studio in Amsterdam Jordaan. From €12/hour, discount packages up to 23% off."
        url="/en/pricing"
        priceRange="From €12/hour"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Memberships"
        description="Independent training in a private studio in Amsterdam Jordaan. 60-minute sessions, max 4 people."
        url="/en/pricing"
        recurring
        offers={[
          { name: "Single Session", description: "1 session, no membership needed", price: openGymSinglePrice },
          { name: "Starter Plan — 4 sessions", description: "4 sessions per 4 weeks, €7.25 per session", price: 29 },
          {
            name: "Unlimited",
            description: "Unlimited training per 4 weeks",
            price: openGymSummerDeal.active
              ? openGymSummerDeal.priceDeal
              : openGymSummerDeal.priceRegular,
          },
        ]}
      />
      <OfferCatalogJsonLd
        catalogName="Studio Rental Rates"
        description="Rent a fully equipped personal training studio in Amsterdam Jordaan."
        url="/en/pricing"
        offers={[
          { name: "Half studio — 60 min", description: "Half studio rental, 60 minutes", price: 12 },
          { name: "Full studio — 60 min", description: "Full studio rental, 60 minutes", price: 17 },
          { name: "Starter discount pack", description: "Studio rental discount pack, 10% off", price: 89 },
          { name: "Routine discount pack", description: "Studio rental discount pack, 15% off", price: 179 },
          { name: "Pro discount pack", description: "Studio rental discount pack, 20% off", price: 299 },
          { name: "Volume discount pack", description: "Studio rental discount pack, 23% off", price: 499 },
        ]}
      />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Pricing"
          title="All Pricing at a Glance"
          description="Studio rental from €12 an hour, personal training from €299 per 4 weeks, Open Gym from €29 per 4 weeks."
        />
        <FadeIn>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {trustChipsEN.map((chip) => (
              <div
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                <chip.icon className="h-4 w-4 text-primary" />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        {/* Jump nav — let trainers go straight to studio rental */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <a
              href="#studio-rental"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/20"
            >
              Studio Rental (from €12/hr)
            </a>
            <a
              href="#personal-training"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              Personal Training (from €299)
            </a>
            <a
              href="#open-gym"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              Open Gym (from €29/4wk)
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Personal Training */}
      <Section bg="muted" id="personal-training">
        <SectionHeader
          overline="Personal Training"
          title="Train with a Personal Trainer"
          description="Free intro session. Trainers set their own rates. You pay your trainer directly."
        />

        <FadeIn>
          <Card className="mx-auto max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-2xl">From €299 / 4 weeks</CardTitle>
              <CardDescription>Unlimited Open Gym included. Trainers set their own rate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                First intro always free. The price your trainer quotes you pay directly, no middleman.
              </p>
              {/* 2026-09-22: the duo transformation was published on the finder page
                  and nowhere else, not even here, on the page whose job is to say
                  what things cost. Same offer, same wording, no new price. */}
              <p className="text-sm text-muted-foreground">
                Training with a partner? Duo transformation from €199 p.p. per 4 weeks (for two, €399 total).
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <ButtonLink href="/en/find-personal-trainer" size="lg">
                View trainers
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
            </CardFooter>
          </Card>
        </FadeIn>
      </Section>

      {/* Open Gym */}
      <Section id="open-gym">
        <SectionHeader
          overline="Open Gym"
          title="Train Independently"
          description="Single session or 4-week membership. 60-minute sessions in our private studio."
        />

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {openGymPlans.map((plan, i) => (
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
                    {plan.priceOld && (
                      <span className="sc-price-old text-lg">
                        {plan.priceOld}
                      </span>
                    )}{" "}
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
                  {plan.blurb && (
                    <p className="mt-2 text-xs text-primary">{plan.blurb}</p>
                  )}
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

        <FadeIn delay={0.4} className="mt-6 flex justify-center">
          <ButtonLink href="/en/open-gym" variant="outline" size="lg">
            Book Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section>
        <FadeIn>
          <Card className="mx-auto max-w-2xl text-center">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm font-medium">
                {siteConfig.rating.value.toFixed(1)}★ on Google{siteConfig.rating.count ? ` · based on ${siteConfig.rating.count} reviews` : ""}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <a href={siteConfig.google} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">Read the reviews on Google</a>
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </Section>

      {/* Studio Rental */}
      <Section bg="muted" id="studio-rental">
        <SectionHeader
          overline="Studio Rental"
          title="Rent the Studio (for personal trainers)"
          description="For freelance trainers and physiotherapists. Train your clients in a fully equipped private studio. Your own rates and clients, flexible by the hour, discount packs up to 23%."
        />

        {/* Rate table */}
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Space</th>
                    <th className="px-4 py-3 text-center font-medium">60 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Half studio (1:1)</td>
                    <td className="px-4 py-3 text-center font-semibold">€12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full studio (small group)</td>
                    <td className="px-4 py-3 text-center font-semibold">€17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        {/* Discount packages */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <Badge className="mx-auto mb-2 invisible" aria-hidden="true">Most popular</Badge>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">€99</span>
                </p>
                <p className="text-3xl font-bold">€89</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 10%</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">≈ 8 half / 6 full studio sessions</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink href={acuityPackages.studio.starter} size="lg" className="w-full">
                  Buy Starter
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Most popular</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">€210</span>
                </p>
                <p className="text-3xl font-bold">€179</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 15%</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">≈ 17 half / 12 full studio sessions</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink href={acuityPackages.studio.routine} size="lg" className="w-full">
                  Buy Routine
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full text-center">
              <CardHeader>
                <Badge className="mx-auto mb-2 invisible" aria-hidden="true">Most popular</Badge>
                <CardTitle className="text-xl">Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">€375</span>
                </p>
                <p className="text-3xl font-bold">€299</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 20%</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">≈ 31 half / 22 full studio sessions</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink href={acuityPackages.studio.pro} size="lg" className="w-full">
                  Buy Pro
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full text-center">
              <CardHeader>
                <Badge className="mx-auto mb-2" variant="secondary">Best deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">€650</span>
                </p>
                <p className="text-3xl font-bold">€499</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 23%</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">≈ 54 half / 38 full studio sessions</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink href={acuityPackages.studio.volume} size="lg" className="w-full">
                  Buy Volume
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.28}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            A credit package is studio credit, the struck-through price is your credit. Sessions of 60 min: half studio (max 2) €12 · full studio €17. Your credit sets the number of sessions. Valid 1 year.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="h-4 w-4" />
            <span>Pay with CreditCard, Apple Pay, Google Pay or by invoice</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-6 flex justify-center">
          <ButtonLink href="/en/studio-rental" variant="outline" size="lg">
            Rent the studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* What's included */}
      <Section>
        <SectionHeader
          overline="Included"
          title="What Is Always Included"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section>
        <SectionHeader
          overline="Frequently asked questions"
          title="About Pricing & Payment"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto space-y-0">
            {[
              { q: "Do I need a membership?", a: "No. Open Gym works in 4-week cycles you can cancel anytime. Personal training is booked per session. Studio rental per hour or via a package. No long-term contract." },
              { q: "Can I always cancel?", a: "Yes, cancellation is always free. No time limit, no fees." },
              // V (2026-06-02) — pause/validity, model-correct (see NL prijzen).
              { q: "Can I pause?", a: "There's no membership to pause. Open Gym simply ends after each 4-week cycle, book the next one whenever suits you, at no cost. Personal training is booked per session, so 'pausing' just means not booking for a while." },
              { q: "How long is my studio package valid?", a: "Studio packages are valid for 1 year. Use your credit whenever it suits you, no rush, no expiry within the year." },
              { q: "How do I pay?", a: "Credit card, Apple Pay and Google Pay. Studio rental also accepts invoice. iDEAL via Apple Pay." },
              // U (2026-06-02) — business/reimbursement. See NL for accuracy notes.
              { q: "Can I pay via invoice or for business?", a: "Yes. Studio rental and packages can be invoiced, handy for freelance trainers (ZZP) and companies. Via the werkkostenregeling or a corporate-fitness scheme your employer may (partly) contribute; ask your employer." },
              { q: "Does my health insurance cover personal training?", a: "Sometimes partially: certain supplementary policies reimburse lifestyle or exercise coaching. Whether it applies in your case, check with your health insurer, we can provide an invoice in your name." },
              { q: "What if the trainer isn't right for me?", a: "The first intro is free and no-obligation. Not a match? No worries. You can always try a different trainer." },
              { q: "Are there hidden costs?", a: "No. The prices on this page are all-inclusive. No sign-up fee, no admin charges, no surprises." },
              { q: "How does the door code work?", a: "At midnight before your session you receive a unique door code via WhatsApp. No reception, no keys, walk straight in." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Intake guarantee */}
      <Section>
        <FadeIn>
          <Card className="mx-auto max-w-2xl">
            <CardContent className="flex flex-col items-center gap-4 pt-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">First intake is free</h3>
                <p className="text-sm text-muted-foreground">
                  Come in for a free intake first. Not a match with your trainer? No problem, no hard feelings.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Start with a free trial session or get in touch via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href={"/en/find-personal-trainer"} size="lg">
                Book Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/en/find-personal-trainer"
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                View trainers
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

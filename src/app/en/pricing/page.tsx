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
import { acuityLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import {
  CreditCard,
  ArrowRight,
  XCircle,
  Key,
  Handshake,
  Dumbbell,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Personal Training, Open Gym & Studio Rental | SculptClub Amsterdam Jordaan",
  description:
    "Overview of all pricing at SculptClub Amsterdam. Personal training from \u20ac45, Open Gym from \u20ac29/4wk, studio rental from \u20ac12/hour. No contract, no obligations.",
  alternates: {
    canonical: "/en/pricing",
    languages: {
      nl: "/nl/prijzen",
      en: "/en/pricing",
    },
  },
};

const openGymPlans = [
  {
    name: "Starter Plan",
    sessions: "4 sessions",
    price: "\u20ac29",
    period: "/ 4 weeks",
    perSession: "\u20ac7.25 / session",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Popular",
    sessions: "8 sessions",
    price: "\u20ac49",
    period: "/ 4 weeks",
    perSession: "\u20ac6.13 / session",
    badge: "Most chosen",
    link: acuityLinks.openGymPlans.populair,
  },
  {
    name: "Intensive",
    sessions: "12 sessions",
    price: "\u20ac69",
    period: "/ 4 weeks",
    perSession: "\u20ac5.75 / session",
    badge: null,
    link: acuityLinks.openGymPlans.intensief,
  },
  {
    name: "Unlimited",
    sessions: "Unlimited",
    price: "\u20ac89",
    period: "/ 4 weeks",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymPlans.onbeperkt,
  },
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
    description: "You receive your unique access code the night before.",
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
        description="Personal training in a private studio in Amsterdam Jordaan. Free intro session, trainers from €45/session, 0% commission."
        url="/en/pricing"
        priceRange="From €45/session"
      />
      <ServiceJsonLd
        name="Open Gym"
        description="Independent training in a private studio in Amsterdam Jordaan. 60-minute sessions, max 3 people. From €29/4 weeks."
        url="/en/pricing"
        priceRange="€29–€89/4 weeks"
      />
      <ServiceJsonLd
        name="Studio Rental"
        description="Rent a fully equipped personal training studio in Amsterdam Jordaan. From €12/hour, discount packages up to 23% off."
        url="/en/pricing"
        priceRange="From €12/hour"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Memberships"
        description="Independent training in a private studio in Amsterdam Jordaan. 60-minute sessions, max 3 people."
        url="/en/pricing"
        recurring
        offers={[
          { name: "Starter Plan — 4 sessions", description: "4 sessions per 4 weeks, €7.25 per session", price: 29 },
          { name: "Popular — 8 sessions", description: "8 sessions per 4 weeks, €6.13 per session", price: 49 },
          { name: "Intensive — 12 sessions", description: "12 sessions per 4 weeks, €5.75 per session", price: 69 },
          { name: "Unlimited", description: "Unlimited training per 4 weeks", price: 89 },
        ]}
      />
      <OfferCatalogJsonLd
        catalogName="Studio Rental Rates"
        description="Rent a fully equipped personal training studio in Amsterdam Jordaan."
        url="/en/pricing"
        offers={[
          { name: "Half studio — 60 min", description: "Half studio rental, 60 minutes", price: 12 },
          { name: "Half studio — 90 min", description: "Half studio rental, 90 minutes", price: 17 },
          { name: "Full studio — 60 min", description: "Full studio rental, 60 minutes", price: 17 },
          { name: "Full studio — 90 min", description: "Full studio rental, 90 minutes", price: 24 },
        ]}
      />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Pricing"
          title="All Pricing at a Glance"
          description="No hidden costs, no long-term contracts. View all rates for personal training, Open Gym and studio rental."
        />
      </Section>

      {/* Personal Training */}
      <Section bg="muted">
        <SectionHeader
          overline="Personal Training"
          title="Train with a Personal Trainer"
          description="Free intro session. Trainers set their own rates. 0% commission."
        />

        <FadeIn>
          <Card className="mx-auto max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-2xl">From &euro;45 / session</CardTitle>
              <CardDescription>Trainers set their own rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                First intro always free. 0% commission &mdash; the price your trainer quotes is what you pay.
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
      <Section>
        <SectionHeader
          overline="Open Gym"
          title="4-Week Memberships"
          description="Train independently in our private studio. 60-minute sessions, max. 3 people."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <FadeIn delay={0.4} className="mt-6 flex justify-center">
          <ButtonLink href="/en/open-gym" variant="outline" size="lg">
            Book Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Studio Rental */}
      <Section bg="muted">
        <SectionHeader
          overline="Studio Rental"
          title="Rent the Studio"
          description="Train your clients in a fully equipped private studio. Flexible by the hour."
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
                    <th className="px-4 py-3 text-center font-medium">90 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Half studio (1:1)</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;12</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;17</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full studio (max 6)</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;17</td>
                    <td className="px-4 py-3 text-center font-semibold">&euro;24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        {/* Discount packages */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;99</span>
                </p>
                <p className="text-3xl font-bold">&euro;89</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 10%</span>
                </p>
              </CardContent>
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
                  <span className="sc-price-old">&euro;234</span>
                </p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 15%</span>
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Best deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  <span className="sc-price-old">&euro;713</span>
                </p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm">
                  <span className="sc-discount">Save 23%</span>
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

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
              <ButtonLink href={acuityLinks.generic} size="lg">
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

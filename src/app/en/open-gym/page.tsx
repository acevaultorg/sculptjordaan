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
import { acuityLinks } from "@/config/acuity";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import { Clock, Key, Dumbbell, Info } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Open Gym — Train Independently in a Private Studio | SculptClub Amsterdam Jordaan" },
  description:
    "Book 60-minute sessions in a quiet, fully equipped private studio in the Jordaan. Max. 3 people per slot. Membership from \u20ac29 per 4 weeks.",
  alternates: {
    canonical: "/en/open-gym",
    languages: {
      nl: "/nl/open-gym",
      en: "/en/open-gym",
    },
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
    name: "Popular",
    sessions: "8 sessions",
    frequency: "2x / week",
    tagline: "Regular training without too much pressure",
    price: "\u20ac49",
    period: "/ 4 weeks",
    perSession: "\u20ac6.13 / session",
    badge: "Most popular",
    link: acuityLinks.openGymPlans.populair,
  },
  {
    name: "Intensive",
    sessions: "12 sessions",
    frequency: "3x / week",
    tagline: "Achieve serious results",
    price: "\u20ac69",
    period: "/ 4 weeks",
    perSession: "\u20ac5.75 / session",
    badge: null,
    link: acuityLinks.openGymPlans.intensief,
  },
  {
    name: "Unlimited",
    sessions: "Unlimited",
    frequency: "Unlimited",
    tagline: "Maximum freedom and flexibility",
    price: "\u20ac89",
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

const studioImages = [
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press on bench at SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang on pull-up bar at SculptClub" },
  { src: "/images/studio/training-dumbbells-focus.jpg", alt: "Focused dumbbell training at SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Full back room with sled, Rogue rack and bench at SculptClub" },
];

const faqs = [
  {
    q: "What exactly is Open Gym?",
    a: "Open Gym gives you access to our private studio to train independently. You book a time slot, receive a door code, and have the full space and equipment to yourself.",
  },
  {
    q: "What equipment is available?",
    a: "The studio is fully equipped with a power rack, adjustable bench, dumbbells, cable machine, cardio equipment and more. Everything you need for a complete workout.",
  },
  {
    q: "How long is a session?",
    a: "Each Open Gym session lasts 60 minutes. You can book consecutive sessions if you want to train longer.",
  },
  {
    q: "Can I bring a friend?",
    a: "Up to 3 people can be in the studio at the same time. Want to train together? Check out our studio rental options for small group training.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel or reschedule anytime via the booking system — always free, no exceptions.",
  },
  {
    q: "Is it really a membership?",
    a: "Yes, Open Gym works with a membership per 4 weeks. You choose a plan that fits you and can cancel at any time. No long-term contract.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function OpenGymPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Open Gym","url":"/en/open-gym"}]} />
      <ServiceJsonLd
        name="Open Gym"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions, max 3 people at a time."
        url="/en/open-gym"
        priceRange="€29 - €89 per 4 weeks"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Memberships"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions."
        url="/en/open-gym"
        recurring
        offers={[
          { name: "Starter Plan — 4 sessions", description: "4 sessions per 4 weeks, €7.25 per session", price: 29 },
          { name: "Popular — 8 sessions", description: "8 sessions per 4 weeks, €6.13 per session", price: 49 },
          { name: "Intensive — 12 sessions", description: "12 sessions per 4 weeks, €5.75 per session", price: 69 },
          { name: "Unlimited", description: "Unlimited training per 4 weeks", price: 89 },
        ]}
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Open Gym"
          title="Open Gym in a Private Studio"
          description="Book 60-minute sessions in a quiet, fully equipped studio in the Jordaan. Max. 3 people per slot."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Book free trial session
          </ButtonLink>
          <ButtonLink href={acuityLinks.openGymBook} size="lg" variant="outline">
            Already a member? Reserve your hour
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              Most members start with 2x per week
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              <span>60-minute sessions. For 1 person.</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          overline="Membership"
          title="Choose Your Plan"
          description="All plans run per 4 weeks. No long-term contract."
        />

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

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Ready to start?"
          title="Choose Your Membership"
          description="Choose a membership if you are new, or reserve directly if you are already a member."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink
            href={acuityLinks.openGymPlans.populair}
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

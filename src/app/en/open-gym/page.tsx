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
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks } from "@/config/acuity";
import { Clock, Key, Dumbbell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Gym — Train Independently | SculptClub Amsterdam Jordaan",
  description:
    "Train independently in a private studio in the Jordaan. Book a time slot, get your door code and train your way. From \u20AC29 per 4 weeks.",
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
    name: "Starter Plan",
    frequency: "1x / week",
    price: "\u20AC29",
    period: "/ 4 weeks",
    perSession: "\u20AC7.25 / session",
    badge: null,
  },
  {
    name: "Popular",
    frequency: "2x / week",
    price: "\u20AC49",
    period: "/ 4 weeks",
    perSession: "\u20AC6.13 / session",
    badge: "Most popular",
  },
  {
    name: "Intensive",
    frequency: "3x / week",
    price: "\u20AC69",
    period: "/ 4 weeks",
    perSession: "\u20AC5.75 / session",
    badge: null,
  },
  {
    name: "Unlimited",
    frequency: "Unlimited",
    price: "\u20AC89",
    period: "/ 4 weeks",
    perSession: null,
    badge: null,
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
    a: "Open Gym sessions are individual. Want to train together? Check out our studio rental options for small group training.",
  },
  {
    q: "What if I need to cancel?",
    a: "You can cancel free of charge up to 12 hours before your session via the booking system. Late cancellations will be deducted from your credit.",
  },
];

export default function OpenGymPageEN() {
  return (
    <PageLayout>
      {/* Hero */}
      <Section>
        <SectionHeader
          overline="Open Gym"
          title="Train Independently"
          description="Open Gym in a private studio. No crowds, no waiting. Book a time slot and train your way with professional equipment."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink href={acuityLinks.openGym} size="lg">
            Book Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section bg="muted">
        <SectionHeader
          overline="Pricing"
          title="Choose Your Plan"
          description="All plans are per 4 weeks. No contract, no commitments."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`h-full text-center ${plan.badge ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge className="mx-auto mb-2">{plan.badge}</Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.frequency}</CardDescription>
                </CardHeader>
                <CardContent>
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
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 flex justify-center">
          <ButtonLink href={acuityLinks.openGym} size="lg">
            Book Open Gym
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
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
    </PageLayout>
  );
}

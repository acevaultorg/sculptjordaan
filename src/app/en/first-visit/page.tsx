import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Dumbbell,
  Building2,
  Users,
  Shirt,
  Droplets,
  Footprints,
  Bike,
  Train,
  ParkingCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "First Visit — SculptClub Amsterdam Jordaan",
  description:
    "Everything you need to know for your first visit to SculptClub. Step-by-step guide, what to bring, how to get here, and frequently asked questions.",
  alternates: {
    canonical: "/en/first-visit",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Book your session",
    description:
      "Pick a time slot on our website or send a WhatsApp. You get a confirmation right away. The evening before, you receive your door code via WhatsApp.",
    cta: {
      label: "Book now",
      href: acuityLinks.generic,
      external: true,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Walk in",
    description:
      "Egelantiersgracht 424, Jordaan. Enter your door code and let yourself in. No reception, no queue. Changing area is right there. Arrive 5 minutes early.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Train",
    description:
      "Your trainer is ready, or you train solo via Open Gym. The studio is fully private during your session. All equipment is available. Cancellation is always free.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportswear", detail: "Comfortable clothing that allows free movement" },
  { icon: Droplets, label: "Towel & water bottle", detail: "Water is also available in the studio" },
  { icon: Footprints, label: "Indoor sports shoes", detail: "Clean shoes with a flat sole are ideal" },
];

const faqs = [
  {
    q: "Do I need to be fit to start?",
    a: "Absolutely not. Our trainers work with people of every level, from complete beginners to advanced athletes. Your trainer will fully adapt the session to your current level and goals. There is no threshold — everyone is welcome.",
  },
  {
    q: "How long is a session?",
    a: "A personal training session typically lasts 45 to 60 minutes, depending on your trainer. Open Gym sessions are always 60 minutes. We recommend arriving 5 minutes early so you can start at a relaxed pace.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes, you can always cancel or reschedule for free via the booking system.",
  },
  {
    q: "What if I cannot find the studio?",
    a: "The evening before your session, you will receive a WhatsApp with the exact address, directions, and your personal door code. Still having trouble? Send us a WhatsApp and we will guide you.",
  },
];

export default function FirstVisitPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"First Visit","url":"/en/first-visit"}]} />

      <Section>
        <SectionHeader
          as="h1"
          overline="First visit"
          title="Your first time at SculptClub"
          description="No sign-up forms. No obligations. Here is exactly what to expect."
        />
      </Section>

      {/* 3 Service Options */}
      <Section bg="muted">
        <SectionHeader
          overline="Choose your training"
          title="What would you like to do?"
          description="Three ways to train at SculptClub. Each starts with a free first session."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/30">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Personal Training</CardTitle>
                <CardDescription>1-on-1 with a trainer who fits your goals. First intro always free.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/en/find-personal-trainer" size="lg" className="w-full">Browse trainers</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/30">
                  <Dumbbell className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle>Open Gym</CardTitle>
                <CardDescription>Train independently in a private studio. Max 3 people. From €29/4 weeks.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/en/open-gym" variant="outline" size="lg" className="w-full">More info</ButtonLink>
                <ButtonLink href={acuityLinks.openGymTrial} size="lg" className="w-full">Free trial</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/30">
                  <Building2 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Studio Rental</CardTitle>
                <CardDescription>For trainers. Rent by the hour for your clients. From €12/hour, 0% commission.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/en/studio-rental" variant="outline" size="lg" className="w-full">More info</ButtonLink>
                <ButtonLink href={acuityLinks.studioTrial} size="lg" className="w-full">Free tour</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <SectionHeader
          overline="What to expect"
          title="A step-by-step walkthrough"
        />
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-brand" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4">
                      <ButtonLink
                        href={step.cta.href}
                        external={step.cta.external}
                        variant="outline"
                        className="rounded-xl"
                      >
                        {step.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">For personal training: the first intro is always free</p>
                <p className="text-sm text-muted-foreground mt-1">
                  You discuss your goals, experience, and any limitations. Your trainer designs an approach that fits.
                  No commitment — you decide afterwards if you want to continue.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* What to Bring */}
      <Section>
        <SectionHeader
          overline="Checklist"
          title="What to bring"
          description="You do not need much. Here is everything you need:"
        />
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {bringItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            A changing area is available in the studio. Showers are not available, but most sessions are timed so you can
            head straight home or to work afterwards.
          </p>
        </FadeIn>
      </Section>

      {/* Transport / Parking */}
      <Section bg="muted">
        <SectionHeader
          overline="Getting here"
          title="How to get to SculptClub"
        />
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">By bike</h3>
                <p className="text-xs text-muted-foreground">
                  Bike racks right outside the door on the Egelantiersgracht. The Jordaan is best reached by bike.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Train className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">Public transport</h3>
                <p className="text-xs text-muted-foreground">
                  Tram 13 and 17 stop at Westermarkt (3 min walk). Metro 52 stops at Vijzelgracht station (10 min walk).
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <ParkingCircle className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">By car</h3>
                <p className="text-xs text-muted-foreground">
                  Paid street parking in the Jordaan. Nearest parking garage: Europarking, Marnixstraat 250 (5 min walk).
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-1">
                {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                {siteConfig.address.city}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Open {siteConfig.hours.toLowerCase()}
              </p>
              <a
                href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
              >
                View on Google Maps
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="Frequently asked questions"
          title="Still have questions?"
          description="Here are answers to the most common questions about your first visit."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
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

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Book your first session
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Book your first session or send us a WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="/en/book"
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book your first session
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

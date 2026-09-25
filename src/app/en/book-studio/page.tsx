import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, acuityPackages, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { RentalTabs } from "@/components/marketing/rental-tabs";
import { PhotoSlideshow } from "@/components/marketing/photo-slideshow";
import { StudioRateTable } from "@/components/marketing/studio-rate-table";
import { WeekendAvailability } from "@/components/marketing/weekend-availability";
import { MessageCircle, CreditCard, Eye, Key, Repeat, ArrowRight, Receipt, Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Book the Studio: Private Training Space | SculptClub" },
  description:
    "Rent a private studio in the Jordaan. From €12/hour — your clients, your rates, no contract, free cancellation anytime. Discount packages up to 23% off.",
  alternates: {
    canonical: "/en/book-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/book-studio",
    title: "Book the Studio: Private Training Space | SculptClub",
    description:
      "Rent a private studio in the Jordaan. From €12/hour — your clients, your rates, no contract, free cancellation anytime. Discount packages up to 23% off.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book the Studio: Private Training Space | SculptClub",
    description:
      "Rent a private studio in the Jordaan. From €12/hour — your clients, your rates, no contract, free cancellation anytime. Discount packages up to 23% off.",
  },
};

const steps = [
  {
    icon: Eye,
    title: "See the studio",
    description: "Book a free trial session and test the space and equipment yourself.",
  },
  {
    icon: Key,
    title: "Get your door code",
    description: "Book by the hour through the system. You'll receive your own code via WhatsApp.",
  },
  {
    icon: Repeat,
    title: "Train your clients",
    description: "Use the studio whenever it suits you. Flexible, no fixed contract.",
  },
];

const studioImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Full overview of the SculptClub private studio in the Jordaan" },
  { src: "/images/studio/training-barbell-squat.jpg", alt: "Barbell squat in the Rogue power rack at SculptClub" },
  { src: "/images/studio/training-squat-cinematic.jpg", alt: "Private squat rack in the SculptClub studio" },
  { src: "/images/studio/training-bike-energy.jpg", alt: "High-energy assault bike training at SculptClub" },
  { src: "/images/studio/training-dumbbells-focus.jpg", alt: "Dumbbell training in the SculptClub studio" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Barbell training under the skylight at SculptClub" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal training session at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Canal view from inside the SculptClub studio" },
  { src: "/images/studio/entrance-smile.jpg", alt: "Welcoming entrance of SculptClub at an Amsterdam canal house" },
  { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub facade on Egelantiersgracht in the Jordaan" },
];

const faqs = [
  {
    q: "What's included in studio rental?",
    a: "All equipment, wifi, music, climate control and cleaning. The studio is fully private during your rental time.",
  },
  {
    q: "Can I try the studio first?",
    a: "Yes, book a free trial session. See the space, test the equipment — no obligation.",
  },
  {
    q: "Do I need insurance?",
    a: "Yes, as a freelance trainer or physiotherapist you need valid professional liability insurance.",
  },
  {
    q: "How long are packages valid?",
    a: "All discount packages are valid for 1 year. You choose when to use them.",
  },
  {
    q: "Can I pay by invoice?",
    a: "Yes. Studio rental can be paid with CreditCard, Apple Pay, Google Pay or by invoice.",
  },
  {
    q: "How does the door code work?",
    a: "At midnight before your session you receive a door code via WhatsApp. You can enter the studio yourself — no reception.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookStudioPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Book Studio", url: "/en/book-studio" },
        ]}
      />
      <ServiceJsonLd
        name="Studio Rental"
        description="Rent a private personal training studio in the Jordaan, Amsterdam."
        url="/en/book-studio"
        priceRange="From €12 per hour"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* ═══ ABOVE THE FOLD: Hero + Tabs (Packages default · Hourly secondary) ═══ */}
      <Section>
        <div className="mb-4 text-center sm:mb-6">
          <p className="overline text-primary">For Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Book the Studio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            From €12/hour · Full freedom · Free cancellation · Daily 06:00–22:00
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Weekends cost the same. Sundays and Saturday afternoons are usually still free.
          </p>
          <WeekendAvailability locale="en" kind="studio" className="mt-1 text-sm text-muted-foreground" />
        </div>

        <RentalTabs
          locale="en"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Buy a multi-pass and save. Valid for 1 year.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge aria-hidden className="invisible mx-auto mb-2">placeholder</Badge>
                    <CardTitle className="text-xl">Starter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€99</p>
                    <p className="text-3xl font-bold">€89</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 10%</p>
                    <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
                      Buy Starter
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Starter", 99, 89, "en")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=book_studio_invoice_starter"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Pay by invoice
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center ring-2 ring-primary">
                  <CardHeader>
                    <Badge className="mx-auto mb-2">Most popular</Badge>
                    <CardTitle className="text-xl">Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€210</p>
                    <p className="text-3xl font-bold">€179</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 15%</p>
                    <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
                      Buy Routine
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Routine", 210, 179, "en")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=book_studio_invoice_routine"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Pay by invoice
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge aria-hidden className="invisible mx-auto mb-2">placeholder</Badge>
                    <CardTitle className="text-xl">Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€375</p>
                    <p className="text-3xl font-bold">€299</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 20%</p>
                    <ButtonLink href={acuityPackages.studio.pro} size="lg" className="mt-4 w-full">
                      Buy Pro
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Pro", 375, 299, "en")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=book_studio_invoice_pro"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Pay by invoice
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge className="mx-auto mb-2" variant="secondary">Best deal</Badge>
                    <CardTitle className="text-xl">Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€650</p>
                    <p className="text-3xl font-bold">€499</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 23%</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Buy Volume
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Volume", 650, 499, "en")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=book_studio_invoice_volume"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Pay by invoice
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Always free cancellation", "No contract", "Full freedom", "Instantly confirmed"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 flex-shrink-0 text-discount" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Lowest rate: <span className="text-discount font-medium">€9.24/session</span> · Prefer bank transfer?{" "}
                <a href={whatsappLinks.bankTransferEn} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                  WhatsApp us
                </a>
              </p>
            </div>
          }
          hourly={
            <div className="mx-auto max-w-3xl">
              <StudioRateTable
                headSpace="Space"
                headDuration="60 min"
                cta="Book"
                rows={[
                  { label: "Half studio (max 2)", price: "€12", href: acuityLinks.halfStudio60 },
                  { label: "Full studio (small group)", note: "1 to 8 people", price: "€17", href: acuityLinks.fullStudio60 },
                ]}
              />
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                <span>Pick your time and pay securely with CreditCard, Apple Pay, Google Pay or invoice</span>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Book per session. No subscription, no contract,{" "}
                <strong className="text-foreground">free cancellation anytime</strong> — credits come back instantly, card payments for single sessions are refunded automatically within a few days.{" "}
                <strong className="text-foreground">Half studio</strong> = 1-on-1 sessions (max 2 people; the other half can be used by another trainer or Open Gym at the same time).{" "}
                <strong className="text-foreground">Full studio</strong> = fully private for 1 to 8 people, your own group.
              </p>
            </div>
          }
        />
      </Section>

      {/* Indecisive-capture: low-friction WhatsApp before booking commitment */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Not sure which option?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp us your situation — we usually advise within 1 hour.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioEn}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=book_studio_uncertain_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader overline="How it works" title="Get Started in 3 Steps" />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio gallery */}
      <Section bg="muted">
        <SectionHeader overline="The studio" title="See the Space" />
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <PhotoSlideshow images={studioImages} aspect="aspect-[4/3]" />
          </div>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section>
        <SectionHeader overline="Trainers about SculptClub" title="What Fellow Trainers Say" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                “Finally a studio where I can train my clients in peace. Great equipment, beautiful location, no hassle.”
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Personal trainer</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                “I rent here weekly. My clients love the calm and privacy. Booking system works smoothly.”
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Physiotherapist</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader overline="Common questions" title="Got a Question?" />
        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent><p>{faq.a}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book a studio session directly or get in touch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.fullStudio60} size="lg">
                Book studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.studioEn} variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent" external>
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

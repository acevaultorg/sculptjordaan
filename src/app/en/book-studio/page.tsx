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
import { MessageCircle, ArrowRight, CreditCard, Eye, Key, Repeat } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book the Studio — Private Training Space | SculptClub Amsterdam",
  description:
    "Rent a fully equipped private studio in the Jordaan. From €12/hour, no contract, free trial session. Professional equipment, flexible by the hour.",
  alternates: {
    canonical: "/en/book-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
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
  { src: "/images/studio/studio-overview.jpeg", alt: "SculptClub private studio overview" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "SculptClub studio interior" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
];

const faqs = [
  {
    q: "What's included in studio rental?",
    a: "All equipment, wifi, music, climate control and cleaning. The studio is fully private during your rental time.",
  },
  {
    q: "How does booking work?",
    a: "You book online through the booking system. The evening before your session you receive a door code via WhatsApp to enter the studio.",
  },
  {
    q: "Can I try the studio first?",
    a: "Yes, book a free trial session. See the space, test the equipment — no obligation.",
  },
  {
    q: "Do I need insurance?",
    a: "Yes, as a freelance trainer or physiotherapist you need valid professional liability insurance. This is your own responsibility.",
  },
  {
    q: "How long are packages valid?",
    a: "All discount packages are valid for 1 year. You choose when to use them.",
  },
  {
    q: "Can I pay by invoice?",
    a: "Yes. Studio rental can be paid with CreditCard, Apple Pay, Google Pay or by invoice.",
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
        description="Rent a private personal training studio in the Jordaan, Amsterdam. Professional equipment, flexible by the hour."
        url="/en/book-studio"
        priceRange="From €12 per hour"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* Hero — short, drives to pricing */}
      <Section>
        <SectionHeader
          as="h1"
          overline="For Personal Trainers"
          title="Book the Studio"
          description="Rent a fully equipped private studio by the hour. No contract, no commission — 100% of your revenue is yours."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href="#pricing" size="xl">
            View rates & book directly
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={acuityLinks.studioTrial} size="lg" variant="outline">
            Free trial session
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              From €12/hour · 0% commission · No contract
            </p>
            <p className="text-sm text-muted-foreground">
              Daily 06:30 – 22:00 · Free trial · Most trainers rent weekly
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ PRICING TABLE ═══ */}
      <Section id="pricing">
        <SectionHeader
          overline="Rates"
          title="Hourly Rates"
          description="Book directly per session. No membership required."
        />

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
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;12</span>
                      <ButtonLink href={acuityLinks.halfStudio60} size="sm" className="ml-3">
                        Book
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink href={acuityLinks.halfStudio90} size="sm" className="ml-3">
                        Book
                      </ButtonLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full studio (max 6)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink href={acuityLinks.fullStudio60} size="sm" className="ml-3">
                        Book
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;24</span>
                      <ButtonLink href={acuityLinks.fullStudio90} size="sm" className="ml-3">
                        Book
                      </ButtonLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Pay with CreditCard, Apple Pay, Google Pay or by invoice</span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ DISCOUNT PACKAGES ═══ */}
      <Section bg="muted">
        <SectionHeader
          overline="Discount Packages"
          title="Train More, Save More"
          description="Buy a multi-pass and save on every session. Packages valid for 1 year."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">&euro;99</p>
                <p className="text-3xl font-bold">&euro;89</p>
                <p className="mt-2 text-sm text-discount font-medium">Save 10%</p>
                <ButtonLink href={acuityPackages.studio.starter} size="sm" className="mt-4">
                  Buy Starter
                </ButtonLink>
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
                <p className="text-sm text-muted-foreground line-through">&euro;234</p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm text-discount font-medium">Save 15%</p>
                <ButtonLink href={acuityPackages.studio.routine} size="sm" className="mt-4">
                  Buy Routine
                </ButtonLink>
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
                <p className="text-sm text-muted-foreground line-through">&euro;713</p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm text-discount font-medium">Save 23%</p>
                <ButtonLink href={acuityPackages.studio.volume} size="sm" className="mt-4">
                  Buy Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Valid 1 year. Lowest effective rate:{" "}
            <span className="text-discount font-medium">&euro;9.24/session</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Prefer bank transfer?{" "}
            <a
              href={whatsappLinks.bankTransferEn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Send us a WhatsApp
            </a>
          </p>
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
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section>
        <SectionHeader overline="Trainers about SculptClub" title="What Fellow Trainers Say" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Finally a studio where I can train my clients in peace.
                Great equipment, beautiful location, no hassle with subscriptions.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Personal trainer, SculptClub</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;I rent here weekly now. My clients love the calm and privacy.
                The booking system works smoothly and the door code is always on time.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Physiotherapist, SculptClub</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to train your clients here?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Try the studio for free or book a session directly.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="#pricing" size="xl">
                Book a session
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.studioEn} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" external>
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

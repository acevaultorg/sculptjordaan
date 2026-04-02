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
import { MessageCircle, CreditCard, Eye, Key, Repeat } from "lucide-react";
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
    a: "The evening before your session you receive a door code via WhatsApp. You can enter the studio yourself — no reception.",
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

      {/* ═══ ABOVE THE FOLD: Hero + Pricing Table in one view ═══ */}
      <Section>
        <div className="mb-2 text-center">
          <p className="overline text-primary">For Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Book the Studio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            From €12/hour · 0% commission · No contract · Daily 06:30–22:00
          </p>
        </div>

        {/* Pricing table — visible without scrolling */}
        <div className="mx-auto mt-6 max-w-3xl">
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
                    <ButtonLink href={acuityLinks.halfStudio60} size="sm" className="ml-2">
                      Book
                    </ButtonLink>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;17</span>
                    <ButtonLink href={acuityLinks.halfStudio90} size="sm" className="ml-2">
                      Book
                    </ButtonLink>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Full studio (max 6)</td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;17</span>
                    <ButtonLink href={acuityLinks.fullStudio60} size="sm" className="ml-2">
                      Book
                    </ButtonLink>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;24</span>
                    <ButtonLink href={acuityLinks.fullStudio90} size="sm" className="ml-2">
                      Book
                    </ButtonLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CreditCard className="h-3.5 w-3.5" />
            <span>CreditCard, Apple Pay, Google Pay or invoice</span>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-4 flex justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="sm" variant="outline">
            Try the studio first? Free trial session
          </ButtonLink>
        </div>
      </Section>

      {/* ═══ DISCOUNT PACKAGES ═══ */}
      <Section bg="muted">
        <SectionHeader
          overline="Discount Packages"
          title="Train More, Save More"
          description="Buy a multi-pass and save. Valid for 1 year."
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
                <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
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
                <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
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
                <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                  Buy Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Lowest rate: <span className="text-discount font-medium">&euro;9.24/session</span> · Prefer bank transfer?{" "}
            <a href={whatsappLinks.bankTransferEn} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
              WhatsApp us
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
                &ldquo;Finally a studio where I can train my clients in peace. Great equipment, beautiful location, no hassle.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Personal trainer</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;I rent here weekly. My clients love the calm and privacy. Booking system works smoothly.&rdquo;
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
              Scroll back up to book directly, or get in touch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={whatsappLinks.studioEn} size="lg" external>
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

import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { CheckCircle, MessageCircle, ArrowRight, Eye, Key, Repeat } from "lucide-react";
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

const benefits = [
  "Free trial session — see the studio with no obligation",
  "Half studio (1:1) from €12/hour, full studio (max 6) from €17/hour",
  "Professional equipment: power rack, cable machine, Concept2, dumbbells up to 40kg",
  "No contract, no commission — you keep 100% of your revenue",
  "Save 10-23% with a discount package (valid 1 year)",
  "Your own door code via WhatsApp — no reception, no waiting",
];

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
    description: "Use the studio whenever it suits you. Flexible, no fixed contract. Most trainers come back weekly.",
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
    q: "How much does it cost to rent the studio?",
    a: "Half studio (1:1) from €12 per 60 minutes. Full studio (max 6 people) from €17 per 60 minutes. Save 10-23% with a discount package.",
  },
  {
    q: "What equipment is available?",
    a: "Power rack, cable machine, Concept2 rower, adjustable bench, dumbbells up to 40kg, kettlebells, resistance bands and more. Everything for a complete session.",
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
    q: "What discount packages are available?",
    a: "Starter €89 (10% off), Routine €199 (15% off) and Volume €549 (23% off). Packages are valid for 1 year.",
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

      <Section>
        <SectionHeader
          as="h1"
          overline="For Personal Trainers"
          title="Book the Studio"
          description="Rent a fully equipped private studio by the hour. Available immediately, no fixed contract. Your clients, your space."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Book free trial session
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/studio-rental#pricing" size="lg" variant="outline">
            View pricing
          </ButtonLink>
        </FadeIn>
      </Section>

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

      <Section bg="muted">
        <SectionHeader
          overline="What you get"
          title="Fully Equipped Private Studio"
          description="Everything to train your clients professionally, without overhead."
        />
        <FadeIn>
          <div className="mx-auto max-w-lg">
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Book free trial session
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section>
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

      <Section bg="muted">
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

      <Section>
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

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to train your clients here?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">Try the studio for free. No obligation.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Book free trial session
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

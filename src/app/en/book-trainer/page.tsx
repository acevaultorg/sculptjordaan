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
import { CheckCircle, MessageCircle, ArrowRight, Calendar, Users, Dumbbell } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Personal Trainer — Free Introduction | SculptClub Amsterdam",
  description:
    "Book your free introduction with a personal trainer at SculptClub in the Jordaan. From €45/session, no membership, always free cancellation.",
  alternates: {
    canonical: "/en/book-trainer",
    languages: {
      nl: "/nl/boek-trainer",
      en: "/en/book-trainer",
    },
  },
};

const benefits = [
  "Free 30-minute introduction — no obligation",
  "Personal training plan based on your goals",
  "Private canal-side studio — just you and your trainer",
  "Professional equipment (Rogue, Concept2, cable machine)",
  "No membership, no contract — always free cancellation",
  "Door code via WhatsApp the evening before",
];

const steps = [
  {
    icon: Calendar,
    title: "Book your intro",
    description: "Choose a trainer and book your free 30-minute introduction.",
  },
  {
    icon: Users,
    title: "Meet your trainer",
    description: "Discuss your goals, level and schedule. Your trainer creates a personal plan.",
  },
  {
    icon: Dumbbell,
    title: "Start training",
    description: "Begin training in a private studio. Flexible booking, at your own pace.",
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub private studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "SculptClub training space overview" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Cardio equipment in SculptClub studio" },
];

const faqs = [
  {
    q: "How much does a session cost?",
    a: "From €45 per session. Each trainer sets their own rate. The first introduction is always free and no-obligation.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. No membership, no contract. You book per session and can always cancel for free. Stop whenever you want.",
  },
  {
    q: "Do I need experience?",
    a: "No. All trainers work with beginners to advanced athletes. During your free intro you'll discuss your level and goals.",
  },
  {
    q: "How long is a session?",
    a: "Depending on the trainer: 45 or 60 minutes. During your intro you'll decide together which duration suits you best.",
  },
  {
    q: "Where is the studio?",
    a: "Egelantiersgracht 424 in the Jordaan, Amsterdam. Ground floor, directly accessible from the street. You'll receive a door code via WhatsApp the evening before.",
  },
  {
    q: "How do I choose the right trainer?",
    a: "Browse trainer profiles on our trainers page and pick the coach that matches your goals. Not sure? Send a WhatsApp — we'll help you choose.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookTrainerPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Book Trainer", url: "/en/book-trainer" },
        ]}
      />
      <ServiceJsonLd
        name="Personal Training"
        description="Book a free introduction with a personal trainer at SculptClub in the Jordaan, Amsterdam."
        url="/en/book-trainer"
        priceRange="From €45 per session"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Training"
          title="Book Your Personal Trainer"
          description="Free 30-minute introduction. Choose your trainer and book directly — no commitment required."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Book free intro
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/find-personal-trainer" size="lg" variant="outline">
            Meet our trainers
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              ★ 5.0 on Google — 100% satisfied clients
            </p>
            <p className="text-sm text-muted-foreground">
              From €45/session · No membership · First intro free · Always free cancellation
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
          title="Personal Training from €45"
          description="Everything you need to get started with personal guidance."
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
          <ButtonLink href={acuityLinks.generic} size="lg">
            Book free intro
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="The Studio"
          title="Where You Train"
          description="A private studio on the Egelantiersgracht with professional equipment."
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Clients" title="What Clients Say" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;I felt comfortable from the start. No crowded gym, just a
                quiet studio with a trainer who actually listens. After 3 months I can
                already see a difference.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Personal attention without a membership. My trainer adjusts
                the schedule to fit my busy work week. Exactly what I was looking for.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to start?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book your free intro — we usually respond within an hour.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.generic} size="lg">
                Book free intro
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.en} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" external>
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

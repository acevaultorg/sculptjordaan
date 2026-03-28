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
import { CheckCircle, MessageCircle, ArrowRight, Clock, Key, Dumbbell } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Open Gym — Train Independently in a Private Studio | SculptClub Amsterdam",
  description:
    "Book an Open Gym session at SculptClub in the Jordaan. From €29/4 weeks, no membership required, private studio. Start with a free trial.",
  alternates: {
    canonical: "/en/book-gym",
    languages: {
      nl: "/nl/boek-gym",
      en: "/en/book-gym",
    },
  },
};

const benefits = [
  "Free trial session — try it with no obligation",
  "Private studio all to yourself — no waiting, no crowds",
  "Membership from €29 per 4 weeks (€7.25/session)",
  "Most popular: 2x/week for €49/4 weeks",
  "No long-term contract — cancel anytime",
  "Door code via WhatsApp, start right away",
];

const steps = [
  {
    icon: Clock,
    title: "Book a session",
    description: "Choose a time slot that suits you through the booking system.",
  },
  {
    icon: Key,
    title: "Get your door code",
    description: "You'll receive a unique code via WhatsApp to enter the studio.",
  },
  {
    icon: Dumbbell,
    title: "Train on your time",
    description: "Use the full studio with professional equipment, all to yourself.",
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub studio" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Assault bike in SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "SculptClub studio overview" },
];

const faqs = [
  {
    q: "How much does an Open Gym session cost?",
    a: "Membership from €29 per 4 weeks (1x/week). The most popular plan is 2x/week for €49. You can always upgrade or downgrade.",
  },
  {
    q: "Do I need a membership?",
    a: "It works with a 4-week membership, but you can cancel at any time. No long-term contract.",
  },
  {
    q: "Is it really just for me?",
    a: "Yes. You have the entire studio to yourself during your booked 60-minute time slot. No other gym-goers, no waiting.",
  },
  {
    q: "Can I bring a friend?",
    a: "Up to 3 people can train together in the studio. Want to train together? Check our studio rental options for small group training.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancelling or rescheduling is always free through the booking system.",
  },
  {
    q: "What equipment is available?",
    a: "Power rack, cable machine, Concept2 rower, dumbbells, adjustable bench, kettlebells, resistance bands and more. Everything for a complete workout.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookGymPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Book Open Gym", url: "/en/book-gym" },
        ]}
      />
      <ServiceJsonLd
        name="Open Gym"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions."
        url="/en/book-gym"
        priceRange="€29 - €89 per 4 weeks"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Open Gym"
          title="Book an Open Gym Session"
          description="Train independently in a private studio. Start with a free trial — no commitment required."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/open-gym" size="lg" variant="outline">
            View all plans
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              From €7.25/session · Private studio · No contract
            </p>
            <p className="text-sm text-muted-foreground">
              60-minute sessions · Daily 06:30 – 22:00 · Most members train 2x/week
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
          title="Train Independently in a Private Studio"
          description="No crowds, no waiting — just you and professional equipment."
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
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="The Studio"
          title="Fully Equipped"
          description="Power rack, dumbbells, cable machine, cardio and more."
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
        <SectionHeader overline="Members" title="What Members Say" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;No crowds, no waiting. I book an hour, do my workout and
                I&apos;m done. Exactly what I was looking for as an alternative to
                the packed gym.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;I&apos;ve been training here for 3 months, 2x a week. The focus
                and calm you get in a private studio is a real game changer. Never going
                back to a regular gym.&rdquo;
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to train?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book your free trial — you could start tomorrow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.openGymTrial} size="lg">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.openGymEn} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" external>
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

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
  title: "Boek een Personal Trainer — Gratis Kennismaking | SculptClub Amsterdam",
  description:
    "Boek je gratis kennismaking met een personal trainer bij SculptClub in de Jordaan. Vanaf €45/sessie, geen abonnement, altijd gratis annuleren.",
  alternates: {
    canonical: "/nl/boek-trainer",
    languages: {
      nl: "/nl/boek-trainer",
      en: "/en/book-trainer",
    },
  },
};

const benefits = [
  "Gratis intake van 30 minuten — vrijblijvend",
  "Persoonlijk trainingsplan op basis van jouw doel",
  "Privé studio aan de gracht — alleen jij en je trainer",
  "Professionele apparatuur (Rogue, Concept2, kabelmachine)",
  "Geen abonnement, geen contract — altijd gratis annuleren",
  "Deurcode via WhatsApp de avond ervoor",
];

const steps = [
  {
    icon: Calendar,
    title: "Plan je intake",
    description: "Kies een trainer en boek je gratis kennismaking van 30 minuten.",
  },
  {
    icon: Users,
    title: "Ontmoet je trainer",
    description: "Bespreek je doelen, niveau en schema. Je trainer stelt een persoonlijk plan op.",
  },
  {
    icon: Dumbbell,
    title: "Start met trainen",
    description: "Begin met trainen in een privé studio. Flexibel boeken, op jouw tempo.",
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub privé studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht SculptClub trainingsruimte" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Cardio apparatuur in SculptClub studio" },
];

const faqs = [
  {
    q: "Wat kost een sessie?",
    a: "Vanaf €45 per sessie. Elke trainer bepaalt zijn eigen tarief. De eerste kennismaking is altijd gratis en vrijblijvend.",
  },
  {
    q: "Zit ik ergens aan vast?",
    a: "Nee. Geen abonnement, geen contract. Je boekt per sessie en kunt altijd gratis annuleren. Stoppen wanneer je wilt.",
  },
  {
    q: "Heb ik ervaring nodig?",
    a: "Nee. Alle trainers werken met beginners tot gevorderden. Tijdens je gratis intake bespreek je jouw niveau en doelen.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Afhankelijk van de trainer: 45 of 60 minuten. Tijdens je intake bepaal je samen welke sessieduur bij je past.",
  },
  {
    q: "Waar is de studio?",
    a: "Egelantiersgracht 424 in de Jordaan, Amsterdam. Begane grond, direct vanaf de straat. Je krijgt een deurcode via WhatsApp de avond ervoor.",
  },
  {
    q: "Hoe kies ik de juiste trainer?",
    a: "Bekijk de profielen op onze trainers-pagina en kies de coach die bij jouw doel past. Twijfel je? Stuur een WhatsApp — we helpen je kiezen.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BoekTrainerPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Boek Trainer", url: "/nl/boek-trainer" },
        ]}
      />
      <ServiceJsonLd
        name="Personal Training"
        description="Boek een gratis kennismaking met een personal trainer bij SculptClub in de Jordaan, Amsterdam."
        url="/nl/boek-trainer"
        priceRange="Vanaf €45 per sessie"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Training"
          title="Boek je Personal Trainer"
          description="Gratis kennismaking van 30 minuten. Kies je trainer en plan direct — geen verplichtingen."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Plan gratis intake
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg" variant="outline">
            Bekijk onze trainers
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              ★ 5.0 op Google — alle klanten 100% tevreden
            </p>
            <p className="text-sm text-muted-foreground">
              Vanaf €45/sessie · Geen abonnement · Eerste intake gratis · Altijd gratis annuleren
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 Stappen aan de Slag"
        />
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

      {/* What you get */}
      <Section bg="muted">
        <SectionHeader
          overline="Wat je krijgt"
          title="Personal Training vanaf €45"
          description="Alles wat je nodig hebt om te starten met persoonlijke begeleiding."
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
            Plan gratis intake
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Studio gallery */}
      <Section>
        <SectionHeader
          overline="De Studio"
          title="Waar je Traint"
          description="Een privé studio aan de Egelantiersgracht met professionele apparatuur."
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

      {/* Social proof */}
      <Section bg="muted">
        <SectionHeader overline="Klanten" title="Wat Klanten Zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Ik voelde me direct op mijn gemak. Geen drukke sportschool, gewoon
                een rustige studio met een trainer die echt naar je luistert. Na 3 maanden
                zie ik al verschil.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Google Review, ★★★★★
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Persoonlijke aandacht zonder abonnement. Mijn trainer past het
                schema aan op mijn drukke werkweek. Precies wat ik zocht.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Google Review, ★★★★★
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Veelgestelde vragen" title="Heb je een Vraag?" />
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
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar om te beginnen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Plan je gratis intake — je hoort meestal binnen een uur.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.generic} size="lg">
                Plan gratis intake
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.nl}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                external
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

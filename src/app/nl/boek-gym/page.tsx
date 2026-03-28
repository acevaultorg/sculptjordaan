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
  title: "Boek Open Gym — Train Zelfstandig in een Privé Studio | SculptClub Amsterdam",
  description:
    "Boek een Open Gym sessie bij SculptClub in de Jordaan. Vanaf €29/4 weken, geen abonnement, privé studio. Start met een gratis proefles.",
  alternates: {
    canonical: "/nl/boek-gym",
    languages: {
      nl: "/nl/boek-gym",
      en: "/en/book-gym",
    },
  },
};

const benefits = [
  "Gratis proefles — probeer het zonder verplichtingen",
  "Privé studio helemaal voor jezelf — geen wachten, geen drukte",
  "Lidmaatschap vanaf €29 per 4 weken (€7,25/sessie)",
  "Populairste plan: 2x per week voor €49/4 weken",
  "Geen langlopend contract — elk moment opzeggen",
  "Deurcode via WhatsApp, direct starten",
];

const steps = [
  {
    icon: Clock,
    title: "Boek een sessie",
    description: "Kies een tijdslot dat bij je past via het boekingssysteem.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Je krijgt een unieke code via WhatsApp om de studio binnen te komen.",
  },
  {
    icon: Dumbbell,
    title: "Train op jouw tijd",
    description: "Gebruik de volledige studio met professionele apparatuur, helemaal voor jezelf.",
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub studio" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Assault bike in SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht SculptClub studio" },
];

const faqs = [
  {
    q: "Wat kost een Open Gym sessie?",
    a: "Lidmaatschap vanaf €29 per 4 weken (1x/week). Het populairste plan is 2x/week voor €49. Je kunt altijd upgraden of downgraden.",
  },
  {
    q: "Heb ik een abonnement nodig?",
    a: "Het werkt met een lidmaatschap per 4 weken, maar je kunt elk moment opzeggen. Geen langlopend contract.",
  },
  {
    q: "Is het echt alleen voor mij?",
    a: "Ja. Je hebt de hele studio voor jezelf tijdens je geboekte tijdslot van 60 minuten. Geen andere sporters, geen wachten.",
  },
  {
    q: "Kan ik een vriend meenemen?",
    a: "Er mogen maximaal 3 personen tegelijk in de studio. Wil je samen trainen? Bekijk onze studio verhuur opties.",
  },
  {
    q: "Wat als ik mijn sessie moet annuleren?",
    a: "Annuleren of verzetten kan altijd gratis via het boekingssysteem.",
  },
  {
    q: "Welke apparatuur is er?",
    a: "Powerrack, kabelmachine, Concept2 roeier, dumbbells, verstelbare bank, kettlebells, resistance bands en meer. Alles voor een complete training.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BoekGymPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Boek Open Gym", url: "/nl/boek-gym" },
        ]}
      />
      <ServiceJsonLd
        name="Open Gym"
        description="Zelfstandig trainen in een privé studio in de Jordaan, Amsterdam. Boek sessies van 60 minuten."
        url="/nl/boek-gym"
        priceRange="€29 - €89 per 4 weken"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Open Gym"
          title="Boek een Open Gym Sessie"
          description="Train zelfstandig in een privé studio. Start met een gratis proefles — geen verplichtingen."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Start gratis proefles
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/nl/open-gym" size="lg" variant="outline">
            Bekijk alle plannen
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              Vanaf €7,25/sessie · Privé studio · Geen contract
            </p>
            <p className="text-sm text-muted-foreground">
              Sessies van 60 minuten · Dagelijks 06:30 – 22:00 · De meeste leden trainen 2x/week
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
          title="Train Zelfstandig in een Privé Studio"
          description="Geen drukte, geen wachten — alleen jij en professionele apparatuur."
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
            Start gratis proefles
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Studio gallery */}
      <Section>
        <SectionHeader
          overline="De Studio"
          title="Volledig Uitgerust"
          description="Powerrack, dumbbells, kabelmachine, cardio en meer."
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
        <SectionHeader overline="Leden" title="Wat Leden Zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Geen drukte, geen wachten. Ik boek een uur, doe mijn workout
                en ben klaar. Precies wat ik zocht als alternatief voor de volle
                sportschool.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Google Review, ★★★★★
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Ik train hier nu 3 maanden, 2x per week. De rust en focus die
                je hebt in een privé studio is echt een gamechanger. Nooit meer
                terug naar een gewone gym.&rdquo;
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
              Klaar om te trainen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Boek je gratis proefles — morgen kun je al starten.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.openGymTrial} size="lg">
                Start gratis proefles
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.openGymNl}
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

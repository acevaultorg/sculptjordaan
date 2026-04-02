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
  title: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam",
  description:
    "Huur een volledig uitgeruste privé studio in de Jordaan. Vanaf €12/uur, geen contract, gratis proefsessie. Professionele apparatuur, flexibel per uur.",
  alternates: {
    canonical: "/nl/boek-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
  },
};

const steps = [
  {
    icon: Eye,
    title: "Bekijk de studio",
    description: "Boek een gratis proefsessie en test de ruimte en apparatuur zelf.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Boek per uur via het systeem. Je krijgt een eigen code via WhatsApp.",
  },
  {
    icon: Repeat,
    title: "Train je klanten",
    description: "Gebruik de studio wanneer het jou uitkomt. Flexibel, zonder vast contract.",
  },
];

const studioImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "SculptClub studio interieur" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in de SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in de SculptClub studio" },
];

const faqs = [
  {
    q: "Wat is inbegrepen bij studio huur?",
    a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. De studio is volledig privé tijdens je huurtijd.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, boek een gratis proefsessie. Bekijk de ruimte, test de apparatuur — geen verplichtingen.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben.",
  },
  {
    q: "Hoe lang zijn pakketten geldig?",
    a: "Alle kortingspakketten zijn 1 jaar geldig. Je kiest zelf wanneer je ze gebruikt.",
  },
  {
    q: "Kan ik betalen per factuur?",
    a: "Ja. Studio huur kan betaald worden met CreditCard, Apple Pay, Google Pay of per factuur.",
  },
  {
    q: "Hoe werkt de deurcode?",
    a: "De avond voor je sessie ontvang je een deurcode via WhatsApp. Daarmee kun je de studio zelf betreden — geen receptie.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BoekStudioPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Boek Studio", url: "/nl/boek-studio" },
        ]}
      />
      <ServiceJsonLd
        name="Studio Verhuur"
        description="Huur een privé personal training studio in de Jordaan, Amsterdam."
        url="/nl/boek-studio"
        priceRange="Vanaf €12 per uur"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* ═══ ABOVE THE FOLD: Hero + Pricing Table in one view ═══ */}
      <Section>
        <div className="mb-2 text-center">
          <p className="overline text-primary">Voor Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Boek de Studio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vanaf €12/uur · 0% commissie · Geen contract · Dagelijks 06:30–22:00
          </p>
        </div>

        {/* Pricing table — visible without scrolling */}
        <div className="mx-auto mt-6 max-w-3xl">
          <div className="overflow-hidden rounded-xl border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Ruimte</th>
                  <th className="px-4 py-3 text-center font-medium">60 min</th>
                  <th className="px-4 py-3 text-center font-medium">90 min</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Halve studio (1:1)</td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;12</span>
                    <ButtonLink href={acuityLinks.halfStudio60} size="sm" className="ml-2">
                      Boek
                    </ButtonLink>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;17</span>
                    <ButtonLink href={acuityLinks.halfStudio90} size="sm" className="ml-2">
                      Boek
                    </ButtonLink>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;17</span>
                    <ButtonLink href={acuityLinks.fullStudio60} size="sm" className="ml-2">
                      Boek
                    </ButtonLink>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="font-semibold">&euro;24</span>
                    <ButtonLink href={acuityLinks.fullStudio90} size="sm" className="ml-2">
                      Boek
                    </ButtonLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CreditCard className="h-3.5 w-3.5" />
            <span>CreditCard, Apple Pay, Google Pay of factuur</span>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-4 flex justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="sm" variant="outline">
            Eerst de studio uitproberen? Gratis proefsessie
          </ButtonLink>
        </div>
      </Section>

      {/* ═══ DISCOUNT PACKAGES ═══ */}
      <Section bg="muted">
        <SectionHeader
          overline="Voordeelpakketten"
          title="Meer Trainen, Meer Besparen"
          description="Strippenkaart kopen en besparen. 1 jaar geldig."
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
                <p className="mt-2 text-sm text-discount font-medium">Bespaar 10%</p>
                <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
                  Koop Starter
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">&euro;234</p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm text-discount font-medium">Bespaar 15%</p>
                <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
                  Koop Routine
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Beste deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">&euro;713</p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm text-discount font-medium">Bespaar 23%</p>
                <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                  Koop Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Laagste tarief: <span className="text-discount font-medium">&euro;9,24/sessie</span> · Liever per bank?{" "}
            <a href={whatsappLinks.bankTransferNl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
              WhatsApp ons
            </a>
          </p>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader overline="Hoe het werkt" title="In 3 Stappen Starten" />
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
        <SectionHeader overline="De studio" title="Bekijk de Ruimte" />
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
        <SectionHeader overline="Trainers over SculptClub" title="Wat Collega-Trainers Zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Eindelijk een studio waar ik mijn klanten in alle rust kan trainen. Goede apparatuur, mooie locatie, geen gedoe.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Personal trainer</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Ik huur hier wekelijks. Mijn klanten waarderen de rust en privacy. Boekingssysteem werkt soepel.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Fysiotherapeut</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Heb je een Vraag?" />
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Klaar om te starten?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Scroll terug naar boven om direct te boeken, of neem contact op.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={whatsappLinks.studioNl} size="lg" external>
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

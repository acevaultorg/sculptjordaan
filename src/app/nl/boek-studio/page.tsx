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
  title: { absolute: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam" },
  description:
    "Huur een privé studio in de Jordaan. Vanaf €12/uur — eigen tarief en klanten, geen contract, altijd gratis annuleren. Kortingspakketten tot 23% korting. Eerste proefsessie gratis.",
  alternates: {
    canonical: "/nl/boek-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/boek-studio",
    title: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam",
    description:
      "Huur een privé studio in de Jordaan. Vanaf €12/uur — eigen tarief en klanten, geen contract, altijd gratis annuleren. Kortingspakketten tot 23% korting. Eerste proefsessie gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam",
    description:
      "Huur een privé studio in de Jordaan. Vanaf €12/uur — eigen tarief en klanten, geen contract, altijd gratis annuleren. Kortingspakketten tot 23% korting. Eerste proefsessie gratis.",
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
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
  { src: "/images/studio/training-barbell-squat.jpg", alt: "Barbell squat in het Rogue power rack bij SculptClub" },
  { src: "/images/studio/training-squat-cinematic.jpg", alt: "Privé squat rack in de SculptClub studio" },
  { src: "/images/studio/training-bike-energy.jpg", alt: "Energieke assault bike training bij SculptClub" },
  { src: "/images/studio/training-dumbbells-focus.jpg", alt: "Dumbbell training in de SculptClub studio" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Barbell training onder de skylight bij SculptClub" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal training sessie bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht op de gracht vanuit de SculptClub studio" },
  { src: "/images/studio/entrance-smile.jpg", alt: "Gastvrije entree van SculptClub aan een Amsterdams grachtenpand" },
  { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub gevel aan de Egelantiersgracht in de Jordaan" },
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

      {/* ═══ ABOVE THE FOLD: Hero + Tabs (Packages default · Hourly secondary) ═══ */}
      <Section>
        <div className="mb-4 text-center sm:mb-6">
          <p className="overline text-primary">Voor Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Boek de Studio</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vanaf €12/uur · Volledige vrijheid · Gratis annuleren · Dagelijks 06:00–22:00
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            In het weekend dezelfde prijs. Zondag en zaterdagmiddag zijn meestal nog vrij.
          </p>
          <WeekendAvailability locale="nl" kind="studio" className="mt-1 text-sm text-muted-foreground" />
        </div>

        <RentalTabs
          locale="nl"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Strippenkaart kopen en besparen. 1 jaar geldig.
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
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 10%</p>
                    <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
                      Koop Starter
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Starter", 99, 89, "nl")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=boek_studio_invoice_starter"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Betaal per factuur
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center ring-2 ring-primary">
                  <CardHeader>
                    <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                    <CardTitle className="text-xl">Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€210</p>
                    <p className="text-3xl font-bold">€179</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 15%</p>
                    <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
                      Koop Routine
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Routine", 210, 179, "nl")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=boek_studio_invoice_routine"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Betaal per factuur
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
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 20%</p>
                    <ButtonLink href={acuityPackages.studio.pro} size="lg" className="mt-4 w-full">
                      Koop Pro
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Pro", 375, 299, "nl")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=boek_studio_invoice_pro"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Betaal per factuur
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge className="mx-auto mb-2" variant="secondary">Beste deal</Badge>
                    <CardTitle className="text-xl">Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€650</p>
                    <p className="text-3xl font-bold">€499</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 23%</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Koop Volume
                    </ButtonLink>
                    <ButtonLink
                      href={whatsappLinks.studioPackInvoice("Volume", 650, 499, "nl")}
                      external
                      variant="outline"
                      size="lg"
                      className="mt-2 w-full plausible-event-name=boek_studio_invoice_volume"
                    >
                      <Receipt className="mr-2 h-4 w-4" />
                      Betaal per factuur
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Altijd gratis annuleren", "Geen contract", "Volledige vrijheid", "Direct bevestigd"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 flex-shrink-0 text-discount" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Laagste tarief: <span className="text-discount font-medium">€9,24/sessie</span> · Liever per bank?{" "}
                <a href={whatsappLinks.bankTransferNl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                  WhatsApp ons
                </a>
              </p>
            </div>
          }
          hourly={
            <div className="mx-auto max-w-3xl">
              <StudioRateTable
                headSpace="Ruimte"
                headDuration="60 min"
                cta="Boek"
                rows={[
                  { label: "Halve studio (max 2)", price: "€12", href: acuityLinks.halfStudio60 },
                  { label: "Hele studio (kleine groep)", note: "1 tot 8 personen", price: "€17", href: acuityLinks.fullStudio60 },
                ]}
              />
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                <span>Kies je tijd en betaal veilig met CreditCard, Apple Pay, Google Pay of factuur</span>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Reserveer per sessie. Geen abonnement, geen contract,{" "}
                <strong className="text-foreground">altijd gratis annuleren</strong> — credits komen direct terug, kaartbetalingen voor losse sessies worden binnen enkele dagen automatisch terugbetaald.{" "}
                <strong className="text-foreground">Halve studio</strong> = 1-op-1 sessies (max 2 personen; de andere helft kan tegelijk door een andere trainer of Open Gym gebruikt worden).{" "}
                <strong className="text-foreground">Hele studio</strong> = volledig privé voor 1 tot 8 personen, jouw eigen groep.
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
              <p className="text-base font-semibold">Niet zeker welke optie?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp ons je situatie — we reageren meestal binnen 1 uur.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioNl}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=boek_studio_uncertain_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp ons
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader overline="Hoe het werkt" title="In 3 stappen starten" />
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
        <SectionHeader overline="De studio" title="Bekijk de ruimte" />
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <PhotoSlideshow images={studioImages} aspect="aspect-[4/3]" />
          </div>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section>
        <SectionHeader overline="Trainers over SculptClub" title="Wat collega-trainers zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                “Eindelijk een studio waar ik mijn klanten in alle rust kan trainen. Goede apparatuur, mooie locatie, geen gedoe.”
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Personal trainer</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                “Ik huur hier wekelijks. Mijn klanten waarderen de rust en privacy. Boekingssysteem werkt soepel.”
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
              Boek direct een studio sessie of neem contact op.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.fullStudio60} size="lg">
                Boek studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.studioNl} variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent" external>
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

import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Dumbbell,
  Building2,
  Users,
  Shirt,
  Droplets,
  Footprints,
  Bike,
  Train,
  ParkingCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eerste Bezoek — SculptClub Amsterdam Jordaan",
  description:
    "Alles wat je moet weten voor je eerste bezoek aan SculptClub. Stap-voor-stap uitleg, wat je mee moet nemen, bereikbaarheid en veelgestelde vragen.",
  alternates: {
    canonical: "/nl/eerste-bezoek",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Boek je sessie",
    description:
      "Plan je eerste sessie via ons online boekingssysteem of stuur ons een bericht via WhatsApp. Kies een tijdslot dat je uitkomt en je ontvangt direct een bevestiging. De avond ervoor ontvang je je deurcode via WhatsApp. Heb je vragen over welk type sessie bij je past? Stuur ons gerust een bericht — we helpen je graag.",
    cta: {
      label: "Boek nu",
      href: acuityLinks.generic,
      external: true,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Kom naar de studio",
    description:
      "Onze studio bevindt zich aan de Egelantiersgracht 424 in Amsterdam Jordaan. De avond voor je sessie ontvang je een deurcode via WhatsApp waarmee je jezelf binnenlaat. Kom 5 minuten voor je sessie zodat je rustig kunt omkleden en je warm kunt maken. De kleedruimte is direct beschikbaar wanneer je binnenkomt.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Start met trainen",
    description:
      "Je trainer staat klaar om je te begroeten, of je traint zelfstandig via Open Gym. Alle apparatuur is beschikbaar en de studio is volledig privé tijdens jouw sessie. Bij personal training bespreek je eerst je doelen en eventuele blessures, waarna je trainer een sessie op maat samenstelt.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportkleding", detail: "Comfortabele kleding waarin je vrij kunt bewegen" },
  { icon: Droplets, label: "Handdoek & waterfles", detail: "Water is ook beschikbaar in de studio" },
  { icon: Footprints, label: "Indoor sportschoenen", detail: "Schone schoenen met platte zool zijn ideaal" },
];

const faqs = [
  {
    q: "Moet ik al fit zijn om te beginnen?",
    a: "Absoluut niet. Onze trainers werken met mensen van elk niveau, van complete beginners tot gevorderde sporters. Je trainer past de sessie volledig aan op jouw huidige niveau en doelen. Er is geen drempel — iedereen is welkom.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Een personal training sessie duurt doorgaans 45 tot 60 minuten, afhankelijk van je trainer. Open Gym sessies zijn altijd 60 minuten. We raden aan om 5 minuten eerder te komen zodat je rustig kunt beginnen.",
  },
  {
    q: "Kan ik annuleren of verplaatsen?",
    a: "Ja, je kunt altijd gratis annuleren of verzetten via het boekingssysteem.",
  },
  {
    q: "Wat als ik de studio niet kan vinden?",
    a: "De avond voor je sessie ontvang je via WhatsApp het exacte adres, een routebeschrijving en je persoonlijke deurcode. Kom je er niet uit? Stuur ons een WhatsApp en we helpen je verder.",
  },
];

export default function EersteBezoekPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Eerste Bezoek","url":"/nl/eerste-bezoek"}]} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Eerste bezoek"
          title="Je eerste keer bij SculptClub"
          description="In 3 simpele stappen ben je klaar om te trainen. Geen inschrijfformulieren, geen verplichtingen — gewoon een goede training in een fijne studio."
        />
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center text-muted-foreground leading-relaxed">
            We begrijpen dat een nieuwe sportomgeving spannend kan zijn. Daarom hebben we alles zo eenvoudig mogelijk gemaakt.
            Of je nu komt voor personal training of Open Gym, hieronder vind je precies wat je kunt verwachten. Geen verrassingen,
            alleen een prettige eerste ervaring.
          </p>
        </FadeIn>
      </Section>

      {/* 3 Service Options — choose your path */}
      <Section bg="muted">
        <SectionHeader
          overline="Kies je training"
          title="Wat wil je doen?"
          description="Drie manieren om te trainen bij SculptClub. Elk met een gratis eerste sessie."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/30">
                  <Building2 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Studio Huren</CardTitle>
                <CardDescription>Voor trainers. Huur de studio per uur voor jouw klanten. Vanaf €12/uur.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/nl/studio-huren" variant="outline" size="lg" className="w-full">Meer informatie</ButtonLink>
                <ButtonLink href={acuityLinks.studioTrial} size="lg" className="w-full">Probeer gratis</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/30">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Vind een Trainer</CardTitle>
                <CardDescription>Personal training op maat. Eerste intake altijd gratis en vrijblijvend.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg" className="w-full">Bekijk trainers</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/30">
                  <Dumbbell className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle>Open Gym</CardTitle>
                <CardDescription>Train zelfstandig in een privé studio. Vanaf €29/4 weken.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/nl/open-gym" variant="outline" size="lg" className="w-full">Meer informatie</ButtonLink>
                <ButtonLink href={acuityLinks.openGymTrial} size="lg" className="w-full">Gratis proefles</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <SectionHeader
          overline="Wat kun je verwachten?"
          title="Een stap-voor-stap walkthrough"
        />
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-brand" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4">
                      <ButtonLink
                        href={step.cta.href}
                        external={step.cta.external}
                        variant="outline"
                        className="rounded-xl"
                      >
                        {step.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Bij personal training: de eerste intake is altijd gratis</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Tijdens de intake bespreek je je doelen, ervaring en eventuele beperkingen met je trainer. Zo kan je trainer
                  de perfecte aanpak voor jou bepalen. Je zit nergens aan vast — pas daarna beslis je of je verder wilt.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* What to Bring */}
      <Section>
        <SectionHeader
          overline="Checklist"
          title="Wat neem je mee?"
          description="Je hoeft niet veel mee te nemen. Dit is alles wat je nodig hebt:"
        />
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {bringItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Kleedruimte is beschikbaar in de studio. Douchen is niet mogelijk, maar de meeste sessies zijn zo gepland
            dat je daarna direct naar huis of werk kunt.
          </p>
        </FadeIn>
      </Section>

      {/* Transport / Parking */}
      <Section bg="muted">
        <SectionHeader
          overline="Bereikbaarheid"
          title="Hoe kom je bij SculptClub?"
        />
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">Met de fiets</h3>
                <p className="text-xs text-muted-foreground">
                  Fietsenrekken direct voor de deur aan de Egelantiersgracht. De Jordaan is het best bereikbaar per fiets.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Train className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">Openbaar vervoer</h3>
                <p className="text-xs text-muted-foreground">
                  Tram 13 en 17 stoppen bij Westermarkt (3 min lopen). Metro 52 stopt op station Vijzelgracht (10 min lopen).
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <ParkingCircle className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">Met de auto</h3>
                <p className="text-xs text-muted-foreground">
                  Betaald parkeren in de Jordaan (straatparkeren). Dichtstbijzijnde garage: Europarking, Marnixstraat 250 (5 min lopen).
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-1">
                {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                {siteConfig.address.city}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Open {siteConfig.hours.toLowerCase()}
              </p>
              <a
                href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
              >
                Bekijk op Google Maps
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="Veelgestelde vragen"
          title="Heb je nog vragen?"
          description="Hier vind je antwoorden op de meest gestelde vragen over je eerste bezoek."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Boek je eerste sessie
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Klaar om te beginnen? Plan je eerste sessie of neem contact met
              ons op via WhatsApp. We kijken ernaar uit je te verwelkomen in onze studio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek je eerste sessie
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

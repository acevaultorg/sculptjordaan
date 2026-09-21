import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/json-ld";
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
  Star,
  Lock,
  Globe,
  Heart,
  Sparkles,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Eerste Bezoek — SculptClub Amsterdam Jordaan" },
  description:
    "Alles wat je moet weten voor je eerste bezoek aan SculptClub. Stap-voor-stap uitleg, wat je mee moet nemen, bereikbaarheid en veelgestelde vragen.",
  alternates: {
    canonical: "/nl/eerste-bezoek",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
  // Per-page OG/Twitter so social/direct shares of THIS page preview the
  // page's own pitch + correct URL (not the homepage studio-rental default).
  openGraph: {
    type: "website",
    url: "/nl/eerste-bezoek",
    title: "Eerste Bezoek — SculptClub Amsterdam Jordaan",
    description:
      "Alles wat je moet weten voor je eerste bezoek aan SculptClub. Stap-voor-stap uitleg, wat je mee moet nemen, bereikbaarheid en veelgestelde vragen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eerste Bezoek — SculptClub Amsterdam Jordaan",
    description:
      "Alles wat je moet weten voor je eerste bezoek aan SculptClub. Stap-voor-stap uitleg, wat je mee moet nemen, bereikbaarheid en veelgestelde vragen.",
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Boek je sessie",
    description:
      "Voor Personal Training stuur je je trainer een berichtje via WhatsApp of het contactformulier. De trainer plant samen met jou een moment. Voor Open Gym en studio kies je een tijdslot online; de avond ervoor krijg je je deurcode via WhatsApp.",
    cta: {
      label: "Kies je trainer",
      href: "/nl/vind-jouw-personal-trainer",
      external: false,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Ontmoet je trainer",
    description:
      "Egelantiersgracht 424, Jordaan. Voor PT ontmoet je je trainer bij de deur. Voor Open Gym en studio voer je je eigen deurcode in. Geen receptie, geen wachtrij. Kleedruimte is direct beschikbaar. Kom 5 minuten voor je sessie.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Train",
    description:
      "Je trainer staat klaar, of je traint zelfstandig via Open Gym. De studio is volledig privé tijdens jouw sessie. Alle apparatuur is beschikbaar. Annuleren kan altijd gratis.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportkleding", detail: "Comfortabele kleding waarin je vrij kunt bewegen" },
  { icon: Droplets, label: "Handdoek & waterfles", detail: "Water is ook beschikbaar in de studio" },
  { icon: Footprints, label: "Indoor sportschoenen", detail: "Schone schoenen met platte zool zijn ideaal" },
];

const faqs = [
  {
    q: "Wat kost het de eerste keer?",
    a: "Bij Personal Training is je eerste intake altijd gratis: je maakt kennis met je trainer, bespreekt je doelen en doet (als je wilt) direct een kennismakingstraining. Geen verplichting daarna. Voor Open Gym kun je een gratis probeersessie van 60 minuten boeken. Studio huren start vanaf €12 per uur voor de halve studio.",
  },
  {
    q: "Moet ik al fit zijn om te beginnen?",
    a: "Nee. Onze trainers werken met mensen van elk niveau, van complete beginners tot gevorderde sporters. Je trainer past elke sessie aan op jouw huidige niveau en doelen. Er is geen drempel.",
  },
  {
    q: "Kan ik alleen komen, of moet ik me ergens aanmelden?",
    a: "Geen inschrijving, geen team, geen abonnement. Je boekt je sessie en komt op het afgesproken tijdstip. De studio is tijdens jouw sessie volledig privé: geen drukte, geen wachttijd, train zonder afleiding.",
  },
  {
    q: "Ik spreek geen Nederlands, kan dat?",
    a: "Ja. Onze trainers spreken NL en EN, een aantal ook Portugees of Russisch. Je kunt op de trainer-pagina filteren op taal. De hele site is ook in het Engels beschikbaar.",
  },
  {
    q: "Welke apparatuur is er?",
    a: "Een volledig uitgeruste privé studio: Rogue power rack, halterstang met gewichten, dumbbells, kabelmachine, banken, kettlebells, mat, foam roller. Niet 50 verschillende machines, wel alles wat je echt nodig hebt voor een complete training.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Personal Training duurt 45 tot 60 minuten, afhankelijk van je trainer. Open Gym en studio-sessies zijn standaard 60 minuten. Kom 5 minuten eerder zodat je rustig kunt beginnen.",
  },
  {
    q: "Wat als ik een blessure heb of beperking?",
    a: "Vermeld het in je WhatsApp-bericht aan je trainer of in het contactformulier. Sommige trainers (Andrea: houding & techniek, Sergei: herstel & houdingscorrectie) zijn hier expliciet in gespecialiseerd. Je trainer past de sessie altijd aan op wat veilig is voor jou.",
  },
  {
    q: "Kan ik annuleren of verplaatsen?",
    a: "Altijd gratis. Geen tijdslimiet. Voor Open Gym en studio annuleer je via het boekingssysteem (Acuity); voor Personal Training direct met je trainer via WhatsApp. Geen boetes, geen gedoe.",
  },
  {
    q: "Kan ik samen met iemand komen?",
    a: "Ja. Open Gym is max 4 personen tegelijk in de studio, je kunt dus met een trainingsmaatje of vriend(in) komen. Personal Training is standaard 1-op-1, maar veel trainers bieden ook duo- of small-group sessies aan tegen een aangepast tarief.",
  },
  {
    q: "Wat moet ik meenemen?",
    a: "Sportkleding waarin je vrij beweegt, een handdoek, een waterfles en schone indoor sportschoenen (platte zool ideaal). Water is ook in de studio aanwezig. Er is een kleedruimte; douchen is niet mogelijk.",
  },
  {
    q: "Wat als ik de studio niet kan vinden?",
    a: "De avond voor je sessie ontvang je via WhatsApp het exacte adres en een routebeschrijving. Voor PT regelt je trainer toegang tot de studio; voor Open Gym en studio krijg je je persoonlijke deurcode. Vragen onderweg? App ons op +31 6 15 14 79 52. Meestal reageren we binnen het uur.",
  },
  {
    q: "Hoe schoon is de studio?",
    a: "We maken na elke sessie schoon. Apparatuur en banken worden tussen sessies door gedesinfecteerd. De studio is een privé-ruimte zonder doorloop, niet vergelijkbaar met een drukke commerciële sportschool.",
  },
];

export default function EersteBezoekPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Eerste Bezoek","url":"/nl/eerste-bezoek"}]} />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {/* HowTo schema — AEO leverage. When ChatGPT/Claude/Perplexity/SGE
          answer "how do I book a personal trainer in Amsterdam Jordaan",
          they extract HowTo markup and cite the source. Our schema → our
          citation → our traffic. 3 steps mirror the page's step content
          so visible content + structured data align (anti-cloaking, I-26
          + Google Search Quality structured-data-abuse rule). */}
      <HowToJsonLd
        name="Hoe boek je een personal trainer bij SculptClub Amsterdam Jordaan"
        description="Boek je gratis intake personal training in 3 stappen bij SculptClub aan de Egelantiersgracht in Amsterdam Jordaan. Geen contract, geen lidmaatschap, eerste sessie 100% gratis."
        totalTime="PT5M"
        image="/images/og-default.jpg"
        steps={[
          {
            name: "Kies je trainer",
            text: "Bekijk alle 12 personal trainers op /nl/vind-jouw-personal-trainer. Filter op specialiteit (kracht, calisthenics, herstel, voeding) en taal (NL/EN/PT). Lees korte profielen, bekijk tarieven (vanaf €299 per 4 weken) en kies de trainer die bij jouw doel past.",
            url: "/nl/vind-jouw-personal-trainer",
          },
          {
            name: "Stuur de trainer een berichtje",
            text: "Klik op WhatsApp direct op de trainerpagina of gebruik het contactformulier. Je trainer reageert meestal binnen 1 uur. Jullie plannen samen een moment dat past — geen rigide agenda, gewoon op maat.",
            url: "/nl/gratis-intake",
          },
          {
            name: "Gratis kennismaking",
            text: "Telefonisch of in onze privé studio op Egelantiersgracht 424, Amsterdam Jordaan — jouw trainer bepaalt wat het beste past. Bespreek je doelen, leer de aanpak kennen, en voel of het klikt. Geen verplichting, geen verborgen kosten. Na de intake beslis je zelf of je verder wilt.",
            url: "/nl/eerste-bezoek",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Eerste bezoek"
          title="Je eerste keer bij SculptClub"
          description="Geen inschrijving. Geen contract. Eerste intake gratis. Hieronder precies wat je kunt verwachten."
        />

        {/* Warm-entrance hero image — added 2026-05-16.
            CRITICAL crop lesson logged in DECISIONS.md same session:
            ALL studio/ images are portrait orientation (1280×1920 = 2:3) —
            forcing them into a 16:9/16:7 banner cropped to a torso-only
            strip with head cut off (operator screenshot 2026-05-16 13:00).
            Fix: use a LANDSCAPE-native image from /images/hero/ (1376×720,
            ~1.91:1). canal-view.jpg shows the Amsterdam-Jordaan canal
            location — confirms WHERE the visitor is going + builds
            excitement vs anxiety about a "new gym". */}
        <div className="mx-auto mt-8 max-w-3xl">
          {/* 2026-05-27: src swapped og-default.jpg → canal-view.jpg.
              Operator: "foto nog steeds lelijk uitgerekt." og-default.jpg
              is the SOCIAL-SHARE OG card (1200×630 with embedded brand-
              text overlay designed for tiny social previews). Rendering
              it full-width as the page hero made it look like a
              repurposed OG card, not a clean editorial photo —
              what visitors perceived as "stretched." /en/first-visit
              already used /images/hero/canal-view.jpg (1376×720, 1.91:1
              native canal-view-of-Amsterdam-Jordaan landscape shot) for
              the same hero slot — NL/EN parity restored. */}
          <div className="relative aspect-[1376/720] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/hero/canal-view.jpg"
              alt="Egelantiersgracht in de Amsterdamse Jordaan — de gracht waar SculptClub aan ligt, op nummer 424"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Trust strip — 4 quick signals just below the H1 */}
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-border/60 bg-card/40 px-5 py-4">
              <div className="flex items-center gap-1.5">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-sm font-semibold">5,0 op Google</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium">Eerste intake gratis</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium">Dagelijks 06:00–22:00</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium">Jordaan</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Anxiety-killer badges — destigmatize the gym for newcomers */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3 w-3" /> Beginners welkom
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
              <Lock className="h-3 w-3" /> Privé studio · geen toeschouwers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <Globe className="h-3 w-3" /> NL · EN · PT · RU
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600 dark:text-rose-400">
              <Heart className="h-3 w-3" /> Alle niveaus
            </span>
          </div>
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
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Gratis intake
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/30">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle>Personal Training</CardTitle>
                <CardDescription>1-op-1 met een trainer die bij je past. Gratis kennismaking + training. Vanaf €299 per 4 weken daarna.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg" className="w-full">Vind jouw trainer<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <p className="text-center text-[11px] text-muted-foreground">12 trainers · filter op specialiteit + taal</p>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                gratis probeersessie
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/30">
                  <Dumbbell className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle>Open Gym</CardTitle>
                <CardDescription>Train zelfstandig in een privé studio. 60 min probeersessie. Max 4 personen. Daarna vanaf €29 per 4 weken.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href={acuityLinks.openGymTrial} size="lg" className="w-full">Boek gratis probeersessie<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/nl/open-gym" variant="outline" size="lg" className="w-full">Plannen bekijken</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Gratis rondleiding
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/30">
                  <Building2 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Studio Huren</CardTitle>
                <CardDescription>Voor trainers met eigen klanten. Halve studio €12/uur, hele studio €17/uur. Eigen tarief en klanten, geen contract.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href={acuityLinks.studioTrial} size="lg" className="w-full">Boek rondleiding<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/nl/studio-huren" variant="outline" size="lg" className="w-full">Tarieven + pakketten</ButtonLink>
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
                  Je bespreekt je doelen, ervaring en eventuele beperkingen. Je trainer stelt een aanpak samen die bij je past.
                  Je zit nergens aan vast. Pas daarna beslis je of je verder wilt.
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
              Klaar om te beginnen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Eerste intake gratis. Geen contract. Annuleren altijd gratis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="/nl/vind-jouw-personal-trainer"
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Vind jouw trainer
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
            <p className="mt-6 text-xs text-white/55">
              Vragen? +31 6 15 14 79 52 · meestal antwoorden we binnen het uur
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

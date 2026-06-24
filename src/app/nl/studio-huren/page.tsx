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
import { acuityLinks, acuityPackages, whatsappLinks } from "@/config/acuity";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { RotatingImageStack } from "@/components/marketing/rotating-image-stack";
import { RentalTabs } from "@/components/marketing/rental-tabs";
import { LandingVideo } from "@/components/marketing/landing-video";
import {
  Dumbbell,
  Lock,
  Clock,
  Percent,
  CreditCard,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { getColor } from "@/lib/image-color-manifest";
import type { Metadata } from "next";

const HERO_SRC = "/images/studio/gym-latest.jpg";

/**
 * Hero side-panel rotates through 4 angles of the studio (per operator
 * directive 2026-05-20: "new trainers should get a great impressions of
 * the space quickly"). Same RotatingImageStack discipline as the homepage
 * hero — only the photo crossfades, the CTAs + headline stay static.
 * First image keeps LCP-priority; rest mount after 2s delay.
 */
const HERO_IMAGES = [
  { src: HERO_SRC, alt: "Privé studio interieur bij SculptClub Jordaan — apparatuur voor personal training, dumbbells, krachtstation en kabelmachine" },
  { src: "/images/studio/turf-lane-canal.jpg", alt: "Turf lane met SCULPT muur-logo en grachtenuitzicht bij SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Achterruimte met sled, Rogue rack en bank onder lichtkoepel bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht vanuit SculptClub op de Egelantiersgracht in Amsterdam" },
];
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { TrainerValueProp } from "@/components/marketing/trainer-value-prop";

export const metadata: Metadata = {
  title: { absolute: "Studio Huren Personal Trainer Amsterdam | SculptClub Jordaan" },
  description:
    "Privé trainingsruimte in Amsterdam Jordaan vanaf €12/uur — eigen klanten, eigen tarief, geen contract, gratis annuleren. Voor PT en fysiotherapeut. Eerste sessie gratis.",
  alternates: {
    canonical: "/nl/studio-huren",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
  // Per-page OG/Twitter so social/direct shares of THIS page preview the
  // page's own pitch + correct URL (not the homepage studio-rental default).
  openGraph: {
    type: "website",
    url: "/nl/studio-huren",
    title: "Studio Huren Personal Trainer Amsterdam | SculptClub Jordaan",
    description:
      "Privé trainingsruimte in Amsterdam Jordaan vanaf €12/uur — eigen klanten, eigen tarief, geen contract, gratis annuleren. Voor PT en fysiotherapeut. Eerste sessie gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Huren Personal Trainer Amsterdam | SculptClub Jordaan",
    description:
      "Privé trainingsruimte in Amsterdam Jordaan vanaf €12/uur — eigen klanten, eigen tarief, geen contract, gratis annuleren. Voor PT en fysiotherapeut. Eerste sessie gratis.",
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professionele apparatuur",
    description:
      "Powerrack, kabelmachine, dumbbells en alles wat je nodig hebt.",
  },
  {
    icon: Lock,
    title: "Priv\u00e9 ruimte",
    description: "Geen pottenkijkers. Alleen jij en je klant(en).",
  },
  {
    icon: Clock,
    title: "Flexibel per uur",
    description: "Boek wanneer het jou uitkomt. Geen vaste tijden.",
  },
  {
    icon: Percent,
    title: "Jij houdt 100%",
    description: "Jij bepaalt je eigen tarieven en klanten. Wij rekenen alleen huur.",
  },
];

// Lightbox gallery — MUST NOT duplicate the hero rotation above
// (HERO_IMAGES line 38-43). Same-page dup audit 2026-05-27 found
// turf-lane-canal + back-room-full + canal-view-doors were rendered
// in both the hero crossfade AND this gallery — visitor saw the same
// 3 shots twice per page. Swapped to equipment-focused angles that
// complement the hero's spatial overviews.
const galleryImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Rogue power rack met Olympic barbell bij SculptClub" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Volledige dumbbell-set tot 32 kg bij SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack met planten en vinyl speler bij SculptClub" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
];

const faqs = [
  {
    q: "Wat kost het om de studio te huren?",
    a: "Halve studio (1:1) vanaf \u20ac12 per 60 minuten. Hele studio (max 6 personen) vanaf \u20ac17 per 60 minuten. Bespaar 10-23% met een kortingspakket.",
  },
  {
    q: "Welke kortingspakketten zijn er?",
    a: "Starter \u20ac89 (10% korting), Routine \u20ac199 (15% korting) en Volume \u20ac549 (23% korting). Pakketten zijn 1 jaar geldig.",
  },
  {
    q: "Wat is inbegrepen bij studio huur?",
    a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. De studio is volledig priv\u00e9 tijdens je huurtijd.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
  },
  {
    q: "Hoe werkt de boeking?",
    a: "Je boekt online via ons boekingssysteem. De avond voor je sessie ontvang je een deurcode via WhatsApp waarmee je de studio kunt betreden.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, je kunt een gratis proefsessie boeken om de studio te bekijken en uit te proberen. Geen verplichtingen.",
  },
  {
    q: "Krijg ik klanten via SculptClub?",
    a: "Ja. Als verhuurder krijg je een eigen profielpagina op deze site met zoekfilters (taal, specialiteit). Klanten die SculptClub vinden via Google of Instagram kunnen jou direct bekijken en boeken. Geen tussenpersoon bij die boekingen — wij verbinden alleen.",
  },
  {
    q: "Kan ik vaste tijdslots reserveren?",
    a: "Ja. Vraag via WhatsApp of het contactformulier een vast wekelijks of maandelijks rooster aan. Geschikt voor trainers met een vaste klantenkring. Geen lange contracten, altijd opzegbaar per maand.",
  },
  {
    q: "Wat is het minimum aantal uren?",
    a: "Geen minimum. Je kunt 1 uur boeken of meerdere uren per week. Pakketten (Starter/Routine/Volume) zijn voordeliger als je vaak komt, maar nooit verplicht.",
  },
  {
    q: "Wat als ik niet kom opdagen?",
    a: "Annuleren of verplaatsen is altijd gratis — geen no-show fee. We rekenen op je professionaliteit. Bij regelmatig last-minute annuleren bespreken we het direct.",
  },
  {
    q: "Welke betaalmethodes worden geaccepteerd?",
    a: "CreditCard, Apple Pay, Google Pay, of factuur (op verzoek). iDEAL via Apple Pay. Volume pakket (€549) kan op verzoek per bankoverschrijving — WhatsApp ons.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function StudioRentalPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Studio Huren","url":"/nl/studio-huren"}]} />
      <ServiceJsonLd
        name="Studio Verhuur — Personal Trainer Amsterdam"
        description="Huur een privé trainingsruimte in Amsterdam Jordaan voor freelance personal trainers en fysiotherapeuten. Professionele apparatuur, flexibel per uur, eigen tarief en klanten."
        url="/nl/studio-huren"
        priceRange="Vanaf €12 per uur"
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* ═══ Top: booking widget — operator directive 2026-05-27:
          "this page should start with the same UX element as on the
          picture" (operator screenshotted /nl/boek-studio's centered
          tabs widget). Page now LEADS with the canonical booking
          surface — visitor lands → sees Per uur ⇄ Pakketten tabs with
          live rates + Boek/Koop buttons → can book instantly. The
          previous hero (slideshow + dual CTAs) + standalone Tarieven
          section + standalone Pakketten section + #schedule embed
          have all been consolidated into ONE widget. SEO-strong h1
          retained ("Studio huren voor personal trainers in Amsterdam"
          — head query winner). Slideshow imagery moves below in the
          existing TrainerValueProp + Bekijk de Ruimte sections.
          ═══ */}
      <Section id="book">
        <div className="mb-6 text-center">
          <p className="overline text-primary">Voor Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Studio huren voor personal trainers in Amsterdam
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vanaf €12/uur · Volledige vrijheid · Gratis annuleren · Dagelijks 06:30–22:00
          </p>
        </div>

        {/* "Wil je de studio eerst zien?" CTA — operator correction 2026-06-23:
            boeken gaat self-serve via Acuity (de live scheduler hieronder); WhatsApp
            is voor de STUDIO BEKIJKEN (een vrijblijvende rondleiding), niet voor
            huren/boeken. Reframe van "rent-via-chat" (2026-06-18) naar "kom eerst
            kijken"; de self-serve boekingsflow staat direct hieronder. */}
        <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-lg font-bold">De snelste manier om de studio te bekijken: stuur ons een WhatsApp</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Plan een vrijblijvende rondleiding, stel je vragen en kijk of SculptClub de juiste plek is voor jou en je klanten — meestal antwoord binnen 1 uur. Kom gerust met je eigen klanten.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappLinks.studioNl}
              external
              size="lg"
              className="w-full sm:w-auto plausible-event-name=studio_huren_hero_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp ons
            </ButtonLink>
            <a
              href={whatsappLinks.tourNl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 plausible-event-name=studio_huren_hero_tour"
            >
              Of plan eerst een gratis rondleiding (15 min)
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Liever meteen zelf boeken? Live tarieven &amp; beschikbaarheid hieronder ↓
          </p>
        </div>

        {/* Studio promo — conviction BELOW the WhatsApp CTA so the message-us button
            stays near the mobile fold (page goal = message ASAP). Below-fold → lazy:
            the mp4 loads only on scroll (verified: above-fold it auto-loaded 2.5MB). */}
        <div className="mb-10">
          <LandingVideo
            src="/videos/studio-promo.mp4"
            poster="/videos/studio-promo-poster.jpg"
            label="SculptClub — de studio in hartje Amsterdam Jordaan, in beeld"
          />
        </div>

        <RentalTabs
          locale="nl"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Een strippenkaart is boektegoed voor losse studiosessies — de doorgestreepte prijs is je tegoed. 1 jaar geldig.
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
                    <p className="mt-1 text-xs text-muted-foreground">≈ 8 halve / 6 hele studio sessies</p>
                    <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
                      Koop Starter
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center ring-2 ring-primary">
                  <CardHeader>
                    <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                    <CardTitle className="text-xl">Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€234</p>
                    <p className="text-3xl font-bold">€199</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 15%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 19 halve / 14 hele studio sessies</p>
                    <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
                      Koop Routine
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge aria-hidden className="invisible mx-auto mb-2">placeholder</Badge>
                    <CardTitle className="text-xl">Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€436</p>
                    <p className="text-3xl font-bold">€349</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 20%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 36 halve / 26 hele studio sessies</p>
                    <ButtonLink href={acuityPackages.studio.pro} size="lg" className="mt-4 w-full">
                      Koop Pro
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge className="mx-auto mb-2" variant="secondary">Beste deal</Badge>
                    <CardTitle className="text-xl">Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€713</p>
                    <p className="text-3xl font-bold">€549</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 23%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 59 halve / 42 hele studio sessies</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Koop Volume
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sessies van 60 min — halve studio (max 2) €12 · hele studio (max 6) €17. 90 min of een mix kan ook; je tegoed bepaalt het aantal.
              </p>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Laagste tarief: <span className="text-discount font-medium">€9,24/sessie</span> · Liever per bank?{" "}
                <a href={whatsappLinks.bankTransferNl} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                  WhatsApp ons
                </a>
              </p>
            </div>
          }
          hourly={
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Reserveer per sessie. Geen abonnement, geen contract,{" "}
                <strong className="text-foreground">altijd gratis annuleren</strong>.{" "}
                <strong className="text-foreground">Halve studio</strong> = 1-op-1 sessies (max 2 personen; de andere helft kan tegelijk door een andere trainer gebruikt worden).{" "}
                <strong className="text-foreground">Hele studio</strong> = volledig privé (max 6 personen).
              </p>
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
                      <td className="px-4 py-3 font-medium">Halve studio (max 2)</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€12</span>
                          <ButtonLink href={acuityLinks.halfStudio60} size="sm">Boek</ButtonLink>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€17</span>
                          <ButtonLink href={acuityLinks.halfStudio90} size="sm">Boek</ButtonLink>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€17</span>
                          <ButtonLink href={acuityLinks.fullStudio60} size="sm">Boek</ButtonLink>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€24</span>
                          <ButtonLink href={acuityLinks.fullStudio90} size="sm">Boek</ButtonLink>
                        </div>
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
          }
        />
      </Section>

      {/* Indecisive-capture: low-friction WhatsApp before commitment */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Niet zeker welke optie?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp ons je situatie — we reageren meestal binnen 1 uur.{" "}
                {/* Q (2026-06-02) tour option — ZZP trainers want to see the
                    room + equipment before committing to hourly rental. */}
                Liever eerst de ruimte zien?{" "}
                <a
                  href={whatsappLinks.tourNl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plausible-event-name=studio_huren_tour font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Plan een gratis rondleiding (15 min)
                </a>.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioNl}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=studio_huren_uncertain_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp ons
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Slideshow + trust strip — moves below the booking widget per
          operator's "start with booking" directive. Imagery still earns
          its place (shows the room visitors are about to book) but no
          longer competes with the conversion surface. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
              style={{ backgroundColor: getColor(HERO_SRC) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold">5,0 Google</span>
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
              <span className="font-semibold text-foreground">Privé studio</span>
              <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
              <span className="font-medium text-muted-foreground">Egelantiersgracht · Jordaan</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Client-growth value prop — what trainers GET beyond the room */}
      <TrainerValueProp locale="nl" />

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Waarom SculptClub"
          title="Alles wat je nodig hebt"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* For freelance trainers */}
      <Section>
        <SectionHeader
          overline="Voor ZZP-trainers & fysiotherapeuten"
          title="Jouw eigen studio, per uur"
          description="Geen vaste huurkosten. Jij huurt alleen wanneer je een sessie hebt en houdt 100% van je tarief."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Wat je meeneemt</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Geldige beroepsaansprakelijkheidsverzekering (BA)",
                  "Jouw eigen klanten en tarieven",
                  "Kennis en expertise als trainer of fysiotherapeut",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Wat wij bieden</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Volledig uitgeruste privé studio voor 1:1 en small group",
                  "Jij houdt 100% van je sessietarief — wij rekenen alleen huur",
                  "Flexibel boeken: alleen wanneer jij een klant hebt",
                  "Deurcode per WhatsApp de avond van tevoren",
                  "Professionele apparatuur: squat rack, kabelmachine, dumbbells 4-40 kg, Echo Bike en meer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Gallery — clickable thumbs, opens fullscreen lightbox slider on tap.
          Operator directive 2026-05-20: "if people click this photos they
          should get enlarged slider". See PhotoGalleryLightbox for the
          ←/→/Esc + swipe + scroll-lock + focus-trap mechanics. */}
      <Section bg="muted">
        <SectionHeader overline="De studio" title="Bekijk de ruimte" />
        <PhotoGalleryLightbox images={galleryImages} locale="nl" />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Veelgestelde vragen" title="Studio huren FAQ" />

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

      {/* Related articles */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Meer lezen over studio huur</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/nl/studio-huren/rekentool" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Rekentool</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Bereken wat je overhoudt vs een commissie-gym →</p>
              </a>
              <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Studio huren als personal trainer in Amsterdam</p>
              </a>
              <a href="/nl/blog/gym-huren-per-uur-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym huren per uur Amsterdam: flexibele trainingsruimte</p>
              </a>
              <a href="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Trainingsruimte huren als ZZP personal trainer</p>
              </a>
              <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Fysiotherapie studio huren in Amsterdam</p>
              </a>
              <a href="/nl/word-trainer" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Voor trainers</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Word trainer bij SculptClub — eigen tarief & klanten</p>
              </a>
              <a href="/nl/blog/personal-trainer-worden-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Personal trainer worden in Amsterdam</p>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Klaar om je klanten hier te trainen?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Probeer de studio gratis uit met een proefsessie. Geen
              verplichtingen.
            </p>
            {/* 2026-05-27 final: page now LEADS with the booking widget
                (top of page). Bottom CTA = scroll-to-top of booking
                widget so a visitor who scrolled through 7 sections gets
                back to the conversion surface in one tap. */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href="#book" size="lg">
                Naar boekingsformulier
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
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

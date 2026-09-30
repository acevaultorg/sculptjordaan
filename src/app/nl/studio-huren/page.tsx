import { PageLayout } from "@/components/layout/page-layout";
import { LocalIntentLinks } from "@/components/marketing/local-intent-links";
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
  { src: HERO_SRC, alt: "Privé studio interieur bij SculptClub Jordaan, apparatuur voor personal training, dumbbells, krachtstation en kabelmachine" },
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
import { StudioRateTable } from "@/components/marketing/studio-rate-table";
import { WeekendAvailability } from "@/components/marketing/weekend-availability";

export const metadata: Metadata = {
  title: { absolute: "Trainingsruimte huren Amsterdam — PT-studio vanaf €12/uur" },
  description:
    "Privé trainingsruimte in de Jordaan vanaf €12 per uur. Eigen klanten, eigen tarief, geen contract en gratis annuleren. Eerste sessie gratis.",
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
    title: "Trainingsruimte huren Amsterdam — PT-studio vanaf €12/uur",
    description:
      "Privé trainingsruimte in de Jordaan vanaf €12 per uur. Eigen klanten, eigen tarief, geen contract en gratis annuleren. Eerste sessie gratis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainingsruimte huren Amsterdam — PT-studio vanaf €12/uur",
    description:
      "Privé trainingsruimte in de Jordaan vanaf €12 per uur. Eigen klanten, eigen tarief, geen contract en gratis annuleren. Eerste sessie gratis.",
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professionele apparatuur",
    description:
      "Powerrack, kabelmachine, dumbbells van 4 tot 40 kg en een Echo Bike.",
  },
  {
    icon: Lock,
    title: "Priv\u00e9 ruimte",
    description: "Met de hele studio ben je alleen met je klanten. Bij een halve studio gebruikt een andere trainer of Open Gym de andere helft.",
  },
  {
    // Availability is a top-3 objection for a trainer choosing a studio
    // ("kan ik de tijden krijgen die mijn klanten willen?") and it was
    // nowhere on this page — the old copy ("Boek wanneer het jou uitkomt")
    // is the generic line every studio runs. Replaced with the specific,
    // verifiable version: a 13-week Acuity booking analysis (2026-07-27)
    // shows the studio at ~47% utilisation, with weekday evenings, Monday
    // and especially the weekend still wide open. Deliberately phrased as
    // "nog volop uren vrij" (there IS space) and NOT as a promise of any
    // specific slot — Open Gym / ClassPass share the room on some weekend
    // hours, so never promise exclusivity here.
    icon: Clock,
    title: "Ruime beschikbaarheid",
    description:
      "Boek per uur, wanneer het jou uitkomt, ook 's avonds en in het weekend zijn er nog volop uren vrij.",
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
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Volledige dumbbell-set tot 40 kg bij SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack met planten en vinyl speler bij SculptClub" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
];

const faqs = [
  {
    // GSC 90d: "personal trainingsruimte huren" 84 impr @ pos 79, "pt ruimte
    // huren" 84 @ 81.6, "fitness ruimte huren" 62 @ 85.1 — 230 impressions of
    // demand using the word "ruimte", on a page that only ever said "studio".
    // This answers the literal question those searchers have. Not stuffing:
    // every synonym here is a name trainers genuinely use for the same room.
    q: "Ik zoek een PT-ruimte of fitnessruimte om te huren, is dit dat?",
    a: "Ja. Dit is een priv\u00e9 trainingsruimte in de Jordaan die je per uur huurt, of je het nu een PT-ruimte, fitnessruimte, trainingsruimte of studio noemt. Halve studio voor 1-op-1, hele studio voor een kleine groep. Geen contract en geen minimum aantal uren.",
  },
  {
    q: "Wat kost het om de studio te huren?",
    a: "Halve studio (1:1) vanaf \u20ac12 per 60 minuten. Hele studio (kleine groep) vanaf \u20ac17 per 60 minuten. Bespaar 10-23% met een kortingspakket.",
  },
  {
    // Small-group intent (2026-09-30): "ruimte huren groepstraining / small
    // group" had no direct answer on the page, only the "1 tot 8 personen"
    // note in the rate table. Facts: CLAUDE.md studio rental capacity + prices.
    q: "Kan ik de hele studio huren voor een kleine groep?",
    a: "Ja. Met de hele studio heb je de ruimte priv\u00e9 voor jou en je groep, van 1 tot 8 personen. Dat kost \u20ac17 per 60 minuten of \u20ac24 per 90 minuten. Geschikt voor small group training met je eigen klanten.",
  },
  {
    q: "Waar is de studio en wanneer kan ik huren?",
    a: "Aan de Egelantiersgracht 424, 1015 RR Amsterdam, in de Jordaan. De studio is elke dag open van 06:00 tot 22:00 en je boekt per uur.",
  },
  {
    q: "Welke kortingspakketten zijn er?",
    a: "Starter \u20ac89 (10% korting), Routine \u20ac179 (15% korting), Pro \u20ac299 (20% korting) en Volume \u20ac499 (23% korting). Pakketten zijn 1 jaar geldig.",
  },
  {
    q: "Wat is inbegrepen bij studio huur?",
    a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. Met de hele studio heb je de ruimte voor jezelf. Bij een halve studio kan een andere trainer of Open Gym de andere helft gebruiken.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
  },
  {
    q: "Hoe werkt de boeking?",
    a: "Je boekt online via ons boekingssysteem. Om 00:00 in de nacht voor je sessie ontvang je een deurcode via WhatsApp waarmee je de studio kunt betreden.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, je kunt een gratis proefsessie boeken om de studio te bekijken en uit te proberen. Geen verplichtingen.",
  },
  {
    q: "Krijg ik klanten via SculptClub?",
    a: "Ja. Als verhuurder krijg je een eigen profielpagina op deze site met zoekfilters (taal, specialiteit). Wie SculptClub vindt via Google of Instagram kan jou direct bekijken en boeken. Wij zitten niet tussen die boekingen. Nog geen profiel? Vraag erom via WhatsApp, dan zetten we je erop.",
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
    a: "Annuleren of verplaatsen is altijd gratis, geen no-show fee. We rekenen op je professionaliteit. Bij regelmatig last-minute annuleren bespreken we het direct.",
  },
  {
    q: "Welke betaalmethodes worden geaccepteerd?",
    a: "CreditCard, Apple Pay, Google Pay, of factuur (op verzoek). iDEAL via Apple Pay. Volume pakket (€499) kan op verzoek per bankoverschrijving. WhatsApp ons.",
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
        offers={[
          { name: "Halve studio (1-op-1, max 2 personen), 60 min", price: 12, url: "/nl/studio-huren" },
          { name: "Hele studio (kleine groep, 1 tot 8 personen), 60 min", price: 17, url: "/nl/studio-huren" },
          { name: "Gratis proefsessie voor trainers, 60 min", price: 0, url: "/nl/studio-huren/gratis-test" },
        ]}
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
          retained. 2026-08-26: h1 reworded studio->trainingsruimte after GSC
          showed 230 non-brand impressions using "ruimte", 0 using it here.
          Slideshow imagery moves below in the existing TrainerValueProp
          + Bekijk de Ruimte sections.
          ═══ */}
      <Section id="book">
        <div className="mb-4 text-center sm:mb-6">
          <p className="overline text-primary">Voor Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trainingsruimte huren in Amsterdam
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Vanaf €12/uur · Gratis annuleren · Dagelijks 06:00–22:00
          </p>
        </div>

        {/* Weekend-availability hook — task mtdbcq8ie715lw (2026-08-28): the
            13-week Acuity analysis shows the studio at ~47% utilisation,
            with the weekend afternoon/evening block especially quiet — a
            gap that was previously buried in bullet #3 of the features grid
            far below the fold. Placed right above the booking widget so it
            leads without displacing the proven "booking-first" layout
            (operator 2026-05-27 directive). Deliberately durable copy, not
            a hardcoded "13 weken" / literal hour-range claim: exact hours
            shift as ClassPass classes occupy specific weekend slots (see
            docs/CLASSPASS-FULLSTUDIO-PRIORITY.md — Sat 17-21h + Sun 16-21h
            currently run recurring ClassPass, so a static "16:00-22:00
            gegarandeerd vrij" promise would go stale/wrong for those exact
            hours). Points to the live Acuity calendar via the Boek button
            below rather than claiming this page shows real-time hours.

            MEASURED 2026-09-23 on the live Acuity availability API (full-studio
            type 82553655, calendar 12633534, three consecutive weekends —
            26/27 Sep, 3/4 Oct, 10/11 Oct, with a bogus-appointmentType control
            that correctly errored):

              Sun   61 of 61 slots free — EVERY slot, all three Sundays
              Sat   48-54 of 61 free; the only bookings are MORNINGS
                    (08:15-09:45 / 09:15-12:15). 16:00 onward: 21 of 21 free,
                    all three Saturdays
              Thu/Fri  28 and 23 free — the weekend is emptier than the week

            So Sunday is the quietest day, not "the weekend" generally, and it
            is worth naming. The copy stays RELATIVE ("quietest day") rather
            than promising fixed free hours, because that claim survives the
            next booking; a literal "free from 16:00" would not.

            RESOLVED 2026-09-23, same day. The comment above used to say Sat
            17-21h + Sun 16-21h run recurring ClassPass, and that was the stated
            reason this copy had to stay vague. It is WRONG, on two independent
            grounds:

            1. docs/CLASSPASS-FULLSTUDIO-PRIORITY.md's own "Executed 2026-08-05"
               table lists exactly FOUR live ClassPass slots — Mon/Tue/Thu/Fri
               21:00 — and nothing on a weekend. The 16-slot table elsewhere in
               that doc is the CAP of what would be permitted, not what runs.
            2. Measured: those weekend hours are bookable on the full-studio
               type on three consecutive weekends.

            So no ClassPass class occupies any weekend hour, and the weekend is
            genuinely free. The copy is still deliberately RELATIVE ("the
            quietest day") rather than promising fixed free hours — not because
            of ClassPass, but because a concrete promise goes stale the moment
            somebody books. That reason survives; the ClassPass one does not.
        */}
        {/* First-timer trial entry ABOVE the fold (2026-09-24, Subchief 3).
            Measured: studio trial -> paying renter 52% (15/29, card muevvylus84iuu),
            but only ~10 of 79 users on this page reached the trial page in 60d
            (GA4 nav_click, 2026-07-26..09-24) because its only entry sat below the
            price table. The booking table still leads for returning renters
            (operator 2026-07-04); this is one line, not a block. */}
        <div className="mx-auto mb-6 flex max-w-2xl flex-col items-center gap-1 text-center">
          <ButtonLink href="/nl/studio-huren/gratis-test" variant="outline" size="lg" className="w-full sm:w-auto">
            Eerste keer hier? Probeer de studio gratis
          </ButtonLink>
          <p className="text-xs text-muted-foreground">Eén gratis sessie met je eigen klant, vrijblijvend.</p>
        </div>

        <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
          <p className="text-sm font-semibold text-primary">
            De meeste ruimte: zondag, en zaterdagmiddag &amp; -avond
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Zondag is op dit moment de rustigste dag van de week, en ook zaterdagmiddag
            en -avond staan meestal nog open. Ideaal om hier een vaste weekendplek voor je
            klanten vast te leggen. Klik hieronder op Boek voor de actuele beschikbaarheid.
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Fotoshoot of content maken?{" "}
            <a href="/nl/fotostudio-huren" className="font-medium text-primary hover:underline">
              Huur de studio als fotostudio
            </a>
          </p>
          <WeekendAvailability locale="nl" kind="studio" className="mt-2 text-sm text-muted-foreground" />
        </div>

        {/* Booking table is now the FIRST thing after the header — operator
            2026-07-04: /nl/studio-huren is PRIMARY for trainers who ALREADY rent
            here, so they can book immediately (no scrolling past a tour CTA).
            The "see the studio" content (WhatsApp tour + promo video) moved into
            the "Eerste keer? Zie de studio" block BELOW the pricing, for
            first-time trainers who want to see the room before committing. */}
        <RentalTabs
          locale="nl"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Een strippenkaart is boektegoed voor losse studiosessies. De doorgestreepte prijs is je tegoed. 1 jaar geldig.
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
                    <p className="text-sm text-muted-foreground line-through">€210</p>
                    <p className="text-3xl font-bold">€179</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 15%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 17 halve / 12 hele studio sessies</p>
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
                    <p className="text-sm text-muted-foreground line-through">€375</p>
                    <p className="text-3xl font-bold">€299</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 20%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 31 halve / 22 hele studio sessies</p>
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
                    <p className="text-sm text-muted-foreground line-through">€650</p>
                    <p className="text-3xl font-bold">€499</p>
                    <p className="mt-2 text-sm text-discount font-medium">Bespaar 23%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 54 halve / 38 hele studio sessies</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Koop Volume
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sessies van 60 min: halve studio (2 pers.) €12 · hele studio €17. Je tegoed bepaalt het aantal sessies.
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
              <StudioRateTable
                headSpace="Ruimte"
                headDuration="60 min"
                cta="Boek"
                rows={[
                  { label: "Halve studio (voor 2 personen)", price: "€12", href: acuityLinks.halfStudio60 },
                  { label: "Hele studio (kleine groep)", note: "1 tot 8 personen", price: "€17", href: acuityLinks.fullStudio60 },
                ]}
              />
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                <span>CreditCard, Apple Pay, Google Pay of factuur</span>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Reserveer per sessie, zonder abonnement of contract, en <strong className="text-foreground">altijd gratis annuleren</strong>: geld of credits komen automatisch terug.{" "}
                <strong className="text-foreground">Halve studio</strong> = 1-op-1 (max 2 personen; de andere helft is dan voor een andere trainer of Open Gym).{" "}
                <strong className="text-foreground">Hele studio</strong> = privé voor 1 tot 8 personen.
              </p>
            </div>
          }
        />

        {/* "Eerste keer? Zie de studio" — operator 2026-07-04: the booking
            table above is PRIMARY for trainers who already rent here; a
            first-time trainer wants to SEE the studio before committing. This
            block sits BELOW the booking and routes first-timers to the
            free-trial / see-the-studio page (+ keeps the WhatsApp tour + the
            studio promo video that used to sit above the pricing). */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="overline text-primary">Ben je hier voor het eerst?</p>
          <p className="mt-2 text-xl font-bold">Eerste keer? Kom de studio zien.</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Bekijk de ruimte + apparatuur en doe een gratis proefsessie voordat je huurt. Je zit nergens aan vast.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/nl/studio-huren/gratis-test" size="lg" className="w-full sm:w-auto">
              Zie de studio &amp; doe een gratis proefsessie
            </ButtonLink>
            <a
              href={whatsappLinks.tourNl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 plausible-event-name=studio_huren_hero_tour relative after:absolute after:inset-x-0 after:top-1/2 after:h-11 after:-translate-y-1/2 after:content-['']"
            >
              Of plan een gratis rondleiding (15 min) via WhatsApp
            </a>
          </div>
          <div className="mt-6">
            <LandingVideo
              src="/videos/studio-promo.mp4"
              poster="/videos/_rs/studio-promo-poster-full.webp"
              label="SculptClub, de studio in hartje Amsterdam Jordaan, in beeld"
            />
          </div>
        </div>
      </Section>

      {/* Indecisive-capture: low-friction WhatsApp before commitment */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Niet zeker welke optie?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp ons je situatie, we reageren meestal binnen 1 uur.{" "}
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
          title="Wat je krijgt"
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
                  "Jij houdt 100% van je sessietarief, wij rekenen alleen huur",
                  "Flexibel boeken: alleen wanneer jij een klant hebt",
                  "Deurcode per WhatsApp om 00:00 in de nacht voor je sessie",
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

      {/* Net begonnen — 2026-09-22. The rental page sold a room to a trainer who
          already has a full week: the words "beginnend", "student", "opleiding"
          and "net begonnen" appeared ZERO times on the served page, while the
          people who most need an hourly room are the ones who just qualified.
          Everything here is a PUBLISHED rate or a MEASURED fact; no starter
          discount is invented, and the quiet hours are named as availability,
          not as a price. Measured 2026-09-21 from Acuity's own availability API
          and the 90-day export: 234 weekday-morning bookings against 95 weekday
          afternoons and 49 across the whole weekend, and the calendar offers
          start times 06:00-21:00 on Saturday and Sunday. */}
      <Section>
        <SectionHeader
          overline="Net begonnen"
          title="Je eerste klant, zonder vaste lasten"
          description="Pas afgestudeerd of net voor jezelf begonnen? Je huurt per uur, dus je betaalt alleen als je een klant hebt."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          <FadeIn>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Eén klant is genoeg om te beginnen: je boekt één uur, geen abonnement en geen minimum afname.",
                "Halve studio vanaf €12 per 60 minuten. Je houdt 100% van wat je je klant rekent.",
                "De rustige uren zijn doordeweeks in de middag en in het weekend. Zaterdag en zondag kun je boeken van 06:00 tot 21:00 en staat de studio meestal leeg.",
                "Je eerste sessie is gratis, zodat je de ruimte kunt uitproberen met een klant erbij.",
                "Je hebt een beroepsaansprakelijkheidsverzekering nodig, verder niets.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="pt-2">
              <ButtonLink href="/nl/studio-huren/gratis-test" size="lg" className="w-full sm:w-auto">
                Probeer de studio gratis
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Vergelijk zelf — competitor-contrast, UNNAMED market facts only.
          Live-verified 2026-08-14: vaste maandhuur elders v.a. €600/mnd ·
          minimum-afname elders v.a. 5 uur/week · premium alternatief
          €22,50/uur. Peildatum on-page; geen namen. Frame = flexibel +
          per uur, nooit "goedkoopste". EN parity: /en/studio-rental. */}
      <Section>
        <SectionHeader
          overline="Vergelijk zelf"
          title="Per uur, zonder minimum"
          description="Zo verhoudt huren per uur bij ons zich tot wat elders in Amsterdam gebruikelijk is."
        />
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Elders in Amsterdam</th>
                    <th className="px-4 py-3 text-left font-medium">Bij SculptClub</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-muted-foreground">Vaste maandhuur v.a. €600 per maand</td>
                    <td className="px-4 py-3 font-medium">€12 per uur, alleen als je een sessie hebt</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-muted-foreground">Minimum-afname v.a. 5 uur per week</td>
                    <td className="px-4 py-3 font-medium">Geen minimum, geen contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Premium alternatief: €22,50 per uur</td>
                    <td className="px-4 py-3 font-medium">Jouw klanten, jouw tarief</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Marktcijfers Amsterdam, peildatum aug 2026.
            </p>
          </div>
        </FadeIn>
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
              {/* De-orphaned 2026-08-28: this booking page's ONLY inbound link was its own
                  translation (nl<->en language switch) — a closed loop, zero links from any
                  content page, despite being indexable + in the sitemap. Booking pages on the
                  studio-rental path (=93% of revenue) must be reachable from the money page. */}
              <a href="/nl/boek-studio" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Boeken</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Boek de studio: beschikbaarheid en tarieven per uur →</p>
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
                <p className="font-semibold group-hover:text-brand transition-colors">Word trainer bij SculptClub, eigen tarief & klanten</p>
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
      <LocalIntentLinks locale="nl" current="rental" bg="muted" />

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

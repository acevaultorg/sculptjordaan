import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { WeekendAvailability } from "@/components/marketing/weekend-availability";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { acuityPaidSessions, whatsappLinks } from "@/config/acuity";
import { Camera, Sun, KeyRound, Clock, Users, Ban, MessageCircle } from "lucide-react";

/**
 * Fotostudio huren — the studio as a photo / content location (operator
 * 2026-09-24, card mug5xwqxay5vhp: "SculptClub is great for photo shoots, do
 * SEO/GEO on this").
 *
 * FACTS ONLY. Rates are the existing Acuity hourly types (full studio €17,
 * half €12 per 60 min); no shoot-specific price exists and none may be added
 * without Paulo's yes. Nothing here claims studio lights, backdrops or a
 * commercial-use licence, because none of that is confirmed. The daylight
 * (skylight + canal doors) and the photos are real: every gallery image was
 * shot in this room.
 *
 * Demand note (GSC 2026-08-26..09-25): zero impressions for any photo-shoot
 * query on sculptclub.nl, which is expected with no page. Judge this page on
 * GSC impressions for "fotostudio huren amsterdam" etc. after ~6 weeks.
 * EN parity: src/app/en/photo-studio-rental/page.tsx (keep in sync).
 */

const PATH = "/nl/fotostudio-huren";

const gallery = [
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Portret onder het daklicht, met een halterstang als prop" },
  { src: "/images/studio/portrait-entrance-warm.jpg", alt: "Warm portret bij de houten entree van de studio" },
  { src: "/images/studio/model-facade-full.jpg", alt: "Buitenshoot voor de gevel aan de Egelantiersgracht" },
  { src: "/images/studio/back-room-full.jpg", alt: "De studio: zwarte vloer, rack en daklicht" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Openslaande deuren met uitzicht op de gracht" },
  { src: "/images/studio/sculpt-wall-logo.jpeg", alt: "De SCULPT-muur in de studio" },
];

export const metadata: Metadata = {
  title: { absolute: "Fotostudio huren Amsterdam Jordaan — hele studio €17/uur | SculptClub" },
  description:
    "Huur onze privé studio in de Jordaan voor een fotoshoot of content: daglicht door het dakraam, een industriële gym als decor en de gracht voor de deur. Hele studio €17 per uur, dagelijks 06:00–22:00, gratis annuleren.",
  keywords: [
    "fotostudio huren amsterdam",
    "studio huren fotoshoot amsterdam",
    "content studio amsterdam",
    "fitness fotoshoot locatie amsterdam",
    "gym locatie huren fotoshoot",
    "fotostudio jordaan",
  ],
  alternates: {
    canonical: PATH,
    languages: { nl: PATH, en: "/en/photo-studio-rental" },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: "Fotostudio huren in de Jordaan — hele studio €17 per uur",
    description: "Daglicht, een industriële gym als decor en de gracht voor de deur. Per uur te boeken.",
    images: ["/images/studio/training-barbell-skylight.jpg"],
  },
};

const features = [
  { icon: Sun, text: "Daglicht door het dakraam en de openslaande deuren aan de gracht" },
  { icon: Camera, text: "Industrieel decor: zwarte vloer, rack, halters, sled en de SCULPT-muur" },
  { icon: Users, text: "Hele studio volledig privé, voor 1 tot 8 personen" },
  { icon: Clock, text: "Elke dag te boeken van 06:00 tot 22:00, per uur" },
  { icon: KeyRound, text: "Deurcode via WhatsApp de avond ervoor, geen receptie" },
  { icon: Ban, text: "Gratis annuleren, geen contract" },
];

const faqs = [
  {
    question: "Wat kost de studio voor een fotoshoot?",
    answer:
      "De hele studio kost €17 per uur (60 minuten), volledig privé. De halve studio kan ook, voor €12 per uur, maar dan kan de andere helft door iemand anders gebruikt worden. Voor een shoot boek je meestal de hele studio.",
  },
  {
    question: "Hoe boek ik?",
    answer:
      "Kies een tijd voor de hele studio in het boekingssysteem en betaal online (creditcard, Apple Pay, Google Pay of factuur). Wil je meerdere uren achter elkaar, boek dan meerdere uren of stuur ons een WhatsApp.",
  },
  {
    question: "Wanneer is het het rustigst?",
    answer:
      "Zondag en zaterdagmiddag zijn meestal helemaal vrij. Doordeweeks overdag is het ook vaak rustig. Het boekingssysteem laat de actuele vrije uren zien.",
  },
  {
    question: "Met hoeveel mensen mag ik komen?",
    answer: "Met de hele studio met maximaal 8 personen, inclusief fotograaf en model.",
  },
  {
    question: "Kan ik annuleren?",
    answer: "Ja, annuleren is altijd gratis. Credits komen direct terug, kaartbetalingen voor losse sessies worden binnen enkele dagen automatisch terugbetaald.",
  },
  {
    question: "Waar is het?",
    answer: "Egelantiersgracht 424 in de Jordaan, Amsterdam. De gevel aan de gracht werkt zelf ook als buitenlocatie.",
  },
];

export default function FotostudioHurenPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/nl" },
          { name: "Studio huren", url: "/nl/studio-huren" },
          { name: "Fotostudio huren", url: PATH },
        ]}
      />
      <ServiceJsonLd
        name="Fotostudio huren in de Jordaan"
        description="Privé studio in Amsterdam Jordaan per uur te huur voor fotoshoots en content: daglicht, industrieel gym-decor, gracht voor de deur."
        url={PATH}
        priceRange="€12–€17 per uur"
        areaServed="Amsterdam"
        offers={[
          { name: "Hele studio, 60 min", price: 17, url: acuityPaidSessions.studioRentalFull60 },
          { name: "Halve studio, 60 min", price: 12, url: acuityPaidSessions.studioRentalHalf60 },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="overline text-primary">Fotoshoots &amp; content</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Fotostudio huren in de Jordaan
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Een privé gym aan de Egelantiersgracht met daglicht door het dakraam. Geschikt voor
              fitnessshoots, portretten, merkcontent en video. Per uur te huren.
            </p>
            <div className="mt-6 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-foreground">€17</span>
              <span className="text-lg text-muted-foreground">per uur, hele studio</span>
            </div>
            <WeekendAvailability
              locale="nl"
              kind="studio"
              className="mt-3 text-sm text-muted-foreground"
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityPaidSessions.studioRentalFull60}
                size="tall"
                className="w-full sm:w-auto"
                data-intent="studio_rental"
                data-pricing="paid"
              >
                Boek de hele studio
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                external
                size="tall"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Vraag iets via WhatsApp
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Gemaakt in deze studio" title="Zo ziet het eruit op beeld" />
        <PhotoGalleryLightbox images={gallery} locale="nl" />
      </Section>

      <Section>
        <SectionHeader overline="Wat je krijgt" title="De studio als locatie" />
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          Wil je de ruimte eerst zien? Bekijk{" "}
          <a href="/nl/studio-huren" className="font-medium text-primary hover:underline">
            studio huren
          </a>{" "}
          voor alle tarieven en pakketten.
        </p>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Fotostudio huren" />
        <dl className="mx-auto max-w-2xl divide-y divide-border">
          {faqs.map((f) => (
            <div key={f.question} className="py-4">
              <dt className="font-semibold">{f.question}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageLayout>
  );
}

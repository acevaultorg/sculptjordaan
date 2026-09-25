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
 * NL twin: src/app/nl/fotostudio-huren/page.tsx (keep in sync).
 */

const PATH = "/en/photo-studio-rental";

const gallery = [
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Portrait under the skylight with a barbell as a prop" },
  { src: "/images/studio/portrait-entrance-warm.jpg", alt: "Warm portrait at the wooden entrance of the studio" },
  { src: "/images/studio/model-facade-full.jpg", alt: "Outdoor shot in front of the facade on the Egelantiersgracht" },
  { src: "/images/studio/back-room-full.jpg", alt: "The studio: black floor, rack and skylight" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Double doors opening onto the canal" },
  { src: "/images/studio/sculpt-wall-logo.jpeg", alt: "The SCULPT wall in the studio" },
];

export const metadata: Metadata = {
  title: { absolute: "Photo Studio Rental Amsterdam Jordaan — full studio €17/hour | SculptClub" },
  description:
    "Rent our private studio in the Jordaan for a photo shoot or content: daylight through the skylight, an industrial gym as the set and a canal outside the door. Full studio €17 per hour, daily 06:00–22:00, free cancellation.",
  keywords: [
    "photo studio rental amsterdam",
    "studio for photoshoot amsterdam",
    "content studio amsterdam",
    "fitness photoshoot location amsterdam",
    "gym location rental photoshoot",
    "photo studio jordaan",
  ],
  alternates: {
    canonical: PATH,
    languages: { nl: "/nl/fotostudio-huren", en: PATH },
  },
  openGraph: {
    type: "website",
    url: PATH,
    title: "Photo studio rental in the Jordaan — full studio €17 per hour",
    description: "Daylight, an industrial gym as the set and a canal outside the door. Book by the hour.",
    images: ["/images/studio/training-barbell-skylight.jpg"],
  },
};

const features = [
  { icon: Sun, text: "Daylight through the skylight and the double doors onto the canal" },
  { icon: Camera, text: "Industrial set: black floor, rack, dumbbells, sled and the SCULPT wall" },
  { icon: Users, text: "Full studio completely private, for 1 to 8 people" },
  { icon: Clock, text: "Bookable every day from 06:00 to 22:00, by the hour" },
  { icon: KeyRound, text: "Door code via WhatsApp the night before, no reception" },
  { icon: Ban, text: "Free cancellation, no contract" },
];

const faqs = [
  {
    question: "What does the studio cost for a photo shoot?",
    answer:
      "The full studio is €17 per hour (60 minutes), completely private. The half studio is also possible at €12 per hour, but then someone else may use the other half. For a shoot you usually book the full studio.",
  },
  {
    question: "How do I book?",
    answer:
      "Pick a time for the full studio in the booking system and pay online (credit card, Apple Pay, Google Pay or invoice). For several hours in a row, book several hours or send us a WhatsApp.",
  },
  {
    question: "When is it quietest?",
    answer:
      "Sunday and Saturday afternoon are usually completely free. Weekdays during the day are often quiet too. The booking system shows the current free hours.",
  },
  {
    question: "How many people can come?",
    answer: "With the full studio up to 8 people, including photographer and model.",
  },
  {
    question: "Can I cancel?",
    answer: "Yes, cancelling is always free. Credits come back instantly; card payments for single sessions are refunded automatically within a few days.",
  },
  {
    question: "Where is it?",
    answer: "Egelantiersgracht 424 in the Jordaan, Amsterdam. The canal-side facade works as an outdoor location too.",
  },
];

export default function PhotoStudioRentalPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Studio rental", url: "/en/studio-rental" },
          { name: "Photo studio rental", url: PATH },
        ]}
      />
      <ServiceJsonLd
        name="Photo studio rental in the Jordaan"
        description="Private studio in Amsterdam Jordaan for hire by the hour for photo shoots and content: daylight, industrial gym set, canal outside the door."
        url={PATH}
        priceRange="€12–€17 per hour"
        areaServed="Amsterdam"
        offers={[
          { name: "Full studio, 60 min", price: 17, url: acuityPaidSessions.studioRentalFull60 },
          { name: "Half studio, 60 min", price: 12, url: acuityPaidSessions.studioRentalHalf60 },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="overline text-primary">Photo shoots &amp; content</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Photo studio rental in the Jordaan
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A private gym on the Egelantiersgracht with daylight through the skylight. Suited to
              fitness shoots, portraits, brand content and video. Rent it by the hour.
            </p>
            <div className="mt-6 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-foreground">€17</span>
              <span className="text-lg text-muted-foreground">per hour, full studio</span>
            </div>
            <WeekendAvailability
              locale="en"
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
                Book the full studio
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioEn}
                external
                size="tall"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Shot in this studio" title="How it looks on camera" />
        <PhotoGalleryLightbox images={gallery} locale="en" />
      </Section>

      <Section>
        <SectionHeader overline="What you get" title="The studio as a location" />
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm">{text}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          Want to see all rates and packages first? See{" "}
          <a href="/en/studio-rental" className="font-medium text-primary hover:underline">
            studio rental
          </a>
          .
        </p>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="FAQ" title="Photo studio rental" />
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

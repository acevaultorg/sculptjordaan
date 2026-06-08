import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { ArrowRight, MessageCircle, Building2, Ban, Clock, Percent, CalendarCheck, Eye } from "lucide-react";

/**
 * Dedicated free-tryout landing page for studio rental — also the paid
 * Google Ads landing page for the "Trainers" ad group (campaign
 * SculptClub-Search-Brand-Jordaan-2026).
 *
 * Operator directive 2026-06-03: "improve this page, it's also used as
 * landing page for new trainers. main goal: book free try out OR send
 * whatsapp with questions. take into account possible clients would like
 * a chat first."
 *
 * What changed: WhatsApp was a below-the-fold *fallback*; now the two
 * operator goals are co-primary in the hero — [Boek gratis proefsessie]
 * + [Liever eerst even appen?]. A second "see the room first" card (Eerst
 * de ruimte zien) opens the same free studio try-out in a NEW TAB
 * (acuityFreeTrials.studioRentalTryout) — a free, no-obligation visit so
 * ZZP trainers can inspect the equipment + space before committing to
 * hourly rental. (Operator 2026-06-08: reuse the free try-out rather than
 * a separate WhatsApp tour; copy softened so nobody expects a 15-min tour
 * and lands on the 60-min trial calendar.)
 *
 * Conversion tracking: AcuityEmbed receives explicit intent="studio_rental"
 * + pricing="free" so a completed booking fires the Google Ads lead-form
 * conversion (NwwsCNGZlp8cEMG71YxD) with correct taxonomy. WhatsApp CTAs
 * carry plausible-event-name classes (tagged-events script is loaded).
 *
 * 2026-06-04: added a "Bekijk de ruimte" studio gallery (PhotoGalleryLightbox,
 * reused from /studio-huren) before the tour card so trainers can see the room
 * on the page; the header Boek/Try-Out CTA is now suppressed on this
 * booking-step route (see isBookingStepPath in header.tsx).
 *
 * EN parity: src/app/en/studio-rental/free-trial/page.tsx (keep in sync).
 */

export const metadata: Metadata = {
  title: { absolute: "Gratis proefsessie — Studio Huren | SculptClub Jordaan" },
  description:
    "Boek je gratis 60-minuten proefsessie in onze privé studio in Amsterdam Jordaan — of stel eerst je vraag via WhatsApp. Geen creditcard, geen contract, 0% commissie. Voor personal trainers.",
  alternates: {
    canonical: "/nl/studio-huren/gratis-test",
    languages: {
      nl: "/nl/studio-huren/gratis-test",
      en: "/en/studio-rental/free-trial",
    },
  },
  // Conversion landing — indexable but lean (the /nl/studio-huren parent
  // is the SEO anchor for the head-query "studio huren amsterdam"; this
  // page just needs to be findable via the Try-Out funnel and direct links).
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gratis proefsessie — Studio Huren bij SculptClub",
    description: "60 minuten in de privé studio. Boek gratis of app je vraag — geen creditcard, geen contract.",
    url: "/nl/studio-huren/gratis-test",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SculptClub Studio Huren — Amsterdam Jordaan" }],
  },
};

const benefits = [
  { icon: Building2, text: "Privé studio aan de gracht in de Jordaan" },
  { icon: Percent, text: "0% commissie · jouw klanten, jouw tarieven" },
  { icon: Clock, text: "Per uur vanaf €12 · geen contract" },
  { icon: Ban, text: "Gratis proefsessie · geen creditcard" },
];

// Studio gallery — lets trainers SEE the room before booking (the "Eerst de
// ruimte zien" desire this page already speaks to). Reuses the same
// PhotoGalleryLightbox + studio shots as /nl/studio-huren — tap a thumb for a
// fullscreen slider. Space + equipment + canal-side atmosphere.
const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de privé studio in de Jordaan — SCULPT muur, sprintbaan en apparatuur" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "Krachtruimte met Rogue rack, sled en bumper plates onder de lichtkoepel" },
  { src: "/images/studio/power-rack.jpeg", alt: "Rogue power rack, sled en bumper plates bij SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell-rack met planten en platenspeler — de boutique-hoek van de studio" },
  { src: "/images/studio/echo-bike-corner.jpg", alt: "Echo Bike en conditioning-hoek bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Open deuren met uitzicht op de Egelantiersgracht in de Jordaan" },
];

export default function GratisTestStudioHurenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Studio Huren", url: "/nl/studio-huren" },
          { name: "Gratis proefsessie", url: "/nl/studio-huren/gratis-test" },
        ]}
      />

      {/* Hero — two co-primary paths: book the free try-out OR chat first. */}
      <Section>
        <div className="mb-7 text-center max-w-2xl mx-auto">
          <p className="overline">Voor personal trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Gratis proefsessie — Studio Huren
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minuten in onze privé studio in de Jordaan. Geen creditcard, geen contract, altijd gratis annuleren — en 0% commissie op je eigen klanten.
          </p>

          {/* Two co-primary CTAs = the two operator goals, side by side */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href="#book"
              size="lg"
              className="w-full sm:w-auto plausible-event-name=gratis_test_book_cta"
            >
              <CalendarCheck className="mr-2 h-4 w-4" />
              Boek gratis proefsessie
            </ButtonLink>
            <ButtonLink
              href={whatsappLinks.studioNl}
              external
              size="lg"
              variant="outline"
              className="w-full sm:w-auto plausible-event-name=gratis_test_studio_whatsapp_hero"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Liever eerst even appen?
            </ButtonLink>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Geen zin om meteen te boeken? App je vraag — we reageren meestal binnen 1 uur.
          </p>
        </div>

        {/* Trust strip — 4 trainer-relevant bullets */}
        <FadeIn>
          <ul className="mx-auto max-w-2xl grid gap-3 sm:grid-cols-2 mb-10 text-sm">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-2.5 text-muted-foreground">
                <b.icon className="h-4 w-4 text-brand shrink-0" aria-hidden />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Booking surface — the canonical conversion. scroll-mt keeps the
            heading clear of the sticky header when the Book CTA jumps here. */}
        <div id="book" className="scroll-mt-24">
          <h2 className="mb-4 text-center text-xl font-semibold">Boek je gratis proefsessie</h2>
          <AcuityEmbed
            url={acuityFreeTrials.studioRentalTryout}
            title="Boek je gratis Studio Rental proefsessie bij SculptClub"
            intent="studio_rental"
            pricing="free"
            height={900}
            className="-mx-4 rounded-none overflow-hidden bg-white sm:mx-auto sm:max-w-3xl sm:rounded-2xl"
          />
        </div>
      </Section>

      {/* Studio gallery — let trainers SEE the room before booking. Sits right
          before the "Eerst de ruimte zien" tour card so the photos + the tour
          CTA reinforce each other. Reuses PhotoGalleryLightbox (tap = fullscreen
          slider) from /nl/studio-huren. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">De studio</p>
              <h2 className="mt-2 text-xl font-semibold">Bekijk de ruimte</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Privé studio aan de Egelantiersgracht in de Jordaan — tik op een foto voor groot.
              </p>
            </div>
            <PhotoGalleryLightbox images={galleryImages} locale="nl" />
          </div>
        </FadeIn>
      </Section>

      {/* Chat-first block — TWO low-commitment paths for trainers who aren't
          ready to book: ask a question, or come see the room first. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-sm font-semibold mb-4">Nog niet klaar om te boeken?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center flex flex-col">
                <MessageCircle className="mx-auto h-5 w-5 text-brand" aria-hidden />
                <p className="mt-2 text-base font-semibold">Stel je vraag</p>
                <p className="mt-1 mb-4 text-sm text-muted-foreground grow">
                  App ons over tarieven, beschikbaarheid of apparatuur. Reactie meestal binnen 1 uur.
                </p>
                <ButtonLink
                  href={whatsappLinks.studioNl}
                  external
                  variant="outline"
                  className="w-full plausible-event-name=gratis_test_studio_whatsapp"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp ons
                </ButtonLink>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center flex flex-col">
                <Eye className="mx-auto h-5 w-5 text-brand" aria-hidden />
                <p className="mt-2 text-base font-semibold">Eerst de ruimte zien</p>
                <p className="mt-1 mb-4 text-sm text-muted-foreground grow">
                  Bekijk de studio en apparatuur met eigen ogen tijdens een gratis, vrijblijvende proefsessie. Geen creditcard.
                </p>
                <ButtonLink
                  href={acuityFreeTrials.studioRentalTryout}
                  external
                  variant="outline"
                  className="w-full plausible-event-name=gratis_test_studio_tour"
                >
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Boek je gratis bezoek
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Escape-hatch: visitor who wants the full picture (rates, packages,
          studio gallery, value-prop, FAQ) can hop to the main page. */}
      <Section>
        <FadeIn>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-3">Of bekijk alles over studio huren — tarieven, pakketten &amp; de studio</p>
            <ButtonLink
              href="/nl/studio-huren"
              variant="outline"
              size="default"
              className="plausible-event-name=gratis_test_studio_to_main"
            >
              Tarieven, pakketten &amp; meer
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

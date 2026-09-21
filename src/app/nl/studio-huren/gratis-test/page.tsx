import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { LandingVideo } from "@/components/marketing/landing-video";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { GoogleMap } from "@/components/marketing/google-map";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle, Building2, Ban, Clock, Percent, CalendarCheck, Eye, Star } from "lucide-react";

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
 * 2026-06-21 (operator): NO iframe. The embedded Acuity calendar was replaced
 * by buttons (hero + a dedicated booking card) that open the free Studio Rental
 * try-out in a NEW TAB (acuityFreeTrials.studioRentalTryout). Acuity's own page
 * is mobile-native + supports Apple Pay and avoids the fixed-height
 * scroll-in-scroll the iframe had on mobile. Conversion tracking: ButtonLink
 * auto-fires trackBeginBooking on the Acuity URL (begin-booking intent), and the
 * global Acuity confirm script fires the Google Ads booking conversion on
 * completion; WhatsApp CTAs carry plausible-event-name classes.
 *
 * 2026-06-21: added a "Zo ziet het eruit" studio-promo video band (lazy
 * LandingVideo, zero LCP impact) between the trust strip and the booking card —
 * see it in action → book. The "Bekijk de ruimte" gallery (PhotoGalleryLightbox,
 * reused from /studio-huren) still lets trainers see the room before the tour
 * card; the header Boek/Try-Out CTA stays suppressed on this booking-step route
 * (see isBookingStepPath in header.tsx).
 *
 * EN parity: src/app/en/studio-rental/free-trial/page.tsx (keep in sync).
 */

export const metadata: Metadata = {
  title: { absolute: "Gratis proefsessie — Studio Huren | SculptClub Jordaan" },
  description:
    "Boek je gratis 60-minuten proefsessie in onze privé studio in Amsterdam Jordaan — of stel eerst je vraag via WhatsApp. Geen creditcard, geen contract, eigen tarief & klanten. Voor personal trainers.",
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
  { icon: Percent, text: "Jouw klanten, jouw tarieven: jij houdt 100%" },
  { icon: Clock, text: "Per uur vanaf €12 · geen contract" },
  { icon: Ban, text: "Gratis proefsessie · geen creditcard" },
];

// Studio gallery — lets trainers SEE the room before booking (the "Eerst de
// ruimte zien" desire this page already speaks to). Reuses the same
// PhotoGalleryLightbox + studio shots as /nl/studio-huren — tap a thumb for a
// fullscreen slider. Space + equipment + canal-side atmosphere.
const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de privé studio in de Jordaan: SCULPT muur, sprintbaan en apparatuur" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "Krachtruimte met Rogue rack, sled en bumper plates onder de lichtkoepel" },
  { src: "/images/studio/power-rack.jpeg", alt: "Rogue power rack, sled en bumper plates bij SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell-rack met planten en platenspeler, de boutique-hoek van de studio" },
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
            Gratis proefsessie: Studio Huren
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minuten in onze privé studio in de Jordaan. Geen creditcard, geen contract, altijd gratis annuleren, en je houdt 100% van je tarief.
          </p>

          {/* Two co-primary CTAs = the two operator goals, side by side */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href={acuityFreeTrials.studioRentalTryout}
              external
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
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold">{siteConfig.rating.value}</span>
            <span className="text-muted-foreground">op Google · {siteConfig.rating.count} reviews</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Geen zin om meteen te boeken? App je vraag. We reageren meestal binnen 1 uur.
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

      </Section>

      {/* See-it-in-action — the studio promo (studio-promo.mp4 = the
          trainer-recruitment clip per studio-video-band.tsx). Lazy LandingVideo:
          zero LCP impact, the mp4 loads only on scroll. Sits between the trust
          strip and the booking card so a trainer sees the room in motion, then
          books (see it → act). */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">Zo ziet het eruit</p>
              <h2 className="mt-2 text-xl font-semibold">Train in onze privé studio in de Jordaan</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                De studio, apparatuur en sfeer aan de gracht, in beeld.
              </p>
            </div>
            <LandingVideo
              src="/videos/studio-promo.mp4"
              poster="/videos/studio-promo-poster.jpg"
              label="SculptClub: de privé studio in Amsterdam Jordaan, in beeld"
            />
          </div>
        </FadeIn>
      </Section>

      {/* Zo-werkt-het — 3 concrete stappen. Clarity: bezoekers scrollen zonder
          te boeken; het grootste stille bezwaar bij "gratis proberen" is
          onzekerheid over wat boeken betekent. Dus: 30 seconden boeken,
          deurcode via WhatsApp, vrijblijvend weglopen. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="overline">Zo werkt het</p>
              <h2 className="mt-2 text-xl font-semibold">Jouw gratis probeersessie, stap voor stap</h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              {[
                { n: "1", title: "Kies een moment", text: "Boek een tijd die jou uitkomt. Duurt 30 seconden. Geen creditcard, niks invullen." },
                { n: "2", title: "Loop binnen & train", text: "Je krijgt de deurcode via WhatsApp. 60 minuten in de studio, alleen of met je klant." },
                { n: "3", title: "Beslis vrijblijvend", text: "Bevalt het? Huur vanaf €12/uur, betaal per boeking. Niks voor jou? Gewoon weglopen. Er valt niks op te zeggen." },
              ].map((s) => (
                <li key={s.n} className="text-center sm:text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                    {s.n}
                  </span>
                  <p className="mt-3 text-base font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </Section>

      {/* Booking surface — the canonical conversion. NO iframe (operator
          2026-06-21): the embedded Acuity calendar is replaced by a button that
          opens our agenda in a NEW TAB. Acuity's own page is mobile-native +
          supports Apple Pay, and avoids the fixed-height scroll-in-scroll the
          iframe had on mobile. ButtonLink auto-fires trackBeginBooking on the
          Acuity URL; the global Acuity confirm script still fires the booking
          conversion. scroll-mt keeps the heading clear of the sticky header for
          any #book deep links. */}
      <Section>
        <FadeIn>
          <div id="book" className="scroll-mt-24">
            <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
              <CalendarCheck className="mx-auto h-6 w-6 text-brand" aria-hidden />
              <h2 className="mt-3 text-xl font-semibold">Boek je gratis proefsessie</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                60 minuten in de privé studio. Geen creditcard, geen contract. Kies een tijd die jou uitkomt.
              </p>
              <ButtonLink
                href={acuityFreeTrials.studioRentalTryout}
                external
                size="lg"
                className="mt-5 w-full sm:w-auto plausible-event-name=gratis_test_book_cta_section"
              >
                <CalendarCheck className="mr-2 h-4 w-4" />
                Boek gratis proefsessie
              </ButtonLink>
              <p className="mt-3 text-xs text-muted-foreground">
                Opent onze agenda in een nieuw tabblad · altijd gratis annuleren
              </p>
            </div>
          </div>
        </FadeIn>
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
                Privé studio aan de Egelantiersgracht in de Jordaan. Tik op een foto voor groot.
              </p>
            </div>
            <PhotoGalleryLightbox images={galleryImages} locale="nl" />
          </div>
        </FadeIn>
      </Section>

      {/* Social proof — echte Google-reviews (5.0). Een trainer die twijfelt of
          deze studio serieus is, wil andermans woorden, niet de onze. */}
      <ReviewsPreview locale="nl" />

      {/* Locatie — waar IS het? Praktische drempel weg: adres, kaart, route,
          openingstijden. De gracht in de Jordaan is ook een verkoopargument. */}
      <GoogleMap locale="nl" />

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
            <p className="mb-3">Of bekijk alles over studio huren: tarieven, pakketten &amp; de studio</p>
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

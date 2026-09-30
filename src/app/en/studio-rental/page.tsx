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
import { RentalTabs } from "@/components/marketing/rental-tabs";
import { LandingVideo } from "@/components/marketing/landing-video";
import {
  Dumbbell,
  Lock,
  Clock,
  Percent,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { TrainerValueProp } from "@/components/marketing/trainer-value-prop";
import { StudioRateTable } from "@/components/marketing/studio-rate-table";
import { StudioBookingFacts } from "@/components/marketing/studio-booking-facts";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Studio Rental | SculptClub Jordaan" },
  description:
    "Private training studio in the Jordaan from €12 an hour. Your clients, your rates, no contract, free cancellation. First session free.",
  alternates: {
    canonical: "/en/studio-rental",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
  // Per-page OG/Twitter so social/direct shares of THIS page preview the
  // page's own pitch + correct URL (not the homepage studio-rental default).
  openGraph: {
    type: "website",
    url: "/en/studio-rental",
    title: "Personal Trainer Studio Rental | SculptClub Jordaan",
    description:
      "Private training studio in the Jordaan from €12 an hour. Your clients, your rates, no contract, free cancellation. First session free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Studio Rental | SculptClub Jordaan",
    description:
      "Private training studio in the Jordaan from €12 an hour. Your clients, your rates, no contract, free cancellation. First session free.",
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professional equipment",
    description:
      "Power rack, cable machine, dumbbells from 4 to 40 kg and an Echo Bike.",
  },
  {
    icon: Lock,
    title: "Private space",
    description: "Book the whole studio and it's just you and your clients. With half the studio, another trainer or Open Gym uses the other half.",
  },
  {
    icon: Clock,
    // NL parity: src/app/nl/studio-huren/page.tsx. Availability is a top-3
    // objection for a trainer choosing a studio and was absent from this
    // page; the old line ("Book when it suits you") is the generic claim
    // every studio makes. Replaced with the specific, verifiable version —
    // a 13-week Acuity booking analysis (2026-07-27) puts the studio at
    // ~47% utilisation with weekday evenings, Monday and especially the
    // weekend wide open. Phrased as "plenty of hours still free" (there IS
    // space), never as a promise of a specific slot — Open Gym / ClassPass
    // share the room on some weekend hours, so no exclusivity claim here.
    title: "Real availability",
    description:
      "Book by the hour, whenever suits you. Plenty of hours still free on weekday evenings and at weekends.",
  },
  {
    icon: Percent,
    title: "You keep 100%",
    description: "You set your own rates and clients. We only charge rent.",
  },
];

// Lightbox gallery — MUST NOT duplicate the hero rotation below
// (HERO_IMAGES line ~87-91). Same-page dup audit 2026-05-27 found
// turf-lane-canal + back-room-full + canal-view-doors were rendered
// in both the hero crossfade AND this gallery — visitor saw the same
// 3 shots twice per page. Swapped to equipment-focused angles that
// complement the hero's spatial overviews. NL parity at
// src/app/nl/studio-huren/page.tsx.
const galleryImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Rogue power rack with Olympic barbell at SculptClub" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Full dumbbell set up to 40 kg at SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack with plants and vinyl player at SculptClub" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overview of the SculptClub private studio in the Jordaan" },
];

/**
 * Hero side-panel rotates through 4 studio angles. Same RotatingImageStack
 * discipline as homepage hero — only the photo crossfades, CTAs + headline
 * stay static. Per operator directive 2026-05-20: "new trainers should get
 * a great impressions of the space quickly".
 */
const HERO_IMAGES = [
  { src: "/images/studio/gym-latest.jpg", alt: "Private studio interior at SculptClub Jordaan — personal training equipment, dumbbells, power rack and cable machine" },
  { src: "/images/studio/turf-lane-canal.jpg", alt: "Turf lane with SCULPT wall logo and canal view at SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Back room with sled, Rogue rack and bench under skylight at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "View from SculptClub to Egelantiersgracht canal Amsterdam" },
];

// Top-of-page strip (2026-09-30): the room, the back room, the canal view.
const STRIP_IMAGES = [HERO_IMAGES[0], HERO_IMAGES[2], HERO_IMAGES[3]];

const faqs = [
  {
    q: "How much does it cost to rent the studio?",
    a: "Half studio (1:1) from \u20ac12 per 60 minutes. Full studio (small group) from \u20ac17 per 60 minutes. Save 10-23% with a discount package.",
  },
  {
    q: "What discount packages are available?",
    a: "Starter \u20ac89 (10% off), Routine \u20ac179 (15% off), Pro \u20ac299 (20% off) and Volume \u20ac499 (23% off). Packages are valid for 1 year.",
  },
  {
    q: "What is included with studio rental?",
    a: "All equipment, wifi, music, climate control and cleaning. The studio is fully private during your rental time.",
  },
  {
    q: "Do I need insurance?",
    a: "Yes, as a freelance trainer or physiotherapist you need valid professional liability insurance. This is your own responsibility.",
  },
  {
    q: "How does booking work?",
    a: "You book online via our booking system. At midnight before your session you receive a door code via WhatsApp to enter the studio.",
  },
  {
    q: "Can I try the studio first?",
    a: "Yes, you can book a free trial session to see and try the studio. No obligations.",
  },
  {
    q: "Will I get clients via SculptClub?",
    a: "Yes. As a host you get your own profile page on this site with search filters (language, specialty). Anyone who finds SculptClub via Google or Instagram can view and book you directly. We don't sit between those bookings. No profile yet? Ask via WhatsApp and we'll add you.",
  },
  {
    q: "Can I reserve recurring time slots?",
    a: "Yes. Request a fixed weekly or monthly schedule via WhatsApp or the contact form. Suitable for trainers with a steady client base. No long contracts, cancellable monthly.",
  },
  {
    q: "What is the minimum number of hours?",
    a: "No minimum. Book 1 hour or multiple hours per week. Packages (Starter/Routine/Volume) are cheaper if you come often, but never required.",
  },
  {
    q: "What if I don't show up?",
    a: "Cancel or reschedule is always free, with no no-show fee. We rely on your professionalism. Recurring last-minute cancellations we discuss directly.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "CreditCard, Apple Pay, Google Pay, or invoice (on request). iDEAL via Apple Pay. Volume package (€499) can be paid by bank transfer on request. WhatsApp us.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function StudioRentalPageEN() {
  return (
    <PageLayout audience="rental">
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Studio Rental","url":"/en/studio-rental"}]} />
      <ServiceJsonLd
        name="Studio Rental — Personal Trainer Amsterdam"
        description="Rent a private training studio in Amsterdam Jordaan for freelance personal trainers and physiotherapists. Professional equipment, flexible by the hour, your own rates and clients."
        url="/en/studio-rental"
        priceRange="From €12 per hour"
        offers={[
          { name: "Half studio (1-to-1, max 2 people), 60 min", price: 12, url: "/en/studio-rental" },
          { name: "Full studio (small group, 1 to 8 people), 60 min", price: 17, url: "/en/studio-rental" },
          { name: "Free trial session for trainers, 60 min", price: 0, url: "/en/studio-rental/free-trial" },
        ]}
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* ═══ Top: booking widget — NL parity at
          src/app/nl/studio-huren/page.tsx. Operator directive 2026-05-27:
          page must LEAD with the booking widget. Hero + standalone
          Pricing + Packages + #schedule embed all consolidated into ONE
          surface. SEO h1 retained. ═══ */}
      <Section id="book">
        <div className="mb-4 text-center sm:mb-6">
          <p className="overline text-primary">For Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Studio rental for trainers in Amsterdam
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            From €12 per hour · Egelantiersgracht, Jordaan
          </p>
        </div>

        {/* 2026-09-30 mobile booking-path pass (NL parity): 3-photo strip, then
            straight into the rate table. Trial entry + weekend note moved
            directly under the table. */}
        <div className="mx-auto mb-5 max-w-2xl">
          <PhotoGalleryLightbox images={STRIP_IMAGES} locale="en" variant="strip" />
        </div>

        {/* Weekend-availability hook — NL parity src/app/nl/studio-huren.
            Task mtdbcq8ie715lw (2026-08-28). Deliberately durable copy, not a
            hardcoded "13-week" / literal hour-range claim — exact hours shift
            as ClassPass classes occupy specific weekend slots (see
            docs/CLASSPASS-FULLSTUDIO-PRIORITY.md: Sat 17-21h + Sun 16-21h run
            recurring ClassPass), so a static "16:00-22:00 guaranteed free"
            promise would go stale/wrong for those exact hours. Points to the
            live Acuity calendar via the Book button below.

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
        {/* Booking table is now the FIRST thing after the header — NL parity
            (operator 2026-07-17: "order of /nl/studio-huren is correct, this
            page is not"). Mirrors the NL 2026-07-04 redesign this page never
            received: the page is PRIMARY for trainers who ALREADY rent here, so
            they can book immediately; the "see the studio" content (WhatsApp
            tour + promo video) moved into the "First time here?" block BELOW
            the pricing, for first-time trainers. */}
        <RentalTabs
          locale="en"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                A credit package is booking credit for individual studio sessions. The struck-through price is your credit. Valid 1 year.
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
                    <p className="mt-2 text-sm text-discount font-medium">Save 10%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 8 half / 6 full studio sessions</p>
                    <ButtonLink href={acuityPackages.studio.starter} size="lg" className="mt-4 w-full">
                      Buy Starter
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center ring-2 ring-primary">
                  <CardHeader>
                    <Badge className="mx-auto mb-2">Most popular</Badge>
                    <CardTitle className="text-xl">Routine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€210</p>
                    <p className="text-3xl font-bold">€179</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 15%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 17 half / 12 full studio sessions</p>
                    <ButtonLink href={acuityPackages.studio.routine} size="lg" className="mt-4 w-full">
                      Buy Routine
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
                    <p className="mt-2 text-sm text-discount font-medium">Save 20%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 31 half / 22 full studio sessions</p>
                    <ButtonLink href={acuityPackages.studio.pro} size="lg" className="mt-4 w-full">
                      Buy Pro
                    </ButtonLink>
                  </CardContent>
                </Card>

                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge className="mx-auto mb-2" variant="secondary">Best deal</Badge>
                    <CardTitle className="text-xl">Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-through">€650</p>
                    <p className="text-3xl font-bold">€499</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 23%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 54 half / 38 full studio sessions</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Buy Volume
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sessions of 60 min: half studio (2 people) €12 · full studio €17. Your credit sets the number of sessions.
              </p>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Lowest rate: <span className="text-discount font-medium">€9.24/session</span> · Prefer bank transfer?{" "}
                <a href={whatsappLinks.bankTransferEn} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
                  WhatsApp us
                </a>
              </p>
            </div>
          }
          hourly={
            <div className="mx-auto max-w-3xl">
              <StudioRateTable
                headSpace="Space"
                headDuration="60 min"
                cta="Book"
                rows={[
                  { label: "Half studio (for 2 people)", price: "€12", href: acuityLinks.halfStudio60 },
                  { label: "Full studio (small group)", note: "1 to 8 people", price: "€17", href: acuityLinks.fullStudio60 },
                ]}
              />
              {/* First-timer trial entry, now a text link under the rows (NL parity). */}
              <p className="mt-3 text-center text-sm">
                <a
                  href="/en/studio-rental/free-trial"
                  className="plausible-event-name=studio_huren_trial_link inline-block py-3 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  First time? Try the studio free first
                  <ArrowRight className="ml-1 inline h-4 w-4 align-[-3px]" aria-hidden />
                </a>
              </p>
              <StudioBookingFacts locale="en" className="mt-3" />
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Doing a photo shoot or content?{" "}
                <a href="/en/photo-studio-rental" className="font-medium text-primary hover:underline">
                  Rent the studio as a photo studio
                </a>
              </p>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Book per session, no subscription or contract, and <strong className="text-foreground">free cancellation anytime</strong>: money or credits come back automatically.{" "}
                <strong className="text-foreground">Half studio</strong> = 1-on-1 (max 2 people; the other half is then free for another trainer or Open Gym).{" "}
                <strong className="text-foreground">Full studio</strong> = private for 1 to 8 people.
              </p>
            </div>
          }
        />

        {/* "First time? Come see the studio." — NL-parity band (mirrors
            /nl/studio-huren): sits BELOW the booking table and routes
            first-time trainers to the free-trial page, keeping the WhatsApp
            tour + the studio promo video that used to sit above the pricing. */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="overline text-primary">First time here?</p>
          <p className="mt-2 text-xl font-bold">First time? Come see the studio.</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            See the space + equipment and try a free session before you rent. Nothing ties you in.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/en/studio-rental/free-trial" size="lg" className="w-full sm:w-auto">
              See the studio &amp; try a free session
            </ButtonLink>
            <a
              href={whatsappLinks.tourEn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 plausible-event-name=studio_rental_hero_tour relative after:absolute after:inset-x-0 after:top-1/2 after:h-11 after:-translate-y-1/2 after:content-['']"
            >
              Or book a free 15-min tour via WhatsApp
            </a>
          </div>
          <div className="mt-6">
            <LandingVideo
              src="/videos/studio-promo.mp4"
              poster="/videos/_rs/studio-promo-poster-full.webp"
              label="SculptClub — the studio in the heart of Amsterdam Jordaan, in motion"
            />
          </div>
        </div>
      </Section>

      {/* Indecisive-capture: low-friction WhatsApp before commitment */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Not sure which option?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {/* "advise" → "reply" mirrors the NL "we reageren" correction
                    (operator, earlier this session). */}
                WhatsApp us your situation. We usually reply within 1 hour.{" "}
                {/* Q tour option — EN parallel. */}
                Rather see the space first?{" "}
                <a
                  href={whatsappLinks.tourEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plausible-event-name=studio_rental_tour font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Book a free tour (15 min)
                </a>.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioEn}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=studio_rental_uncertain_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Client-growth value prop — what trainers GET beyond the room */}
      <TrainerValueProp locale="en" />

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="What you get"
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
          overline="For freelance trainers & physiotherapists"
          title="Your own studio, by the hour"
          description="No fixed rental costs. You rent only when you have a session and keep 100% of your rate."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">What you bring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Valid professional liability insurance",
                  "Your own clients and rates",
                  "Your knowledge and expertise as a trainer or physiotherapist",
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
              <h3 className="font-bold text-lg">What we provide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Fully equipped private studio for 1:1 and small group",
                  "You keep 100% of your session rate, we only charge rent",
                  "Flexible booking: only when you have a client",
                  "Door code via WhatsApp at midnight before your session",
                  "Professional equipment: squat rack, cable machine, dumbbells 4–40 kg, Echo Bike and more",
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

      {/* Just started — 2026-09-22, NL parity with /nl/studio-huren. The page
          sold a room to a trainer who already has a full week. Everything here
          is a PUBLISHED rate or a MEASURED fact; no starter discount is
          invented, and the quiet hours are named as availability, not a price.
          Measured 2026-09-21 from Acuity's availability API and the 90-day
          export: 234 weekday-morning bookings against 95 weekday afternoons and
          49 across the whole weekend; Saturday and Sunday offer start times
          06:00-21:00. */}
      <Section>
        <SectionHeader
          overline="Just started"
          title="Your first client, without fixed costs"
          description="Just qualified, or just gone freelance? You rent by the hour, so you only pay when you have a client."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          <FadeIn>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "One client is enough to start: you book one hour, no membership and no minimum.",
                "Half studio from €12 per 60 minutes. You keep 100% of what you charge your client.",
                "The quiet hours are weekday afternoons and the weekend. Saturday and Sunday you can book from 06:00 to 21:00 and the studio is usually empty.",
                "Your first session is free, so you can try the room with a client there.",
                "You need professional liability insurance, nothing else.",
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
              <ButtonLink href="/en/studio-rental/free-trial" size="lg" className="w-full sm:w-auto">
                Try the studio for free
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Compare for yourself — competitor-contrast, UNNAMED market facts
          only. Live-verified 2026-08-14: fixed monthly rent elsewhere from
          €600/month · minimum commitment elsewhere from 5 hrs/week ·
          premium alternative €22.50/hour. Date stamp on-page; no names.
          Frame = flexible + per hour, never "cheapest". NL parity:
          /nl/studio-huren. */}
      <Section>
        <SectionHeader
          overline="Compare for yourself"
          title="By the hour, no minimum"
          description="How renting by the hour with us compares to what's common elsewhere in Amsterdam."
        />
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Elsewhere in Amsterdam</th>
                    <th className="px-4 py-3 text-left font-medium">At SculptClub</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-muted-foreground">Fixed monthly rent from €600 per month</td>
                    <td className="px-4 py-3 font-medium">€12 per hour, only when you have a session</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 text-muted-foreground">Minimum commitment from 5 hours per week</td>
                    <td className="px-4 py-3 font-medium">No minimum, no contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Premium alternative: €22.50 per hour</td>
                    <td className="px-4 py-3 font-medium">Your clients, your rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Amsterdam market rates, as of Aug 2026.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Gallery — clickable thumbs open fullscreen lightbox slider on tap.
          Operator directive 2026-05-20: "if people click this photos they
          should get enlarged slider". See PhotoGalleryLightbox for the
          ←/→/Esc + swipe + scroll-lock + focus-trap mechanics. */}
      <Section bg="muted">
        <SectionHeader overline="The studio" title="See the Space" />
        <PhotoGalleryLightbox images={galleryImages} locale="en" />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Frequently asked questions" title="Studio Rental FAQ" />

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
            <h2 className="text-2xl font-bold mb-6">Read more about studio rental</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/en/studio-rental/calculator" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Calculator</p>
                <p className="font-semibold group-hover:text-brand transition-colors">See what you keep vs a commission gym →</p>
              </a>
              {/* De-orphaned 2026-08-28: this booking page's ONLY inbound link was its own
                  translation (nl<->en language switch) — a closed loop, zero links from any
                  content page, despite being indexable + in the sitemap. Booking pages on the
                  studio-rental path (=93% of revenue) must be reachable from the money page. */}
              <a href="/en/book-studio" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">Booking</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Book the studio: hourly availability and rates →</p>
              </a>
              <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Studio rental for trainers in Amsterdam</p>
              </a>
              <a href="/en/blog/gym-rental-per-hour-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Gym rental per hour Amsterdam: flexible training space</p>
              </a>
              <a href="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Rent training space as a freelance personal trainer</p>
              </a>
              <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Physiotherapy studio rental in Amsterdam</p>
              </a>
              <a href="/en/become-trainer" className="group block rounded-xl border border-brand/30 bg-brand/5 p-5 transition-colors hover:bg-brand/10">
                <p className="text-sm text-brand mb-1">For trainers</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Become a trainer at SculptClub: full freedom</p>
              </a>
              <a href="/en/blog/become-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Become a personal trainer in Amsterdam</p>
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
              Ready to train your clients here?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Try the studio for free with a trial session. No obligations.
            </p>
            {/* 2026-05-27 final: page leads with the booking widget at
                #book. Bottom CTA scrolls back there. NL parity. */}
            <div className="mt-8 flex flex-col items-center justify-center gap-2">
              <ButtonLink href="#book" size="lg">
                See rates and times
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              {/* One button per screen: WhatsApp is a quiet text link here. */}
              <a
                href={whatsappLinks.studioEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Rather ask a question first? WhatsApp us
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

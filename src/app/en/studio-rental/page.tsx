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
import { getColor } from "@/lib/image-color-manifest";
import {
  Dumbbell,
  Lock,
  Clock,
  Ban,
  CreditCard,
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

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Studio Rental | SculptClub Jordaan" },
  description:
    "Private training studio in Amsterdam Jordaan from €12/hour — 0% commission, no contract, free cancellation. For PT and physiotherapist. First session free.",
  alternates: {
    canonical: "/en/studio-rental",
    languages: {
      nl: "/nl/studio-huren",
      en: "/en/studio-rental",
    },
  },
};

const features = [
  {
    icon: Dumbbell,
    title: "Professional equipment",
    description:
      "Power rack, cable machine, dumbbells and everything you need.",
  },
  {
    icon: Lock,
    title: "Private space",
    description: "No onlookers. Just you and your client(s).",
  },
  {
    icon: Clock,
    title: "Flexible by the hour",
    description: "Book when it suits you. No fixed schedules.",
  },
  {
    icon: Ban,
    title: "No commission",
    description: "You set your own rates. We only charge rent.",
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
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Full dumbbell set up to 32 kg at SculptClub" },
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

const faqs = [
  {
    q: "How much does it cost to rent the studio?",
    a: "Half studio (1:1) from \u20ac12 per 60 minutes. Full studio (max 6 people) from \u20ac17 per 60 minutes. Save 10-23% with a discount package.",
  },
  {
    q: "What discount packages are available?",
    a: "Starter \u20ac89 (10% off), Routine \u20ac199 (15% off) and Volume \u20ac549 (23% off). Packages are valid for 1 year.",
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
    a: "You book online via our booking system. The night before your session you receive a door code via WhatsApp to enter the studio.",
  },
  {
    q: "Can I try the studio first?",
    a: "Yes, you can book a free trial session to see and try the studio. No obligations.",
  },
  {
    q: "Will I get clients via SculptClub?",
    a: "Yes. As a host you get your own profile page on this site with search filters (language, specialty). Clients who find SculptClub via Google or Instagram can view and book you directly. No commission on those bookings — we just connect.",
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
    a: "Cancel or reschedule is always free — no no-show fee. We rely on your professionalism. Recurring last-minute cancellations we discuss directly.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "CreditCard, Apple Pay, Google Pay, or invoice (on request). iDEAL via Apple Pay. Volume package (€549) can be paid by bank transfer on request — WhatsApp us.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function StudioRentalPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Studio Rental","url":"/en/studio-rental"}]} />
      <ServiceJsonLd
        name="Studio Rental — Personal Trainer Amsterdam"
        description="Rent a private training studio in Amsterdam Jordaan for freelance personal trainers and physiotherapists. Professional equipment, flexible by the hour, no commission."
        url="/en/studio-rental"
        priceRange="From €12 per hour"
      />
      <FaqJsonLd faqs={faqJsonLdData} />
      {/* ═══ Top: booking widget — NL parity at
          src/app/nl/studio-huren/page.tsx. Operator directive 2026-05-27:
          page must LEAD with the booking widget. Hero + standalone
          Pricing + Packages + #schedule embed all consolidated into ONE
          surface. SEO h1 retained. ═══ */}
      <Section id="book">
        <div className="mb-6 text-center">
          <p className="overline text-primary">For Personal Trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Studio rental for personal trainers in Amsterdam
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            From €12/hr · 0% commission · Free cancellation · Daily 06:30–22:00
          </p>
        </div>

        {/* Studio promo (operator's SculptClub film) — show the real studio +
            Amsterdam location before the message-us CTA. Lazy + muted autoplay,
            zero LCP impact (loads only when scrolled near). */}
        <div className="mb-8">
          <LandingVideo
            src="/videos/studio-promo.mp4"
            poster="/videos/studio-promo-poster.jpg"
            label="SculptClub — the studio in the heart of Amsterdam Jordaan, in motion"
          />
        </div>

        {/* WhatsApp-first CTA — operator insight 2026-06-18: rent clients
            message FIRST (ask availability/rate before committing). Data: ~135
            calendar clicks → ~3 bookings last month, while the serious renters
            WhatsApp. Lead with chat; self-serve booking stays right below. */}
        <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-lg font-bold">The fastest way into the studio: send us a WhatsApp</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Ask about availability, your rate, or a fixed weekly schedule — usually answered within 1 hour. Feel free to bring your own clients.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappLinks.studioEn}
              external
              size="lg"
              className="w-full sm:w-auto plausible-event-name=studio_rental_hero_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp us about studio rental
            </ButtonLink>
            <a
              href={whatsappLinks.tourEn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 plausible-event-name=studio_rental_hero_tour"
            >
              Or book a free 15-min tour first
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Prefer to book yourself right away? Live rates &amp; availability below ↓
          </p>
        </div>

        <RentalTabs
          locale="en"
          packages={
            <div className="mx-auto max-w-5xl">
              <p className="mb-4 text-center text-sm text-muted-foreground">
                A credit package is booking credit for individual studio sessions — the struck-through price is your credit. Valid 1 year.
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
                    <p className="text-sm text-muted-foreground line-through">€234</p>
                    <p className="text-3xl font-bold">€199</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 15%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 19 half / 14 full studio sessions</p>
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
                    <p className="text-sm text-muted-foreground line-through">€436</p>
                    <p className="text-3xl font-bold">€349</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 20%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 36 half / 26 full studio sessions</p>
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
                    <p className="text-sm text-muted-foreground line-through">€713</p>
                    <p className="text-3xl font-bold">€549</p>
                    <p className="mt-2 text-sm text-discount font-medium">Save 23%</p>
                    <p className="mt-1 text-xs text-muted-foreground">≈ 59 half / 42 full studio sessions</p>
                    <ButtonLink href={acuityPackages.studio.volume} size="lg" className="mt-4 w-full">
                      Buy Volume
                    </ButtonLink>
                  </CardContent>
                </Card>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sessions of 60 min — half studio (max 2) €12 · full studio (max 6) €17. 90 min or a mix is fine; your credit sets the count.
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
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Book per session. No subscription, no contract,{" "}
                <strong className="text-foreground">free cancellation anytime</strong>.{" "}
                <strong className="text-foreground">Half studio</strong> = 1-on-1 sessions (max 2 people; the other half can be used by another trainer at the same time).{" "}
                <strong className="text-foreground">Full studio</strong> = fully private (max 6 people).
              </p>
              <div className="overflow-hidden rounded-xl border bg-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-medium">Space</th>
                      <th className="px-4 py-3 text-center font-medium">60 min</th>
                      <th className="px-4 py-3 text-center font-medium">90 min</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Half studio (max 2)</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€12</span>
                          <ButtonLink href={acuityLinks.halfStudio60} size="sm">Book</ButtonLink>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€17</span>
                          <ButtonLink href={acuityLinks.halfStudio90} size="sm">Book</ButtonLink>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Full studio (max 6)</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€17</span>
                          <ButtonLink href={acuityLinks.fullStudio60} size="sm">Book</ButtonLink>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                          <span className="font-semibold">€24</span>
                          <ButtonLink href={acuityLinks.fullStudio90} size="sm">Book</ButtonLink>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <CreditCard className="h-3.5 w-3.5" />
                <span>CreditCard, Apple Pay, Google Pay or invoice</span>
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
              <p className="text-base font-semibold">Not sure which option?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {/* "advise" → "reply" mirrors the NL "we reageren" correction
                    (operator, earlier this session). */}
                WhatsApp us your situation — we usually reply within 1 hour.{" "}
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

      {/* Slideshow + trust strip — moves below the booking widget. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
              style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-semibold">5.0 Google</span>
              </span>
              <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
              <span className="font-semibold text-foreground">Private studio</span>
              <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
              <span className="font-medium text-muted-foreground">Egelantiersgracht · Jordaan</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Client-growth value prop — what trainers GET beyond the room */}
      <TrainerValueProp locale="en" />

      {/* Features */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="Everything You Need"
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
          description="No fixed rental costs, no commission on your revenue. Rent only when you have a session."
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
                  "Zero commission — you keep 100% of your session rate",
                  "Flexible booking: only when you have a client",
                  "Door code via WhatsApp the evening before",
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
              <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Studio rental for personal trainers in Amsterdam</p>
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
                <p className="font-semibold group-hover:text-brand transition-colors">Become a trainer at SculptClub — 0% commission</p>
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
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink href="#book" size="lg">
                Go to booking form
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioEn}
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

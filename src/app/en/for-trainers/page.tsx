import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { RotatingImageStack } from "@/components/marketing/rotating-image-stack";
import { getColor } from "@/lib/image-color-manifest";
import { ArrowRight, Building2, Users, FileText, MapPin, CheckSquare, Scale, Calendar } from "lucide-react";
import { acuityFreeTrials } from "@/config/acuity";

const HERO_IMAGES = [
  { src: "/images/studio/training-squat-cinematic.jpg", alt: "Private squat rack in the SculptClub studio in Jordaan" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Full overview of the SculptClub private studio in the Jordaan" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal trainer running a session at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Canal view from inside the SculptClub studio" },
  { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub facade on Egelantiersgracht in the Jordaan" },
];

export const metadata: Metadata = {
  title: { absolute: "For Personal Trainers in Amsterdam | SculptClub Jordaan" },
  description:
    "For freelance personal trainers in Amsterdam: rent the studio from €12/hr via SculptClub. Your clients, your rates, no contract, free cancellation anytime.",
  alternates: {
    canonical: "/en/for-trainers",
    languages: {
      nl: "/nl/voor-trainers",
      en: "/en/for-trainers",
    },
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Rent the studio",
    href: "/en/studio-rental",
    text:
      "Private training space in Jordaan from €12/hour. Full freedom, flexible per session, everything included.",
    cta: "See studio rental",
  },
  {
    icon: Users,
    title: "Join as a trainer",
    href: "/en/become-trainer",
    text:
      "Get your own profile on sculptclub.nl + client matching via /en/find-personal-trainer. For trainers growing their practice, not just renting space.",
    cta: "Join as a trainer",
  },
  {
    icon: FileText,
    title: "Becoming a freelance trainer",
    href: "/en/for-trainers/becoming-freelance-personal-trainer",
    text:
      "Practical guide for personal trainers considering going freelance in Amsterdam. Registration, rates, first clients, space.",
    cta: "Read the guide",
  },
  {
    icon: CheckSquare,
    title: "ZZP setup checklist",
    href: "/en/for-trainers/zzp-personal-trainer-checklist",
    text:
      "10-step practical guide: KvK, VAT, insurance, banking, admin. Costs, timeline, first invoice.",
    cta: "See the checklist",
  },
  {
    icon: MapPin,
    title: "Jordaan location analysis",
    href: "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
    text:
      "Why Jordaan works for PTs: client profile, average rates, competition, realistic earnings.",
    cta: "Read the analysis",
  },
  {
    icon: Scale,
    title: "Studio vs home vs outdoor",
    href: "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
    text:
      "Comparison with real numbers: own studio lease, at client's home, outdoor, or hourly rental — when to choose what.",
    cta: "See comparison",
  },
];

const trainerFaqs = [
  {
    q: "What does it actually cost to rent the studio?",
    a: "Half studio (1:1 sessions) from €12 per 60 min, €17 per 90 min. Full studio (max 6 people) €17/60 min, €24/90 min. Discount packages save 10-23%: Starter €89, Routine €199, Pro €349, Volume €549. All equipment, wifi, music and cleaning included. No subscription or brokerage fees.",
  },
  {
    q: "How do I book a session?",
    a: "Online via Acuity (our booking system). You receive immediate confirmation and the night before your session you get a unique door code via WhatsApp. No reception, no keys.",
  },
  {
    q: "Can I come for a free look first?",
    a: "Yes. We offer a free 60-minute trial session in the studio — see the space, train yourself, ask questions. No obligation, no sales pitch.",
  },
  {
    q: "Do I get my own profile on sculptclub.nl?",
    a: "Yes, if you join as a trainer. That's free with regular studio rental (from ~5 hours/month). Your profile appears on /en/find-personal-trainer where visitors who find SculptClub via Google can be matched directly with you.",
  },
  {
    q: "What's the difference between hourly rental and being a regular trainer?",
    a: "Hourly rental: pay per session, BYO clients, no site listing. Regular trainer: same studio + your own profile + match with inbound clients + featured on Instagram/TikTok. With both you just rent the space; you keep 100% of your rate.",
  },
  {
    q: "Do you take commission on my clients?",
    a: "No. We earn only from the studio rental — whatever you charge your client (€45, €75, €120) is entirely yours.",
  },
  {
    q: "What insurance do I need?",
    a: "Valid professional liability insurance (ZZP-pensioen.nl, Centraal Beheer or similar, from ~€25/month). This is your own responsibility and applies wherever you train, including here.",
  },
  {
    q: "What equipment is available?",
    a: "Rogue power rack, Olympic barbells + bumpers, dumbbells up to 32 kg, cable machine, sleds, kettlebells, plyo box, benches, bands, and cardio. Sufficient for 95% of standard PT sessions. Full list on /en/studio-rental.",
  },
  {
    q: "What are the operating hours?",
    a: "Daily 06:30-22:00. You book your own time slot in Acuity; during your hour you and your client have the studio entirely to yourselves (private).",
  },
  {
    q: "What's the cancellation policy?",
    a: "Studio rental cancels free via Acuity, any time. No time limit, no fees. Packages: valid for 1 year from purchase.",
  },
];

export default function ForTrainersHubEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="For personal trainers"
          title="Build your personal training practice in Amsterdam"
          description="SculptClub is built by and for freelance trainers. Private studio in Jordaan, your own clients and rates, own profile on our site. Start with hourly rental — or join as a regular trainer and get clients through us."
          center={false}
        />
        {/* CTAs moved ABOVE the slideshow 2026-05-19 (parallel to NL
            /voor-trainers). Mobile fold at iPhone 14 Pro put the first
            CTA at y=673 — 13 px below the 660 px fold. Action-first;
            slideshow as supporting evidence below. */}
        <FadeIn className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={acuityFreeTrials.studioRentalTryout}
            external
            size="lg"
            className="plausible-event-name=hub_hero_tour_click"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a free tour
          </ButtonLink>
          <ButtonLink
            href="/en/become-trainer"
            variant="outline"
            size="lg"
            className="plausible-event-name=hub_hero_member_click"
          >
            Join as a trainer
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="/en/studio-rental"
            variant="outline"
            size="lg"
            className="plausible-event-name=hub_hero_rental_click"
          >
            Just rent the space
          </ButtonLink>
        </FadeIn>
        {/* 5★ Google trust signal — parallel to NL /voor-trainers; matches the
            studio-rental hero pattern. Trust-signal parity 2026-05-20. */}
        <FadeIn>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400" aria-hidden>★★★★★</span>
              <span className="font-semibold">5.0 on Google</span>
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Private studio</strong> · From €12/hour · Full freedom · No contract · Free cancellation anytime
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-8">
            {/* Hero slideshow — crossfade through 5 studio angles every 6s.
                Same RotatingImageStack pattern used on homepage + rental hero
                (commits 0d594e7 + 9ea1a93). Trainer-funnel consistency: every
                hero on every trainer page now shows space breadth via slow
                crossfade. Text/CTA above stays 100% static. */}
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
              style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="Six paths"
          title="Which path fits you?"
          description="SculptClub works for different types of trainers. Pick where you are now — we help you grow from there."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title}>
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                    <h3 className="text-xl font-semibold leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.text}
                    </p>
                    <ButtonLink href={pillar.href} variant="outline" size="sm">
                      {pillar.cta}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </ButtonLink>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Trainer FAQ — schema-marked for SEO */}
      <FaqJsonLd faqs={trainerFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <Section bg="muted">
        <SectionHeader
          overline="Trainer questions"
          title="Frequently asked questions"
          description="Practical answers to what trainers ask before starting. Missing something? WhatsApp +31 6 15 14 79 52."
        />
        <div className="mx-auto max-w-3xl space-y-0">
          {trainerFaqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border-b border-border/50 py-6">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            {/* Bottom-CTA trust strip — closes the decision loop. Visitor
                scrolled through reasons + steps + FAQ; this is the moment
                they decide. Pair the dark "Not sure yet?" headline with the
                same 5★ + value-prop they saw at top so trust persists. */}
            <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400" aria-hidden>★★★★★</span>
                <span className="font-semibold text-white">5.0 on Google</span>
              </span>
              <span aria-hidden className="text-white/40">·</span>
              <span className="text-white/70"><strong className="text-white/90">Private studio</strong> · From €12/hour · Full freedom · Free cancellation anytime</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Not sure yet? Come visit for free first.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              60 minutes in the studio, get to know us, ask anything. No obligation. No pitch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.studioRentalTryout}
                external
                size="lg"
                className="plausible-event-name=hub_bottom_tour_click"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a free tour
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to see the studio")}`}
                external
                variant="outline"
                size="lg"
                className="plausible-event-name=hub_bottom_whatsapp_click border-white/20 text-white hover:bg-white/10"
              >
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

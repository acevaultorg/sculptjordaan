import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { AltLanguageOffer } from "@/components/layout/alt-language-offer";
import { RotatingImageStack } from "@/components/marketing/rotating-image-stack";
import { getColor } from "@/lib/image-color-manifest";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { TrainerReferralBanner } from "@/components/marketing/trainer-referral-banner";
import { TrainerApplicationForm } from "@/components/marketing/trainer-application-form";
import { RentalTabs } from "@/components/marketing/rental-tabs";
import {
  ArrowRight,
  MessageCircle,
  Percent,
  Building2,
  CalendarClock,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Become a Trainer at SculptClub — Studio Rental Amsterdam Jordaan" },
  description:
    "Start or grow your personal training practice at SculptClub. Your clients, your rates, your own profile on our website, private studio from €12/hour. Free tour.",
  keywords: [
    "become personal trainer amsterdam",
    "personal trainer studio rental",
    "training space amsterdam",
    "freelance personal trainer amsterdam",
    "gym rental personal trainer",
    "start personal training business amsterdam",
  ],
  alternates: {
    canonical: "/en/become-trainer",
    languages: {
      nl: "/nl/word-trainer",
      en: "/en/become-trainer",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/become-trainer",
    title: "Become a Trainer at SculptClub — Studio Rental Amsterdam Jordaan",
    description:
      "Start or grow your personal training practice at SculptClub. Your clients, your rates, your own profile on our website, private studio from €12/hour. Free tour.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Trainer at SculptClub — Studio Rental Amsterdam Jordaan",
    description:
      "Start or grow your personal training practice at SculptClub. Your clients, your rates, your own profile on our website, private studio from €12/hour. Free tour.",
  },
};

const HERO_IMAGES = [
  { src: "/images/studio/model-facade-full.jpg", alt: "Athlete at the entrance of SculptClub Private Gym at Egelantiersgracht 424" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal trainer running a session at SculptClub" },
  { src: "/images/studio/training-barbell-skylight.jpg", alt: "Athlete training with barbell under the skylight at SculptClub" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Full overview of the SculptClub private studio in the Jordaan" },
];

const benefits = [
  {
    icon: Percent,
    title: "You keep 100%",
    description: "Your rates, your clients, your schedule. You rent the studio; we earn only on the rental.",
  },
  {
    icon: Building2,
    title: "Premium private studio",
    description: "Fully equipped studio on the Egelantiersgracht. Power rack, cable machine, dumbbells, cardio. Everything you need.",
  },
  {
    icon: Globe,
    title: "Your own profile on our website",
    description: "You get a personal profile page with photo, bio, specialisations and a direct booking link. We bring clients to you.",
  },
  {
    icon: CalendarClock,
    title: "Flexible schedule",
    description: "Book the studio whenever it suits you. Per hour, per day, or via a fixed package. No set times, no obligations.",
  },
  {
    icon: Users,
    title: "Clients via SculptClub",
    description: "Our website attracts hundreds of visitors monthly searching for personal training in Amsterdam. Your profile is right there.",
  },
  {
    icon: TrendingUp,
    title: "Grow your practice",
    description: "From starting trainer to established practice. We help you grow without overhead — no renting an entire space, no fixed costs.",
  },
];

const steps = [
  { step: "1", title: "Get in touch", description: "Send a WhatsApp or fill in the form. We usually respond within an hour." },
  { step: "2", title: "Free tour", description: "Come see the studio. Check the space, ask questions, and see if it fits." },
  { step: "3", title: "Start immediately", description: "Choose your package, send us your photo and bio, and your profile goes live. No waiting." },
];

const faqs = [
  { q: "How much does it cost to rent the studio?", a: "From €12 per 60 minutes. With a 10-hour package you pay €10.20/hour (15% off). With a 20-hour package €9.24/hour (23% off). Packages are valid for 3 months." },
  { q: "Do I need my own insurance?", a: "Yes, you need a valid professional liability insurance. This is your own responsibility." },
  { q: "How many clients can I train at once?", a: "The studio is suitable for 1-on-1 sessions and small groups of up to 4 people." },
  { q: "Do I really get a profile on the website?", a: "Yes. You get a personal profile page with photo, bio, specialisations, rates and a direct booking link. This is included with every rental package." },
  { q: "Do I need to sign a contract?", a: "No. You book per hour or buy a package. No long-term contract, no obligations. Stop whenever you want." },
  { q: "What equipment is available?", a: "Power rack, adjustable bench, dumbbells (2-40 kg), cable machine, assault bike, rower and accessories. Everything you need for professional sessions." },
  { q: "Can I see the studio first?", a: "Of course. Send a WhatsApp and we'll schedule a free tour. No obligations." },
  { q: "Where is SculptClub located?", a: "Egelantiersgracht 424, Amsterdam Jordaan. Centrally located, easily accessible by bike and public transport from all over Amsterdam." },
];

export default function BecomeTrainerEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Become a Trainer", url: "/en/become-trainer" }]} />
      {/* FAQPage schema — page had visible FAQs but no schema. Enables AI-extraction /
          citation for trainer-acquisition queries (the #1 revenue lever: studio rental). */}
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Dutch-visitor offer — this page is the landing for Dutch-targeted Meta ads
          (Plausible 30d: 102/104 NL, 95% mobile bounce, ~4s). Offer the NL mirror
          immediately to nl-language visitors. Never forces; tap-to-switch + dismissible.
          (Root fix is repointing the ad to /nl/word-trainer — operator action.) */}
      <AltLanguageOffer
        nlHref="/nl/word-trainer"
        label="Liever in het Nederlands? Bekijk de Nederlandse pagina"
      />

      {/* Hero */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="overline mb-3 text-brand">For independent trainers</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                <span className="text-brand">You keep 100%.</span> Your clients, your rates, your schedule.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A private studio in the Jordaan where you keep 100% of what you charge. Rent by the hour from €12, pay only when you train, and get a free profile on sculptclub.nl to help you fill your calendar.
              </p>
              {/* 5★ Google trust signal — trainer-funnel parity 2026-05-20.
                  Studio-rental + for-trainers already had this rating; become-trainer
                  was missing it. Same pattern, same position. */}
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
              {/* CTAs moved ABOVE the bullet list 2026-05-19. Clarity probe
                  on iPhone 14 Pro (660px viewport) measured the WhatsApp
                  button at y=661 — one pixel below the fold. 25 visitors
                  from today's IG-burst landed and 0 clicked any CTA over
                  3 days. The 6-second IG-webview audience doesn't scroll;
                  if the action button isn't in the first viewport, it
                  doesn't exist for them. Swap order: action first, bullets
                  as supporting proof below (visitors who DO scroll see the
                  full value-prop case; visitors who don't at least see the
                  WhatsApp option in their initial frame). */}
              {/* Hero CTAs (2026-05-27): primary = on-page application form
                  (structured data capture); secondary = WhatsApp (instant
                  chat for trainers who prefer not to fill anything).
                  Pre-fix: primary was WhatsApp + secondary "View studio &
                  rates" → sent trainer AWAY losing trainer-funnel context.
                  Operator: "vage funnels!!" NL parity at
                  src/app/nl/word-trainer/page.tsx. */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink
                  href="#apply"
                  size="lg"
                  className="plausible-event-name=become_trainer_hero_apply bg-brand hover:bg-brand-dark text-brand-foreground"
                >
                  Apply now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to know more about working at SculptClub")}`}
                  external
                  variant="outline"
                  size="lg"
                  className="plausible-event-name=become_trainer_hero_whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us
                </ButtonLink>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">✓ Private studio</strong> — no crowds, no waiting for equipment, no strangers watching</li>
                <li>✓ The rate you charge is the rate you keep — you rent the studio, nothing more</li>
                <li>✓ Rent by the hour from €12, or save up to 23% with a pack</li>
                <li>✓ Free profile + WhatsApp CTA on our website</li>
                <li>✓ No membership, no fixed overhead, cancel anytime</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />Free tour</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />No contract</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" />From €12/hour</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* Hero slideshow — crossfade through 4 "trainer at SculptClub"
                angles every 4.8s. Same RotatingImageStack pattern as
                homepage + rental hero + hub hero. ZZP-trainer prospect
                lands → sees rotating "this could be you working here" mix. */}
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 1024px) 100vw, 50vw"
                objectPositionClass="object-top"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits */}
      <Section bg="muted">
        <SectionHeader
          overline="Why SculptClub"
          title="Everything you need, nothing you don't"
          description="No own studio required. No fixed costs. Full freedom. Focus on what you do best: training."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="How it works"
          title="Live in 3 steps"
          description="From first contact to your own profile on the website — it takes less than a week."
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio showcase */}
      <Section bg="muted">
        <SectionHeader
          overline="The studio"
          title="Egelantiersgracht 424, Amsterdam Jordaan"
          description="Centrally located private studio with professional equipment. Open daily from 06:00 to 22:00."
        />
        <FadeIn>
          {/* Studio gallery — 3 visually distinct shots covering people +
              equipment + place. Audit 2026-05-27 found prior set
              (bike-smile + barbell-dramatic + barbell-skylight) shipped 2
              near-identical dark barbell shots stacked on mobile + the
              barbell-skylight one was ALSO in HERO_IMAGES line 48 (same
              image twice on one page). Swapped to: bike-smile (person
              energy) + dumbbells-power (equipment variety) +
              canal-view-doors (place identity, reinforces the
              "Egelantiersgracht 424, Jordaan" caption above). NL parity
              at src/app/nl/word-trainer/page.tsx. */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/studio/training-bike-smile.jpg", alt: "Smiling on assault bike at SculptClub" },
              { src: "/images/studio/training-dumbbells-power.jpg", alt: "Dumbbell training at SculptClub" },
              { src: "/images/studio/canal-view-doors.jpg", alt: "Egelantiersgracht canal view from inside the SculptClub studio" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink
            href="/en/studio"
            variant="outline"
            size="lg"
            className="plausible-event-name=become_trainer_studio_gallery"
          >
            <MapPin className="w-4 h-4" />
            View the studio
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Pricing — Hourly / Packages tabs. Operator-pointed pattern from
          /en/book-studio. Same <RentalTabs> component; trainer context =
          no inline Acuity booking buttons (booking action = the application
          form below). NL parity at src/app/nl/word-trainer/page.tsx. */}
      <Section>
        <SectionHeader
          overline="Pricing"
          title="What you pay"
          description="Book per hour or buy a package. No contract, free cancellation anytime."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <RentalTabs
              locale="en"
              hourly={
                <div className="rounded-2xl border border-border bg-card/30 overflow-hidden">
                  <div className="grid grid-cols-2 text-sm font-medium text-muted-foreground border-b border-border px-5 py-3">
                    <div>Space</div>
                    <div className="text-right">60 min</div>
                  </div>
                  <div className="grid grid-cols-2 items-center px-5 py-4 border-b border-border/50">
                    <div className="font-semibold">Half studio</div>
                    <div className="text-right text-lg font-bold">€12</div>
                  </div>
                  <div className="grid grid-cols-2 items-center px-5 py-4">
                    <div className="font-semibold">Full studio</div>
                    <div className="text-right text-lg font-bold">€17</div>
                  </div>
                </div>
              }
              packages={
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-card/30 px-5 py-5 text-center">
                    <p className="text-3xl font-bold">€10.20</p>
                    <p className="text-xs text-muted-foreground mt-1">per 60 min</p>
                    <p className="text-sm mt-2">10-hour pack</p>
                    <p className="text-xs text-brand mt-1">15% off</p>
                  </div>
                  <div className="rounded-2xl border border-brand bg-brand/5 px-5 py-5 text-center">
                    <p className="text-3xl font-bold">€9.24</p>
                    <p className="text-xs text-muted-foreground mt-1">per 60 min</p>
                    <p className="text-sm mt-2">20-hour pack</p>
                    <p className="text-xs text-brand mt-1 font-semibold">23% off</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/30 px-5 py-5 text-center">
                    <p className="text-3xl font-bold">€11.40</p>
                    <p className="text-xs text-muted-foreground mt-1">per 60 min</p>
                    <p className="text-sm mt-2">5-hour pack</p>
                    <p className="text-xs text-brand mt-1">5% off</p>
                  </div>
                </div>
              }
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">All packages are valid for 3 months. <a href="/en/pricing" className="text-brand hover:underline">View all rates</a></p>
        </FadeIn>
      </Section>

      {/* Apply — primary conversion section.
          Operator directive 2026-05-27. Form captures name + phone
          (required) + email + message (optional) → opens WhatsApp with
          structured pre-filled message. Anchor #apply. NL parity at
          src/app/nl/word-trainer/page.tsx. */}
      <Section id="apply">
        <SectionHeader
          overline="Apply"
          title="Send your details — we'll get back within 24 hours"
          description="Drop your name and phone number. We open WhatsApp with your info — you send it yourself. No obligations."
        />
        <FadeIn>
          <TrainerApplicationForm locale="en" />
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="Frequently asked questions"
          title="Everything you want to know"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Referral incentive for current trainers */}
      <TrainerReferralBanner locale="en" />

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            {/* Bottom-CTA trust strip — closes the decision loop at the
                exact moment visitor decides. Same 5★ + value-prop as hero. */}
            <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400" aria-hidden>★★★★★</span>
                <span className="font-semibold text-white">5.0 on Google</span>
              </span>
              <span aria-hidden className="text-white/40">·</span>
              <span className="text-white/70"><strong className="text-white/90">Private studio</strong> · Full freedom · No contract · Free cancellation anytime</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Send a WhatsApp and schedule a free tour. No obligations — just see if it fits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={`https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'm a personal trainer and would like to see the studio")}`}
                external
                size="lg"
                className="plausible-event-name=become_trainer_bottom_whatsapp w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
              <ButtonLink
                href="/en/studio-rental"
                variant="outline"
                size="lg"
                className="plausible-event-name=become_trainer_bottom_studio_rental w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                View rates
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

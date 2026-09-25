import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  ArrowRight,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Dumbbell,
  Building2,
  Users,
  Shirt,
  Droplets,
  Footprints,
  Bike,
  Train,
  ParkingCircle,
  CheckCircle2,
  Star,
  Lock,
  Globe,
  Heart,
  Sparkles,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "First Visit — SculptClub Amsterdam Jordaan" },
  description:
    "Everything you need to know for your first visit to SculptClub. Step-by-step guide, what to bring, how to get here, and frequently asked questions.",
  alternates: {
    canonical: "/en/first-visit",
    languages: {
      nl: "/nl/eerste-bezoek",
      en: "/en/first-visit",
    },
  },
  // Per-page OG/Twitter so social/direct shares of THIS page preview the
  // page's own pitch + correct URL (not the homepage studio-rental default).
  openGraph: {
    type: "website",
    url: "/en/first-visit",
    title: "First Visit — SculptClub Amsterdam Jordaan",
    description:
      "Everything you need to know for your first visit to SculptClub. Step-by-step guide, what to bring, how to get here, and frequently asked questions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Visit — SculptClub Amsterdam Jordaan",
    description:
      "Everything you need to know for your first visit to SculptClub. Step-by-step guide, what to bring, how to get here, and frequently asked questions.",
  },
};

const steps = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Book your session",
    description:
      "For Personal Training, send your trainer a message via WhatsApp or our contact form. The trainer schedules a moment together with you. For Open Gym and studio rental, pick a time slot online; at midnight before your session you receive your door code via WhatsApp.",
    cta: {
      label: "Pick your trainer",
      href: "/en/find-personal-trainer",
      external: false,
    },
  },
  {
    number: "2",
    icon: MapPin,
    title: "Meet your trainer",
    description:
      "Egelantiersgracht 424, Jordaan. For PT your trainer meets you at the door. For Open Gym and studio rental, you enter your own door code. No reception, no queue. Changing area is right there. Arrive 5 minutes early.",
  },
  {
    number: "3",
    icon: Dumbbell,
    title: "Train",
    description:
      "Your trainer is ready, or you train solo via Open Gym. The studio is fully private during your session. All equipment is available. Cancellation is always free.",
  },
];

const bringItems = [
  { icon: Shirt, label: "Sportswear", detail: "Comfortable clothing that allows free movement" },
  { icon: Droplets, label: "Towel & water bottle", detail: "Water is also available in the studio" },
  { icon: Footprints, label: "Indoor sports shoes", detail: "Clean shoes with a flat sole are ideal" },
];

const faqs = [
  {
    q: "What does the first time cost?",
    a: "For Personal Training your first intake is always free: you meet your trainer, discuss your goals and (if you want) do a kick-off training right away. No commitment after. For Open Gym you can book a free 60-minute trial session. Studio rental starts at €12 per hour for half studio.",
  },
  {
    q: "Do I need to be fit to start?",
    a: "No. Our trainers work with every level, from complete beginners to advanced athletes. Your trainer adapts every session to your current level and goals. There is no threshold.",
  },
  {
    q: "Can I come alone, or do I need to sign up somewhere?",
    a: "No registration, no membership, no contract. You book your session and arrive at the agreed time. The studio is fully private during your session: no strangers, no waiting for equipment, no one watching.",
  },
  {
    q: "I don't speak Dutch, is that okay?",
    a: "Yes. Our trainers speak NL and EN, some also Portuguese or Russian. You can filter trainers by language on the trainer page. The entire site is available in English too.",
  },
  {
    q: "What equipment is available?",
    a: "A fully equipped private studio: Rogue power rack, barbell with plates, dumbbells, cable machine, benches, kettlebells, mat, foam roller. Not 50 different machines, but everything you actually need for a complete training session.",
  },
  {
    q: "How long is a session?",
    a: "Personal Training is 45 to 60 minutes, depending on your trainer. Open Gym and studio sessions are 60 minutes. Arrive 5 minutes early so you can start at a relaxed pace.",
  },
  {
    q: "What if I have an injury or limitation?",
    a: "Mention it in your WhatsApp message to your trainer or in the contact form. Some trainers (Andrea: posture & technique, Sergei: recovery & posture correction) are explicitly specialized here. Your trainer always adapts the session to what is safe for you.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Always free. No time limit. For Open Gym and studio cancel via the booking system (Acuity); for Personal Training directly with your trainer via WhatsApp. No fees, no hassle.",
  },
  {
    q: "Can I bring someone along?",
    a: "Yes. Open Gym allows up to 4 people in the studio at once, so you can come with a training buddy or friend. Personal Training is standard 1-on-1, but many trainers also offer duo or small-group sessions at adjusted rates.",
  },
  {
    q: "What do I bring?",
    a: "Sportswear that allows free movement, a towel, a water bottle and clean indoor sports shoes (flat sole ideal). Water is also available in the studio. There is a changing area; showering is not available.",
  },
  {
    q: "What if I can't find the studio?",
    a: "At midnight before your session you receive the exact address and directions via WhatsApp. For PT your trainer arranges studio access; for Open Gym and studio rental you receive your personal door code. Questions on the way? WhatsApp us at +31 6 15 14 79 52. We usually reply within an hour.",
  },
  {
    q: "How clean is the studio?",
    a: "We clean after every session. Equipment and benches are disinfected between sessions. The studio is a private space without foot traffic, not comparable to a busy commercial gym.",
  },
];

export default function FirstVisitPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"First Visit","url":"/en/first-visit"}]} />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {/* HowTo schema — AEO leverage. Mirrors NL /nl/eerste-bezoek HowTo
          for "how do I book a personal trainer in Amsterdam Jordaan"
          English queries. AI engines extract + cite. */}
      <HowToJsonLd
        name="How to book a personal trainer at SculptClub Amsterdam Jordaan"
        description="Book your free personal training intro in 3 steps at SculptClub on Egelantiersgracht in Amsterdam Jordaan. No contract, no membership, first session 100% free."
        totalTime="PT5M"
        image="/images/og-default.jpg"
        steps={[
          {
            name: "Pick your trainer",
            text: "Browse all 12 personal trainers at /en/find-personal-trainer. Filter by specialty (strength, calisthenics, recovery, nutrition) and language (NL/EN/PT). Read short bios, check rates (from €299 per 4 weeks), and pick the trainer who fits your goal.",
            url: "/en/find-personal-trainer",
          },
          {
            name: "Send the trainer a message",
            text: "Click WhatsApp direct on the trainer page or use the contact form. Your trainer usually replies within 1 hour. You agree on a time together — no rigid calendar, just on your terms.",
            url: "/en/free-intro",
          },
          {
            name: "Free intro",
            text: "By phone or in our private studio at Egelantiersgracht 424, Amsterdam Jordaan — your trainer decides what fits best. Discuss your goals, get to know the approach, see if it clicks. No obligation, no hidden costs. After the intro, you decide whether to continue.",
            url: "/en/first-visit",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="First visit"
          title="Your first time at SculptClub"
          description="No sign-up. No contract. First intake free. Here is exactly what to expect."
        />

        {/* Warm-entrance hero image — see NL parallel comment. Swapped
            2026-05-16 from portrait studio/ image (cropped torso-only at
            16:7 banner) to landscape-native hero/canal-view.jpg (1.91:1)
            showing the Amsterdam-Jordaan canal location. */}
        <div className="mx-auto mt-8 max-w-3xl">
          {/* aspect-[1200/630] matches og-default.jpg native ratio (1.905:1)
              — zero crop. See NL parallel comment for "looks distorted"
              fix history. */}
          <div className="relative aspect-[1200/630] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/og-default.jpg"
              alt="The entrance to SculptClub — Egelantiersgracht 424, Amsterdam Jordaan — exactly where you'll walk up for your first visit"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Trust strip — 4 quick signals below the H1 */}
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-border/60 bg-card/40 px-5 py-4">
              <div className="flex items-center gap-1.5">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-sm font-semibold">5.0 on Google</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium">First intake free</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium">Daily 06:00–22:00</span>
              </div>
              <span aria-hidden className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand" />
                <span className="text-sm font-medium">Jordaan</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Anxiety-killer badges */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3 w-3" /> Beginners welcome
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
              <Lock className="h-3 w-3" /> Private studio · no one watching
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <Globe className="h-3 w-3" /> NL · EN · PT · RU
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600 dark:text-rose-400">
              <Heart className="h-3 w-3" /> All levels
            </span>
          </div>
        </FadeIn>
      </Section>

      {/* 3 Service Options */}
      <Section bg="muted">
        <SectionHeader
          overline="Choose your training"
          title="What would you like to do?"
          description="Three ways to train at SculptClub. Each starts with a free first session."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          <FadeIn delay={0}>
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Free intake
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/30">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle>Personal Training</CardTitle>
                <CardDescription>1-on-1 with a trainer that fits you. Free intro + training. From €299 per 4 weeks after.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href="/en/find-personal-trainer" size="lg" className="w-full">Find your trainer<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <p className="text-center text-[11px] text-muted-foreground">12 trainers · filter by specialty + language</p>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Free trial
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/30">
                  <Dumbbell className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle>Open Gym</CardTitle>
                <CardDescription>Train independently in a private studio. 60 min free trial. Max 4 people. Then from €29 per 4 weeks.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href={acuityLinks.openGymTrial} size="lg" className="w-full">Book free trial<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/en/open-gym" variant="outline" size="lg" className="w-full">See plans</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="relative h-full flex flex-col">
              <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                Free tour
              </span>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/30">
                  <Building2 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Studio Rental</CardTitle>
                <CardDescription>For trainers with their own clients. Half studio €12/hr, full studio €17/hr. Your own rates, no contract.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col gap-2">
                <ButtonLink href={acuityLinks.studioTrial} size="lg" className="w-full">Book tour<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/en/studio-rental" variant="outline" size="lg" className="w-full">Rates + packages</ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <SectionHeader
          overline="What to expect"
          title="A step-by-step walkthrough"
        />
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-brand" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4">
                      <ButtonLink
                        href={step.cta.href}
                        external={step.cta.external}
                        variant="outline"
                        className="rounded-xl max-sm:min-h-11"
                      >
                        {step.cta.label}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">For personal training: the first intro is always free</p>
                <p className="text-sm text-muted-foreground mt-1">
                  You discuss your goals, experience, and any limitations. Your trainer designs an approach that fits.
                  No commitment. You decide afterwards if you want to continue.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* What to Bring */}
      <Section>
        <SectionHeader
          overline="Checklist"
          title="What to bring"
          description="You do not need much. Here is everything you need:"
        />
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {bringItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            A changing area is available in the studio. Showers are not available, but most sessions are timed so you can
            head straight home or to work afterwards.
          </p>
        </FadeIn>
      </Section>

      {/* Transport / Parking */}
      <Section bg="muted">
        <SectionHeader
          overline="Getting here"
          title="How to get to SculptClub"
        />
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">By bike</h3>
                <p className="text-xs text-muted-foreground">
                  Bike racks right outside the door on the Egelantiersgracht. The Jordaan is best reached by bike.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <Train className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">Public transport</h3>
                <p className="text-xs text-muted-foreground">
                  Tram 13 and 17 stop at Westermarkt (3 min walk). Metro 52 stops at Vijzelgracht station (10 min walk).
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand/10 text-brand mb-3">
                  <ParkingCircle className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-1">By car</h3>
                <p className="text-xs text-muted-foreground">
                  Paid street parking in the Jordaan. Nearest parking garage: Europarking, Marnixstraat 250 (5 min walk).
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-1">
                {siteConfig.address.street}, {siteConfig.address.zip}{" "}
                {siteConfig.address.city}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Open {siteConfig.hours.toLowerCase()}
              </p>
              <a
                href={`https://maps.google.com/?q=${siteConfig.address.street}+${siteConfig.address.zip}+${siteConfig.address.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center py-2 text-sm text-brand hover:text-brand-dark transition-colors font-medium"
              >
                View on Google Maps
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="Frequently asked questions"
          title="Still have questions?"
          description="Here are answers to the most common questions about your first visit."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to start?
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              First intake free. No contract. Cancel anytime, no fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href="/en/find-personal-trainer"
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Find your trainer
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-white/55">
              Questions? +31 6 15 14 79 52 · we usually reply within an hour
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

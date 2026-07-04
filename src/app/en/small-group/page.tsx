import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/marketing/cta-band";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { trainers } from "@/config/trainers";
import { Users, Dumbbell, Sparkles, Gift, ArrowRight } from "lucide-react";

// Inline Instagram glyph — lucide-react@1.x doesn't export `Instagram`;
// matches the InstagramIcon used in footer.tsx / instagram-feed.tsx.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// See /nl/small-group for context. Small group training is coached by Dara —
// "Strength & Balance Coaching" (@strengthandbalancecoaching), the Instagram
// this page promotes (operator directive 2026-07-04). Coach facts pulled from
// config/trainers.ts so they never drift.
const dara = trainers.find((t) => t.name === "Dara");
const daraImg = dara?.image ?? "/images/trainers/dara.jpg";
const daraBio =
  dara?.bio.en ??
  "Dara coaches you in strength and balance, with personal attention and an approach that builds your confidence step by step.";
const daraIg = dara?.instagram ?? "https://instagram.com/strengthandbalancecoaching";
const daraIgHandle = dara?.instagramHandle ?? "@strengthandbalancecoaching";
const daraWa = dara?.whatsapp ?? "https://wa.me/31645658213";
const daraIntake = `/en/${dara?.slug.en ?? "plan-free-intro-with-dara"}`;
const daraSpec = dara?.specialization.en ?? ["Strength & Balance", "Personal Training", "Beginner-friendly"];

export const metadata: Metadata = {
  title: { absolute: "Small Group Training in the Jordaan — SculptClub" },
  description:
    "Train together in a small group of 2 to 4, with one dedicated coach who actually sees you. Strength & balance with Dara, in a calm private studio in the Jordaan. First session free, no contract.",
  keywords: [
    "small group training amsterdam",
    "small group training jordaan",
    "training together amsterdam",
    "duo personal training amsterdam",
    "strength and balance training amsterdam",
    "small group gym jordaan",
  ],
  alternates: {
    canonical: "/en/small-group",
    languages: { nl: "/nl/small-group", en: "/en/small-group" },
  },
  openGraph: {
    type: "website",
    url: "/en/small-group",
    title: "Small Group Training in the Jordaan — SculptClub",
    description:
      "Train together in a small group of 2 to 4 with personal attention. Strength & balance with coach Dara in a calm private studio in the Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Group Training in the Jordaan — SculptClub",
    description:
      "Small group, real attention. Strength & balance with coach Dara in the Jordaan. First session free.",
  },
};

const benefits = [
  {
    icon: Users,
    title: "Small group, real attention",
    body: "Four people at most. Your coach watches your technique, corrects where needed and keeps it personal — the best of training together and 1-on-1.",
  },
  {
    icon: Dumbbell,
    title: "Strength & balance",
    body: "Built around strength, posture and stability. Getting stronger in a way your body can handle — whether you're just starting or getting back into it.",
  },
  {
    icon: Sparkles,
    title: "Calm private studio",
    body: "No crowded floor, no waiting for machines. A fully-equipped studio of our own on the Egelantiersgracht, right in the Jordaan.",
  },
  {
    icon: Gift,
    title: "First session free",
    body: "Come try it, no strings attached. No contract, no membership — after the first session you decide whether it fits.",
  },
];

export default function SmallGroupEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Small group training", url: "/en/small-group" },
        ]}
      />
      <ServiceJsonLd
        name="Small Group Training — SculptClub Jordaan"
        description="Small group training (2–4 people) with personal attention in a private studio in the Jordaan, Amsterdam. Strength & balance with coach Dara."
        url="/en/small-group"
        priceRange="€€"
        areaServed="Amsterdam"
      />

      {/* Intro */}
      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="overline mb-3">Train together</p>
          <h1 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Small group training in the Jordaan
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Train with 2 to 4 people and one dedicated coach who actually sees you. Strength and
            balance, at your own pace, in a calm private studio on the canal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href={daraIntake}
              size="lg"
              className="plausible-event-name=smallgroup_intake rounded-xl px-6"
            >
              Book a free intro
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <ButtonLink
              href={daraWa}
              size="lg"
              variant="outline"
              className="plausible-event-name=smallgroup_whatsapp rounded-xl px-6"
            >
              WhatsApp Dara
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Benefits */}
      <Section bg="muted">
        <SectionHeader
          overline="Why small group"
          title="The best of together and personal"
          description="Enough energy from a group, enough attention from a coach who knows your name."
        />
        <FadeIn>
          <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <Card key={b.title} className="h-full">
                <CardHeader>
                  <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-2">
                    <b.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{b.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{b.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Coach — Dara / Strength & Balance Coaching (the account we promote) */}
      <Section>
        <SectionHeader overline="Your coach" title="Dara — Strength & Balance Coaching" />
        <FadeIn>
          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[280px_1fr] items-start">
            <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-muted">
              <Image
                src={daraImg}
                alt="Dara — Strength & Balance Coaching, small group coach at SculptClub in the Jordaan"
                fill
                sizes="(max-width: 768px) 280px, 280px"
                className="object-cover [object-position:center_20%]"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{daraBio}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In a small group, Dara coaches you in strength and balance with personal attention for
                everyone — beginners are just as welcome as seasoned lifters. NL / EN.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {daraSpec.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Instagram promotion — the account we're promoting */}
              <a
                href={daraIg}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=smallgroup_instagram mt-6 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 hover:border-brand hover:bg-brand/5 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm text-muted-foreground">Follow on Instagram</span>
                  <span className="block font-semibold">{daraIgHandle}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true" />
              </a>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <ButtonLink
                  href={daraIntake}
                  size="lg"
                  className="plausible-event-name=smallgroup_coach_intake rounded-xl px-6"
                >
                  Free intro with Dara
                  <ArrowRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href={daraWa}
                  size="lg"
                  variant="outline"
                  className="plausible-event-name=smallgroup_coach_whatsapp rounded-xl px-6"
                >
                  WhatsApp Dara
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CtaBand locale="en" />
    </PageLayout>
  );
}

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

// Small group training is coached by Dara — "Strength & Balance Coaching"
// (@strengthandbalancecoaching). Operator directive 2026-07-04: make a
// dedicated Small Group page that promotes that Instagram. Coach facts are
// pulled from the single source of truth (config/trainers.ts) so they never
// drift; the Instagram we promote is Dara's account.
const dara = trainers.find((t) => t.name === "Dara");
const daraImg = dara?.image ?? "/images/trainers/dara.jpg";
const daraBio =
  dara?.bio.nl ??
  "Dara coacht je in kracht én balans, met persoonlijke aandacht en een aanpak die je stap voor stap zelfverzekerder maakt.";
const daraIg = dara?.instagram ?? "https://instagram.com/strengthandbalancecoaching";
const daraIgHandle = dara?.instagramHandle ?? "@strengthandbalancecoaching";
const daraWa = dara?.whatsapp ?? "https://wa.me/31645658213";
const daraIntake = `/nl/${dara?.slug.nl ?? "plan-gratis-intake-met-dara"}`;
const daraSpec = dara?.specialization.nl ?? ["Kracht & Balans", "Personal Training", "Beginners welkom"];

export const metadata: Metadata = {
  title: { absolute: "Small Group Training in de Jordaan — SculptClub" },
  description:
    "Train samen in een kleine groep van 2 tot 4, met één vaste coach die je écht ziet. Kracht & balans met Dara, in een rustige privé studio in de Jordaan. Eerste kennismaking gratis, geen contract.",
  keywords: [
    "small group training amsterdam",
    "small group training jordaan",
    "samen trainen amsterdam",
    "duo personal training amsterdam",
    "kracht en balans training amsterdam",
    "kleine groep sporten jordaan",
  ],
  alternates: {
    canonical: "/nl/small-group",
    languages: { nl: "/nl/small-group", en: "/en/small-group" },
  },
  openGraph: {
    type: "website",
    url: "/nl/small-group",
    title: "Small Group Training in de Jordaan — SculptClub",
    description:
      "Train samen in een kleine groep van 2 tot 4 met persoonlijke begeleiding. Kracht & balans met coach Dara in een rustige privé studio in de Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Group Training in de Jordaan — SculptClub",
    description:
      "Kleine groep, echte aandacht. Kracht & balans met coach Dara in de Jordaan. Eerste kennismaking gratis.",
  },
};

const benefits = [
  {
    icon: Users,
    title: "Kleine groep, echte aandacht",
    body: "Maximaal 4 mensen tegelijk. Je coach ziet je techniek, corrigeert waar nodig en houdt het persoonlijk — het beste van samen trainen én 1-op-1.",
  },
  {
    icon: Dumbbell,
    title: "Kracht & balans",
    body: "Opgebouwd rond kracht, houding en stabiliteit. Sterker worden op een manier die je lichaam aankan — of je nu net begint of weer op gang komt.",
  },
  {
    icon: Sparkles,
    title: "Rustige privé studio",
    body: "Geen drukke zaal, geen wachten op toestellen. Een eigen, volledig uitgeruste studio aan de Egelantiersgracht, midden in de Jordaan.",
  },
  {
    icon: Gift,
    title: "Eerste keer gratis",
    body: "Kom vrijblijvend kennismaken. Geen contract, geen abonnement — na de eerste keer beslis je zelf of het bij je past.",
  },
];

export default function SmallGroupNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Small group training", url: "/nl/small-group" },
        ]}
      />
      <ServiceJsonLd
        name="Small Group Training — SculptClub Jordaan"
        description="Small group training (2–4 personen) met persoonlijke begeleiding in een privé studio in de Jordaan, Amsterdam. Kracht & balans met coach Dara."
        url="/nl/small-group"
        priceRange="€€"
        areaServed="Amsterdam"
      />

      {/* Intro */}
      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="overline mb-3">Samen trainen</p>
          <h1 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Small group training in de Jordaan
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Train samen met 2 tot 4 mensen en één vaste coach die je écht ziet. Kracht en balans, op
            jouw tempo, in een rustige privé studio aan de gracht.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href={daraIntake}
              size="lg"
              className="plausible-event-name=smallgroup_intake rounded-xl px-6"
            >
              Plan een gratis kennismaking
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
          overline="Waarom small group"
          title="Het beste van samen én persoonlijk"
          description="Genoeg energie van een groep, genoeg aandacht van een coach die je naam kent."
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
        <SectionHeader overline="Je coach" title="Dara — Strength &amp; Balance Coaching" />
        <FadeIn>
          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-[280px_1fr] items-start">
            <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto overflow-hidden rounded-2xl bg-muted">
              <Image
                src={daraImg}
                alt="Dara — Strength &amp; Balance Coaching, small group coach bij SculptClub in de Jordaan"
                fill
                sizes="(max-width: 768px) 280px, 280px"
                className="object-cover [object-position:center_20%]"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{daraBio}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                In een small group traint Dara je in kracht en balans met persoonlijke aandacht voor
                iedereen — beginners zijn net zo welkom als gevorderden. NL / EN.
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
                  <span className="block text-sm text-muted-foreground">Volg op Instagram</span>
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
                  Gratis kennismaking met Dara
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

      <CtaBand locale="nl" />
    </PageLayout>
  );
}

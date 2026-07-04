import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CtaBand } from "@/components/marketing/cta-band";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { trainers } from "@/config/trainers";
import { InstagramEmbeds } from "@/components/marketing/instagram-embeds";
import { Users, Dumbbell, Sparkles, Gift, ArrowRight, MessageCircle } from "lucide-react";

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

// Coaches who offer small group. Operator directive 2026-07-04: promote the
// coaches' Instagram / contact (WhatsApp) — start with Dara ("Strength &
// Balance Coaching", @strengthandbalancecoaching) and include the other
// trainers who genuinely offer small group. Pulled from config/trainers.ts
// (single source of truth) so handles/numbers/photos never drift.
const SMALL_GROUP_COACHES = ["Dara", "Gezina", "Sergei"];
const coaches = SMALL_GROUP_COACHES.map((n) => trainers.find((t) => t.name === n)).filter(
  (t): t is NonNullable<typeof t> => Boolean(t),
);
const dara = trainers.find((t) => t.name === "Dara");
const daraWa = dara?.whatsapp ?? "https://wa.me/31645658213";
const daraIg = dara?.instagram ?? "https://instagram.com/strengthandbalancecoaching";
const daraIgHandle = dara?.instagramHandle ?? "@strengthandbalancecoaching";
// Dara's real reels, pulled from her public profile @strengthandbalancecoaching,
// embedded via Instagram's official embed (real playable video). Swap in newer
// reels anytime — just replace the permalinks.
const DARA_REELS = [
  "https://www.instagram.com/reel/DaLIapsMLhI/",
  "https://www.instagram.com/reel/DZ5ZVSUxOLi/",
  "https://www.instagram.com/reel/DaINABBuK9K/",
];

export const metadata: Metadata = {
  title: { absolute: "Small Group Training in de Jordaan — SculptClub" },
  description:
    "Train samen in een kleine groep van 2 tot 4, met een coach die je écht ziet. Kracht & balans in een rustige privé studio in de Jordaan. Volg de coaches op Instagram of app ze direct.",
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
      "Train samen in een kleine groep van 2 tot 4 met persoonlijke begeleiding. Kracht & balans in een rustige privé studio in de Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Group Training in de Jordaan — SculptClub",
    description:
      "Kleine groep, echte aandacht. Kracht & balans met eigen coaches in de Jordaan. Volg ze op Instagram of app ze direct.",
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
        description="Small group training (2–4 personen) met persoonlijke begeleiding in een privé studio in de Jordaan, Amsterdam. Kracht & balans met eigen coaches."
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
            Train samen met 2 tot 4 mensen en een coach die je écht ziet. Kracht en balans, op jouw
            tempo, in een rustige privé studio aan de gracht.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href="#coaches"
              size="lg"
              className="plausible-event-name=smallgroup_view_coaches rounded-xl px-6"
            >
              Bekijk de coaches
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
            <ButtonLink
              href={daraWa}
              size="lg"
              variant="outline"
              className="plausible-event-name=smallgroup_whatsapp_dara rounded-xl px-6"
            >
              <MessageCircle className="w-4 h-4" />
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

      {/* Coaches who offer small group — goal: go to their Instagram or WhatsApp */}
      <Section id="coaches">
        <SectionHeader
          overline="De coaches"
          title="Coaches die small group aanbieden"
          description="Kies de coach die bij je past. Volg ze op Instagram of stuur direct een WhatsApp — zij plannen de small group samen met jou in."
        />
        <FadeIn>
          <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((c) => (
              <div
                key={c.name}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="relative aspect-[4/5] w-full bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.name} — small group coach bij SculptClub in de Jordaan`}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover [object-position:center_20%]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.specialization.nl.join(" · ")}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    {c.instagram && (
                      <a
                        href={c.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`plausible-event-name=smallgroup_ig_${c.name.toLowerCase()} inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 h-11 text-sm font-semibold hover:border-brand hover:bg-brand/5 transition-colors`}
                      >
                        <InstagramIcon className="w-4 h-4" />
                        {c.instagramHandle ?? "Instagram"}
                      </a>
                    )}
                    {c.whatsapp && (
                      <a
                        href={c.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`plausible-event-name=smallgroup_wa_${c.name.toLowerCase()} inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground px-4 h-11 text-sm font-semibold hover:bg-brand-dark transition-colors`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp {c.name}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Dara on Instagram — real reels (video previews) + clear contact */}
      <Section bg="muted">
        <SectionHeader
          overline="Op Instagram"
          title="Bekijk Dara in actie"
          description="Een indruk van hoe Dara traint — kracht, balans en techniek. Zin om mee te doen aan een small group? Volg haar of stuur direct een WhatsApp."
        />
        <FadeIn>
          <InstagramEmbeds
            urls={DARA_REELS}
            linkLabel="Bekijk op Instagram"
            className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={daraIg}
              target="_blank"
              rel="noopener noreferrer"
              className="plausible-event-name=smallgroup_dara_ig_profile inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 h-12 text-sm font-semibold hover:border-brand hover:bg-brand/5 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              {daraIgHandle}
            </a>
            <ButtonLink
              href={daraWa}
              size="lg"
              className="plausible-event-name=smallgroup_dara_wa_reels rounded-xl px-6"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Dara
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <CtaBand locale="nl" />
    </PageLayout>
  );
}

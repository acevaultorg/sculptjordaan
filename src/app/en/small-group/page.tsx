import type { Metadata } from "next";
import { LocalIntentLinks } from "@/components/marketing/local-intent-links";
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

// See /nl/small-group. Coaches who offer small group — the goal is to send
// people to each coach's Instagram / contact (WhatsApp). Dara ("Strength &
// Balance Coaching", @strengthandbalancecoaching) featured first. Pulled from
// config/trainers.ts so handles/numbers/photos never drift.
const SMALL_GROUP_COACHES = ["Dara", "Gezina", "Sergei"];
const coaches = SMALL_GROUP_COACHES.map((n) => trainers.find((t) => t.name === n)).filter(
  (t): t is NonNullable<typeof t> => Boolean(t),
);
const dara = trainers.find((t) => t.name === "Dara");
const daraWa = dara?.whatsapp ?? "https://wa.me/31645658213";
const daraIg = dara?.instagram ?? "https://instagram.com/strengthandbalancecoaching";
const daraIgHandle = dara?.instagramHandle ?? "@strengthandbalancecoaching";
// Dara's real reels from her public profile @strengthandbalancecoaching,
// embedded via Instagram's official embed (real playable video).
const DARA_REELS = [
  "https://www.instagram.com/reel/DaLIapsMLhI/",
  "https://www.instagram.com/reel/DZ5ZVSUxOLi/",
  "https://www.instagram.com/reel/DaINABBuK9K/",
];

export const metadata: Metadata = {
  title: { absolute: "Small Group Training in the Jordaan — SculptClub" },
  description:
    "Train together in a small group of 2 to 4, with a coach who actually sees you. Strength & balance in a calm private studio in the Jordaan.",
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
      "Train together in a small group of 2 to 4 with personal attention. Strength & balance in a calm private studio in the Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Group Training in the Jordaan — SculptClub",
    description:
      "Small group, real attention. Strength & balance with your own coaches in the Jordaan. Follow them on Instagram or message them directly.",
  },
};

const benefits = [
  {
    icon: Users,
    title: "Small group, real attention",
    body: "Four people at most. Your coach watches your technique, corrects where needed and keeps it personal: the best of training together and 1-on-1.",
  },
  {
    icon: Dumbbell,
    title: "Strength & balance",
    body: "Built around strength, posture and stability. Getting stronger in a way your body can handle, whether you're just starting or getting back into it.",
  },
  {
    icon: Sparkles,
    title: "Calm private studio",
    body: "No crowded floor, no waiting for machines. A fully-equipped studio of our own on the Egelantiersgracht, right in the Jordaan.",
  },
  {
    icon: Gift,
    title: "First session free",
    body: "Come try it, no strings attached. No contract, no membership. After the first session you decide whether it fits.",
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
        description="Small group training (2–4 people) with personal attention in a private studio in the Jordaan, Amsterdam. Strength & balance with your own coaches."
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
            Train with 2 to 4 people and a coach who actually sees you. Strength and balance, at your
            own pace, in a calm private studio on the canal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href="#coaches"
              size="lg"
              className="plausible-event-name=smallgroup_view_coaches rounded-xl px-6"
            >
              Meet the coaches
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

      {/* Coaches who offer small group — goal: go to their Instagram or WhatsApp */}
      <Section id="coaches">
        <SectionHeader
          overline="The coaches"
          title="Coaches who offer small group"
          description="Pick the coach that fits you. Follow them on Instagram or send a direct WhatsApp. They'll set up the small group with you."
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
                    alt={`${c.name} — small group coach at SculptClub in the Jordaan`}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover [object-position:center_20%]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.specialization.en.join(" · ")}
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
          overline="On Instagram"
          title="See Dara in action"
          description="A feel for how Dara trains: strength, balance and technique. Want to join a small group? Follow her or send a direct WhatsApp."
        />
        <FadeIn>
          <InstagramEmbeds
            urls={DARA_REELS}
            linkLabel="Watch on Instagram"
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

      <LocalIntentLinks locale="en" current="smallGroup" />

      <CtaBand locale="en" />
    </PageLayout>
  );
}

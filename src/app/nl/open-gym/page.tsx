import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityPaidSessions, openGymSummerDeal } from "@/config/acuity";
import { LandingVideo } from "@/components/marketing/landing-video";
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd, OfferCatalogJsonLd } from "@/components/seo/json-ld";
import { Clock, Key, Dumbbell, Info, Check } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Open Gym Amsterdam — Privé Studio Jordaan | SculptClub" },
  description:
    "Open gym in Amsterdam: train zelfstandig in een rustige, volledig uitgeruste privé studio in de Jordaan. Max. 4 personen tegelijk. Vanaf €29 per 4 weken.",
  alternates: {
    canonical: "/nl/open-gym",
    languages: {
      nl: "/nl/open-gym",
      en: "/en/open-gym",
    },
  },
  // Per-page OG/Twitter so social shares of THIS page (esp. Instagram, the #1
  // channel) preview the Open Gym pitch + the correct URL — instead of falling
  // back to the root layout's studio-rental default + homepage URL.
  openGraph: {
    type: "website",
    url: "/nl/open-gym",
    title: "Open Gym Amsterdam — Privé Studio Jordaan | SculptClub",
    description:
      "Open gym in Amsterdam: train zelfstandig in een rustige, volledig uitgeruste privé studio in de Jordaan. Max. 4 personen tegelijk. Vanaf €29 per 4 weken.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Gym Amsterdam — Privé Studio Jordaan | SculptClub",
    description:
      "Open gym in Amsterdam: train zelfstandig in een rustige, volledig uitgeruste privé studio in de Jordaan. Max. 4 personen tegelijk. Vanaf €29 per 4 weken.",
  },
};

// Summer deal — honest, price-locked (member keeps €49 as long as they stay).
// Every deal surface below gates on `deal.active`; when false the page shows the
// plain regular €69 with no strikethrough/ring/badge/savings/urgency (nothing lies).
const deal = openGymSummerDeal;
const savings = deal.priceRegular - deal.priceDeal;
// When the deal is live all "become an unlimited member" CTAs route to the €49
// Zomerdeal product; otherwise to the regular Onbeperkt product.
const onbeperktUrl = deal.active
  ? deal.dealUrl
  : acuityPaidSessions.openGymPlans.onbeperkt;

// S5 — "Zo kom je binnen" operational steps (retitled so it doesn't clash with
// the S3 journey ladder above).
const steps = [
  {
    icon: Clock,
    title: "Reserveer je moment",
    description: "Kies online een tijd die bij je past.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Je krijgt een persoonlijke code via WhatsApp om binnen te komen.",
  },
  {
    icon: Dumbbell,
    title: "Train — de studio is van jou",
    description:
      "De volledige studio met professionele apparatuur, helemaal voor jezelf.",
  },
];

// Gallery must NOT include training-dumbbells-focus.jpg — that's the hero
// image below. Same-page dup audit 2026-05-27 caught the repeat (operator was
// seeing similar-looking shots back-to-back on mobile). training-bike-energy.jpg
// gives cardio variety complementing the strength-focused hero.
const studioImages = [
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press op bank bij SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang aan de pull-up bar bij SculptClub" },
  { src: "/images/studio/training-bike-energy.jpg", alt: "Cardio op de assault bike bij SculptClub" },
  { src: "/images/studio/back-room-full.jpg", alt: "Volledige achterruimte met slee, rack en bank bij SculptClub" },
];

// Two new FAQs at the top (per spec); the summer-deal FAQ is gated so nothing
// stale is served once the deal ends. faqJsonLdData is derived from this array
// so the JSON-LD stays perfectly in sync.
const faqs = [
  {
    q: "Wat is het verschil tussen een gratis probeersessie en een sessie reserveren?",
    a: "De gratis probeersessie is je eerste keer — vrijblijvend en zonder abonnement. Daarna reserveer je losse sessies (€10) of word je lid. Nieuw hier? Begin met de gratis probeersessie.",
  },
  ...(deal.active
    ? [
        {
          q: "Wat houdt de zomeraanbieding in?",
          a: `Word je nu lid van Onbeperkt, dan train je onbeperkt voor €${deal.priceDeal} per 4 weken in plaats van €${deal.priceRegular} — en je houdt deze prijs zolang je lid blijft. Voor nieuwe leden geldt daarna weer het normale tarief van €${deal.priceRegular}. Je zegt altijd gratis op.`,
        },
      ]
    : []),
  {
    q: "Wat is Open Gym precies?",
    a: "Open Gym geeft je toegang tot onze privé studio om zelfstandig te trainen. Je boekt een tijdslot, ontvangt een deurcode en hebt de volledige ruimte en apparatuur tot je beschikking.",
  },
  {
    q: "Welke apparatuur is beschikbaar?",
    a: "De studio is volledig uitgerust met professionele apparatuur van Rogue, Eleiko en Concept2: powerrack, verstelbare bank, dumbbells, kabelmachine, cardio en meer. Alles wat je nodig hebt voor een complete training.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Elke Open Gym sessie duurt 60 minuten. Je kunt meerdere sessies achter elkaar boeken als je langer wilt trainen.",
  },
  {
    q: "Kan ik een vriend meenemen?",
    a: "Er mogen maximaal 4 personen tegelijk in de studio. Wil je samen trainen? Bekijk dan onze studio verhuur opties voor small group training.",
  },
  {
    q: "Wat als ik mijn sessie moet annuleren?",
    a: "Annuleren of verzetten kan altijd gratis via het boekingssysteem — geen kosten, geen uitzonderingen.",
  },
  {
    q: "Is het echt een lidmaatschap?",
    a: "Ja, Open Gym werkt met een lidmaatschap per 4 weken. Je kiest een plan dat bij je past en kunt elk moment opzeggen. Geen langlopend contract.",
  },
  {
    q: "Is de eerste les echt gratis?",
    a: "Ja. Je boekt een gratis probeersessie van 60 minuten via het boekingssysteem. Geen creditcard nodig, geen verplichting, geen automatische verlenging.",
  },
  {
    q: "Hoe laat kan ik trainen?",
    a: "Dagelijks van 06:30 tot 22:00. Vroege ochtend, lunchtijd, na het werk of laat in de avond — je kiest. De studio is altijd privé tijdens jouw geboekte tijdslot.",
  },
  {
    q: "Waar is de studio en hoe kom ik er?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam — middenin de Jordaan. 5 min lopen vanaf Westermarkt (tram 13/17), goed bereikbaar per fiets, betaald parkeren in de wijk (Europarking 5 min lopen). De avond voor je sessie krijg je via WhatsApp de deurcode + routebeschrijving.",
  },
  {
    q: "Zijn er kleedkamers en douches?",
    a: "Er is een kleedruimte met opbergvakken. Douchen is niet mogelijk in de studio. De meeste leden plannen Open Gym zo dat ze daarna direct verder kunnen naar huis of werk.",
  },
  {
    q: "Wat moet ik meenemen?",
    a: "Sportkleding, een handdoek, een waterfles en schone indoor sportschoenen. Water is ook gratis aanwezig in de studio.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function OpenGymPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Open Gym","url":"/nl/open-gym"}]} />
      <ServiceJsonLd
        name="Open Gym"
        description="Zelfstandig trainen in een privé studio in de Jordaan, Amsterdam. Boek sessies van 60 minuten, max 4 personen tegelijk."
        url="/nl/open-gym"
        priceRange="€29 - €69 per 4 weken"
      />
      <OfferCatalogJsonLd
        catalogName="Open Gym Abonnementen"
        description="Zelfstandig trainen in een privé studio in de Jordaan, Amsterdam. Boek sessies van 60 minuten."
        url="/nl/open-gym"
        recurring
        offers={[
          { name: "Instapplan — 4 sessies", description: "4 sessies per 4 weken, €7,25 per sessie", price: 29 },
          { name: "Onbeperkt", description: "Onbeperkt trainen per 4 weken", price: openGymSummerDeal.priceRegular },
        ]}
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* S1 — HERO · 2-column: text+CTAs left, solo-training image right */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              as="h1"
              overline="Open Gym · Jordaan"
              title="Train wanneer jij wilt in een rustige privé studio"
              description="Vrij trainen in een volledig uitgeruste studio aan de Egelantiersgracht, in hartje Jordaan. Sessies van 60 minuten, maximaal 4 mensen tegelijk. Geen contract, altijd gratis opzegbaar — en je eerste les is gratis."
              center={false}
            />
            <FadeIn className="flex flex-col sm:flex-row gap-3">
              {/* G1 — dominant free-trial CTA → dedicated on-site embed page.
                  Internal <Link>, so add data-intent/pricing (bypasses the embed's
                  auto-tracking; the real free conversion fires on /gratis-proefles). */}
              <ButtonLink
                href="/nl/gratis-proefles"
                size="lg"
                data-intent="open_gym"
                data-pricing="free"
              >
                Boek je gratis probeersessie
              </ButtonLink>
              {/* G2 — reserve a paid session; target=_blank for Apple Pay support. */}
              <ButtonLink
                href={acuityPaidSessions.openGymSession}
                size="lg"
                variant="outline"
                data-intent="open_gym"
                data-pricing="paid"
              >
                Al eens geweest? Reserveer je uur
              </ButtonLink>
            </FadeIn>

            {/* Trust strip — 5★ Google + price anchor + key benefits */}
            <FadeIn delay={0.1} className="mt-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">★★★★★</span>
                  <span className="font-semibold">5,0 op Google</span>
                </span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="font-medium text-muted-foreground">vanaf €7,25 per sessie</span>
                <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="font-medium text-muted-foreground">Altijd opzegbaar</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Eerste les gratis
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-400">
                  Privé studio · max 4 personen
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                  Geen contract
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-xs font-medium text-rose-700 dark:text-rose-400">
                  Gratis annuleren
                </span>
              </div>
              {/* Deal teaser — plain foreground text (never orange, never a button), gated */}
              {deal.active && (
                <p className="mt-4 text-sm font-medium text-foreground">
                  Zomeraanbieding — Onbeperkt €{deal.priceDeal} per 4 weken (normaal €{deal.priceRegular})
                  {deal.endDate ? `, t/m ${deal.endDate}` : ""}.
                </p>
              )}
            </FadeIn>
          </div>
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/studio/training-dumbbells-focus.jpg"
                alt="Zelfstandig trainen met dumbbells bij SculptClub Open Gym in de Jordaan — focus, geen drukte, geen wachttijd"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* S2 — STUDIO VIDEO · see it → book it */}
      <Section bg="muted">
        <SectionHeader overline="Zo ziet het eruit" title="Train in onze privé studio" />
        <FadeIn>
          <LandingVideo
            src="/videos/studio-training.mp4"
            poster="/videos/studio-training-poster.jpg"
            label="Mensen trainen in de privé studio van SculptClub in Amsterdam Jordaan"
          />
        </FadeIn>
      </Section>

      {/* S3 — JOURNEY LADDER (the router): new / returned / member self-select */}
      <Section id="zo-werkt-het">
        <SectionHeader
          overline="Zo werkt het"
          title="Waar sta jij nu?"
          description="Nieuw hier of al eens geweest — je ziet meteen wat jouw volgende stap is."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Rung 1 · G1 — the only filled button in this section */}
          <FadeIn>
            <Card className="h-full flex flex-col text-center">
              <CardHeader>
                <Badge variant="secondary" className="mx-auto mb-2">Nieuw hier</Badge>
                <CardTitle className="text-lg">1. Boek je gratis probeersessie</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Kom vrijblijvend langs, ervaar de studio en train één sessie gratis. Geen abonnement nodig.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href="/nl/gratis-proefles"
                  size="lg"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="free"
                >
                  Plan je gratis probeersessie
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Rung 2 · G2 */}
          <FadeIn delay={0.1}>
            <Card className="h-full flex flex-col text-center">
              <CardHeader>
                <Badge variant="outline" className="mx-auto mb-2">Na je probeersessie</Badge>
                <CardTitle className="text-lg">2. Reserveer je uur</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Beviel het? Reserveer een sessie wanneer het jou uitkomt — €10 los, of voordeliger met een plan.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymSession}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Reserveer een sessie
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Rung 3 · G3 — commit rung, highlighted */}
          <FadeIn delay={0.2}>
            <Card className={`h-full flex flex-col text-center ${deal.active ? "ring-2 ring-primary" : ""}`}>
              <CardHeader>
                {deal.active && <Badge className="mx-auto mb-2">Zomeractie</Badge>}
                <CardTitle className="text-lg">3. Word vast lid</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {deal.active
                    ? `Elke week hier? Train onbeperkt voor €${deal.priceDeal} per 4 weken deze zomer (normaal €${deal.priceRegular}). Altijd gratis opzegbaar.`
                    : `Elke week hier? Train onbeperkt voor €${deal.priceRegular} per 4 weken. Altijd gratis opzegbaar.`}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={onbeperktUrl}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Word onbeperkt lid
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* S4 — PRICING + ZOMERDEAL (the decision point) */}
      <Section bg="muted">
        <SectionHeader
          overline={deal.active ? "Zomeraanbieding" : "Prijzen"}
          title="Kies wat bij je past"
          description="Losse sessie of onbeperkt, per 4 weken. Altijd opzegbaar."
        />

        <div className="-mt-4 mb-10 flex flex-col items-center gap-1.5 text-center sm:-mt-6">
          <p className="text-base font-semibold text-foreground">
            De meeste leden starten met 2× per week
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>Sessies van 60 minuten. Voor 1 persoon.</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {/* Losse sessie */}
          <FadeIn>
            <Card className="h-full text-center flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Losse sessie</CardTitle>
                <CardDescription>1 sessie</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-3xl font-bold">€10</p>
                <p className="mt-3 text-sm text-muted-foreground">Geen lidmaatschap nodig</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymSession}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Reserveer
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Instapplan */}
          <FadeIn delay={0.1}>
            <Card className="h-full text-center flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">Instapplan</CardTitle>
                <CardDescription>4 sessies</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-3xl font-bold">
                  €29
                  <span className="text-base font-normal text-muted-foreground"> / 4 weken</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">€7,25 / sessie</p>
                <p className="mt-3 text-sm text-muted-foreground">Ideaal om te beginnen</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={acuityPaidSessions.openGymPlans.instapplan}
                  size="lg"
                  variant="outline"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Word lid
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
          {/* Onbeperkt — deal card (ring + badge + price treatment, all gated) */}
          <FadeIn delay={0.2}>
            <Card className={`h-full text-center flex flex-col ${deal.active ? "ring-2 ring-primary" : ""}`}>
              <CardHeader>
                {deal.active && <Badge className="mx-auto mb-2">Zomeractie</Badge>}
                <CardTitle className="text-lg">Onbeperkt</CardTitle>
                <CardDescription>Train zo vaak je wilt</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {deal.active ? (
                  <>
                    <p>
                      <span className="sc-price-old text-lg">€{deal.priceRegular}</span>{" "}
                      <span className="text-3xl font-bold">€{deal.priceDeal}</span>
                      <span className="text-base font-normal text-muted-foreground"> / 4 weken</span>
                    </p>
                    <p className="mt-1 sc-discount text-sm">Bespaar €{savings} per 4 weken</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Nu lid worden? Dan hou je deze prijs zolang je lid blijft. Daarna is Onbeperkt €{deal.priceRegular} voor nieuwe leden.
                    </p>
                  </>
                ) : (
                  <p className="text-3xl font-bold">
                    €{deal.priceRegular}
                    <span className="text-base font-normal text-muted-foreground"> / 4 weken</span>
                  </p>
                )}
                <p className="mt-3 text-sm text-muted-foreground">Maximale vrijheid</p>
              </CardContent>
              <CardFooter className="justify-center">
                <ButtonLink
                  href={onbeperktUrl}
                  size="lg"
                  className="w-full"
                  data-intent="open_gym"
                  data-pricing="paid"
                >
                  Word lid
                </ButtonLink>
              </CardFooter>
            </Card>
          </FadeIn>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {["Altijd opzegbaar", "Geen contract", "Gratis annuleren", "Eerste les gratis"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 flex-shrink-0 text-discount" aria-hidden />
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* S5 — ZO KOM JE BINNEN (operational, friction-kill) */}
      <Section>
        <SectionHeader
          overline="In de studio"
          title="Zo kom je binnen"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S6 — STUDIO GALLERY */}
      <Section>
        <SectionHeader
          overline="De studio"
          title="Volledig uitgerust"
          description="Powerrack, dumbbells, kabelmachine, cardio en meer. Alles wat je nodig hebt."
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* S7 — FAQ */}
      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Open Gym FAQ" />

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

      {/* S8 — MEER LEZEN — internal links into the Open Gym / sportschool-zonder-abonnement
          topical cluster. Funnels link authority + targets the Dutch queries people
          actually search (sportschool zonder abonnement, open gym vs sportschool). */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Meer lezen over zelfstandig trainen</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/nl/blog/open-gym-vs-sportschool" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Open Gym vs. de sportschool: wat past bij jou?</p>
              </a>
              <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Sportschool zonder abonnement in Amsterdam</p>
              </a>
              <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Privé sportschool vs. een grote keten</p>
              </a>
              <a href="/nl/blog/boutique-gym-vs-sportschool-keten" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Boutique gym vs. ketensportschool</p>
              </a>
              <a href="/nl/blog/eerste-keer-sportschool-tips" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Voor het eerst naar de sportschool: tips</p>
              </a>
              <a href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Blog</p>
                <p className="font-semibold group-hover:text-brand transition-colors">Consistent blijven met sporten</p>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* S9 — BOTTOM CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Kies jouw volgende stap"
          description={
            deal.active
              ? "Nieuw hier? Boek een gratis probeersessie. Klaar om lid te worden? Pak de zomeraanbieding."
              : "Nieuw hier? Boek een gratis probeersessie. Klaar om lid te worden? Word onbeperkt lid."
          }
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink
            href={onbeperktUrl}
            size="lg"
            data-intent="open_gym"
            data-pricing="paid"
          >
            {deal.active ? `Word onbeperkt lid — nu €${deal.priceDeal}` : "Word onbeperkt lid"}
          </ButtonLink>
          <ButtonLink
            href="/nl/gratis-proefles"
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/30 hover:bg-white/10 dark:bg-transparent"
            data-intent="open_gym"
            data-pricing="free"
          >
            Of boek eerst een gratis probeersessie
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

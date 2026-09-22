import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { acuityLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";
import { GoalFunnel } from "@/components/marketing/goal-funnel";
import { ptGoals } from "@/config/pt-goals";
import Image from "next/image";
import { Star, Users, Gift, Percent, Building2, CalendarClock, MessageCircle, ArrowRight, Sparkles, Target, Check, X, Globe } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { googleReviews } from "@/data/reviews";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam — Traject naar jouw doel | SculptClub" },
  description: `Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Bij een gratis intake krijg je een traject-plan met vaste prijs vooraf. ${trainers.length} trainers, privé studio in de Jordaan.`,
  alternates: {
    canonical: "/nl/vind-jouw-personal-trainer",
    languages: {
      nl: "/nl/vind-jouw-personal-trainer",
      en: "/en/find-personal-trainer",
    },
  },
  // Per-page OG/Twitter so shares of THIS page (esp. Instagram) preview the
  // PT-finder pitch + correct URL, not the homepage studio-rental default.
  openGraph: {
    type: "website",
    url: "/nl/vind-jouw-personal-trainer",
    title: "Personal Trainer Amsterdam — Traject naar jouw doel | SculptClub",
    description: `Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Bij een gratis intake krijg je een traject-plan met vaste prijs vooraf. ${trainers.length} trainers, privé studio in de Jordaan.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Amsterdam — Traject naar jouw doel | SculptClub",
    description: `Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Bij een gratis intake krijg je een traject-plan met vaste prijs vooraf. ${trainers.length} trainers, privé studio in de Jordaan.`,
  },
};

const trustBadges = [
  { icon: Building2, label: "Privé studio" },
  { icon: Star, label: "5.0 op Google" },
  { icon: Users, label: `${trainers.length} trainers` },
  { icon: Gift, label: "Gratis intake" },
  { icon: MessageCircle, label: "Direct met je trainer" },
];

const trainerBenefits = [
  { icon: Percent, title: "Jij houdt 100%", description: "Eigen tarief, eigen klanten. Jij huurt de studio en houdt 100% van je inkomsten." },
  { icon: Building2, title: "Premium studio", description: "Train je cli\u00ebnten in een volledig uitgeruste priv\u00e9 studio in de Jordaan." },
  { icon: CalendarClock, title: "Flexibel rooster", description: "Plan je sessies wanneer het jou uitkomt. Volledige vrijheid over je agenda." },
];

const faqs = [
  {
    q: "Wat is een traject?",
    a: "Personal training met een doel en een einddatum, bijvoorbeeld 8 of 12 weken. Bij de gratis intake maakt je trainer een plan: wat je wilt bereiken, hoe vaak je traint, wat jullie meten en wat het in totaal kost. Liever losse sessies? Dat kan ook altijd.",
  },
  {
    q: "Wat kost personal training bij SculptClub?",
    a: "Een SCULPT TRANSFORMATION start vanaf \u20ac299 per 4 weken, inclusief onbeperkt Open Gym. Trainers zijn zelfstandig en bepalen hun eigen prijs, dus je spreekt de exacte totaalprijs af met je trainer bij de gratis intake, vooraf en zonder verrassingen. De eerste intake is altijd gratis: geen kosten, geen verplichting daarna.",
  },
  {
    q: "Hoe werkt de gratis intake?",
    a: "Je stuurt je gekozen trainer een WhatsApp via zijn/haar profielpagina. Jullie spreken af op een moment dat past, je komt naar de studio in de Jordaan, en je doet samen een vrijblijvende kennismakingstraining, de duur stem je samen af. Daarna beslis je zelf of je verder wilt.",
  },
  {
    q: "Wat als het niet klikt met de trainer?",
    a: "Geen probleem. Je kunt altijd switchen: geen contracten, geen kosten, geen ongemakkelijke gesprekken. Probeer een andere trainer of laat ons matchen via het formulier verderop.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Standaard 60 minuten, sommige trainers bieden ook 45-minuten of 90-minuten sessies aan. Check de profielpagina van je trainer voor exacte tijden en tarieven.",
  },
  {
    q: "Kan ik met een vriend(in) of partner trainen?",
    a: "Ja. Veel trainers bieden duo-sessies of small-group training aan (2\u20134 personen) tegen een aangepast tarief per persoon. Goedkoper \u00e9n leuker als je samen wilt trainen.",
  },
  {
    q: "Ik spreek geen Nederlands, kan dat?",
    a: "Alle trainers coachen vloeiend in het Engels. Een aantal trainers spreekt ook Portugees of Russisch. Gebruik het taalfilter in de grid om te zien wie jouw taal spreekt.",
  },
  {
    q: "Wat als ik een blessure of beperking heb?",
    a: "Vermeld het in je eerste bericht aan de trainer. Sommige trainers (Andrea: houding & techniek; Sergei: herstel & houdingscorrectie) zijn hier expliciet in gespecialiseerd. Iedere trainer past de sessie aan op wat veilig is voor jou.",
  },
  {
    q: "Hoe boek ik mijn sessies?",
    a: "Na de gratis intake spreek je direct met je trainer af over een vast moment of losse sessies. Betalingen lopen via je trainer (CreditCard, Apple Pay, of factuur). Geen abonnement, geen lange contracten.",
  },
  {
    q: "Kan ik annuleren of verplaatsen?",
    a: "Altijd gratis. Geen tijdslimiet, geen boetes. Stuur je trainer een WhatsApp en je verplaatst of annuleert direct.",
  },
  {
    q: "Waar is de studio?",
    a: "Egelantiersgracht 424, 1015 RR Amsterdam, middenin de Jordaan. 5 min lopen vanaf Westermarkt (tram 13/17), goed bereikbaar per fiets, betaald parkeren in de wijk. De avond voor je sessie krijg je via WhatsApp het exacte adres en routebeschrijving.",
  },
];


// Goal-first PT hub (operator 2026-09-11: sell transformations, not hours).
const trajectSteps = [
  { title: "Gratis intake", desc: "Telefonisch of in de studio. Je vertelt waar je nu staat en waar je naartoe wilt; samen leggen jullie je startpunt vast." },
  { title: "Jouw traject-plan", desc: "Doel, duur, hoe vaak je traint, wat je meet en de totaalprijs, vooraf afgesproken. Geen verrassingen." },
  { title: "Trainen in de privé studio", desc: "Alleen jij, je trainer en de hele studio. Je trainer stuurt bij op basis van hoe je vooruitgaat." },
  { title: "Meetmoment & volgende stap", desc: "Je ziet wat er veranderd is. Daarna kies je: een volgend traject, zelfstandig verder in Open Gym, of stoppen." },
];

// Every trainer with a VERIFIED own website (research 2026-09-11, docs/PT-TRANSFORMATION-STRATEGY.md).
const methodCards = trainers
  .filter((t) => t.website)
  .map((t) => ({ id: t.id, label: t.website!.label, text: t.website!.tagline?.nl ?? "", kind: "site" as const }));

export default function TrainersPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Personal Trainers","url":"/nl/vind-jouw-personal-trainer"}]} />
      <ReviewsJsonLd reviews={googleReviews} />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <ServiceJsonLd
        name="Personal Training"
        description="Personal training als traject naar een doel, in een privé studio in de Jordaan, Amsterdam. Kies je doel en je trainer; de eerste intake is altijd gratis."
        url="/nl/vind-jouw-personal-trainer"
        priceRange="Vanaf €299 per 4 weken"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: trainers.map((trainer, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: trainer.name,
                jobTitle: "Personal Trainer",
                description: trainer.bio.nl,
                image: `${siteConfig.url}${trainer.image}`,
                url: `${siteConfig.url}/nl/${trainer.slug.nl}`,
                worksFor: {
                  "@type": "LocalBusiness",
                  name: siteConfig.name,
                  url: siteConfig.url,
                },
                knowsLanguage: trainer.languages.map((l) =>
                  l === "NL" ? "Dutch" : l === "EN" ? "English" : l === "PT" ? "Portuguese" : l
                ),
                /* No makesOffer here (operator 2026-09-19 + measured 2026-09-21):
                   the visible page stopped naming hourly rates on 2026-09-19, but
                   this JSON-LD still told Google and the AI engines "€45 / 45 min".
                   Structured data outlives the copy, so it is removed rather than
                   replaced — SculptClub does not set trainer prices, and the
                   4-week price is agreed at the free intake. */
              },
            })),
          }),
        }}
      />
      {/* Hero — goal-first (operator 2026-09-11: "sell transformations, not hours").
          30d before: 93 views, ~10s engagement/view, 1 lead on the NL hub — a
          directory of 13 bios priced per session. Now the page starts from the
          visitor's goal and routes to the trainers who advertise that goal. */}
      <Section>
        <SectionHeader
          as="h1"
          overline="SCULPT TRANSFORMATION · Jordaan"
          title="Geen losse uren. Een transformatie in 4 weken."
          description="Body transformaties vanaf €299 per 4 weken, inclusief onbeperkt Open Gym. Kies wat je wilt bereiken, ontmoet de trainer die daarin gespecialiseerd is, en spreek bij de gratis intake je plan en je prijs af."
        />
        {/* Brand line (operator 2026-09-20: slogan "MAKE IT WORK"; he also floated
            "Let it work" and the chief picked this one). Deliberately BELOW the H1
            and description: the card asked for it inside the first 375px screen
            WITHOUT pushing the H1 down, and anything placed above the H1 moves it.
            Measured at 375px before this change: overline top 192, H1 216-298,
            description 314, first CTA 662 — so there is room here and the H1 stays
            at 216. English on the Dutch page by design; it is a brand line, not copy.
            Written in literal capitals rather than CSS uppercase so a grep for
            "MAKE IT WORK" in the served HTML finds it — an audit already reported it
            missing once, and CSS-only capitals would have kept reporting that. */}
        <p className="mt-5 text-center text-sm font-extrabold tracking-[0.18em] text-brand">
          MAKE IT WORK
        </p>
        <FadeIn>
          <div className="mb-8 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="h-5 w-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3">
            <a href="#doelen" data-cta="trainerhub-goals" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-brand-lg transition-all hover:bg-brand-dark active:scale-[0.98]">
              <Target className="h-5 w-5" />
              Kies je doel
            </a>
            <a href="/nl/match-trainer" data-cta="trainerhub-quiz" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]">
              <Sparkles className="h-5 w-5" />
              Twijfel je? 3 vragen
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Step 1 — goal picker → traject outline → matched trainers */}
      <Section bg="muted" id="doelen" className="scroll-mt-20">
        <SectionHeader overline="Stap 1" title="Wat wil je bereiken?" description="Kies je doel. Je ziet direct waar een traject aan werkt en welke trainers hierin gespecialiseerd zijn." />
        <GoalFunnel goals={ptGoals} trainers={trainers} locale="nl" />
      </Section>

      {/* How a traject works — the SculptClub standard every trainer delivers */}
      <Section>
        <SectionHeader overline="Zo werkt het" title="Van intake tot resultaat" description="Elke trainer werkt op zijn eigen manier. Dit mag je van elk traject bij SculptClub verwachten." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trajectSteps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">{i + 1}</div>
                <p className="mb-1 font-semibold">{step.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Zelfstandig verder na je traject? <a href="/nl/open-gym" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">Bekijk Open Gym →</a>
        </p>
      </Section>

      {/* Traject vs single session */}
      <Section bg="muted">
        <SectionHeader overline="Waarom een traject" title="Traject of losse sessie?" description="Losse sessies blijven altijd mogelijk. Maar wie een doel heeft, komt verder met een plan." />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 text-lg font-bold">Losse sessie</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Per keer boeken</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Geen vast plan of einddatum</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Geen vaste meetmomenten</li>
              <li className="flex gap-2 text-sm"><X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Per sessie afgerekend</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-brand bg-card p-6 shadow-brand-lg">
            <p className="mb-4 text-lg font-bold">Traject</p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Een concreet doel met een einddatum</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Een plan per week dat past in je agenda</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Meetmomenten, zodat je ziet wat je bereikt</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Vanaf €299 per 4 weken, incl. onbeperkt Open Gym</li>
              <li className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />Vaste totaalprijs vooraf afgesproken met je trainer</li>
            </ul>
          </div>
        </div>
        {/* DUO (chief 2026-09-21, from the operator's question "299 for one
            person 4 weeks, 399 for two persons?"). Deliberately ONE sentence
            here and NOT a third button on the trainer cards: the studio holds
            max 4, so a duo fits, but a third CTA on a mobile card costs more
            conversion than the duo line wins. Price keeps "vanaf" for the same
            reason as the solo line: each trainer sets their own. */}
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-muted-foreground">
          Samen trainen? Duo-transformatie vanaf €199 p.p. per 4 weken (voor twee, €399 totaal).
        </p>
      </Section>

      {/* Trainers with their own coaching brand — link out to their sites */}
      <Section>
        <SectionHeader overline="Eigen methode" title="Trainers met een eigen merk en programma's" description="Veel trainers bij SculptClub hebben een eigen coachingbedrijf, met programma's en pakketten. Lees op hun site hoe ze werken en wat hun cliënten zeggen." />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {methodCards.map((card) => {
            const tr = trainers.find((x) => x.id === card.id);
            if (!tr) return null;
            const href = card.kind === "site" && tr.website ? tr.website.url : `/nl/${tr.slug.nl}`;
            const external = card.kind === "site" && Boolean(tr.website);
            return (
              <a
                key={card.id}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
                data-trainer-website={external ? tr.name : undefined}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/60"
              >
                <Image src={tr.image} alt={`Foto van ${tr.name}, personal trainer bij SculptClub Amsterdam`} width={64} height={64} className="h-16 w-16 shrink-0 rounded-full object-cover object-top" />
                <span className="min-w-0">
                  <span className="block font-bold">{tr.name}</span>
                  <span className="block text-sm font-medium text-brand">{card.label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{card.text}</span>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-brand">
                    {external ? <Globe className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                    {external ? "Bekijk methode & ervaringen" : "Bekijk profiel"} {external ? "↗" : "→"}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Section>

      {/* All trainers — for visitors who prefer to browse */}
      <Section bg="muted">
        <SectionHeader overline="Alle trainers" title={`Liever zelf kiezen? Bekijk alle ${trainers.length}`} description="Filter op specialiteit of taal. De eerste intake is altijd gratis." />
        <div id="trainer-grid" className="scroll-mt-24">
          <TrainerFilterGrid trainers={trainers} locale="nl" />
        </div>
      </Section>

      {/* Specific-need routing — self-segment for high-intent visitors */}
      <Section>
        <SectionHeader
          overline="Specifieke behoefte?"
          title="Direct naar jouw situatie"
          description="Op zoek naar een trainer voor een specifieke levensfase of samenstelling? Gebruik de snelkoppelingen hieronder."
        />
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Vrouwelijke personal trainer</p>
              <p className="text-sm text-muted-foreground">Gezina, Eva of Andrea: drie vrouwelijke trainers, privé studio, comfortabel leren krachttrainen.</p>
            </a>
            {/* De-orphaned 2026-08-28 — zero inbound internal links before this. */}
            <a href="/nl/personal-trainer-jordaan" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Personal trainer in de Jordaan</p>
              <p className="text-sm text-muted-foreground">Egelantiersgracht 424: privé studio in de Jordaan en het Centrum, geen keten, geen wachtrij.</p>
            </a>
            <a href="/nl/blog/engels-sprekende-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Engels-sprekende trainer</p>
              <p className="text-sm text-muted-foreground">Alle trainers coachen vloeiend in het Engels. Geschikt voor expats en internationale teams.</p>
            </a>
            <a href="/nl/blog/personal-trainer-zwangerschap-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Tijdens je zwangerschap</p>
              <p className="text-sm text-muted-foreground">Veilig blijven trainen per trimester. Mobiliteit, core, bevallingsvoorbereiding.</p>
            </a>
            <a href="/nl/blog/personal-trainer-na-bevalling-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Na de bevalling (postpartum)</p>
              <p className="text-sm text-muted-foreground">Geleidelijk terug naar kracht. Diastase, bekkenbodem, relaxine, met ervaring.</p>
            </a>
            <a href="/nl/blog/small-group-training-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Samen trainen (2–4 personen)</p>
              <p className="text-sm text-muted-foreground">Duo of klein groepje met partner, vriend of collega’s. Kosten delen, privé studio.</p>
            </a>
            <a href="/nl/blog/personal-trainer-voor-senioren-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Voor senioren (50+)</p>
              <p className="text-sm text-muted-foreground">Sterker blijven, balans behouden, valpreventie. Rustig opbouwen in een rustige ruimte.</p>
            </a>
            {/* S-finish (2026-06-02): injury-recovery niche — the gap in the
                router, validated by Studio Performance Boost's injury segment.
                Trainers Alex (herstel), Ibrahim (revalidatie), Andrea (techniek)
                cover this. Links to the existing na-blessure blog. */}
            <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Herstel na een blessure</p>
              <p className="text-sm text-muted-foreground">Veilig terug opbouwen na een blessure of operatie. Revalidatie-ervaren trainers, rustig tempo, techniek eerst.</p>
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Trainer matching form */}
      <Section bg="muted">
        <SectionHeader
          overline="Hulp nodig?"
          title="Weet je niet welke trainer bij je past?"
          description="Vul het formulier in en we helpen je de juiste trainer te vinden."
        />
        <FadeIn>
          <TrainerMatchForm locale="nl" />
        </FadeIn>
      </Section>

      {/* For trainers — recruitment cross-link */}
      <Section>
        <SectionHeader
          overline="Voor trainers"
          title="Personal trainer? Verkoop trajecten, geen uren."
          description="Huur de studio vanaf €12/uur, houd 100% van je tarief en krijg klanten die met een doel binnenkomen. Deze pagina stuurt ze naar jou."
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {trainerBenefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/nl/voor-trainers" size="lg">
            Bekijk voor-trainers info
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag meer weten over werken bij SculptClub")}`}
            size="lg"
            variant="outline"
          >
            WhatsApp ons
          </ButtonLink>
        </FadeIn>
        <p className="mt-6 text-center text-sm">
          <a href="/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">Zo prijs je een traject of pakket →</a>
        </p>
      </Section>

      {/* Real Google reviews of the STUDIO (card mub833cd8fiu6l).
          Reuses the shipped ReviewsPreview, already live on 6+ pages, rather
          than building a second reviews surface: the quotes are real and
          attributed (name + Google mark + Local Guide badge where true), and
          the aggregate line reads siteConfig.rating, so the 5.0/19 stays in one
          place — that single source is what stopped the 21-vs-19 overstatement
          recurring. Studio reviews only; no per-trainer quotes here, because
          trainers.ts testimonials render ONLY where a consented real quote
          exists and none has been collected yet (blocked on mpy22kmsv5acpq). */}
      <ReviewsPreview locale="nl" />

      {/* FAQ */}
      <Section>
        <SectionHeader
          overline="Veelgestelde vragen"
          title="Wat je wilt weten voor je begint"
          description="Alles wat eerste-keer-bezoekers ons vragen. Mis je iets? App ons."
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <Accordion className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`pt-faq-${i}`}>
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

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Kies je doel, plan je gratis intake"
          description="Geen contract, geen verplichting. Je trainer maakt een plan met een vaste prijs vooraf. Jij beslist daarna."
        />
        <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink
            href="#doelen"
            size="lg"
            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
          >
            Kies je doel
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik wil graag een gratis intake plannen bij SculptClub.")}`}
            external
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ons
          </ButtonLink>
        </FadeIn>
        <FadeIn>
          <p className="mt-6 text-center text-xs text-white/55">
            +31 6 15 14 79 52 · meestal antwoorden we binnen het uur
          </p>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

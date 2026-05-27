import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { acuityLinks } from "@/config/acuity";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";
import { Star, Users, Gift, Percent, Building2, CalendarClock, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd, ReviewsJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { googleReviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Vind Jouw Personal Trainer — SculptClub Amsterdam Jordaan" },
  description: `Personal trainers in Amsterdam Jordaan — gratis intake, tarieven vanaf €45/sessie. ${trainers.length} specialisten, 0% commissie. Vind jouw match bij SculptClub.`,
  alternates: {
    canonical: "/nl/vind-jouw-personal-trainer",
    languages: {
      nl: "/nl/vind-jouw-personal-trainer",
      en: "/en/find-personal-trainer",
    },
  },
};

const trustBadges = [
  { icon: Building2, label: "Privé studio" },
  { icon: Star, label: "5.0 op Google" },
  { icon: Users, label: `${trainers.length} trainers` },
  { icon: Gift, label: "Gratis intake" },
  { icon: Percent, label: "0% commissie" },
];

const trainerBenefits = [
  { icon: Percent, title: "0% commissie", description: "Houd 100% van je inkomsten. Wij rekenen geen commissie op jouw sessies." },
  { icon: Building2, title: "Premium studio", description: "Train je cli\u00ebnten in een volledig uitgeruste priv\u00e9 studio in de Jordaan." },
  { icon: CalendarClock, title: "Flexibel rooster", description: "Plan je sessies wanneer het jou uitkomt. Volledige vrijheid over je agenda." },
];

const faqs = [
  {
    q: "Wat kost personal training bij SculptClub?",
    a: "Trainers bepalen hun eigen tarieven, vanaf \u20ac45 per sessie. De eerste intake (inclusief kennismakingstraining) is altijd gratis \u2014 geen kosten, geen verplichting daarna.",
  },
  {
    q: "Hoe werkt de gratis intake?",
    a: "Je stuurt je gekozen trainer een WhatsApp via zijn/haar profielpagina. Jullie spreken af op een moment dat past, je komt naar de studio in de Jordaan, en je doet samen een vrijblijvende kennismakingstraining — de duur stem je samen af. Daarna beslis je zelf of je verder wilt.",
  },
  {
    q: "Wat als het niet klikt met de trainer?",
    a: "Geen probleem. Je kunt altijd switchen \u2014 geen contracten, geen kosten, geen ongemakkelijke gesprekken. Probeer een andere trainer of laat ons matchen via het formulier verderop.",
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
    q: "Ik spreek geen Nederlands \u2014 kan dat?",
    a: "Alle trainers coachen vloeiend in het Engels. Een aantal trainers spreekt ook Portugees of Russisch. Gebruik het taalfilter in de grid om te zien wie jouw taal spreekt.",
  },
  {
    q: "Wat als ik een blessure of beperking heb?",
    a: "Vermeld het in je eerste bericht aan de trainer. Sommige trainers (Andrea \u2014 houding & techniek, Sergei \u2014 herstel & houdingscorrectie) zijn hier expliciet in gespecialiseerd. Iedere trainer past de sessie aan op wat veilig is voor jou.",
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
    a: "Egelantiersgracht 424, 1015 RR Amsterdam \u2014 middenin de Jordaan. 5 min lopen vanaf Westermarkt (tram 13/17), goed bereikbaar per fiets, betaald parkeren in de wijk. De avond voor je sessie krijg je via WhatsApp het exacte adres en routebeschrijving.",
  },
];

export default function TrainersPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Personal Trainers","url":"/nl/vind-jouw-personal-trainer"}]} />
      <ReviewsJsonLd reviews={googleReviews} />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <ServiceJsonLd
        name="Personal Training"
        description="Privé personal training in een boutique studio in de Jordaan, Amsterdam. Kies je eigen trainer, eerste intake altijd gratis."
        url="/nl/vind-jouw-personal-trainer"
        priceRange="€45 - €120 per sessie"
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
                ...(trainer.rate ? { makesOffer: { "@type": "Offer", price: trainer.rate } } : {}),
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Trainers"
          title="Vind Jouw Personal Trainer"
          description="Privé studio · Eerste intake gratis · Sessies vanaf €45 · Kies je trainer, of laat ons matchen."
        />

        {/* Trust badges */}
        <FadeIn>
          <div className="mb-6 flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
                <badge.icon className="h-5 w-5 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/*
          Dual-primary CTA strip — paid-Google-Ads landing conversion lever
          (operator directive 2026-05-16: PT-search ads now route here; goal
          #3 in operator funnel = "click try-out with trainer"). Before this
          strip shipped, paid mobile visitors had to scroll through 8 trainer
          cards before reaching a decision moment — too many choices for
          ad-clickers. The emerald WhatsApp-direct CTA gives instant-match
          path (we match them to a trainer), while the brand-blue scroll-
          anchor preserves the "I want to choose" path for visitors who
          prefer evaluation.

          Same dual-CTA pattern as /nl/gratis-intake (shipped earlier this
          session). Funnel-coherent: both ad-landing pages now expose both
          paths simultaneously.
        */}
        <FadeIn>
          {/* 2-CTA strip — UX audit 2026-05-27. Previously 3 CTAs (Match
              quiz + WhatsApp + browse-all). WhatsApp removed: it's
              always-available in the sticky lead bar at the bottom of
              every viewport on mobile. Keeping it here was duplicate
              + competed with the orange Match-quiz primary (both bright
              fills next to each other). Match-quiz primary (orange) +
              browse-all outline = clean choice for the undecided. */}
          <div className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-3">
            <a
              href="/nl/match-trainer"
              data-cta="trainerhub-quiz"
              className="plausible-event-name=trainerhub_quiz inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-brand-lg transition-all hover:bg-brand-dark active:scale-[0.98]"
            >
              <Sparkles className="h-5 w-5" />
              Match je trainer — 3 vragen
            </a>
            <a
              href="#trainer-grid"
              data-cta="trainerhub-scroll-grid"
              className="plausible-event-name=trainerhub_scroll_grid inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/5 active:scale-[0.98]"
            >
              Of bekijk alle {trainers.length} ↓
            </a>
          </div>
        </FadeIn>

        {/* Trainer cards with filter */}
        <div id="trainer-grid">
          <TrainerFilterGrid trainers={trainers} locale="nl" />
        </div>
      </Section>

      {/* Specific-need routing — self-segment for high-intent visitors */}
      <Section>
        <SectionHeader
          overline="Specifieke behoefte?"
          title="Direct Naar Jouw Situatie"
          description="Op zoek naar een trainer voor een specifieke levensfase of samenstelling? Gebruik de snelkoppelingen hieronder."
        />
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Vrouwelijke personal trainer</p>
              <p className="text-sm text-muted-foreground">Gezina, Eva of Andrea — drie vrouwelijke trainers, privé studio, comfortabel leren krachttrainen.</p>
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
              <p className="text-sm text-muted-foreground">Geleidelijk terug naar kracht. Diastase, bekkenbodem, relaxine — met ervaring.</p>
            </a>
            <a href="/nl/blog/small-group-training-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Samen trainen (2–4 personen)</p>
              <p className="text-sm text-muted-foreground">Duo of klein groepje met partner, vriend of collega&apos;s. Kosten delen, privé studio.</p>
            </a>
            <a href="/nl/blog/personal-trainer-voor-senioren-amsterdam" className="group block rounded-xl border border-border/50 p-5 transition-colors hover:bg-muted">
              <p className="font-semibold text-base group-hover:text-brand transition-colors mb-1">Voor senioren (50+)</p>
              <p className="text-sm text-muted-foreground">Sterker blijven, balans behouden, valpreventie. Rustig opbouwen in een rustige ruimte.</p>
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* Trainer matching form */}
      <Section bg="muted">
        <SectionHeader
          overline="Hulp nodig?"
          title="Weet Je Niet Welke Trainer Bij Je Past?"
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
          title="Ben jij personal trainer? Huur de studio."
          description="0% commissie, eigen profiel op deze site, en match met klanten die SculptClub zelf vinden. Vanaf €12/uur."
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
            href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag meer weten over werken bij SculptClub")}`}
            size="lg"
            variant="outline"
          >
            WhatsApp ons
          </ButtonLink>
        </FadeIn>
      </Section>

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
          title="Plan Je Gratis Intake"
          description="Eerste intake gratis. Geen contract. Geen verplichting. Kies je trainer of stuur ons een WhatsApp."
        />
        <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink
            href="#trainer-grid"
            size="lg"
            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold"
          >
            Bekijk de trainers
            <ArrowRight className="ml-2 w-4 h-4" />
          </ButtonLink>
          <ButtonLink
            href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik wil graag een gratis intake plannen bij SculptClub.")}`}
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
            +31 6 83 17 89 34 · meestal antwoorden we binnen het uur
          </p>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

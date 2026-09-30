import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { trainers } from "@/config/trainers";
import { TrainerMatchForm } from "@/components/marketing/trainer-match-form";
import { TrainerCompactGrid } from "@/components/marketing/trainer-compact-grid";
import { ptGoals } from "@/config/pt-goals";
import Image from "next/image";
import { Star, MessageCircle, ArrowDown, Sparkles, ChevronDown } from "lucide-react";
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
  title: { absolute: "Personal trainer Amsterdam Jordaan | SculptClub" },
  description: "Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Gratis intake met een plan en een vaste prijs vooraf.",
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
    title: "Personal trainer Amsterdam Jordaan | SculptClub",
    description: "Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Gratis intake met een plan en een vaste prijs vooraf.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal trainer Amsterdam Jordaan | SculptClub",
    description: "Personal trainer in Amsterdam? Kies je doel: afvallen, sterker worden of pijnvrij bewegen. Gratis intake met een plan en een vaste prijs vooraf.",
  },
};

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
    a: "Dan kies je een andere trainer. Er is geen contract en overstappen kost niets. Je kunt ons ook laten matchen via het formulier verderop.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Standaard 60 minuten, sommige trainers bieden ook 45-minuten of 90-minuten sessies aan. Check de profielpagina van je trainer voor exacte tijden en tarieven.",
  },
  {
    q: "Kan ik met een vriend(in) of partner trainen?",
    a: "Ja. Een duo-transformatie start vanaf \u20ac199 p.p. per 4 weken (voor twee, \u20ac399 totaal). Veel trainers bieden ook small-group training aan (2\u20134 personen) tegen een aangepast tarief per persoon.",
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
    a: "Egelantiersgracht 424, 1015 RR Amsterdam, middenin de Jordaan. 5 min lopen vanaf Westermarkt (tram 13/17), goed bereikbaar per fiets, betaald parkeren in de wijk. Om 00:00 in de nacht voor je sessie krijg je via WhatsApp het exacte adres en routebeschrijving.",
  },
];


export default function TrainersPageNL() {
  return (
    <PageLayout audience="member">
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
      {/* Redesign 2026-09-24 (operator on his phone: "very long and confusing",
          "can look way better, big good images"). One promise, one sub-line,
          the trainers straight after with big photos and ONE button each.
          Studio photo only (no faces). The long blocks (traject steps, traject
          vs losse sessie, method cards, recruitment) are gone; the facts they
          carried live in the hero line, the card "Meer" panels and the FAQ. */}
      <section className="relative isolate overflow-hidden bg-[#0B0907]">
        <Image
          src="/images/studio/studio-overview.jpeg"
          alt="De privé studio van SculptClub aan de Egelantiersgracht in de Jordaan"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/35" aria-hidden="true" />
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-24 text-white sm:px-6 sm:pb-14 sm:pt-40">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">SCULPT TRANSFORMATION · Jordaan</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-[1.05] text-white text-balance sm:text-6xl">
            Vind je trainer in de Jordaan.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Eerste kennismaking gratis. Daarna vanaf €299 per 4 weken, incl. onbeperkt Open Gym.
          </p>
          {/* Brand line (operator 2026-09-20). Literal capitals so a grep of the
              served HTML finds it. */}
          <p className="mt-4 text-sm font-extrabold tracking-[0.18em] text-white">MAKE IT WORK</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#trainers" data-cta="trainerhub-goals" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark">
              Bekijk de trainers
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="/nl/match-trainer" data-cta="trainerhub-quiz" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Twijfel je? 3 vragen
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4" aria-hidden="true" />5.0 op Google</span>
            <span>{trainers.length} trainers</span>
            <span>Privé studio</span>
          </p>
        </div>
      </section>

      {/* Trainers — filter row + big-photo cards. #doelen and #trainer-grid kept
          as anchors so older links into this page still land here. */}
      <section id="trainers" className="scroll-mt-28 py-8 sm:py-12">
        <div id="doelen" className="mx-auto max-w-6xl scroll-mt-28 px-4 sm:px-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Kies je trainer</h2>
          <div id="trainer-grid" className="scroll-mt-28">
            <TrainerCompactGrid trainers={trainers} goals={ptGoals} locale="nl" />
          </div>
        </div>
      </section>

      {/* How it works — three short facts, no scroll. */}
      <section className="border-y border-border bg-secondary/50 py-8">
        <ol className="mx-auto grid max-w-5xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {[
            { t: "Gratis kennismaking", d: "App je trainer. Jullie trainen een keer samen, zonder verplichting." },
            { t: "Jouw plan, prijs vooraf", d: "Je spreekt samen je doel, de duur en de totaalprijs af, voordat je begint." },
            { t: "Trainen in de privé studio", d: "Vanaf €299 per 4 weken, incl. onbeperkt Open Gym." },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">{i + 1}</span>
              <span>
                <span className="block font-semibold">{s.t}</span>
                <span className="block text-sm text-muted-foreground">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Real Google reviews of the STUDIO (card mub833cd8fiu6l); the aggregate
          reads siteConfig.rating. Studio reviews only, no per-trainer quotes. */}
      <ReviewsPreview locale="nl" />

      {/* Specific-need routing — compact links (several pages rely on these
          as their only inbound internal link, e.g. /nl/personal-trainer-jordaan). */}
      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-3 text-lg font-bold">Specifieke situatie?</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/nl/blog/vrouwelijke-personal-trainer-amsterdam", label: "Vrouwelijke trainer" },
              { href: "/nl/personal-trainer-jordaan", label: "Personal trainer in de Jordaan" },
              { href: "/nl/blog/engels-sprekende-personal-trainer-amsterdam", label: "Engels-sprekende trainer" },
              { href: "/nl/blog/personal-trainer-zwangerschap-amsterdam", label: "Tijdens je zwangerschap" },
              { href: "/nl/blog/personal-trainer-na-bevalling-amsterdam", label: "Na de bevalling" },
              { href: "/nl/blog/small-group-training-amsterdam", label: "Samen trainen (2–4)" },
              { href: "/nl/blog/personal-trainer-voor-senioren-amsterdam", label: "Senioren (50+)" },
              { href: "/nl/blog/personal-trainer-na-blessure-amsterdam", label: "Herstel na een blessure" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — kept in full: FaqJsonLd above must match visible questions. */}
      <Section bg="muted">
        <SectionHeader overline="Veelgestelde vragen" title="Wat je wilt weten voor je begint" />
        <div className="mx-auto max-w-2xl">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`pt-faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Bottom band — second studio photo, WhatsApp match + the match form
          folded behind one tap. */}
      <section className="relative isolate overflow-hidden bg-[#0B0907] text-white">
        <Image
          src="/images/studio/power-rack.jpeg"
          alt="Power rack en halters in de SculptClub studio"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Twijfel je? Wij matchen je.</h2>
          <p className="mt-3 text-white/85">Geen contract, geen verplichting. Meestal antwoorden we binnen het uur.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik wil graag een gratis intake plannen bij SculptClub.")}`}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp ons
            </a>
            <a href="/nl/match-trainer" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              3 vragen, wij kiezen
            </a>
          </div>
          <details className="group mx-auto mt-6 max-w-xl text-left">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-1 text-sm font-semibold text-white/85 hover:text-white [&::-webkit-details-marker]:hidden">
              Of vul het formulier in
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="mt-4 rounded-2xl bg-card p-4 text-foreground">
              <TrainerMatchForm locale="nl" />
            </div>
          </details>
          <p className="mt-6 text-xs text-white/60">
            +31 6 15 14 79 52 · Personal trainer zelf?{" "}
            <a href="/nl/voor-trainers" className="font-semibold text-white underline underline-offset-4">Huur de studio</a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { PhotoSlideshow } from "@/components/marketing/photo-slideshow";
import { ArrowRight, Building2, Users, FileText, MapPin, CheckSquare, Scale, Calendar } from "lucide-react";
import { acuityFreeTrials } from "@/config/acuity";

export const metadata: Metadata = {
  title: { absolute: "Voor Personal Trainers in Amsterdam | SculptClub Jordaan" },
  description:
    "Voor freelance personal trainers in Amsterdam: studio huren vanaf €12/uur. 0% commissie, geen contract, altijd gratis annuleren via SculptClub.",
  alternates: {
    canonical: "/nl/voor-trainers",
    languages: {
      nl: "/nl/voor-trainers",
      en: "/en/for-trainers",
    },
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Studio huren",
    href: "/nl/studio-huren",
    text:
      "Privé trainingsruimte in Jordaan vanaf €12/uur. Geen commissie, flexibel per sessie, alles inbegrepen.",
    cta: "Bekijk studio huur",
  },
  {
    icon: Users,
    title: "Word trainer met profiel",
    href: "/nl/word-trainer",
    text:
      "Eigen profiel op sculptclub.nl + klantenmatch via /vind-jouw-personal-trainer. Voor trainers die hun praktijk willen groeien, niet alleen ruimte willen.",
    cta: "Word trainer",
  },
  {
    icon: FileText,
    title: "Freelance trainer worden",
    href: "/nl/voor-trainers/freelance-personal-trainer-worden",
    text:
      "Praktische gids voor personal trainers die overwegen ZZP'er te worden in Amsterdam. KvK, tarieven, eerste klanten, ruimte.",
    cta: "Lees de gids",
  },
  {
    icon: CheckSquare,
    title: "ZZP setup checklist",
    href: "/nl/voor-trainers/zzp-personal-trainer-checklist",
    text:
      "10-stappen praktische gids: KvK, BTW, verzekering, bank, administratie. Kosten, doorlooptijd, eerste factuur.",
    cta: "Bekijk de checklist",
  },
  {
    icon: MapPin,
    title: "Locatie-analyse Jordaan",
    href: "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
    text:
      "Waarom Jordaan werkt voor PT's: klantprofiel, gemiddelde tarieven, concurrentie, en wat trainers hier verdienen.",
    cta: "Lees de analyse",
  },
  {
    icon: Scale,
    title: "Studio vs thuis vs buiten",
    href: "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
    text:
      "Vergelijking met echte cijfers: eigen studio leasen, bij klant thuis, in het park, of per uur huren — wanneer kies je wat?",
    cta: "Zie vergelijking",
  },
];

const trainerFaqs = [
  {
    q: "Wat kost het écht om de studio te huren?",
    a: "Halve studio (1:1 sessies) vanaf €12 per 60 min, €17 per 90 min. Hele studio (max 6 personen) €17/60 min, €24/90 min. Kortingspakketten besparen 10-23%: Starter €89, Routine €199, Pro €349, Volume €549. Alle apparatuur, wifi, muziek en schoonmaak zijn inbegrepen. Geen abonnement of bemiddelingskosten.",
  },
  {
    q: "Hoe boek ik een sessie?",
    a: "Online via Acuity (ons boekingssysteem). Je krijgt direct bevestiging en de avond voor je sessie ontvang je een unieke deurcode via WhatsApp. Geen receptie, geen sleutels.",
  },
  {
    q: "Kan ik eerst gratis komen kijken?",
    a: "Ja. We bieden een gratis 60-minuten proefsessie aan in de studio — bekijk de ruimte, train zelf, stel je vragen. Geen verplichting, geen verkoop-pitch.",
  },
  {
    q: "Krijg ik een eigen profiel op sculptclub.nl?",
    a: "Ja, als je trainer bij SculptClub wordt. Dat is gratis bij regelmatige studio-huur (vanaf ~5 uur/maand). Je profiel verschijnt op /vind-jouw-personal-trainer waar bezoekers die SculptClub via Google vinden direct aan jou gematcht kunnen worden.",
  },
  {
    q: "Wat is het verschil tussen losse uur-huur en trainer bij SculptClub zijn?",
    a: "Losse uur-huur: per sessie betalen, BYO klanten, geen vermelding op site. Met profiel: zelfde studio + eigen profiel + match met inbound klanten + vermelding op Instagram/TikTok. Beide hebben 0% commissie op jouw klanten.",
  },
  {
    q: "Rekenen jullie commissie over mijn klanten?",
    a: "Nee. 0% commissie. Wij verdienen alleen aan de studio-huur. Wat jij rekent aan je klant — €45, €75, €120 — is volledig voor jou.",
  },
  {
    q: "Welke verzekering heb ik nodig?",
    a: "Een geldige beroepsaansprakelijkheidsverzekering (ZZP-pensioen.nl, Centraal Beheer of vergelijkbaar, vanaf ~€25/maand). Dit is je eigen verantwoordelijkheid en geldt op elke locatie waar je traint, ook hier.",
  },
  {
    q: "Welke apparatuur is aanwezig?",
    a: "Rogue power rack, Olympic barbells + bumpers, dumbbells tot 32 kg, kabelmachine, sleds, kettlebells, plyo box, fitnessbanken, bands en cardio. Voldoende voor 95% van standaard-PT-sessies. Lijst op /nl/studio-huren.",
  },
  {
    q: "Tot welke tijden is de studio open?",
    a: "Dagelijks 06:30-22:00. Je boekt je eigen tijdvak in Acuity; binnen jouw uur ben jij + je klant alleen in de studio (privé).",
  },
  {
    q: "Hoe zit het met annuleren?",
    a: "Studio-huur annuleer je gratis via Acuity, op elk moment. Geen tijdslimiet, geen kosten. Voor pakketten geldt: 1 jaar geldig vanaf aankoop.",
  },
];

export default function VoorTrainersHubNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Voor personal trainers"
          title="Bouw je personal training praktijk in Amsterdam"
          description="SculptClub is gebouwd door en voor freelance trainers. Privé studio in Jordaan, geen commissie op jouw klanten, eigen profiel op onze site. Begin met uur-huur — of word trainer bij SculptClub en krijg klanten via ons."
          center={false}
        />
        {/* CTAs moved ABOVE the slideshow 2026-05-19. Mobile fold audit
            on iPhone 14 Pro (660 px viewport) showed first CTA "Plan gratis
            rondleiding" at y=674 — 14 px below the fold. The 16:9
            PhotoSlideshow (~210 px tall on mobile) was pushing the action
            row past the visitor's first frame.
            Action-first order: CTAs + trust line → slideshow as supporting
            evidence below. Trainer-prospect lands → sees action options
            immediately → slideshow validates the offer when they scroll. */}
        <FadeIn className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={acuityFreeTrials.studioRentalTryout}
            external
            size="lg"
            className="plausible-event-name=hub_hero_tour_click"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Plan gratis rondleiding
          </ButtonLink>
          <ButtonLink
            href="/nl/word-trainer"
            variant="outline"
            size="lg"
            className="plausible-event-name=hub_hero_member_click"
          >
            Word trainer
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink
            href="/nl/studio-huren"
            variant="outline"
            size="lg"
            className="plausible-event-name=hub_hero_rental_click"
          >
            Alleen ruimte huren
          </ButtonLink>
        </FadeIn>
        {/* 5★ Google trust signal — matches the studio-huren hero pattern.
            Audit 2026-05-20 found this page (and its EN parallel + the
            recruitment pages) lacked the rating signal that studio-huren
            has, costing parity with the most authoritative trust cue for
            boutique-gym audiences. */}
        <FadeIn>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-amber-400" aria-hidden>★★★★★</span>
              <span className="font-semibold">5,0 op Google</span>
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-border sm:inline-block" />
            <span className="text-muted-foreground">
              Vanaf €12/uur · 0% commissie · Geen contract · <strong className="text-foreground">Altijd gratis annuleren</strong> · Dagelijks 06:30–22:00
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-8">
            <PhotoSlideshow
              images={[
                { src: "/images/studio/training-squat-cinematic.jpg", alt: "Privé squat rack in de SculptClub studio in Jordaan" },
                { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
                { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal trainer geeft een sessie bij SculptClub" },
                { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht op de gracht vanuit de SculptClub studio" },
                { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub gevel aan de Egelantiersgracht in de Jordaan" },
              ]}
              aspect="aspect-[16/9]"
            />
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="Zes paden"
          title="Welk pad past bij jou?"
          description="SculptClub werkt voor verschillende type trainers. Kies waar je nu staat — we helpen je groeien vanaf daar."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title}>
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                    <h3 className="text-xl font-semibold leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.text}
                    </p>
                    <ButtonLink href={pillar.href} variant="outline" size="sm">
                      {pillar.cta}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </ButtonLink>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Trainer FAQ — schema-marked for SEO */}
      <FaqJsonLd faqs={trainerFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <Section bg="muted">
        <SectionHeader
          overline="Vragen van trainers"
          title="Veelgestelde vragen"
          description="Praktische antwoorden op wat trainers vragen voordat ze beginnen. Mis je iets? WhatsApp +31 6 83 17 89 34."
        />
        <div className="mx-auto max-w-3xl space-y-0">
          {trainerFaqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border-b border-border/50 py-6">
                <h3 className="mb-2 font-semibold">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Twijfel je? Kom eerst gratis langs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              60 minuten in de studio, kennismaken, vraag stellen. Geen verplichting. Geen pitch.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.studioRentalTryout}
                external
                size="lg"
                className="plausible-event-name=hub_bottom_tour_click"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Plan gratis rondleiding
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag de studio bekijken")}`}
                external
                variant="outline"
                size="lg"
                className="plausible-event-name=hub_bottom_whatsapp_click border-white/20 text-white hover:bg-white/10"
              >
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

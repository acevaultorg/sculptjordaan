import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { RotatingImageStack } from "@/components/marketing/rotating-image-stack";
import { getColor } from "@/lib/image-color-manifest";
import { ArrowRight, Building2, Users, FileText, MapPin, CheckSquare, Scale, Calendar, Check, MessageCircle } from "lucide-react";
import { acuityFreeTrials } from "@/config/acuity";

// Studio Membership (operator 2026-06-21) — optional recurring plan for
// trainers who are here every week. MEMBERSHIP_FROM is an indicative "vanaf"
// anchor; change this one line to adjust the public price. Billing is set up
// manually via WhatsApp for now (no self-serve checkout yet).
const MEMBERSHIP_FROM = "€179";
const membershipPerks = [
  "Eén vast maandbedrag: geen verrassingen",
  "Jouw vaste trainingstijden gereserveerd",
  "Lager effectief uurtarief dan losse huur",
  "Pauzeer wanneer je weg bent, dan betaal je niet",
  "Maandelijks opzegbaar, geen lang contract",
  "Jouw thuisbasis: de privé studio in de Jordaan",
];

// Trainer referral (operator 2026-06-21) — the perk a referrer earns when a
// trainer they send rents for the first time. Change this one line. Credited
// manually at the referred trainer's first paid rental (no tracking backend).
const REFERRAL_PERK = "1 uur studio gratis";

const HERO_IMAGES = [
  { src: "/images/studio/training-squat-cinematic.jpg", alt: "Privé squat rack in de SculptClub studio in Jordaan" },
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio in de Jordaan" },
  { src: "/images/studio/pt-session-barbell.jpg", alt: "Personal trainer geeft een sessie bij SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Uitzicht op de gracht vanuit de SculptClub studio" },
  { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub gevel aan de Egelantiersgracht in de Jordaan" },
];

export const metadata: Metadata = {
  title: { absolute: "Voor Personal Trainers in Amsterdam | SculptClub Jordaan" },
  description:
    "Voor freelance personal trainers in Amsterdam: studio huren vanaf €12/uur. Eigen tarief en klanten, geen contract, altijd gratis annuleren via SculptClub.",
  alternates: {
    canonical: "/nl/voor-trainers",
    languages: {
      nl: "/nl/voor-trainers",
      en: "/en/for-trainers",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/voor-trainers",
    title: "Voor Personal Trainers in Amsterdam | SculptClub Jordaan",
    description:
      "Voor freelance personal trainers in Amsterdam: studio huren vanaf €12/uur. Eigen tarief en klanten, geen contract, altijd gratis annuleren via SculptClub.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voor Personal Trainers in Amsterdam | SculptClub Jordaan",
    description:
      "Voor freelance personal trainers in Amsterdam: studio huren vanaf €12/uur. Eigen tarief en klanten, geen contract, altijd gratis annuleren via SculptClub.",
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Studio huren",
    href: "/nl/studio-huren",
    text:
      "Privé trainingsruimte in Jordaan vanaf €12/uur. Volledige vrijheid, flexibel per sessie, alles inbegrepen.",
    cta: "Bekijk studio huur",
  },
  {
    icon: Users,
    title: "Word SculptClub-trainer",
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
      "Vergelijking met echte cijfers: eigen studio leasen, bij klant thuis, in het park, of per uur huren: wanneer kies je wat?",
    cta: "Zie vergelijking",
  },
];

const trainerFaqs = [
  {
    q: "Wat kost het écht om de studio te huren?",
    a: "Halve studio (1:1 sessies) €12 per 60 min. Hele studio (kleine groep) €17 per 60 min. Kortingspakketten besparen 10-23%: Starter €89, Routine €179, Pro €299, Volume €499. Alle apparatuur, wifi, muziek en schoonmaak zijn inbegrepen. Geen verplicht abonnement of bemiddelingskosten.",
  },
  {
    q: "Is er ook een vast membership?",
    a: "Ja, optioneel. Reken je per uur af, dan blijft dat zonder verplichting. Train je hier elke week? Dan kun je kiezen voor een Studio Membership: één vast maandbedrag, jouw vaste tijden gereserveerd, een lager effectief uurtarief, en pauzeren wanneer je weg bent. Maandelijks opzegbaar. We stemmen het af op jouw uren. Een appje is genoeg.",
  },
  {
    q: "Hoe boek ik een sessie?",
    a: "Online via Acuity (ons boekingssysteem). Je krijgt direct bevestiging en om 00:00 in de nacht voor je sessie ontvang je een unieke deurcode via WhatsApp. Geen receptie, geen sleutels.",
  },
  {
    q: "Kan ik eerst gratis komen kijken?",
    a: "Ja. We bieden een gratis 60-minuten proefsessie aan in de studio: bekijk de ruimte, train zelf, stel je vragen. Geen verplichting, geen verkoop-pitch.",
  },
  {
    q: "Krijg ik een eigen profiel op sculptclub.nl?",
    a: "Ja, als je trainer bij SculptClub wordt. Dat is gratis bij regelmatige studio-huur (vanaf ~5 uur/maand). Je profiel verschijnt op /vind-jouw-personal-trainer waar bezoekers die SculptClub via Google vinden direct aan jou gematcht kunnen worden.",
  },
  {
    q: "Wat is het verschil tussen losse uur-huur en trainer bij SculptClub zijn?",
    a: "Losse uur-huur: per sessie betalen, BYO klanten. Wil je er ook inbound klanten bij? Vraag om een profielpagina, die krijg je bij elke vorm van huur, ook per uur: eigen profiel + match met inbound klanten + vermelding op Instagram/TikTok. Bij beide huur je alleen de ruimte; je houdt 100% van je tarief.",
  },
  {
    q: "Houd ik 100% van mijn tarief?",
    a: "Ja. Wij verdienen alleen aan de studio-huur. Wat jij rekent aan je klant (€45, €75, €120) is volledig voor jou.",
  },
  {
    q: "Welke verzekering heb ik nodig?",
    a: "Een geldige beroepsaansprakelijkheidsverzekering (ZZP-pensioen.nl, Centraal Beheer of vergelijkbaar, vanaf ~€25/maand). Dit is je eigen verantwoordelijkheid en geldt op elke locatie waar je traint, ook hier.",
  },
  {
    q: "Welke apparatuur is aanwezig?",
    a: "Rogue power rack, Olympic barbells + bumpers, dumbbells tot 40 kg, kabelmachine, sleds, kettlebells, plyo box, fitnessbanken, bands en cardio. Voldoende voor 95% van standaard-PT-sessies. Lijst op /nl/studio-huren.",
  },
  {
    q: "Tot welke tijden is de studio open?",
    a: "Dagelijks 06:00-22:00. Je boekt je eigen tijdvak in Acuity; binnen jouw uur ben jij + je klant alleen in de studio (privé).",
  },
  {
    q: "Hoe zit het met annuleren?",
    a: "Studio-huur annuleer je gratis via Acuity, op elk moment. Geen tijdslimiet, geen kosten. Voor pakketten geldt: 1 jaar geldig vanaf aankoop.",
  },
];

export default function VoorTrainersHubNL() {
  return (
    <PageLayout audience="rental">
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
          description="SculptClub is gebouwd door en voor freelance trainers. Privé studio in Jordaan, eigen tarief en klanten, eigen profiel op onze site. Begin met uur-huur, of word trainer bij SculptClub en krijg klanten via ons."
          center={false}
        />
        {/* CTAs moved ABOVE the slideshow 2026-05-19. Mobile fold audit
            on iPhone 14 Pro (660 px viewport) showed first CTA "Plan gratis
            rondleiding" at y=674: 14 px below the fold. The 16:9
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
              <strong className="text-foreground">Privé studio</strong> · Vanaf €12/uur · Volledige vrijheid · Geen contract · Altijd gratis annuleren
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-8">
            {/* Hero slideshow — crossfade through 5 studio angles every 6s.
                Same RotatingImageStack pattern used on homepage + rental hero
                (commits 0d594e7 + 9ea1a93). Trainer-funnel consistency: every
                hero on every trainer page now shows space breadth via slow
                crossfade. Text/CTA above stays 100% static. */}
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
              style={{ backgroundColor: getColor(HERO_IMAGES[0].src) }}
            >
              <RotatingImageStack
                images={HERO_IMAGES}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="Zes paden"
          title="Welk pad past bij jou?"
          description="SculptClub werkt voor verschillende type trainers. Kies waar je nu staat. We helpen je groeien vanaf daar."
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
                    <ButtonLink href={pillar.href} variant="outline" size="sm" className="max-sm:min-h-11">
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

      {/* Platform value for renters (operator 2026-09-11: "sculptclub just sells hours, we will be the
          ultimate platform for our renters to grow revenue"). Every claim here is live on the PT hub. */}
      <Section bg="muted">
        <SectionHeader overline="Het platform" title="Klanten die met een doel binnenkomen" description="Je huurt de studio per uur en houdt 100% van je tarief. Daarbovenop werkt sculptclub.nl als klantenplatform voor jou." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 font-semibold">Gematcht op doel</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Bezoekers kiezen eerst hun doel (afvallen, sterker worden, pijnvrij bewegen en meer) en zien alleen de trainers die daarin gespecialiseerd zijn.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 font-semibold">Warme leads via WhatsApp</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Hun bericht aan jou noemt hun doel of vraagt direct naar je traject-prijs. Jij begint het gesprek met context.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 font-semibold">Verkoop trajecten, geen losse uren</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Klanten verwachten na de gratis intake een traject-plan met duur en vaste prijs. Twaalf weken, twee keer per week, is 24 sessies in één gesprek verkocht.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="mb-2 font-semibold">Jouw merk, jouw site</p>
            <p className="text-sm leading-relaxed text-muted-foreground">Een eigen profiel met foto’s, specialisaties en tarief, plus een link naar je eigen website en de ervaringen van je klanten.</p>
          </div>
        </div>
        <p className="mt-6 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-6">
          <a href="/nl/vind-jouw-personal-trainer" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">Zo vinden klanten je →</a>
          <a href="/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam" className="inline-flex min-h-11 items-center font-semibold text-brand hover:underline underline-offset-4">Zo prijs je een traject →</a>
        </p>
      </Section>

      {/* Studio Membership — optional recurring plan for regular trainers
          (operator 2026-06-21). Converts weekly per-hour renters into
          predictable monthly rent + fills quiet hours, WITHOUT breaking the
          freedom promise: per-hour stays the no-commitment default; this is
          the optional upgrade. The studio is one private room (capacity-
          limited) → a fixed monthly block + reserved slots + pause, NOT
          "unlimited". MVP = manual setup via WhatsApp (no self-serve billing
          yet). Price lives in MEMBERSHIP_FROM up top, confirm before deploy. */}
      <Section>
        <SectionHeader
          overline="Nieuw · Studio Membership"
          title="Hier elke week? Betaal vast in plaats van per uur."
          description="Per uur blijft per uur, geen verplichting. Maar train je hier wekelijks, dan is een vast maandbedrag voordeliger: jouw vaste tijden gereserveerd en pauzeren wanneer je weg bent."
        />
        <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_1fr]">
          <FadeIn>
            <Card className="h-full border-primary/30">
              <CardContent className="flex flex-col gap-5 p-7">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Studio Membership</p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm text-muted-foreground">vanaf</span>
                    <span className="text-4xl font-bold tracking-tight">{MEMBERSHIP_FROM}</span>
                    <span className="text-muted-foreground">/ maand</span>
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Afgestemd op jouw uren: ongeveer 5 uur per week tegen ~€10/uur. Meer uren nodig? We schalen mee.
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {membershipPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik ben personal trainer en heb interesse in een Studio Membership. Ik train regelmatig en wil graag een vast maandbedrag.")}`}
                  external
                  size="lg"
                  className="plausible-event-name=trainer_membership_whatsapp_click"
                >
                  Vraag je membership aan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
                <p className="text-xs text-muted-foreground">
                  We rekenen alleen huur. Wat je je klant rekent, houd je 100%.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn>
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground lg:pt-2">
              <div>
                <p className="font-semibold text-foreground">Voor wie is dit?</p>
                <p className="mt-1">Trainers die hier elke week zijn. Reken je liever per uur af? Dat blijft, zonder verplichting, altijd gratis annuleren.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Pauzeren wanneer je weg bent</p>
                <p className="mt-1">Op vakantie of een rustige week? Zet je membership op pauze en je betaalt niet. Maandelijks opzegbaar, geen lang contract.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Hoe stellen we het op?</p>
                <p className="mt-1">Eén appje. We stemmen het af op jouw uren en zetten het samen klaar. Geen gedoe.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Trainer referral — operator 2026-06-21. The cheapest, warmest
          acquisition channel: existing renters refer colleagues. "Deel via
          WhatsApp" opens the share-to-contact flow with a ready pitch a
          trainer can forward. Perk in REFERRAL_PERK (confirm before deploy);
          credited manually at the referred trainer's first paid rental (MVP —
          no tracking backend). Pairs with the operator's direct ask to
          existing renters, which is the bigger channel. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:gap-6 sm:text-left">
            <div>
              <p className="text-base font-semibold">Ken je een collega-trainer? Breng &apos;m mee.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Stuur &apos;m door. Huurt die hier z&apos;n eerste keer, dan krijg jij {REFERRAL_PERK}. Klein bedankje, geen gedoe.
              </p>
            </div>
            <ButtonLink
              href={`https://wa.me/?text=${encodeURIComponent("Hey! Ik train mijn klanten bij SculptClub, een privé studio in de Jordaan: €12/uur, eigen klanten en tarief, geen contract. Misschien iets voor jou? Eerste sessie gratis → https://sculptclub.nl/studio-huren")}`}
              external
              size="lg"
              className="mt-4 shrink-0 sm:mt-0 plausible-event-name=trainer_referral_share"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Deel via WhatsApp
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Trainer FAQ — schema-marked for SEO */}
      <FaqJsonLd faqs={trainerFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <Section bg="muted">
        <SectionHeader
          overline="Vragen van trainers"
          title="Veelgestelde vragen"
          description="Praktische antwoorden op wat trainers vragen voordat ze beginnen. Mis je iets? WhatsApp +31 6 15 14 79 52."
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
            {/* Bottom-CTA trust strip — closes the decision loop. Visitor
                scrolled through reasons + steps + FAQ; this is the moment
                they decide. Pair the dark "Twijfel je?" headline with the
                same 5★ + value-prop they saw at top so trust persists. */}
            <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-amber-400" aria-hidden>★★★★★</span>
                <span className="font-semibold text-white">5,0 op Google</span>
              </span>
              <span aria-hidden className="text-white/40">·</span>
              <span className="text-white/70"><strong className="text-white/90">Privé studio</strong> · Vanaf €12/uur · Volledige vrijheid · Altijd gratis annuleren</span>
            </div>
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
                href={`https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik ben personal trainer en wil graag de studio bekijken")}`}
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

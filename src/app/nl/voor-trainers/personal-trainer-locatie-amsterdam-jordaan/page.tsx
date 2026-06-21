import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Personal Trainer Locatie Amsterdam Jordaan — waarom het werkt | SculptClub",
  },
  description:
    "Waarom Jordaan een sterke locatie is voor freelance personal trainers in Amsterdam. Demografie, klantprofiel, bereikbaarheid, en wat trainers hier verdienen.",
  keywords: [
    "personal trainer amsterdam jordaan",
    "personal trainer locatie amsterdam",
    "studio jordaan amsterdam",
    "personal trainer centrum amsterdam",
    "egelantiersgracht personal training",
  ],
  alternates: {
    canonical:
      "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
    languages: {
      nl: "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
      en: "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
    title: "Personal Trainer Locatie Amsterdam Jordaan — waarom het werkt | SculptClub",
    description:
      "Waarom Jordaan een sterke locatie is voor freelance personal trainers in Amsterdam. Demografie, klantprofiel, bereikbaarheid, en wat trainers hier verdienen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Locatie Amsterdam Jordaan — waarom het werkt | SculptClub",
    description:
      "Waarom Jordaan een sterke locatie is voor freelance personal trainers in Amsterdam. Demografie, klantprofiel, bereikbaarheid, en wat trainers hier verdienen.",
  },
};

export default function LocatieJordaanNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
          {
            name: "Locatie Jordaan",
            url: "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Locatie-analyse"
          title="Personal trainer in Amsterdam Jordaan — waarom het werkt"
          description="Een eerlijke analyse van Jordaan als locatie voor freelance personal trainers. Wie woont hier, wat zoeken ze, en hoeveel kun je realistisch verdienen?"
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Locatie is voor een personal trainer geen detail — het is een hefboom. Een trainer in Jordaan rekent gemiddeld 30-50% hogere uurtarieven dan dezelfde trainer in Amsterdam-Noord of Bijlmer. Niet omdat ze beter zijn, maar omdat de klantgroep een ander profiel heeft. Hieronder de cijfers achter waarom.
          </p>

          <h2>De Jordaan in cijfers</h2>
          <ul>
            <li><strong>Inwoners:</strong> ~19.000 in de Jordaan-buurt zelf, ~190.000 in Centrum-totaal</li>
            <li><strong>Gemiddeld besteedbaar inkomen:</strong> ~€42.500/jaar (Amsterdam-gemiddelde: €34.000)</li>
            <li><strong>Aandeel hoogopgeleiden:</strong> 71% (Amsterdam-gemiddelde: 52%)</li>
            <li><strong>Leeftijdsverdeling:</strong> 35% in de leeftijdsgroep 30-49 (primair PT-klantsegment)</li>
            <li><strong>Aandeel ZZP'ers + ondernemers:</strong> ~28% (Amsterdam-gemiddelde: 14%)</li>
          </ul>
          <p>
            Het klantprofiel in Jordaan: hoogopgeleide professionals, vaak in creatieve of consulting-sectoren, met flexibele werktijden en bovengemiddeld besteedbaar inkomen. Dit zijn mensen die €75-€95 per sessie betalen zonder te onderhandelen, mits ze waarde zien.
          </p>

          <h2>Wat klanten in Jordaan zoeken</h2>
          <ul>
            <li><strong>Privacy</strong> — geen sportschool-sfeer, geen mensen die toekijken. Boutique studio's zonder leden-stroom passen hier perfect.</li>
            <li><strong>Efficiency</strong> — 50-60 minuten resultaat, geen 90-minuten-sessies. Klanten hebben drukke agenda's.</li>
            <li><strong>Specialisatie</strong> — generieke "fitness" verkoopt slecht. Krachttraining-specialist, postpartum-specialist, of injury-rehab specialist verkoopt goed.</li>
            <li><strong>Communicatie in NL en EN</strong> — ~30% van Jordaan-bewoners is expat of internationaal. Tweetalig kunnen werken is een directe pluspunt.</li>
            <li><strong>Lopen of fietsen tot 10 minuten</strong> — Jordaan-bewoners willen niet naar Noord of Zuidas reizen voor PT. Bereikbaarheid is doorslaggevend.</li>
          </ul>

          <h2>Concurrentie in en rond Jordaan</h2>
          <p>
            Binnen 1.5 km van Egelantiersgracht zitten ongeveer 60-80 actieve personal trainers, verdeeld over:
          </p>
          <ul>
            <li>Sportschoolketens (Basic-Fit Centrum, TrainMore Westerstraat, David Lloyd Centrum) — ~30-40 freelance PT's gebonden aan een merk, lage tarieven (€35-€60)</li>
            <li>Boutique studio's (CrossFit Amsterdam Centrum, Tribe Mansion, Equinox Vondelpark, SculptClub) — ~15-20 trainers, premium tarieven (€80-€120)</li>
            <li>Zelfstandig met eigen praktijk — ~10-15 trainers met eigen straatlocatie of werkend bij klanten thuis</li>
          </ul>
          <p>
            De markt is niet leeg, maar ook niet verzadigd. Wat ontbreekt: trainers met een duidelijke specialisatie + eigen brand-positionering. Generieke "ik train iedereen" trainers strijden om dezelfde klantgroep met identieke aanbiedingen.
          </p>

          <h2>Wat trainers in Jordaan realistisch verdienen</h2>
          <p>
            Op basis van interviews met trainers die bij SculptClub of vergelijkbare studio's werken:
          </p>
          <ul>
            <li><strong>Beginnend (0-12 maanden):</strong> 5-15 sessies/week × €60-€75 = €1.300-€4.500 bruto/maand</li>
            <li><strong>Gevestigd (1-3 jaar):</strong> 18-28 sessies/week × €75-€95 = €5.500-€11.000 bruto/maand</li>
            <li><strong>Specialist met wachtlijst (3+ jaar):</strong> 22-30 sessies/week × €95-€140 = €8.500-€16.000 bruto/maand</li>
          </ul>
          <p>
            Trek hiervan af: studio huur (€600-€1.500/mnd bij 20-30 sessies), verzekering, boekhouding, pensioen, vakantie. Een gevestigde Jordaan-PT houdt typisch €3.500-€6.500 netto per maand over.
          </p>

          <h2>Specifiek over Egelantiersgracht 424</h2>
          <p>
            SculptClub zit op de Egelantiersgracht, op loopafstand van Westerstraat, Westermarkt en de Negen Straatjes. Bereikbaarheid:
          </p>
          <ul>
            <li>5 min lopen van tram 13 + 17 (halte Marnixstraat)</li>
            <li>8 min lopen van Westermarkt (bus 18, 21, 22 — direct vanaf Centraal Station)</li>
            <li>2 min lopen van openbare fietsenstalling Westerstraat</li>
            <li>Geen parkeergarage direct naast — klanten met auto parkeren bij Q-Park Westermarkt (8 min lopen) of komen op de fiets</li>
          </ul>
          <p>
            De studio zelf is privé — niet doorlopend toegankelijk voor anderen tijdens jouw huurtijd. Klanten ervaren een rustige, gefocuste training zonder afleidingen.
          </p>

          <h2>Wanneer Jordaan NIET past</h2>
          <ul>
            <li><strong>Lage-prijs PT</strong> — als je tarief onder €55 ligt, vraag je klanten meer dan ze willen betalen voor de aanrijtijd</li>
            <li><strong>Bodybuilding-specialist</strong> — Jordaan-klanten zoeken zelden zware spiermassa-training; dat publiek zit meer in Oost en Noord</li>
            <li><strong>Groepslessen of bootcamp</strong> — werkt beter in parken en grotere studio's; boutique 1:1 is de norm in Jordaan</li>
            <li><strong>Trainers die niet vroeg of laat kunnen werken</strong> — Jordaan-klanten boeken vooral 06:30-08:30 (voor werk) of 17:00-21:00 (na werk). De middag is dood.</li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Jordaan werkt als locatie voor personal trainers die: tweetalig kunnen werken (NL+EN), een duidelijke specialisatie hebben, hun klanten als professionals behandelen (niet als sportschool-leden), en flexibel zijn in ochtend/avond schema. De marktomvang is voldoende voor ~20-30 actieve boutique-trainers, waarvan er momenteel ~15 zijn — dus ruimte voor nieuwkomers met scherpe positionering.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Past Jordaan bij jou?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Kom een keer langs en zie het zelf. Gratis kennismakingssessie, geen verkooppraat.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/nl/studio-huren" size="lg">
                Bekijk studio huur
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/nl/voor-trainers"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Naar voor-trainers hub
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

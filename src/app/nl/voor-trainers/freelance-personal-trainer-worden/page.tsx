import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Freelance Personal Trainer worden in Amsterdam: gids 2026",
  },
  description:
    "Praktische gids voor PT's die overwegen ZZP'er te worden in Amsterdam. KvK, tarieven, eerste klanten, ruimte huren in Jordaan.",
  keywords: [
    "freelance personal trainer worden",
    "zzp personal trainer amsterdam",
    "personal trainer beginnen amsterdam",
    "eigen praktijk personal trainer",
    "kvk personal trainer",
  ],
  alternates: {
    canonical: "/nl/voor-trainers/freelance-personal-trainer-worden",
    languages: {
      nl: "/nl/voor-trainers/freelance-personal-trainer-worden",
      en: "/en/for-trainers/becoming-freelance-personal-trainer",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/voor-trainers/freelance-personal-trainer-worden",
    title: "Freelance Personal Trainer worden in Amsterdam: gids 2026",
    description:
      "Praktische gids voor PT's die overwegen ZZP'er te worden in Amsterdam. KvK, tarieven, eerste klanten, ruimte huren in Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Personal Trainer worden in Amsterdam: gids 2026",
    description:
      "Praktische gids voor PT's die overwegen ZZP'er te worden in Amsterdam. KvK, tarieven, eerste klanten, ruimte huren in Jordaan.",
  },
};

export default function FreelancePTGuideNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
          {
            name: "Freelance Personal Trainer Worden",
            url: "/nl/voor-trainers/freelance-personal-trainer-worden",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Gids voor PT's"
          title="Freelance personal trainer worden in Amsterdam"
          description="Een eerlijke gids voor personal trainers die overwegen ZZP'er te worden. Geen verkooppraat — wat we zelf zien werken bij trainers die bij SculptClub starten."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            De stap van werknemer bij een ketensportschool naar freelance personal trainer voelt groot. In Amsterdam zijn er ruwweg 1.500 actieve personal trainers. De helft werkt in loondienst bij Basic-Fit, TrainMore, Fit For Free of een fysiopraktijk. De andere helft werkt voor eigen rekening — vanuit huis, in openbare gyms, of in een gehuurde studio.
          </p>

          <h2>1. KvK + administratie</h2>
          <p>
            Als personal trainer val je in Nederland onder een ZZP-constructie. Wat je minimaal moet regelen:
          </p>
          <ul>
            <li>
              <strong>Inschrijven bij de Kamer van Koophandel</strong> — €82,25 eenmalig. SBI-code voor PT: 9313 (Fitnesscentra) of 8551 (Sport- en recreatieonderwijs).
            </li>
            <li>
              <strong>BTW-nummer</strong> — krijg je automatisch bij KvK-inschrijving. Onder de €20.000 omzet per jaar geldt de KOR (Kleineondernemersregeling): geen BTW factureren.
            </li>
            <li>
              <strong>Beroepsaansprakelijkheidsverzekering</strong> — verplicht als je in een studio of bij klanten thuis traint. Reken €25–€45 per maand bij verzekeraars als ZZP-pensioen.nl of Centraal Beheer.
            </li>
            <li>
              <strong>Boekhouding</strong> — gratis bij MoneyMonk of Bunq Business voor de eerste 12 maanden. Daarna €10–€20 per maand.
            </li>
            <li>
              <strong>Pensioenopbouw</strong> — niet verplicht maar verstandig. Brand New Day of Bright Pensions vanaf €50 per maand.
            </li>
          </ul>

          <h2>2. Tarieven bepalen</h2>
          <p>
            In Amsterdam ligt het gemiddelde tarief voor personal training tussen €60 en €95 per uur. Boutique trainers met ervaring (5+ jaar) en specialisatie (krachttraining, postpartum, blessure-revalidatie) zitten op €85–€125. Kettingsportscholen rekenen €30–€55 — niet voor freelance trainers haalbaar.
          </p>
          <p>
            <strong>Reken terug vanaf je doel:</strong> wil je €4.000 netto per maand verdienen? Dan moet je bruto ~€5.500 omzetten. Bij €75/uur betekent dat 73 sessies per maand, oftewel 18 per week. Houd rekening met no-shows, vakanties en administratietijd — plan voor 22–25 betaalde sessies per week.
          </p>

          <h2>3. Ruimte vinden</h2>
          <p>
            Hier zit de grootste valkuil voor beginnende ZZP-trainers. Drie opties, in volgorde van hoe vaak ze werken:
          </p>
          <ul>
            <li>
              <strong>Bij de klant thuis</strong> — laagste drempel, hoogste reisbelasting. Klanten verwachten bij hen thuis vaak een lager tarief (€45–€60). Geen apparatuur, alleen bodyweight + bands.
            </li>
            <li>
              <strong>Openbare parken (Vondelpark, Westerpark)</strong> — gratis, maar weersafhankelijk en niet voor zware krachttraining geschikt. Werkt 3–5 maanden per jaar in Nederland.
            </li>
            <li>
              <strong>Studio huren per uur</strong> — vaste locatie, professionele apparatuur, premium-perceptie bij klanten. Vanaf €12 per uur bij <a href="/nl/studio-huren">SculptClub in Jordaan</a> (eigen tarief, geen abonnement, alleen huur).
            </li>
          </ul>
          <p>
            Veel trainers starten thuis-bij-de-klant en switchen na 3–6 maanden naar een vaste studio, omdat de reistijd hun marge eet. Een trainer die 4 klanten op één dag in dezelfde studio traint, levert 4× meer op dan dezelfde trainer die over de stad fietst.
          </p>

          <h2>4. Eerste klanten</h2>
          <p>
            De eerste 5 klanten komen meestal uit je bestaande netwerk — voormalige sportschool-leden, vrienden, vrienden-van-vrienden. Daarna wordt het lastiger zonder online aanwezigheid. Wat werkt voor PT's in Amsterdam:
          </p>
          <ul>
            <li>
              <strong>Google Mijn Bedrijf-profiel</strong> — gratis, lokaal vindbaar. Voeg foto's toe van waar je traint, vraag elke tevreden klant om een review. Eén PT met 30 reviews staat boven 5 PT's met 5 reviews.
            </li>
            <li>
              <strong>Instagram-content</strong> — niet "transformations" maar je trainingsfilosofie, oefenuitleg, klantverhalen (met toestemming). Tijdsinvestering: 30 minuten per week, consistent.
            </li>
            <li>
              <strong>Vermelding op een directory</strong> — sites die mensen gebruiken om PT's te zoeken in Amsterdam. SculptClub heeft een <a href="/nl/vind-jouw-personal-trainer">eigen trainersgids</a> waar leden gratis op verschijnen.
            </li>
            <li>
              <strong>Verwijzingen van fysiotherapeuten</strong> — fysio's krijgen wekelijks vraag naar "wie kan iemand verder helpen na revalidatie?". Een goede relatie met 2–3 lokale fysio's levert structureel klanten op.
            </li>
          </ul>

          <h2>5. Veelgemaakte fouten</h2>
          <ul>
            <li>
              <strong>Te laag tarief om "klanten te winnen"</strong> — werkt niet. Klanten die €40 betalen zijn vaak moeilijker dan die €80 betalen. Lagere prijs trekt prijs-shoppers aan, niet trouwe klanten.
            </li>
            <li>
              <strong>Geen aanbetaling / opzegtermijn</strong> — no-shows kunnen 15–20% van je omzet kosten. Maandelijkse pakketten met vooruitbetaling zijn de standaard bij boutique-PT's.
            </li>
            <li>
              <strong>Te veel verschillende doelgroepen</strong> — "krachttraining, vetverlies, postpartum, sport-revalidatie, ouderen" — dat is geen positionering. Kies 1–2 specialiteiten, word de naam in Amsterdam voor die niche.
            </li>
            <li>
              <strong>Geen vaste locatie</strong> — klanten boeken makkelijker bij een trainer met een herkenbaar adres. Een vaste studio (zelfs gehuurd per uur) verhoogt de gepercipieerde professionaliteit substantieel.
            </li>
            <li>
              <strong>Geen factuur, geen administratie</strong> — Belastingdienst-controles bij ZZP-trainers nemen toe sinds 2024. Houd je administratie vanaf dag 1 op orde.
            </li>
          </ul>

          <h2>Conclusie</h2>
          <p>
            Freelance PT worden in Amsterdam is haalbaar voor wie consistent werkt. De eerste 6 maanden zijn het zwaarst — daarna compoundt het door verwijzingen en reviews. De grootste hefbomen: vaste locatie, gespecialiseerde positionering, en een eerlijke prijs die je werk weerspiegelt.
          </p>
          <p>
            Bij SculptClub in Jordaan kun je klein beginnen — studio huren per uur, geen abonnement — je houdt 100% van je tarief. Wanneer je groeit kun je trainer bij SculptClub worden en krijg je een eigen profiel op onze site + match met klanten die SculptClub zelf vinden.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar om te starten?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Plan een gratis kennismaking, bekijk de studio, en zie of het past. Geen verplichting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/nl/word-trainer" size="lg">
                Word trainer
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/nl/studio-huren"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Bekijk studio huur
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

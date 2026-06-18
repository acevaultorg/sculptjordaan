import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "ZZP Personal Trainer Checklist Amsterdam (2026) | SculptClub",
  },
  description:
    "Stap-voor-stap checklist voor personal trainers die ZZP'er worden in Nederland. KvK, BTW, verzekering, bank, administratie, eerste factuur. ~30 min werk.",
  keywords: [
    "zzp personal trainer checklist",
    "zzp personal trainer worden",
    "kvk personal trainer inschrijven",
    "personal trainer administratie",
    "btw personal trainer kor",
  ],
  alternates: {
    canonical: "/nl/voor-trainers/zzp-personal-trainer-checklist",
    languages: {
      nl: "/nl/voor-trainers/zzp-personal-trainer-checklist",
      en: "/en/for-trainers/zzp-personal-trainer-checklist",
    },
  },
};

export default function ZZPChecklistNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
          {
            name: "ZZP Checklist",
            url: "/nl/voor-trainers/zzp-personal-trainer-checklist",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Praktische checklist"
          title="ZZP personal trainer checklist (2026)"
          description="Alles wat je moet regelen om als freelance personal trainer in Nederland te starten. Volgorde, kosten, tijdsinvestering. Geen vaagheden."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Deze checklist gaat ervan uit dat je al een geldig personal training certificaat hebt (NL-Actief, NSCA, ACE, EHFA Level 3 of vergelijkbaar). Hieronder staat de administratieve setup — van KvK-inschrijving tot je eerste factuur. Totale doorlooptijd: 1-2 weken. Totale kosten: ~€150-€250 eenmalig + ~€60-€120 per maand vast.
          </p>

          <h2>Stap 1 — KvK-inschrijving</h2>
          <ul>
            <li><strong>Kosten:</strong> €82,25 eenmalig</li>
            <li><strong>Tijd:</strong> 30 min online + bezoek aan KvK-kantoor (~45 min)</li>
            <li><strong>Wat:</strong> ga naar <a href="https://www.kvk.nl/inschrijven/" rel="external">kvk.nl/inschrijven</a>, vul je gegevens in, plan een afspraak. Neem mee: ID-bewijs, BSN, postadres.</li>
            <li><strong>SBI-code:</strong> 9313 (Fitnesscentra) of 8551 (Sport- en recreatieonderwijs). Beide werken.</li>
            <li><strong>Bedrijfsnaam:</strong> "Jouw Naam Personal Training" of een handelsnaam. Niet beschermd zonder KvK-merkdepot. Controleer eerst of de naam vrij is op <a href="https://www.kvk.nl/zoeken/" rel="external">kvk.nl/zoeken</a>.</li>
          </ul>

          <h2>Stap 2 — BTW-nummer + KOR</h2>
          <ul>
            <li><strong>Kosten:</strong> €0</li>
            <li><strong>Tijd:</strong> automatisch bij KvK-inschrijving (binnen 5 werkdagen)</li>
            <li><strong>KOR (Kleineondernemersregeling):</strong> als je verwacht onder de €20.000 omzet/jaar te blijven, schrijf je in voor de KOR. Dit betekent: geen BTW factureren, geen BTW-aangifte indienen. Aanmelden via <a href="https://www.belastingdienst.nl" rel="external">Mijn Belastingdienst Zakelijk</a>.</li>
            <li><strong>Boven €20.000?</strong> Reken 21% BTW op je facturen, dien per kwartaal aangifte in. Boekhoudsoftware doet dit automatisch.</li>
          </ul>

          <h2>Stap 3 — Beroepsaansprakelijkheidsverzekering</h2>
          <ul>
            <li><strong>Kosten:</strong> €25–€45 per maand</li>
            <li><strong>Tijd:</strong> 20 min aanvraag online</li>
            <li><strong>Verplicht?</strong> Niet wettelijk, maar de meeste verhuurders (waaronder SculptClub) en verzekeraars van klanten eisen het. Zonder verzekering ben je persoonlijk aansprakelijk bij blessures.</li>
            <li><strong>Aanbieders:</strong> ZZP-pensioen.nl, Centraal Beheer Achmea, Hiscox, Schouten ZZP. Dekking minimaal €1 miljoen per gebeurtenis.</li>
            <li><strong>Tip:</strong> kies een polis die ook "schade aan gehuurde ruimte" dekt — relevant als je een studio huurt.</li>
          </ul>

          <h2>Stap 4 — Zakelijke bankrekening</h2>
          <ul>
            <li><strong>Kosten:</strong> €0–€10 per maand</li>
            <li><strong>Tijd:</strong> 15 min online</li>
            <li><strong>Verplicht?</strong> Niet wettelijk, maar sterk aanbevolen. Belastingdienst-controles gaan moeizamer met privé/zakelijk gemengd op één rekening.</li>
            <li><strong>Opties:</strong> Bunq Easy Bank Pro (€8,99/mnd, gratis eerste 12mnd), Knab ZZP (€0/mnd basis), ING Zakelijk (€8/mnd). Bunq + Knab zijn het meest ZZP-vriendelijk.</li>
          </ul>

          <h2>Stap 5 — Boekhouding</h2>
          <ul>
            <li><strong>Kosten:</strong> €0–€20 per maand</li>
            <li><strong>Tijd:</strong> 1 uur setup + 15 min/week onderhoud</li>
            <li><strong>Software:</strong> MoneyMonk (€11,75/mnd, ontworpen voor ZZP'ers), Bunq Business inclusief boekhouding, Tellow (€11,90/mnd). Vermijd handmatig Excel — Belastingdienst eist digitale administratie 7 jaar lang.</li>
            <li><strong>Wat bijhouden:</strong> elke factuur die je verstuurt, elke bon/factuur die je betaalt (apparatuur, certificering, studio huur, reiskosten), kilometeradministratie als je naar klanten reist.</li>
          </ul>

          <h2>Stap 6 — Pensioen (vrijwillig maar verstandig)</h2>
          <ul>
            <li><strong>Kosten:</strong> vanaf €50 per maand</li>
            <li><strong>Tijd:</strong> 30 min eenmalig</li>
            <li><strong>Waarom:</strong> ZZP'ers krijgen geen werkgeverspensioen. Zonder eigen opbouw heb je later alleen AOW (~€1.500 bruto/maand voor alleenstaande in 2026). Inleg is fiscaal aftrekbaar tot een jaarlijks maximum.</li>
            <li><strong>Aanbieders:</strong> Brand New Day, Bright Pensions, Aegon ZZP-pensioen. Allemaal lage kosten, mobiel beheer.</li>
          </ul>

          <h2>Stap 7 — Algemene Voorwaarden + Privacy</h2>
          <ul>
            <li><strong>Kosten:</strong> €0–€50 eenmalig</li>
            <li><strong>Tijd:</strong> 1 uur</li>
            <li><strong>Wat:</strong> algemene voorwaarden (betalingstermijn, annuleringsbeleid, no-show beleid) + AVG-privacyverklaring als je klantgegevens opslaat.</li>
            <li><strong>Templates:</strong> gratis via <a href="https://www.kvk.nl/advies-en-informatie/" rel="external">KvK-advies</a> of de Branchevereniging Sport en Bewegen (NL Actief).</li>
            <li><strong>Tip:</strong> zet je voorwaarden op één pagina van je website + verwijs ernaar in elke factuur. Niemand leest het, maar het is juridisch nodig.</li>
          </ul>

          <h2>Stap 8 — Eerste factuur sturen</h2>
          <ul>
            <li><strong>Kosten:</strong> €0</li>
            <li><strong>Tijd:</strong> 10 min</li>
            <li><strong>Wat moet erop:</strong> je naam + adres, KvK-nummer, BTW-nummer (of "KOR van toepassing"), factuurdatum, factuurnummer (oplopend), klantgegevens, omschrijving + tarief + totaal, betaalvoorwaarden.</li>
            <li><strong>Aanbeveling:</strong> betaaltermijn 14 dagen, vooruitbetaling van pakketten. Late betalers kosten je gemiddeld €30-€80 aan herinneringen + administratietijd per geval.</li>
          </ul>

          <h2>Stap 9 — Trainingsruimte regelen</h2>
          <p>
            Pas als de administratie staat: kies je werkplek. Opties uitgewerkt in de <a href="/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten">vergelijking eigen studio vs thuis vs buiten</a>. Voor de meeste startende ZZP-PT's is uur-huur de logische keuze — lage vaste kosten, professionele uitstraling.
          </p>
          <p>
            Bij <a href="/nl/studio-huren">SculptClub in Jordaan</a> begin je per uur (€12 voor halve studio, €17 voor hele). Geen abonnement, je houdt 100% van je tarief, alle apparatuur inbegrepen.
          </p>

          <h2>Stap 10 — Eerste klanten werven</h2>
          <p>
            Volledig uitgewerkt in de <a href="/nl/voor-trainers/freelance-personal-trainer-worden">freelance trainer worden</a> gids. Korte versie: Google Mijn Bedrijf-profiel + 10 reviews van eerste klanten + Instagram-content + 2-3 fysio-verwijzingsrelaties = doorgaans 8-15 nieuwe leads/maand binnen 6 maanden.
          </p>

          <h2>Samenvatting kosten</h2>
          <ul>
            <li>Eenmalig: <strong>~€150-€250</strong> (KvK + eventuele setup-kosten)</li>
            <li>Maandelijks vast: <strong>~€60-€120</strong> (verzekering + bank + boekhouding + pensioen)</li>
            <li>Variabel per sessie: studio huur €12-€24, administratietijd</li>
          </ul>
          <p>
            Vergelijk dit met loondienst bij een ketensportschool (~€2.500-€3.500 bruto/mnd): als ZZP'er heb je 8-12 betaalde sessies/week nodig om hetzelfde netto-inkomen te halen. Boven dat punt verdien je significant meer.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar voor de volgende stap?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Begin met een gratis kennismaking bij SculptClub. Bekijk de studio, stel je vragen, beslis daarna.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/nl/word-trainer" size="lg">
                Word trainer
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

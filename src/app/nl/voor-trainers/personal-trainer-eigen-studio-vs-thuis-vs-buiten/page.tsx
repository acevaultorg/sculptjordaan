import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Eigen Studio vs Thuis vs Buiten — waar werk je als personal trainer? | SculptClub",
  },
  description:
    "Vergelijking voor freelance personal trainers: eigen studio (lease), bij de klant thuis, in het park, of studio per uur huren. Kosten, marge, klantperceptie.",
  keywords: [
    "personal trainer waar trainen",
    "eigen studio vs thuis personal trainer",
    "personal trainer studio huren vs lease",
    "personal trainer aan huis",
    "personal trainer in park amsterdam",
  ],
  alternates: {
    canonical:
      "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
    languages: {
      nl: "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
      en: "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
    title: "Eigen Studio vs Thuis vs Buiten — waar werk je als personal trainer? | SculptClub",
    description:
      "Vergelijking voor freelance personal trainers: eigen studio (lease), bij de klant thuis, in het park, of studio per uur huren. Kosten, marge, klantperceptie.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eigen Studio vs Thuis vs Buiten — waar werk je als personal trainer? | SculptClub",
    description:
      "Vergelijking voor freelance personal trainers: eigen studio (lease), bij de klant thuis, in het park, of studio per uur huren. Kosten, marge, klantperceptie.",
  },
};

export default function StudioVsThuisVsBuitenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Voor Trainers", url: "/nl/voor-trainers" },
          {
            name: "Studio vs Thuis vs Buiten",
            url: "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Vergelijking"
          title="Eigen studio, thuis bij klant, buiten, of studio per uur?"
          description="De vier hoofdopties voor waar een freelance personal trainer kan werken — met echte cijfers voor kosten, marge, en klantperceptie."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Een freelance personal trainer kan op vier manieren werken: eigen studio leasen, bij de klant thuis trainen, buiten in een park, of een studio per uur huren. Elke optie heeft een ander kostenmodel, andere klantgroep, en andere risico's. Hieronder de vergelijking gebaseerd op echte cijfers uit de Amsterdam-PT-markt.
          </p>

          {/* At-a-glance comparison table — sticky scannable summary */}
          <div className="not-prose my-10 overflow-x-auto rounded-2xl border border-border bg-card/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-semibold">Optie</th>
                  <th className="px-4 py-3 text-right font-semibold">Vaste kosten/mnd</th>
                  <th className="px-4 py-3 text-right font-semibold">Netto-marge*</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Wanneer kiezen?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3"><a href="#optie-a" className="font-medium hover:underline">A. Eigen studio</a></td>
                  <td className="px-4 py-3 text-right">€1.850-€4.200</td>
                  <td className="px-4 py-3 text-right">€4.500</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">3+ jaar, ≥25 sessies/wk</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3"><a href="#optie-b" className="font-medium hover:underline">B. Bij klant thuis</a></td>
                  <td className="px-4 py-3 text-right">€25-€45</td>
                  <td className="px-4 py-3 text-right">€5.400</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">Start, &lt;10 klanten</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3"><a href="#optie-c" className="font-medium hover:underline">C. Buiten in park</a></td>
                  <td className="px-4 py-3 text-right">€25-€45</td>
                  <td className="px-4 py-3 text-right">€3.300 (zomer)</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">Aanvulling, niet hoofd</td>
                </tr>
                <tr className="bg-primary/5">
                  <td className="px-4 py-3"><a href="#optie-d" className="font-semibold text-primary hover:underline">D. Studio per uur</a></td>
                  <td className="px-4 py-3 text-right font-semibold">€25-€45</td>
                  <td className="px-4 py-3 text-right font-semibold">€6.760-€7.260</td>
                  <td className="px-4 py-3 hidden sm:table-cell"><strong>Meeste trainers</strong></td>
                </tr>
              </tbody>
            </table>
            <p className="px-4 py-3 text-xs text-muted-foreground border-t border-border/50">
              *Bij 25 sessies/week × €85, vóór belasting. Volledige berekeningen + risico's per optie hieronder.
            </p>
          </div>

          <h2 id="optie-a">Optie A — Eigen studio leasen</h2>
          <p>
            Een eigen ruimte huren of kopen, eventueel met andere trainers delen. Volledige controle, maar substantiële vaste kosten.
          </p>
          <ul>
            <li><strong>Vaste kosten/mnd:</strong> €1.500-€3.500 huur + €200-€400 energie + €150-€300 verzekering = <strong>€1.850-€4.200/mnd</strong></li>
            <li><strong>Eenmalige investering:</strong> €15.000-€40.000 aan apparatuur (Rogue rack, dumbbells, kabelmachine, vloer, spiegels, vloermat, banken)</li>
            <li><strong>Marge bij 25 sessies/wk × €85:</strong> €8.500 omzet/mnd − €4.000 kosten = €4.500 netto-marge (vóór belastingen)</li>
            <li><strong>Break-even:</strong> ~12-15 sessies/wk om alleen de vaste kosten te dekken</li>
            <li><strong>Wanneer waardevol:</strong> 3+ jaar ervaring, bewezen klantenstroom, ≥25 betalende sessies/wk, en je wilt schaalvoordeel</li>
            <li><strong>Risico's:</strong> lange huurcontracten (meestal 5 jaar), apparatuur-afschrijving, leegstand bij vakantie of ziekte</li>
          </ul>

          <h2 id="optie-b">Optie B — Bij de klant thuis trainen</h2>
          <p>
            Geen ruimtekosten, maar reistijd-belasting en lager gepercipieerde professionaliteit.
          </p>
          <ul>
            <li><strong>Vaste kosten/mnd:</strong> €25-€45 verzekering + €0 huur = <strong>€25-€45/mnd</strong></li>
            <li><strong>Eenmalige investering:</strong> €500-€1.500 aan draagbare apparatuur (kettlebells, bands, suspension trainer, springtouw)</li>
            <li><strong>Marge bij 25 sessies/wk × €55-€70:</strong> €5.500-€7.000 omzet/mnd − €100 = €5.400-€6.900 netto-marge</li>
            <li><strong>Maar:</strong> reken 30-45 min reistijd per sessie. Effectief verlies ~25-35% productieve uren versus vaste locatie.</li>
            <li><strong>Wanneer waardevol:</strong> startende trainer met &lt;10 vaste klanten, of specialist die alleen bij oudere/minder-mobiele klanten werkt</li>
            <li><strong>Risico's:</strong> klant-no-show kost reistijd (niet alleen sessietijd), beperkte apparatuur, geen referral-effect (klanten zien je niet werken met anderen)</li>
          </ul>

          <h2 id="optie-c">Optie C — Buiten in het park</h2>
          <p>
            Vondelpark, Westerpark, Sloterpark. Geen huur, maar weersafhankelijk en niet voor zware training geschikt.
          </p>
          <ul>
            <li><strong>Vaste kosten/mnd:</strong> €25-€45 verzekering = <strong>€25-€45/mnd</strong></li>
            <li><strong>Eenmalige investering:</strong> €200-€600 aan draagbare apparatuur</li>
            <li><strong>Werkbare maanden in NL:</strong> 5-6 per jaar (mei-september + soms maart-april/oktober)</li>
            <li><strong>Marge bij 15 sessies/wk × €55-€70 (in seizoen):</strong> €3.300-€4.200 omzet/mnd</li>
            <li><strong>In winter (november-februari):</strong> 0-30% van zomeromzet</li>
            <li><strong>Wanneer waardevol:</strong> aanvullend kanaal bovenop een vaste locatie, niet als hoofdmodel</li>
            <li><strong>Risico's:</strong> regen/wind annulering, geen apparatuur voor krachttraining, beperkt publiek (vooral younger active types)</li>
          </ul>

          <h2 id="optie-d">Optie D — Studio per uur huren</h2>
          <p>
            Boek een uur in een gedeelde of privé studio wanneer je een klant hebt. Geen vaste kosten, professionele uitstraling.
          </p>
          <ul>
            <li><strong>Vaste kosten/mnd:</strong> €25-€45 verzekering = <strong>€25-€45/mnd</strong></li>
            <li><strong>Variabele kosten:</strong> €12-€24 per sessie aan studio huur</li>
            <li><strong>Eenmalige investering:</strong> €0-€300 (alle apparatuur is van de studio)</li>
            <li><strong>Marge bij 25 sessies/wk × €85, €17 huur:</strong> €8.500 omzet/mnd − €1.700 huur − €40 verzekering = €6.760 netto-marge</li>
            <li><strong>Marge bij 25 sessies/wk × €85, €12 huur (halve studio):</strong> €8.500 − €1.200 − €40 = €7.260 netto-marge</li>
            <li><strong>Wanneer waardevol:</strong> 8-25 sessies/wk, geen vast contract gewenst, premium klantgroep gewenst</li>
            <li><strong>Risico's:</strong> studio-beschikbaarheid in piekuren, geen volledige controle over interieur/apparatuur, prijsstijging studio-eigenaar</li>
          </ul>

          <h2>Vergelijking in één tabel</h2>
          <p>Bij 25 sessies/week, gemiddeld klantbasis. Cijfers in netto-marge per maand:</p>
          <ul>
            <li>Eigen studio: <strong>€4.500/mnd</strong> (hoogste plafond, hoogste risico, hoogste setup-investering)</li>
            <li>Thuis bij klant: <strong>€5.400/mnd</strong> (hoogste flexibiliteit, laagste apparatuur, hoogste reistijd-verlies)</li>
            <li>Buiten (seizoenswerk): <strong>€3.300/mnd in zomer, €0-€1.000 in winter</strong> (laagste kosten, niet jaarrond)</li>
            <li>Studio per uur: <strong>€6.760-€7.260/mnd</strong> (hoogste effectieve marge, geen lange contracten, professionele uitstraling)</li>
          </ul>

          <h2>Welke optie wanneer?</h2>
          <ul>
            <li><strong>Maand 1-12:</strong> studio per uur (Optie D). Lage vaste kosten, premium klantperceptie, makkelijk opschalen of afschalen.</li>
            <li><strong>Maand 12-36:</strong> studio per uur blijft optimaal voor de meeste trainers. Schaalvoordeel boven eigen studio kicked pas in bij &gt;30 sessies/wk.</li>
            <li><strong>Jaar 3+ met &gt;30 sessies/wk consistent:</strong> overwegen om eigen studio te leasen, of een vaste blok-huur deal met een gedeelde studio te onderhandelen.</li>
            <li><strong>Buiten als aanvulling:</strong> 2-3 sessies/wk in zomer voor variatie + outdoor-specifieke training (functioneel, hardlopen, conditioneel). Niet als hoofdmodel.</li>
            <li><strong>Bij klant thuis:</strong> alleen voor specifieke niches (postpartum, ouderen, blessure-rehabilitatie) waar de klant niet kan reizen.</li>
          </ul>

          <h2>Waarom de meeste Amsterdam-trainers bij Optie D blijven</h2>
          <p>
            In 2025-2026 zien we in Amsterdam een verschuiving: trainers die in 2018-2020 eigen studio's openden, sluiten ze nu omdat de vaste lasten te zwaar drukken bij wisselende klantenstromen. De flexibiliteit van uur-huur (geen contract, opzegtermijn 0 dagen, alleen betalen wat je gebruikt) past beter bij hoe boutique-PT-werk werkelijk verloopt — met seizoens-pieken, klant-cycli, en eigen vakanties.
          </p>
          <p>
            Bij <a href="/nl/studio-huren">SculptClub</a> beginnen veel trainers met 4-6 sessies per week per uur huren. Naarmate hun klantenstroom groeit, kopen ze pakketten in (10/20/30 uur tegelijk met 10-23% korting). Wanneer ze stabiel op 25+ sessies/wk zitten, overwegen sommigen Optie A — maar de meeste blijven bij D omdat de marge daar netto hoger is, met minder risico.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar om Optie D te proberen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Gratis kennismakingssessie in onze studio. Bekijk de ruimte, vergelijk met wat je nu doet.
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

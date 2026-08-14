import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "ZZP Personal Trainer Nederland — KvK, btw, verzekering, pensioen (2026 gids) — SculptClub" },
  description:
    "Complete gids voor wie ZZP personal trainer wordt in Nederland: KvK-inschrijving, btw-tarief, beroepsaansprakelijkheid, AOV, pensioen en boekhouding. Met cijfers voor 2026.",
  keywords: [
    "zzp personal trainer btw",
    "personal trainer inschrijven kvk",
    "beroepsaansprakelijkheid personal trainer",
    "aov personal trainer",
    "zzp trainer belasting nederland",
  ],
  alternates: {
    canonical: "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
    languages: {
      nl: "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
      en: "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
    title: "ZZP Personal Trainer Nederland — KvK, btw, verzekering, pensioen (2026 gids) — SculptClub",
    description:
      "Complete gids voor wie ZZP personal trainer wordt in Nederland: KvK-inschrijving, btw-tarief, beroepsaansprakelijkheid, AOV, pensioen en boekhouding. Met cijfers voor 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Personal Trainer Nederland — KvK, btw, verzekering, pensioen (2026 gids) — SculptClub",
    description:
      "Complete gids voor wie ZZP personal trainer wordt in Nederland: KvK-inschrijving, btw-tarief, beroepsaansprakelijkheid, AOV, pensioen en boekhouding. Met cijfers voor 2026.",
  },
};

export default function BlogPostZzpKvkBtw() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "ZZP personal trainer — KvK, btw, verzekering, pensioen", url: "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" },
        ]}
      />
      <BlogPostingJsonLd
        title="ZZP personal trainer Nederland — KvK, btw, verzekering, pensioen complete gids 2026"
        description="Complete gids voor wie ZZP personal trainer wordt in Nederland: KvK-inschrijving, btw-tarief, beroepsaansprakelijkheid, AOV, pensioen en boekhouding. Met cijfers voor 2026."
        url="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen"
        datePublished="2026-05-20"
      />
      <FaqJsonLd faqs={[
        { question: "Wat kost een KvK-inschrijving voor een personal trainer?", answer: "€82,25 eenmalig in 2026. Je krijgt direct na inschrijving een KvK-nummer en je btw-nummer komt binnen 1-3 weken via de Belastingdienst." },
        { question: "Welk btw-tarief geldt voor personal training?", answer: "21% standaard tarief in 2026. De sport-vrijstelling van btw is per 2026 niet meer van toepassing op individuele PT-sessies — die regeling geldt alleen voor verenigingen en sportclubs zonder winstoogmerk." },
        { question: "Heb ik een arbeidsongeschiktheidsverzekering nodig?", answer: "Geen wettelijke verplichting, maar wel sterk aangeraden. Opties: broodfonds (~€50-100/maand collectief), commerciële AOV (~€150-300/maand individueel) of niets (risico). De keuze hangt af van je vaste lasten en spaarpositie." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                ZZP personal trainer Nederland — KvK, btw, verzekering, pensioen (2026 gids)
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 mei 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Je start als personal trainer in Nederland. Voor je je eerste factuur stuurt, zijn er een handvol formele stappen die je niet kan overslaan: KvK-inschrijving, btw-administratie, beroepsaansprakelijkheid, en op termijn pensioen. Deze gids loopt ze één voor één door — met de actuele cijfers voor 2026.
              </p>
              <p>
                <em>Belangrijk: dit artikel is informatief, geen belasting- of juridisch advies. Voor jouw specifieke situatie: ga naar een belastingadviseur, accountant, of de Belastingdienst zelf.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 1 — Wanneer ben je formeel ZZP’er?</h2>
              <p>
                Je bent ZZP’er zodra je je inschrijft bij de KvK als eenmanszaak. Vóór die inschrijving mag je geen facturen sturen — geld ontvangen voor diensten zonder KvK-nummer en btw-nummer is technisch zwartwerk.
              </p>
              <p>
                Een grijs gebied: af en toe een vriend helpen tegen kostprijs van koffie of een dinertje is geen handel. Maar zodra je structureel diensten levert voor geld, ben je formeel een ondernemer en moet je je inschrijven.
              </p>
              <p>
                De praktische definitie van “structureel”: meer dan 3-4 betaalde sessies per maand, of een vooraf afgesproken klant-relatie met facturen.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 2 — KvK-inschrijving (€82,25, 1 dag)</h2>
              <p>
                De KvK-inschrijving doe je online via kvk.nl. Wat heb je nodig:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Een geldig identiteitsbewijs (DigiD of paspoort)",
                  "Een vestigingsadres (mag je woonadres zijn, maar niet aan te raden voor privacy — overweeg een virtueel kantoor of co-working space)",
                  "Een bedrijfsnaam (mag je eigen naam zijn, of een handelsnaam)",
                  "De juiste SBI-code: 8551 (Sport- en recreatieonderwijs) of 9319 (Overige sportactiviteiten)",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                De inschrijving kost <strong className="text-foreground">€82,25 eenmalig (2026 tarief)</strong>. Je krijgt direct een KvK-nummer. Je btw-nummer volgt binnen 1-3 weken automatisch van de Belastingdienst.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 3 — Btw — 21% standaard, geen sport-vrijstelling</h2>
              <p>
                Voor individuele personal training geldt in 2026 het standaard btw-tarief van 21%. Je rekent dit boven op je tarief.
              </p>
              <p>
                Voorbeeld: jouw netto tarief is €50/sessie. Op je factuur staat dan €50 + €10,50 btw = €60,50. De €10,50 draag je af aan de Belastingdienst.
              </p>
              <p>
                Een veelvoorkomende verwarring: er bestaat een “sport-vrijstelling” van btw, maar die geldt alleen voor verenigingen en sportclubs zonder winstoogmerk. Individuele commerciële personal training valt daar niet onder.
              </p>
              <p>
                Btw-aangifte doe je per kwartaal (of per maand als je meer dan ~€100k omzet hebt). De Kleine Ondernemersregeling (KOR) is een optie als je onder de €20.000 omzet/jaar blijft — dan hoef je geen btw te rekenen, maar je mag dan ook geen btw aftrekken. Voor de meeste PT’s die ambitieus zijn, is KOR niet de juiste keuze.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 4 — Beroepsaansprakelijkheidsverzekering (~€25-50/maand)</h2>
              <p>
                Als personal trainer ben je verantwoordelijk voor de fysieke veiligheid van je klanten. Als iemand zich blesseert tijdens jouw sessie en jou daarvoor aansprakelijk stelt, kan dat enorme financiële gevolgen hebben.
              </p>
              <p>
                Een beroepsaansprakelijkheidsverzekering (BA) dekt schade die jij als professional bij anderen veroorzaakt. Verzekeraars die polissen voor PT’s in Nederland aanbieden:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Centraal Beheer", "Bekend bij ZZP’ers, flexibele dekking"],
                  ["Univé", "Vaak goedkoper voor sport-beroepen"],
                  ["Aon (zakelijk)", "Hogere dekking voor wie ook in gyms werkt"],
                  ["Specialistische sportverzekeraars (zoals NL Sportverzekeringen)", "Pakketten specifiek voor PT’s, fysio’s en fitness-instructeurs"],
                ].map(([name, desc]) => (
                  <li key={name} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{name}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Verwacht ~€25 tot €50 per maand voor een dekking van €1-€2,5 miljoen. Veel lagere bedragen tref je vrijwel nooit serieus aan. Veel hogere bedragen ook niet nodig zonder grote agenda.
              </p>
              <p>
                <strong className="text-foreground">Bij SculptClub:</strong> we eisen een geldige BA-verzekering als je studio bij ons huurt. Niet omdat we commissie pakken (dat doen we niet — 0%), maar omdat we de risico-piramide voor iedereen schoon willen houden.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 5 — Arbeidsongeschiktheidsverzekering (AOV)</h2>
              <p>
                Een AOV vangt jouw inkomen op als je zelf niet meer kan werken (door blessure, ziekte of mentale uitval). Voor ZZP’ers is dit géén wettelijke verplichting, maar wel een belangrijke afweging.
              </p>
              <p>
                Drie hoofdroutes:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Broodfonds", "Collectief van ZZP’ers die elkaar bij ziekte uitkeren. €50-100/maand. Dekt typisch 2 jaar. Geen medische keuring vooraf. Solidair, niet commercieel."],
                  ["Commerciële AOV", "Verzekering bij De Goudse, Klaverblad, Movir of vergelijkbaar. €150-300/maand. Dekt langer, hoger uitkeringsbedrag, met medische keuring."],
                  ["Niets (zelfverzekering)", "Je bouwt zelf een buffer op. Pas een goed idee als je 12+ maanden vaste lasten op de bank hebt en lage vaste kosten."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Voor beginnende PT’s met lage vaste lasten (geen hypotheek, geen kinderen) is een Broodfonds vaak de slimste keuze. Voor PT’s met gezin + eigen woning is een commerciële AOV vaak nodig.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 6 — Pensioen — geen werkgever, dus zelf regelen</h2>
              <p>
                Als ZZP’er bouw je geen pensioen op via een werkgever. AOW krijg je later wel (vanaf 67 jaar), maar dat is in 2026 ongeveer €1.200 netto/maand — niet genoeg om van te leven. Aanvullend pensioen regel je zelf.
              </p>
              <p>
                Drie populaire routes voor ZZP-pensioen:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Lijfrente bij ABN AMRO / Brand New Day / Bright Pensions", "Stort jaarlijks (tot ~€16k per jaar fiscaal aftrekbaar). Geld zit vast tot pensioenleeftijd."],
                  ["Banksparen (lijfrente-rekening)", "Vergelijkbaar met lijfrente maar bij een bank. Vaak iets lagere kosten dan beleggings-lijfrente."],
                  ["Vrij beleggen (ETF’s via DEGIRO / Saxo)", "Geen fiscale aftrek, maar geld blijft beschikbaar. Riskanter — vereist discipline om niet te tappen."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Praktisch advies voor het eerste jaar: hier nog even niets aan doen, focus op klanten en cashflow. Vanaf jaar 2-3: minimaal €200/maand opzij voor je pensioen-toekomst. Hoe ouder je wordt, hoe duurder later inhalen.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 7 — Boekhouding (Excel vs MoneyMonk vs accountant)</h2>
              <p>
                Drie niveaus van boekhouding voor een ZZP PT, oplopend in kosten + kwaliteit:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Excel / Numbers (€0)", "Werkt tot ~€20-30k omzet. Je vult zelf facturen + kostenposten in. Btw-aangifte doe je via mijnBelastingdienst.nl. Veel werk, foutgevoelig, maar gratis."],
                  ["MoneyMonk / Tellow / Jortt (€10-25/maand)", "Cloud-boekhouding voor ZZP’ers. Automatische bankkoppeling, btw-aangiftes met één klik, jaarrekening exporteerbaar. Aangeraden vanaf €30k omzet."],
                  ["Accountant (€50-150/maand)", "Volledig uit handen. Aangeraden vanaf €70k omzet of zodra je een complexe situatie krijgt (bv. ook online verkoop, internationale facturen, of partner-administratie)."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Voor 90% van de startende PT’s is <strong className="text-foreground">MoneyMonk</strong> de sweet spot. Maandelijks ~€15, scheelt je een dag werk per kwartaal aan btw, en de jaarrekening is geautomatiseerd. Investering die zichzelf terugverdient.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Stap 8 — Eerste belastingaangifte</h2>
              <p>
                Je doet één keer per jaar inkomstenbelasting-aangifte als ZZP’er. Belangrijke aftrekposten:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Zelfstandigenaftrek 2026", "€2.123 — als je in dat jaar minstens 1.225 uur in je bedrijf werkt (urencriterium)."],
                  ["Startersaftrek (eerste 5 jaar)", "Extra ~€2.123 bovenop zelfstandigenaftrek. Maximaal 3× in je eerste 5 jaar."],
                  ["MKB-winstvrijstelling", "14% van je winst (na aftrek) is vrijgesteld."],
                  ["Kleinschaligheidsinvesteringsaftrek (KIA)", "Aftrek bij investeringen boven €2.601 per jaar. Vooral nuttig als je apparatuur koopt."],
                  ["Beroepskosten", "Studio-huur, verzekeringen, KvK, MoneyMonk, telefoon, opleidingen, reiskosten. Allemaal aftrekbaar."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                In de praktijk betaalt een startende ZZP PT met €30k omzet en de gebruikelijke aftrekposten effectief 15-25% belasting over de winst. Niet 49% zoals het schijfje suggereert — de aftrekposten doen veel werk.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Samenvatting — wat moet je geregeld hebben voor je eerste klant</h2>
              <p>
                De minimale starter-checklist:
              </p>
              <ol className="space-y-2 list-decimal pl-6">
                {[
                  "KvK-inschrijving (€82,25) en wachten op btw-nummer (1-3 weken)",
                  "Beroepsaansprakelijkheidsverzekering geactiveerd (~€25-50/maand)",
                  "MoneyMonk of vergelijkbare boekhouding ingericht (~€15/maand)",
                  "Zakelijke bankrekening (bunq, ING, ABN, Knab — kies wat past)",
                  "Eerste factuur-template klaar (met KvK-nummer, btw-nummer, 21% btw)",
                ].map((line) => (
                  <li key={line} className="leading-relaxed">{line}</li>
                ))}
              </ol>
              <p>
                Pensioen en AOV zijn geen blokkers voor klant 1, maar wel voor klant 50 — los het op binnen je eerste jaar. Meer gidsen over starten als zelfstandige trainer — van eerste klanten tot tarieven — vind je op de pagina <a href="/nl/voor-trainers" className="text-brand hover:underline">voor trainers</a>.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub ZZP-trainer checklist</p></a>
                  <a href="/nl/voor-trainers/freelance-personal-trainer-worden" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance personal trainer worden</p></a>
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen</p></a>
                  <a href="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Kosten privé studio vs eigen gym</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Geregeld? Tijd voor een werkruimte</h3>
                <p className="mb-4">
                  KvK ingeschreven, BA geregeld, klaar om te starten. Bekijk SculptClub Studio Rental — geen vaste lasten, geen contract, vanaf €12/uur.
                </p>
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk Studio Rental
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

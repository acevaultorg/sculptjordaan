import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Kosten Privé Studio Huren vs Eigen Gym Openen in Amsterdam — SculptClub" },
  description:
    "ZZP personal trainer in Amsterdam? De volledige kostenvergelijking tussen privé studio per uur huren, een ruimte leasen of een eigen gym openen. Met echte cijfers.",
  keywords: [
    "kosten eigen gym openen amsterdam",
    "privé studio huren kosten amsterdam",
    "personal trainer eigen ruimte amsterdam",
    "zzp trainer studio investering",
    "personal training studio amsterdam huren",
  ],
  alternates: {
    canonical: "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
    languages: {
      nl: "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
      en: "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
    title: "Kosten Privé Studio Huren vs Eigen Gym Openen in Amsterdam — SculptClub",
    description:
      "ZZP personal trainer in Amsterdam? De volledige kostenvergelijking tussen privé studio per uur huren, een ruimte leasen of een eigen gym openen. Met echte cijfers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosten Privé Studio Huren vs Eigen Gym Openen in Amsterdam — SculptClub",
    description:
      "ZZP personal trainer in Amsterdam? De volledige kostenvergelijking tussen privé studio per uur huren, een ruimte leasen of een eigen gym openen. Met echte cijfers.",
  },
};

export default function BlogPostKostenStudioVsEigenGym() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Kosten privé studio vs eigen gym openen", url: "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Kosten privé studio huren vs eigen gym openen in Amsterdam"
        description="ZZP personal trainer in Amsterdam? De volledige kostenvergelijking tussen privé studio per uur huren, een ruimte leasen of een eigen gym openen. Met echte cijfers."
        url="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam"
        datePublished="2026-05-20"
      />
      <FaqJsonLd faqs={[
        { question: "Wat kost het om een eigen gym te openen in Amsterdam?", answer: "Een gym van 80 m² in Amsterdam kost minimaal €40.000 tot €60.000 per jaar aan vaste lasten (huur, energie, verzekeringen), plus een opstartinvestering van €15.000 tot €40.000 voor apparatuur." },
        { question: "Wat is het verschil met een studio per uur huren?", answer: "Bij studio-huur per uur betaal je alleen voor de tijd die je gebruikt. Bij SculptClub vanaf €12 per 60 minuten, zonder vaste lasten en zonder commissie op je tarief." },
        { question: "Wanneer is een eigen gym financieel logisch?", answer: "Globaal vanaf 25 tot 35 PT-sessies per week — onder dat aantal blijft studio-huur per uur goedkoper en flexibeler." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Kosten privé studio huren vs eigen gym openen in Amsterdam
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />20 mei 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />SculptClub
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Je hebt als personal trainer in Amsterdam drie keuzes: studio per uur huren, een ruimte leasen, of een eigen gym openen. Elke optie heeft compleet andere kosten, andere risico’s en een ander break-even punt. Geen sales-praatje — pure rekensom met de echte Amsterdam-cijfers van 2026.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">De drie opties op een rij</h2>
              <p>
                Voordat we de cijfers erbij pakken, eerst de definities. Dit zijn de drie modellen die de meeste ZZP-trainers in Amsterdam overwegen:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Per uur huren", "Je boekt per sessie een privé studio (zoals SculptClub). Geen vaste lasten."],
                  ["Ruimte leasen", "Je huurt een eigen ruimte voor een jaar of langer. Vaste maandlasten, jouw inrichting."],
                  ["Eigen gym openen", "Je koopt of huurt commercieel vastgoed, doet eigen verbouwing en investering. Volledige controle."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                In de praktijk ligt het zwaartepunt voor 95% van de Amsterdamse ZZP-trainers tussen <strong className="text-foreground">per uur huren</strong> en <strong className="text-foreground">eigen gym openen</strong>. Een commerciële ruimte leasen voor alleen jouw eigen klanten is meestal te duur als tussenoptie. Daarom focussen we op die twee uitersten.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Privé studio per uur huren bij SculptClub — wat krijg je voor €12/uur</h2>
              <p>
                Bij SculptClub aan de Egelantiersgracht in de Jordaan huur je een privé studio per sessie. Je betaalt alleen voor de tijd die je écht gebruikt. Geen lidmaatschap, geen contract, altijd gratis annuleren.
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Wat je huurt</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Prijs (60 min)</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Prijs (90 min)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Halve studio (1-op-1)", "€12", "€17"],
                      ["Hele studio (max 6 personen)", "€17", "€24"],
                    ].map(([type, p60, p90]) => (
                      <tr key={type} className="border-b last:border-0">
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-center font-medium">{p60}</td>
                        <td className="px-4 py-3 text-center font-medium">{p90}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Met een strippenkaart bespaar je tot 23%:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Starter — €89", "10× sessie, ~10% korting"],
                  ["Routine — €199", "~15% korting, populairste pakket"],
                  ["Pro — €349", "~20% korting"],
                  ["Volume — €549", "~23% korting voor wie wekelijks 3+ sessies geeft"],
                ].map(([pkg, desc]) => (
                  <li key={pkg} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{pkg}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Inbegrepen: alle apparatuur (Rogue powerrack, kabelmachine, dumbbells, sled, Echo Bike, kettlebells), wifi, muziek, schoonmaak en deurcode via WhatsApp. Geen extra kosten.
              </p>
              <p>
                <strong className="text-foreground">Maandlasten bij 8 sessies/week:</strong> 8 × 4 weken × €12 = €384/maand. Met Routine-pakket: ~€326/maand.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Een ruimte leasen in Amsterdam — wat kost dat écht</h2>
              <p>
                Een eigen gym openen begint met een commerciële plint. In Amsterdam Jordaan + centrum betaal je in 2026 ongeveer <strong className="text-foreground">€500 tot €700 per vierkante meter per jaar</strong>. Een werkbare PT-studio is minimaal 60 tot 80 m².
              </p>
              <p>
                Een ruwe kostprijsberekening voor een gym van 70 m² in Amsterdam-centrum:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Kostenpost</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Per jaar</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Per maand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Huur (70 m² × €600/m²)", "€42.000", "€3.500"],
                      ["Servicekosten (~10% van huur)", "€4.200", "€350"],
                      ["Energie + water + internet", "€4.800", "€400"],
                      ["Beroeps- + opstal- + inboedelverzekering", "€2.400", "€200"],
                      ["KvK + boekhouding (MoneyMonk + accountant)", "€1.200", "€100"],
                      ["Onderhoud + schoonmaak", "€2.400", "€200"],
                      ["Marketing + website + IG-content", "€3.600", "€300"],
                      ["Totaal vaste lasten", "€60.600", "€5.050"],
                    ].map(([type, year, month], idx, arr) => (
                      <tr key={type} className={`border-b last:border-0 ${idx === arr.length - 1 ? "bg-brand/5 font-semibold text-foreground" : ""}`}>
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-right">{year}</td>
                        <td className="px-4 py-3 text-right">{month}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Daar bovenop komt de opstartinvestering: apparatuur (powerrack, banken, dumbbells, kabelmachine, vloer) kost €15.000 tot €40.000 afhankelijk van het ambitieniveau. Verbouwing en akoestiek nog eens €5.000 tot €25.000. Realistisch ben je <strong className="text-foreground">€30.000 tot €60.000 kwijt voor je je eerste klant ontvangt</strong>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Een eigen gym openen — investeringscalculatie + terugverdientijd</h2>
              <p>
                Stel: je opent een eigen gym met €5.050 maandlasten en een opstartinvestering van €45.000. Wat heb je nodig om quitte te draaien?
              </p>
              <p>
                Reken eerst de break-even op vaste lasten: bij €65 per sessie heb je <strong className="text-foreground">78 sessies per maand</strong> nodig alleen om de vaste lasten te dekken. Dat is gemiddeld 18 sessies per week — vijf werkdagen, ruim drie sessies per dag. Geen ruimte voor je eigen inkomen.
              </p>
              <p>
                Om jezelf óók modaal uit te betalen (≈€3.000 netto/maand, dus ≈€4.500 bruto/maand winst), tel je daar nog 70 sessies per maand bij op. Totaal: <strong className="text-foreground">~148 sessies per maand, ~34 sessies per week</strong>.
              </p>
              <p>
                Voeg daar de afschrijving van je investering aan toe (€45.000 over 5 jaar = €750/maand) en je hebt nog eens 12 sessies extra per maand nodig. <strong className="text-foreground">Realistische break-even voor een gezond eigen gym: 38-40 sessies per week.</strong>
              </p>
              <p>
                Dat is haalbaar voor gevestigde trainers met een vol klantenbestand en een wachtlijst. Voor wie startend of mid-career is, is het een agressieve doelstelling met serieus risico.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Welke optie past bij welk type trainer</h2>
              <p>
                De keuze ligt niet zozeer in wat je wilt, maar in waar je nu staat. Een eerlijke matrix:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Aantal sessies/week</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Wat past</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1-5 sessies", "Studio per uur (SculptClub). Vaste lasten zijn dood gewicht."],
                      ["6-15 sessies", "Studio per uur met strippenkaart. Pro/Volume-pakket geeft 20-23% korting."],
                      ["16-25 sessies", "Sweet spot voor studio per uur. Eigen ruimte breekt nog niet even."],
                      ["26-35 sessies", "Grijze zone. Reken zelf — soms loont leasen, vaak nog niet."],
                      ["36+ sessies", "Eigen gym wordt aantrekkelijk, mits je portfolio stabiel is."],
                    ].map(([range, advice]) => (
                      <tr key={range} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{range}</td>
                        <td className="px-4 py-3">{advice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                De fout die veel beginnende trainers maken: ze willen een eigen gym voordat ze 20 betalende klanten hebben. Het resultaat: vaste lasten die je netto inkomen wegvreten, stress over bezetting, en een burn-out binnen anderhalf jaar.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Belastingvoordelen + aftrekposten per optie</h2>
              <p>
                <em>Geen belastingadvies — ga voor jouw situatie naar een belastingadviseur of de Belastingdienst. Wat hieronder staat is informatief.</em>
              </p>
              <p>
                Voor beide modellen geldt: kosten zijn aftrekbaar van je winst. Maar de structuur verschilt:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Studio per uur huren", "Direct kosten, geen voorraad of afschrijving. Lekker simpel: factuur in, kosten af."],
                  ["Eigen gym openen", "Apparatuur afschrijven (3-5 jaar), huur is direct aftrekbaar. KIA (Kleinschaligheidsinvesteringsaftrek) geldt bij investeringen boven €2.601."],
                  ["Beide", "Zelfstandigenaftrek (€2.123 in 2026) en MKB-winstvrijstelling 14% — gelijk in beide modellen."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat trainers in de Jordaan in 2026 daadwerkelijk doen</h2>
              <p>
                Een korte rondgang langs trainers die we kennen — anoniem gehouden:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Trainer A (3 jaar bezig, ~12 sessies/week): huurt bij SculptClub per uur. Pakte het Pro-pakket. Bespaart ~€200/maand t.o.v. een eigen ruimte huren.",
                  "Trainer B (8 jaar bezig, ~30 sessies/week): opende vorig jaar een eigen 60 m² studio in West. Vaste lasten €4.200/maand. Werkt — maar het is hard.",
                  "Trainer C (5 jaar bezig, ~22 sessies/week): blijft per uur huren, ondanks dat ze het kan betalen. Reden: \"Zonder vaste lasten slaap ik beter. Geen klant = geen kosten.\"",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                De rode draad: een eigen gym is geen status-symbool maar een operationele beslissing met directe cashflow-gevolgen. Wie het kan dragen, doet het. Wie twijfelt, huurt per uur en bouwt eerst zijn klantenbestand op.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Drie scenario’s — wat zou jij doen?</h2>
              <p>
                Drie concrete situaties:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Je hebt 4 vaste klanten en geeft 8 sessies/week. → Studio per uur met Starter-pakket (€89 voor 10 sessies). Je vaste lasten blijven nul.",
                  "Je hebt 12 vaste klanten en geeft 22 sessies/week. → Studio per uur met Pro of Volume pakket (~€10/uur). Eigen ruimte breekt nog niet even.",
                  "Je hebt 25 vaste klanten + wachtlijst en geeft 38 sessies/week. → Eigen gym is wiskundig interessant. Investering verdient zich binnen 2-3 jaar terug bij stabiele bezetting.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/studio-huren" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Huren — tarieven + pakketten</p></a>
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP-trainer checklist — KvK tot eerste klant</p></a>
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen als ZZP-trainer</p></a>
                  <a href="/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eigen studio vs thuis vs buiten trainen</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Reken het zelf uit</h3>
                <p className="mb-4">
                  Plan een gratis rondleiding in onze studio aan de Egelantiersgracht. Bekijk de ruimte, vraag wat je wilt vragen, geen verplichtingen.
                </p>
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk tarieven + plan rondleiding
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

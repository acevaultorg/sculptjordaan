import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Hoeveel Klanten heb je nodig als Personal Trainer in Amsterdam? — SculptClub" },
  description:
    "Eerlijke rekensom: hoeveel betalende klanten heeft een ZZP personal trainer nodig om in Amsterdam rond te komen, modaal te verdienen of een gezin te onderhouden? Met cijfers voor 2026.",
  keywords: ["hoeveel verdient een personal trainer", "minimum klanten personal trainer", "personal trainer inkomen amsterdam", "rondkomen als pt", "zzp trainer salaris"],
  alternates: {
    canonical: "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen",
    languages: { nl: "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen", en: "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage" },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen",
    title: "Hoeveel Klanten heb je nodig als Personal Trainer in Amsterdam? — SculptClub",
    description:
      "Eerlijke rekensom: hoeveel betalende klanten heeft een ZZP personal trainer nodig om in Amsterdam rond te komen, modaal te verdienen of een gezin te onderhouden? Met cijfers voor 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoeveel Klanten heb je nodig als Personal Trainer in Amsterdam? — SculptClub",
    description:
      "Eerlijke rekensom: hoeveel betalende klanten heeft een ZZP personal trainer nodig om in Amsterdam rond te komen, modaal te verdienen of een gezin te onderhouden? Met cijfers voor 2026.",
  },
};

export default function BlogPostHoeveelKlanten() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Hoeveel klanten heeft een PT nodig", url: "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen" }]} />
      <BlogPostingJsonLd title="Hoeveel klanten heb je nodig als personal trainer in Amsterdam?" description="Eerlijke rekensom: hoeveel betalende klanten heeft een ZZP personal trainer nodig om in Amsterdam rond te komen, modaal te verdienen of een gezin te onderhouden? Met cijfers voor 2026." url="/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "Hoeveel sessies per week moet ik geven om modaal te verdienen?", answer: "Bij een gemiddeld tarief van €60 per sessie heb je ongeveer 18 tot 22 sessies per week nodig om netto modaal (€3.000) te bereiken. Bij €45 per sessie: ~25 sessies/week. Bij €80 per sessie: ~14 sessies/week." },
        { question: "Wat zijn de vaste lasten van een ZZP personal trainer in Amsterdam?", answer: "Realistisch €200 tot €600 per maand: studio-huur (€100-400), verzekeringen (€50-100), KvK + boekhouding (~€20), telefoon/website (~€30-50)." },
        { question: "Hoe lang duurt het tot een ZZP trainer financieel stabiel is?", answer: "12 tot 24 maanden bij gemiddelde groei. Versneld als je een sterk netwerk of bestaand publiek hebt. Vertraagd als je in een verzadigde wijk start of geen onderscheidend profiel hebt." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hoeveel klanten heb je nodig als personal trainer in Amsterdam?</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 mei 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">De vraag die elke startende PT zichzelf stelt: hoeveel klanten moet ik hebben om financieel zelfstandig te zijn? Geen abstracte percentages — wel een concrete rekensom met de cijfers voor Amsterdam 2026. Drie scenario’s: rondkomen op modaal, een gezin onderhouden, of bewust voor part-time kiezen.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">De rekensom — bruto vs netto vs huishoudbudget</h2>
              <p>Voor je kunt rekenen wat je nodig hebt, moet je begrijpen wat “modaal” eigenlijk betekent in 2026:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Modaal bruto inkomen", "~€44.000/jaar (CBS 2026 schatting)"],
                  ["Modaal netto per maand", "~€3.000 — na belastingen voor een loondienstbaan"],
                  ["Modaal netto ZZP", "~€3.100-3.300 dankzij zelfstandigenaftrek + MKB-vrijstelling"],
                  ["Huishoudbudget Amsterdam", "Modaal alleen woon redelijk; gezin met kinderen = krapper"],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Onder modaal Amsterdam betekent in 2026: krap. Een 1-kamer-appartement aan de Egelantiersgracht of in De Pijp huur je vanaf €1.400/maand. Boodschappen, vervoer en sociaal leven nog niet meegerekend. €3.000 netto/maand is een realistisch minimum voor een ongebonden levensstijl.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario A — rondkomen op modaal (~€3.000 netto/maand)</h2>
              <p>Stel je hebt deze vaste lasten + leefkosten als ZZP trainer:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Kostenpost</th><th className="px-4 py-3 text-right font-semibold text-foreground">Per maand</th></tr></thead>
                  <tbody>
                    {[["Huur appartement Amsterdam", "€1.400"], ["Boodschappen + supermarkt", "€400"], ["Vervoer (OV + fiets)", "€80"], ["Telefoon + internet + Netflix", "€90"], ["Zorgverzekering", "€140"], ["BA-verzekering ZZP", "€40"], ["MoneyMonk boekhouding", "€15"], ["Sociaal leven + uitgaan + kleding", "€350"], ["Sparen (10% van netto)", "€300"], ["TOTAAL netto nodig", "€2.815"]].map(([k, v], idx, arr) => (<tr key={k} className={`border-b last:border-0 ${idx === arr.length - 1 ? "bg-brand/5 font-semibold text-foreground" : ""}`}><td className="px-4 py-3">{k}</td><td className="px-4 py-3 text-right">{v}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p>Voor €2.815 netto heb je bruto winst nodig van ~€4.200/maand (na zelfstandigenaftrek + MKB-vrijstelling). Bij studio-huur bij SculptClub (~€200/maand bij 8 sessies/week met Routine-pakket) komt daar nog €200 bovenop = €4.400 bruto omzet/maand.</p>
              <p>Bij €60/sessie (een redelijk gemiddeld tarief): <strong className="text-foreground">~73 sessies/maand = ~18 sessies/week</strong>.</p>
              <p>Bij €45/sessie (instaptarief): <strong className="text-foreground">~98 sessies/maand = ~24 sessies/week</strong>.</p>
              <p>Bij €80/sessie (premium): <strong className="text-foreground">~55 sessies/maand = ~14 sessies/week</strong>.</p>
              <p>Conclusie: <strong className="text-foreground">je tarief is bijna belangrijker dan je aantal klanten</strong>. Een trainer op €80 met 12 klanten verdient evenveel als een trainer op €45 met 22 klanten — maar werkt 40% minder uren.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario B — een gezin onderhouden (~€4.500 netto/maand)</h2>
              <p>Twee kinderen, een eigen woning met hypotheek (~€1.800/maand), pensioenstortingen, AOV, hogere ziektekosten. Realistisch nodig:</p>
              <p>Netto: €4.500/maand. Bruto winst: ~€6.300/maand. Met €200 studio-huur erbij: <strong className="text-foreground">€6.500 omzet/maand</strong>.</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["€60/sessie", "~108 sessies/maand = 27 sessies/week"],
                  ["€75/sessie", "~87 sessies/maand = 22 sessies/week"],
                  ["€90/sessie", "~72 sessies/maand = 18 sessies/week"],
                ].map(([rate, n]) => (<li key={rate} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{rate}:</strong> {n}</span></li>))}
              </ul>
              <p>27 sessies/week is hard werken. 5 werkdagen × 5-6 sessies/dag betekent vroege ochtend (06:30) tot late avond (21:00). Niet onmogelijk maar wel intensief — en eet 3-5 sessies/week voor jezelf en je gezin op.</p>
              <p>Verstandige route: groei je tarief in plaats van je uur-aantal. €60 → €75 in jaar 2 → €90 in jaar 4. Dan kan je gezin draaien op 18-22 sessies/week.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario C — bewust voor part-time kiezen</h2>
              <p>Niet iedereen hoeft 25 sessies/week te draaien. Hybride paden zijn vaak slimmer:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["PT + part-time loondienst", "10-12 sessies/week + 24 uur loondienst = stabiel inkomen + groeiend klantenbestand. Risico-luw voor het eerste jaar."],
                  ["PT + online coaching", "8 sessies/week 1-op-1 + 15 online klanten op €99/maand = vergelijkbaar maand-inkomen zonder dat je elke euro tegen tijd inruilt."],
                  ["PT + voedingsplannen of group classes", "Diversifieer revenue per uur. Een group class van 6 personen tegen €15 per persoon = €90/uur — zelfde als een premium 1-op-1."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Part-time is geen falen. Voor mensen met andere prioriteiten (gezin, andere passie, gezondheid) is een 12-15 sessies/week practice + zijwaardse inkomensbronnen vaak duurzamer dan een 25+ sessie all-in.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Vaste lasten van een ZZP trainer in Amsterdam</h2>
              <p>Realistisch overzicht maandelijks:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Studio-huur per uur (SculptClub, 8 sessies/week Routine pakket)", "~€200"],
                  ["Studio-huur per uur (SculptClub, 12 sessies/week Pro pakket)", "~€280"],
                  ["Eigen ruimte huren (zie eigen-gym blog)", "€3.500-5.000"],
                  ["BA-verzekering", "€40-50"],
                  ["AOV (Broodfonds)", "€60-90"],
                  ["AOV (commercieel)", "€200-300"],
                  ["KvK + boekhouding", "€15-25"],
                  ["Pensioen-storting (vanaf jaar 2)", "€200-500"],
                  ["Telefoon + website + marketing", "€50-100"],
                ].map(([k, v]) => (<li key={k} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{k}:</strong> {v}</span></li>))}
              </ul>
              <p>Met SculptClub als studio: ~€350-500/maand totale vaste lasten. Met eigen ruimte: €4.200-5.500. Het verschil = de reden waarom 95% van Amsterdamse ZZP trainers per uur huurt totdat ze 25+ sessies/week stabiel hebben.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat als je je sessie-aantal niet haalt?</h2>
              <p>Realiteit: niet elke PT haalt 18-22 sessies/week. De gemiddelde Amsterdamse ZZP PT zit op 10-15 sessies/week. Daar zijn vier oplossingen voor:</p>
              <ol className="space-y-2 list-decimal pl-6">
                {["Tarief verhogen — €60 → €75 = 25% meer inkomen bij hetzelfde aantal sessies", "Online coaching toevoegen — voedingsplannen of video-feedback voor €49-99/maand", "Specialiseren — niche-expertise (rugklachten, prenataal, calisthenics) trekt betalende premium klanten", "Group classes — 4-6 personen tegen €15-20 elk = €60-120/uur, zelfde marge als een premium 1-op-1"].map((line) => (<li key={line} className="leading-relaxed">{line}</li>))}
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-8">De eerlijke timeline naar stabiliteit</h2>
              <p>Niemand bereikt 20 sessies/week in maand 3. Eerlijke verwachting:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Maand 1-6", "0-5 sessies/week. Buffer nodig of part-time loondienst aanvullen."],
                  ["Maand 7-12", "5-12 sessies/week. Begin van financiële zelfstandigheid mits lage vaste lasten."],
                  ["Maand 13-18", "12-18 sessies/week. Modaal bereikbaar."],
                  ["Maand 19-24", "18-25 sessies/week. Gezin onderhouden mogelijk."],
                  ["Jaar 3+", "Stabiele 20-30 sessies/week + scale-paden actief."],
                ].map(([phase, d]) => (<li key={phase} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{phase}:</strong> {d}</span></li>))}
              </ul>
              <p>Sommige PT’s halen dit sneller (sterk bestaand netwerk, sport-celebrity). Sommige langzamer (oververzadigde wijk, geen onderscheid). 12-24 maanden tot stabiliteit is de mediaan.</p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen</p></a>
                  <a href="/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Pakketten + prijsstrategie</p></a>
                  <a href="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Kosten privé studio vs eigen gym</p></a>
                  <a href="/nl/studio-huren" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Lage vaste lasten = lager break-even punt</h3>
                <p className="mb-4">Bij SculptClub betaal je alleen voor de uren die je gebruikt — geen abonnement, geen commissie. Vanaf €12/uur. Bekijk de tarieven en plan een gratis rondleiding.</p>
                <ButtonLink href="/nl/studio-huren" size="lg">Bekijk Studio Rental<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

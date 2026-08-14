import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Pakketten — Prijsstrategie voor ZZP Trainers in Amsterdam — SculptClub" },
  description:
    "Hoe stel je pakketten samen als ZZP personal trainer? Welke korting bied je aan, welke prijspsychologie werkt in Amsterdam 2026? Concrete prijsstrategie met cijfers.",
  keywords: [
    "personal trainer pakket prijzen",
    "pt pakket samenstellen",
    "personal trainer prijsstrategie",
    "zzp trainer pricing",
    "pt strippenkaart amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
      en: "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
    title: "Personal Trainer Pakketten — Prijsstrategie voor ZZP Trainers in Amsterdam — SculptClub",
    description:
      "Hoe stel je pakketten samen als ZZP personal trainer? Welke korting bied je aan, welke prijspsychologie werkt in Amsterdam 2026? Concrete prijsstrategie met cijfers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Pakketten — Prijsstrategie voor ZZP Trainers in Amsterdam — SculptClub",
    description:
      "Hoe stel je pakketten samen als ZZP personal trainer? Welke korting bied je aan, welke prijspsychologie werkt in Amsterdam 2026? Concrete prijsstrategie met cijfers.",
  },
};

export default function BlogPostPakkettenPrijsstrategie() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal trainer pakketten en prijsstrategie", url: "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal trainer pakketten — prijsstrategie voor ZZP trainers in Amsterdam"
        description="Hoe stel je pakketten samen als ZZP personal trainer? Welke korting bied je aan, welke prijspsychologie werkt in Amsterdam 2026? Concrete prijsstrategie met cijfers."
        url="/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam"
        datePublished="2026-05-20"
      />
      <FaqJsonLd faqs={[
        { question: "Welke korting bied je op een PT-pakket?", answer: "Standaard in Nederland: 4-pak 5%, 10-pak 10-15%, 20-pak 20-25%. Daaronder zit geen prikkel voor de klant, daarboven verlies je marge zonder retentie-voordeel." },
        { question: "Hoe lang moeten pakketten geldig zijn?", answer: "Drie maanden is de sweet spot. Langer leidt tot scope creep en planning-discussies; korter voelt als druk en schaadt klantretentie." },
        { question: "Is een membership-model beter dan losse pakketten?", answer: "Beter voor cashflow, slechter voor cancel-risico. Membership werkt vanaf 15+ vaste klanten met bewezen retentie. Pakketten werken vanaf klant 1." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Personal trainer pakketten — prijsstrategie voor ZZP trainers in Amsterdam
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 mei 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Vrijwel elke beginnende PT verkoopt eerst alleen losse sessies. Dan komt het moment dat je merkt: klanten die elke week boeken kosten je net zoveel administratie als klanten die incidenteel komen. Pakketten lossen dat op. Maar welke pakketten, met welke kortingen, en hoe lang geldig?
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Waarom pakketten beter zijn dan losse uren</h2>
              <p>
                Drie concrete redenen:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Anchor pricing", "Een €349 pakket lijkt redelijk naast een €120 losse intake. Drie pakket-opties helpen klanten beslissen — niet of ze betalen, maar hoeveel."],
                  ["Voorspelbare omzet", "Een verkocht pakket is contant binnen. Geen administratie per sessie, geen incasso-discussies."],
                  ["Lagere churn", "Een klant die €349 vooraf betaalde komt sneller terug dan een klant die elke keer opnieuw beslist."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                De marge per sessie zakt — maar de marge per klant per jaar stijgt. Dat is de juiste optimalisatie.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">De drie standaard-pakketten</h2>
              <p>
                De simpelste pakket-structuur is een 3-opties stack. Dit is de standaard in Amsterdam 2026:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Pakket</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Aantal</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Korting</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Geldig</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Starter", "4 sessies", "5%", "2 maanden"],
                      ["Routine", "10 sessies", "12-15%", "3 maanden"],
                      ["Pro / Volume", "20 sessies", "20-23%", "6 maanden"],
                    ].map(([pkg, count, disc, valid]) => (
                      <tr key={pkg} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{pkg}</td>
                        <td className="px-4 py-3 text-center">{count}</td>
                        <td className="px-4 py-3 text-center">{disc}</td>
                        <td className="px-4 py-3 text-center">{valid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong className="text-foreground">Pro-tip:</strong> maak het Routine pakket visueel iets prominenter (badge: “populair”). Klanten kiezen het middelste pakket in 50-60% van de gevallen — dit heet het decoy effect.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Welke korting werkt — en waarom niet hoger</h2>
              <p>
                Veel beginnende PT’s denken: hoe hoger de korting, hoe sneller de verkoop. Onzin. Te hoge korting devalueert je dienst.
              </p>
              <p>
                De prikkel-curve in Amsterdam:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["0-5% korting", "Geen prikkel. Klant pakt gewoon losse sessies."],
                  ["10-15% korting (sweet spot)", "Voelt als “deal” zonder dat het goedkoop overkomt."],
                  ["20-25% korting (alleen voor grote pakketten)", "Werkt voor 20+ sessies. Bij kleinere pakketten cheap signaal."],
                  ["30%+ korting", "Voelt als wanhoop. Premium-klanten haken juist af."],
                ].map(([range, desc]) => (
                  <li key={range} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{range}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Amsterdam PT-markt-prijzen 2026 zitten tussen €45 en €90 per sessie. Premium-klanten verwachten te betalen — geen jackpot-deal.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Geldigheidsduur — 3 maanden is de sweet spot</h2>
              <p>
                Wat is de juiste geldigheid van een pakket?
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["1 maand", "Te kort. Klanten voelen druk, plannen niet goed, en boeken meerdere sessies in 1 week om niets te verliezen — slecht voor herstel."],
                  ["3 maanden (aanbevolen)", "10 sessies in 3 maanden = ~1 sessie per 9 dagen. Past bij realistische trainings-frequentie. Voldoende lang om geen druk te creëren."],
                  ["6 maanden", "Past bij 20-sessie pakketten (~1 sessie per 9 dagen ook). Langer wordt scope creep."],
                  ["12 maanden", "Te lang. Klant betaalt vooraf maar gebruikt 60% — uiteindelijk vraagt hij refund. Beter: maandelijkse refresh."],
                ].map(([dur, desc]) => (
                  <li key={dur} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{dur}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Membership-model — wanneer wel, wanneer niet</h2>
              <p>
                Maandelijks abonnement (€X per maand voor onbeperkt of een vast aantal sessies) is een andere structuur dan strippenkaarten. Voor- en nadelen:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Voor jou (PT)", "Voorspelbare maandomzet. Easier plannen. Lagere admin-druk."],
                  ["Voor de klant", "Geen losse beslissingen meer. Maar: lock-in-gevoel kan demotiveren."],
                  ["Nadeel jou", "Maand-opzeg-risico. Vakantieperiodes (zomer, kerst) leiden tot golf van opzeggers."],
                  ["Nadeel klant", "Betaalt voor sessies die hij vergeet te boeken. Kan voelen als verspilling."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Membership werkt vanaf 15+ vaste klanten met bewezen retentie. Tot dan: stick met strippenkaarten, ze zijn flexibeler voor beide partijen.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Prijspsychologie — welke nummers werken</h2>
              <p>
                Drie psychologische prijsprincipes die meetbaar verschil maken:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Drempelprijzen", "€45 of €49 niet €50. €99 niet €100. Het scheelt 1 euro maar voelt 5-10% goedkoper."],
                  ["Bundle-economics zichtbaar", "Toon altijd de prijs per sessie binnen het pakket: “€199 / 10 sessies = €19,90 per sessie”. Klant ziet de besparing."],
                  ["Decoy pricing", "Drie opties met middelste-best-deal positie. Starter (lekker laag) · Routine (best value) · Pro (premium). 50-60% kiest middelste."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Het anchor-effect — laat geen €120 sessie weg</h2>
              <p>
                Een veelgemaakte fout: een PT die zijn losse-uur tarief op €45 heeft, vergelijkt zichzelf alleen met andere €45-trainers. Maar de klant vergelijkt jou met luxe-merken (Equinox €150/sessie, hotel-spa PT €120). Door géén premium-anker in je menu te tonen, zet je jezelf onder.
              </p>
              <p>
                Concrete fix: voeg een “Premium 1-op-1 intensief” optie toe op je menu (~€95-120/sessie). Niet dat veel klanten dit kiezen — maar je middelste pakket voelt nu een “deal” in vergelijking. Anchor effect = +15-25% conversie op je middelste pakket.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">SculptClub als case study — hoe wij het hebben opgebouwd</h2>
              <p>
                Onze eigen studio-huur strippenkaarten volgen exact deze logica:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Pakket</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Prijs</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Korting</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Per uur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Starter", "€89", "~10%", "€10,80"],
                      ["Routine (populair)", "€179", "~15%", "€10,20"],
                      ["Pro", "€299", "~20%", "€9,60"],
                      ["Volume", "€499", "~23%", "€9,24"],
                    ].map(([pkg, price, disc, perhour]) => (
                      <tr key={pkg} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{pkg}</td>
                        <td className="px-4 py-3 text-center">{price}</td>
                        <td className="px-4 py-3 text-center">{disc}</td>
                        <td className="px-4 py-3 text-center">{perhour}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Je ziet dat de Per-uur kolom gestaffeld afdaalt: €12 losse uur → €10,80 (Starter) → €10,20 (Routine) → €9,60 (Pro) → €9,24 (Volume). Elke stap voelt als een betere deal. De Routine zit visueel net iets prominenter dan de rest — dat is geen toeval.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Hoe communiceer je een prijsverhoging?</h2>
              <p>
                Elke 12-18 maanden zou je een prijsverhoging moeten doen. Klanten verwachten dat. Trainers die nooit hun prijzen aanpassen, voelen onbetrouwbaar (“wat doet hij hier dan voor zichzelf?”).
              </p>
              <p>
                Drie regels:
              </p>
              <ol className="space-y-2 list-decimal pl-6">
                {[
                  "Geef bestaande klanten minimaal 30 dagen vooraf bericht. Persoonlijk, niet via bulk-mail.",
                  "Bied bestaande klanten een kans om voor de prijsverhoging nog een pakket aan oude tarief te kopen. “Als je voor 1 juni nog een Pro afsluit, geldt het oude tarief.”",
                  "Nieuwe klanten betalen direct het nieuwe tarief. Geen uitzonderingen — anders devalueert je nieuwe prijs vanaf dag 1.",
                ].map((line) => (
                  <li key={line} className="leading-relaxed">{line}</li>
                ))}
              </ol>
              <p>
                Meer gidsen over tarieven, klanten en administratie als zelfstandige trainer vind je op de pagina <a href="/nl/voor-trainers" className="text-brand hover:underline">voor trainers</a>.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen</p></a>
                  <a href="/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Hoeveel klanten om rond te komen</p></a>
                  <a href="/nl/studio-huren" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental tarieven</p></a>
                  <a href="/nl/voor-trainers" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voor trainers — overzichtspagina</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">100% van jouw tarief</h3>
                <p className="mb-4">
                  Bij SculptClub rekenen wij alleen de uurhuur. Welke pakketten + prijzen je ook samenstelt — alles wat je rekent, hou je. Plan een gratis rondleiding in onze studio.
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

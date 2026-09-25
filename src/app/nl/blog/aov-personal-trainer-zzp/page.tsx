import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "AOV voor ZZP personal trainers: verplicht vanaf 2030" },
  description:
    "Is een arbeidsongeschiktheidsverzekering verplicht als ZZP personal trainer? Vanaf ±2030 wel (Wet BAZ).",
  keywords: [
    "aov personal trainer",
    "verplichte aov zzp",
    "wet baz zelfstandigen",
    "broodfonds personal trainer",
    "arbeidsongeschiktheidsverzekering zzp fitness",
  ],
  alternates: {
    canonical: "/nl/blog/aov-personal-trainer-zzp",
    languages: {
      nl: "/nl/blog/aov-personal-trainer-zzp",
      en: "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/aov-personal-trainer-zzp",
    title: "AOV voor ZZP personal trainers: verplicht vanaf 2030",
    description:
      "Wat de verplichte AOV (Wet BAZ) betekent voor personal trainers, wat een private AOV nu kost voor een fysiek beroep, en wanneer een broodfonds genoeg is.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AOV voor ZZP personal trainers: verplicht vanaf 2030",
    description:
      "Wat de verplichte AOV (Wet BAZ) betekent voor personal trainers, wat een private AOV nu kost voor een fysiek beroep, en wanneer een broodfonds genoeg is.",
  },
};

export default function BlogPostAovPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "AOV voor personal trainers", url: "/nl/blog/aov-personal-trainer-zzp" },
        ]}
      />
      <BlogPostingJsonLd
        title="AOV voor personal trainers (ZZP) — verplicht vanaf 2030, dit kost het nu"
        description="Wat de verplichte AOV (Wet BAZ) betekent voor personal trainers, wat een private AOV nu kost voor een fysiek beroep, en wanneer een broodfonds genoeg is."
        url="/nl/blog/aov-personal-trainer-zzp"
        datePublished="2026-08-28"
      />
      <FaqJsonLd faqs={[
        { question: "Is een AOV verplicht voor personal trainers?", answer: "Nu nog niet. Het wetsvoorstel Wet BAZ (basisverzekering arbeidsongeschiktheid zelfstandigen) is in maart 2026 naar de Tweede Kamer gestuurd en maakt een AOV naar verwachting rond 2030 verplicht voor IB-ondernemers. Wie dan al een private AOV heeft die aan de eisen voldoet, kan via de opt-out buiten de publieke verzekering blijven." },
        { question: "Wat kost een AOV voor een personal trainer?", answer: "Personal training geldt als fysiek beroep en valt bij verzekeraars in een midden-hoge risicoklasse. Indicatie 2026: rond €80-120 bruto per maand voor een trainer van ~30 jaar met €2.500 verzekerd maandinkomen en 30 dagen wachttijd; met 90 dagen wachttijd daalt dat richting €50-80. Ruimere dekking loopt op tot €150-380 per maand. De premie is aftrekbaar." },
        { question: "Is een broodfonds genoeg voor een personal trainer?", answer: "Een broodfonds keert doorgaans €1.000-2.500 netto per maand uit en maximaal twee jaar. Voor een korte uitval is dat een prima brug; blijvende arbeidsongeschiktheid dekt het niet. Veel trainers combineren daarom een broodfonds voor de eerste twee jaar met een AOV met lange wachttijd voor daarna." },
        { question: "Is de AOV-premie aftrekbaar?", answer: "Ja. De premie van een arbeidsongeschiktheidsverzekering is aftrekbaar voor de inkomstenbelasting, waardoor de nettokosten afhankelijk van je tarief zo'n 30-40% lager uitvallen dan de brutopremie." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                AOV voor personal trainers — verplicht vanaf ±2030, dit kost het nu
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />28 augustus 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Een arbeidsongeschiktheidsverzekering is voor personal trainers nu nog niet verplicht — maar dat verandert. Het wetsvoorstel Wet BAZ ligt sinds maart 2026 bij de Tweede Kamer en maakt een AOV naar verwachting rond 2030 verplicht voor vrijwel alle ZZP&apos;ers. En juist voor een fysiek beroep als het onze is de vraag niet óf je iets regelt, maar wat.
              </p>
              <p>
                <em>Belangrijk: dit artikel is informatief, geen financieel advies. Cijfers zijn indicaties per augustus 2026; voor jouw situatie: een onafhankelijk AOV-adviseur of de verzekeraar zelf.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Is een AOV verplicht voor personal trainers?</h2>
              <p>
                Op dit moment niet. Maar het kabinet heeft het wetsvoorstel <strong className="text-foreground">Wet BAZ</strong> (basisverzekering arbeidsongeschiktheid zelfstandigen) op 23 maart 2026 naar de Tweede Kamer gestuurd. De strekking: vrijwel alle zelfstandige IB-ondernemers — dus ook personal trainers met een eenmanszaak — worden verplicht verzekerd tegen inkomensverlies bij arbeidsongeschiktheid. De beoogde ingangsdatum ligt rond <strong className="text-foreground">2030</strong>.
              </p>
              <p>
                De publieke variant in het voorstel: een premie van zo&apos;n <strong className="text-foreground">5,4% van je winst</strong> (gemaximeerd rond €171 per maand), tegenover een uitkering van circa 70% van je laatstverdiende inkomen, tot maximaal het minimumloon. Wie al een private AOV heeft die aan de wettelijke eisen voldoet, kan via de <strong className="text-foreground">opt-out</strong> buiten de publieke verzekering blijven — een reden waarom veel adviseurs zeggen: wie tóch een AOV overweegt, kan die beter regelen vóór de wet ingaat, zolang je nog zelf kiest onder welke voorwaarden.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat kost een AOV voor een personal trainer?</h2>
              <p>
                Personal training is in verzekeraarstermen een <strong className="text-foreground">fysiek beroep</strong>: je doet oefeningen voor, spot bij zware lifts en staat de hele dag op de vloer. Daardoor val je in een midden-hoge risicoklasse en betaal je meer dan iemand achter een bureau. Indicaties voor 2026:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["~€80-120 bruto per maand", "trainer van ~30 jaar, €2.500 verzekerd maandinkomen, 30 dagen wachttijd"],
                  ["~€50-80 per maand", "zelfde profiel met 90 dagen wachttijd — de premieknop met het meeste effect"],
                  ["€150-380 per maand", "ruimere dekking (€1.800-3.500 netto/maand verzekerd, langere uitkeringsduur)"],
                ].map(([price, desc]) => (
                  <li key={price} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{price}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Twee dingen die de premie structureel drukken: een <strong className="text-foreground">langere wachttijd</strong> (als je 3-6 maanden van je buffer kan leven, hoef je die maanden niet te verzekeren) en een <strong className="text-foreground">lagere verzekerde som</strong> (verzeker je vaste lasten, niet je omzet). En: de premie is <strong className="text-foreground">aftrekbaar</strong> voor de inkomstenbelasting, dus netto betaal je zo&apos;n 30-40% minder dan de brutopremie.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Broodfonds: het collectieve alternatief</h2>
              <p>
                Een broodfonds is een groep van 20-50 ondernemers die maandelijks inleggen op een eigen rekening (vaak rond de €90 per maand) en elkaar bij ziekte schenkingen doen van doorgaans <strong className="text-foreground">€1.000-2.500 netto per maand, maximaal twee jaar</strong>.
              </p>
              <p>
                De eerlijke vergelijking: een broodfonds is een uitstekende brug voor kortere uitval — een blessure, een operatie, een paar maanden herstel. Wat het níet dekt is blijvende arbeidsongeschiktheid: na twee jaar stopt de uitkering. Daarom is de veelgebruikte combinatie voor fysieke beroepen: <strong className="text-foreground">broodfonds voor de eerste twee jaar + AOV met twee jaar wachttijd</strong> voor alles daarna. De lange wachttijd maakt die AOV fors goedkoper, en het broodfonds vangt precies die periode op.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat als je net begint?</h2>
              <p>
                Begin je net als ZZP-trainer en is elke euro premie er één te veel? Drie dingen om te weten:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Bouw eerst een buffer van 3-6 maanden vaste lasten — dat is je eigen wachttijd, en het maakt elke verzekeringskeuze daarna goedkoper.",
                  "Kom je vanuit loondienst of een uitkering, kijk dan direct naar de vrijwillige verzekering bij UWV: die kun je alleen binnen 13 weken na de start van je onderneming afsluiten, zonder medische keuring.",
                  "Niets regelen is ook een keuze — maar dan is het een bewuste: reken uit wat drie maanden niet kunnen trainen je kost aan omzet, en wat er daarna gebeurt.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Verder lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP personal trainer — KvK, btw, verzekering, pensioen</p></a>
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub ZZP-trainer checklist</p></a>
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen</p></a>
                  <a href="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Kosten privé studio vs eigen gym</p></a>
                  <a href="/nl/blog/btw-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Btw voor personal trainers — 21% of 9%</p></a>
                  <a href="/nl/blog/belasting-eerste-jaar-zzp-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Belasting eerste jaar — wat houd je over?</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Verzekering geregeld? Tijd voor een werkruimte</h3>
                <p className="mb-4">
                  BA-verzekering live, AOV-keuze gemaakt, klaar om te trainen. Bekijk SculptClub Studio Rental — geen vaste lasten, geen contract, vanaf €12/uur.
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

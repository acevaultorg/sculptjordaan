import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

// ZZP admin cluster #6 (card mukd9flhzntelj). Pension was only a section of the
// umbrella article. Figures: Belastingdienst "Overzicht cijfers levensverzekeringen
// per 1-1-2026" (art. 3.127 Wet IB 2001) and "Aftrekken lijfrentepremies" (read 2026-09-28).

export const metadata: Metadata = {
  title: { absolute: "Pensioen als zzp personal trainer: lijfrente en jaarruimte (2026)" },
  description:
    "Hoeveel je als zzp personal trainer in 2026 mag inleggen voor je pensioen: de jaarruimte (30% van je premiegrondslag, max €35.589), de AOW-franchise van €19.172, reserveringsruimte en een rekenvoorbeeld.",
  keywords: [
    "pensioen zzp personal trainer",
    "jaarruimte 2026",
    "lijfrente zzp",
    "jaarruimte berekenen zzp",
    "reserveringsruimte 2026",
  ],
  alternates: {
    canonical: "/nl/blog/pensioen-zzp-personal-trainer",
    languages: {
      nl: "/nl/blog/pensioen-zzp-personal-trainer",
      en: "/en/blog/pension-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/pensioen-zzp-personal-trainer",
    title: "Pensioen als zzp personal trainer: lijfrente en jaarruimte (2026)",
    description:
      "De jaarruimte 2026 in één rekensom: 30% van je inkomen boven €19.172, maximaal €35.589. Met reserveringsruimte en een voorbeeld.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensioen als zzp personal trainer: lijfrente en jaarruimte (2026)",
    description:
      "De jaarruimte 2026 in één rekensom: 30% van je inkomen boven €19.172, maximaal €35.589.",
  },
};

const FIGURES: [string, string][] = [
  ["Jaarruimte", "30% van je premiegrondslag, maximaal €35.589"],
  ["AOW-franchise", "€19.172 (dit deel van je inkomen telt niet mee)"],
  ["Maximale premiegrondslag", "€118.628 (€137.800 min de franchise)"],
  ["Maximale reserveringsruimte", "€42.753"],
  ["AOW-leeftijd", "67 jaar"],
];

export default function BlogPostPensioenZzpPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Pensioen als zzp personal trainer", url: "/nl/blog/pensioen-zzp-personal-trainer" },
        ]}
      />
      <BlogPostingJsonLd
        title="Pensioen als zzp personal trainer: lijfrente en jaarruimte (2026)"
        description="Hoeveel je als zzp personal trainer in 2026 mag inleggen voor je pensioen: jaarruimte, AOW-franchise, reserveringsruimte en een rekenvoorbeeld, met de cijfers van de Belastingdienst."
        url="/nl/blog/pensioen-zzp-personal-trainer"
        datePublished="2026-09-28"
      />
      <FaqJsonLd faqs={[
        { question: "Hoeveel mag ik als zzp'er in 2026 aftrekken voor lijfrente?", answer: "Tot je jaarruimte: 30% van je premiegrondslag, met een maximum van €35.589 in 2026. Je premiegrondslag is je inkomen uit werk van het jaar ervoor (voor een zzp'er vooral je winst) min de AOW-franchise van €19.172. Bouw je nergens pensioen op, dan gaat er niets meer vanaf." },
        { question: "Welk jaar telt voor mijn jaarruimte 2026?", answer: "2025. De Belastingdienst kijkt voor de jaarruimte naar je situatie in het jaar ervoor. De jaarruimte 2026 bereken je dus met je winst en inkomen over 2025." },
        { question: "Wat is reserveringsruimte?", answer: "Jaarruimte die je niet hebt gebruikt. Je mag die de 10 jaar erna alsnog inleggen en aftrekken, tot €42.753 in 2026. Heb je beide, gebruik dan eerst je reserveringsruimte, zodat oude ruimte niet vervalt." },
        { question: "Wanneer trek ik de inleg af?", answer: "In het jaar dat je betaalt. Een storting in december 2026 trek je af in je aangifte over 2026." },
        { question: "Moet een zzp personal trainer pensioen opbouwen?", answer: "Het is niet verplicht. Je krijgt vanaf 67 jaar AOW, maar geen werkgeverspensioen. Wat je daarbovenop wilt, regel je zelf, met lijfrente (fiscaal aftrekbaar) of vrij sparen en beleggen (niet aftrekbaar, wel opneembaar)." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Pensioen als zzp personal trainer: lijfrente en jaarruimte in 2026
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />28 september 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Het korte antwoord: in 2026 mag je <strong>30% van je inkomen boven €19.172</strong> in een lijfrente stoppen en aftrekken, met een maximum van <strong>€35.589</strong>. Voor die berekening telt je inkomen van 2025.
              </p>
              <p>
                <em>Dit artikel is informatief, geen financieel of belastingadvies. De cijfers komen van de Belastingdienst (stand 1 januari 2026, gelezen 28 september 2026). Voor jouw situatie: gebruik het hulpmiddel lijfrentepremie van de Belastingdienst of vraag je boekhouder.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Waarom je dit zelf moet regelen</h2>
              <p>
                In loondienst bouw je pensioen op via je werkgever. Als zzp&apos;er niet. Vanaf 67 jaar krijg je AOW, en dat is het. Wil je later meer dan AOW, dan leg je zelf in. De overheid helpt daarbij: wat je binnen je <strong className="text-foreground">jaarruimte</strong> in een lijfrente stopt, mag je aftrekken van je inkomen. Belasting betaal je pas later, over de uitkering.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">De cijfers voor 2026</h2>
              <div className="rounded-xl border border-border/50 divide-y divide-border/50">
                {FIGURES.map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 p-4">
                    <span className="font-semibold text-foreground">{label}</span>
                    <span className="sm:text-right">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">Bron: Belastingdienst, overzicht cijfers levensverzekeringen per 1-1-2026.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Zo bereken je je jaarruimte</h2>
              <p>
                Neem je inkomen uit werk van <strong className="text-foreground">2025</strong>. Voor de meeste zelfstandige trainers is dat je winst uit onderneming, plus eventueel loon uit een baan ernaast. Haal daar de AOW-franchise van €19.172 af: dat is je premiegrondslag. Je jaarruimte is 30% daarvan.
              </p>
              <p>
                Bouw je daarnaast pensioen op, bijvoorbeeld via een baan in loondienst, dan gaat de pensioenaangroei van je Uniform Pensioenoverzicht keer 6,27 er nog af. Train je alleen als zzp&apos;er, dan geldt dat niet.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Een rekenvoorbeeld</h2>
              <p>
                Een trainer had in 2025 een winst van €40.000 en bouwt nergens pensioen op.
              </p>
              <div className="rounded-xl border border-border/50 p-4 font-mono text-sm text-foreground">
                <p>Winst 2025 ... €40.000</p>
                <p>Min AOW-franchise ... €19.172</p>
                <p>Premiegrondslag ... €20.828</p>
                <p>Jaarruimte 2026 (30%) ... €6.248</p>
              </div>
              <p>
                Deze trainer mag in 2026 tot ongeveer €6.248 in een lijfrente storten en dat bedrag aftrekken. Hoeveel belasting dat scheelt, hangt af van je tarief. Het hulpmiddel lijfrentepremie van de Belastingdienst rekent het exact uit.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Niet alles gebruikt? Reserveringsruimte</h2>
              <p>
                Jaarruimte die je in een jaar niet gebruikt, schuift door. Je mag hem de <strong className="text-foreground">10 jaar erna</strong> alsnog inleggen en aftrekken. Dat heet reserveringsruimte en is in 2026 maximaal €42.753. Handig voor een trainer met een wisselend inkomen: een sterk jaar kun je gebruiken om gemiste jaren in te halen.
              </p>
              <p>
                Heb je jaarruimte én reserveringsruimte, gebruik dan eerst je reserveringsruimte. Zo vervalt de oudste ruimte niet.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Waar zet je het geld neer?</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Lijfrenterekening (banksparen)", "Vast rendement, geen koersrisico. Aftrekbaar binnen je jaarruimte."],
                  ["Lijfrentebeleggingsrecht", "Je belegt, bijvoorbeeld in indexfondsen. Meer kans op groei, en meer risico. Ook aftrekbaar."],
                  ["Lijfrenteverzekering", "Bij een verzekeraar. Vaak hogere kosten dan de twee opties hierboven."],
                  ["Vrij sparen of beleggen", "Niet aftrekbaar, maar je kunt er altijd bij. Het vermogen valt in box 3."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Let op: geld in een lijfrente zit vast tot je pensioen. Eerder opnemen kan meestal alleen tegen belasting en een extra heffing. Houd daarom ook een gewone buffer aan voor maanden met minder klanten.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wanneer trek je het af?</h2>
              <p>
                In het jaar dat je betaalt. Stort je in december 2026, dan hoort de aftrek in je aangifte over 2026. Veel zzp&apos;ers storten daarom aan het eind van het jaar, als ze weten hoe het jaar liep.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Verder lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP personal trainer: KvK, btw, verzekering, pensioen</p></a>
                  <a href="/nl/blog/aov-personal-trainer-zzp" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">AOV voor personal trainers: dit kost het</p></a>
                  <a href="/nl/blog/belasting-eerste-jaar-zzp-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Belasting eerste jaar: wat houd je over?</p></a>
                  <a href="/nl/blog/factuur-personal-trainer-zzp" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Factuur maken: wat moet erop?</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Lage vaste lasten, meer ruimte om in te leggen</h3>
                <p className="mb-4">
                  Train je klanten in een privéstudio in de Jordaan. Per uur huren, zonder vaste lasten of contract.
                </p>
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk Studio Rental
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <p className="mt-3 text-sm text-muted-foreground">Eerste keer? <a href="/nl/studio-huren/gratis-test" className="text-brand underline">Probeer de studio 60 minuten gratis</a> met je eigen klant, zonder contract.</p>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

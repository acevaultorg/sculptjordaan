import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

// ZZP admin cluster #5 (card mtcsqlru2m9r63). The cluster earns most of this
// site's AI citations; invoicing was the one admin question it did not answer.
// Facts: Belastingdienst "factuureisen", "facturen maken" and "u maakt gebruik
// van de kleineondernemersregeling" (read 2026-09-27).

export const metadata: Metadata = {
  title: { absolute: "Factuur maken als personal trainer: wat moet erop? (2026)" },
  description:
    "Welke gegevens verplicht op je factuur staan, wanneer je particuliere klanten geen factuur hoeft te sturen, wat er verandert onder de KOR en hoe lang je facturen bewaart.",
  keywords: [
    "factuur personal trainer",
    "factuur maken zzp personal trainer",
    "factuureisen zzp",
    "factuur kor vrijgesteld",
    "personal trainer factuur particulier",
  ],
  alternates: {
    canonical: "/nl/blog/factuur-personal-trainer-zzp",
    languages: {
      nl: "/nl/blog/factuur-personal-trainer-zzp",
      en: "/en/blog/invoice-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/factuur-personal-trainer-zzp",
    title: "Factuur maken als personal trainer: wat moet erop? (2026)",
    description:
      "De verplichte gegevens volgens de Belastingdienst, de regels onder €100, factureren onder de KOR en de bewaarplicht. Met een voorbeeldregel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Factuur maken als personal trainer: wat moet erop? (2026)",
    description:
      "De verplichte gegevens volgens de Belastingdienst, de regels onder €100, factureren onder de KOR en de bewaarplicht.",
  },
};

const REQUIRED = [
  "Jouw volledige naam en die van je klant (bij een bedrijf: de bedrijfsnaam).",
  "Jouw adres en dat van je klant.",
  "Je btw-identificatienummer (begint met NL) en je KvK-nummer.",
  "De factuurdatum en een uniek factuurnummer uit een doorlopende reeks.",
  "Wat je hebt geleverd: bijvoorbeeld \"10 personal training sessies van 60 minuten\".",
  "De datum of periode waarin je de sessies gaf (of de datum van vooruitbetaling).",
  "Het bedrag exclusief btw, het btw-tarief en het btw-bedrag.",
];

export default function BlogPostFactuurPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Factuur maken als personal trainer", url: "/nl/blog/factuur-personal-trainer-zzp" },
        ]}
      />
      <BlogPostingJsonLd
        title="Factuur maken als personal trainer: wat moet erop? (2026)"
        description="De verplichte gegevens op een factuur volgens de Belastingdienst, wanneer je particulieren geen factuur hoeft te sturen, factureren onder de KOR en de bewaarplicht van 7 jaar."
        url="/nl/blog/factuur-personal-trainer-zzp"
        datePublished="2026-09-27"
      />
      <FaqJsonLd faqs={[
        { question: "Wat moet er op de factuur van een personal trainer staan?", answer: "Je naam en die van je klant, beide adressen, je btw-identificatienummer en KvK-nummer, de factuurdatum, een uniek doorlopend factuurnummer, een omschrijving van de sessies, de datum of periode van levering, het bedrag exclusief btw, het btw-tarief en het btw-bedrag." },
        { question: "Moet ik particuliere klanten een factuur sturen?", answer: "Nee. De factuurplicht van de Belastingdienst geldt voor leveringen aan andere ondernemers. Aan particulieren hoef je voor personal training geen factuur te sturen, al is een betaalbewijs wel netjes en handig voor je eigen administratie. Train je voor een bedrijf, dan moet je wel factureren." },
        { question: "Hoe factureer ik onder de KOR?", answer: "Onder de kleineondernemersregeling hoef je geen facturen te maken. Doe je het toch, dan zet je er geen btw-tarief of btw-bedrag op en vermeld je dat je vrijgesteld bent van btw op grond van de kleineondernemersregeling." },
        { question: "Wanneer moet een factuur verstuurd zijn?", answer: "Uiterlijk op de 15e van de maand na de maand waarin je de dienst leverde. Train je een bedrijf in maart, dan moet de factuur uiterlijk 15 april de deur uit." },
        { question: "Hoe lang moet ik facturen bewaren?", answer: "7 jaar. Dat is de fiscale bewaarplicht voor je administratie, dus ook voor je verkoopfacturen en de facturen die je zelf ontvangt, zoals studiohuur." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Factuur maken als personal trainer: wat moet erop?
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />27 september 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Het korte antwoord: aan <strong>bedrijven</strong> moet je altijd factureren, met een vaste lijst gegevens. Aan <strong>particuliere klanten</strong> hoeft het niet. En gebruik je de KOR, dan zet je nooit btw op je factuur.
              </p>
              <p>
                <em>Dit artikel is informatief, geen belastingadvies. De regels komen van de Belastingdienst (stand september 2026). Twijfel je over jouw situatie, vraag het je boekhouder of de Belastingdienst.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wanneer moet je een factuur sturen?</h2>
              <p>
                De factuurplicht geldt voor alles wat je levert aan <strong className="text-foreground">andere ondernemers</strong>. Voor een personal trainer is dat bijvoorbeeld een bedrijf dat trainingen voor zijn personeel afneemt, of een klant die de sessies via zijn eigen bv betaalt.
              </p>
              <p>
                De meeste PT-klanten zijn particulieren. Aan hen hoef je <strong className="text-foreground">geen factuur</strong> te sturen. Een betaalbewijs of een nette factuur op verzoek is wel professioneel, en je hebt het toch nodig voor je eigen administratie.
              </p>
              <p>
                Factureer je een bedrijf, dan moet de factuur uiterlijk op de <strong className="text-foreground">15e van de maand na de levering</strong> verstuurd zijn. Sessies in maart betekent: factuur uiterlijk 15 april.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat moet er verplicht op je factuur?</h2>
              <ul className="space-y-2 list-none pl-0">
                {REQUIRED.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Gebruik je meer dan één btw-tarief op dezelfde factuur, dan zet je de bedragen per tarief apart. Welk tarief bij personal training hoort (meestal 21%, soms 9%) lees je in <a href="/nl/blog/btw-personal-trainer" className="text-brand underline">ons artikel over btw voor personal trainers</a>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Een voorbeeldregel</h2>
              <p>
                Een bedrijf neemt in oktober 8 sessies van €60 exclusief btw af, tegen 21%. Op de factuur staat dan:
              </p>
              <div className="rounded-xl border border-border/50 p-4 font-mono text-sm text-foreground">
                <p>8 x personal training 60 min (1 t/m 29 oktober 2026) ... €480,00</p>
                <p>Btw 21% ... €100,80</p>
                <p>Totaal ... €580,80</p>
              </div>
              <p>
                Met jouw en hun naam en adres, je btw-id, KvK-nummer, factuurdatum en factuurnummer erbij is de factuur compleet.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Facturen tot €100: minder gegevens</h2>
              <p>
                Is het totaalbedrag <strong className="text-foreground">€100 of minder inclusief btw</strong>, bijvoorbeeld een losse sessie, dan mag je een vereenvoudigde factuur sturen met minder verplichte gegevens. De Belastingdienst noemt dat de aangepaste regels voor kleine facturen.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Factureren onder de KOR</h2>
              <p>
                Doe je mee aan de <strong className="text-foreground">kleineondernemersregeling</strong> (onder €20.000 omzet per jaar), dan hoef je geen facturen te maken. Maak je er toch een, bijvoorbeeld omdat een klant erom vraagt, dan:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "zet je er geen btw-tarief en geen btw-bedrag op;",
                  "vermeld je dat je vrijgesteld bent van btw op grond van de kleineondernemersregeling.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Let op: zet je onder de KOR toch btw op een factuur, dan moet je die btw alsnog afdragen.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Bewaren: 7 jaar</h2>
              <p>
                Je verkoopfacturen en de facturen die je zelf ontvangt, zoals studiohuur, apparatuur en software, bewaar je <strong className="text-foreground">7 jaar</strong>. Digitaal mag, zolang ze leesbaar blijven. Een boekhoudprogramma dat facturen nummert en bewaart scheelt je de meeste fouten uit deze lijst.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Verder lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/btw-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Btw voor personal trainers: 21% of 9%?</p></a>
                  <a href="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP personal trainer: KvK, btw, verzekering, pensioen</p></a>
                  <a href="/nl/blog/belasting-eerste-jaar-zzp-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Belasting eerste jaar: wat houd je over?</p></a>
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub ZZP-trainer checklist</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Facturen op orde? Tijd voor een werkruimte</h3>
                <p className="mb-4">
                  Train je klanten in een privéstudio in de Jordaan. Per uur huren, zonder vaste lasten of contract.
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

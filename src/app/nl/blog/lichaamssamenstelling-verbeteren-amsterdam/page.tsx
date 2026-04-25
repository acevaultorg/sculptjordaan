import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Lichaamssamenstelling Verbeteren Amsterdam — SculptClub",
  description:
    "Minder vet, meer spier — zonder crashdieet. Personal training gericht op lichaamssamenstelling bij SculptClub Amsterdam Jordaan. Gratis intake.",
  keywords: [
    "lichaamssamenstelling verbeteren amsterdam",
    "lichaamssamenstelling personal trainer amsterdam",
    "body recomposition amsterdam",
    "afvallen en spiermassa opbouwen amsterdam",
    "vetpercentage verlagen amsterdam",
    "spiermassa opbouwen amsterdam",
    "personal trainer lichaamssamenstelling",
  ],
  alternates: {
    canonical: "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam",
    languages: {
      nl: "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam",
      en: "/en/blog/improve-body-composition-amsterdam",
    },
  },
};

export default function LichaamssamenstllingVerbeterenAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Lichaamssamenstelling verbeteren", url: "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Lichaamssamenstelling Verbeteren in Amsterdam"
        description="Minder vet, meer spier — zonder crashdieet. Hoe personal training bij SculptClub je lichaamssamenstelling structureel verbetert."
        url="/nl/blog/lichaamssamenstelling-verbeteren-amsterdam"
        datePublished="2026-04-23"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Lichaamssamenstelling Verbeteren in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />23 april 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Personal training studio SculptClub Amsterdam Jordaan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De weegschaal vertelt maar half het verhaal. Twee mensen kunnen hetzelfde wegen
                en er volledig anders uitzien — omdat hun lichaamssamenstelling verschilt. Het
                gaat om de verhouding tussen vetmassa en spiermassa. Die verhouding verbeteren is
                precies waar gericht personal training op inspeelt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Wat is lichaamssamenstelling en waarom telt het?
              </h2>
              <p>
                Lichaamssamenstelling (of <em>body composition</em>) beschrijft hoeveel procent
                van je lichaamsgewicht bestaat uit vet, spier, bot en water. Een hoog vetpercentage
                bij normaal gewicht — ook wel <em>skinny fat</em> — is een even groot
                gezondheidsrisico als overgewicht op de weegschaal. Omgekeerd kunnen mensen met
                relatief veel spiermassa zwaarder wegen dan het &ldquo;ideale gewicht&rdquo; terwijl
                ze uitstekend gezond zijn.
              </p>
              <p>
                Vetpercentage verlagen terwijl je spiermassa opbouwt — dat heet{" "}
                <strong>body recomposition</strong>. Het vereist twee dingen tegelijk: de juiste
                training én voeding die dat proces ondersteunt. Dat is precies waarom willekeurig
                cardio of een crashdieet zelden werkt: je verliest dan ook spiermassa, wat je
                stofwisseling vertraagt en het resultaat moeilijker vast te houden maakt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Hoe krachttraining je lichaamssamenstelling verandert
              </h2>
              <p>
                Krachttraining is de meest effectieve methode om lichaamssamenstelling te
                verbeteren. Hier is waarom:
              </p>
              <ul>
                <li>
                  <strong>Spierstimulatie:</strong> Weerstandstraining geeft het signaal aan je
                  lichaam om spiereiwit aan te maken. Die nieuwe spierweefsel is metabolisch
                  actief — het verbrandt calorieën, ook in rust.
                </li>
                <li>
                  <strong>Naverbrandingseffect:</strong> Na intensieve krachttraining blijft je
                  stofwisseling verhoogd. Dit staat bekend als EPOC (Excess Post-exercise Oxygen
                  Consumption) — je verbrand uren ná je training nog extra calorieën.
                </li>
                <li>
                  <strong>Hormonale reactie:</strong> Zwaar trainen stimuleert de aanmaak van
                  groeihormoon en testosteron — beide spelen een directe rol in vetverbranding
                  en spierherstel.
                </li>
                <li>
                  <strong>Insulinegevoeligheid:</strong> Regelmatige krachttraining verbetert de
                  insulinegevoeligheid van je spiercellen. Dat betekent dat koolhydraten eerder
                  naar spieren gaan dan naar vetopslag.
                </li>
              </ul>
              <p>
                Cardio heeft zijn plek — maar als primaire methode voor lichaamssamenstelling
                schiet het tekort. Wie alleen loopt of fietst, verliest gewicht maar ook
                kostbare spiermassa. Het resultaat: een lager gewicht met dezelfde of hogere
                vetverhouding.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Voeding als tweede pijler
              </h2>
              <p>
                Training en voeding zijn onlosmakelijk verbonden. Je kunt niet trainen tegen een
                slecht voedingspatroon. Maar &ldquo;minder eten&rdquo; is ook niet het antwoord —
                het gaat om de <em>samenstelling</em> van je voeding:
              </p>
              <ul>
                <li>
                  <strong>Eiwitinname:</strong> Voldoende eiwit (1,6–2,2 g per kg lichaamsgewicht
                  per dag) is essentieel voor spierherstel en -opbouw. Zonder dat signaal bouwt je
                  lichaam geen spier aan, ook niet als je zwaar traint.
                </li>
                <li>
                  <strong>Caloriebalans:</strong> Body recomposition werkt het beste bij een
                  lichte calorietekort of onderhoudscalorieën — niet bij extreme restricties die
                  je lichaam in &ldquo;hongermodus&rdquo; brengen.
                </li>
                <li>
                  <strong>Timing:</strong> Eten rondom je training — voor energie, na training voor
                  herstel — optimaliseert de spiereiwitsynthese.
                </li>
              </ul>
              <p>
                Bij SculptClub werken we met een{" "}
                <a href="/nl/blog/voedingscoach-amsterdam" className="text-brand hover:underline">
                  voedingscoach
                </a>{" "}
                die je voedingspatroon afstemt op je trainingsdoelen. Geen crashdieet, geen
                calorietellen op de millimeter — wel een duurzaam patroon dat jou past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Meting en voortgang bijhouden
              </h2>
              <p>
                Lichaamssamenstelling verbeteren vergt geduld — en de juiste meetmethoden. De
                weegschaal is een slechte graadmeter: als je tegelijk vet verliest en spier opbouwt,
                kan het gewicht weken stabiel blijven terwijl je visueel duidelijk verandert.
              </p>
              <p>
                Betere indicatoren:
              </p>
              <ul>
                <li>Omvangmetingen (taille, heup, bovenbeen, bovenarmen)</li>
                <li>Voor- en nafoto&rsquo;s elke 4 weken</li>
                <li>Hoe kleding zit</li>
                <li>Prestaties in de training (meer gewicht, meer herhalingen)</li>
                <li>Energieniveau en slaapkwaliteit</li>
              </ul>
              <p>
                Je trainer bij SculptClub volgt deze maatstaven en past je programma aan als de
                voortgang stokt. Dat aanpassen is precies waar een personal trainer waarde toevoegt
                boven een zelf samengesteld schema.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Hoe lang duurt het?
              </h2>
              <p>
                Eerlijk antwoord: langer dan de meeste mensen hopen, maar korter dan ze vrezen.
                Body recomposition — tegelijk vet verliezen en spier opbouwen — is een trager
                proces dan puur afvallen of puur bulken. Realistisch verwachtingspatroon:
              </p>
              <ul>
                <li>
                  <strong>Maand 1–2:</strong> Lichaam went aan de training. Energie stijgt.
                  Eerste visuele veranderingen zichtbaar voor mensen die je kennen.
                </li>
                <li>
                  <strong>Maand 3–4:</strong> Duidelijk meetbaar verlies van vetmassa. Kleding
                  zit ruimer. Kracht neemt toe.
                </li>
                <li>
                  <strong>Maand 5–6:</strong> Significante verandering in lichaamsbouw. Je
                  nieuwe gewoonten zijn geïntegreerd en voelen vanzelfsprekend.
                </li>
              </ul>
              <p>
                Wie 3 keer per week traint en de voeding op orde brengt, ziet na 12 weken
                resultaat dat niet te missen valt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">
                Personal training bij SculptClub
              </h2>
              <p>
                Bij SculptClub train je in een{" "}
                <a href="/nl/studio" className="text-brand hover:underline">
                  privé studio
                </a>{" "}
                in Amsterdam Jordaan. Geen wachtrijen voor apparaten, geen afleiding — alleen
                jij, je trainer en een doelgericht programma. Onze trainers hebben verschillende
                specialisaties:{" "}
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">
                  fysiotherapie
                </a>
                ,{" "}
                <a href="/nl/blog/voedingscoach-amsterdam" className="text-brand hover:underline">
                  voedingscoaching
                </a>
                , en specifieke doelen zoals{" "}
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="text-brand hover:underline">
                  krachttraining voor vrouwen
                </a>{" "}
                of{" "}
                <a href="/nl/blog/afvallen-met-krachttraining" className="text-brand hover:underline">
                  afvallen met krachttraining
                </a>
                .
              </p>
              <p>
                Personal training begint vanaf €45 per sessie. Geen abonnement, geen contract.
                Je eerste intake is gratis en vrijblijvend — dan bespreken we je doelen en maken
                we een plan.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="/nl/blog/afvallen-met-krachttraining"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Afvallen met krachttraining
                  </p>
                </a>
                <a
                  href="/nl/blog/krachttraining-voor-vrouwen"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Krachttraining voor vrouwen
                  </p>
                </a>
                <a
                  href="/nl/blog/voedingscoach-amsterdam"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Voedingscoach Amsterdam
                  </p>
                </a>
                <a
                  href="/nl/blog/wat-kost-personal-training-amsterdam"
                  className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"
                >
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">
                    Wat kost personal training?
                  </p>
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om je lichaam te veranderen?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een gratis intake en ontdek hoe personal training jouw lichaamssamenstelling
                structureel verbetert.
              </p>
              <ButtonLink href="/nl/gratis-intake" size="lg">
                Plan gratis intake
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

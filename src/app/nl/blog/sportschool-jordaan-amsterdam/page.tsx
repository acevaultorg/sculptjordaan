import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Sportschool Jordaan Amsterdam: Jouw Opties op een Rij — SculptClub",
  description:
    "Op zoek naar een sportschool in de Jordaan, Amsterdam? Vergelijk grote ketens, boutique studio's en privé gyms. Ontdek wat het beste bij je past.",
  keywords: [
    "sportschool jordaan",
    "sportschool jordaan amsterdam",
    "gym jordaan amsterdam",
    "fitness jordaan",
    "sporten in de jordaan amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/sportschool-jordaan-amsterdam",
    languages: {
      nl: "/nl/blog/sportschool-jordaan-amsterdam",
      en: "/en/blog/gym-jordaan-amsterdam",
    },
  },
};

export default function SportschoolJordaanNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Sportschool Jordaan Amsterdam", url: "/nl/blog/sportschool-jordaan-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Sportschool Jordaan Amsterdam: Jouw Opties op een Rij"
        description="Vergelijk sportscholen in de Jordaan — van grote ketens tot boutique studio's."
        url="/nl/blog/sportschool-jordaan-amsterdam"
        datePublished="2026-04-02"
      />
      <FaqJsonLd faqs={[
        { question: "Wat voor sportscholen vind je in de Jordaan?", answer: "In de Jordaan vind je hoofdzakelijk drie typen plekken om te trainen:" },
        { question: "Waarom kiezen steeds meer mensen voor een privé studio?", answer: "De trend is duidelijk: mensen willen niet meer in een volle sportschool staan. Ze willen trainen op hun eigen tempo, zonder wachten, zonder drukke kleedkamers en zonder de sociale druk die veel beginners voelen. Een privé studio biedt precies dat. Je boekt een tijdslot, krijgt een deurcode en traint in alle rust. Na je sessie is de ruimte van jou geweest." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Sportschool Jordaan Amsterdam: Jouw Opties op een Rij
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  2 april 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/facade.jpeg"
                alt="SculptClub studio aan de Egelantiersgracht in de Jordaan, Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De Jordaan is een van de populairste buurten van Amsterdam om te wonen en te werken. Maar
                als je hier zoekt naar een sportschool, merk je al snel dat de opties anders zijn dan in
                bijvoorbeeld Zuid of Oost. De buurt is compact, de panden zijn klein en grote fitnessketens
                passen er simpelweg niet in. Dat maakt de Jordaan juist interessant voor wie op zoek is
                naar een persoonlijkere trainervaring.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat voor sportscholen vind je in de Jordaan?</h2>
              <p>
                In de Jordaan vind je hoofdzakelijk drie typen plekken om te trainen:
              </p>
              <ul>
                <li><strong>Grote ketens in de buurt:</strong> Basic-Fit en TrainMore hebben vestigingen op
                  loopafstand van de Jordaan (Haarlemmerstraat, Rozengracht). Voordeel: laag instaptarief.
                  Nadeel: druk, onpersoonlijk, wachten op apparaten.</li>
                <li><strong>Yoga- en pilatesstudio&apos;s:</strong> De Jordaan heeft meerdere yoga- en
                  pilatesstudio&apos;s. Ideaal voor flexibiliteit en ontspanning, maar geen optie als je
                  serieus aan krachttraining wilt doen.</li>
                <li><strong>Privé en boutique studio&apos;s:</strong> Kleine, volledig uitgeruste
                  trainingsruimtes waar je alleen of met een kleine groep traint. Duurder per sessie,
                  maar je deelt de ruimte met niemand.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom kiezen steeds meer mensen voor een privé studio?</h2>
              <p>
                De trend is duidelijk: mensen willen niet meer in een volle sportschool staan. Ze willen
                trainen op hun eigen tempo, zonder wachten, zonder drukke kleedkamers en zonder de sociale
                druk die veel beginners voelen. Een privé studio biedt precies dat. Je boekt een tijdslot,
                krijgt een deurcode en traint in alle rust. Na je sessie is de ruimte van jou geweest.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Krachttraining in de Jordaan</h2>
              <p>
                Voor serieuze krachttraining heb je meer nodig dan een loopband en een paar dumbbells.
                Je zoekt een power rack, een kabelmachine, verstelbare banken en voldoende vrije gewichten.
                De meeste grote sportscholen hebben deze apparatuur wel, maar je deelt ze met tientallen
                anderen. In een boutique studio heb je alle apparatuur voor jezelf — of deel je met
                maximaal twee andere personen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten vergelijken</h2>
              <p>
                Een abonnement bij een grote keten kost tussen de €20 en €40 per maand. Een
                boutique studio zoals SculptClub werkt anders: je betaalt per sessie of via een
                flexibel lidmaatschap. Open Gym sessies beginnen bij €5,75 per bezoek met het
                Intensief plan (12 sessies per 4 weken voor €69). Het Instapplan biedt 4 sessies
                voor €29 per 4 weken. Geen contract, geen jaarlijks abonnement — stop wanneer je wilt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training in de Jordaan</h2>
              <p>
                Als je begeleiding zoekt, bieden meerdere trainers in de Jordaan personal training aan.
                Bij SculptClub werken vijf onafhankelijke trainers met tarieven vanaf €45 per sessie.
                De eerste intake is altijd gratis en vrijblijvend. Elke trainer bepaalt zelf zijn tarief —
                wij rekenen 0% commissie, dus wat je betaalt gaat volledig naar je trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: privé studio aan de gracht</h2>
              <p>
                SculptClub zit aan de Egelantiersgracht 424, in het hart van de Jordaan. Een volledig
                uitgeruste privé studio op de begane grond, direct vanaf de straat. Professionele
                apparatuur van Rogue en Concept2, dagelijks open van 06:30 tot 22:00. Je kunt er
                zelfstandig trainen via Open Gym, een personal trainer kiezen of de studio huren als
                ZZP-trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Probeer het zelf</h2>
              <p>
                Benieuwd of een privé studio bij je past? Boek een gratis proefles bij Open Gym of plan
                een gratis intake met een personal trainer. Geen verplichtingen, geen abonnement — gewoon
                komen kijken of het iets voor je is.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool zonder abonnement in Amsterdam</p></a>
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Privé sportschool vs grote sportschool</p></a>
                <a href="/nl/blog/open-gym-vs-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs sportschool</p></a>
                <a href="/nl/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training Amsterdam Jordaan</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis proberen?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis proefles of plan een intake met een trainer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                  Bekijk trainers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/nl/open-gym" size="lg" variant="outline">
                  Open Gym bekijken
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

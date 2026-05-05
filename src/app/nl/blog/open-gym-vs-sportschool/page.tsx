import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Open Gym vs Sportschool: Wat past bij jou? — SculptClub" },
  description:
    "Wat is het verschil tussen Open Gym en een reguliere sportschool? Vergelijk prijs, privacy, apparatuur en sfeer om de beste keuze te maken.",
  keywords: [
    "open gym amsterdam",
    "open gym vs sportschool",
    "sportschool zonder abonnement amsterdam",
    "privé gym amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/open-gym-vs-sportschool",
    languages: {
      nl: "/nl/blog/open-gym-vs-sportschool",
      en: "/en/blog/open-gym-vs-regular-gym",
    },
  },
};

export default function BlogPostNL3() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Open Gym vs Sportschool", url: "/nl/blog/open-gym-vs-sportschool" },
        ]}
      />
      <BlogPostingJsonLd
        title="Open Gym vs Sportschool: Wat past bij jou?"
        description="Vergelijk Open Gym met een reguliere sportschool op prijs, privacy, apparatuur en sfeer."
        url="/nl/blog/open-gym-vs-sportschool"
        datePublished="2026-03-24"
      />
      <FaqJsonLd faqs={[
        { question: "Wat is Open Gym?", answer: "Open Gym is een concept waarbij je zelfstandig traint in een privé of semi-privé studio. Je boekt een tijdslot van meestal 60 minuten en hebt in die tijd toegang tot professionele apparatuur, zonder dat je de ruimte hoeft te delen met tientallen andere sporters. Bij SculptClub zijn er maximaal 3 personen tegelijk in de studio." },
        { question: "Voor wie is Open Gym geschikt?", answer: "Open Gym is ideaal voor mensen die:" },
        { question: "Voor wie is een sportschool beter?", answer: "Een traditionele sportschool kan beter passen als je:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Open Gym vs Sportschool: Wat past bij jou?
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  24 maart 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="SculptClub Open Gym studio overzicht"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Als je op zoek bent naar een plek om te trainen in Amsterdam, heb je tegenwoordig meer opties dan ooit.
                Naast de bekende sportschoolketens zijn er steeds meer boutique concepten, waaronder Open Gym. Maar wat
                is het verschil precies? En welke optie past het beste bij jouw manier van trainen? In dit artikel
                vergelijken we Open Gym met een traditionele sportschool op alle belangrijke punten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat is Open Gym?</h2>
              <p>
                Open Gym is een concept waarbij je zelfstandig traint in een privé of semi-privé studio. Je boekt een
                tijdslot van meestal 60 minuten en hebt in die tijd toegang tot professionele apparatuur, zonder dat
                je de ruimte hoeft te delen met tientallen andere sporters. Bij SculptClub zijn er maximaal 3 personen
                tegelijk in de studio.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De grote verschillen</h2>

              <h3 className="text-xl font-bold mt-8 mb-3">Privacy en drukte</h3>
              <p>
                Het grootste verschil zit in de privacy. In een reguliere sportschool deel je de ruimte met soms
                tientallen tot honderden mensen. Wachten op apparaten, ongewenste blikken en achtergrondlawaai zijn
                dagelijkse realiteit. Bij Open Gym train je in een rustige omgeving met maximaal een handvol mensen.
                Ideaal als je je wilt concentreren op je training zonder afleiding.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Kosten</h3>
              <p>
                Een budget sportschool begint vaak rond de 20 tot 30 euro per maand, maar dan krijg je ook een
                budget-ervaring. Een mid-range sportschool kost al snel 40 tot 60 euro per maand. <Link href="/nl/open-gym" className="text-brand underline-offset-2 hover:underline">Open Gym bij
                SculptClub</Link> begint vanaf 29 euro per 4 weken voor 2 sessies per week, wat vergelijkbaar is met een
                mid-range sportschool. Het verschil? Je krijgt een premium ervaring voor een vergelijkbare <Link href="/nl/prijzen" className="text-brand underline-offset-2 hover:underline">prijs</Link>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Apparatuur</h3>
              <p>
                Grote sportscholen hebben vaak veel apparatuur, maar die is ook verspreid over een grote ruimte en
                vaak bezet door andere leden. Bij Open Gym is alle apparatuur die je nodig hebt voor een volledige
                krachttraining beschikbaar en altijd vrij. Denk aan een power rack, kabelmachine, dumbbells,
                bankjes en accessoires.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Flexibiliteit</h3>
              <p>
                Bij een sportschool heb je meestal een maand- of jaarcontract. Bij Open Gym werk je vaak met een
                flexibel systeem zonder langlopende verplichtingen. Bij SculptClub werken we met 4-weken cycli
                die je op elk moment kunt opzeggen. Geen bindingsangst, geen kleine lettertjes.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is Open Gym geschikt?</h2>
              <p>
                Open Gym is ideaal voor mensen die:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zelfstandig kunnen trainen en weten wat ze doen</li>
                <li>Privacy en rust waarderen tijdens hun workout</li>
                <li>Geen zin hebben in een langlopend abonnement</li>
                <li>In de Jordaan wonen of werken en dichtbij willen trainen</li>
                <li>Liever in een schone, goed onderhouden ruimte sporten</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is een sportschool beter?</h2>
              <p>
                Een traditionele sportschool kan beter passen als je:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Groepslessen wilt volgen zoals spinning, yoga of HIIT</li>
                <li>Een sauna, zwembad of andere extra faciliteiten zoekt</li>
                <li>Op zoek bent naar de absolute laagste prijs per maand</li>
                <li>De sociale sfeer van een grote gym leuk vindt</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">De combinatie: het beste van twee werelden</h2>
              <p>
                Sommige mensen combineren een sportschoollidmaatschap met Open Gym sessies. Ze gebruiken de sportschool
                voor groepslessen en cardio, en Open Gym voor hun krachttraining in een rustige omgeving. Omdat
                Open Gym geen langlopend contract vereist, is dit een laagdrempelige combinatie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Probeer het zelf</h2>
              <p>
                De beste manier om te ontdekken of Open Gym bij je past, is door het uit te proberen. Bij SculptClub
                kun je eenvoudig een enkele sessie boeken om de studio en het concept te ervaren. Geen verplichtingen,
                geen druk. Gewoon een goede training in een fijne ruimte.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Privé sportschool vs grote sportschool</p></a>
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool zonder abonnement</p></a>
                <a href="/nl/blog/eerste-keer-sportschool-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste keer sportschool: tips</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Probeer Open Gym bij SculptClub</h3>
              <p className="text-muted-foreground mb-6">
                Boek je eerste sessie en ervaar het verschil van trainen in een privé studio.
              </p>
              <ButtonLink href="/nl/boek" size="lg">
                Boek nu
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

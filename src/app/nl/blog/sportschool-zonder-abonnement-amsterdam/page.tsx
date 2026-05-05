import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Sportschool zonder abonnement in Amsterdam: Je opties — SculptClub" },
  description:
    "Geen zin in een langlopend sportschoolabonnement? Ontdek je opties in Amsterdam: pay-per-session, Open Gym, strippenkaarten en meer. Vergelijk flexibel sporten.",
  keywords: [
    "sportschool zonder abonnement amsterdam",
    "gym zonder contract amsterdam",
    "flexibel sporten amsterdam",
    "pay per session gym amsterdam",
    "open gym amsterdam",
    "sportschool per keer betalen amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/sportschool-zonder-abonnement-amsterdam",
    languages: {
      nl: "/nl/blog/sportschool-zonder-abonnement-amsterdam",
      en: "/en/blog/gym-without-membership-amsterdam",
    },
  },
};

export default function SportschoolZonderAbonnementNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Sportschool zonder abonnement", url: "/nl/blog/sportschool-zonder-abonnement-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Sportschool zonder abonnement in Amsterdam: Je opties"
        description="Geen zin in een langlopend abonnement? Ontdek flexibele sportopties in Amsterdam, van pay-per-session tot Open Gym."
        url="/nl/blog/sportschool-zonder-abonnement-amsterdam"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Sportschool zonder abonnement in Amsterdam: Je opties
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
                src="/images/studio/power-rack.jpeg"
                alt="Open Gym bij SculptClub Amsterdam — sporten zonder abonnement"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je wilt sporten in Amsterdam, maar je zit niet te wachten op een jaarabonnement van 30 tot 50 euro per
                maand bij een drukke sportschool. Herkenbaar? Je bent niet de enige. Steeds meer Amsterdammers zoeken
                naar flexibele sportopties zonder langlopend contract. In dit artikel zetten we de beste alternatieven
                op een rij.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom geen abonnement?</h2>
              <p>
                Er zijn goede redenen om geen vast abonnement te willen. Misschien reis je veel voor werk, heb je een
                onregelmatig schema, of wil je eerst ontdekken welke sport bij je past voordat je je vastlegt. Of
                misschien heb je in het verleden ervaren dat je maandenlang betaalde voor een sportschool waar je
                nauwelijks kwam.
              </p>
              <p>
                Het goede nieuws: Amsterdam biedt steeds meer mogelijkheden om flexibel te sporten. Van
                dagpassen bij grote ketens tot gespecialiseerde concepten zonder contractverplichting.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Optie 1: Dagpassen bij reguliere sportscholen</h2>
              <p>
                De meeste grote sportscholen in Amsterdam bieden dagpassen aan. Prijzen variëren van 8 tot 20 euro
                per bezoek, afhankelijk van de locatie en faciliteiten. Dit is handig als je incidenteel wilt sporten,
                maar wordt snel duur als je regelmatig traint. Bovendien heb je nog steeds te maken met drukte,
                wachttijden en beperkte privacy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Optie 2: Strippenkaarten en rittenkaarten</h2>
              <p>
                Sommige studio&apos;s en sportscholen werken met strippenkaarten. Je koopt een bundel van bijvoorbeeld
                10 of 20 sessies en gebruikt ze wanneer je wilt. Het voordeel: je betaalt alleen voor wat je
                daadwerkelijk gebruikt. Het nadeel: strippenkaarten hebben vaak een vervaldatum en de prijs per sessie
                kan hoger liggen dan bij een abonnement.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Optie 3: Pay-per-session apps</h2>
              <p>
                Apps zoals OneFit en ClassPass bieden toegang tot meerdere sportscholen en studio&apos;s in Amsterdam
                via een flexibel credits-systeem. Je betaalt per sessie of les en hebt toegang tot een breed aanbod.
                Dit is ideaal als je van afwisseling houdt. Maar let op: populaire lessen zijn snel vol en de kosten
                kunnen oplopen als je vaak traint.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Optie 4: Open Gym — privé trainen zonder contract</h2>
              <p>
                Een relatief nieuw concept in Amsterdam is Open Gym: je huurt een privé sportruimte voor een vaste
                tijd en traint zelfstandig met professionele apparatuur. Geen drukte, geen wachten, geen afleiding.
                Bij SculptClub werkt <Link href="/nl/open-gym" className="text-brand underline-offset-2 hover:underline">Open Gym</Link> met een 4-weken cyclus zonder contract. Je kunt elk moment opzeggen
                en betaalt vanaf 5,75 euro per sessie.
              </p>
              <p>
                Wat Open Gym uniek maakt ten opzichte van reguliere sportscholen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Volledige privacy</strong> — je traint alleen of met je trainingspartner in een afgesloten studio.</li>
                <li><strong>Professionele apparatuur</strong> — power rack, kabelmachine, dumbbells, assault bike en meer.</li>
                <li><strong>Flexibele tijden</strong> — boek sessies van 06:30 tot 22:00, 7 dagen per week.</li>
                <li><strong>Geen contract</strong> — 4-weken cyclus, opzeggen wanneer je wilt.</li>
                <li><strong>Deurcode toegang</strong> — boek, ontvang je code en train op jouw tijd.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Vergelijking: kosten per maand</h2>
              <p>
                Laten we de kosten vergelijken voor iemand die 3 keer per week wilt trainen (12 sessies per maand):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Groot sportschoolabonnement</strong> — 30 tot 50 euro per maand (beperkte flexibiliteit)</li>
                <li><strong>Dagpassen</strong> — 96 tot 240 euro per maand (12 x 8 tot 20 euro)</li>
                <li><strong>Pay-per-session app</strong> — 60 tot 120 euro per maand (afhankelijk van credits)</li>
                <li><strong>Open Gym bij SculptClub</strong> — 69 euro per maand voor 3x per week (populair plan)</li>
              </ul>
              <p>
                Open Gym biedt dus een privé ervaring voor een vergelijkbare prijs als een groot sportschoolabonnement,
                maar dan zonder de drukte, wachttijden en contractverplichtingen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Welke optie past bij jou?</h2>
              <p>
                De beste keuze hangt af van je situatie. Train je onregelmatig en wil je maximale flexibiliteit?
                Dan is een dagpas of pay-per-session app een goede optie. Train je regelmatig en wil je privacy en
                kwaliteit? Dan biedt Open Gym de beste waarde. En wil je begeleiding? Dan is personal training
                zonder abonnement het antwoord.
              </p>
              <p>
                Bij SculptClub kun je al deze opties combineren. Train zelfstandig met Open Gym, boek een personal
                trainer voor begeleiding, of <Link href="/nl/studio-huren" className="text-brand underline-offset-2 hover:underline">huur de studio</Link> voor je eigen sessies. Alles zonder contract.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/open-gym-vs-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs sportschool</p></a>
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Privé sportschool vs grote sportschool</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Probeer Open Gym gratis</h3>
              <p className="text-muted-foreground mb-6">
                Ervaar zelf hoe het is om te trainen in een privé studio. Eerste sessie gratis.
              </p>
              <ButtonLink href="/nl/open-gym" size="lg">
                Meer over Open Gym
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

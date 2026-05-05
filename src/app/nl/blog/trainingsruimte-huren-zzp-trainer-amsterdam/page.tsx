import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Trainingsruimte Huren als ZZP Personal Trainer — SculptClub" },
  description:
    "Praktische gids voor ZZP personal trainers die een trainingsruimte willen huren in Amsterdam. Kosten, belasting, verzekering en hoe je begint.",
  keywords: [
    "trainingsruimte huren zzp",
    "zzp personal trainer studio",
    "fitnessruimte huren amsterdam",
    "werkplek personal trainer amsterdam",
    "studio huren freelance trainer amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
      en: "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
    },
  },
};

export default function BlogPostZZPTrainerNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Trainingsruimte huren als ZZP trainer", url: "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Trainingsruimte Huren als ZZP Personal Trainer in Amsterdam"
        description="Praktische gids voor ZZP personal trainers die een trainingsruimte willen huren in Amsterdam."
        url="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam"
        datePublished="2026-04-02"
      />
      <FaqJsonLd faqs={[
        { question: "De kosten: wat kost een trainingsruimte in Amsterdam?", answer: "De kosten hangen af van je model. Een eigen studio huren in Amsterdam kost al snel €1.500 tot €3.000 per maand, exclusief apparatuur, schoonmaak en onderhoud. Voor een ZZP-trainer die net begint is dat een enorm risico." },
        { question: "Verzekering: wat heb je nodig?", answer: "Als ZZP personal trainer heb je minimaal een beroepsaansprakelijkheidsverzekering (BAV) nodig. Die dekt schade door fouten in je begeleiding of advies. Veel trainers nemen ook een bedrijfsaansprakelijkheidsverzekering (AVB) voor schade aan derden of eigendommen. Controleer altijd of de studio waar je huurt een eigen verzekering heeft voor de apparatuur en de ruimte. Bij SculptClub is de studio volledig verzekerd — je hoeft je alleen te focussen op je eigen dekking." },
        { question: "Waar moet je op letten bij een trainingsruimte?", answer: "Niet elke ruimte is geschikt voor personal training. Waar je op moet letten:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Trainingsruimte Huren als ZZP Personal Trainer in Amsterdam
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

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="Volledig uitgeruste trainingsruimte bij SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je hebt je ingeschreven bij de KvK, je eerste klanten komen binnen en je bent officieel
                ZZP personal trainer. Nu komt de grote vraag: waar ga je trainen? Thuis bij klanten is
                een optie, maar het schaalt niet. Een eigen pand is te duur. Een gehuurde trainingsruimte
                biedt de perfecte tussenweg — professioneel, flexibel en betaalbaar. In deze gids lees je
                alles wat je als ZZP-trainer moet weten over het huren van een trainingsruimte in Amsterdam.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom steeds meer ZZP-trainers een studio huren</h2>
              <p>
                De personal training markt in Amsterdam groeit. Steeds meer trainers kiezen bewust voor
                zelfstandig ondernemerschap. Je bepaalt zelf je tarieven, kiest je eigen klanten en bouwt
                aan je eigen merk. Maar zonder een professionele ruimte loop je tegen grenzen aan. Klanten
                verwachten meer dan een oefening in het park of een workout in hun woonkamer. Een eigen
                trainingsruimte — al is het gehuurd per uur — geeft je geloofwaardigheid en stelt je in
                staat premium tarieven te vragen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De kosten: wat kost een trainingsruimte in Amsterdam?</h2>
              <p>
                De kosten hangen af van je model. Een eigen studio huren in Amsterdam kost al snel
                €1.500 tot €3.000 per maand, exclusief apparatuur, schoonmaak en onderhoud. Voor een
                ZZP-trainer die net begint is dat een enorm risico.
              </p>
              <p>
                Het alternatief: huur per uur in een bestaande studio. Bij SculptClub huur je een halve
                studio al vanaf €12 per 60 minuten, of een volledige studio vanaf €17 per uur. Met
                kortingspakketten bespaar je tot 23%. Reken: als je 20 sessies per week geeft tegen €50
                per sessie, dan kost je studioruimte bij SculptClub circa 15 tot 20 procent van je omzet —
                vergelijk dat met de 40 tot 60 procent die je bij een grote sportschool zou afdragen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Belasting en aftrekposten voor ZZP-trainers</h2>
              <p>
                Als ZZP-trainer zijn je studiokosten volledig aftrekbaar als bedrijfskosten. Dat geldt
                voor de huur per uur, maar ook voor eventuele strippenkaarten of pakketten. Daarnaast kun
                je reiskosten naar de studio aftrekken (€0,23 per kilometer), evenals je
                beroepsaansprakelijkheidsverzekering, marketingkosten en nascholing. Houd een goede
                administratie bij — je boekhouder zal je dankbaar zijn.
              </p>
              <p>
                Vergeet de btw niet: als je boven de kleineondernemersregeling (KOR) zit, breng je 21%
                btw in rekening aan je klanten. De btw op je studiokosten kun je als voorbelasting
                terugvorderen. Kortom: de werkelijke kosten van een gehuurde trainingsruimte zijn lager
                dan het bedrag op de factuur.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Verzekering: wat heb je nodig?</h2>
              <p>
                Als ZZP personal trainer heb je minimaal een beroepsaansprakelijkheidsverzekering (BAV)
                nodig. Die dekt schade door fouten in je begeleiding of advies. Veel trainers nemen ook
                een bedrijfsaansprakelijkheidsverzekering (AVB) voor schade aan derden of eigendommen.
                Controleer altijd of de studio waar je huurt een eigen verzekering heeft voor de
                apparatuur en de ruimte. Bij SculptClub is de studio volledig verzekerd — je hoeft je
                alleen te focussen op je eigen dekking.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waar moet je op letten bij een trainingsruimte?</h2>
              <p>
                Niet elke ruimte is geschikt voor personal training. Waar je op moet letten:
              </p>
              <ul>
                <li><strong>Apparatuur:</strong> Power rack, kabelmachine, dumbbells, bank — de basis voor elke PT-sessie</li>
                <li><strong>Privacy:</strong> Je klant moet zich op zijn gemak voelen, niet in een drukke ruimte staan</li>
                <li><strong>Bereikbaarheid:</strong> Centraal gelegen, goed bereikbaar met OV en fiets</li>
                <li><strong>Flexibiliteit:</strong> Kun je per uur boeken of zit je vast aan een langlopend contract?</li>
                <li><strong>Schoonmaak en onderhoud:</strong> Wie is verantwoordelijk?</li>
                <li><strong>Annuleringsbeleid:</strong> Wat gebeurt er als een klant afzegt?</li>
              </ul>
              <p>
                Bij SculptClub kun je altijd gratis annuleren. Je ontvangt een deurcode via WhatsApp de
                avond tevoren, zodat je direct naar binnen kunt. De studio wordt na elke sessie gereinigd
                en de apparatuur is altijd in topconditie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Je merk opbouwen met een vaste trainingslocatie</h2>
              <p>
                Een van de onderschatte voordelen van een vaste trainingslocatie is het effect op je merk.
                Je klanten weten waar ze naartoe moeten, je kunt een consistente ervaring bieden en je
                kunt de locatie gebruiken in je marketing. Foto&apos;s van de studio op je Instagram, je
                adres op Google Maps, reviews die verwijzen naar de ruimte — het maakt je merk tastbaarder
                dan een trainer die overal en nergens traint.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Stappenplan: zo begin je</h2>
              <p>
                Klaar om te starten? Dit is hoe je als ZZP personal trainer begint met het huren van een
                trainingsruimte:
              </p>
              <ol>
                <li>Zorg dat je KvK-inschrijving op orde is (SBI-code 93.13 — fitnesscentra)</li>
                <li>Sluit een beroepsaansprakelijkheidsverzekering af</li>
                <li>Bekijk de studio en test de apparatuur</li>
                <li>Start met een paar uur per week en schaal op naarmate je klantenbestand groeit</li>
                <li>Gebruik de locatie in je marketing — foto&apos;s, Google profiel, social media</li>
              </ol>

              <h2 className="text-2xl font-bold mt-10 mb-4">Aan de slag bij SculptClub</h2>
              <p>
                SculptClub in de Amsterdamse Jordaan is gebouwd voor zelfstandige trainers. Een volledig
                uitgeruste privé studio, flexibel te boeken per uur, geen langlopend contract en altijd
                gratis annuleren. Studio huren vanaf €12 per uur, met kortingspakketten tot 23% korting.
                0% commissie — wat je verdient, houd je.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/word-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Word trainer bij SculptClub</p></a>
                <a href="/nl/blog/personal-trainer-worden-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer worden in Amsterdam</p></a>
                <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren als personal trainer</p></a>
                <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapie studio huren</p></a>
                <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Zakelijk personal training</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Wil je de studio bekijken?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een vrijblijvende bezichtiging of neem direct contact op.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk studio & tarieven
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hoi%2C%20ik%20ben%20ZZP%20trainer%20en%20ge%C3%AFnteresseerd%20in%20het%20huren%20van%20de%20studio"
                  size="lg"
                  variant="outline"
                  external
                >
                  WhatsApp ons
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

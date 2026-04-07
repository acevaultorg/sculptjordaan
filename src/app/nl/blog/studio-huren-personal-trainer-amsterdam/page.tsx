import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio huren als personal trainer in Amsterdam — SculptClub",
  description:
    "Op zoek naar een trainingsruimte om te huren als personal trainer in Amsterdam? Vergelijk kosten, flexibiliteit en voordelen van een eigen studio.",
  keywords: [
    "studio huren personal trainer",
    "trainingsruimte huren amsterdam",
    "zzp trainer studio",
    "personal training studio huren",
    "ruimte huren fitness amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/studio-huren-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/studio-huren-personal-trainer-amsterdam",
      en: "/en/blog/studio-rental-personal-trainers-amsterdam",
    },
  },
};

export default function BlogPostStudioHurenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Studio huren als personal trainer", url: "/nl/blog/studio-huren-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Studio huren als personal trainer in Amsterdam"
        description="Vergelijk de opties voor het huren van een trainingsruimte als personal trainer in Amsterdam."
        url="/nl/blog/studio-huren-personal-trainer-amsterdam"
        datePublished="2026-03-26"
      />
      <FaqJsonLd faqs={[
        { question: "Waarom niet bij een grote sportschool werken?", answer: "Veel trainers beginnen hun carrière bij een grote keten. Het voordeel is duidelijk: je hebt toegang tot apparatuur en een stroom aan potentiële klanten. Maar de nadelen wegen vaak zwaarder. Je draagt een flink percentage van je inkomsten af, soms wel 40 tot 60 procent. Je hebt weinig controle over de planning, de sfeer en de klantenervaring. En je bouwt aan het merk van de sportschool, niet aan je eigen merk." },
        { question: "Kosten: wat kost het huren van een studio?", answer: "De kosten variëren sterk in Amsterdam. Een volledig eigen studio huren begint al snel bij €1.500 tot €3.000 per maand, exclusief apparatuur en onderhoudskosten. Een slimmere optie is het huren per uur of per dagdeel in een bestaande studio. Bij SculptClub kun je al een studio huren vanaf €12 per uur. Met een strippenkaart of vast schema krijg je tot 23% korting. Dat maakt het financieel haalbaar, ook als je net begint als ZZP-trainer." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Studio huren als personal trainer in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  26 maart 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Professioneel dumbbell rack bij SculptClub"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Als zelfstandig personal trainer in Amsterdam sta je voor een belangrijke keuze: werk je bij een
                grote sportschool, train je bij klanten thuis, of huur je een eigen studio? Steeds meer trainers
                kiezen voor die laatste optie. Een eigen ruimte geeft je controle over de ervaring die je je
                klanten biedt, zonder de kosten en risico&apos;s van een volledig eigen pand. In dit artikel leggen
                we uit waarom het huren van een studio vaak de slimste zet is.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom niet bij een grote sportschool werken?</h2>
              <p>
                Veel trainers beginnen hun carrière bij een grote keten. Het voordeel is duidelijk: je hebt
                toegang tot apparatuur en een stroom aan potentiële klanten. Maar de nadelen wegen vaak zwaarder.
                Je draagt een flink percentage van je inkomsten af, soms wel 40 tot 60 procent. Je hebt weinig
                controle over de planning, de sfeer en de klantenervaring. En je bouwt aan het merk van de
                sportschool, niet aan je eigen merk.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De voordelen van een eigen studio</h2>
              <p>
                Met een gehuurde studio combineer je het beste van twee werelden. Je hebt toegang tot professionele
                apparatuur zonder de investering van een eigen pand. Je bepaalt zelf je tarieven, je planning en
                hoe je de ruimte inricht. Je klanten ervaren een exclusieve, privé omgeving die je niet kunt
                bieden in een drukke sportschool of in hun eigen woonkamer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten: wat kost het huren van een studio?</h2>
              <p>
                De kosten variëren sterk in Amsterdam. Een volledig eigen studio huren begint al snel bij €1.500
                tot €3.000 per maand, exclusief apparatuur en onderhoudskosten. Een slimmere optie is het huren
                per uur of per dagdeel in een bestaande studio. Bij SculptClub kun je al een studio huren vanaf
                €12 per uur. Met een strippenkaart of vast schema krijg je tot 23% korting. Dat maakt het
                financieel haalbaar, ook als je net begint als ZZP-trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Flexibiliteit en schaalbaarheid</h2>
              <p>
                Een van de grootste voordelen van huren per uur is de flexibiliteit. Je hoeft niet te betalen
                voor uren die je niet gebruikt. Begin met een paar sessies per week en schaal op naarmate je
                klantenbestand groeit. Als je op vakantie gaat of een rustige maand hebt, betaal je niets extra.
                Geen langlopend huurcontract, geen vaste lasten die doorlopen als je even minder draait.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Apparatuur en uitstraling</h2>
              <p>
                Je klanten verwachten een professionele omgeving. Bij een gehuurde studio heb je toegang tot
                apparatuur die je als individuele trainer moeilijk zelf kunt aanschaffen: power racks, kabelmachines,
                dumbbells tot 50 kg, assault bikes en meer. De studio is schoon, goed onderhouden en heeft de
                juiste uitstraling om je klanten een premium ervaring te bieden.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Klantervaring als onderscheidend vermogen</h2>
              <p>
                De ervaring die je je klanten biedt, bepaalt of ze terugkomen en je aanbevelen. In een privé
                studio voelt elke sessie exclusief. Je klant hoeft niet door een drukke sportschool te lopen,
                niet te wachten op apparaten en niet bang te zijn voor ongemakkelijke situaties. De deurcode
                ontvangt je klant de avond tevoren via WhatsApp, zodat ze direct naar binnen kunnen. Die aandacht
                voor detail maakt het verschil.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Verzekering en juridische zaken</h2>
              <p>
                Als ZZP personal trainer heb je een beroepsaansprakelijkheidsverzekering nodig. Controleer ook
                of de studio die je huurt een adequate bedrijfsaansprakelijkheidsverzekering heeft. Vraag naar
                de huisregels en zorg dat je een duidelijke overeenkomst hebt over het gebruik van de ruimte en
                apparatuur. Bij SculptClub is de studio volledig verzekerd en krijg je een helder overzicht van
                de voorwaarden.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Aan de slag</h2>
              <p>
                Het huren van een studio hoeft niet ingewikkeld of duur te zijn. Met de juiste locatie en een
                flexibel huurmodel kun je je klanten een ervaring bieden die je onderscheidt van de concurrentie.
                Vanaf €12 per uur heb je toegang tot een volledig uitgeruste privé studio in het hart van de
                Jordaan. Neem contact op en ontdek de mogelijkheden.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/word-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Word trainer bij SculptClub</p></a>
                <a href="/nl/blog/personal-trainer-worden-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer worden in Amsterdam</p></a>
                <a href="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Trainingsruimte huren als ZZP-trainer</p></a>
                <a href="/nl/blog/gym-huren-per-uur-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym huren per uur</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Interesse in het huren van onze studio?</h3>
              <p className="text-muted-foreground mb-6">
                Neem contact op via WhatsApp en bespreek de mogelijkheden.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/boek" size="lg">
                  Boek een bezichtiging
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hoi%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20het%20huren%20van%20de%20studio"
                  size="lg"
                  variant="outline"
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

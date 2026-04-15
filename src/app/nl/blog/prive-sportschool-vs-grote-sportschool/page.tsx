import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Privé sportschool vs grote sportschool: De verschillen — SculptClub",
  description:
    "Wat is het verschil tussen een privé sportschool en een grote keten? Vergelijk sfeer, apparatuur, persoonlijke aandacht, hygiëne en prijs.",
  keywords: [
    "privé sportschool amsterdam",
    "boutique gym",
    "kleine sportschool",
    "privé gym amsterdam",
    "sportschool vergelijken",
  ],
  alternates: {
    canonical: "/nl/blog/prive-sportschool-vs-grote-sportschool",
    languages: {
      nl: "/nl/blog/prive-sportschool-vs-grote-sportschool",
      en: "/en/blog/private-gym-vs-big-box-gym",
    },
  },
};

export default function BlogPostPriveVsGrNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Privé sportschool vs grote sportschool", url: "/nl/blog/prive-sportschool-vs-grote-sportschool" },
        ]}
      />
      <BlogPostingJsonLd
        title="Privé sportschool vs grote sportschool: De verschillen"
        description="Vergelijk een privé sportschool met een grote keten op sfeer, apparatuur, persoonlijke aandacht en prijs."
        url="/nl/blog/prive-sportschool-vs-grote-sportschool"
        datePublished="2026-03-26"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Privé sportschool vs grote sportschool: De verschillen
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
                src="/images/studio/studio-overview.jpeg"
                alt="Overzicht van de SculptClub privé studio"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Als je op zoek bent naar een sportschool in Amsterdam, heb je grofweg twee opties: een grote keten
                met honderden leden of een kleinschalige privé studio. Beide hebben hun voor- en nadelen, maar de
                verschillen zijn groter dan je misschien denkt. In dit artikel vergelijken we de twee op de
                belangrijkste punten, zodat je een weloverwogen keuze kunt maken.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Sfeer en privacy</h2>
              <p>
                Bij een grote sportschool train je tussen tientallen tot honderden mensen. Dat kan motiverend zijn,
                maar ook intimiderend, zeker als je net begint. Een privé sportschool biedt een heel andere ervaring:
                je traint in een rustige omgeving, vaak met maximaal een paar mensen tegelijk. Er is geen drukte, geen
                wachtrijen en geen ongemakkelijke blikken. Je kunt volledig focussen op je training.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Apparatuur en beschikbaarheid</h2>
              <p>
                Grote sportscholen hebben veel apparatuur, maar die moet gedeeld worden met honderden leden. Tijdens
                piekuren is het niet ongewoon om 10 tot 15 minuten te wachten op een squat rack of bankdrukstation.
                Bij een privé studio is de apparatuur altijd beschikbaar. Bij SculptClub heb je toegang tot
                professioneel materiaal, van power racks en dumbbells tot kabelmachines, zonder ooit te hoeven wachten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Persoonlijke aandacht</h2>
              <p>
                In een grote sportschool ben je een nummer. De floormanagers zijn er vooral voor de veiligheid, niet
                voor persoonlijke begeleiding. Bij een privé studio krijg je veel meer aandacht. Trainers kennen je
                naam, je doelen en je beperkingen. Ze zien wanneer je techniek afdwaalt en sturen bij wanneer nodig.
                Die persoonlijke benadering maakt het verschil, zeker voor beginners en mensen die met blessures
                trainen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hygiëne en onderhoud</h2>
              <p>
                Met honderden leden per dag is het voor grote sportscholen een uitdaging om alles schoon te houden.
                Zweterige apparaten, volle kleedkamers en overvolle douches zijn helaas geen uitzondering. Een
                kleinschalige studio heeft minder slijtage en kan hogere hygiënestandaarden handhaven. Bij SculptClub
                wordt de studio na elke sessie schoongemaakt, zodat je altijd in een frisse ruimte traint.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Flexibiliteit en contract</h2>
              <p>
                Grote ketens werken vaak met jaarcontracten en opzegtermijnen van een tot drie maanden. Dat kan
                problematisch zijn als je situatie verandert. Privé studio&apos;s zijn vaak flexibeler. Bij SculptClub
                kun je altijd gratis opzeggen. Er is geen contract en geen opzegtermijn. Je betaalt voor wat je
                gebruikt, meer niet. Dat geeft rust en voorkomt dat je betaalt voor een sportschool die je niet
                meer bezoekt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Prijs</h2>
              <p>
                Hier zit het grootste verschil. Een grote sportschool is goedkoper, soms al vanaf €20 per maand. Een
                privé studio kost meer, maar je krijgt er ook meer voor terug: exclusieve toegang, persoonlijke
                aandacht, betere hygiëne en geen wachttijden. Bij SculptClub kun je Open Gym sessies boeken of
                kiezen voor personal training vanaf €45 per sessie. Het is een investering in kwaliteit boven
                kwantiteit.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Welke past bij jou?</h2>
              <p>
                Er is geen universeel antwoord. Als je vooral zo goedkoop mogelijk wilt sporten en het niet erg vindt
                om te wachten op apparaten, is een grote keten prima. Maar als je waarde hecht aan privacy,
                persoonlijke aandacht en een omgeving die je ondersteunt, dan is een privé sportschool de betere
                keuze. SculptClub combineert het beste van beide werelden: professionele apparatuur, flexibele
                opties en geen verplichtingen.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/open-gym-vs-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs sportschool</p></a>
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool zonder abonnement</p></a>
                <a href="/nl/blog/eerste-keer-sportschool-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste keer sportschool: tips</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Benieuwd naar het verschil?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis intake en ervaar zelf hoe het is om te trainen in een privé studio.
              </p>
              <ButtonLink href="/nl/boek" size="lg">
                Boek gratis intake
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

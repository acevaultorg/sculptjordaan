import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Amsterdam Zuid — SculptClub in de Jordaan",
  description:
    "Woon je in Amsterdam Zuid en zoek je een personal trainer? SculptClub in de Jordaan is 10 minuten fietsen. Gratis intake, geen abonnement.",
  keywords: [
    "personal trainer amsterdam zuid",
    "personal training amsterdam zuid",
    "sportschool amsterdam zuid",
    "fitness amsterdam zuid",
    "personal trainer de pijp",
    "gym amsterdam zuid",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam-zuid",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-zuid",
      en: "/en/blog/personal-trainer-amsterdam-south",
    },
  },
};

export default function PTAmsterdamZuidNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer Amsterdam Zuid", url: "/nl/blog/personal-trainer-amsterdam-zuid" }]} />
      <BlogPostingJsonLd title="Personal Trainer Amsterdam Zuid" description="SculptClub in de Jordaan: personal training op fietsafstand van Amsterdam Zuid." url="/nl/blog/personal-trainer-amsterdam-zuid" datePublished="2026-04-03" />
      <FaqJsonLd faqs={[
        { question: "Waarom naar de Jordaan voor personal training?", answer: "Amsterdam Zuid heeft veel sportscholen, maar weinig privé studios. Bij SculptClub train je in een volledig uitgeruste studio — alleen jij en je trainer. Geen wachttijden bij apparaten, geen drukte, geen blikken. De studio ligt aan de Egelantiersgracht, een rustige gracht in het hart van de Jordaan." },
        { question: "Wat maakt SculptClub anders?", answer: "Privé studio: Train alleen met je trainer — geen andere klanten tegelijk; Geen abonnement: Boek per sessie, annuleer altijd gratis; Gratis intake: De eerste kennismaking kost niets; Vijf trainers: Van krachttraining tot voeding tot fysiotherapie; Deurcode via WhatsApp: De avond ervoor, geen receptie nodig" },
        { question: "Hoe bereik je SculptClub vanuit Amsterdam Zuid?", answer: "Met de fiets: 10-15 minuten via Nassaukade of Singelgracht. Fietsparkeren direct voor de deur." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer Amsterdam Zuid</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/facade.jpeg" alt="SculptClub gevel aan de Egelantiersgracht" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Zuid — de buurt van het Vondelpark, de Beethovenstraat en de
                Zuidas. Een van de populairste woonwijken van de stad. Maar als het om
                personal training gaat, hoef je niet ver te zoeken. SculptClub in de Jordaan
                is 10 minuten fietsen en biedt iets dat je in Zuid niet snel vindt: een privé
                studio zonder abonnement.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom naar de Jordaan voor personal training?</h2>
              <p>
                Amsterdam Zuid heeft veel sportscholen, maar weinig privé studios. Bij
                SculptClub train je in een volledig uitgeruste studio — alleen jij en je
                trainer. Geen wachttijden bij apparaten, geen drukte, geen blikken. De
                studio ligt aan de <a href="/nl/locatie-uren" className="text-brand hover:underline">Egelantiersgracht</a>,
                een rustige gracht in het hart van de Jordaan.
              </p>
              <p>
                Vanuit het Vondelpark of de Overtoom fiets je via de Nassaukade in
                10 minuten naar de studio. Vanuit de Zuidas is het 15 minuten met de fiets
                of een snelle tramrit (lijn 2 of 12 richting Centraal, uitstappen bij
                Elandsgracht).
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat maakt SculptClub anders?</h2>
              <ul>
                <li><strong>Privé studio:</strong> Train alleen met je trainer — geen andere klanten tegelijk</li>
                <li><strong>Geen abonnement:</strong> Boek per sessie, annuleer altijd gratis</li>
                <li><strong>Gratis intake:</strong> De eerste kennismaking kost niets</li>
                <li><strong>Vijf trainers:</strong> Van krachttraining tot voeding tot fysiotherapie</li>
                <li><strong>Deurcode via WhatsApp:</strong> De avond ervoor, geen receptie nodig</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Onze trainers</h2>
              <p>
                Bij SculptClub kiezen trainers hun eigen specialisatie en tarieven. Je vindt
                op onze <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">trainerspagina</a> het
                volledige profiel van elke trainer. Personal training begint vanaf €45 per sessie.
              </p>
              <p>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a> werkt
                als fysiotherapeut BSc — ideaal als je naast training ook revalidatie of
                blessurepreventie zoekt. <a href="/nl/blog/voedingscoach-amsterdam" className="text-brand hover:underline">Eva</a> combineert
                krachttraining met voedingsadvies.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Ook Open Gym voor zelfstandig trainen</h2>
              <p>
                Wil je liever zelfstandig trainen? Met <a href="/nl/open-gym" className="text-brand hover:underline">Open
                Gym</a> heb je toegang tot dezelfde privé studio, zonder trainer. Vanaf €5,75
                per sessie, in cycli van 4 weken. Maximaal 3 personen tegelijk, dus altijd
                ruimte.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe bereik je SculptClub vanuit Amsterdam Zuid?</h2>
              <p>
                <strong>Met de fiets:</strong> 10-15 minuten via Nassaukade of Singelgracht.
                Fietsparkeren direct voor de deur.
              </p>
              <p>
                <strong>Met het OV:</strong> Tram 13 of 17 naar Elandsgracht, daarna 3 minuten
                lopen. Of tram 2/12 naar de Marnixstraat.
              </p>
              <p>
                <strong>Met de auto:</strong> Parkeergarage Marnix of betaald parkeren aan de
                gracht. Maar fietsen is sneller.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Gratis intake — geen verplichtingen</h2>
              <p>
                De eerste stap is een <a href="/nl/gratis-intake" className="text-brand hover:underline">gratis
                intake</a>. Je bespreekt je doelen, je trainer bekijkt je niveau en samen
                maak je een plan. Geen contract, geen abonnement. Bevalt het niet? Dan
                stop je, zonder kosten.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-de-pijp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer De Pijp</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/nl/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in de Jordaan</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Woon je in Zuid? Kom langs!</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake en ontdek onze studio in de Jordaan.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

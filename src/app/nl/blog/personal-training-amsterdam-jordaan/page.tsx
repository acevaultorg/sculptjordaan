import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training in Amsterdam Jordaan: Wat je moet weten — SculptClub",
  description:
    "Alles over personal training in de Jordaan, Amsterdam. Ontdek wat een privé studio biedt, wat je kunt verwachten van een trainer, en waarom de Jordaan de perfecte locatie is.",
  keywords: [
    "personal training amsterdam jordaan",
    "personal trainer jordaan",
    "privé personal training amsterdam",
    "personal training studio amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-training-amsterdam-jordaan",
    languages: {
      nl: "/nl/blog/personal-training-amsterdam-jordaan",
      en: "/en/blog/personal-training-amsterdam-jordaan",
    },
  },
};

export default function BlogPostNL1() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal Training in Amsterdam Jordaan", url: "/nl/blog/personal-training-amsterdam-jordaan" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Training in Amsterdam Jordaan: Wat je moet weten"
        description="Alles over personal training in de Jordaan, Amsterdam. Ontdek wat een privé studio biedt en waarom de Jordaan de perfecte locatie is."
        url="/nl/blog/personal-training-amsterdam-jordaan"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Training in Amsterdam Jordaan: Wat je moet weten
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
                src="/images/trainers/hamish.jpg"
                alt="Personal training in de Jordaan bij SculptClub Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De Jordaan is een van de meest gewilde buurten van Amsterdam. Schilderachtige grachten, gezellige cafes en een
                ontspannen sfeer maken het de ideale plek om te wonen en werken. Maar wist je dat de Jordaan ook steeds meer een
                hotspot wordt voor personal training? In dit artikel vertellen we je alles wat je moet weten over personal training
                in Amsterdam Jordaan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom personal training in de Jordaan?</h2>
              <p>
                De Jordaan biedt iets wat de meeste grote sportscholen in Amsterdam niet kunnen: rust en privacy. In plaats van
                drukke fitnesszalen met wachtrijen bij de apparaten, vind je hier boutique studio&apos;s waar je in alle rust kunt
                trainen. Dat maakt een enorm verschil voor je motivatie en resultaten.
              </p>
              <p>
                Bovendien is de Jordaan fantastisch bereikbaar. Of je nu met de fiets komt vanuit de Haarlemmerbuurt, lopend vanuit
                het centrum, of met tram 13 of 17 — je bent er binnen enkele minuten. Veel bewoners kiezen voor een personal
                trainer in de buurt, zodat ze geen reistijd kwijt zijn en makkelijker consistent kunnen trainen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat biedt een privé personal training studio?</h2>
              <p>
                Een privé studio verschilt fundamenteel van een grote sportschool. Bij een boutique studio zoals SculptClub
                in de Jordaan train je in een afgesloten ruimte met professionele apparatuur, zonder dat anderen je sessie
                verstoren. Dit geeft een aantal belangrijke voordelen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Volledige privacy</strong> — geen kijkers, geen wachttijden, geen afleiding.</li>
                <li><strong>Persoonlijke aandacht</strong> — je trainer focust 100% op jou.</li>
                <li><strong>Flexibele planning</strong> — boek sessies wanneer het jou uitkomt, vaak ook &apos;s ochtends vroeg of &apos;s avonds laat.</li>
                <li><strong>Professionele apparatuur</strong> — alles wat je nodig hebt voor een complete training, van power racks tot kabelmachines.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat kost personal training in de Jordaan?</h2>
              <p>
                De prijzen voor personal training in Amsterdam Jordaan variëren per trainer. Over het algemeen kun je rekenen
                op tarieven vanaf 45 euro per sessie, afhankelijk van de ervaring van de trainer, de duur van de
                sessie en eventuele pakketten. Bij SculptClub bepalen trainers hun eigen tarieven, en de eerste intake is
                altijd gratis. Zo kun je vrijblijvend kennismaken voordat je beslist.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe kies je de juiste personal trainer?</h2>
              <p>
                Het kiezen van een personal trainer is een persoonlijke keuze. Hier zijn een aantal tips om de juiste match
                te vinden:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Specialisatie</strong> — Wil je afvallen, sterker worden of herstellen van een blessure? Kies een trainer met de juiste achtergrond.</li>
                <li><strong>Klik</strong> — Een goede klik is essentieel. Plan daarom altijd een gratis kennismaking in.</li>
                <li><strong>Taal</strong> — In de Jordaan wonen veel expats. Controleer of de trainer je taal spreekt.</li>
                <li><strong>Beschikbaarheid</strong> — Zoek een trainer wiens rooster past bij jouw schema.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training zonder abonnement</h2>
              <p>
                Een groot voordeel van personal training in een boutique studio is de flexibiliteit. Bij SculptClub hoef je
                geen langlopend abonnement af te sluiten. Je boekt per sessie of per pakket, en je kunt op elk moment stoppen.
                Dit maakt het laagdrempelig om te starten en geeft je volledige controle over je budget.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Klaar om te beginnen?</h2>
              <p>
                Of je nu een complete beginner bent of al jarenlang traint — personal training in de Jordaan biedt een unieke
                ervaring. De combinatie van een prachtige locatie, privé studio en professionele begeleiding zorgt ervoor dat
                je het maximale uit elke sessie haalt. Plan je gratis intake en ontdek het zelf.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer in Amsterdam: zo vind je de beste match</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training in Amsterdam?</p></a>
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Plan je gratis intake</h3>
              <p className="text-muted-foreground mb-6">
                Ontdek welke trainer bij je past. De eerste kennismaking is altijd gratis.
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

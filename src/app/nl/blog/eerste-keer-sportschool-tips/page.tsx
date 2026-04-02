import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Eerste keer naar de sportschool: 7 tips voor beginners — SculptClub",
  description:
    "Zenuwachtig voor je eerste bezoek aan de sportschool? Deze 7 praktische tips helpen je om je voor te bereiden, zelfverzekerd binnen te stappen en direct een goede start te maken.",
  keywords: [
    "eerste keer sportschool",
    "sportschool beginners tips",
    "eerste keer fitness",
    "sportschool wat meenemen",
    "beginnen met fitness amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/eerste-keer-sportschool-tips",
    languages: {
      nl: "/nl/blog/eerste-keer-sportschool-tips",
      en: "/en/blog/first-time-gym-tips",
    },
  },
};

export default function EersteKeerSportschoolTips() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Eerste keer naar de sportschool: 7 tips", url: "/nl/blog/eerste-keer-sportschool-tips" },
        ]}
      />
      <BlogPostingJsonLd
        title="Eerste keer naar de sportschool: 7 tips voor beginners"
        description="7 praktische tips voor je eerste bezoek aan de sportschool. Bereid je voor, stap zelfverzekerd binnen en maak een goede start."
        url="/nl/blog/eerste-keer-sportschool-tips"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Eerste keer naar de sportschool: 7 tips voor beginners
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
                src="/images/studio/studio-interior-1.jpeg"
                alt="SculptClub studio interieur in de Jordaan, Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je eerste keer naar de sportschool kan spannend zijn. Misschien weet je niet wat je kunt verwachten,
                voel je je onzeker over de apparaten of vraag je je af of iedereen naar je kijkt. Laat we je
                geruststellen: iedereen is ooit voor het eerst geweest. Met deze 7 praktische tips bereid je je
                goed voor en stap je vol vertrouwen die sportschool binnen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Kies de juiste sportschool voor jou</h2>
              <p>
                Niet elke sportschool past bij iedereen. Een grote keten kan overweldigend zijn voor beginners —
                veel mensen, veel apparaten, weinig begeleiding. Overweeg een kleinere studio of boutique gym
                waar de sfeer persoonlijker is en er meer aandacht is voor nieuwe leden. Bij SculptClub in de
                Jordaan train je bijvoorbeeld in een privé studio, waardoor je in alle rust kunt wennen zonder
                dat je je bekeken voelt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Draag comfortabele sportkleding</h2>
              <p>
                Je hoeft geen dure sportkleding te kopen. Draag wat prettig zit en waar je vrij in kunt bewegen.
                Een T-shirt, sportbroek en sportschoenen met goede demping zijn voldoende. Neem ook een handdoek
                mee en een fles water. De meeste sportscholen hebben kluisjes, maar check dat van tevoren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Begin met een plan — niet zomaar wat doen</h2>
              <p>
                De grootste fout die beginners maken is zonder plan naar de sportschool gaan. Je loopt rond, probeert
                willekeurig wat apparaten en gaat gefrustreerd naar huis. Zoek van tevoren een simpel beginners-programma
                op, of boek een intake bij een trainer die je een schema op maat kan geven. Een plan geeft richting
                en voorkomt dat je kostbare tijd verspilt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Start licht en focus op techniek</h2>
              <p>
                Het is verleidelijk om meteen zwaar te willen trainen, maar dit is de snelste weg naar een blessure.
                Begin met lichte gewichten en richt je op de juiste techniek. Het maakt niet uit hoeveel kilo je
                optilt — het gaat erom dat je de beweging correct uitvoert. Een goede basis nu voorkomt problemen
                later en zorgt ervoor dat je sneller vooruitgang boekt.
              </p>
              <p>
                Vraag niet om een rondleiding of hulp bij een oefening. Elke goede sportschool heeft personeel
                dat je graag helpt. Bij SculptClub bieden we altijd een gratis kennismaking aan, zodat een
                ervaren trainer je de apparatuur laat zien en een programma op maat maakt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Maak je geen zorgen over wat anderen denken</h2>
              <p>
                Dit is misschien de belangrijkste tip. De waarheid is: niemand let op jou. Iedereen in de sportschool
                is bezig met zijn of haar eigen training. Die gespierde man in de hoek? Die was ooit ook een nerveuze
                beginner. En als je toch liever in alle privacy traint, is een privé studio een uitstekende optie.
                Geen kijkers, geen oordeel — alleen jij en je training.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">6. Wees consistent, niet perfect</h2>
              <p>
                Je hoeft niet vijf keer per week te sporten om resultaat te zien. Begin met twee keer per week en
                houd dat vol. Consistentie is veel belangrijker dan intensiteit, zeker in het begin. Na een paar
                weken wordt het een gewoonte en kun je langzaam opbouwen. Geef jezelf de tijd — resultaten komen
                niet van de ene op de andere dag, maar ze komen wel als je blijft trainen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">7. Overweeg een personal trainer voor de eerste weken</h2>
              <p>
                Als je echt een vliegende start wilt maken, overweeg dan om de eerste weken een personal trainer in
                te schakelen. Een trainer leert je de basisoefeningen, maakt een programma op maat en zorgt ervoor
                dat je techniek vanaf het begin goed is. Na een paar sessies kun je zelfstandig verder, gewapend
                met de kennis en het vertrouwen om effectief te trainen.
              </p>
              <p>
                Bij SculptClub is de eerste kennismaking altijd gratis. Zo kun je vrijblijvend ontdekken of personal
                training iets voor je is, zonder dat je meteen ergens aan vastzit.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Jouw eerste stap begint hier</h2>
              <p>
                Het moeilijkste deel is de deur opendoen en naar binnen stappen. Alles daarna wordt makkelijker.
                Of je nu kiest voor een grote sportschool, een Open Gym of personal training — het belangrijkste
                is dat je begint. Je toekomstige zelf zal je dankbaar zijn.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Consistent blijven met sporten</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Liever begeleid starten?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis kennismaking bij een van onze trainers. Wij helpen je op weg — op jouw tempo.
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

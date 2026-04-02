import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Hoe blijf je consistent met sporten? 7 bewezen tips — SculptClub",
  description:
    "Moeite om vol te houden? Ontdek 7 praktische tips om consistent te blijven met sporten. Van routine opbouwen tot de juiste sportschool kiezen.",
  keywords: [
    "consistent sporten",
    "trainingsroutine",
    "motivatie fitness",
    "sporten volhouden",
    "sportgewoonte opbouwen",
  ],
  alternates: {
    canonical: "/nl/blog/consistent-blijven-met-sporten",
    languages: {
      nl: "/nl/blog/consistent-blijven-met-sporten",
      en: "/en/blog/stay-consistent-exercise",
    },
  },
};

export default function BlogPostConsistentNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Consistent blijven met sporten", url: "/nl/blog/consistent-blijven-met-sporten" },
        ]}
      />
      <BlogPostingJsonLd
        title="Hoe blijf je consistent met sporten? 7 bewezen tips"
        description="Ontdek 7 praktische tips om consistent te blijven met sporten en een duurzame trainingsroutine op te bouwen."
        url="/nl/blog/consistent-blijven-met-sporten"
        datePublished="2026-03-26"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Hoe blijf je consistent met sporten? 7 bewezen tips
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
                src="/images/studio/studio-interior-1.jpeg"
                alt="Trainingsruimte bij SculptClub in de Jordaan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je kent het vast: vol enthousiasme begin je met sporten, maar na een paar weken zakt de motivatie weg.
                Je slaat een training over, dan nog een, en voor je het weet is je sportschoolbezoek weer verleden tijd.
                Je bent niet de enige. Onderzoek laat zien dat bijna de helft van alle nieuwe sporters binnen zes maanden
                stopt. Het goede nieuws? Met de juiste aanpak kun je van sporten een vaste gewoonte maken. Hier zijn
                zeven bewezen tips.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Maak het makkelijk om te beginnen</h2>
              <p>
                De grootste drempel is vaak de stap naar de sportschool. Hoe meer obstakels je moet overwinnen, hoe
                sneller je afhaakt. Kies daarom een studio die dicht bij je huis of werk ligt. Leg je sportkleding de
                avond ervoor klaar. En kies een sportschool waar je snel naar binnen kunt, zonder gedoe met pasjes of
                wachtrijen. Bij SculptClub krijg je de avond ervoor een deurcode via WhatsApp, zodat je op je eigen
                tempo kunt binnenlopen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Plan vaste momenten in je agenda</h2>
              <p>
                Behandel je training als een afspraak die je niet afzegt. Blokkeer twee tot drie vaste momenten per week
                in je agenda. Na een paar weken wordt het vanzelf routine. Het maakt niet uit welke dagen je kiest,
                als je maar consequent bent. Ochtend, middag of avond: kies het moment dat het beste bij je leven past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Begin klein en bouw langzaam op</h2>
              <p>
                Een van de grootste fouten is te ambitieus beginnen. Vijf keer per week sporten klinkt goed, maar is
                voor de meeste beginners niet vol te houden. Begin liever met twee sessies per week van 45 minuten.
                Als dat drie weken goed gaat, voeg je eventueel een derde sessie toe. Progressie moet geleidelijk zijn,
                anders raak je geblesseerd of opgebrand.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Zoek een vorm van training die je leuk vindt</h2>
              <p>
                Het heeft geen zin om jezelf te dwingen tot hardlopen als je er een hekel aan hebt. Probeer
                verschillende trainingsvormen uit totdat je iets vindt dat bij je past. Krachttraining, functioneel
                trainen, boksen of een combinatie: als je het leuk vindt, hoef je jezelf niet te motiveren. Bij een
                gratis intake kun je samen met een trainer ontdekken welke vorm het beste bij je past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Kies een omgeving zonder drempels</h2>
              <p>
                Een drukke sportschool waar je moet wachten op apparaten werkt demotiverend. Veel mensen haken juist
                af omdat de sfeer intimiderend is of omdat het te druk is. Een privé studio zoals SculptClub biedt
                een rustige omgeving waar je op je gemak kunt trainen. Geen wachtrijen, geen drukte, geen
                ongemakkelijke blikken. En het mooie? Geen contract of lange opzegtermijn. Je kunt altijd gratis
                opzeggen, dus je zit nergens aan vast.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">6. Houd je voortgang bij</h2>
              <p>
                Resultaten zien is een van de krachtigste motivatoren. Houd bij wat je traint, hoeveel gewicht je
                gebruikt en hoe je je voelt na elke sessie. Na een paar weken kun je terugkijken en zien hoeveel je
                vooruit bent gegaan. Dit kan zo simpel zijn als een notitieboekje of een app op je telefoon. De
                kleine verbeteringen die je elke week maakt, stapelen zich op tot grote resultaten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">7. Investeer in begeleiding</h2>
              <p>
                Een personal trainer is niet alleen voor topsporters. Juist als beginner maakt een goede trainer het
                verschil tussen afhaken en doorgaan. Een trainer houdt je verantwoordelijk, past je programma aan
                wanneer nodig en zorgt ervoor dat je op de juiste manier traint. Bij SculptClub kun je personal
                training boeken vanaf €45 per sessie, of zelfstandig trainen via Open Gym.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Consistentie gaat niet over perfectie</h2>
              <p>
                Iedereen mist weleens een training. Dat is normaal en niet het einde van de wereld. Consistentie
                betekent niet dat je nooit een dag overslaat, maar dat je steeds weer opnieuw begint. De perfecte
                week bestaat niet. Wat wel bestaat is een routine die bij je past, een omgeving die je ondersteunt
                en een aanpak die realistisch is. Begin daar vandaag nog mee.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/afvallen-met-krachttraining" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Afvallen met krachttraining</p></a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om een routine op te bouwen?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis intake en ontdek welke trainingsaanpak bij je past.
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

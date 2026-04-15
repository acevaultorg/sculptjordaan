import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Training voor Afvallen in Amsterdam — SculptClub",
  description:
    "Wil je afvallen met begeleiding van een personal trainer in Amsterdam? Ontdek waarom krachttraining effectiever is dan cardio en hoe je begint.",
  keywords: [
    "personal training afvallen amsterdam",
    "afvallen personal trainer",
    "personal trainer afvallen",
    "afvallen met begeleiding amsterdam",
    "krachttraining afvallen amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-training-afvallen-amsterdam",
    languages: {
      nl: "/nl/blog/personal-training-afvallen-amsterdam",
      en: "/en/blog/personal-training-weight-loss-amsterdam",
    },
  },
};

export default function PersonalTrainingAfvallenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal training afvallen", url: "/nl/blog/personal-training-afvallen-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Training voor Afvallen in Amsterdam"
        description="Waarom krachttraining met een personal trainer de meest effectieve manier is om af te vallen."
        url="/nl/blog/personal-training-afvallen-amsterdam"
        datePublished="2026-04-02"
      />
      <FaqJsonLd faqs={[
        { question: "Wat doet een personal trainer voor je?", answer: "Een personal trainer maakt het verschil op drie vlakken:" },
        { question: "Wat kost personal training voor afvallen?", answer: "Personal training bij SculptClub begint vanaf €45 per sessie. Elke trainer bepaalt zelf zijn tarief — wij rekenen 0% commissie. De eerste kennismaking is altijd gratis. Tijdens die intake bespreek je je doelen, je trainer bekijkt je huidige niveau en samen bepalen jullie het plan. Geen verplichtingen vooraf." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Training voor Afvallen in Amsterdam
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
                src="/images/studio/dumbbells-floor.jpeg"
                alt="Dumbbells op de vloer van SculptClub studio"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je wilt afvallen. Je hebt al van alles geprobeerd — diëten, hardlopen, calorieën tellen —
                maar de resultaten blijven uit of ze zijn tijdelijk. Je bent niet de enige. Veel mensen
                in Amsterdam zoeken naar een effectievere aanpak. Steeds meer kiezen voor personal training
                gericht op afvallen. Niet omdat het makkelijker is, maar omdat het werkt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom krachttraining beter werkt dan cardio</h2>
              <p>
                De meeste mensen denken aan hardlopen of fietsen als ze willen afvallen. Cardio verbrandt
                calorieën, maar zodra je stopt, stopt ook de verbranding. Krachttraining werkt anders.
                Door spiermassa op te bouwen verhoog je je basaalmetabolisme — je lichaam verbrandt meer
                calorieën in rust. Onderzoek toont aan dat een combinatie van krachttraining en een
                gezond voedingspatroon de meest effectieve strategie is voor duurzaam gewichtsverlies.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat doet een personal trainer voor je?</h2>
              <p>
                Een personal trainer maakt het verschil op drie vlakken:
              </p>
              <ul>
                <li><strong>Techniek:</strong> Je leert oefeningen correct uitvoeren. Geen blessures, maximaal resultaat.</li>
                <li><strong>Programmering:</strong> Je krijgt een plan dat past bij jouw niveau, doel en beschikbare tijd.</li>
                <li><strong>Verantwoording:</strong> Iemand die je verwacht. Dat alleen al maakt het verschil tussen wel of niet gaan.</li>
              </ul>
              <p>
                Een goede trainer past je programma elke paar weken aan op basis van je voortgang. Dat
                voorkomt plateaus en houdt je gemotiveerd.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voeding en training: de combinatie</h2>
              <p>
                Afvallen doe je in de keuken, spieren bouw je in de gym — het is een cliché, maar het
                klopt. Een trainer kan je richting geven, maar als je voeding niet op orde is, zal het
                resultaat achterblijven. Bij SculptClub is Eva gediplomeerd diëtist én personal trainer.
                Ze combineert krachttraining met persoonlijk voedingsadvies. Dat is uniek in Amsterdam.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat kost personal training voor afvallen?</h2>
              <p>
                Personal training bij SculptClub <Link href="/nl/prijzen" className="text-brand underline-offset-2 hover:underline">begint vanaf €45 per sessie</Link>. Elke trainer bepaalt zelf
                zijn tarief — wij rekenen 0% commissie. De eerste kennismaking is altijd gratis. Tijdens
                die intake bespreek je je doelen, je trainer bekijkt je huidige niveau en samen bepalen
                jullie het plan. Geen verplichtingen vooraf.
              </p>
              <p>
                Reken op 2 tot 3 sessies per week voor optimaal resultaat. Na 8 tot 12 weken zien de
                meeste mensen meetbaar verschil in lichaamssamenstelling — minder vet, meer spiermassa,
                meer energie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé studio: geen drukke sportschool</h2>
              <p>
                Veel mensen die willen afvallen voelen zich oncomfortabel in een grote sportschool. De
                blikken, de drukte, het wachten op apparaten. Bij SculptClub train je in een privé studio
                aan de gracht in de Jordaan. Alleen jij en je trainer. Geen publiek, geen afleiding. Dat
                maakt het voor veel klanten het verschil — ze durven harder te werken en voelen zich
                veilig om te beginnen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Begin vandaag</h2>
              <p>
                Je hoeft niet te wachten tot maandag, tot januari of tot je &quot;klaar&quot; bent. Boek een
                <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline"> gratis intake</Link> met een van onze trainers. Je bespreekt je doel, je trainer maakt een plan
                en je begint. Geen drempel, geen abonnement, geen excuses.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer in Amsterdam: zo vind je de beste match</p></a>
                <a href="/nl/blog/afvallen-met-krachttraining" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Afvallen met krachttraining</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om te beginnen?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een gratis intake met een trainer die gespecialiseerd is in afvallen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                  Bekijk trainers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hoi%2C%20ik%20wil%20graag%20afvallen%20met%20begeleiding.%20Kunnen%20jullie%20me%20helpen%3F"
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

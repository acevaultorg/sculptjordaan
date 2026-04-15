import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Wat kost personal training in Amsterdam? Prijzen & uitleg — SculptClub",
  description:
    "Wat kost personal training in Amsterdam? Ontdek de gemiddelde prijzen, wat de kosten bepaalt en waarom een boutique studio als SculptClub vanaf €45 per sessie uitstekende waarde biedt.",
  keywords: [
    "personal training kosten amsterdam",
    "personal trainer prijs amsterdam",
    "wat kost personal training",
    "personal training tarieven amsterdam",
    "personal training amsterdam prijs",
  ],
  alternates: {
    canonical: "/nl/blog/wat-kost-personal-training-amsterdam",
    languages: {
      nl: "/nl/blog/wat-kost-personal-training-amsterdam",
      en: "/en/blog/personal-training-cost-amsterdam",
    },
  },
};

export default function WatKostPersonalTraining() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Wat kost personal training in Amsterdam?", url: "/nl/blog/wat-kost-personal-training-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Wat kost personal training in Amsterdam?"
        description="Ontdek de gemiddelde prijzen voor personal training in Amsterdam, wat de kosten bepaalt en waarom SculptClub uitstekende waarde biedt."
        url="/nl/blog/wat-kost-personal-training-amsterdam"
        datePublished="2026-03-24"
      />
      <FaqJsonLd faqs={[
        { question: "Wat bepaalt de prijs van personal training?", answer: "De prijs van een personal training sessie hangt af van meerdere factoren. Dit zijn de belangrijkste:" },
        { question: "Waarom vragen boutique studios meer?", answer: "Een boutique studio biedt iets wat een grote sportschool simpelweg niet kan: volledige privacy, persoonlijke aandacht en een premium ervaring. Je deelt de ruimte niet met tientallen andere sporters. De apparatuur is van hoge kwaliteit en wordt exclusief voor jouw sessie gebruikt. De sfeer is rustig en gefocust." },
        { question: "Is personal training de investering waard?", answer: "Personal training is een investering in jezelf. Studies tonen keer op keer aan dat mensen met een personal trainer sneller resultaat boeken, minder blessures oplopen en langer gemotiveerd blijven. Vergelijk het met zelf een taal leren versus een privéleraar inhuren — het kan allebei, maar met begeleiding boek je sneller en beter resultaat." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Wat kost personal training in Amsterdam?
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
                src="/images/trainers/alex.jpg"
                alt="Personal training sessie bij SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je overweegt personal training, maar vraagt je af wat het kost. Dat is begrijpelijk — de prijzen in
                Amsterdam lopen flink uiteen. In dit artikel zetten we de gemiddelde tarieven op een rij, leggen we uit
                wat de kosten bepaalt en laten we zien waarom een boutique studio als SculptClub in de Jordaan
                uitstekende waarde biedt voor je investering.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Gemiddelde prijzen voor personal training in Amsterdam</h2>
              <p>
                De kosten voor personal training in Amsterdam variëren sterk, afhankelijk van de trainer, locatie en het
                type studio. Over het algemeen kun je de volgende prijsranges verwachten:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Budget trainers (freelance, in een park of bij jou thuis):</strong> €30 – €50 per sessie</li>
                <li><strong>Middenklasse (grote sportschool of gedeelde studio):</strong> €50 – €80 per sessie</li>
                <li><strong>Premium (privé boutique studio):</strong> €70 – €120 per sessie</li>
                <li><strong>Top-tier (bekende trainers, celebrities):</strong> €120 – €200+ per sessie</li>
              </ul>
              <p>
                Bij SculptClub beginnen de <Link href="/nl/prijzen" className="text-brand underline-offset-2 hover:underline">tarieven vanaf €45 per sessie</Link>, afhankelijk van welke trainer je kiest. Elke
                trainer bepaalt zelf zijn of haar tarief, zodat je altijd de beste match kunt vinden voor je budget en
                doelen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat bepaalt de prijs van personal training?</h2>
              <p>
                De prijs van een personal training sessie hangt af van meerdere factoren. Dit zijn de belangrijkste:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">1. Ervaring en specialisatie van de trainer</h3>
              <p>
                Een trainer met jarenlange ervaring, meerdere certificeringen of een specialisatie in revalidatie of
                sportprestaties zal doorgaans meer vragen dan een pas afgestudeerde trainer. Dit is vergelijkbaar met
                elk vakgebied: expertise kost meer, maar levert ook sneller en betere resultaten op.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">2. Locatie en type studio</h3>
              <p>
                Training in een privé boutique studio kost meer dan een sessie in een druk fitnesscentrum. Bij een
                privé studio zoals SculptClub train je zonder afleiding, met professionele apparatuur die helemaal voor
                jou beschikbaar is. Geen wachtrijen, geen kijkers — alleen jij en je trainer.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">3. Sessieduur</h3>
              <p>
                De meeste personal training sessies duren 60 minuten, maar sommige trainers bieden ook 45- of
                90-minuten sessies aan. Langere sessies zijn per minuut vaak voordeliger, maar kosten uiteraard
                meer per afspraak.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">4. Pakketten en abonnementen</h3>
              <p>
                Bijna alle trainers bieden korting wanneer je meerdere sessies tegelijk boekt. Een pakket van 10 sessies
                is doorgaans 10 tot 20 procent voordeliger dan losse sessies. Bij SculptClub kun je per sessie boeken
                of kiezen voor een pakket — zonder langlopende verplichtingen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom vragen boutique studios meer?</h2>
              <p>
                Een boutique studio biedt iets wat een grote sportschool simpelweg niet kan: volledige privacy, persoonlijke
                aandacht en een premium ervaring. Je deelt de ruimte niet met tientallen andere sporters. De apparatuur
                is van hoge kwaliteit en wordt exclusief voor jouw sessie gebruikt. De sfeer is rustig en gefocust.
              </p>
              <p>
                Het verschil merk je direct. Zonder afleiding kun je je volledig richten op je training. Je trainer
                hoeft geen rekening te houden met andere klanten in de ruimte. Het resultaat: betere begeleiding,
                snellere voortgang en een veel prettigere trainingservaring.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Is personal training de investering waard?</h2>
              <p>
                Personal training is een investering in jezelf. Studies tonen keer op keer aan dat mensen met een
                personal trainer sneller resultaat boeken, minder blessures oplopen en langer gemotiveerd blijven.
                Vergelijk het met zelf een taal leren versus een privéleraar inhuren — het kan allebei, maar met
                begeleiding boek je sneller en beter resultaat.
              </p>
              <p>
                Reken even mee: een sportschoolabonnement van €50 per maand klinkt goedkoop, maar als je na drie
                maanden stopt omdat je geen resultaat ziet, heb je €150 uitgegeven zonder iets bereikt te hebben.
                Twee maanden personal training kosten meer, maar leveren concrete resultaten, kennis en gewoontes
                die je de rest van je leven meeneemt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training bij SculptClub</h2>
              <p>
                Bij SculptClub in de Jordaan betaal je vanaf €45 per sessie voor training in een privé studio met
                professionele apparatuur. Onze trainers hebben elk hun eigen specialisatie — van krachttraining en
                afvallen tot revalidatie en sportprestaties. De eerste <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline">kennismaking is altijd gratis</Link>, zodat je
                vrijblijvend kunt ontdekken welke trainer bij je past.
              </p>
              <p>
                Geen abonnement, geen inschrijfkosten, geen kleine lettertjes. Je boekt per sessie of per pakket
                en hebt volledige controle over je budget. Dat is waar wij in geloven: fitness op jouw voorwaarden.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer in Amsterdam: zo vind je de beste match</p></a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
                <a href="/nl/blog/gratis-intake-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gratis intake personal trainer</p></a>
                <a href="/nl/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training Amsterdam Jordaan</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Benieuwd naar onze tarieven?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een gratis kennismaking en ontdek welke trainer bij je past. Vrijblijvend en zonder verplichtingen.
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

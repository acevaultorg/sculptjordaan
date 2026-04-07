import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Zakelijk Personal Training Amsterdam — SculptClub",
  description:
    "Personal training voor drukke professionals en teams in Amsterdam. Privé studio in de Jordaan, dagelijks 06:30–22:00, factuur op bedrijfsnaam mogelijk.",
  keywords: [
    "zakelijk personal trainer amsterdam",
    "personal training zakelijk amsterdam",
    "corporate personal training amsterdam",
    "executive personal trainer amsterdam",
    "personal training zakelijk aftrekbaar",
  ],
  alternates: {
    canonical: "/nl/blog/zakelijk-personal-training-amsterdam",
    languages: {
      nl: "/nl/blog/zakelijk-personal-training-amsterdam",
      en: "/en/blog/corporate-personal-training-amsterdam",
    },
  },
  openGraph: {
    title: "Zakelijk Personal Training Amsterdam — SculptClub",
    description:
      "Discrete privé studio in de Jordaan voor drukke professionals, executives en kleine teams. Flexibele tijden, factuur mogelijk.",
    url: "/nl/blog/zakelijk-personal-training-amsterdam",
    type: "article",
  },
};

const faqs = [
  {
    question: "Kan ik personal training zakelijk afnemen en op factuur betalen?",
    answer:
      "Voor studio-huur leveren we standaard een factuur. Voor personal training rekent elke trainer zelf met je af; veel trainers kunnen een factuur op bedrijfsnaam sturen. Stem dit af tijdens je gratis intake.",
  },
  {
    question: "Is personal training fiscaal aftrekbaar voor mijn onderneming?",
    answer:
      "Dat hangt af van je situatie en het type onderneming. Wij geven geen fiscaal advies — overleg dit met je eigen accountant. We kunnen wel zorgen dat de factuur correct en specifiek is, zodat je accountant er goed mee kan werken.",
  },
  {
    question: "Hebben jullie tijden voor mensen met een drukke agenda?",
    answer:
      "Ja. De studio is dagelijks geopend van 06:30 tot 22:00, ook in het weekend. Vroege ochtendsessies vóór een dag in Zuidas of late avondsessies na werk in Centrum zijn beide mogelijk.",
  },
  {
    question: "Kan ik met collega's of een klein team trainen?",
    answer:
      "Ja. Verschillende trainers bieden small-group sessies aan voor 2 tot 4 personen. Voor teamwellness, een kennismakingsprogramma of incidentele off-sites kunnen we de hele studio reserveren.",
  },
  {
    question: "Hoe discreet is de studio?",
    answer:
      "Je traint één-op-één in een privé ruimte zonder pers, ramen op straatniveau of medeklanten. Geen wachtrijen, geen camera's. Voor executives die liever niet gefotografeerd willen worden in een open gym is dat vaak doorslaggevend.",
  },
  {
    question: "Hoever zit jullie van de Zuidas en het centrum?",
    answer:
      "Vanaf de Zuidas ben je in 15 tot 20 minuten met de auto op de Egelantiersgracht, of in 25 minuten met metro 52 plus 5 minuten lopen vanaf Rokin. Vanaf het Damrak en Leidseplein is het 5 tot 10 minuten fietsen.",
  },
];

export default function ZakelijkPersonalTrainingAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Zakelijk personal training Amsterdam", url: "/nl/blog/zakelijk-personal-training-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Zakelijk Personal Training Amsterdam"
        description="Personal training voor drukke professionals en teams in Amsterdam. Discrete privé studio, flexibele tijden."
        url="/nl/blog/zakelijk-personal-training-amsterdam"
        datePublished="2026-04-08"
        dateModified="2026-04-08"
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Zakelijk Personal Training in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />8 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub privé studio voor zakelijke personal training in Amsterdam" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Een vol agenda. Klantvergaderingen die uitlopen. Een vlucht morgenochtend. Voor drukke
                professionals in Amsterdam is sporten zelden het probleem — tijd vinden en het
                vólhouden wel. Een sportschool met wachttijd op apparaten, omkleden tussen tachtig
                anderen en een trainer die je elke week opnieuw moet uitleggen waar je aan werkt: dat
                kost meer energie dan het oplevert. SculptClub biedt een ander model: één privé studio
                in de Jordaan, vaste trainers, geen abonnement, en een agenda die past bij hoe een
                executive werkt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een privé studio voor zakelijke training werkt</h2>
              <p>
                Het verschil tussen sporten en consistent sporten zit zelden in motivatie. Het zit in
                wrijving. Hoe meer stappen tussen jou en je workout, hoe sneller een drukke week hem
                eruit drukt. Een privé studio elimineert de vrijwel alle wrijving: geen wachten, geen
                drukte, geen kleine talk, geen heroriëntatie elke sessie. Je komt binnen, je trainer
                staat klaar, je werkplan staat al klaar, en in 60 minuten heb je een complete training
                gehad. Voor mensen met een agenda in 30-minutenblokken is dat het verschil tussen wel
                of niet komen opdagen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Flexibele tijden voor drukke agenda&apos;s</h2>
              <p>
                De studio is dagelijks geopend van 06:30 tot 22:00. Dat klinkt logisch, maar in de
                praktijk maakt het uit. Voor executives in Zuidas die om 08:00 hun eerste call hebben,
                betekent het dat een sessie om 06:45 reëel is — douche, koffie, en op tijd op kantoor.
                Voor consultants die om 19:00 het kantoor uitlopen, is een sessie om 19:30 of 20:00
                geen uitzondering. We boeken niet in vaste blokken; jij en je trainer bepalen samen
                wat past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Discretie en privacy</h2>
              <p>
                Je traint één-op-één in een gesloten studio. Geen ramen op straatniveau, geen
                medeklanten, geen camera&apos;s gericht op de vloer. Voor publieke figuren, executives en
                mensen die liever niet gefotografeerd willen worden tijdens het zweten is dat vaak
                doorslaggevend. Het is geen luxe — het is praktisch. Je kunt vol gas trainen zonder
                bezig te zijn met wie er meekijkt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Factuur op bedrijfsnaam en boekhouding</h2>
              <p>
                Voor studio-huur leveren we standaard een factuur. Voor personal training-sessies werkt
                het anders: elke trainer is zelfstandig en stuurt zijn eigen factuur. Veel trainers
                kunnen die op bedrijfsnaam zetten met je BTW-nummer en een specifieke omschrijving. Of
                personal training fiscaal aftrekbaar is voor jouw onderneming hangt af van je
                rechtsvorm, je situatie en de aard van de uitgave — overleg dat met je eigen accountant.
                Wat wij wel doen: zorgen dat de factuur correct en herleidbaar is, zodat je accountant
                er goed mee kan werken.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Small-group voor teams en collega&apos;s</h2>
              <p>
                Niet iedereen wil alleen trainen. Verschillende trainers bieden small-group sessies aan
                voor 2 tot 4 personen — handig voor collega&apos;s die samen willen sporten of een vast
                duo dat de drempel liever deelt. Voor bedrijven die hun team een wellness-traject
                willen aanbieden kunnen we ook periodiek de hele studio reserveren, eventueel in
                combinatie met een kennismakingsblok over kracht, voeding of houding. Dat laatste is
                geen standaardpakket — bel of mail ons en we maken iets passend.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Locatie: waarom de Jordaan voor centrum- en Zuidas-professionals werkt</h2>
              <p>
                De Egelantiersgracht ligt strategisch. Vanaf het Damrak ben je er in 5 minuten op de
                fiets. Vanaf Leidseplein in 7. Vanaf de Zuidas met metro 52 sta je in 15 minuten op
                Rokin, daarna 5 minuten lopen of fietsen. Voor wie tussen vergaderingen door wil
                trainen, of na het werk fietsend langs de grachten naar huis wil, is de ligging een
                voordeel dat een sportschool aan de ringweg nooit kan bieden. En tijdens de sessie zit
                je in een rustige zijstraat, niet in een winkelcentrum.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Veelgestelde vragen</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/vind-jouw-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vind jouw personal trainer</p></a>
                <a href="/nl/gratis-intake" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Plan een gratis intake</p></a>
                <a href="/nl/studio-huren" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren met factuur</p></a>
                <a href="/nl/prijzen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Bekijk onze prijzen</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Kennismaken zonder verplichting</h3>
              <p className="text-muted-foreground mb-6">Boek een gratis intake bij een van onze vijf trainers. Pas daarna beslis je of het past.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/nl/studio-huren" size="lg" variant="outline">Studio huren</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

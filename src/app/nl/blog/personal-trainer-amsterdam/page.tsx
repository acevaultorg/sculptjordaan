import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer in Amsterdam: Zo vind je de beste match — SculptClub",
  description:
    "Hoe vind je de juiste personal trainer in Amsterdam? Ontdek waar je op moet letten, welke rode vlaggen je moet vermijden en waarom een gratis intake het verschil maakt.",
  keywords: [
    "personal trainer amsterdam",
    "personal trainer zoeken amsterdam",
    "beste personal trainer amsterdam",
    "personal training amsterdam",
    "personal trainer vinden",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam",
      en: "/en/blog/personal-trainer-amsterdam",
    },
  },
};

export default function PersonalTrainerAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal Trainer in Amsterdam", url: "/nl/blog/personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer in Amsterdam: Zo vind je de beste match"
        description="Hoe vind je de juiste personal trainer in Amsterdam? Ontdek waar je op moet letten en waarom een gratis intake het verschil maakt."
        url="/nl/blog/personal-trainer-amsterdam"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer in Amsterdam: Zo vind je de beste match
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
                alt="Personal trainer in Amsterdam bij SculptClub"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam heeft honderden personal trainers. Van freelancers in het Vondelpark tot coaches in grote
                sportscholen. Maar hoe vind je de trainer die echt bij jou past? De juiste match maakt het verschil
                tussen resultaten boeken en na drie weken afhaken. In dit artikel leggen we uit waar je op moet letten,
                welke rode vlaggen je moet vermijden en hoe je de beste keuze maakt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom de juiste match cruciaal is</h2>
              <p>
                Personal training is persoonlijk. Je deelt je doelen, onzekerheden en fysieke grenzen met iemand die
                je begeleidt. Onderzoek laat zien dat de relatie tussen trainer en client een van de belangrijkste
                factoren is voor langetermijnresultaten. Een trainer die technisch uitstekend is maar niet bij je
                persoonlijkheid past, levert minder op dan een trainer met wie je echt klikt.
              </p>
              <p>
                Dat betekent niet dat kwalificaties er niet toe doen. Juist de combinatie van vakkennis en persoonlijke
                klik zorgt voor de beste resultaten. Zoek daarom altijd naar beide.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waar moet je op letten?</h2>
              <p>
                Bij het kiezen van een personal trainer in Amsterdam zijn er een aantal belangrijke criteria:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Opleiding en certificeringen</strong> — Een goede trainer heeft minimaal een erkende PT-opleiding. Kijk naar certificeringen van NASM, ACE of vergelijkbare instituten.</li>
                <li><strong>Specialisatie</strong> — Wil je afvallen, spiermassa opbouwen, revalideren na een blessure of gewoon fitter worden? Kies een trainer met ervaring in jouw specifieke doel.</li>
                <li><strong>Ervaring</strong> — Hoeveel jaar ervaring heeft de trainer? Heeft hij of zij gewerkt met mensen in jouw situatie?</li>
                <li><strong>Communicatiestijl</strong> — Sommige mensen willen een strenge coach, anderen een motiverende partner. Bepaal wat bij jou werkt.</li>
                <li><strong>Locatie en bereikbaarheid</strong> — Een trainer dichtbij huis of werk maakt het makkelijker om consistent te blijven.</li>
                <li><strong>Reviews en aanbevelingen</strong> — Lees Google reviews en vraag om ervaringen van bestaande klanten.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Rode vlaggen: hier moet je voor oppassen</h2>
              <p>
                Niet elke personal trainer in Amsterdam levert kwaliteit. Let op deze waarschuwingssignalen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Geen intake of assessment</strong> — Een serieuze trainer begint altijd met een intake om je doelen, medische achtergrond en fitnessniveau te bespreken.</li>
                <li><strong>Lange contracten zonder proefperiode</strong> — Wees voorzichtig met trainers die direct een contract van 6 of 12 maanden eisen zonder dat je eerst kunt proberen.</li>
                <li><strong>One-size-fits-all programma&apos;s</strong> — Als iedereen hetzelfde schema krijgt, is er geen sprake van personal training.</li>
                <li><strong>Geen aandacht voor techniek</strong> — Een trainer die niet corrigeert of uitlegt, brengt je dichter bij een blessure dan bij je doel.</li>
                <li><strong>Onrealistische beloftes</strong> — &quot;10 kilo afvallen in 2 weken&quot; is geen serieuze trainer. Goede resultaten kosten tijd.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een gratis intake zo belangrijk is</h2>
              <p>
                De beste manier om te weten of een trainer bij je past, is door het gewoon te ervaren. Daarom bieden
                steeds meer studio&apos;s een gratis intake of kennismakingsgesprek aan. Tijdens zo&apos;n sessie kun je:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>De trainer en de locatie leren kennen</li>
                <li>Je doelen en verwachtingen bespreken</li>
                <li>Een proeftraining doen om de stijl te ervaren</li>
                <li>Vragen stellen over planning, prijzen en aanpak</li>
              </ul>
              <p>
                Bij SculptClub is de eerste <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline">intake altijd gratis</Link> en vrijblijvend. Je kiest zelf welke trainer je wilt
                ontmoeten op basis van hun profiel, specialisatie en beschikbaarheid. Er is geen verkooppraatje en
                geen druk om meteen te tekenen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training in een privé studio vs sportschool</h2>
              <p>
                In Amsterdam kun je kiezen tussen personal training in een grote sportschool of in een privé studio.
                Het verschil is groot: in een sportschool deel je de ruimte met tientallen anderen, moet je wachten
                op apparatuur en heb je weinig privacy. In een boutique studio zoals SculptClub train je alleen of
                met je trainer, zonder afleiding.
              </p>
              <p>
                Dit is vooral fijn als je net begint, als je specifieke doelen hebt, of als je simpelweg liever in
                rust traint. De apparatuur is volledig beschikbaar en je trainer kan de sessie precies zo inrichten
                als nodig.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Begin vandaag</h2>
              <p>
                De juiste <Link href="/nl/vind-jouw-personal-trainer" className="text-brand underline-offset-2 hover:underline">personal trainer vinden</Link> in Amsterdam hoeft niet moeilijk te zijn. Stel je criteria op, doe
                je research en boek een gratis kennismaking. Zo ontdek je snel of er een klik is, zonder risico.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training in Amsterdam?</p>
                </a>
                <a href="/nl/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in Amsterdam Jordaan</p>
                </a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p>
                </a>
                <a href="/nl/blog/gratis-intake-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Gratis intake personal trainer</p>
                </a>
                <a href="/nl/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p>
                </a>
                <a href="/nl/blog/personal-trainer-amsterdam-oost" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Oost</p>
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Vind jouw personal trainer</h3>
              <p className="text-muted-foreground mb-6">
                Bekijk onze trainers en boek een gratis intake. Geen verplichtingen.
              </p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                Bekijk trainers
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Gratis intake personal trainer Amsterdam: wat te verwachten — SculptClub" },
  description:
    "Wat is een gratis intake bij een personal trainer in Amsterdam? Ontdek wat er tijdens de kennismaking gebeurt, hoe je je voorbereidt en waar je op let bij het kiezen van een trainer.",
  keywords: [
    "gratis intake personal trainer amsterdam",
    "gratis kennismaking personal trainer",
    "gratis proefles personal training amsterdam",
    "gratis intake personal training",
    "personal trainer kennismaking amsterdam",
    "proefles personal trainer",
  ],
  alternates: {
    canonical: "/nl/blog/gratis-intake-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/gratis-intake-personal-trainer-amsterdam",
      en: "/en/blog/free-intro-personal-trainer-amsterdam",
    },
  },
};

export default function GratisIntakeBlogNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Gratis intake personal trainer Amsterdam", url: "/nl/blog/gratis-intake-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Gratis intake personal trainer Amsterdam: wat te verwachten"
        description="Wat is een gratis intake bij een personal trainer in Amsterdam? Alles over de kennismaking, voorbereiding en het kiezen van de juiste trainer."
        url="/nl/blog/gratis-intake-personal-trainer-amsterdam"
        datePublished="2026-04-01"
      />
      <FaqJsonLd faqs={[
        { question: "Wat is een gratis intake bij een personal trainer?", answer: "Een gratis intake is een eerste kennismaking tussen jou en een personal trainer. In 30 tot 45 minuten bespreken jullie je doelen, je huidige conditie en wat je verwacht van de samenwerking. De trainer legt uit hoe hij of zij werkt en of de aanpak bij jou past." },
        { question: "Waarom biedt een personal trainer een gratis intake aan?", answer: "Goede trainers weten dat een succesvolle samenwerking begint met een klik. De intake is net zo goed voor jou als voor de trainer: ook hij of zij wil weten of jullie goed bij elkaar passen. Een gratis kennismaking verlaagt de drempel om die eerste stap te zetten — zonder dat je meteen ergens aan vastzit." },
        { question: "Wat gebeurt er tijdens de intake?", answer: "Elke trainer heeft zijn eigen stijl, maar een gratis intake bij SculptClub ziet er doorgaans zo uit:" },
        { question: "Hoe bereid je je voor op een gratis intake?", answer: "Geen uitgebreide voorbereiding nodig. Maar een paar dingen helpen om er meer uit te halen:" },
        { question: "Welke vragen kun je stellen tijdens de intake?", answer: "Een paar vragen die je kunt meenemen naar je gratis intake:" },
        { question: "Na de intake: hoe beslis je?", answer: "Je hoeft niet meteen te beslissen. Neem de tijd om het te laten bezinken. Een paar vragen die helpen:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Gratis intake personal trainer Amsterdam: wat te verwachten
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  1 april 2026
                </span>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="lead text-xl text-muted-foreground">
                Je wilt aan de slag met personal training, maar weet niet zeker of het iets voor jou is.
                Een gratis intake is de perfecte manier om erachter te komen — zonder verplichtingen en
                zonder kosten. Maar wat gebeurt er eigenlijk tijdens zo&apos;n kennismaking?
              </p>

              <h2>Wat is een gratis intake bij een personal trainer?</h2>
              <p>
                Een gratis intake is een eerste kennismaking tussen jou en een personal trainer. In 30 tot
                45 minuten bespreken jullie je doelen, je huidige conditie en wat je verwacht van de
                samenwerking. De trainer legt uit hoe hij of zij werkt en of de aanpak bij jou past.
              </p>
              <p>
                Bij SculptClub duurt de <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline">gratis intake</Link> 45 minuten. Je hoeft niets voor te bereiden —
                kom gewoon langs in je sportkleding. Er is geen receptie en geen wachtrij: je krijgt
                de avond van tevoren een persoonlijke deurcode via WhatsApp.
              </p>

              <h2>Waarom biedt een personal trainer een gratis intake aan?</h2>
              <p>
                Goede trainers weten dat een succesvolle samenwerking begint met een klik. De intake
                is net zo goed voor jou als voor de trainer: ook hij of zij wil weten of jullie goed
                bij elkaar passen. Een gratis kennismaking verlaagt de drempel om die eerste stap te
                zetten — zonder dat je meteen ergens aan vastzit.
              </p>
              <p>
                Bij SculptClub werken alle trainers als zelfstandige. Ze bepalen hun eigen tarieven en
                werkwijze. De intake is altijd 100% gratis — geen creditcard vereist, geen contract,
                geen addertje onder het gras.
              </p>

              <h2>Wat gebeurt er tijdens de intake?</h2>
              <p>
                Elke trainer heeft zijn eigen stijl, maar een gratis intake bij SculptClub ziet er
                doorgaans zo uit:
              </p>
              <ul>
                <li>
                  <strong>Kennismaken:</strong> Je leert de trainer kennen en vertelt kort over jezelf.
                  Waar kom je vandaan sportief gezien? Wat heb je al geprobeerd?
                </li>
                <li>
                  <strong>Doelen bespreken:</strong> Wil je afvallen, spiermassa opbouwen, herstellen
                  van een blessure of gewoon fitter worden? De trainer vraagt door om een goed beeld
                  te krijgen.
                </li>
                <li>
                  <strong>Aanpak en werkwijze:</strong> De trainer legt uit hoe hij of zij werkt, welke
                  methoden worden gebruikt en wat je kunt verwachten van de sessies.
                </li>
                <li>
                  <strong>Rondleiding:</strong> Je bekijkt de studio. Bij SculptClub is dat een privé
                  ruimte aan de Egelantiersgracht in de Jordaan — geen drukte, geen wachtrijen.
                </li>
                <li>
                  <strong>Tarieven en planning:</strong> Als het klikt, bespreken jullie de praktische
                  kant: hoe vaak, wanneer en wat kost het. Geen verplichting om meteen te beslissen.
                </li>
              </ul>

              <h2>Hoe bereid je je voor op een gratis intake?</h2>
              <p>
                Geen uitgebreide voorbereiding nodig. Maar een paar dingen helpen om er meer uit te
                halen:
              </p>
              <ul>
                <li>
                  <strong>Weet wat je wilt bereiken.</strong> Denk van tevoren na over je doelen.
                  &ldquo;Fitter worden&rdquo; is een begin, maar &ldquo;ik wil over 3 maanden 10 kg
                  kwijt zijn en minder rugpijn hebben&rdquo; geeft de trainer veel meer om mee te werken.
                </li>
                <li>
                  <strong>Wees eerlijk over je niveau.</strong> Heb je al eerder gesport? Heb je
                  blessures of aandoeningen? Hoe meer de trainer weet, hoe beter het advies.
                </li>
                <li>
                  <strong>Stel vragen.</strong> Het is een tweerichtingsgesprek. Vraag gerust hoe de
                  trainer omgaat met progressie, wat er gebeurt als je een sessie wilt overslaan of
                  wat zijn of haar specialisatie is.
                </li>
                <li>
                  <strong>Kom op tijd.</strong> Je ontvangt de deurcode van tevoren via WhatsApp. Plan
                  5 minuten extra in om de studio te vinden en je om te kleden.
                </li>
              </ul>

              <h2>Welke vragen kun je stellen tijdens de intake?</h2>
              <p>
                Een paar vragen die je kunt meenemen naar je gratis intake:
              </p>
              <ul>
                <li>Wat is jouw specialisatie en hoe sluit dat aan op mijn doelen?</li>
                <li>Hoe ziet een gemiddelde sessie eruit?</li>
                <li>Hoe meet je voortgang?</li>
                <li>Wat doe ik als ik een sessie wil annuleren of verzetten?</li>
                <li>Hoe lang duurt het voordat ik resultaat zie?</li>
              </ul>
              <p>
                Bij SculptClub kun je annuleren of verzetten wanneer je wilt — altijd gratis,
                geen uitzonderingen.
              </p>

              <h2>Na de intake: hoe beslis je?</h2>
              <p>
                Je hoeft niet meteen te beslissen. Neem de tijd om het te laten bezinken. Een paar
                vragen die helpen:
              </p>
              <ul>
                <li>Voelde het gesprek natuurlijk aan?</li>
                <li>Begreep de trainer wat je wilt bereiken?</li>
                <li>Past de aanpak bij jou?</li>
                <li>Kun je je in het tarief vinden?</li>
              </ul>
              <p>
                Als het antwoord op deze vragen ja is, ben je waarschijnlijk op de goede plek.
                Als er twijfels zijn, plan dan gewoon een intake bij een andere trainer. Dat kan ook
                gratis — SculptClub werkt met <Link href="/nl/vind-jouw-personal-trainer" className="text-brand underline-offset-2 hover:underline">vijf trainers met elk een eigen specialisatie</Link>.
              </p>

              <h2>Gratis intake bij SculptClub in Amsterdam Jordaan</h2>
              <p>
                SculptClub is een boutique personal training studio aan de Egelantiersgracht 424 in
                de Jordaan. We werken met vijf trainers — elk met een eigen specialisatie, werkwijze
                en tarief. De eerste kennismaking is altijd gratis, ook als je daarna met een andere
                trainer wilt beginnen.
              </p>
              <div className="not-prose my-8 rounded-xl border border-border/50 bg-secondary p-6">
                <ul className="space-y-3">
                  {[
                    "45 minuten gratis — geen tijdslimiet op de kennismaking",
                    "Geen contract, geen abonnement, geen verplichting",
                    "Privé studio — geen drukte, geen wachtrijen",
                    "Trainers vanaf €45/sessie, 0% commissie",
                    "Dagelijks open van 06:30 tot 22:00",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in de Jordaan</p></a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-brand p-8 text-center text-white">
              <h2 className="mb-2 text-2xl font-bold">Plan je gratis intake</h2>
              <p className="mb-6 text-white/80">
                Kies een trainer die bij jou past en boek direct online. Duurt 2 minuten.
              </p>
              <ButtonLink
                href="/nl/vind-jouw-personal-trainer"
                variant="secondary"
                size="lg"
              >
                Bekijk onze trainers
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

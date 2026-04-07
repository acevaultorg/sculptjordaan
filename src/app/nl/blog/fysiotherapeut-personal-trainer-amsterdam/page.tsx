import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Fysiotherapeut als Personal Trainer in Amsterdam: Trainen met een blessure — SculptClub",
  description:
    "Een blessure of chronische klacht hoeft geen einde van je training te betekenen. Ontdek hoe een fysiotherapeut als personal trainer in Amsterdam je veilig laat doortrainen.",
  keywords: [
    "fysiotherapeut amsterdam",
    "fysiotherapeut personal trainer amsterdam",
    "trainen met blessure amsterdam",
    "revalidatie training amsterdam",
    "fysiotherapeut jordaan amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
      en: "/en/blog/physiotherapist-personal-trainer-amsterdam",
    },
  },
};

export default function FysiotherapeutPersonalTrainerNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Fysiotherapeut als Personal Trainer", url: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Fysiotherapeut als Personal Trainer in Amsterdam: Trainen met een blessure"
        description="Een blessure hoeft geen einde van je training te betekenen. Een fysiotherapeut als personal trainer maakt veilig doortrainen mogelijk."
        url="/nl/blog/fysiotherapeut-personal-trainer-amsterdam"
        datePublished="2026-03-30"
      />
      <FaqJsonLd faqs={[
        { question: "Wat kan een fysiotherapeut-personal trainer voor je doen?", answer: "Screenen op beperkingen — voordat je begint met trainen, brengt hij in kaart wat je wel en niet kan.; Bewegingsanalyse — verkeerde bewegingspatronen zijn vaak de oorzaak van klachten. Door ze vroeg te corrigeren voorkom je nieuwe blessures.; Aangepast trainingsprogramma — geen standaard schema, maar een programma dat rekening houdt met jouw klachten én je doelen.; Progressieve opbouw — herstel en kracht opbouwen tegelijkertijd, in een tempo dat werkt voor jouw lichaam.; Voorkomen van..." },
        { question: "Mag ik trainen met een hernia?", answer: "In veel gevallen ja — maar onder begeleiding en met de juiste aanpassingen. Een fysiotherapeut bepaalt welke oefeningen veilig zijn en hoe je de belasting opbouwt zonder de klacht te verergeren." },
        { question: "Vergoedt mijn zorgverzekeraar de sessies?", answer: "Personal training bij een fysiotherapeut valt doorgaans niet onder de zorgverzekering. Sommige aanvullende verzekeringen vergoeden (para)medische fitness deels — check je polis." },
        { question: "Waar is SculptClub gevestigd?", answer: "Egelantiersgracht 424, Amsterdam Jordaan. Dagelijks open van 06:30 tot 22:00. Je ontvangt een deurcode via WhatsApp — geen bel, geen receptie." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Fysiotherapeut als Personal Trainer in Amsterdam: Trainen met een blessure
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  30 maart 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/trainers/hamish.jpg"
                alt="Hamish, fysiotherapeut en personal trainer bij SculptClub Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je hebt rugpijn, een knieklacht of een oude schouderblessure die maar niet goed wordt. Je wilt graag trainen — maar je weet niet hoe je dat veilig doet. Precies hier maakt een fysiotherapeut als personal trainer het verschil.
              </p>

              <h2>Waarom een gewone personal trainer niet altijd genoeg is</h2>
              <p>
                De meeste personal trainers weten hoe ze een effectief trainingsprogramma opstellen voor gezonde mensen. Maar bij een blessure, chronische pijn of een revalidatietraject is meer kennis nodig. Foutief belasten vertraagt herstel — of maakt het erger.
              </p>
              <p>
                Een fysiotherapeut begrijpt de anatomie, weet hoe weefsel geneest en kan de grens bepalen tussen pijn die acceptabel is tijdens herstel en pijn als waarschuwingssignaal. Als die kennis gecombineerd wordt met personal training, train je niet alleen veilig — je traint ook effectief.
              </p>

              <h2>Wat kan een fysiotherapeut-personal trainer voor je doen?</h2>
              <ul>
                <li><strong>Screenen op beperkingen</strong> — voordat je begint met trainen, brengt hij in kaart wat je wel en niet kan.</li>
                <li><strong>Bewegingsanalyse</strong> — verkeerde bewegingspatronen zijn vaak de oorzaak van klachten. Door ze vroeg te corrigeren voorkom je nieuwe blessures.</li>
                <li><strong>Aangepast trainingsprogramma</strong> — geen standaard schema, maar een programma dat rekening houdt met jouw klachten én je doelen.</li>
                <li><strong>Progressieve opbouw</strong> — herstel en kracht opbouwen tegelijkertijd, in een tempo dat werkt voor jouw lichaam.</li>
                <li><strong>Voorkomen van terugval</strong> — eenmaal hersteld, zorgt hij dat je niet opnieuw dezelfde fout maakt.</li>
              </ul>

              <h2>Hamish: fysiotherapeut en personal trainer in Amsterdam</h2>
              <p>
                Bij SculptClub werkt <strong>Hamish</strong> — BSc fysiotherapeut én personal trainer. Hij werkt met mensen die door een blessure of chronische klacht niet meer optimaal kunnen trainen, maar ook met mensen die preventief hun lichaam willen versterken.
              </p>
              <p>
                Hamish biedt zowel 1-op-1 sessies als small group training. Zijn aanpak combineert fysiotherapeutische kennis met krachttraining. Tarief op aanvraag.
              </p>

              <h2>Veelgestelde vragen</h2>
              <h3>Mag ik trainen met een hernia?</h3>
              <p>
                In veel gevallen ja — maar onder begeleiding en met de juiste aanpassingen. Een fysiotherapeut bepaalt welke oefeningen veilig zijn en hoe je de belasting opbouwt zonder de klacht te verergeren.
              </p>
              <h3>Vergoedt mijn zorgverzekeraar de sessies?</h3>
              <p>
                Personal training bij een fysiotherapeut valt doorgaans niet onder de zorgverzekering. Sommige aanvullende verzekeringen vergoeden (para)medische fitness deels — check je polis.
              </p>
              <h3>Waar is SculptClub gevestigd?</h3>
              <p>
                Egelantiersgracht 424, Amsterdam Jordaan. Dagelijks open van 06:30 tot 22:00. Je ontvangt een deurcode via WhatsApp — geen bel, geen receptie.
              </p>

              <h2>Klachten? Begin met een gratis intake</h2>
              <p>
                Een kennismaking kost niets. In 45 minuten bespreek je jouw klachten, doelen en mogelijkheden met Hamish. Geen contract, geen verplichting.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapie studio huren</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-secondary border border-border/50">
              <h2 className="text-xl font-bold mb-2">Intake met Hamish — gratis</h2>
              <p className="text-muted-foreground mb-6">
                Blessure, chronische pijn of gewoon voorzichtig willen opbouwen? Plan een gratis kennismaking.
              </p>
              <ButtonLink href="/nl/gratis-intake">
                Plan gratis intake <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

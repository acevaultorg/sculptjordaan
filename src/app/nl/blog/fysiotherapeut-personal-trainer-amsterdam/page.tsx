import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Trainen met een blessure of klachten in Amsterdam — SculptClub" },
  description:
    "Een blessure of chronische klacht hoeft geen einde van je training te betekenen. Lees hoe SculptClub omgaat met training na blessure, in samenwerking met je fysiotherapeut.",
  keywords: [
    "trainen met blessure amsterdam",
    "personal trainer blessure amsterdam",
    "krachttraining na fysiotherapie amsterdam",
    "training opbouwen na blessure jordaan",
  ],
  alternates: {
    canonical: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
      en: "/en/blog/physiotherapist-personal-trainer-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
    title: "Trainen met een blessure of klachten in Amsterdam — SculptClub",
    description:
      "Een blessure of chronische klacht hoeft geen einde van je training te betekenen. Lees hoe SculptClub omgaat met training na blessure, in samenwerking met je fysiotherapeut.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trainen met een blessure of klachten in Amsterdam — SculptClub",
    description:
      "Een blessure of chronische klacht hoeft geen einde van je training te betekenen. Lees hoe SculptClub omgaat met training na blessure, in samenwerking met je fysiotherapeut.",
  },
};

export default function FysiotherapeutPersonalTrainerNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Trainen met een blessure", url: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Trainen met een blessure of klachten in Amsterdam"
        description="Een blessure hoeft geen einde van je training te betekenen. Hoe je krachttraining opbouwt in samenwerking met je fysiotherapeut."
        url="/nl/blog/fysiotherapeut-personal-trainer-amsterdam"
        datePublished="2026-03-30"
        dateModified="2026-05-08"
      />
      <FaqJsonLd faqs={[
        { question: "Heeft SculptClub een fysiotherapeut in dienst?", answer: "Op dit moment niet. Voor diagnose, behandeling en revalidatie verwijzen we je naar een gediplomeerd fysiotherapeut. Onze personal trainers nemen het over zodra je weer mag bewegen — opbouw, kracht en techniek." },
        { question: "Mag ik trainen met een hernia?", answer: "Dat bepaalt je fysiotherapeut of arts, niet je personal trainer. Met groen licht van je behandelaar kunnen onze trainers je veilig opbouwen — onder de belastbaarheid die zij hebben aangegeven." },
        { question: "Vergoedt mijn zorgverzekeraar de sessies?", answer: "Personal training valt niet onder de zorgverzekering. Sommige aanvullende verzekeringen vergoeden (para)medische fitness deels — check je polis." },
        { question: "Waar is SculptClub gevestigd?", answer: "Egelantiersgracht 424, Amsterdam Jordaan. Dagelijks open van 06:00 tot 22:00. Voor PT-sessies regelt je trainer de toegang; voor Open Gym ontvang je zelf een deurcode via WhatsApp. Geen bel, geen receptie." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Trainen met een blessure of klachten in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  Bijgewerkt 8 mei 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Privé personal training studio bij SculptClub Amsterdam"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Eerlijk: wij zijn geen fysiotherapeuten.</strong>
                    <span className="text-muted-foreground">
                      Bij SculptClub werken momenteel geen fysiotherapeuten. Voor diagnose,
                      behandeling en revalidatie raden we aan eerst een gediplomeerd
                      fysiotherapeut te raadplegen. Wat onze personal trainers wél bieden:
                      opbouwende krachttraining onder begeleiding zodra je behandelaar
                      groen licht geeft.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Je hebt rugpijn, een knieklacht of een oude schouderblessure die maar niet
                goed wordt. Je wilt graag (weer) trainen — maar je weet niet hoe je dat
                veilig opbouwt. Hieronder leggen we uit hoe wij die overgang van behandeling
                naar zelfstandig trainen aanpakken, in samenwerking met je fysiotherapeut.
              </p>

              <h2>Eerst fysiotherapeut, dan personal trainer</h2>
              <p>
                De rolverdeling is duidelijk. Een <strong>fysiotherapeut</strong> stelt
                vast wat er aan de hand is, behandelt waar nodig en bepaalt wanneer je
                weer mag belasten. Een <strong>personal trainer</strong> bouwt vanaf dat
                punt verder: progressie in kracht, techniek en belastbaarheid. Beide rollen
                zijn nodig — maar het is niet hetzelfde werk en wij doen alleen het tweede.
              </p>
              <p>
                Loop je nog onder behandeling? Dan vragen we je trainer om af te stemmen
                met je fysiotherapeut. Welke bewegingen zijn veilig? Wat is de huidige
                belastbaarheid? Welke kant moet er aan de programmering nog niet bij?
                Daarmee voorkom je tegenstrijdige adviezen.
              </p>

              <h2>Wat een goede personal trainer wél kan</h2>
              <ul>
                <li><strong>Techniek bewaken</strong> — verkeerde bewegingspatronen zijn vaak de oorzaak van klachten. Je trainer corrigeert ze sessie voor sessie.</li>
                <li><strong>Programmering met progressie</strong> — geen standaard schema, maar opbouw die rekening houdt met jouw klachten én je doelen.</li>
                <li><strong>Belasting doseren</strong> — herstel en kracht opbouwen tegelijkertijd, in een tempo dat werkt voor jouw lichaam.</li>
                <li><strong>Voorkomen van terugval</strong> — eenmaal hersteld, zorgen we dat je niet opnieuw dezelfde fout maakt.</li>
              </ul>

              <h2>Een privé studio helpt</h2>
              <p>
                In een grote sportschool train je anoniem. Niemand ziet dat je
                compensatiepatroon verergert of dat je een oefening verkeerd uitvoert.
                Bij SculptClub train je <a href="/nl/studio" className="text-brand hover:underline">één-op-één in een privé studio</a> — alleen
                jij en je trainer. De volledige aandacht ligt bij jouw beweging, elke sessie.
              </p>

              <h2>Hoe begin je?</h2>
              <p>
                Sta je nog onder behandeling? Bespreek eerst met je fysiotherapeut of
                krachttraining op dit moment passend is. Met groen licht plan je een
                gratis intake bij ons — geen verplichtingen, geen kosten. Je bespreekt
                je situatie, doelen en mogelijkheden, en we bepalen samen welke trainer
                het beste past.
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
              <h2 className="text-xl font-bold mb-2">Plan een gratis intake</h2>
              <p className="text-muted-foreground mb-6">
                Vertel ons je situatie. We luisteren, denken mee en wijzen je door
                naar de juiste trainer — of, als dat passender is, naar een fysiotherapeut.
              </p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer">
                Vind jouw personal trainer <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

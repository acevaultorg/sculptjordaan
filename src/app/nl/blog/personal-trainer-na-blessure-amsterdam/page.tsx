import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer na een Blessure in Amsterdam — SculptClub" },
  description:
    "Veilig terugkeren naar sport na een blessure? Een personal trainer helpt met hersteltraining op maat. Gratis intake bij SculptClub Amsterdam.",
  keywords: [
    "personal trainer na blessure",
    "hersteltraining amsterdam",
    "revalidatie personal training",
    "sporten na blessure amsterdam",
    "personal trainer revalidatie",
    "terugkeren naar sport na blessure",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-na-blessure-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-na-blessure-amsterdam",
      en: "/en/blog/personal-trainer-after-injury-amsterdam",
    },
  },
};

export default function PTNaBlessureNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer na een blessure", url: "/nl/blog/personal-trainer-na-blessure-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer na een Blessure in Amsterdam" description="Hoe een personal trainer je helpt veilig terug te keren naar sport na een blessure." url="/nl/blog/personal-trainer-na-blessure-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer na een Blessure in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/power-rack.jpeg" alt="Krachttraining apparatuur bij SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Een blessure verandert alles. Maanden niet kunnen sporten. Spierverlies. En dan
                de onzekerheid: kan ik weer bewegen zoals vroeger? De weg terug begint niet
                met harder trainen — maar met slimmer trainen. En dat is precies waar een
                personal trainer het verschil maakt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom je na een blessure niet zomaar kunt beginnen</h2>
              <p>
                Na een knieblessure, rugklacht of schouderoperatie is je lichaam veranderd. Spieren
                zijn verzwakt, bewegingspatronen aangepast, en compensaties ingesleten. Gewoon
                je oude schema oppakken leidt tot overbelasting of een nieuwe blessure. Een trainer
                bouwt je geleidelijk weer op — met oefeningen die passen bij jouw herstelfase.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat doet een trainer bij hersteltraining?</h2>
              <ul>
                <li><strong>Beweeglijkheid herstellen:</strong> Eerst het bewegingsbereik terugkrijgen zonder pijn</li>
                <li><strong>Stabiliteit opbouwen:</strong> Gewrichten en core versterken als fundament</li>
                <li><strong>Kracht heropbouwen:</strong> Progressief belasten — van licht naar je oude niveau</li>
                <li><strong>Compensaties corrigeren:</strong> Scheefgroei en vermijdingspatronen afleren</li>
                <li><strong>Vertrouwen terugwinnen:</strong> De angst om te bewegen overwinnen met begeleiding</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Fysiotherapeut én personal trainer</h2>
              <p>
                Bij SculptClub werkt <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">Hamish</a> als
                fysiotherapeut BSc. Hij combineert revalidatiekennis met krachttraining. Dat
                betekent dat je de overgang van fysiotherapie naar zelfstandig trainen kunt
                maken onder dezelfde begeleiding. Geen gat meer tussen revalidatie en sport.
              </p>
              <p>
                Andere trainers bij SculptClub hebben ook ervaring met cliënten die
                terugkeren na blessures. Tijdens de <a href="/nl/gratis-intake" className="text-brand hover:underline">gratis
                intake</a> bespreek je je situatie en vind je de trainer die het beste past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé studio: geen druk, geen haast</h2>
              <p>
                Hersteltraining vraagt concentratie en rust. In een drukke sportschool voel
                je je snel opgejaagd. Bij SculptClub train je in een privé studio — alleen jij
                en je trainer. De <a href="/nl/locatie-uren" className="text-brand hover:underline">studio
                aan de Egelantiersgracht</a> is volledig uitgerust en de deurcode
                ontvang je via WhatsApp de avond tevoren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Veelvoorkomende blessures en hoe training helpt</h2>
              <p>
                <strong>Knie (ACL, meniscus):</strong> Quadriceps en hamstrings versterken, balans
                herstellen, geleidelijk squatpatroon opbouwen.
              </p>
              <p>
                <strong>Rug (hernia, lage rugpijn):</strong> Core stabiliteit, heupbeweeglijkheid, deadlift
                opbouwen met correcte techniek.
              </p>
              <p>
                <strong>Schouder (impingement, rotator cuff):</strong> Schouderblad stabiliseren, overhead
                bewegingen geleidelijk introduceren.
              </p>
              <p>
                <strong>Enkel (verzwikking, fractuur):</strong> Proprioceptie trainen, kuitkracht opbouwen,
                sportspecifieke bewegingen hervatten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten en hoe je begint</h2>
              <p>
                Personal training bij SculptClub begint vanaf €45 per sessie. De eerste
                kennismaking is altijd gratis. Geen abonnement, geen contract. Je boekt per
                sessie en <a href="/nl/faqs" className="text-brand hover:underline">annuleert altijd
                gratis</a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut als personal trainer</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Terug naar sport na een blessure?</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake en bespreek je situatie met een trainer.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

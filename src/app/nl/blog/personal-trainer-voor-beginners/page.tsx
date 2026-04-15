import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer voor Beginners in Amsterdam — SculptClub",
  description:
    "Nog nooit gesport of lang niet meer? Een personal trainer helpt beginners veilig op weg. Gratis intake bij SculptClub, geen ervaring nodig.",
  keywords: [
    "personal trainer voor beginners",
    "personal trainer beginners amsterdam",
    "beginnen met personal training",
    "personal trainer geen ervaring",
    "fitness beginners amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-voor-beginners",
    languages: {
      nl: "/nl/blog/personal-trainer-voor-beginners",
      en: "/en/blog/personal-trainer-for-beginners",
    },
  },
};

export default function PTVoorBeginnersNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer voor beginners", url: "/nl/blog/personal-trainer-voor-beginners" }]} />
      <BlogPostingJsonLd title="Personal Trainer voor Beginners in Amsterdam" description="Waarom een personal trainer de beste investering is als je net begint met sporten." url="/nl/blog/personal-trainer-voor-beginners" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer voor Beginners in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />2 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/assault-bike.jpeg" alt="Trainingsapparatuur bij SculptClub" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je wilt beginnen met sporten, maar je weet niet waar je moet starten. Misschien heb je
                nog nooit in een gym gestaan. Of het is jaren geleden en je voelt je onzeker. Dat is
                precies het moment waarop een personal trainer het meeste verschil maakt — niet als je
                gevorderd bent, maar als je begint.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom beginners het meest profiteren van een trainer</h2>
              <p>
                Als beginner maak je de meeste winst in de eerste maanden. Je lichaam reageert sterk op
                nieuwe prikkels. Maar je maakt ook de meeste fouten. Verkeerde techniek leidt tot
                blessures. Te veel willen leidt tot overbelasting. En zonder plan train je de verkeerde
                dingen. Een trainer voorkomt dat alles en zorgt dat elke sessie telt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat doet een trainer met beginners?</h2>
              <ul>
                <li><strong>Techniek aanleren:</strong> Squats, deadlifts, presses — je leert ze correct uitvoeren vanaf dag 1</li>
                <li><strong>Programma maken:</strong> Een plan op maat voor jouw niveau, tempo en beschikbare tijd</li>
                <li><strong>Progressie bewaken:</strong> Elke paar weken past je trainer de belasting aan</li>
                <li><strong>Vertrouwen opbouwen:</strong> In een privé studio voel je je veilig om te leren</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Je hoeft niet fit te zijn om te beginnen</h2>
              <p>
                De grootste misvatting: &quot;Ik moet eerst fitter worden voordat ik naar een
                trainer ga.&quot; Dat is alsof je zegt: &quot;Ik moet eerst gezond worden voordat ik
                naar de dokter ga.&quot; Een trainer is er juist om je van nul naar je eerste resultaat
                te brengen. Bij SculptClub werken alle vijf trainers met beginners. Geen oordeel,
                geen druk — gewoon beginnen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé studio vs grote sportschool</h2>
              <p>
                Veel beginners voelen zich ongemakkelijk in een grote sportschool. De drukte, de
                blikken, het gevoel dat iedereen weet wat ze doen behalve jij. Bij SculptClub train
                je in een privé studio — alleen jij en je trainer. Geen publiek, geen druk. De
                deurcode ontvang je via WhatsApp de avond tevoren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten en hoe je begint</h2>
              <p>
                Personal training bij SculptClub <Link href="/nl/prijzen" className="text-brand underline-offset-2 hover:underline">begint vanaf €45 per sessie</Link>. De <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline">eerste kennismaking
                is altijd gratis</Link> — je bespreekt je doelen, je trainer bekijkt je niveau en je maakt
                samen een plan. Geen abonnement, geen contract. Je boekt per sessie en annuleert
                altijd gratis.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/eerste-keer-sportschool-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste keer sportschool: tips voor beginners</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om te beginnen?</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake — geen ervaring nodig.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

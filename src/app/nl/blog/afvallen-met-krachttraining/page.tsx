import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Afvallen met krachttraining: Waarom het werkt — SculptClub" },
  description:
    "Wil je afvallen? Ontdek waarom krachttraining effectiever is dan cardio voor vetverbranding. De wetenschap achter het afterburn effect, metabolisme en praktische tips.",
  keywords: [
    "afvallen met krachttraining",
    "krachttraining vetverbranding",
    "afvallen sportschool",
    "krachttraining afvallen vrouwen",
    "vetverbranding krachttraining",
    "afvallen personal trainer amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/afvallen-met-krachttraining",
    languages: {
      nl: "/nl/blog/afvallen-met-krachttraining",
      en: "/en/blog/weight-loss-strength-training",
    },
  },
};

export default function AfvallenMetKrachttrainingNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Afvallen met krachttraining", url: "/nl/blog/afvallen-met-krachttraining" },
        ]}
      />
      <BlogPostingJsonLd
        title="Afvallen met krachttraining: Waarom het werkt"
        description="Ontdek waarom krachttraining effectiever is dan cardio voor vetverbranding. De wetenschap achter metabolisme, afterburn effect en praktische tips."
        url="/nl/blog/afvallen-met-krachttraining"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Afvallen met krachttraining: Waarom het werkt
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
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Krachttraining voor afvallen bij SculptClub Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Veel mensen denken dat je moet rennen, fietsen of zwemmen om af te vallen. Cardio is al jaren het
                standaardadvies voor gewichtsverlies. Maar de wetenschap vertelt een ander verhaal: krachttraining
                is minstens zo effectief, en op de lange termijn zelfs effectiever. In dit artikel leggen we uit
                waarom.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Het probleem met alleen cardio</h2>
              <p>
                Cardiotraining verbrandt calorieën tijdens de inspanning. Dat klopt. Maar zodra je stopt met rennen,
                stopt ook de verbranding grotendeels. Bovendien past je lichaam zich snel aan: na een paar weken
                verbrandt dezelfde run minder calorieën dan in het begin. Je moet steeds langer of harder trainen
                voor hetzelfde effect.
              </p>
              <p>
                Erger nog: bij langdurig cardio zonder krachttraining loop je het risico om spiermassa te verliezen.
                En dat is precies wat je niet wilt als je probeert af te vallen, want spieren zijn je
                vetverbrandingsmotoren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe krachttraining vetverbranding stimuleert</h2>
              <p>
                Krachttraining werkt op meerdere manieren om vetverbranding te bevorderen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Meer spiermassa = hoger basaalmetabolisme</strong> — Spieren verbranden in rust meer energie dan vetweefsel. Hoe meer spiermassa je hebt, hoe meer calorieën je lichaam automatisch verbrandt, zelfs als je op de bank zit.</li>
                <li><strong>Het afterburn effect (EPOC)</strong> — Na een intensieve krachttraining blijft je lichaam uren tot zelfs dagen extra calorieën verbranden om te herstellen. Dit effect is aanzienlijk sterker dan bij cardio.</li>
                <li><strong>Verbeterde insulinegevoeligheid</strong> — Krachttraining helpt je lichaam om koolhydraten beter te verwerken, waardoor minder energie als vet wordt opgeslagen.</li>
                <li><strong>Hormoonrespons</strong> — Krachttraining stimuleert de aanmaak van groeihormoon en testosteron, beide essentieel voor vetverbranding en spieropbouw.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">De wetenschap achter het afterburn effect</h2>
              <p>
                Het afterburn effect, officieel EPOC (Excess Post-exercise Oxygen Consumption) genoemd, is het
                verschijnsel waarbij je lichaam na de training extra zuurstof verbruikt om te herstellen.
                Dit kost energie. Bij krachttraining kan dit effect 24 tot 72 uur aanhouden, afhankelijk van de
                intensiteit van je training. Bij cardio duurt dit effect meestal maar 1 tot 2 uur.
              </p>
              <p>
                Praktisch betekent dit dat je na een stevige krachttraining de hele volgende dag extra calorieën
                verbrandt, zonder dat je er iets voor hoeft te doen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktische tips voor afvallen met krachttraining</h2>
              <p>
                Klaar om te starten? Hier zijn concrete tips om maximaal resultaat te halen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Train 2 tot 3 keer per week</strong> — Dit is voldoende om spiermassa op te bouwen en vet te verbranden. Geef je lichaam rust tussen de sessies.</li>
                <li><strong>Focus op compound oefeningen</strong> — Squats, deadlifts, bench press en rows activeren meerdere spiergroepen tegelijk en verbranden meer calorieën.</li>
                <li><strong>Progressieve overbelasting</strong> — Verhoog geleidelijk het gewicht of het aantal herhalingen. Zo blijft je lichaam zich aanpassen en groeien.</li>
                <li><strong>Combineer met eiwitrijke voeding</strong> — Eiwitten zijn essentieel voor spierherstel en geven een langdurig verzadigd gevoel.</li>
                <li><strong>Slaap voldoende</strong> — Tijdens de slaap herstellen je spieren en reguleert je lichaam de hormonen die vetverbranding beïnvloeden.</li>
                <li><strong>Wees geduldig</strong> — De weegschaal kan in het begin hetzelfde blijven of zelfs stijgen, omdat spieren zwaarder zijn dan vet. Meet je voortgang ook met foto&apos;s en hoe je kleding zit.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een personal trainer helpt bij afvallen</h2>
              <p>
                Zelfstandig krachttrainen is prima als je de basisoefeningen beheerst. Maar als je serieus wilt
                afvallen, maakt een personal trainer een enorm verschil. Een trainer zorgt voor:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Een programma dat is afgestemd op jouw doel en fitnessniveau</li>
                <li>Correcte techniek om blessures te voorkomen en resultaten te maximaliseren</li>
                <li>Accountability — je hebt een afspraak, dus je komt opdagen</li>
                <li>Progressie — je trainer past je programma aan naarmate je sterker wordt</li>
                <li>Motivatie — op de dagen dat je het even niet ziet zitten</li>
              </ul>
              <p>
                Bij SculptClub train je in een privé studio met professionele apparatuur, begeleid door een
                ervaren trainer. De eerste intake is altijd gratis, zodat je vrijblijvend kunt kennismaken.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Start vandaag</h2>
              <p>
                Afvallen met krachttraining werkt. Het is bewezen, het is duurzaam en het geeft je niet alleen een
                slanker lichaam, maar ook een sterker en gezonder lichaam. Begin met 2 sessies per week, focus op
                de basis en geef jezelf de tijd. De resultaten komen.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
                <a href="/nl/blog/lichaamssamenstelling-verbeteren-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Lichaamssamenstelling verbeteren</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Afvallen met begeleiding?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis intake en ontdek hoe een personal trainer je kan helpen bij je afvaldoel.
              </p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                Vind je trainer
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Krachttraining voor Beginners: Complete Gids — SculptClub",
  description:
    "Begin met krachttraining: de complete gids voor beginners. Leer de basisoefeningen, hoe vaak je moet trainen en hoe je blessures voorkomt.",
  keywords: [
    "krachttraining beginners",
    "krachttraining starten",
    "beginnen met krachttraining",
    "fitness beginners amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/krachttraining-voor-beginners",
    languages: {
      nl: "/nl/blog/krachttraining-voor-beginners",
      en: "/en/blog/strength-training-beginners-guide",
    },
  },
};

export default function BlogPostNL2() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Krachttraining voor Beginners", url: "/nl/blog/krachttraining-voor-beginners" },
        ]}
      />
      <BlogPostingJsonLd
        title="Krachttraining voor Beginners: Complete Gids"
        description="Begin met krachttraining: de complete gids voor beginners. Leer de basisoefeningen en hoe je blessures voorkomt."
        url="/nl/blog/krachttraining-voor-beginners"
        datePublished="2026-03-24"
      />
      <FaqJsonLd faqs={[
        { question: "Waarom krachttraining?", answer: "Krachttraining biedt voordelen die verder gaan dan alleen spieropbouw. Wetenschappelijk onderzoek toont aan dat regelmatige krachttraining helpt bij het voorkomen van botontkalking, het verbeteren van je mentale gezondheid, het verlagen van je bloeddruk en het verhogen van je energieniveau. Bovendien helpt het bij gewichtsbeheersing: meer spiermassa betekent een hogere stofwisseling in rust." },
        { question: "Hoe vaak moet je trainen als beginner?", answer: "Als je net begint, is twee tot drie keer per week meer dan genoeg. Je lichaam heeft tijd nodig om te herstellen en zich aan te passen aan de nieuwe belasting. Een effectief beginners schema ziet er zo uit:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Krachttraining voor Beginners: Complete Gids
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
                src="/images/studio/power-rack.jpeg"
                alt="Power rack in de SculptClub studio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Krachttraining is een van de beste dingen die je voor je gezondheid kunt doen. Het helpt je sterker worden,
                verbetert je houding, verhoogt je stofwisseling en draagt bij aan je algehele welzijn. Maar als je net begint,
                kan het overweldigend zijn. Waar begin je? Hoe zwaar moet je tillen? En hoe voorkom je blessures? In deze
                complete gids beantwoorden we al je vragen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom krachttraining?</h2>
              <p>
                Krachttraining biedt voordelen die verder gaan dan alleen spieropbouw. Wetenschappelijk onderzoek toont aan
                dat regelmatige krachttraining helpt bij het voorkomen van botontkalking, het verbeteren van je mentale
                gezondheid, het verlagen van je bloeddruk en het verhogen van je energieniveau. Bovendien helpt het bij
                gewichtsbeheersing: meer spiermassa betekent een hogere stofwisseling in rust.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De 5 basisoefeningen voor beginners</h2>
              <p>
                Als beginner hoef je niet tientallen oefeningen te leren. Begin met deze vijf compound-oefeningen die meerdere
                spiergroepen tegelijk trainen:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Squat (kniebuiging)</strong> — Traint je bovenbenen, bilspieren en core. Begin met je eigen
                  lichaamsgewicht en voeg geleidelijk gewicht toe.
                </li>
                <li>
                  <strong>Deadlift (optillen)</strong> — Een van de meest effectieve oefeningen voor je hele achterste keten:
                  rug, billen en hamstrings. Techniek is hier cruciaal.
                </li>
                <li>
                  <strong>Bench press (bankdrukken)</strong> — Traint je borst, schouders en triceps. Begin licht en focus
                  op een gecontroleerde beweging.
                </li>
                <li>
                  <strong>Overhead press (schouderdrukken)</strong> — Bouwt sterke schouders op en verbetert je houding.
                </li>
                <li>
                  <strong>Row (roeien)</strong> — Versterkt je rug en helpt schouderproblemen te voorkomen. Essentieel voor
                  een gebalanceerd lichaam.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe vaak moet je trainen als beginner?</h2>
              <p>
                Als je net begint, is twee tot drie keer per week meer dan genoeg. Je lichaam heeft tijd nodig om te herstellen
                en zich aan te passen aan de nieuwe belasting. Een effectief beginners schema ziet er zo uit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dag 1:</strong> Squat, bench press, row — 3 sets van 8-12 herhalingen</li>
                <li><strong>Dag 2:</strong> Rust</li>
                <li><strong>Dag 3:</strong> Deadlift, overhead press, pull-ups (of lat pulldown) — 3 sets van 8-12 herhalingen</li>
                <li><strong>Dag 4:</strong> Rust</li>
                <li><strong>Dag 5:</strong> Herhaal dag 1 met licht verhoogd gewicht</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Veelgemaakte fouten bij beginners</h2>
              <p>
                De meeste beginners maken dezelfde fouten. Door deze te kennen, kun je ze vermijden:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Te zwaar beginnen</strong> — Start licht en bouw geleidelijk op. Techniek gaat altijd voor gewicht.</li>
                <li><strong>Geen warm-up</strong> — Neem altijd 5-10 minuten de tijd om je spieren op te warmen.</li>
                <li><strong>Inconsistentie</strong> — Regelmaat is belangrijker dan intensiteit. Liever drie keer per week licht dan een keer per maand zwaar.</li>
                <li><strong>Te weinig rust</strong> — Spieren groeien tijdens het herstel, niet tijdens de training zelf.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Het belang van goede begeleiding</h2>
              <p>
                Als beginner is de juiste techniek essentieel om blessures te voorkomen. Een ervaren <Link href="/nl/vind-jouw-personal-trainer" className="text-brand underline-offset-2 hover:underline">personal trainer</Link> kan je
                helpen met de correcte uitvoering van oefeningen, een gepersonaliseerd trainingsschema opstellen en je
                motiveren wanneer het lastig wordt. Bij SculptClub werken we met trainers die gespecialiseerd zijn in het
                begeleiden van beginners.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Progressive overload: het geheim van vooruitgang</h3>
              <p>
                Het belangrijkste principe in krachttraining is progressive overload: geleidelijk meer doen dan de vorige
                keer. Dit kan door meer gewicht toe te voegen, meer herhalingen te doen, of meer sets uit te voeren. Houd
                een logboek bij van je trainingen zodat je je voortgang kunt bijhouden.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Begin vandaag nog</h2>
              <p>
                Het mooie van krachttraining is dat iedereen ermee kan beginnen, ongeacht leeftijd of fitnessniveau. Het
                enige wat je nodig hebt is de juiste begeleiding en een beetje discipline. Plan je eerste sessie bij
                SculptClub en ontdek hoe leuk en effectief krachttraining kan zijn.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/eerste-keer-sportschool-tips" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste keer sportschool: tips</p></a>
                <a href="/nl/blog/afvallen-met-krachttraining" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Afvallen met krachttraining</p></a>
                <a href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Consistent blijven met sporten</p></a>
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om te starten met krachttraining?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een <Link href="/nl/gratis-intake" className="text-brand underline-offset-2 hover:underline">gratis intake</Link> en ontdek hoe onze trainers je kunnen helpen.
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

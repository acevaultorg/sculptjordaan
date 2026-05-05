import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer na de Bevalling in Amsterdam — SculptClub" },
  description:
    "Veilig weer beginnen met krachttraining na de bevalling. Persoonlijk, in een privé studio, met een vrouwelijke trainer die postpartum-training begrijpt.",
  keywords: [
    "personal trainer na bevalling amsterdam",
    "postpartum personal trainer amsterdam",
    "personal training postpartum",
    "krachttraining na bevalling",
    "sporten na bevalling amsterdam",
    "diastase recti training amsterdam",
    "bekkenbodem trainer amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-na-bevalling-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-na-bevalling-amsterdam",
      en: "/en/blog/postpartum-personal-trainer-amsterdam",
    },
  },
};

export default function PTNaBevallingAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer na bevalling", url: "/nl/blog/personal-trainer-na-bevalling-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer na de Bevalling in Amsterdam" description="Hoe je veilig en gestructureerd weer begint met krachttraining na de bevalling, en waarom een vrouwelijke PT met postpartum-ervaring het verschil maakt." url="/nl/blog/personal-trainer-na-bevalling-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer na de Bevalling in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub privé studio — rustige plek om postpartum weer te beginnen" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Weer beginnen met sporten na de bevalling is zelden recht-toe-recht-aan. Je
                lichaam heeft negen maanden veranderingen doorgemaakt — en daarna een
                bevalling, vaak gevolgd door maanden broken sleep, verandering in
                spierspanning, en core/bekkenbodem die niet meer vanzelfsprekend doen wat ze
                deden. In een grote sportschool kom je in dezelfde kamer terecht als 20-jarigen
                op bench presses. Dat is op zich geen probleem, maar de context helpt niet.
              </p>
              <p>
                Bij SculptClub in de Jordaan bestaat er een rustig alternatief: een privé
                studio, geen publiek, en vrouwelijke trainers die met postpartum-vrouwen werken.
                Dit artikel legt uit waar je op moet letten, wanneer je kunt beginnen, en hoe
                een personal trainer je proces veiliger en sneller maakt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wanneer is het veilig om weer te beginnen?</h2>
              <p>
                De standaard eerste benchmark is de 6-wekencontrole bij je huisarts of
                verloskundige na een ongecompliceerde bevalling (langer bij een keizersnede of
                complicaties). Groen licht daar betekent dat je veilig kunt beginnen met
                rustige training — niet dat je terug bent op je oude niveau. Het écht
                progressief opbouwen kan 3 tot 9 maanden duren, afhankelijk van de bevalling,
                hoe het herstel loopt en of je borstvoeding geeft.
              </p>
              <p>
                Belangrijker dan een datum: hoe voelt je core aan, is er sprake van diastase
                recti (uiteenwijkende rechte buikspieren), hoe stabiel is je bekkenbodem,
                en waar zit pijn of instabiliteit? Een intake-sessie bij een trainer met
                postpartum-ervaring begint bij die vragen — niet bij "hoeveel kun je liften?"
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waar een postpartum-trainer op let</h2>
              <ul>
                <li><strong>Diastase recti:</strong> We vermijden oefeningen die de buikwand naar voren duwen (bijv. klassieke crunches, volle planks) tot de diastase dichter is. In plaats daarvan: ademhalingsgestuurde core-activatie, dead bugs, side planks met aandacht.</li>
                <li><strong>Bekkenbodem:</strong> Verlies van urine bij springen of hoesten is niet "gewoon onderdeel van het moederschap" — het betekent dat de bekkenbodem aandacht nodig heeft. Vaak in samenwerking met een bekkenfysiotherapeut.</li>
                <li><strong>Gewrichten:</strong> Relaxine (het zwangerschapshormoon) blijft een aantal weken tot maanden in je systeem, zeker als je borstvoeding geeft. Gewrichten zijn iets losser en minder stabiel — technisch zuivere training wordt belangrijker.</li>
                <li><strong>Energie en slaap:</strong> Een programma dat ervan uitgaat dat je 8 uur slaapt werkt niet. Oplopende intensiteit, korte sessies, veel ademhalingsruimte.</li>
                <li><strong>Mentaal:</strong> Weer beginnen is vaak óók emotioneel. Kleine, haalbare doelen bouwen vertrouwen sneller op dan ambitieuze plannen.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een vrouwelijke trainer het verschil maakt</h2>
              <p>
                Niet omdat mannelijke trainers het niet kunnen leren — maar omdat gesprekken
                over bekkenbodem, herstel van keizersnede, seksualiteit en borstvoeding
                makkelijker en preciezer verlopen met iemand die het zelf kan uitleggen of
                meegemaakt heeft. De{" "}
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="text-brand hover:underline">vrouwelijke-trainer-gids</a>{" "}
                beschrijft waarom veel vrouwen deze voorkeur hebben; postpartum is de meest
                uitgesproken versie ervan.
              </p>
              <p>
                Bij SculptClub werken drie vrouwelijke trainers:
              </p>
              <ul>
                <li><strong><a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">Gezina</a></strong> — gespecialiseerd in vrouwentraining, kracht en cyclus-afgestemd werken. Eerste keuze voor postpartum-cliënten.</li>
                <li><strong>Eva</strong> — diëtist en personal trainer. Combineer voedingsherstel (inclusief borstvoeding) met krachttraining.</li>
                <li><strong>Andrea</strong> — kracht, houding en techniek. Rustige opbouw, veel aandacht voor uitvoering.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe ziet een eerste postpartum-programma eruit?</h2>
              <p>
                Een typische opbouw bij SculptClub, afhankelijk van je uitgangspunt:
              </p>
              <ol>
                <li><strong>Weken 1-4 na groen licht:</strong> Ademhalingsoefeningen, core-activatie, wandelen, rustige compound-bewegingen zonder gewicht (squat-tot-box, hip hinge).</li>
                <li><strong>Weken 4-8:</strong> Lichte weerstand, dumbbells, mobiliteit. Volume laag, techniek eerst. Borstvoedende moeders: sessie plannen na een voedsessie voor comfort.</li>
                <li><strong>Maand 3-6:</strong> Progressieve overload. Herintroduceren van zwaardere compound-lifts (squat, deadlift, pull-down) naarmate core en bekkenbodem stabiliseren.</li>
                <li><strong>Maand 6+:</strong> Prestatietraining als je dat wilt. Krachtdoelen, uithoudingsvermogen, lichaamssamenstelling.</li>
              </ol>
              <p>
                Geen enkele postpartum-ervaring is standaard. Het tempo hangt af van wat jouw
                lichaam aangeeft, niet van wat social media zegt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktisch — tijd met een baby</h2>
              <ul>
                <li><strong>Open 06:30-22:00 dagelijks:</strong> Een sessie plannen voor de partner naar werk gaat, tijdens de middagdut, of in de avond als iemand thuis is.</li>
                <li><strong>Gratis annuleren:</strong> Altijd. Geen 24-uursregel. Een slechte nacht? Je belt af en we plannen opnieuw. Geen gedoe.</li>
                <li><strong>Privé studio:</strong> Geen kleedkamer-gedoe. Deurcode via WhatsApp, je trainer wacht al op je.</li>
                <li><strong>Geen contract:</strong> Koop een bundel wanneer je er klaar voor bent. Pauzeer maanden als dat nodig is.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Samenwerking met een bekkenfysiotherapeut</h2>
              <p>
                Voor veel postpartum-cliënten is een bekkenfysiotherapeut de eerste stop. Als
                je al onder behandeling bent, werken onze trainers graag in overleg met je
                behandelend therapeut zodat jullie programma&apos;s elkaar versterken, niet
                tegenwerken. <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a>{" "}
                werkt als fysiotherapeut BSc bij SculptClub — handige schakel als je
                fysio-begeleiding en PT-begeleiding in één plek wilt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Zo begin je</h2>
              <ol>
                <li>Plan een{" "}
                  <a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">gratis intake met Gezina</a>{" "}
                  (of een andere vrouwelijke trainer). 45-60 minuten, kosteloos.</li>
                <li>Tijdens de intake bespreek je de bevalling, je herstel, je doelen en eventuele beperkingen. Eerlijk en zonder oordeel.</li>
                <li>De trainer maakt samen met jou een eerste plan. Eerste sessie plant je pas als jij er klaar voor bent.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vrouwelijke personal trainer</p></a>
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na blessure</p></a>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut als personal trainer</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om veilig weer te beginnen?</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake met een vrouwelijke trainer. Eerlijk, op jouw tempo.</p>
              <ButtonLink href="/nl/plan-gratis-intake-met-gezina" size="lg">Plan met Gezina<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer tijdens Zwangerschap in Amsterdam — SculptClub",
  description:
    "Veilig blijven trainen tijdens je zwangerschap. Privé studio in de Jordaan, vrouwelijke trainers met ervaring in prenatale kracht- en mobiliteitstraining.",
  keywords: [
    "personal trainer zwangerschap amsterdam",
    "prenatale personal trainer amsterdam",
    "zwanger sporten amsterdam",
    "krachttraining tijdens zwangerschap",
    "zwangerschapsfitness amsterdam",
    "prenatale training jordaan",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-zwangerschap-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-zwangerschap-amsterdam",
      en: "/en/blog/prenatal-personal-trainer-amsterdam",
    },
  },
};

export default function PTZwangerschapAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer tijdens zwangerschap", url: "/nl/blog/personal-trainer-zwangerschap-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer tijdens Zwangerschap in Amsterdam" description="Hoe je veilig blijft trainen tijdens de zwangerschap, trimester voor trimester, en waarom een vrouwelijke PT met prenatale ervaring het verschil maakt." url="/nl/blog/personal-trainer-zwangerschap-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer tijdens Zwangerschap in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub privé studio — rustige plek om tijdens zwangerschap te blijven trainen" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Gezond blijven bewegen tijdens de zwangerschap is bijna altijd een goed idee —
                mits de intensiteit en oefenkeuze meegroeien met je lichaam. De oude wijsheid
                "rust is het beste" is inmiddels achterhaald: actueel onderzoek en
                verloskundige richtlijnen ondersteunen dat gematigde krachttraining en
                mobiliteit bij een ongecompliceerde zwangerschap bescherming geven tegen
                rugklachten, zwangerschapsdiabetes, en je postpartum-herstel makkelijker maken.
              </p>
              <p>
                Dat gezegd: een grote sportschool is zelden een prettige plek om zwanger te
                trainen. Bij SculptClub in de Jordaan is er een rustig alternatief — een privé
                studio, geen drukte, en vrouwelijke trainers die met prenatale cliënten werken.
                Dit artikel legt uit wat veilig is, wat verandert per trimester en hoe je
                begint.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Eerst: klaargezet door je zorgverlener</h2>
              <p>
                Voor je begint of doorgaat met gestructureerde training hoort een kort
                gesprek met je verloskundige of gynaecoloog. Bij een gezonde zwangerschap is
                dat meestal een formaliteit. Bij voorgeschiedenis van miskramen, een
                tweelingzwangerschap, bepaalde bloeddruk- of placenta-problemen kunnen er
                beperkingen zijn — en die volg je altijd.
              </p>
              <p>
                Rode vlaggen die training stoppen en contact met je zorgverlener vragen: bloed
                verlies, ongewone pijn, duizeligheid, sterke kortademigheid, contracties,
                verlies van vocht. Deze zijn niet "gewoon onderdeel van training" — je belt
                eerst, train pas verder na groen licht.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat verandert er per trimester?</h2>

              <h3 className="text-xl font-bold mt-8 mb-3">Eerste trimester (week 1-13)</h3>
              <p>
                Van buitenaf nog weinig zichtbaar, van binnen enorm veel. Misselijkheid en
                vermoeidheid kunnen training ongemakkelijk maken. Als je al een training-
                routine hebt: grotendeels doorgaan op vergelijkbare intensiteit is prima, mits
                je je energie aanhoudt. Wat we aanpassen: geen nieuwe personal records, meer
                aandacht voor hydratatie, minder hoge-impact sprongen of botsingen.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Tweede trimester (week 14-27)</h3>
              <p>
                Vaak de meest comfortabele periode. Misselijkheid neemt af, energie komt
                terug, buik begint te groeien. Vanaf ongeveer week 16 vermijden we op de rug
                liggende oefeningen (vena cava-compressie) en passen we oefeningen aan naar
                zij- of rechtop-varianten. Kracht en conditioning blijven mogelijk — in
                beheerste vorm met focus op techniek en ademhaling.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Derde trimester (week 28-geboorte)</h3>
              <p>
                Relaxine laat gewrichten losser worden, balans verandert, vermoeidheid neemt
                vaak weer toe. We verlagen intensiteit, focussen op houding, bekkenbodem,
                voorbereiding op de bevalling (mobiliteit heupen, kracht in de benen). Veel
                cliënten kunnen tot dicht bij de uitgerekende datum doorgaan met korte sessies
                — maar het tempo bepaalt je lichaam.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat een prenatal-aware trainer doet</h2>
              <ul>
                <li><strong>Past compound-lifts aan:</strong> Squats, deadlifts en pull-oefeningen blijven meestal veilig met gematigde belasting; de Valsalva-manoeuvre (ademvasthouden) vermijden we.</li>
                <li><strong>Aandacht voor core:</strong> Geen klassieke crunches of volle planks in de tweede helft — in plaats daarvan ademgestuurde core-activatie en dead bugs.</li>
                <li><strong>Bekkenbodem-werk:</strong> Zowel ontspanning als activatie. Overactivatie kan de bevalling bemoeilijken; onderactivatie leidt tot postpartum-problemen.</li>
                <li><strong>Cardio binnen comfort:</strong> Wandelen, lichte fiets, zwemmen — hartslag is niet meer de harde grens (was 140); we gaan op "kan ik nog praten?"-niveau (Borg 6-7).</li>
                <li><strong>Heup-mobiliteit:</strong> Voorbereiding op de bevalling door beweeglijkheid in heupen en onderrug te behouden.</li>
                <li><strong>Balans en val-preventie:</strong> Zwaartepunt verschuift; oefeningen op één been alleen met steun.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een vrouwelijke trainer</h2>
              <p>
                Dezelfde redenen als bij postpartum, alleen meer geconcentreerd. Vragen over
                misselijkheid, bekkenbodem, seksualiteit in de zwangerschap en borstvoeding-
                voorbereiding bespreek je makkelijker met iemand die het zelf meegemaakt heeft
                of dagelijks met zwangere cliënten werkt. Zie ook de{" "}
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="text-brand hover:underline">vrouwelijke-trainer-gids</a>.
              </p>
              <p>
                Bij SculptClub drie vrouwelijke trainers:
              </p>
              <ul>
                <li><strong><a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">Gezina</a></strong> — vrouwentraining, kracht, prestatie. Eerste keuze voor prenatale cliënten.</li>
                <li><strong>Eva</strong> — diëtist en PT. Voedingsaanpassingen tijdens de zwangerschap + krachtwerk.</li>
                <li><strong>Andrea</strong> — kracht, houding, techniek. Veel aandacht voor uitvoering.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktisch — zwanger in de studio</h2>
              <ul>
                <li><strong>Geopend 06:30-22:00 dagelijks:</strong> Plan rond je energie, niet rond openingstijden.</li>
                <li><strong>Privé studio:</strong> Geen grote spiegel-wand, geen bench-press publiek. Jouw tempo, jouw ruimte.</li>
                <li><strong>Altijd gratis annuleren:</strong> Een mindere dag? Je belt af en plant opnieuw.</li>
                <li><strong>Geen contract:</strong> Kies een bundel van 4 of 8 sessies. Pauzeer rondom de bevalling zonder opzegtermijn.</li>
                <li><strong>Samenwerking met bekkenfysio:</strong> Vraag je fysio om kort te overleggen met je trainer — veel sneller dan los werken.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Zo begin je</h2>
              <ol>
                <li>Check met je verloskundige of gynaecoloog dat gestructureerd bewegen past bij jouw zwangerschap.</li>
                <li>Plan een{" "}
                  <a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">gratis intake met Gezina</a>{" "}
                  (of een andere vrouwelijke trainer). 45-60 minuten, kosteloos.</li>
                <li>Tijdens de intake bespreek je welk trimester, welke beperkingen en welke doelen. De trainer schrijft samen met jou een plan.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-na-bevalling-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na bevalling</p></a>
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vrouwelijke personal trainer</p></a>
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut als personal trainer</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Veilig trainen tijdens je zwangerschap</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake met een vrouwelijke trainer. Op jouw tempo, in jouw trimester.</p>
              <ButtonLink href="/nl/plan-gratis-intake-met-gezina" size="lg">Plan met Gezina<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Small Group Training in Amsterdam — SculptClub Jordaan",
  description:
    "Train samen met je partner, vriend(in) of collega's. Small group personal training in een privé studio in de Jordaan. Vanaf 2 personen, geen contract.",
  keywords: [
    "small group training amsterdam",
    "duo personal training amsterdam",
    "partner training amsterdam",
    "samen sporten amsterdam jordaan",
    "personal training met zijn tweeen",
    "small group pt amsterdam",
    "team training amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/small-group-training-amsterdam",
    languages: {
      nl: "/nl/blog/small-group-training-amsterdam",
      en: "/en/blog/small-group-training-amsterdam",
    },
  },
};

export default function SmallGroupTrainingAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Small group training", url: "/nl/blog/small-group-training-amsterdam" }]} />
      <BlogPostingJsonLd title="Small Group Training in Amsterdam" description="Samen trainen met partner, vriend of collega in een privé studio in de Jordaan — hoe het werkt, wat het kost en voor wie het geschikt is." url="/nl/blog/small-group-training-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Small Group Training in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-overview.jpeg" alt="SculptClub privé studio — ruimte voor small group training" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Niet iedereen wil solo trainen. Voor veel mensen werkt training beter met
                iemand erbij — een partner die dezelfde ochtend vrij heeft, een vriend(in)
                met dezelfde doelen, twee of drie collega&apos;s die de werkweek willen
                onderbreken. Small group training bij SculptClub in de Jordaan geeft je de
                kwaliteit van personal training tegen een lagere prijs per persoon, zonder
                de drukte van een grote sportschool.
              </p>
              <p>
                Dit artikel legt uit hoe small group werkt bij SculptClub, voor welke
                samenstellingen het geschikt is, wat het kost en waarom het anders voelt dan
                een CrossFit-box of bootcamp-groep.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat is small group training bij SculptClub?</h2>
              <p>
                Small group = 2 tot 4 personen die samen met één trainer een sessie volgen in
                onze privé studio. Je bepaalt zelf met wie je traint — het zijn altijd
                vaste, besloten groepjes. Geen vreemden, geen wachtrij voor een rack, geen
                aangekondigde WOD van de dag.
              </p>
              <p>
                Het programma wordt gemaakt voor jullie gezamenlijke doel of — als de doelen
                verschillen — met individuele varianten binnen dezelfde sessie. De trainer
                geeft gedeelde instructies, houdt techniek in de gaten en past belasting
                per persoon aan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie werkt het goed?</h2>
              <ul>
                <li><strong>Stellen / partners:</strong> Gezamenlijke beschikbaarheid, vergelijkbare fitheidsdoelen, accountability ingebouwd.</li>
                <li><strong>Vriend(inn)en:</strong> Twee of drie mensen die elkaar al motiveren. Kosten delen maakt het toegankelijker.</li>
                <li><strong>Collega&apos;s:</strong> Vaste afspraak in de week, korte afstand tot Centrum en Zuidas, factuur op bedrijfsnaam mogelijk (zie{" "}
                  <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="text-brand hover:underline">zakelijke personal training</a>).</li>
                <li><strong>Familie:</strong> Moeder-dochter, broers, ouders-met-volwassen-kinderen. Trainen samen is een andere band-versterker dan koffie drinken.</li>
                <li><strong>Kleine teams (3-4):</strong> Startups, marketing-teams, kleine zaken. Een wekelijkse "energize"-sessie in plaats van pizza-lunch.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat kost het?</h2>
              <p>
                Small group tarieven zijn per-trainer-en-sessie, niet per persoon. Je deelt de
                kosten met je groep. Een duo-sessie (2 personen) bij Andrea kost €45 voor 45
                minuten — dus €22,50 per persoon. Een trio (3 personen) verlaagt dat tot €15
                per persoon bij dezelfde sessielengte.
              </p>
              <p>
                Bij trainers zonder vast tarief (Eva, Gezina, Dara, Hamish, Jearmey) bespreek
                je het small-group tarief tijdens de gratis intake. In Amsterdam liggen small
                group PT-tarieven typisch tussen €12 en €30 per persoon per sessie — een stuk
                onder solo personal training (€45-85) en vergelijkbaar met premium sportschool-
                abonnementen. Zie de{" "}
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="text-brand hover:underline">kosten-gids voor personal training</a>{" "}
                voor meer context.
              </p>
              <p>
                Geen contract, geen abonnement. Je boekt een losse sessie of een bundel,
                pauzeert wanneer het leven tussenkomt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom niet gewoon een CrossFit box of bootcamp?</h2>
              <p>
                Helemaal niets mis met CrossFit of bootcamp als je daarbij thuishoort. Ze zijn
                echter:
              </p>
              <ul>
                <li><strong>Open groepen:</strong> Jij kiest niet wie er meedoet. Energie wisselt per sessie.</li>
                <li><strong>Vast programma:</strong> WOD van de dag, niet aangepast op jouw doel.</li>
                <li><strong>Hoge intensiteit default:</strong> Werkt voor conditionering, minder voor gerichte opbouw van squat-techniek of blessureherstel.</li>
                <li><strong>Geen privé ruimte:</strong> Coaching is gedeeld, techniekfout gaat onopgemerkt voorbij.</li>
              </ul>
              <p>
                Small group bij SculptClub = besloten groepje, programmatische personal
                training, privé studio. Je betaalt iets meer dan bootcamp, maar je krijgt
                één-op-bijna-één coaching.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Welke trainers bieden small group aan?</h2>
              <p>
                De meeste trainers kunnen small group. Sommigen hebben er bijzondere
                specialisatie in:
              </p>
              <ul>
                <li><strong><a href="/nl/plan-gratis-intake-met-dara" className="text-brand hover:underline">Dara</a></strong> — specialist in small group. Energieke aanpak, goed voor gemengde groepen en collega-teams.</li>
                <li><strong>Alex</strong> — kracht en calisthenics in duo of trio. Geschikt als iedereen in de groep al basisconditie heeft.</li>
                <li><strong>Andrea</strong> — technische opbouw, goede pasvorm voor duo&apos;s die samen kracht willen leren.</li>
                <li><strong><a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">Gezina</a></strong> — vrouwentraining in klein groepje (2-3 vrouwen).</li>
                <li><strong>Jearmey</strong> — kracht en atletische prestatie; populair voor duo&apos;s met sportachtergrond.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktisch — hoe plan je samen?</h2>
              <ul>
                <li><strong>Één persoon boekt:</strong> De sessie wordt geboekt onder één naam. Facturering regel je onderling of via de optionele bedrijfsfactuur.</li>
                <li><strong>Deurcode voor iedereen:</strong> Standaard naar de boeker, maar op verzoek naar alle deelnemers via WhatsApp.</li>
                <li><strong>Uitval:</strong> Als één persoon afbelt, kan de sessie meestal doorgaan voor de rest (afhankelijk van je trainer). Gratis annuleren blijft geldig.</li>
                <li><strong>Factuur op bedrijfsnaam:</strong> Voor collega-groepen standaard mogelijk. Detail bespreek je met de trainer.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Zo begin je</h2>
              <ol>
                <li>Kies met je groep een trainer die bij jullie past (specialisatie op de <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">trainerpagina</a>).</li>
                <li>Eén persoon plant een{" "}
                  <a href="/nl/gratis-intake" className="text-brand hover:underline">gratis intake</a> —
                  bij voorkeur samen, maar één persoon kan ook het verkenningsgesprek voeren.</li>
                <li>Tijdens de intake bespreek je groepssamenstelling, doelen en frequentie. Daarna plant de trainer de eerste gezamenlijke sessie.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Zakelijk personal training</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
                <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren voor PT</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Privé versus grote sportschool</p></a>
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vrouwelijke personal trainer</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Plan een gratis intake met je groep</h3>
              <p className="text-muted-foreground mb-6">Duo, trio of klein team. Eerste kennismaking is altijd gratis.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

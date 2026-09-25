import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, PersonJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Stress & Burn-out Amsterdam — SculptClub" },
  description:
    "High-end personal training voor ondernemers en high performers met stress en burn-out klachten. The Ascend Method van Joey: kracht, ademwerk en zenuwstelselregulatie in een privé studio in de Jordaan. Gratis intake.",
  keywords: [
    "personal trainer stress amsterdam",
    "personal trainer burn-out amsterdam",
    "high-end personal training amsterdam",
    "breathwork personal training amsterdam",
    "nervous system regulation coach amsterdam",
    "personal trainer voor ondernemers amsterdam",
    "the ascend method",
    "personal trainer jordaan stress",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-stress-burnout-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-stress-burnout-amsterdam",
      en: "/en/blog/burnout-personal-trainer-amsterdam",
    },
  },
  openGraph: {
    title: { absolute: "Personal Trainer Stress & Burn-out Amsterdam — The Ascend Method" },
    description:
      "Voor ondernemers en high performers: training die je zenuwstelsel reguleert in plaats van extra belast. Kracht + ademwerk + herstel in een privé studio in de Jordaan.",
    url: "/nl/blog/personal-trainer-stress-burnout-amsterdam",
    type: "article",
  },
};

export default function PersonalTrainerStressBurnoutAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal trainer stress & burn-out", url: "/nl/blog/personal-trainer-stress-burnout-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Stress & Burn-out Amsterdam"
        description="High-end personal training voor ondernemers en high performers met stress- en burn-outklachten. The Ascend Method: kracht + ademwerk + zenuwstelselregulatie."
        url="/nl/blog/personal-trainer-stress-burnout-amsterdam"
        datePublished="2026-05-12"
        dateModified="2026-05-12"
      />
      <PersonJsonLd
        name="Joey"
        description="Personal trainer en zenuwstelsel-coach in Amsterdam Jordaan. Begeleidt high-performers met stress en burn-outklachten via The Ascend Method: kracht, ademwerk en zelfonderzoek."
        image="/images/trainers/joey.jpg"
        url="/nl/plan-gratis-intake-met-joey"
        jobTitle="Personal Trainer · The Ascend Method"
        languages={["NL", "EN"]}
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer Stress &amp; Burn-out in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Joey · SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  12 mei 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="Rustige privé studio bij SculptClub in de Jordaan — zenuwstelselregulatie zonder onnodige prikkels"
                fill
                className="object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {/* YMYL_LIGHT disclaimer per v19.45 google-policy-compliance */}
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Belangrijk: dit is geen vervanging voor medische zorg.</strong>
                    <span className="text-muted-foreground">
                      Heb je een klinische diagnose burn-out, ervaar je ernstige uitputting,
                      depressie, of ben je onder behandeling van een huisarts, bedrijfsarts,
                      psycholoog of psychiater? Volg eerst hun advies. The Ascend Method is
                      performance- en zenuwstelselcoaching voor mensen die nog functioneel
                      zijn maar merken dat hun systeem overbelast is — een aanvulling op
                      reguliere zorg, geen vervanging.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Je staat continu “aan”. Druk werk, beslissingen nemen, mensen aansturen,
                deadlines halen. Op papier draait alles, maar je merkt dat je energie afneemt, je
                focus versnippert en je ‘s avonds niet meer echt aanwezig bent. Een reguliere
                sportschool maakt dat vaak erger: harder pushen, meer prikkels, een training die
                voelt als nóg een afspraak in een al overvolle agenda.
              </p>
              <p>
                Bij SculptClub in de Jordaan werkt <strong>Joey</strong> met een andere aanpak:
                <em> The Ascend Method — Inner Alignment System</em>. Voor ondernemers en
                high performers die niet alleen sterker willen worden, maar weer in controle
                willen zijn over hun eigen systeem.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is deze aanpak?</h2>
              <p>
                Ondernemers, leidinggevenden, creatieve professionals en andere high
                performers — mannen en vrouwen — die veel verantwoordelijkheid dragen
                en merken dat hun lichaam meegeeft voordat hun agenda dat doet. Herken je een
                van deze signalen?
              </p>
              <ul>
                <li>Je hoofd staat ‘s avonds niet uit, slapen lukt minder goed</li>
                <li>Workouts geven je niet meer de energie die ze vroeger gaven — eerder andersom</li>
                <li>Je traint maar mist focus, of slaat juist door en raakt geblesseerd</li>
                <li>Je voelt je vaak “wired but tired” — gespannen maar uitgeput</li>
                <li>Je weet rationeel wat je moet doen maar krijgt het niet meer gedaan</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe ziet een sessie eruit?</h2>
              <p>
                Een sessie van 60 minuten, volledig afgestemd op jouw staat en energie van dat
                moment. Geen vast schema dat je doorploetert — we beginnen bij waar je nu
                bent en bouwen vanaf daar op.
              </p>
              <ol>
                <li>
                  <strong>Check-in.</strong> Wat speelt er deze week? Hoe heb je geslapen? Waar
                  zit er spanning in je lichaam? Dit bepaalt de toon van de sessie.
                </li>
                <li>
                  <strong>Mobiliteit en ademhaling.</strong> Gerichte ademwerk- en
                  beweegoefeningen die je zenuwstelsel reguleren en je terugbrengen naar
                  focus — voordat we gaan trainen, niet erna.
                </li>
                <li>
                  <strong>Krachttraining op maat.</strong> Functionele kracht- en
                  mobiliteitsoefeningen, afgestemd op wat jouw lichaam vandaag kan
                  verdragen. Geen ego, geen onnodige prikkels — kwaliteit boven volume.
                </li>
                <li>
                  <strong>Herstel en regulatie.</strong> Ademhalings- en regulatietechnieken
                  om de sessie af te sluiten met een rustiger zenuwstelsel dan waarmee je
                  binnenkwam.
                </li>
                <li>
                  <strong>Mentale opdracht.</strong> Een kleine, specifieke aanwijzing om mee te
                  nemen naar de week. Zelfonderzoek, niet huiswerk.
                </li>
              </ol>
              <p>
                Je verlaat de studio met meer energie dan waarmee je binnenkwam — niet
                uitgeput, maar gereguleerd. Dat is de toets.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat is The Ascend Method?</h2>
              <p>
                The Ascend Method is een geïntegreerde aanpak waarin fysieke training, ademhaling
                en zenuwstelselregulatie samenkomen. In plaats van alleen het lichaam te trainen,
                optimaliseer je hoe je hele systeem functioneert — zodat je niet alleen
                sterker wordt, maar ook meer rust, focus en controle ervaart in je dagelijks
                leven.
              </p>
              <p>
                Centraal staat de <strong>SQ-ladder</strong>: een raamwerk dat in kaart brengt
                waar jij op dit moment functioneert. Bevind je je vooral in overlevingsmodus en
                spanning? Is er al meer balans tussen werk en privé, maar mis je flow? Of werk je
                aan de top maar wil je duurzamer kunnen pieken? Vanuit jouw vertrekpunt bepalen
                we waar de focus van het traject ligt.
              </p>
              <p>
                Het idee is bewegen van overleven naar flow — van constant denken naar
                weer voelen en aanwezig zijn in je lichaam. Niet via meditatie als losse
                discipline, maar via training waarin dat is verweven.
              </p>
              <p className="text-muted-foreground italic">
                “Wisdom isn’t studied, it’s embodied.” — Joey
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom dit anders is dan reguliere personal training</h2>
              <p>
                Standaard personal training houdt zelden rekening met chronische stress,
                overbelasting en mentale druk. De aanname is: meer trainen = meer resultaat.
                Voor high performers met een overbelast systeem klopt dat niet. Meer prikkels
                op een al overbelast zenuwstelsel = meer uitputting, niet meer kracht.
              </p>
              <p>De Ascend Method richt zich op je volledige systeem:</p>
              <ul>
                <li>Je traint zonder jezelf verder uit te putten</li>
                <li>Je leert je stressniveau actief reguleren tijdens en buiten de sessie</li>
                <li>Je bouwt energie op in plaats van het te verliezen</li>
                <li>Je ontwikkelt fysieke én mentale veerkracht — niet de een tegen de ander</li>
              </ul>
              <p>
                Het is training voor mensen die niet alleen sterker willen worden, maar beter
                willen functioneren op alle niveaus.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktisch</h2>
              <p>
                <strong>Locatie:</strong> SculptClub aan de Egelantiersgracht 424 in de Jordaan,
                Amsterdam. Privé studio — geen receptie, geen drukte, geen andere klanten
                tegelijk. Deurcode ontvang je om 00:00 in de nacht ervoor via WhatsApp.
              </p>
              <p>
                <strong>Duur:</strong> 60 minuten per sessie.
              </p>
              <p>
                <strong>Tarief:</strong> op aanvraag. Joey werkt met een beperkte klantkring
                zodat elke sessie de aandacht krijgt die de aanpak vraagt — kwaliteit
                boven volume.
              </p>
              <p>
                <strong>Talen:</strong> Nederlands &amp; Engels.
              </p>
              <p>
                <strong>Annuleren:</strong> altijd gratis. Geen abonnement, geen contract.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Een gratis kennismaking</h2>
              <p>
                De eerste stap is een gratis intakegesprek. Daarin breng je samen in kaart waar
                je nu staat op de SQ-ladder, wat je doelen zijn en hoe een traject eruit zou
                kunnen zien. Geen verplichtingen — je beslist zelf of het past.
              </p>
              <p>
                Plan je intake via Joey’s{" "}
                <Link href="/nl/plan-gratis-intake-met-joey" className="text-brand hover:underline">
                  pagina
                </Link>{" "}
                of stuur direct een bericht via WhatsApp:{" "}
                <a
                  href="https://wa.me/31639175337?text=Hoi%20Joey%21%20Ik%20wil%20graag%20een%20gratis%20intake%20boeken."
                  className="text-brand hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +31 6 39 17 53 37
                </a>
                .
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/nl/blog/personal-trainer-rugklachten-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer bij rugklachten</p>
                </Link>
                <Link href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p>
                </Link>
                <Link href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p>
                </Link>
                <Link href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors">Consistent blijven met sporten</p>
                </Link>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar voor een rustiger systeem?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een gratis intake met Joey. Geen verplichtingen — we bespreken waar je
                staat en wat haalbaar is.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/plan-gratis-intake-met-joey" size="lg">
                  Plan gratis intake met Joey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31639175337?text=Hoi%20Joey%21%20Ik%20wil%20graag%20een%20gratis%20intake%20boeken."
                  external
                  variant="outline"
                  size="lg"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp Joey
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

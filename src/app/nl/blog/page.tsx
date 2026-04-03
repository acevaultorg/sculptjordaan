import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityLinks } from "@/config/acuity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tips, Inzichten & Verhalen | SculptClub Amsterdam Jordaan",
  description:
    "Lees onze blog over personal training, open gym, fitness tips en meer vanuit onze studio in de Jordaan, Amsterdam.",
  alternates: {
    canonical: "/nl/blog",
    languages: {
      nl: "/nl/blog",
      en: "/en/blog",
    },
  },
};

const posts = [
  {
    title: "Personal Training in Amsterdam Jordaan: Wat je moet weten",
    excerpt:
      "Alles over personal training in de Jordaan. Ontdek wat een privé studio biedt, wat je kunt verwachten en waarom de Jordaan de perfecte locatie is.",
    category: "Personal Training",
    href: "/nl/blog/personal-training-amsterdam-jordaan",
    date: "24 maart 2026",
  },
  {
    title: "Krachttraining voor Beginners: Complete Gids",
    excerpt:
      "Begin met krachttraining: leer de basisoefeningen, hoe vaak je moet trainen en hoe je blessures voorkomt.",
    category: "Training",
    href: "/nl/blog/krachttraining-voor-beginners",
    date: "24 maart 2026",
  },
  {
    title: "Open Gym vs Sportschool: Wat past bij jou?",
    excerpt:
      "Vergelijk Open Gym met een reguliere sportschool op prijs, privacy, apparatuur en sfeer.",
    category: "Open Gym",
    href: "/nl/blog/open-gym-vs-sportschool",
    date: "24 maart 2026",
  },
  {
    title: "Wat kost personal training in Amsterdam?",
    excerpt:
      "Ontdek de gemiddelde prijzen, wat de kosten bepaalt en waarom een boutique studio uitstekende waarde biedt vanaf €45 per sessie.",
    category: "Personal Training",
    href: "/nl/blog/wat-kost-personal-training-amsterdam",
    date: "24 maart 2026",
  },
  {
    title: "Eerste keer naar de sportschool: 7 tips",
    excerpt:
      "Zenuwachtig voor je eerste bezoek? Deze 7 praktische tips helpen je om zelfverzekerd binnen te stappen en een goede start te maken.",
    category: "Beginners",
    href: "/nl/blog/eerste-keer-sportschool-tips",
    date: "24 maart 2026",
  },
  {
    title: "Personal Trainer in Amsterdam: Zo vind je de beste match",
    excerpt:
      "Hoe vind je de juiste personal trainer? Ontdek waar je op moet letten, welke rode vlaggen je moet vermijden en waarom een gratis intake het verschil maakt.",
    category: "Personal Training",
    href: "/nl/blog/personal-trainer-amsterdam",
    date: "24 maart 2026",
  },
  {
    title: "Sportschool zonder abonnement in Amsterdam: Je opties",
    excerpt:
      "Geen zin in een langlopend abonnement? Ontdek flexibele sportopties in Amsterdam, van pay-per-session tot Open Gym.",
    category: "Open Gym",
    href: "/nl/blog/sportschool-zonder-abonnement-amsterdam",
    date: "24 maart 2026",
  },
  {
    title: "Afvallen met krachttraining: Waarom het werkt",
    excerpt:
      "Ontdek waarom krachttraining effectiever is dan cardio voor vetverbranding. De wetenschap achter het afterburn effect en praktische tips.",
    category: "Training",
    href: "/nl/blog/afvallen-met-krachttraining",
    date: "24 maart 2026",
  },
  {
    title: "Hoe blijf je consistent met sporten? 7 bewezen tips",
    excerpt:
      "Moeite om vol te houden? Ontdek 7 praktische tips om consistent te blijven met sporten en een duurzame trainingsroutine op te bouwen.",
    category: "Motivatie",
    href: "/nl/blog/consistent-blijven-met-sporten",
    date: "26 maart 2026",
  },
  {
    title: "Privé sportschool vs grote sportschool: De verschillen",
    excerpt:
      "Wat is het verschil tussen een privé sportschool en een grote keten? Vergelijk sfeer, apparatuur, persoonlijke aandacht en prijs.",
    category: "Vergelijking",
    href: "/nl/blog/prive-sportschool-vs-grote-sportschool",
    date: "26 maart 2026",
  },
  {
    title: "Studio huren als personal trainer in Amsterdam",
    excerpt:
      "Op zoek naar een trainingsruimte? Ontdek waarom het huren van een studio de slimste keuze is voor ZZP personal trainers. Vanaf €12 per uur.",
    category: "Voor Trainers",
    href: "/nl/blog/studio-huren-personal-trainer-amsterdam",
    date: "26 maart 2026",
  },
  {
    title: "Voedingscoach Amsterdam: Wat doet een diëtist en wanneer heb je er een nodig?",
    excerpt:
      "Wat is het verschil tussen een voedingscoach en diëtist? Wanneer helpt professioneel voedingsadvies écht? En hoe combineer je het met personal training.",
    category: "Voeding",
    href: "/nl/blog/voedingscoach-amsterdam",
    date: "30 maart 2026",
  },
  {
    title: "Fysiotherapeut als Personal Trainer in Amsterdam: Trainen met een blessure",
    excerpt:
      "Een blessure hoeft geen einde van je training te betekenen. Ontdek hoe een fysiotherapeut als personal trainer je veilig laat doortrainen en sneller laat herstellen.",
    category: "Revalidatie",
    href: "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
    date: "30 maart 2026",
  },
  {
    title: "Gratis intake personal trainer Amsterdam: wat te verwachten",
    excerpt:
      "Wat is een gratis intake bij een personal trainer in Amsterdam? Ontdek wat er tijdens de kennismaking gebeurt, hoe je je voorbereidt en wat je moet vragen.",
    category: "Tips",
    href: "/nl/blog/gratis-intake-personal-trainer-amsterdam",
    date: "1 april 2026",
  },
  {
    title: "Gym huren per uur Amsterdam: flexibele trainingsruimte voor ZZP-trainers",
    excerpt:
      "Op zoek naar een gym of trainingsruimte per uur in Amsterdam? Alles over flexibele studio verhuur voor freelance personal trainers en fysiotherapeuten. Vanaf €12/uur.",
    category: "Voor Trainers",
    href: "/nl/blog/gym-huren-per-uur-amsterdam",
    date: "1 april 2026",
  },
  {
    title: "Trainingsruimte huren als ZZP personal trainer in Amsterdam",
    excerpt:
      "Praktische gids voor ZZP personal trainers: kosten, belasting, verzekering en hoe je begint met het huren van een trainingsruimte in Amsterdam.",
    category: "Voor Trainers",
    href: "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
    date: "2 april 2026",
  },
  {
    title: "Fysiotherapie studio huren in Amsterdam",
    excerpt:
      "Op zoek naar een ruimte voor fysiotherapie of revalidatietraining? Huur een volledig uitgeruste studio per uur. Ideaal voor ZZP-fysiotherapeuten.",
    category: "Voor Trainers",
    href: "/nl/blog/fysiotherapie-studio-huren-amsterdam",
    date: "2 april 2026",
  },
  {
    title: "Sportschool Jordaan Amsterdam: jouw opties op een rij",
    excerpt:
      "Op zoek naar een sportschool in de Jordaan? Vergelijk grote ketens, boutique studio's en privé gyms. Ontdek wat het beste bij je past.",
    category: "Lokaal",
    href: "/nl/blog/sportschool-jordaan-amsterdam",
    date: "2 april 2026",
  },
  {
    title: "Personal training voor afvallen in Amsterdam",
    excerpt:
      "Wil je afvallen met begeleiding? Ontdek waarom krachttraining effectiever is dan cardio en hoe een personal trainer je helpt.",
    category: "Training",
    href: "/nl/blog/personal-training-afvallen-amsterdam",
    date: "2 april 2026",
  },
  {
    title: "Personal trainer Amsterdam West & Oud-West",
    excerpt:
      "Op zoek naar een personal trainer in Amsterdam West? SculptClub in de Jordaan is 5 minuten fietsen. Gratis intake, vanaf €45/sessie.",
    category: "Lokaal",
    href: "/nl/blog/personal-trainer-amsterdam-west",
    date: "2 april 2026",
  },
  {
    title: "Personal trainer Amsterdam Centrum",
    excerpt:
      "Op zoek naar een personal trainer in Amsterdam Centrum? SculptClub in de Jordaan is om de hoek. Gratis intake, vanaf €45/sessie.",
    category: "Lokaal",
    href: "/nl/blog/personal-trainer-amsterdam-centrum",
    date: "2 april 2026",
  },
  {
    title: "Personal trainer De Pijp Amsterdam",
    excerpt:
      "Op zoek naar een personal trainer in De Pijp? SculptClub in de Jordaan is 10 minuten fietsen via het Vondelpark.",
    category: "Lokaal",
    href: "/nl/blog/personal-trainer-de-pijp-amsterdam",
    date: "2 april 2026",
  },
  {
    title: "Boutique gym vs sportschool keten: wat past bij jou?",
    excerpt:
      "Twijfel je tussen een boutique gym en een grote sportschool? Vergelijk prijs, sfeer, apparatuur en begeleiding.",
    category: "Vergelijking",
    href: "/nl/blog/boutique-gym-vs-sportschool-keten",
    date: "2 april 2026",
  },
  {
    title: "Personal trainer voor beginners",
    excerpt:
      "Nog nooit gesport? Een personal trainer helpt beginners veilig op weg. Gratis intake, geen ervaring nodig.",
    category: "Training",
    href: "/nl/blog/personal-trainer-voor-beginners",
    date: "2 april 2026",
  },
  {
    title: "Personal trainer Amsterdam Oost",
    excerpt:
      "Op zoek naar een personal trainer in Amsterdam Oost? SculptClub in de Jordaan is 15 minuten fietsen.",
    category: "Lokaal",
    href: "/nl/blog/personal-trainer-amsterdam-oost",
    date: "2 april 2026",
  },
  {
    title: "Personal Trainer na een Blessure in Amsterdam",
    excerpt:
      "Veilig terugkeren naar sport na een blessure? Een personal trainer helpt met hersteltraining op maat.",
    category: "Herstel",
    href: "/nl/blog/personal-trainer-na-blessure-amsterdam",
    date: "3 april 2026",
  },
  {
    title: "Krachttraining voor Vrouwen in Amsterdam",
    excerpt:
      "Krachttraining is de beste investering in vrouwelijke gezondheid. Ontdek waarom en hoe je begint.",
    category: "Training",
    href: "/nl/blog/krachttraining-voor-vrouwen",
    date: "3 april 2026",
  },
];

export default function BlogPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
        ]}
      />

      {/* Hero + Posts grid */}
      <Section bg="muted">
        <SectionHeader
          as="h1"
          overline="Blog"
          title="Tips, Inzichten & Verhalen"
          description="Artikelen over personal training, fitness, voeding en alles rondom onze studio in de Jordaan."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <Link href={post.href} className="block h-full">
                <Card className="h-full flex flex-col cursor-pointer hover:shadow-brand-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-brand">
                      Lees meer
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section bg="dark">
        <SectionHeader
          overline="Klaar om te beginnen?"
          title="Boek een Gratis Proefles"
          description="Ervaar zelf hoe het is om te trainen in onze privé studio in de Jordaan."
        />
        <FadeIn className="flex justify-center">
          <ButtonLink
            href={acuityLinks.generic}
            size="lg"
            className="text-white"
          >
            Boek Gratis Proefles
          </ButtonLink>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

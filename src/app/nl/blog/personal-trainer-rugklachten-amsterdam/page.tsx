import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer bij Rugklachten Amsterdam — SculptClub" },
  description:
    "Rugklachten? Bij SculptClub traint je met Hamish, fysiotherapeut BSc. Veilig, opbouwend en effectief. Gratis intake in Amsterdam Jordaan.",
  keywords: [
    "personal trainer rugklachten amsterdam",
    "personal trainer rugpijn amsterdam",
    "fysiotherapeut personal trainer amsterdam",
    "personal trainer lage rugpijn",
    "krachttraining rugklachten amsterdam",
    "personal trainer hernia amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-rugklachten-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-rugklachten-amsterdam",
      en: "/en/blog/back-pain-personal-trainer-amsterdam",
    },
  },
};

export default function PersonalTrainerRugklachtenAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer bij rugklachten", url: "/nl/blog/personal-trainer-rugklachten-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer bij Rugklachten Amsterdam" description="Hoe een fysiotherapeut-personal trainer rugklachten aanpakt en je veilig sterker maakt." url="/nl/blog/personal-trainer-rugklachten-amsterdam" datePublished="2026-04-19" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer bij Rugklachten in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />Hamish — Physiotherapist BSc</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />19 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Personal training studio SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Rugklachten zijn een van de meest voorkomende redenen waarom mensen stoppen met sporten
                — of nooit beginnen. Toch is beweging en gerichte krachttraining juist het krachtigste
                instrument om rugpijn structureel te verminderen. De sleutel zit in het verschil tussen
                een gewone personal trainer en iemand met een fysiotherapeutische achtergrond.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom rugklachten en sporten zo lastig samengaan</h2>
              <p>
                De meeste mensen met rugklachten krijgen het advies: rust houden en voorzichtig zijn.
                Dat klopt gedeeltelijk — verkeerde belasting op het verkeerde moment maakt het erger.
                Maar te veel rust leidt tot verzwakking van de stabiliserende spieren rondom de
                wervelkolom, wat de pijn op termijn juist versterkt. Het gaat dus om
                <em> de juiste beweging, op het juiste moment, in de juiste dosering.</em>
              </p>
              <p>
                Dat is precies wat een fysiotherapeut-personal trainer onderscheidt van een
                reguliere PT. Waar een gewone trainer werkt met standaardprogramma&#39;s, begint iemand
                met een fysiotherapeutische opleiding bij de analyse: wat is de oorsprong van de
                klacht, welke structuren zijn betrokken, en hoe reageer jij op belasting?
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hamish: fysiotherapeut én personal trainer</h2>
              <p>
                Bij SculptClub is{" "}
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">
                  Hamish je trainer
                </a>{" "}
                als je met rugklachten wilt trainen. Hamish heeft een Bachelor of Science in
                Fysiotherapie en combineert die kennis dagelijks met zijn werk als personal trainer.
                Dat betekent concreet:
              </p>
              <ul>
                <li><strong>Bewegingsanalyse:</strong> Hamish kijkt hoe jij beweegt. Hoe je staat, hoe je tilt, hoe je spanning opbouwt. Hij ziet compensatiepatronen die de meeste trainers niet opmerken.</li>
                <li><strong>Klachtspecifieke aanpak:</strong> Lage rugpijn, hernia, bekkenproblematiek, SI-gewricht — elk vraagt om een andere benadering. Hamish kent het onderscheid.</li>
                <li><strong>Opbouwende belasting:</strong> Geen oefeningen die je klachten provoceren. Wél een progressief programma dat de spieren traint die jouw rug ondersteunen.</li>
                <li><strong>Afstemming met je zorgverlener:</strong> Begeleid je ook een fysiotherapeut of orthopeed? Hamish kan de communicatie overnemen of aanvullen.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat een programma bij rugklachten inhoudt</h2>
              <p>
                Een eerste sessie begint altijd met een uitgebreide intake. Hamish stelt vragen over
                het verloop van je klachten, je dagelijkse activiteiten, je zithouding op het werk
                en eventuele eerdere behandelingen. Daarna volgt een bewegingsbeoordeling.
              </p>
              <p>
                Op basis daarvan bouwt hij een programma op dat bestaat uit drie fasen:
              </p>
              <ol>
                <li>
                  <strong>Stabilisatie:</strong> Het activeren en versterken van de diepe romp- en rugstabilisatoren.
                  Denk aan oefeningen als dead bugs, pallof press en aangepaste planken — geen
                  situps, geen hoge axiale belasting.
                </li>
                <li>
                  <strong>Krachtontwikkeling:</strong> Zodra de stabiliteit er is, bouwt Hamish
                  functionele kracht op. Deadlifts in aangepaste vorm, hiphinge-variaties, getürkse
                  opstaan. Bewegingen die de rug trainen in haar natuurlijke functie.
                </li>
                <li>
                  <strong>Belastbaarheid:</strong> Het eindoel is een rug die belast kán worden —
                  op het werk, bij sport, in het dagelijks leven. Niet één die beschermd moet
                  worden.
                </li>
              </ol>
              <p>
                Elk programma wordt bijgesteld op basis van hoe jij reageert. Meer pijn na een sessie
                is een signaal, geen doel. Hamish past aan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé trainen bij rugklachten: waarom het uitmaakt</h2>
              <p>
                In een grote sportschool train je anoniem. Er is niemand die ziet dat je compensatiepatroon
                verergert, dat je een oefening verkeerd uitvoert of dat je rug aanspant op het moment
                dat het niet zou moeten. Bij SculptClub train je{" "}
                <a href="/nl/studio" className="text-brand hover:underline">één-op-één in een privé studio</a>.
                Hamish heeft zijn volledige aandacht bij jou, elke sessie.
              </p>
              <p>
                Bovendien krijg je de deurcode van de studio via WhatsApp de avond van tevoren.
                Geen receptie, geen drukte, geen wachttijden. Je komt binnen, je traint, je gaat.
                Voor mensen met rugklachten — die soms al belast zijn door de komst naar de studio —
                is die rust geen luxe, maar noodzaak.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is dit geschikt?</h2>
              <p>
                Je hoeft geen acute rugpijn te hebben om bij Hamish te trainen. Zijn aanpak is
                geschikt voor:
              </p>
              <ul>
                <li>Mensen met chronische lage rugpijn die veilig willen bewegen</li>
                <li>Herstel na een hernia of wervelkanaalstenose</li>
                <li>Preventief trainen als je weet dat je rug gevoelig is</li>
                <li>Mensen die na een{" "}
                  <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="text-brand hover:underline">
                    blessure
                  </a>{" "}
                  willen terugkeren naar sporten</li>
                <li>Kantoormensen met aanhoudende rugspanning door lang zitten</li>
              </ul>
              <p>
                Ben je recent geopereerd of in actieve fysiotherapeutische behandeling? Plan dan
                eerst een intake zodat Hamish kan beoordelen wat op dit moment haalbaar en veilig
                is.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe begin je?</h2>
              <p>
                De eerste stap is een gratis intake met Hamish. Geen verplichtingen, geen kosten.
                Je bespreekt je klachten, je doelen en je verwachtingen. Daarna besluit je of je
                wilt beginnen. Personal training begint vanaf €45 per sessie. Annuleren is altijd
                gratis — geen restricties.
              </p>
              <p>
                Plan je intake via de{" "}
                <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">
                  trainerspagina
                </a>. Liever eerst bellen of appen? Bereik Hamish direct via
                WhatsApp:{" "}
                <a href="https://wa.me/31683178934" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">
                  +31 6 83 17 89 34
                </a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut als personal trainer</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Consistent blijven met sporten</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Train veilig, ook met rugklachten</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake met Hamish en ontdek wat fysiotherapeutische personal training voor jou kan betekenen.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Plan gratis intake<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

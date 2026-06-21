import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer bij Rugklachten Amsterdam — SculptClub" },
  description:
    "Rugklachten? Krachttraining gericht op techniek, houding en opbouw kan rugpijn structureel verminderen — in samenwerking met je fysiotherapeut. Gratis intake in Amsterdam Jordaan.",
  keywords: [
    "personal trainer rugklachten amsterdam",
    "personal trainer rugpijn amsterdam",
    "krachttraining rugklachten amsterdam",
    "personal trainer lage rugpijn",
    "training rugpijn amsterdam jordaan",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-rugklachten-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-rugklachten-amsterdam",
      en: "/en/blog/back-pain-personal-trainer-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/personal-trainer-rugklachten-amsterdam",
    title: "Personal Trainer bij Rugklachten Amsterdam — SculptClub",
    description:
      "Rugklachten? Krachttraining gericht op techniek, houding en opbouw kan rugpijn structureel verminderen — in samenwerking met je fysiotherapeut. Gratis intake in Amsterdam Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer bij Rugklachten Amsterdam — SculptClub",
    description:
      "Rugklachten? Krachttraining gericht op techniek, houding en opbouw kan rugpijn structureel verminderen — in samenwerking met je fysiotherapeut. Gratis intake in Amsterdam Jordaan.",
  },
};

export default function PersonalTrainerRugklachtenAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer bij rugklachten", url: "/nl/blog/personal-trainer-rugklachten-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer bij Rugklachten Amsterdam" description="Hoe gerichte krachttraining rugklachten structureel kan verminderen — in samenwerking met je fysiotherapeut." url="/nl/blog/personal-trainer-rugklachten-amsterdam" datePublished="2026-04-19" dateModified="2026-05-08" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer bij Rugklachten in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />Bijgewerkt 8 mei 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Personal training studio SculptClub Amsterdam" fill className="object-cover" loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Eerst de medische kant.</strong>
                    <span className="text-muted-foreground">
                      Wij hebben geen fysiotherapeut in dienst. Heb je acute rugpijn, een
                      hernia, recent een ingreep gehad of nog niet weet wat de oorzaak van
                      je klacht is? Begin bij een gediplomeerd fysiotherapeut of arts.
                      Onze trainers nemen het stokje over zodra zij groen licht geven.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Rugklachten zijn een van de meest voorkomende redenen waarom mensen stoppen
                met sporten — of nooit beginnen. Toch is gerichte beweging vaak juist het
                krachtigste instrument om rugpijn op de lange termijn te verminderen. De
                sleutel zit in <em>de juiste beweging, op het juiste moment, in de juiste
                dosering</em> — en in samenwerking met je behandelaar.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom rugklachten en sporten zo lastig samengaan</h2>
              <p>
                De meeste mensen met rugklachten krijgen het advies: rust houden en
                voorzichtig zijn. Dat klopt gedeeltelijk — verkeerde belasting op het
                verkeerde moment maakt het erger. Maar te veel rust leidt tot verzwakking
                van de stabiliserende spieren rondom de wervelkolom, wat de pijn op
                termijn juist versterkt.
              </p>
              <p>
                Wanneer je behandelaar groen licht geeft voor opbouwende belasting,
                verschuift de rol. De fysiotherapeut behandelt en bepaalt belastbaarheid;
                een goede personal trainer bouwt vanaf dat punt verder met techniek en
                progressie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat onze trainers wél kunnen</h2>
              <ul>
                <li><strong>Techniek bewaken:</strong> Compensatiepatronen — de manier waarop je tilt, opstaat, een been belast — sluipen er onbewust in. Je trainer corrigeert ze sessie voor sessie.</li>
                <li><strong>Opbouwende belasting:</strong> Geen oefeningen die je klachten provoceren, wel een progressief programma dat de spieren traint die jouw rug ondersteunen.</li>
                <li><strong>Houding en bewegingspatroon:</strong> Andrea is bij SculptClub gespecialiseerd in techniek, houding en kracht — een logische match als rugpijn voortkomt uit langdurig zitten of verkeerde belasting.</li>
                <li><strong>Afstemming met je behandelaar:</strong> Loop je nog onder behandeling? Dan stemt je trainer af met je fysiotherapeut zodat de programma’s elkaar versterken, niet tegenwerken.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe een opbouw eruit kan zien</h2>
              <p>
                Een eerste sessie begint altijd met een uitgebreide intake. Je vertelt
                over het verloop van je klachten, je dagelijkse activiteiten, je
                zithouding op het werk en eventuele eerdere behandelingen. Daarna volgt
                een bewegingsbeoordeling.
              </p>
              <p>
                Op basis daarvan bouwt je trainer een programma op dat zich grofweg in
                drie fasen ontwikkelt:
              </p>
              <ol>
                <li>
                  <strong>Stabilisatie:</strong> Het activeren en versterken van de
                  diepe romp- en rugstabilisatoren. Denk aan oefeningen als dead bugs,
                  pallof press en aangepaste planken — geen situps, geen hoge axiale
                  belasting in deze fase.
                </li>
                <li>
                  <strong>Krachtontwikkeling:</strong> Zodra de stabiliteit er is, bouw
                  je functionele kracht op. Deadlifts in aangepaste vorm, hiphinge-variaties,
                  Turkish get-ups. Bewegingen die de rug trainen in haar natuurlijke functie.
                </li>
                <li>
                  <strong>Belastbaarheid:</strong> Het eindoel is een rug die belast kán
                  worden — op het werk, bij sport, in het dagelijks leven. Niet één die
                  beschermd moet worden.
                </li>
              </ol>
              <p>
                Elk programma wordt bijgesteld op basis van hoe jij reageert. Meer pijn
                na een sessie is een signaal, geen doel — dan passen we aan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé trainen bij rugklachten: waarom het uitmaakt</h2>
              <p>
                In een grote sportschool train je anoniem. Er is niemand die ziet dat je
                compensatiepatroon verergert, dat je een oefening verkeerd uitvoert of
                dat je rug aanspant op het moment dat het niet zou moeten. Bij SculptClub
                train je{" "}
                <a href="/nl/studio" className="text-brand hover:underline">één-op-één in een privé studio</a>.
                De volledige aandacht ligt bij jouw beweging, elke sessie.
              </p>
              <p>
                Bovendien regelt je trainer de studio en zorgt dat je binnen kunt. Geen
                receptie, geen drukte, geen wachttijden. Voor mensen met rugklachten —
                die soms al belast zijn door de komst naar de studio — is die rust geen
                luxe, maar comfort.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is dit geschikt?</h2>
              <p>
                Onze aanpak werkt het beste voor:
              </p>
              <ul>
                <li>Mensen met chronische lage rugpijn die — met groen licht van hun behandelaar — veilig willen bewegen</li>
                <li>Herstel na een hernia of wervelkanaalstenose, ná de actieve fysiotherapeutische fase</li>
                <li>Preventief trainen als je weet dat je rug gevoelig is</li>
                <li>Mensen die na een{" "}
                  <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="text-brand hover:underline">
                    blessure
                  </a>{" "}
                  willen terugkeren naar sporten</li>
                <li>Kantoormensen met aanhoudende rugspanning door lang zitten</li>
              </ul>
              <p>
                Acute pijn, recente operatie, of nog geen diagnose? Dan eerst een
                fysiotherapeut. Onze trainers zijn een aanvulling op die behandeling,
                geen vervanging.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe begin je?</h2>
              <p>
                De eerste stap is een gratis intake. Geen verplichtingen, geen kosten.
                Je bespreekt je klachten, je doelen en je verwachtingen. Daarna besluit
                je of je wilt beginnen. Personal training begint vanaf €45 per sessie.
                Annuleren is altijd gratis — geen restricties.
              </p>
              <p>
                Plan je intake via de{" "}
                <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">
                  trainerspagina
                </a>. Liever eerst bellen of appen? Bereik ons via WhatsApp:{" "}
                <a href="https://wa.me/31615147952" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">
                  +31 6 15 14 79 52
                </a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Trainen met een blessure</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/personal-trainer-stress-burnout-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer bij stress &amp; burn-out</p></a>
                <a href="/nl/blog/consistent-blijven-met-sporten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Consistent blijven met sporten</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Train veilig, ook met rugklachten</h3>
              <p className="text-muted-foreground mb-6">Met groen licht van je behandelaar bouwen we samen op. Plan een gratis intake en bespreek wat haalbaar is.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Plan gratis intake<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

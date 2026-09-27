import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Btw voor personal trainers: 21% of 9%? Zo zit het in 2026" },
  description:
    "Btw op personal training: losse PT-sessies vallen onder 21%. Het 9%-tarief geldt alleen samen met het gebruik van een sportaccommodatie. Plus de KOR.",
  keywords: [
    "btw personal trainer",
    "personal training btw 9 of 21",
    "gelegenheid geven tot sportbeoefening btw",
    "kor personal trainer",
    "btw tarief sportles zzp",
  ],
  alternates: {
    canonical: "/nl/blog/btw-personal-trainer",
    languages: {
      nl: "/nl/blog/btw-personal-trainer",
      en: "/en/blog/vat-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/btw-personal-trainer",
    title: "Btw voor personal trainers: 21% of 9%? Zo zit het in 2026",
    description:
      "Losse PT-sessies: 21%. Het 9%-tarief geldt alleen mét sportaccommodatie. En onder €20.000 omzet is er de KOR. De regels, met de criteria van de Belastingdienst.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Btw voor personal trainers: 21% of 9%? Zo zit het in 2026",
    description:
      "Losse PT-sessies: 21%. Het 9%-tarief geldt alleen mét sportaccommodatie. En onder €20.000 omzet is er de KOR.",
  },
};

export default function BlogPostBtwPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Btw voor personal trainers", url: "/nl/blog/btw-personal-trainer" },
        ]}
      />
      <BlogPostingJsonLd
        title="Btw voor personal trainers — 21% of 9%? Zo zit het in 2026"
        description="Losse PT-sessies vallen onder 21% btw. Het 9%-tarief geldt alleen als je training combineert met het ter beschikking stellen van een sportaccommodatie. Plus de KOR onder €20.000."
        url="/nl/blog/btw-personal-trainer"
        datePublished="2026-08-28"
      />
      <FaqJsonLd faqs={[
        { question: "Welk btw-tarief geldt voor personal training?", answer: "Losse personal training — instructie of begeleiding zonder dat je zelf een sportaccommodatie ter beschikking stelt — valt onder het standaard tarief van 21%. Dat geldt ook voor training buiten of bij de klant thuis." },
        { question: "Wanneer mag een personal trainer 9% btw rekenen?", answer: "Alleen als de training onderdeel is van 'gelegenheid geven tot sportbeoefening': je stelt een sportaccommodatie ter beschikking voor de duur van de sessie, verzorgt onderhoud, beveiliging of schoonmaak, en levert de noodzakelijke attributen. Puur lesgeven zonder accommodatie valt onder 21%. Twijfel je of jouw opzet kwalificeert, leg hem voor aan je boekhouder of de Belastingdienst." },
        { question: "Blijft het 9%-tarief voor sport bestaan?", answer: "Ja. Het kabinet wilde het verlaagde tarief voor 'gelegenheid geven tot sportbeoefening' per 2026 verhogen naar 21%, maar die verhoging is na een aangenomen motie van tafel. Het verlaagde tarief van 9% blijft gelden." },
        { question: "Wat is de KOR en wanneer is die slim voor een personal trainer?", answer: "De Kleine Ondernemersregeling: blijf je onder €20.000 omzet per jaar, dan kun je kiezen voor btw-vrijstelling — geen btw rekenen, geen btw-aangifte. De keerzijde: je mag ook geen btw aftrekken over je kosten, zoals studiohuur. Vooral interessant voor wie parttime traint met particuliere klanten; wie wil groeien zit er meestal aan vast tot opzegging." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Btw voor personal trainers — 21% of 9%? Zo zit het
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />28 augustus 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Het korte antwoord: losse personal training valt onder <strong>21% btw</strong>. Het verlaagde 9%-tarief bestaat wél in de sport, maar geldt alleen als je de training combineert met het ter beschikking stellen van een sportaccommodatie. En blijf je onder €20.000 omzet, dan kun je via de KOR helemaal buiten de btw blijven.
              </p>
              <p>
                <em>Belangrijk: dit artikel is informatief, geen belastingadvies. De criteria hieronder komen van de Belastingdienst (stand augustus 2026); voor jouw situatie: je boekhouder of de Belastingdienst zelf.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Welk btw-tarief geldt voor personal training?</h2>
              <p>
                De hoofdregel van de Belastingdienst is helder: sportlessen, instructie of begeleiding die <em>niet</em> gegeven worden in combinatie met het ter beschikking stellen van een sportaccommodatie, vallen onder het <strong className="text-foreground">21%-tarief</strong>. Dat is de situatie van de meeste personal trainers: je verkoopt je expertise en begeleiding als dienst.
              </p>
              <p>
                Concreet betekent dat: train je een klant buiten in het park, bij de klant thuis, of in een gym waar de klant zelf lid is — dan is jouw dienst begeleiding zonder accommodatie, en reken je 21%. Voorbeeld: bij een tarief van €60 per sessie exclusief btw factureer je €72,60; die €12,60 draag je af.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wanneer geldt het 9%-tarief dan wél?</h2>
              <p>
                Het verlaagde tarief hoort bij <strong className="text-foreground">&ldquo;gelegenheid geven tot sportbeoefening&rdquo;</strong> — en daarvoor stelt de Belastingdienst drie voorwaarden aan jouw aanbod:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Je stelt een sportaccommodatie ter beschikking, die de klant voor de duur van de sessie kan gebruiken.",
                  "Jij verzorgt het onderhoud, de beveiliging of de schoonmaak van die accommodatie.",
                  "Jij levert de attributen die nodig zijn voor de sport (bij krachttraining: de rekken, gewichten en toestellen).",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Alleen als de training met zo&apos;n accommodatie samen één dienst vormt, kan het geheel onder 9% vallen. Of jouw specifieke opzet — bijvoorbeeld een gehuurde privéstudio die je inclusief gebruik aan je klant aanbiedt — daaraan voldoet, is precies het soort vraag dat je één keer goed met je boekhouder afstemt en daarna gewoon consequent toepast.
              </p>
              <p>
                Nog goed om te weten: het kabinet wilde dit 9%-tarief per 2026 verhogen naar 21%, maar die verhoging is <strong className="text-foreground">van tafel</strong> na een aangenomen motie. Het verlaagde sporttarief blijft dus bestaan.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Onder €20.000 omzet: de KOR</h2>
              <p>
                De <strong className="text-foreground">Kleine Ondernemersregeling</strong> is de derde route: blijf je onder €20.000 omzet per jaar, dan kun je kiezen voor volledige btw-vrijstelling. Geen btw op je facturen, geen kwartaalaangifte.
              </p>
              <p>
                De keerzijde is net zo belangrijk: onder de KOR mag je ook <strong className="text-foreground">geen btw aftrekken</strong> over je zakelijke kosten — dus ook niet de btw op studiohuur, apparatuur of software. Voor een parttime trainer met particuliere klanten (die btw toch niet kunnen aftrekken) is de KOR vaak gunstig; voor wie wil doorgroeien voorbij €20.000 is hij meestal een tussenstation dat je bewust plant.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Factureren en aangifte: de praktijk</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Zet je KvK-nummer en btw-id op elke factuur, en vermeld het gehanteerde tarief expliciet.",
                  "Btw-aangifte doe je per kwartaal via Mijn Belastingdienst Zakelijk.",
                  "Btw die je zelf betaalt over zakelijke kosten trek je af als voorbelasting — behalve onder de KOR.",
                  "Spaar de af te dragen btw direct apart; het is geld van de Belastingdienst dat toevallig op jouw rekening staat.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Verder lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP personal trainer — KvK, btw, verzekering, pensioen</p></a>
                  <a href="/nl/blog/aov-personal-trainer-zzp" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">AOV voor personal trainers — dit kost het</p></a>
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub ZZP-trainer checklist</p></a>
                  <a href="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Kosten privé studio vs eigen gym</p></a>
                  <a href="/nl/blog/factuur-personal-trainer-zzp" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Factuur maken: wat moet erop?</p></a>
                  <a href="/nl/blog/belasting-eerste-jaar-zzp-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Belasting eerste jaar — wat houd je over?</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Administratie op orde? Tijd voor een werkruimte</h3>
                <p className="mb-4">
                  Btw-tarief helder, facturen kloppen. Bekijk SculptClub Studio Rental — geen vaste lasten, geen contract, vanaf €12/uur.
                </p>
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk Studio Rental
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

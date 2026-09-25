import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Belasting eerste jaar ZZP personal trainer (2026)" },
  description:
    "Zelfstandigenaftrek €1.200, startersaftrek €2.123, urencriterium 1.225 uur, mkb-winstvrijstelling 12,7%: wat elke aftrekpost in jaar één oplevert.",
  keywords: [
    "belasting eerste jaar zzp personal trainer",
    "zelfstandigenaftrek 2026",
    "startersaftrek personal trainer",
    "urencriterium 1225 uur",
    "mkb-winstvrijstelling personal trainer",
  ],
  alternates: {
    canonical: "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
    languages: {
      nl: "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
      en: "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
    title: "Belasting eerste jaar ZZP personal trainer (2026)",
    description:
      "Urencriterium, zelfstandigenaftrek, startersaftrek en mkb-winstvrijstelling — de vier aftrekposten die je eerste jaar bepalen, met de bedragen van de Belastingdienst en een rekenvoorbeeld.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belasting eerste jaar ZZP personal trainer (2026)",
    description:
      "Urencriterium, zelfstandigenaftrek, startersaftrek en mkb-winstvrijstelling — met een rekenvoorbeeld voor je eerste jaar.",
  },
};

export default function BlogPostEersteJaarBelastingZzpPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Belasting eerste jaar ZZP personal trainer", url: "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer" },
        ]}
      />
      <BlogPostingJsonLd
        title="Belasting eerste jaar ZZP personal trainer — wat houd je over? (2026)"
        description="Zelfstandigenaftrek €1.200, startersaftrek €2.123, urencriterium 1.225 uur en mkb-winstvrijstelling 12,7% — wat elke aftrekpost in je eerste jaar oplevert, met een rekenvoorbeeld."
        url="/nl/blog/belasting-eerste-jaar-zzp-personal-trainer"
        datePublished="2026-09-02"
      />
      <FaqJsonLd faqs={[
        { question: "Wat is het urencriterium en hoeveel uur moet ik maken?", answer: "Het urencriterium is 1.225 uur per kalenderjaar die je aan je onderneming besteedt — omgerekend zo'n 24 uur per week. Zowel declarabele PT-uren als indirecte uren (acquisitie, boekhouding, websitebeheer) tellen mee. Start je halverwege het jaar, dan geldt nog steeds 1.225 uur voor dat hele kalenderjaar — niet naar rato." },
        { question: "Hoeveel zelfstandigenaftrek en startersaftrek krijg ik in 2026?", answer: "In 2026 is de zelfstandigenaftrek €1.200. Ben je starter, dan komt daar €2.123 startersaftrek bovenop — samen €3.323. De zelfstandigenaftrek daalt jaarlijks (was €2.470 in 2025, wordt €900 in 2027); de startersaftrek wordt niet afgebouwd." },
        { question: "Hoe vaak mag ik startersaftrek toepassen?", answer: "Maximaal 3 keer in je eerste 5 jaar als ondernemer, en alleen als je in 1 of meer van de 5 voorgaande kalenderjaren geen ondernemer was en in die periode niet vaker dan 2 keer eerder zelfstandigenaftrek hebt toegepast." },
        { question: "Wat is de mkb-winstvrijstelling en hoe werkt die?", answer: "12,7% van je winst in 2026, ná aftrek van de ondernemersaftrek (zelfstandigenaftrek + eventuele startersaftrek), is vrijgesteld van belasting. De Belastingdienst past dit automatisch toe in je aangifte — je hoeft er zelf niets voor te doen." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Belasting eerste jaar ZZP personal trainer — wat houd je over?
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />2 september 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Haal je in 2026 het urencriterium van <strong>1.225 uur</strong>, dan trek je <strong>€1.200 zelfstandigenaftrek</strong> af van je winst — als starter komt daar <strong>€2.123 startersaftrek</strong> bovenop. Over wat overblijft is vervolgens <strong>12,7% mkb-winstvrijstelling</strong> vrijgesteld. Dat zijn de vier posten die bepalen wat je in je eerste jaar echt overhoudt.
              </p>
              <p>
                <em>Belangrijk: dit artikel is informatief, geen belastingadvies. De bedragen komen van de Belastingdienst (stand september 2026); voor jouw aangifte: je boekhouder of de Belastingdienst zelf.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Het urencriterium: 1.225 uur — de sleutel tot alle aftrekposten</h2>
              <p>
                Zonder het urencriterium te halen, geen zelfstandigenaftrek en geen startersaftrek. De grens is <strong className="text-foreground">1.225 uur per kalenderjaar</strong> aan je onderneming — omgerekend zo&apos;n 24 uur per week. Dat hoeft geen declarabel klantwerk te zijn: acquisitie, je boekhouding bijhouden, je website onderhouden en reistijd tussen sessies tellen volledig mee.
              </p>
              <p>
                Begin je in juli, dan geldt nog steeds 1.225 uur voor het hele kalenderjaar — er wordt niet naar rato gerekend. Voor de meeste startende personal trainers met meerdere klanten per dag is dat haalbaar; met een handjevol klanten naast een parttime baan meestal niet, en dan vervalt de hele aftrekpost.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Zelfstandigenaftrek: €1.200 in 2026 — en hij wordt elk jaar kleiner</h2>
              <p>
                De zelfstandigenaftrek is een vast bedrag dat je van je winst aftrekt zodra je het urencriterium haalt, geen ondernemer bent bovenaan de AOW-leeftijd en de Belastingdienst je als ondernemer voor de inkomstenbelasting ziet. In 2026 is dat <strong className="text-foreground">€1.200</strong> — een fors dalende lijn: €2.470 in 2025, €1.200 in 2026, en €900 vanaf 2027. Het kabinet bouwt deze aftrek stap voor stap af.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Startersaftrek: €2.123 extra, maximaal 3 keer in je eerste 5 jaar</h2>
              <p>
                Ben je starter, dan komt er <strong className="text-foreground">€2.123</strong> bovenop de zelfstandigenaftrek — samen <strong className="text-foreground">€3.323</strong> in 2026. Anders dan de zelfstandigenaftrek wordt de startersaftrek niet afgebouwd.
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Je mag hem maximaal 3 keer toepassen in je eerste 5 jaar als ondernemer.",
                  "Voorwaarde: je was in 1 of meer van de 5 voorgaande kalenderjaren geen ondernemer.",
                  "En: je hebt in die periode niet vaker dan 2 keer eerder zelfstandigenaftrek toegepast.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Praktisch betekent dit: begin je vroeg, dan pak je de startersaftrek in je sterkste jaren mee, vóórdat de gewone zelfstandigenaftrek verder is afgebouwd.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Mkb-winstvrijstelling: 12,7% van wat overblijft</h2>
              <p>
                Nadat de ondernemersaftrek (zelfstandigenaftrek + eventuele startersaftrek) van je winst af is, geldt de <strong className="text-foreground">mkb-winstvrijstelling</strong>: in 2026 is <strong className="text-foreground">12,7%</strong> van die resterende winst vrijgesteld van belasting. Dit is geen bedrag dat je zelf invult — de Belastingdienst past het automatisch toe in je aangifte.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Een rekenvoorbeeld</h2>
              <p>
                Stel je haalt in je eerste jaar €40.000 winst vóór aftrek, en je bent starter die het urencriterium haalt:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "€40.000 winst − €3.323 ondernemersaftrek (zelfstandigenaftrek + startersaftrek) = €36.677",
                  "− 12,7% mkb-winstvrijstelling over €36.677 = €4.658 vrijgesteld",
                  "= €32.019 belastbare winst, waarover je vervolgens inkomstenbelasting (box 1) en de Zvw-bijdrage betaalt",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                De laatste stap — wat je daadwerkelijk aan inkomstenbelasting betaalt over die €32.019 — hangt af van je totale inkomen en de actuele box 1-schijven; dat reken je door met je boekhouder of de rekenhulp van de Belastingdienst. Dit artikel stopt bij wat er wordt afgetrokken, niet bij wat je uiteindelijk overmaakt.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Verder lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">ZZP personal trainer — KvK, btw, verzekering, pensioen</p></a>
                  <a href="/nl/blog/btw-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Btw voor personal trainers — 21% of 9%</p></a>
                  <a href="/nl/blog/aov-personal-trainer-zzp" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">AOV voor personal trainers — dit kost het</p></a>
                  <a href="/nl/voor-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub ZZP-trainer checklist</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Aftrekposten helder? Tijd voor een werkruimte</h3>
                <p className="mb-4">
                  Urencriterium bijgehouden, aftrek berekend. Bekijk SculptClub Studio Rental — geen vaste lasten, geen contract, vanaf €12/uur.
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

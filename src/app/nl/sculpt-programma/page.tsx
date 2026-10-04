import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

// Live 2026-10-04 (Amili). Price per Paulo 2026-10-03 16:57Z: "329 euro sculpt program + open gym".
// Paulo 2026-10-04: any SculptClub coach listed on the site can deliver it, so no single coach is named.
// No payment is wired: the CTA is the existing free-intake path.
export const metadata: Metadata = {
  title: { absolute: "Sculpt Program | SculptClub Jordaan" },
  description: "4 sessies per 4 weken 1:1 met een coach van SculptClub, een plan, elke 4 weken meten en onbeperkt Open Gym. €329 per 4 weken.",
  alternates: { canonical: "/nl/sculpt-programma" },
};

const included = [
  "4 sessies van 60 minuten, 1:1 met een coach van SculptClub",
  "Een plan op maat, met een check-in elke week",
  "Elke 4 weken meten, zodat je ziet wat er verandert",
  "Onbeperkt Open Gym, ook tussen je sessies door",
  "Gratis intake vooraf, geen verplichting",
];

const faqs = [
  { q: "Wat krijg ik voor €329?", a: "Vier sessies van 60 minuten met je coach per 4 weken, je plan, de metingen en onbeperkt Open Gym. Meer staat er niet in, dus ook niets bijbetalen." },
  { q: "Kan ik opzeggen?", a: "Ja, elke 4 weken. Voor de eerste 4 weken hoef je niets te beslissen: je begint met een gratis intake." },
  { q: "Wie is mijn coach?", a: "Elke coach die bij SculptClub op de site staat kan het Sculpt Program geven. Je spreekt eerst in de intake en kiest wie bij je past." },
  { q: "Beloven jullie resultaat?", a: "Nee. Je krijgt een plan en elke 4 weken cijfers. Wat je ermee doet bepaalt de uitkomst." },
];

export default function SculptProgramNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Sculpt Program", url: "/nl/sculpt-programma" }]} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Sculpt Program"
          title="Een plan voor het lijf dat je wilt"
          description="1:1 met een coach van SculptClub in de Jordaan. Elke 4 weken gemeten. Onbeperkt Open Gym erbij."
        />
        <FadeIn>
          <Card className="mx-auto max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-3xl">€329 <span className="text-base font-normal text-muted-foreground">/ 4 weken</span></CardTitle>
              <CardDescription>Inclusief onbeperkt Open Gym</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-left">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <ButtonLink href="/nl/gratis-intake" size="lg" className="w-full">
                Plan gratis intake
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.nl} variant="outline" size="lg" className="w-full">
                Vraag via WhatsApp
              </ButtonLink>
            </CardFooter>
          </Card>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Voor wie" title="Je wilt een vaste aanpak" description="Voor wie meer wil dan los trainen: een coach die je leert kennen, een plan en cijfers om op te sturen." />
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
            Alleen trainen kan ook, vanaf €9 per uur in de Open Gym. Het Sculpt Program is voor wie begeleiding wil.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm">
            <Link href="/nl/vind-jouw-personal-trainer" className="font-medium underline underline-offset-4">Bekijk alle coaches</Link>
          </p>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader overline="Vragen" title="Veelgestelde vragen" />
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-card p-4">
              <summary className="min-h-11 cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}

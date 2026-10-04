import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

// Live 2026-10-04 (Amili). English twin of /nl/sculpt-programma. Price per Paulo 2026-10-03 16:57Z: "329 euro sculpt program + open gym".
// Paulo 2026-10-04: any SculptClub coach listed on the site can deliver it, so no single coach is named.
// No payment is wired: the CTA is the existing free-intake path.
export const metadata: Metadata = {
  title: { absolute: "Sculpt Program | SculptClub Jordaan" },
  description: "4 one-to-one sessions every 4 weeks with a SculptClub coach, a plan, measurements every 4 weeks and unlimited Open Gym. €329 per 4 weeks.",
  alternates: { canonical: "/en/sculpt-program" },
};

const included = [
  "4 sessions of 60 minutes, one-to-one with a SculptClub coach",
  "A plan made for you, with a check-in every week",
  "Measured every 4 weeks, so you see what is changing",
  "Unlimited Open Gym, also between your sessions",
  "Free intro first, no obligation",
];

const faqs = [
  { q: "What do I get for €329?", a: "Four 60-minute sessions with your coach every 4 weeks, your plan, the measurements and unlimited Open Gym. Nothing else is added, so nothing to pay on top." },
  { q: "Can I cancel?", a: "Yes, every 4 weeks. You do not have to decide anything for the first 4 weeks: you start with a free intro." },
  { q: "Who is my coach?", a: "Any coach listed on the SculptClub site can deliver the Sculpt Program. You talk in the intro first and choose who fits." },
  { q: "Do you promise results?", a: "No. You get a plan and numbers every 4 weeks. What you do with them decides the outcome." },
];

export default function SculptProgramEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Sculpt Program", url: "/en/sculpt-program" }]} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Sculpt Program"
          title="A plan for the body you want"
          description="One-to-one with a SculptClub coach in the Jordaan. Measured every 4 weeks. Unlimited Open Gym included."
        />
        <FadeIn>
          <Card className="mx-auto max-w-lg text-center">
            <CardHeader>
              <CardTitle className="text-3xl">€329 <span className="text-base font-normal text-muted-foreground">/ 4 weeks</span></CardTitle>
              <CardDescription>Unlimited Open Gym included</CardDescription>
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
              <ButtonLink href="/en/free-intro" size="lg" className="w-full">
                Book a free intro
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={whatsappLinks.en} variant="outline" size="lg" className="w-full">
                Ask on WhatsApp
              </ButtonLink>
            </CardFooter>
          </Card>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Who it is for" title="You want a steady approach" description="For people who want more than training alone: a coach who gets to know you, a plan and numbers to steer by." />
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
            Training on your own works too, from €9 per hour in the Open Gym. The Sculpt Program is for people who want guidance.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm">
            <Link href="/en/find-personal-trainer" className="font-medium underline underline-offset-4">See all coaches</Link>
          </p>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader overline="Questions" title="Frequently asked questions" />
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

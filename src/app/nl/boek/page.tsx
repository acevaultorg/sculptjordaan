import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boek een sessie",
  description: "Plan direct je sessie bij SculptClub. Personal training, Open Gym of studio huur in Amsterdam Jordaan.",
  alternates: { canonical: "/nl/boek", languages: { nl: "/nl/boek", en: "/en/book" } },
};

export default function BookPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader overline="Reserveren" title="Boek een sessie" description="Kies je sessie, selecteer een tijd en je bent klaar. Heb je vragen? WhatsApp ons." />
        <div className="max-w-3xl mx-auto">
          <iframe
            src={`https://app.acuityscheduling.com/schedule.php?owner=${siteConfig.acuity.owner}`}
            title="Sessie boeken"
            width="100%"
            height="800"
            frameBorder="0"
            className="rounded-xl border border-border/50"
          />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Heb je vragen?{" "}
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:text-brand-dark">
              WhatsApp ons
            </a>
            {" "}— we reageren meestal binnen 1 uur.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}

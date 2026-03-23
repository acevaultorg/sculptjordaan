import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book your session at SculptClub. Personal training, Open Gym or studio rental in Amsterdam Jordaan.",
  alternates: { canonical: "/en/book", languages: { nl: "/nl/boek", en: "/en/book" } },
};

export default function BookPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader overline="Schedule" title="Book a session" description="Pick your session, select a time and you're set. Questions? WhatsApp us." />
        <div className="max-w-3xl mx-auto">
          <iframe
            src={`https://app.acuityscheduling.com/schedule.php?owner=${siteConfig.acuity.owner}`}
            title="Book session"
            width="100%"
            height="800"
            frameBorder="0"
            className="rounded-xl border border-border/50"
          />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Questions?{" "}
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:text-brand-dark">
              WhatsApp us
            </a>
            {" "}— we usually respond within 1 hour.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}

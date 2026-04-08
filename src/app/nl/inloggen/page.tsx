import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";

const ACUITY_LOGIN = "https://app.acuityscheduling.com/schedule.php?owner=36720238&action=appts";

export const metadata: Metadata = {
  title: "Inloggen — Mijn Boekingen | SculptClub",
  description:
    "Log in op je SculptClub-account om je boekingen te bekijken, te wijzigen of te annuleren.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/inloggen",
    languages: {
      nl: "/nl/inloggen",
      en: "/en/login",
    },
  },
};

export default function LoginPageNL() {
  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <SectionHeader
            overline="Mijn account"
            title="Inloggen"
            description="Bekijk, verplaats of annuleer je boekingen. Vul je e-mailadres in — we sturen je direct een inloglink."
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-xl">
              <iframe
                src={ACUITY_LOGIN}
                title="SculptClub — Mijn boekingen"
                className="w-full h-[720px] bg-white"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Beveiligd door Acuity Scheduling ·{" "}
              <a
                href={ACUITY_LOGIN}
                target="_blank"
                rel="noopener"
                className="text-brand hover:underline"
              >
                Open in nieuw tabblad
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

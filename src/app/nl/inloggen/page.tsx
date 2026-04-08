import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink } from "lucide-react";

const ACUITY_LOGIN = "https://app.acuityscheduling.com/login.php?owner=36720238";

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
            description="Bekijk, wijzig of annuleer je boekingen. Je gebruikt hetzelfde account dat je bij je eerste boeking hebt aangemaakt."
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-background/40 overflow-hidden shadow-xl">
              <iframe
                src={ACUITY_LOGIN}
                title="SculptClub — Acuity client login"
                className="w-full h-[640px] bg-white"
                loading="lazy"
              />
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Werkt het inloggen niet? Open de inlogpagina direct in een nieuw tabblad.
            </p>

            <div className="mt-4 flex justify-center">
              <ButtonLink
                href={ACUITY_LOGIN}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener"
              >
                <ExternalLink className="w-4 h-4" />
                Open in nieuw tabblad
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink, Calendar, XCircle, PencilLine } from "lucide-react";

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

          <div className="mt-10 max-w-xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-brand shrink-0" />
                  <span>Bekijk je komende afspraken</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <PencilLine className="w-4 h-4 text-brand shrink-0" />
                  <span>Verplaats of wijzig een boeking</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-brand shrink-0" />
                  <span>Annuleer — altijd gratis, zonder vaste termijn</span>
                </li>
              </ul>

              <ButtonLink
                href={ACUITY_LOGIN}
                variant="default"
                size="lg"
                target="_blank"
                rel="noopener"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4" />
                Open mijn boekingen
              </ButtonLink>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Opent in een nieuw tabblad · beveiligd door Acuity Scheduling
              </p>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Nog geen account? Maak er een aan bij je{" "}
              <a href="/nl/boek" className="text-brand hover:underline">
                eerste boeking
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

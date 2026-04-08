import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink } from "lucide-react";

const ACUITY_LOGIN = "https://app.acuityscheduling.com/login.php?owner=36720238";

export const metadata: Metadata = {
  title: "Login — My Bookings | SculptClub",
  description:
    "Log in to your SculptClub account to view, change or cancel your bookings.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/login",
    languages: {
      nl: "/nl/inloggen",
      en: "/en/login",
    },
  },
};

export default function LoginPageEN() {
  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <SectionHeader
            overline="My account"
            title="Login"
            description="View, change or cancel your bookings. You use the same account you created with your first booking."
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
              Login not working? Open the login page directly in a new tab.
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
                Open in new tab
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

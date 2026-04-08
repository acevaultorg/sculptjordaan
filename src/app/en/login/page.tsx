import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";

const ACUITY_LOGIN = "https://app.acuityscheduling.com/schedule.php?owner=36720238&action=appts";

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
            description="View, reschedule or cancel your bookings. Enter your email — we'll send you a direct login link."
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-white overflow-hidden shadow-xl">
              <iframe
                src={ACUITY_LOGIN}
                title="SculptClub — My bookings"
                className="w-full h-[720px] bg-white"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Secured by Acuity Scheduling ·{" "}
              <a
                href={ACUITY_LOGIN}
                target="_blank"
                rel="noopener"
                className="text-brand hover:underline"
              >
                Open in new tab
              </a>
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

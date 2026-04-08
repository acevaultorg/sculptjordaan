import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink, Calendar, XCircle, PencilLine } from "lucide-react";

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
        <div>
          <SectionHeader
            overline="My account"
            title="Login"
            description="View, reschedule or cancel your bookings. Enter your email — we'll send you a direct login link."
          />

          <div className="mt-10 max-w-xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-brand shrink-0" />
                  <span>View your upcoming appointments</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <PencilLine className="w-4 h-4 text-brand shrink-0" />
                  <span>Reschedule or edit a booking</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 text-brand shrink-0" />
                  <span>Cancel — always free, no time limit</span>
                </li>
              </ul>

              <ButtonLink
                href={ACUITY_LOGIN}
                size="lg"
                target="_blank"
                rel="noopener"
                className="w-full bg-brand hover:bg-brand-dark text-white"
              >
                <ExternalLink className="w-4 h-4" />
                Open my bookings
              </ButtonLink>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Opens in a new tab · secured by Acuity Scheduling
              </p>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              No account yet? Create one on your{" "}
              <a href="/en/book" className="text-brand hover:underline">
                first booking
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

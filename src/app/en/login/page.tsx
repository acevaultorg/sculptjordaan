import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { ExternalLink, Calendar, XCircle, PencilLine } from "lucide-react";

// Acuity scheduler URL — this page has the SIGN UP / LOGIN row in the top-right.
// The previous ?action=appts URL renders blank (Acuity side bug).
const ACUITY_LOGIN = "https://app.acuityscheduling.com/schedule/fba376d5";

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
          <div className="mb-10 sm:mb-14 text-center">
            <p className="overline mb-3">My account</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Login</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              View, reschedule or cancel your bookings. Enter your email — we&apos;ll send you a direct login link.
            </p>
          </div>

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

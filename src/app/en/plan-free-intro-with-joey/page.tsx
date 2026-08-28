import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Joey — strength & breathwork, The Ascend Method";
const description = "Free intro with Joey — The Ascend Method: strength, breathwork and self-inquiry at SculptClub Amsterdam Jordaan. For high-performers feeling stuck or burned out.";
const canonical = "/en/plan-free-intro-with-joey";

export const metadata: Metadata = {
  title,
  description,
  // Indexed (reversed 2026-07-01 — was noindexed as a doorway-pattern precaution,
  // but each trainer page has a genuinely distinct hand-written bio, credentials,
  // rate, WhatsApp contact and photo: a staff/team-profile page, not a templated
  // location-swap doorway (the real doorway case on this site is the 6
  // /blog/personal-trainer-amsterdam-{centrum,oost,de-pijp} pages, which stay
  // noindexed). GSC confirmed all 24 of these pages were noindex-excluded,
  // suppressing the highest-intent conversion pages on a site at 15% of its
  // visitor target. Reversible per-file — re-add if this turns out wrong.
  robots: { index: true, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-joey", en: "/en/plan-free-intro-with-joey" } },
  ...trainerIntakeOg("joey", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="joey" locale="en" />;
}

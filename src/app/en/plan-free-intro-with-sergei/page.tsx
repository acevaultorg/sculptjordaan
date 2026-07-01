import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book a free intro with Sergei";
const description = "Free intro with Sergei — certified personal trainer with 10+ years of experience. Body recomposition, posture correction, strength & recovery at SculptClub Amsterdam Jordaan.";
const canonical = "/en/plan-free-intro-with-sergei";

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
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-sergei", en: "/en/plan-free-intro-with-sergei" } },
  ...trainerIntakeOg("sergei", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="sergei" locale="en" />;
}

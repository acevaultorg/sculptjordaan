import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Alex",
  description: "Gratis intake met Alex — specialist in kracht, calisthenics en hersteltraining bij SculptClub Amsterdam Jordaan. Geen verplichtingen.",
  // Noindex: this is a conversion-funnel route (Acuity booking entry), not editorial
  // content. Indexing 14 templated trainer-intake pages would trigger Google's
  // doorway-pattern flag (rules/adsense-thin-content-prevention.md Gate 3).
  // The page stays live for the booking flow; only search-indexing is suppressed.
  robots: { index: false, follow: true },
  alternates: { canonical: "/nl/plan-gratis-intake-met-alex", languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="nl" />;
}

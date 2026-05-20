import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Bryan",
  description: "Gratis intake met Bryan — calisthenics-specialist bij SculptClub Amsterdam Jordaan. Van push-ups tot muscle-up en handstand. Geen verplichtingen.",
  // Noindex: this is a conversion-funnel route (Acuity booking entry), not editorial
  // content. Indexing 9 templated trainer-intake pages would trigger Google's
  // doorway-pattern flag (rules/adsense-thin-content-prevention.md Gate 3).
  // The page stays live for the booking flow; only search-indexing is suppressed.
  robots: { index: false, follow: true },
  alternates: { canonical: "/nl/plan-gratis-intake-met-bryan", languages: { nl: "/nl/plan-gratis-intake-met-bryan", en: "/en/plan-free-intro-with-bryan" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="bryan" locale="nl" />;
}

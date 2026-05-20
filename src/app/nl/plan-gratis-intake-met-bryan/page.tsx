import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Bryan";
const description = "Gratis intake met Bryan — calisthenics-specialist bij SculptClub Amsterdam Jordaan. Van push-ups tot muscle-up en handstand. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-bryan";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: this is a conversion-funnel route (Acuity booking entry), not editorial
  // content. Indexing 9 templated trainer-intake pages would trigger Google's
  // doorway-pattern flag (rules/adsense-thin-content-prevention.md Gate 3).
  // The page stays live for the booking flow; only search-indexing is suppressed.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-bryan", en: "/en/plan-free-intro-with-bryan" } },
  ...trainerIntakeOg("bryan", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="bryan" locale="nl" />;
}

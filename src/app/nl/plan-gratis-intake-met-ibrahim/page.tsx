import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Ibrahim";
const description = "Gratis intake met Ibrahim — voeding, afvallen en revalidatie bij SculptClub Amsterdam Jordaan. Praktische plannen die passen bij jouw levensstijl. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-ibrahim";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: per-trainer conversion-funnel route. Per rules/adsense-thin-
  // content-prevention.md Gate 3, indexing templated trainer-intake pages
  // would risk a doorway-pattern flag from Google.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-ibrahim", en: "/en/plan-free-intro-with-ibrahim" } },
  ...trainerIntakeOg("ibrahim", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="ibrahim" locale="nl" />;
}

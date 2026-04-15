import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Gezina",
  description: "Gratis intake met Gezina — gecertificeerde personal trainer gespecialiseerd in vrouwentraining, kracht en prestatie bij SculptClub Amsterdam Jordaan. Geen verplichtingen.",
  alternates: { canonical: "/nl/plan-gratis-intake-met-gezina", languages: { nl: "/nl/plan-gratis-intake-met-gezina", en: "/en/plan-free-intro-with-gezina" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="gezina" locale="nl" />;
}

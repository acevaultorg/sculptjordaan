import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a free intro with Joey",
  description: "Free intro with Joey — The Ascend Method: strength, breathwork and self-inquiry at SculptClub Amsterdam Jordaan. For high-performers feeling stuck or burned out.",
  alternates: { canonical: "/en/plan-free-intro-with-joey", languages: { nl: "/nl/plan-gratis-intake-met-joey", en: "/en/plan-free-intro-with-joey" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="joey" locale="en" />;
}

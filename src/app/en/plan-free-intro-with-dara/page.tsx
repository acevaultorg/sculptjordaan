import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Dara",
  description: "Book a free intro with Dara — personal training and small group specialist at SculptClub Amsterdam Jordaan. No commitment.",
  alternates: { canonical: "/en/plan-free-intro-with-dara", languages: { nl: "/nl/plan-gratis-intake-met-dara", en: "/en/plan-free-intro-with-dara" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="dara" locale="en" />;
}

import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Jearmey",
  description: "Free intro with Jearmey — strength, fat loss and athletic performance specialist at SculptClub Amsterdam Jordaan. No commitment.",
  alternates: { canonical: "/en/plan-free-intro-with-jearmey", languages: { nl: "/nl/plan-gratis-intake-met-jearmey", en: "/en/plan-free-intro-with-jearmey" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="jearmey" locale="en" />;
}

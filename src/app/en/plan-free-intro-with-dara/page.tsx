import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Udara",
  description: "Book a free introductory session with Udara at SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/en/plan-free-intro-with-dara", languages: { nl: "/nl/plan-gratis-intake-met-dara", en: "/en/plan-free-intro-with-dara" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="dara" locale="en" />;
}

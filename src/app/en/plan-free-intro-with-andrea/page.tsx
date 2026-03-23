import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Andrea",
  description: "Book a free introductory session with Andrea at SculptClub Amsterdam Jordaan.",
  alternates: { canonical: "/en/plan-free-intro-with-andrea", languages: { nl: "/nl/plan-gratis-intake-met-andrea", en: "/en/plan-free-intro-with-andrea" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="andrea" locale="en" />;
}

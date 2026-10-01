import type { Metadata } from "next";
import { TrainerDirectoryPage } from "@/components/marketing/trainer-directory";

export const metadata: Metadata = {
  title: { absolute: "Personal trainers in Amsterdam | SculptClub" },
  description:
    "Personal trainers in Amsterdam met wijk, specialiteit en taal. Kies iemand die bij je past en boek direct bij de trainer zelf.",
  alternates: {
    canonical: "/nl/trainers",
    languages: { nl: "/nl/trainers", en: "/en/trainers" },
  },
  openGraph: {
    type: "website",
    url: "/nl/trainers",
    title: "Personal trainers in Amsterdam | SculptClub",
    description: "Personal trainers in Amsterdam met wijk, specialiteit en taal. Boek direct bij de trainer zelf.",
  },
};

export default function TrainersNl() {
  return <TrainerDirectoryPage locale="nl" />;
}

import type { Metadata } from "next";
import { TrainerDirectoryPage } from "@/components/marketing/trainer-directory";

export const metadata: Metadata = {
  title: { absolute: "Personal trainers in Amsterdam | SculptClub" },
  description:
    "Personal trainers in Amsterdam by neighbourhood, specialty and language. Pick someone who fits and book directly with the trainer.",
  alternates: {
    canonical: "/en/trainers",
    languages: { nl: "/nl/trainers", en: "/en/trainers" },
  },
  openGraph: {
    type: "website",
    url: "/en/trainers",
    title: "Personal trainers in Amsterdam | SculptClub",
    description: "Personal trainers in Amsterdam by neighbourhood, specialty and language. Book directly with the trainer.",
  },
};

export default function TrainersEn() {
  return <TrainerDirectoryPage locale="en" />;
}

import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";

export const metadata: Metadata = {
  title: { absolute: "Pagina niet gevonden — Page not found | SculptClub" },
  description:
    "De pagina die je zoekt bestaat niet of is verplaatst. The page you're looking for doesn't exist or has moved. Browse our personal trainers, Open Gym or studio rental.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}

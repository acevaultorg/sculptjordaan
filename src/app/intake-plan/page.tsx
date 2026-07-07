import type { Metadata } from "next";
import { Suspense } from "react";
import { IntakePlanContent } from "./intake-plan-client";

export const metadata: Metadata = {
  title: { absolute: "Jouw 4-week plan · SculptClub" },
  description: "Persoonlijk 4-week trainingsplan bij SculptClub Personal Training in Amsterdam Jordaan.",
  robots: { index: false, follow: false },
};

// Personalization reads query params (?name/?goal/?trainer) CLIENT-side so the
// page can be statically exported (CF Pages migration 2026-07-07). useSearchParams
// requires a Suspense boundary under static export.
export default function IntakePlanPage() {
  return (
    <Suspense fallback={null}>
      <IntakePlanContent />
    </Suspense>
  );
}

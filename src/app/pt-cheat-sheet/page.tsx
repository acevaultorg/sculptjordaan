import type { Metadata } from "next";
import { Suspense } from "react";
import { PtCheatSheetContent } from "./pt-cheat-sheet-client";

export const metadata: Metadata = {
  title: { absolute: "10 vragen die jouw personal trainer moet kunnen beantwoorden · SculptClub" },
  description: "Een gratis cheat sheet van SculptClub — 10 quality-control vragen voor je personal trainer + scoring-rubric.",
  robots: { index: false, follow: false },
};

// locale read CLIENT-side (?locale=en) for static export (CF Pages 2026-07-07).
export default function PtCheatSheetPage() {
  return (
    <Suspense fallback={null}>
      <PtCheatSheetContent />
    </Suspense>
  );
}

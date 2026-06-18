"use client";

import dynamic from "next/dynamic";

/**
 * Client-only mount for the Trainer-Match Quiz.
 *
 * The quiz is a noindex interactive TOOL (see /{nl,en}/match-trainer) — it has
 * no SEO value to gain from SSR. Rendering it client-only via dynamic(ssr:false)
 * removes its server HTML entirely, so there is no SSR/client tree to mismatch.
 *
 * Why this exists (2026-06-18): the SSR-rendered quiz was silently failing to
 * hydrate — a hydration mismatch in the quiz subtree aborted hydration for the
 * whole /match-trainer page tree (the quiz AND the shared Header went dead/
 * non-interactive). 36 visitors/mo hit a frozen quiz → 0 Quiz events, 0 leads.
 * The dev `eval()`/CSP block hid React's error log and prod React doesn't log
 * mismatches, so it stayed invisible until the Plausible event-coverage audit
 * found Quiz Start firing 0× across 36 visitors. Client-only render is the
 * robust fix: a clean client mount that always hydrates + fires its events.
 */
const TrainerMatchQuiz = dynamic(
  () => import("./trainer-match-quiz").then((m) => m.TrainerMatchQuiz),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-2xl border border-border/40 bg-secondary p-6 sm:p-8 min-h-[320px] animate-pulse"
        aria-hidden
      />
    ),
  },
);

export function TrainerMatchQuizClient({ locale }: { locale: "nl" | "en" }) {
  return <TrainerMatchQuiz locale={locale} />;
}

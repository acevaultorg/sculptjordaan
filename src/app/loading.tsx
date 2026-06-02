/**
 * Root loading.tsx — 2026-06-02 set to render `null` (was a centered spinner).
 *
 * Why: Next.js App Router auto-wraps `page.tsx` in a `<Suspense>` boundary
 * using this file as the fallback. CDP measurement on slow-4G mobile
 * (393×852@3DPR, CPU 4×) measured FCP=1328ms / LCP=4428ms — a 3100ms gap
 * between first paint (the spinner) and the actual hero painting. Image
 * network fetch was fast (120KB AVIF w=1280 in ~600ms); the gap was hydration
 * + Suspense-resolve waiting time during which the spinner held the viewport
 * and blocked the hero from being eligible as the LCP element.
 *
 * Homepage `page.tsx` is purely synchronous (no async data-fetching, no
 * server-side awaits) and the only above-fold client component is `<Hero>`.
 * SSR streams the whole tree in one chunk, so a route-level Suspense
 * fallback adds no UX value here — it only delayed LCP.
 *
 * Returning null means: no Suspense fallback rendered; SSR HTML paints
 * directly with the hero image as the immediate LCP candidate.
 *
 * Tradeoff: client-side route NAVIGATION (clicking between pages after
 * initial load) shows no loading indicator. In Next.js App Router + static
 * marketing pages, navigation is typically <300ms (prefetched), so the
 * spinner was rarely shown anyway. Accepting this tradeoff for a measured
 * LCP win on first visit.
 *
 * Revert: replace null with the prior spinner JSX if route transitions
 * start feeling unresponsive in production. Reversible 2-line change.
 */
export default function Loading() {
  return null;
}

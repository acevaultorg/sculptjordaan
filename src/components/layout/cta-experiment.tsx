"use client";

import { useEffect } from "react";

/**
 * CTA colour A/B test — GA4 click event (2026-09-30).
 *
 * The variant itself is assigned before paint by the head script in
 * app/layout.tsx (data-cta-variant on <html>, cookie sc_cta_ab). This component
 * only reports: every click on a filled button fires ONE GA4 event
 *
 *   cta_click { cta_variant: "a" | "b", cta_audience: "rental" | "member" | "none", cta_text }
 *
 * "Filled button" uses the same rule as the colour CSS at the end of
 * globals.css: an <a>/<button> with the bg-brand / bg-primary class, or one
 * that contains a pill with that class (the studio rate rows). The audience is
 * the nearest scope, again the same rule as the CSS. cta_text is the button's
 * own label (site copy, capped at 60 characters). Nothing about the visitor is
 * sent. If gtag is not on the page, nothing happens.
 */

const FILLED = /(^|\s)(bg-brand|bg-primary)(\s|$)/;
const SCOPE =
  '[data-audience], [data-intent="studio_rental"], [data-intent="open_gym"], [data-intent="trainer"]';

function isFilled(el: Element): boolean {
  if (FILLED.test(el.getAttribute("class") ?? "")) return true;
  return Array.from(el.querySelectorAll("[class]")).some((c) =>
    FILLED.test(c.getAttribute("class") ?? ""),
  );
}

function audienceOf(el: Element): "rental" | "member" | "none" {
  const scope = el.closest(SCOPE);
  if (!scope) return "none";
  const a = scope.getAttribute("data-audience");
  if (a === "rental" || a === "member") return a;
  return scope.getAttribute("data-intent") === "studio_rental" ? "rental" : "member";
}

export function CtaExperiment() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const el = target?.closest?.("a, button");
      if (!el || !isFilled(el)) return;
      const variant = document.documentElement.getAttribute("data-cta-variant");
      if (variant !== "a" && variant !== "b") return;
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "cta_click", {
        cta_variant: variant,
        cta_audience: audienceOf(el),
        cta_text: (el.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 60),
      });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

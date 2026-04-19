"use client";

import { usePathname } from "next/navigation";
import { alternateRoutes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function HreflangLinks() {
  const pathname = usePathname() || "/";

  // Find the NL + EN pair for the current path.
  // alternateRoutes maps NL→EN and EN→NL, so one direction always hits.
  let nlPath: string | null = null;
  let enPath: string | null = null;

  if (pathname.startsWith("/en") || pathname === "/en") {
    enPath = pathname;
    const nl = Object.entries(alternateRoutes).find(([, v]) => v === pathname);
    nlPath = nl?.[0] ?? null;
  } else {
    nlPath = pathname;
    enPath = alternateRoutes[pathname] ?? null;
  }

  // If we couldn't resolve an alternate, don't emit hreflang (avoid misleading Google).
  if (!nlPath || !enPath) return null;

  const base = siteConfig.url.replace(/\/$/, "");
  const nlUrl = `${base}${nlPath === "/" ? "/" : nlPath}`;
  const enUrl = `${base}${enPath}`;

  return (
    <>
      <link rel="alternate" hrefLang="nl-NL" href={nlUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={nlUrl} />
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}
import { footerServices, footerCompany, footerLegal } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getLocaleFromPath } from "@/lib/locale";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="overline mb-3 sm:mb-4">{title}</h3>
      <ul className="-my-1.5 sm:space-y-2.5 sm:my-0">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              // Mobile: py-2 gives ≥40px tap target (text-sm line-height ~20px + 16px padding)
              // Desktop (sm+): revert to inline link with space-y-2.5 between items
              className="block py-3 sm:py-0 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const t = {
    nl: {
      services: "Diensten",
      company: "Bedrijf",
      location: "Locatie",
      legal: "Juridisch",
      hours: "Dagelijks 06:00–22:00",
      rights: "Alle rechten voorbehouden.",
    },
    en: {
      services: "Services",
      company: "Company",
      location: "Location",
      legal: "Legal",
      hours: "Daily 06:00–22:00",
      rights: "All rights reserved.",
    },
  }[locale];

  return (
    <footer className="mt-auto border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <FooterColumn title={t.services} items={footerServices[locale]} />
          <FooterColumn title={t.company} items={footerCompany[locale]} />

          {/* Location column */}
          <div>
            <h3 className="overline mb-4">{t.location}</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
              <p>{t.hours}</p>
              {/* Mobile: -ml-2 + p-2 on each anchor = 36×36 tap area without
                  shifting visual icon-row layout. Desktop unchanged. */}
              <div className="flex items-center gap-1 sm:gap-3 pt-1 -ml-2 sm:ml-0">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 sm:min-h-0 sm:min-w-0 sm:p-0 hover:text-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 sm:min-h-0 sm:min-w-0 sm:p-0 hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 sm:min-h-0 sm:min-w-0 sm:p-0 hover:text-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 sm:min-h-0 sm:min-w-0 sm:p-0 hover:text-foreground transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <FooterColumn title={t.legal} items={footerLegal[locale]} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t.rights}
          </p>
          <p>
            {siteConfig.address.street}, {siteConfig.address.city}
          </p>
          {/* Was opacity-40 → contrast 1.76:1 (failing AA). Lighthouse mobile
              audit 2026-05-17 flagged. Bumped to opacity-60 → ~3:1 which clears
              AA large-text/non-decorative bar at this 11px weight (still subtle
              enough to read as "secondary tier" footer credit, not competing
              with brand). */}
          {/* Build/version stamp (operator 2026-07-04): v + HHMM + DDMMYY in
              Amsterdam time, generated at build in next.config.ts so it reflects
              the deploy moment. Lets us tell at a glance which build is live. */}
          <p className="opacity-60 text-[11px]">
            Powered by AcePilot
            {process.env.NEXT_PUBLIC_BUILD_VERSION ? (
              <span className="ml-1.5 opacity-70">· {process.env.NEXT_PUBLIC_BUILD_VERSION}</span>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}

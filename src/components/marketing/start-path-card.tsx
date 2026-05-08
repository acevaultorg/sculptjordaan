"use client";

import Link from "next/link";
import { ArrowRight, Dumbbell, Users, Building2 } from "lucide-react";
import { isAcuityUrl, detectBookingType, trackBeginBooking } from "@/lib/tracking";

const iconMap = {
  Users,
  Dumbbell,
  Building2,
} as const;

interface StartPathCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  cta: string;
  href: string;
  external: boolean;
  highlight: string;
}

function sendEvent(name: string, params: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

// Mirror start_path_click into Plausible so /start performance shows up in the
// same dashboard as WhatsApp/Acuity goals. utm_content (set per-path in /start)
// is the "which path" signal — extracted into the Plausible `intent` prop so it
// joins the existing trainer/open_gym/studio_rental taxonomy from analytics.tsx.
function sendPlausibleStartPathClick(title: string, href: string) {
  if (typeof window === "undefined") return;
  const plausible = (window as unknown as {
    plausible?: (name: string, opts?: { props?: Record<string, string> }) => void;
  }).plausible;
  if (typeof plausible !== "function") return;
  const m = href.match(/[?&]utm_content=([^&]+)/);
  const intentMap: Record<string, string> = { pt: "trainer", open_gym: "open_gym", studio_rental: "studio_rental" };
  const intent = m ? (intentMap[m[1]] ?? "generic") : "generic";
  plausible("Start Path Click", {
    props: { intent, path_title: title, source_page: window.location.pathname },
  });
}

export function StartPathCard({ icon, title, description, cta, href, external, highlight }: StartPathCardProps) {
  const Icon = iconMap[icon];
  const handleClick = () => {
    if (isAcuityUrl(href)) {
      const { bookingType, planName } = detectBookingType(href);
      trackBeginBooking(bookingType, planName);
    }
    sendEvent("start_path_click", {
      path_title: title,
      path_cta: cta,
      path_href: href,
    });
    sendPlausibleStartPathClick(title, href);
  };

  const content = (
    <div className="group relative flex items-start gap-4 p-5 rounded-2xl border border-border/50 bg-secondary hover:border-brand/50 hover:bg-secondary/80 transition-all cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-brand" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 pr-20 sm:pr-24">
          <h2 className="font-bold text-lg leading-tight">{title}</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
          {cta}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded-full">
        {highlight}
      </span>
    </div>
  );

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {content}
    </a>
  ) : (
    <Link href={href} onClick={handleClick}>
      {content}
    </Link>
  );
}

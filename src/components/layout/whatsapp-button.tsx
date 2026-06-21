"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/locale";

const PHONE = "31615147952";

const messages = {
  nl: {
    studio:
      "Hoi! Ik ben personal trainer en wil graag de studio bekijken / huren",
    trainerMember:
      "Hoi! Ik wil graag trainer worden bij SculptClub",
    trainerInfo:
      "Hoi! Ik ben personal trainer en heb een vraag over SculptClub",
    findTrainer:
      "Hoi! Ik zoek een personal trainer bij SculptClub",
    openGym:
      "Hoi! Ik heb een vraag over Open Gym bij SculptClub",
    default: "Hoi! Ik heb een vraag over SculptClub",
  },
  en: {
    studio:
      "Hi! I'm a personal trainer and would like to see / rent the studio",
    trainerMember:
      "Hi! I'd like to join as a trainer at SculptClub",
    trainerInfo:
      "Hi! I'm a personal trainer and have a question about SculptClub",
    findTrainer:
      "Hi! I'm looking for a personal trainer at SculptClub",
    openGym:
      "Hi! I have a question about Open Gym at SculptClub",
    default: "Hi! I have a question about SculptClub",
  },
} as const;

// Exported so MobileBottomCTABar can reuse the same context-aware
// message-picking when it renders an integrated WhatsApp circle inside
// the sticky bar (mobile only — the floating button below is desktop only).
export function pickMessage(pathname: string, locale: "nl" | "en"): string {
  const m = messages[locale];
  // Trainer-acquisition pages (highest revenue per click)
  if (/\/(studio-huren|studio-rental)(\/|$)/.test(pathname)) return m.studio;
  if (/\/(word-trainer|become-trainer)(\/|$)/.test(pathname))
    return m.trainerMember;
  if (/\/(voor-trainers|for-trainers)(\/|$)/.test(pathname))
    return m.trainerInfo;
  // Consumer pages
  if (
    /\/(vind-jouw-personal-trainer|find-personal-trainer)(\/|$)/.test(pathname)
  )
    return m.findTrainer;
  if (/\/(open-gym|book-gym|boek-gym)(\/|$)/.test(pathname)) return m.openGym;
  return m.default;
}

// Exported so the bottom CTA bar can render the same WA logo at smaller
// size inside its sticky bar — visual brand-language consistency.
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const message = pickMessage(pathname, locale);
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  const label = locale === "nl" ? "Chat via WhatsApp" : "Chat via WhatsApp";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      // 2026-05-19: floating circle is now DESKTOP-ONLY (`hidden md:flex`).
      // On mobile the WhatsApp action is integrated into the sticky
      // MobileBottomCTABar to avoid the layering issue where this circle
      // was obscured behind the bar's orange CTA (operator screenshot of
      // homepage + trainer-hub bottom-right showed only a green sliver
      // peeking through behind the orange pill). The bar uses the same
      // pickMessage + WhatsAppIcon exported from this file, so behaviour
      // stays identical — just rehoused.
      className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 animate-pulse-once"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

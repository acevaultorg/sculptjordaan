"use client";

import { useState, useSyncExternalStore } from "react";
import { Globe, X } from "lucide-react";

// A visitor's primary language is fixed for the session → nothing to subscribe to;
// useSyncExternalStore just gives an SSR-safe read (server: false, client: actual)
// with zero setState-in-effect.
const subscribe = () => () => {};
const isNlClient = () => {
  if (typeof navigator === "undefined") return false;
  const l = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase();
  return l.startsWith("nl");
};
const isNlServer = () => false;

/**
 * Immediate, page-specific "view this in Dutch" offer for Dutch-language visitors who
 * land on an English page — e.g. the Dutch-targeted paid-ad traffic on /en/become-trainer
 * (Plausible 30d: 102/104 NL, 95% mobile bounce, ~4s). That's too fast for the gentle,
 * 0.9s-delayed global <LanguageHint>.
 *
 * It only OFFERS Dutch to Dutch-language users and is one-tap dismissible — it never
 * forces. (The *forced* Accept-Language redirect that drove 28% off the Dutch funnel was
 * the opposite: pushing Dutch users to English. This can't mis-route anyone.)
 */
export function AltLanguageOffer({ nlHref, label }: { nlHref: string; label: string }) {
  const isNl = useSyncExternalStore(subscribe, isNlClient, isNlServer);
  const [dismissed, setDismissed] = useState(false);
  if (!isNl || dismissed) return null;
  return (
    <div className="border-b border-border bg-brand/10">
      <div className="container mx-auto flex items-center gap-3 px-4 py-2.5 sm:px-6">
        <Globe className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
        <a
          href={nlHref}
          className="plausible-event-name=become_trainer_nl_offer min-w-0 flex-1 text-sm font-semibold text-foreground transition-colors hover:text-brand"
        >
          {label} →
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Sluiten"
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors touch-manipulation hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

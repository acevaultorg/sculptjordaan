"use client";

import { useState } from "react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    packages: "Pakketten",
    hourly: "Per uur",
    save: "bespaar tot 23%",
  },
  en: {
    packages: "Packages",
    hourly: "Hourly",
    save: "save up to 23%",
  },
} as const;

export function RentalTabs({
  locale,
  packages,
  hourly,
}: {
  locale: Locale;
  packages: React.ReactNode;
  hourly: React.ReactNode;
}) {
  const [tab, setTab] = useState<"hourly" | "packages">("hourly");
  const c = COPY[locale];

  return (
    <div>
      <div className="mx-auto mb-6 flex max-w-md gap-2 rounded-full border border-border bg-card p-1">
        <button
          type="button"
          onClick={() => setTab("hourly")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "hourly"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "hourly"}
        >
          {c.hourly}
        </button>
        <button
          type="button"
          onClick={() => setTab("packages")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "packages"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "packages"}
        >
          <span>{c.packages}</span>
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
              tab === "packages" ? "bg-white/25 text-white" : "bg-discount text-white"
            }`}
          >
            {c.save}
          </span>
        </button>
      </div>
      <div>{tab === "hourly" ? hourly : packages}</div>
    </div>
  );
}

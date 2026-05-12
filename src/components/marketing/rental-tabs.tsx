"use client";

import { useState } from "react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    packages: "Pakketten (bespaar tot 23%)",
    hourly: "Per uur",
    recommend: "Aanbevolen",
  },
  en: {
    packages: "Packages (save up to 23%)",
    hourly: "Hourly",
    recommend: "Recommended",
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
  const [tab, setTab] = useState<"packages" | "hourly">("packages");
  const c = COPY[locale];

  return (
    <div>
      <div className="mx-auto mb-6 flex max-w-md gap-2 rounded-full border border-border bg-card p-1">
        <button
          type="button"
          onClick={() => setTab("packages")}
          className={`relative flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "packages"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "packages"}
        >
          {c.packages}
          {tab !== "packages" && (
            <span className="absolute -top-1 -right-1 rounded-full bg-discount px-1.5 py-0.5 text-[10px] font-bold text-white">
              {c.recommend}
            </span>
          )}
        </button>
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
      </div>
      <div>{tab === "packages" ? packages : hourly}</div>
    </div>
  );
}

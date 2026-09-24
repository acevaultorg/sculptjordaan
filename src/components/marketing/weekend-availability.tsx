"use client";

// Live "this weekend" line for the Open Gym page. Data: /api/weekend-availability
// (functions/api/weekend-availability.ts, a cached proxy of Acuity's public
// availability). Renders nothing until it has an answer, and nothing on error,
// so a failed fetch never shows a wrong claim.

import { useEffect, useState } from "react";

type Day = { date: string; morning: boolean; afternoon: boolean };

const copy = {
  nl: { lead: "Dit weekend nog plek:", leadStudio: "Live, dit weekend nog vrij:", morning: "ochtend", afternoon: "middag", and: "en", locale: "nl-NL" },
  en: { lead: "Room this weekend:", leadStudio: "Live, still free this weekend:", morning: "morning", afternoon: "afternoon", and: "and", locale: "en-GB" },
};

export function WeekendAvailability({
  locale,
  kind = "gym",
  className = "mt-3 text-sm text-muted-foreground",
}: {
  locale: "nl" | "en";
  kind?: "gym" | "studio";
  className?: string;
}) {
  const [days, setDays] = useState<Day[] | null>(null);
  const t = copy[locale];

  useEffect(() => {
    let alive = true;
    fetch(`/api/weekend-availability?type=${kind}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (alive && j?.ok && Array.isArray(j.days)) setDays(j.days);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [kind]);

  const open = (days ?? []).filter((d) => d.morning || d.afternoon);
  if (open.length === 0) return null;

  const label = (d: Day) => {
    const name = new Date(`${d.date}T12:00:00`).toLocaleDateString(t.locale, {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
    const parts = [d.morning && t.morning, d.afternoon && t.afternoon].filter(Boolean).join(` ${t.and} `);
    return `${name} (${parts})`;
  };

  return (
    <p className={className}>
      <span className="font-medium text-foreground">{kind === "studio" ? t.leadStudio : t.lead}</span> {open.map(label).join(" · ")}
    </p>
  );
}

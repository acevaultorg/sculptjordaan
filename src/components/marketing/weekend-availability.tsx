"use client";

// Live "this weekend" line for the Open Gym page. Data: /api/weekend-availability
// (functions/api/weekend-availability.ts, a cached proxy of Acuity's public
// availability). Renders nothing until it has an answer, and nothing on error,
// so a failed fetch never shows a wrong claim.

import { useEffect, useState } from "react";

type Day = { date: string; morning: boolean; afternoon: boolean };

const copy = {
  nl: { lead: "Dit weekend nog plek:", morning: "ochtend", afternoon: "middag", and: "en", locale: "nl-NL" },
  en: { lead: "Room this weekend:", morning: "morning", afternoon: "afternoon", and: "and", locale: "en-GB" },
};

export function WeekendAvailability({ locale }: { locale: "nl" | "en" }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const t = copy[locale];

  useEffect(() => {
    let alive = true;
    fetch("/api/weekend-availability")
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (alive && j?.ok && Array.isArray(j.days)) setDays(j.days);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

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
    <p className="mt-3 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{t.lead}</span> {open.map(label).join(" · ")}
    </p>
  );
}

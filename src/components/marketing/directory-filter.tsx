"use client";

import { useEffect, useState } from "react";

/**
 * Filter bar for the trainer directory. Progressive enhancement: every card is
 * server-rendered (all links stay in the HTML); this only toggles `hidden` on
 * elements marked `data-dir-card` by matching their data-area / data-tags /
 * data-langs attributes. Fires no analytics events.
 */

export interface FilterOption {
  value: string;
  label: string;
}

interface Props {
  areas: FilterOption[];
  tags: FilterOption[];
  langs: FilterOption[];
  labels: {
    area: string;
    tag: string;
    lang: string;
    all: string;
    one: string;
    many: string;
    empty: string;
    reset: string;
  };
}

function Group({
  name,
  options,
  value,
  onChange,
  allLabel,
}: {
  name: string;
  options: FilterOption[];
  value: string;
  onChange: (v: string) => void;
  allLabel: string;
}) {
  const id = `dir-filter-${name.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div className="flex items-center gap-3 sm:block">
      <label htmlFor={id} className="w-28 shrink-0 text-sm font-semibold text-muted-foreground sm:mb-1.5 sm:block sm:w-auto">
        {name}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-11 w-full min-w-0 rounded-xl border border-border bg-background px-3 text-base text-foreground"
      >
        <option value="">{allLabel}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DirectoryFilter({ areas, tags, langs, labels }: Props) {
  const [area, setArea] = useState("");
  const [tag, setTag] = useState("");
  const [lang, setLang] = useState("");
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-dir-card]"));
    let n = 0;
    for (const el of cards) {
      const okArea = !area || el.dataset.area === area;
      const okTag = !tag || (el.dataset.tags ?? "").split("|").includes(tag);
      const okLang = !lang || (el.dataset.langs ?? "").split("|").includes(lang);
      const ok = okArea && okTag && okLang;
      el.hidden = !ok;
      if (ok) n++;
    }
    // Hide a group heading + grid when all of its cards are filtered out.
    for (const g of Array.from(document.querySelectorAll<HTMLElement>("[data-dir-group]"))) {
      g.hidden = !g.querySelector("[data-dir-card]:not([hidden])");
    }
    setShown(n);
  }, [area, tag, lang]);

  const filtered = Boolean(area || tag || lang);

  return (
    <div className="mt-10 rounded-2xl border border-border bg-card p-4 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        <Group name={labels.area} options={areas} value={area} onChange={setArea} allLabel={labels.all} />
        <Group name={labels.tag} options={tags} value={tag} onChange={setTag} allLabel={labels.all} />
        <Group name={labels.lang} options={langs} value={lang} onChange={setLang} allLabel={labels.all} />
      </div>
      <div className="mt-3 flex min-h-11 flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-sm">
        <p className="font-semibold" aria-live="polite">
          {shown === null ? " " : shown === 0 ? labels.empty : shown === 1 ? labels.one : labels.many.replace("{n}", String(shown))}
        </p>
        {filtered && (
          <button
            type="button"
            onClick={() => {
              setArea("");
              setTag("");
              setLang("");
            }}
            className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
          >
            {labels.reset}
          </button>
        )}
      </div>
    </div>
  );
}

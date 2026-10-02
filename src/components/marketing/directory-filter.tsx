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
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{name}</p>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {[{ value: "", label: allLabel }, ...options].map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value || "all"}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.value)}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:border-foreground"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
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
    <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-4 sm:p-6">
      <Group name={labels.area} options={areas} value={area} onChange={setArea} allLabel={labels.all} />
      <Group name={labels.tag} options={tags} value={tag} onChange={setTag} allLabel={labels.all} />
      <Group name={labels.lang} options={langs} value={lang} onChange={setLang} allLabel={labels.all} />
      <div className="flex min-h-11 flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-sm">
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

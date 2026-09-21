"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Flame, Dumbbell, Activity, Heart, Sparkles, BatteryCharging, Check, ArrowLeft, Info } from "lucide-react";
import type { PtGoal } from "@/config/pt-goals";
import type { Trainer } from "@/config/trainers";
import { TrainerFilterGrid } from "@/components/marketing/trainer-filter-grid";

type LocaleProp = "nl" | "en";

const icons = { flame: Flame, dumbbell: Dumbbell, activity: Activity, heart: Heart, sparkles: Sparkles, battery: BatteryCharging };

const copy = {
  nl: {
    trainersCount: (n: number) => `${n} trainers`,
    yourTraject: "Jouw traject",
    focusTitle: "Waar je aan werkt",
    measureTitle: "Wat je kunt meten",
    measureHint: "Je trainer kiest samen met jou wat past.",
    matchTitle: (n: number) => `${n} trainers die hierin gespecialiseerd zijn`,
    matchHint: "Plan een gratis intake. Je trainer stelt een traject-plan op met doel, duur en een vaste prijs vooraf.",
    otherGoal: "Ander doel kiezen",
    progTitle: "Trajecten die onze trainers al aanbieden",
    progHint: "Zo beschrijven de trainers ze zelf. Duur, inhoud en prijs spreek je af in de gratis intake.",
    progBy: (name: string) => `met ${name}`,
  },
  en: {
    trainersCount: (n: number) => `${n} trainers`,
    yourTraject: "Your programme",
    focusTitle: "What you work on",
    measureTitle: "What you can track",
    measureHint: "Your trainer picks what fits, together with you.",
    matchTitle: (n: number) => `${n} trainers who specialise in this`,
    matchHint: "Book a free intro. Your trainer puts together a programme with a goal, a duration and a fixed price upfront.",
    otherGoal: "Choose another goal",
    progTitle: "Programmes our trainers already run",
    progHint: "As the trainers describe them. Length, content and price are agreed at the free intro.",
    progBy: (name: string) => `with ${name}`,
  },
} as const;

/**
 * Goal-first entry to the PT hub. Visitor picks the change they want; the panel
 * shows what a traject toward it works on and ONLY the trainers who advertise
 * that goal themselves (see src/config/pt-goals.ts). The trainer cards pass the
 * goal into the WhatsApp message so the trainer knows why the lead is writing.
 *
 * Fires GA4 `goal_select` {goal_id} — the new top-of-funnel step, so the path
 * goal_select -> trainer_impression -> whatsapp_click/generate_lead can be read
 * per goal.
 */
export function GoalFunnel({ goals, trainers, locale }: { goals: PtGoal[]; trainers: Trainer[]; locale: LocaleProp }) {
  const t = copy[locale];
  const [selected, setSelected] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const byId = new Map(trainers.map((tr) => [tr.id, tr]));
  const goal = goals.find((g) => g.id === selected) ?? null;
  const matched = goal ? goal.trainerIds.map((id) => byId.get(id)).filter((x): x is Trainer => Boolean(x)) : [];
  // The trainers' own named programmes for this goal (trainers.ts `programmes`).
  // They link to the trainer's profile with the goal carried, so the visitor
  // stays in the SculptClub intake path rather than leaving for another site.
  const progs = goal
    ? matched.flatMap((tr) => (tr.programmes ?? []).filter((p) => p.goals?.includes(goal.id)).map((p) => ({ tr, p })))
    : [];

  const choose = (id: string) => {
    setSelected(id);
    const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof g === "function") g("event", "goal_select", { goal_id: id, source_page: window.location.pathname });
    requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((g) => {
          const Icon = icons[g.icon];
          const people = g.trainerIds.map((id) => byId.get(id)).filter((x): x is Trainer => Boolean(x));
          const active = g.id === selected;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => choose(g.id)}
              aria-pressed={active}
              data-goal={g.id}
              className={`group flex h-full flex-col rounded-2xl border p-5 text-left transition-all active:scale-[0.99] ${
                active ? "border-brand bg-brand/10 shadow-brand-lg" : "border-border bg-card hover:border-brand/60 hover:bg-muted/60"
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-base font-bold leading-snug text-foreground">{g.title[locale]}</span>
              </div>
              <span className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{g.promise[locale]}</span>
              <span className="flex items-center gap-2">
                <span className="flex -space-x-2">
                  {people.slice(0, 4).map((p) => (
                    <Image
                      key={p.id}
                      src={p.image}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full border-2 border-card object-cover object-top"
                    />
                  ))}
                </span>
                <span className="text-xs font-medium text-muted-foreground">{t.trainersCount(people.length)}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div ref={panelRef} className="scroll-mt-24">
        {goal && (
          <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5 sm:p-8">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t.otherGoal}
            </button>
            <p className="overline mb-2">{t.yourTraject}</p>
            <h3 className="mb-2 text-2xl font-bold">{goal.title[locale]}</h3>
            <p className="mb-6 text-muted-foreground">{goal.promise[locale]}</p>

            <div className="mb-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold">{t.focusTitle}</p>
                <ul className="space-y-2">
                  {goal.focus[locale].map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold">{t.measureTitle}</p>
                <ul className="space-y-2">
                  {goal.measures[locale].map((m) => (
                    <li key={m} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-muted-foreground">{t.measureHint}</p>
              </div>
            </div>

            {goal.note && (
              <p className="mb-6 flex gap-2 rounded-xl border border-border bg-card p-3 text-xs text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {goal.note[locale]}
              </p>
            )}

            {progs.length > 0 && (
              <div className="mb-8">
                <h4 className="mb-1 text-lg font-bold">{t.progTitle}</h4>
                <p className="mb-4 text-sm text-muted-foreground">{t.progHint}</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {progs.map(({ tr, p }) => (
                    <li key={`${tr.id}-${p.name[locale]}`}>
                      <a
                        href={`/${locale}/${tr.slug[locale]}?doel=${goal.id}`}
                        data-programme={p.name[locale]}
                        onClick={() => {
                          const g = (window as Window & { gtag?: (...a: unknown[]) => void }).gtag;
                          if (typeof g === "function")
                            g("event", "programme_click", { trainer_name: tr.id, programme: p.name[locale], goal_id: goal.id, action: "profile", source_page: window.location.pathname });
                        }}
                        className="flex h-full gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/60"
                      >
                        <Image
                          src={tr.image}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 rounded-full object-cover object-top"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">
                            {p.name[locale]} <span className="font-normal text-muted-foreground">{t.progBy(tr.name)}</span>
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{p.summary[locale]}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h4 className="mb-1 text-lg font-bold">{t.matchTitle(matched.length)}</h4>
            <p className="mb-6 text-sm text-muted-foreground">{t.matchHint}</p>
            <TrainerFilterGrid trainers={matched} locale={locale} hideFilters goalLabel={goal.title[locale]} goalId={goal.id} />
          </div>
        )}
      </div>
    </div>
  );
}

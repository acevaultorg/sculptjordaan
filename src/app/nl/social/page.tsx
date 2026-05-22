"use client";

import { useState, useMemo, useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Clock, Image as ImageIcon, Video, Download, Calendar, Sparkles, CheckCircle2, Circle, Users, ArrowRight } from "lucide-react";
import {
  SOCIAL_IDEAS,
  PILLARS,
  POSTING_CALENDAR,
  STRATEGY_SUMMARY,
  PILLAR_TO_AUDIENCE,
  type Platform,
  type Pillar,
} from "@/data/social-content";
import { trainers } from "@/config/trainers";

type Filter = "all" | Pillar;
type View = "ideas" | "calendar" | "strategy" | "trainers";

// Which pillars a trainer can authentically post about themselves
const TRAINER_PILLARS: Pillar[] = ["pt-showcase", "trainer-spotlight", "fitness-tip", "before-after"];

const STORAGE_KEY = "sculptclub-social-posted-v1";

/** Stable key for each calendar slot — survives data reorders */
function slotKey(weekNum: number, weekday: number, ideaId: string): string {
  return `w${weekNum}-d${weekday}-${ideaId}`;
}

/** Get rotation-week (1-4) for any real date based on ISO-week mod 4 */
function getRotationWeek(d: Date): 1 | 2 | 3 | 4 {
  const start = new Date(d.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((d.getTime() - start.getTime()) / 86400000);
  const isoWeek = Math.ceil((dayOfYear + start.getDay()) / 7);
  return (((isoWeek - 1) % 4) + 1) as 1 | 2 | 3 | 4;
}

/** Real calendar date for a given rotation-week + ISO-weekday, anchored at `now`.
 * Returns null if the slot's rotation week doesn't appear in the next 4 weeks starting today. */
function realDateForSlot(now: Date, rotationWeek: 1 | 2 | 3 | 4, weekday: number): Date | null {
  const todayIsoWd = ((now.getDay() + 6) % 7) + 1; // 1-7
  const currentRotation = getRotationWeek(now);
  for (let offset = 0; offset < 4; offset++) {
    const targetRotation = (((currentRotation - 1 + offset) % 4) + 1) as 1 | 2 | 3 | 4;
    if (targetRotation === rotationWeek) {
      const daysAhead = (weekday - todayIsoWd) + 7 * offset;
      if (daysAhead < 0) continue;
      const result = new Date(now);
      result.setDate(result.getDate() + daysAhead);
      return result;
    }
  }
  return null;
}

const MONTH_NL = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
function formatShortDate(d: Date): string {
  return `${d.getDate()} ${MONTH_NL[d.getMonth()]}`;
}

/** Pick the next-due posting slot from today's date.
 * Maps real calendar weeks to the 4-week rotation by ISO-week mod 4. */
function findNextSlot(today: Date, postedKeys: Set<string>) {
  const dayOfWeek = ((today.getDay() + 6) % 7) + 1; // ISO weekday 1-7 (Mon-Sun)
  const hour = today.getHours() + today.getMinutes() / 60;

  // Get ISO week number, mod 4 → which rotation week we're on
  const start = new Date(today.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((today.getTime() - start.getTime()) / 86400000);
  const isoWeek = Math.ceil((dayOfYear + start.getDay()) / 7);
  const rotationWeek = ((isoWeek - 1) % 4) + 1; // 1, 2, 3, or 4

  // Build list of upcoming slots (today onwards, in rotation order)
  type SlotWithDate = (typeof POSTING_CALENDAR)[number] & { daysFromNow: number };
  const upcoming: SlotWithDate[] = [];

  for (let weekOffset = 0; weekOffset < 4; weekOffset++) {
    const targetWeek = (((rotationWeek - 1 + weekOffset) % 4) + 1) as 1 | 2 | 3 | 4;
    const slots = POSTING_CALENDAR.filter((s) => s.weekNumber === targetWeek);
    for (const slot of slots) {
      let daysFromNow = (slot.weekday - dayOfWeek) + 7 * weekOffset;
      if (weekOffset === 0 && daysFromNow < 0) continue; // past day this week
      if (weekOffset === 0 && daysFromNow === 0) {
        // Same day — check if the time has passed
        const [hh, mm] = slot.bestTime.split(":").map(Number);
        const slotHour = hh + mm / 60;
        if (slotHour < hour - 0.5) continue; // already passed (with 30 min grace)
      }
      upcoming.push({ ...slot, daysFromNow });
    }
  }

  // Sort by daysFromNow ascending; filter out already-posted
  upcoming.sort((a, b) => a.daysFromNow - b.daysFromNow);
  const next = upcoming.find((s) => !postedKeys.has(slotKey(s.weekNumber, s.weekday, s.ideaId)));
  return next ?? null;
}

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback handled silently
    }
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/85 transition hover:bg-white/15"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label ?? "Copy"}
        </>
      )}
    </button>
  );
}

export default function SocialPage() {
  const [view, setView] = useState<View>("ideas");
  const [platform, setPlatform] = useState<Platform | "all">("all");
  const [pillar, setPillar] = useState<Filter>("all");
  const [postedKeys, setPostedKeys] = useState<Set<string>>(new Set());
  const [now, setNow] = useState<Date | null>(null);

  // Hydrate posted-keys from localStorage on mount + capture client date.
  // Also auto-switch view to "calendar" / "strategy" / "trainers" when the URL
  // includes ?view=X OR a #slot-N-N hash (deep-link from an operator-side
  // social-post share). 2026-05-20: lets the operator paste a single URL
  // (sculptclub.nl/nl/social?view=calendar#slot-1-3) and land directly on
  // a specific post slot scrolled into view, instead of opening the page +
  // clicking Calendar + scrolling.
  useEffect(() => {
    setNow(new Date());
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPostedKeys(new Set(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get("view");
      const hash = window.location.hash;
      if (viewParam === "calendar" || viewParam === "strategy" || viewParam === "trainers" || viewParam === "ideas") {
        setView(viewParam as View);
      } else if (hash.startsWith("#slot-")) {
        // A slot anchor only makes sense in the calendar view.
        setView("calendar");
      } else if (hash.startsWith("#idea-")) {
        setView("ideas");
      }
      // After view switches + rerender, re-scroll to the anchor (browsers
      // run hash-scroll on initial load before React mounts the calendar
      // markup — without this, deep-links land at the top of the page).
      if (hash) {
        // Two RAFs: first one waits for view state to apply, second one waits
        // for the calendar's children to render into the DOM.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const el = document.getElementById(hash.slice(1));
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      }
    }
  }, []);

  const togglePosted = (key: string) => {
    setPostedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const nextSlot = useMemo(() => (now ? findNextSlot(now, postedKeys) : null), [now, postedKeys]);

  const ideas = useMemo(() => {
    return SOCIAL_IDEAS.filter((idea) => {
      if (platform !== "all" && idea.platform !== platform) return false;
      if (pillar !== "all" && idea.pillar !== pillar) return false;
      return true;
    });
  }, [platform, pillar]);

  return (
    <PageLayout>
      <Section className="pt-32">
        <SectionHeader
          overline="Content Studio"
          title="Social Content voor TikTok & Instagram"
          description="Briefs (English) · shotlists · hashtags · downloadable visuals. Brain provides the structure + facts. You write the Dutch in your own voice."
        />

        <FadeIn className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm text-emerald-100/90">
          <strong className="font-semibold">Why is this tool in English?</strong> Because AI-generated Dutch invents words no native would say. So this library is honest about its limits: brain delivers the <em>brief</em> (what to communicate, what facts to mention, what CTA, what length) in English. You translate to natural Dutch in your own voice. Photos, scripts, hashtags don't need translation.
        </FadeIn>

        {/* View toggle: Ideas / Calendar / Strategy */}
        <FadeIn className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView("ideas")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              view === "ideas"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Video className="h-3.5 w-3.5" />
            All ideas ({SOCIAL_IDEAS.length})
          </button>
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              view === "calendar"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Calendar className="h-3.5 w-3.5" />
            Post calendar (4 weeks)
          </button>
          <button
            type="button"
            onClick={() => setView("strategy")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              view === "strategy"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Strategy
          </button>
          <button
            type="button"
            onClick={() => setView("trainers")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              view === "trainers"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            Per trainer ({trainers.length})
          </button>
        </FadeIn>

        {view === "trainers" && (
          <FadeIn className="mt-8 space-y-6">
            <Card className="border-brand/30 bg-brand/5">
              <CardContent className="p-5">
                <h2 className="text-base font-bold text-white">Trainer content pack</h2>
                <p className="mt-1 text-sm text-white/80">
                  Each trainer gets a 4-pillar pack (PT-showcase · trainer-spotlight · fitness-tip · before-after).
                  Share with them via WhatsApp so they post to their own Instagram with their own audience.
                  Pre-filled intro message included — each trainer becomes a posting node.
                </p>
                <p className="mt-2 text-xs text-white/55">
                  Why this matters: SculptClub's booking funnel is ~95% Instagram-driven (Clarity, last 30d). Every trainer that posts = a new amplification node.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {trainers.map((trainer) => {
                const packIdeas = SOCIAL_IDEAS.filter((i) => TRAINER_PILLARS.includes(i.pillar)).slice(0, 6);
                const trainerWa = trainer.whatsapp ?? `https://wa.me/31683178934`;
                const intakeUrl = `https://sculptclub.nl/nl/${trainer.slug.nl}`;
                const introMessage = `Hi ${trainer.name}! Hier zijn een paar content-ideeën die jij zelf naar Instagram kunt posten — voor jouw eigen leads + SculptClub bookings.

Pak een idee dat bij jou past, film het in de studio (of vraag mij om te helpen), tag @sculptclub.nl en gebruik de hashtags. Jouw boekingslink:
${intakeUrl}

Tool met alle visuals + scripts + hashtags:
https://sculptclub.nl/nl/social

Vragen? Stuur mij een appje. — Paulo`;

                return (
                  <Card key={trainer.id} className="border-white/10 bg-white/[0.03]">
                    <CardContent className="space-y-4 p-5">
                      <div className="flex items-start gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="h-14 w-14 flex-shrink-0 rounded-full border border-white/15 object-cover"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <p className="text-base font-bold text-white">{trainer.name}</p>
                          <p className="text-xs text-white/55">{trainer.specialization.nl.join(" · ")}</p>
                          <p className="mt-1 text-[11px] text-white/45">
                            {trainer.instagramHandle && (
                              <>IG: <span className="text-brand">{trainer.instagramHandle}</span> · </>
                            )}
                            {trainer.languages.join("/")}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                            Intro message for {trainer.name}
                          </span>
                          <CopyButton text={introMessage} label="Copy intro" />
                        </div>
                        <pre className="whitespace-pre-wrap rounded-md bg-white/5 px-3 py-2 text-[11px] leading-relaxed text-white/80 font-sans">{introMessage}</pre>
                      </div>

                      <div>
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                          Content pack ({packIdeas.length} ideas)
                        </p>
                        <ul className="space-y-1.5 text-xs text-white/75">
                          {packIdeas.map((i) => (
                            <li key={i.id} className="flex items-baseline gap-2">
                              <span className="rounded bg-brand/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                                {i.format}
                              </span>
                              <a href={`#idea-${i.id}`} className="text-white/85 hover:text-brand transition">
                                {i.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-3">
                        <a
                          href={`${trainerWa}?text=${encodeURIComponent(introMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground transition hover:bg-brand/85"
                        >
                          Send to {trainer.name} via WhatsApp
                          <ArrowRight className="h-3 w-3" />
                        </a>
                        {trainer.instagram && trainer.instagramHandle && (
                          <a
                            href={trainer.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/15"
                          >
                            {trainer.instagramHandle}
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </FadeIn>
        )}

        {view === "strategy" && (
          <FadeIn className="mt-8 space-y-6">
            <Card className="border-brand/30 bg-brand/5">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-xl font-bold text-white">{STRATEGY_SUMMARY.headline}</h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-white/85">
                  {STRATEGY_SUMMARY.body}
                </p>
                <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Cadence</p>
                    <p className="mt-1 text-sm text-white/90">{STRATEGY_SUMMARY.cadence}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Rotation</p>
                    <p className="mt-1 text-sm text-white/90">{STRATEGY_SUMMARY.rotation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-3 sm:grid-cols-3">
              {(["demand", "supply", "broad"] as const).map((side) => {
                const ideasForSide = SOCIAL_IDEAS.filter((i) => PILLAR_TO_AUDIENCE[i.pillar] === side);
                const pct = Math.round((ideasForSide.length / SOCIAL_IDEAS.length) * 100);
                const colors = {
                  demand: "border-emerald-500/30 bg-emerald-500/5",
                  supply: "border-amber-500/30 bg-amber-500/5",
                  broad: "border-purple-500/30 bg-purple-500/5",
                };
                const labels = {
                  demand: "Demand-side (PT customers)",
                  supply: "Supply-side (studio rental)",
                  broad: "Broad (Jordaan / brand)",
                };
                return (
                  <Card key={side} className={`${colors[side]}`}>
                    <CardContent className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{labels[side]}</p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {pct}%{" "}
                        <span className="text-base font-normal text-white/60">
                          ({ideasForSide.length}/{SOCIAL_IDEAS.length})
                        </span>
                      </p>
                      <p className="mt-2 text-xs text-white/70">
                        {ideasForSide.map((i) => i.pillar).filter((p, idx, arr) => arr.indexOf(p) === idx).join(" · ")}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </FadeIn>
        )}

        {view === "calendar" && (
          <FadeIn className="mt-8 space-y-6">
            {nextSlot && now && (() => {
              const nextIdea = SOCIAL_IDEAS.find((i) => i.id === nextSlot.ideaId);
              if (!nextIdea) return null;
              const nextDate = realDateForSlot(now, nextSlot.weekNumber, nextSlot.weekday);
              const dayLabel =
                nextSlot.daysFromNow === 0
                  ? "today"
                  : nextSlot.daysFromNow === 1
                    ? "tomorrow"
                    : nextDate
                      ? formatShortDate(nextDate)
                      : `in ${nextSlot.daysFromNow} days`;
              return (
                <a
                  href={`#slot-${nextSlot.weekNumber}-${nextSlot.weekday}`}
                  className="block rounded-xl border border-brand/40 bg-brand/10 p-4 transition hover:bg-brand/15"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">
                        Up next · {dayLabel} · {nextSlot.weekdayLabel} {nextSlot.bestTime}
                      </p>
                      <p className="mt-1 text-base font-bold text-white">{nextIdea.title}</p>
                      <p className="mt-0.5 text-xs text-white/70">
                        {nextSlot.platform.toUpperCase()} · {nextIdea.format} · Week {nextSlot.weekNumber}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-brand/40 bg-brand/20 px-3 py-1.5 text-xs font-semibold text-brand-foreground sm:self-auto">
                      Jump to post ↓
                    </span>
                  </div>
                  <p className="mt-3 border-t border-brand/20 pt-2 text-[11px] text-white/60">
                    {postedKeys.size} of 16 marked posted · the banner advances when you check items off below
                  </p>
                </a>
              );
            })()}
            <p className="text-sm text-white/70">
              4-week rotation · 16 posts/month · everything you need for each post is inline below — hook, script, brief, hashtags, visuals (click to download), and a one-click "Copy everything" button per post.
            </p>
            {(() => {
              const currentRotation = now ? getRotationWeek(now) : 1;
              const orderedWeeks = [0, 1, 2, 3].map(
                (offset) => ((((currentRotation - 1 + offset) % 4) + 1) as 1 | 2 | 3 | 4),
              );
              return orderedWeeks.map((weekNum, idx) => {
              const weekSlots = POSTING_CALENDAR.filter((s) => s.weekNumber === weekNum);
              const weekFirstSlot = weekSlots[0];
              const weekDate = now && weekFirstSlot
                ? realDateForSlot(now, weekNum, weekFirstSlot.weekday)
                : null;
              const weekLabel = idx === 0 ? "This week" : idx === 1 ? "Next week" : `In ${idx} weeks`;
              return (
                <Card key={`${weekNum}-${idx}`} className="border-white/10 bg-white/[0.02]">
                  <CardContent className="p-5">
                    <div className="mb-4 flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="text-base font-bold uppercase tracking-wider text-brand">
                        {weekLabel}
                        {weekDate && (
                          <span className="ml-2 text-xs font-normal normal-case tracking-normal text-white/55">
                            week of {formatShortDate(weekDate)}
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2">
                        <CopyButton
                          label="Copy week schedule"
                          text={`📅 SculptClub social — ${weekLabel.toLowerCase()}${weekDate ? ` (${formatShortDate(weekDate)})` : ""}\n\n${weekSlots
                            .map((s) => {
                              const i = SOCIAL_IDEAS.find((x) => x.id === s.ideaId);
                              const d = now ? realDateForSlot(now, s.weekNumber, s.weekday) : null;
                              return `${s.weekdayLabel}${d ? ` ${formatShortDate(d)}` : ""} · ${s.bestTime} · ${s.platform.toUpperCase()} ${i?.format ?? ""}\n   ${i?.title ?? ""}`;
                            })
                            .join("\n\n")}\n\nFull briefs + visuals: sculptclub.nl/nl/social`}
                        />
                        <span className="text-[10px] uppercase tracking-wider text-white/40">
                          rotation {weekNum}/4
                        </span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {weekSlots.map((slot) => {
                        const idea = SOCIAL_IDEAS.find((i) => i.id === slot.ideaId);
                        if (!idea) return null;
                        const side = PILLAR_TO_AUDIENCE[idea.pillar];
                        const sideBadge = {
                          demand: { bg: "bg-emerald-500/20", text: "text-emerald-300", label: "demand" },
                          supply: { bg: "bg-amber-500/20", text: "text-amber-300", label: "supply" },
                          broad: { bg: "bg-purple-500/20", text: "text-purple-300", label: "broad" },
                        }[side];
                        const sKey = slotKey(slot.weekNumber, slot.weekday, slot.ideaId);
                        const isPosted = postedKeys.has(sKey);
                        return (
                          <div
                            key={`${weekNum}-${slot.weekday}`}
                            id={`slot-${slot.weekNumber}-${slot.weekday}`}
                            className={`rounded-xl border p-4 space-y-4 transition ${
                              isPosted
                                ? "border-emerald-500/30 bg-emerald-500/[0.04] opacity-60"
                                : "border-white/10 bg-white/[0.03]"
                            }`}
                          >
                            {/* Slot header */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                              <div className="flex flex-shrink-0 flex-col items-center justify-center rounded-lg bg-brand/15 border border-brand/30 p-3 sm:w-28">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">{slot.weekdayLabel}</p>
                                {(() => {
                                  const realDate = now ? realDateForSlot(now, slot.weekNumber, slot.weekday) : null;
                                  return realDate ? (
                                    <p className="text-[11px] font-medium text-white/75">{formatShortDate(realDate)}</p>
                                  ) : null;
                                })()}
                                <p className="text-lg font-bold text-white">{slot.bestTime}</p>
                                <p className="text-[9px] text-white/50">Amsterdam</p>
                              </div>
                              <div className="flex-1">
                                <div className="mb-2 flex justify-end">
                                  <button
                                    type="button"
                                    onClick={() => togglePosted(sKey)}
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition ${
                                      isPosted
                                        ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25"
                                        : "border-white/20 bg-white/5 text-white/70 hover:bg-white/15"
                                    }`}
                                  >
                                    {isPosted ? (
                                      <>
                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                        Posted — undo
                                      </>
                                    ) : (
                                      <>
                                        <Circle className="h-3.5 w-3.5" />
                                        Mark posted
                                      </>
                                    )}
                                  </button>
                                </div>
                                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${slot.platform === "tiktok" ? "bg-pink-500/20 text-pink-300" : "bg-purple-500/20 text-purple-300"}`}>
                                    {slot.platform}
                                  </span>
                                  <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                                    {idea.format}
                                  </span>
                                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                                    {idea.pillar.replace("-", " ")}
                                  </span>
                                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${sideBadge.bg} ${sideBadge.text}`}>
                                    {sideBadge.label}
                                  </span>
                                  {idea.duration && (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/55">
                                      <Clock className="h-3 w-3" />
                                      {idea.duration}
                                    </span>
                                  )}
                                </div>
                                <p className="text-base font-bold text-white">{idea.title}</p>
                                <p className="mt-1 text-xs italic text-white/60">{slot.rationale}</p>
                              </div>
                            </div>

                            {/* Hook */}
                            <div>
                              <div className="mb-1.5 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Hook concept</span>
                                <CopyButton text={idea.brief.hookConcept} />
                              </div>
                              <p className="rounded-md bg-white/5 px-3 py-2 text-sm italic text-white/90">{idea.brief.hookConcept}</p>
                            </div>

                            {/* Script */}
                            <div>
                              <div className="mb-1.5 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Script / shotlist</span>
                                <CopyButton text={idea.script} />
                              </div>
                              <pre className="whitespace-pre-wrap rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-white/85 font-sans">{idea.script}</pre>
                            </div>

                            {/* Brief */}
                            <div>
                              <div className="mb-1.5 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Caption brief — you write the Dutch</span>
                                <CopyButton
                                  text={`Message: ${idea.brief.message}\n\nFacts to include:\n${idea.brief.facts.map(f => `• ${f}`).join("\n")}\n\nCTA: ${idea.brief.cta}\nLength: ${idea.brief.targetLength}`}
                                  label="Copy brief"
                                />
                              </div>
                              <div className="rounded-md bg-white/5 px-3 py-3 text-xs leading-relaxed text-white/85 space-y-2">
                                <div>
                                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-1">Message</p>
                                  <p className="text-white/90">{idea.brief.message}</p>
                                </div>
                                <div>
                                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-1">Facts to include (translate + pick)</p>
                                  <ul className="space-y-0.5 text-white/80">
                                    {idea.brief.facts.map((fact, i) => (<li key={i}>• {fact}</li>))}
                                  </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                  <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">CTA</p>
                                    <p className="text-white/90 text-[11px]">{idea.brief.cta}</p>
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">Length target</p>
                                    <p className="text-white/90 text-[11px]">
                                      {idea.brief.targetLength === "short" && "Short (1-2 sentences)"}
                                      {idea.brief.targetLength === "medium" && "Medium (50-80 words)"}
                                      {idea.brief.targetLength === "long" && "Long (100-150 words)"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Hashtags */}
                            <div>
                              <div className="mb-1.5 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Hashtags</span>
                                <CopyButton text={idea.hashtags} />
                              </div>
                              <p className="rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-brand">{idea.hashtags}</p>
                            </div>

                            {/* Visual note */}
                            <div>
                              <div className="mb-1.5 flex items-center">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">📹 Visual note</span>
                              </div>
                              <p className="rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-white/75">{idea.visualNote}</p>
                            </div>

                            {/* Media downloads */}
                            {idea.media && idea.media.length > 0 && (
                              <div>
                                <div className="mb-1.5">
                                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                                    🖼️ Visuals ({idea.media.length}) — click to download
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                                  {idea.media.map((asset) => {
                                    const filename = asset.src.split("/").pop() ?? "image.jpg";
                                    return (
                                      <a
                                        key={asset.src}
                                        href={asset.src}
                                        download={filename}
                                        className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 transition hover:border-brand"
                                        title={`Download ${filename}`}
                                      >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                          src={asset.src}
                                          alt={asset.label}
                                          className="aspect-square w-full object-cover transition group-hover:scale-105"
                                          loading="lazy"
                                        />
                                        {asset.role === "primary" && (
                                          <span className="absolute left-1.5 top-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-foreground">
                                            Primary
                                          </span>
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
                                          <span className="truncate">{asset.label}</span>
                                          <Download className="h-3 w-3 flex-shrink-0" />
                                        </div>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Copy everything */}
                            <div className="border-t border-white/10 pt-3">
                              <CopyButton
                                text={`${slot.weekdayLabel} ${slot.bestTime} · ${slot.platform.toUpperCase()} · ${idea.format}\n\nHook concept: ${idea.brief.hookConcept}\n\nScript:\n${idea.script}\n\nCaption message:\n${idea.brief.message}\n\nFacts to include:\n${idea.brief.facts.map(f => `• ${f}`).join("\n")}\n\nCTA: ${idea.brief.cta}\nLength: ${idea.brief.targetLength}\n\nHashtags:\n${idea.hashtags}\n\nVisual notes:\n${idea.visualNote}`}
                                label="Copy everything for this post"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            });
            })()}
          </FadeIn>
        )}

        {view === "ideas" && (
        <>
        <FadeIn className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPlatform("all")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              platform === "all"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            Alle platforms ({SOCIAL_IDEAS.length})
          </button>
          <button
            type="button"
            onClick={() => setPlatform("tiktok")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              platform === "tiktok"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Video className="mr-1.5 inline h-3.5 w-3.5" />
            TikTok ({SOCIAL_IDEAS.filter((i) => i.platform === "tiktok").length})
          </button>
          <button
            type="button"
            onClick={() => setPlatform("instagram")}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              platform === "instagram"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <ImageIcon className="mr-1.5 inline h-3.5 w-3.5" />
            Instagram ({SOCIAL_IDEAS.filter((i) => i.platform === "instagram").length})
          </button>
        </FadeIn>

        <FadeIn className="mt-4 flex flex-wrap gap-2">
          {PILLARS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPillar(p.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                pillar === p.id
                  ? "border-white/60 bg-white/15 text-white"
                  : "border-white/15 bg-transparent text-white/65 hover:bg-white/5"
              }`}
            >
              {p.label} ({p.count})
            </button>
          ))}
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ideas.map((idea) => (
            <FadeIn key={idea.id}>
              <Card id={`idea-${idea.id}`} className="h-full border-white/10 bg-white/[0.03]">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                            idea.platform === "tiktok"
                              ? "bg-pink-500/20 text-pink-300"
                              : "bg-purple-500/20 text-purple-300"
                          }`}
                        >
                          {idea.platform}
                        </span>
                        <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                          {idea.format}
                        </span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                          {idea.pillar.replace("-", " ")}
                        </span>
                        {idea.duration && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/55">
                            <Clock className="h-3 w-3" />
                            {idea.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold leading-tight">{idea.title}</h3>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Hook concept (translate to your Dutch)
                      </span>
                      <CopyButton text={idea.brief.hookConcept} />
                    </div>
                    <p className="rounded-md bg-white/5 px-3 py-2 text-sm italic text-white/90">
                      {idea.brief.hookConcept}
                    </p>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Script / shotlist
                      </span>
                      <CopyButton text={idea.script} />
                    </div>
                    <pre className="whitespace-pre-wrap rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-white/85 font-sans">
                      {idea.script}
                    </pre>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Caption brief — you write the Dutch
                      </span>
                      <CopyButton
                        text={`Message: ${idea.brief.message}\n\nFacts to include:\n${idea.brief.facts.map(f => `• ${f}`).join("\n")}\n\nCTA: ${idea.brief.cta}\nLength: ${idea.brief.targetLength}`}
                        label="Copy brief"
                      />
                    </div>
                    <div className="rounded-md bg-white/5 px-3 py-3 text-xs leading-relaxed text-white/85 space-y-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-1">Message</p>
                        <p className="text-white/90">{idea.brief.message}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-1">Facts to include (translate + pick)</p>
                        <ul className="space-y-0.5 text-white/80">
                          {idea.brief.facts.map((fact, i) => (
                            <li key={i}>• {fact}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">CTA</p>
                          <p className="text-white/90 text-[11px]">{idea.brief.cta}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">Length target</p>
                          <p className="text-white/90 text-[11px]">
                            {idea.brief.targetLength === "short" && "Short (1-2 sentences)"}
                            {idea.brief.targetLength === "medium" && "Medium (50-80 words)"}
                            {idea.brief.targetLength === "long" && "Long (100-150 words)"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Hashtags
                      </span>
                      <CopyButton text={idea.hashtags} />
                    </div>
                    <p className="rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-brand">
                      {idea.hashtags}
                    </p>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        📹 Visual note
                      </span>
                    </div>
                    <p className="rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-white/75">
                      {idea.visualNote}
                    </p>
                  </div>

                  {idea.media && idea.media.length > 0 && (
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                          🖼️ Visuals ({idea.media.length}) — click to download
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {idea.media.map((asset) => {
                          const filename = asset.src.split("/").pop() ?? "image.jpg";
                          return (
                            <a
                              key={asset.src}
                              href={asset.src}
                              download={filename}
                              className="group relative overflow-hidden rounded-md border border-white/10 bg-white/5 transition hover:border-brand"
                              title={`Download ${filename}`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={asset.src}
                                alt={asset.label}
                                className="aspect-square w-full object-cover transition group-hover:scale-105"
                                loading="lazy"
                              />
                              {asset.role === "primary" && (
                                <span className="absolute left-1.5 top-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-foreground">
                                  Primary
                                </span>
                              )}
                              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
                                <span className="truncate">{asset.label}</span>
                                <Download className="h-3 w-3 flex-shrink-0" />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-white/10 pt-3">
                    <CopyButton
                      text={`Hook concept: ${idea.brief.hookConcept}\n\nScript:\n${idea.script}\n\nCaption message:\n${idea.brief.message}\n\nFacts to include:\n${idea.brief.facts.map(f => `• ${f}`).join("\n")}\n\nCTA: ${idea.brief.cta}\nLength: ${idea.brief.targetLength}\n\nHashtags:\n${idea.hashtags}\n\nVisual:\n${idea.visualNote}`}
                      label="Copy everything"
                    />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {ideas.length === 0 && (
          <p className="mt-12 text-center text-sm text-white/60">
            No ideas found for this filter combination. Try a different one.
          </p>
        )}
        </>
        )}

        <FadeIn className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="mb-3 text-base font-semibold">Posting checklist</h2>
          <ul className="space-y-1.5 text-sm text-white/75">
            <li>✓ Client content? Get written consent for image (especially before/after shots).</li>
            <li>✓ Tag SculptClub as @sculptclub (not @sculptjordaan).</li>
            <li>✓ Location: Egelantiersgracht 424, Amsterdam Jordaan.</li>
            <li>✓ Keep bio link current (sculptclub.nl).</li>
            <li>✓ TikTok: use trending NL audio (check weekly).</li>
            <li>✓ Instagram: post between 19:00 – 21:00 for max Amsterdam reach.</li>
            <li>✓ Plan 4 posts/week (see calendar), alternate pillars.</li>
            <li>✓ Reply to DMs within 1 hour — most clients book that way.</li>
          </ul>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

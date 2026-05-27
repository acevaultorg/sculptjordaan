"use client";

import { useState, useMemo, useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Clock, Image as ImageIcon, Video, Download, Calendar, Sparkles, CheckCircle2, Circle, Users, ArrowRight, LayoutGrid, Link as LinkIcon } from "lucide-react";
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
type View = "overview" | "ideas" | "calendar" | "strategy" | "trainers";

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

/** Icon-only variant for tight rows (Overview table). Tooltip via `title`. */
function CopyIconButton({ text, title }: { text: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* ignore */ }
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={title}
      title={title}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/40 transition hover:bg-white/10 hover:text-white"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

/**
 * buildPlatformCopy — formats a paste-ready post block per platform.
 * Operator directive 2026-05-22: "easy to copy relevant thing. For
 * tiktok: Title + description and 5 hashtags. instagram: caption
 * including 5 hashtags."
 *
 * Hashtag-slicing: takes the first 5 from idea.hashtags (typically
 * 10-12 in SOCIAL_IDEAS). Algorithm-meta on first 5 = niche-specific
 * + branded — see rules/seo-geo-mastery.md (hashtag-stuffing-dead
 * principle: 5-7 niche-specific outperforms 20+ generic in 2026).
 */
function buildPlatformCopy(idea: typeof SOCIAL_IDEAS[number], platform: "tiktok" | "instagram"): string {
  const hashtags = idea.hashtags.split(/\s+/).filter(Boolean).slice(0, 5).join(" ");
  if (platform === "tiktok") {
    // TikTok: Title (becomes overlay text + on-screen first frame) +
    // description (caption under the video) + 5 hashtags.
    return [
      idea.title,
      "",
      idea.brief.message,
      "",
      idea.brief.cta,
      "",
      hashtags,
    ].join("\n");
  }
  // Instagram: single caption block + 5 hashtags inline (or trailing).
  return [
    idea.brief.message,
    "",
    idea.brief.cta,
    "",
    hashtags,
  ].join("\n");
}

export default function SocialPage() {
  // Default landing view is "overview" — operator directive 2026-05-22:
  // "structure /social better, 1 good overview of all posts". The overview
  // shows today's post as a hero card + a flat sortable table of all 16
  // posts (real next-date) — 0 clicks to see what to post today + the next
  // 7-30 days at a glance. Previously default was "ideas" which forced an
  // extra tap to reach the calendar.
  const [view, setView] = useState<View>("overview");
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
      if (viewParam === "overview" || viewParam === "calendar" || viewParam === "strategy" || viewParam === "trainers" || viewParam === "ideas") {
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
          as="h1"
          overline="Content Studio"
          title="Social Content voor TikTok & Instagram"
          description="Briefs (English) · shotlists · hashtags · downloadable visuals. Brain provides the structure + facts. You write the Dutch in your own voice."
        />

        <FadeIn className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm text-emerald-100/90">
          <strong className="font-semibold">Why is this tool in English?</strong> Because AI-generated Dutch invents words no native would say. So this library is honest about its limits: brain delivers the <em>brief</em> (what to communicate, what facts to mention, what CTA, what length) in English. You translate to natural Dutch in your own voice. Photos, scripts, hashtags don't need translation.
        </FadeIn>

        {/* Sibling-surface cross-link — operator 2026-05-22 navigated to
            /social by mistake and didn't see this dashboard. /social is the
            static-HTML post-asset gallery; this is the planner. */}
        <FadeIn className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/55">
          <span>Looking for ready-to-post slide previews (IG carousels)?</span>
          <a
            href="/social"
            className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-semibold text-brand transition hover:bg-white/10"
          >
            📁 Open /social gallery
          </a>
        </FadeIn>

        {/* View toggle: Overview / Ideas / Calendar / Strategy / Trainers */}
        <FadeIn className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView("overview")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
              view === "overview"
                ? "border-brand bg-brand text-brand-foreground"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            Overview
          </button>
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

        {/* Overview — operator-facing dashboard. One scannable surface
            showing TODAY's post (hero card) + a flat table of all 16
            posts sorted by next-occurrence date. Each row is a 1-tap
            deep-link to the calendar view scrolled to that exact slot,
            plus a "Copy share link" affordance so operator can save
            individual slot URLs to phone shortcuts.

            Operator directive 2026-05-22: "structure /social better,
            1 good overview of all posts". Previously the calendar view
            grouped posts into 4-week rotation buckets requiring scroll
            to find specific slots; ?view=calendar#slot-1-3 deep-links
            were technically reachable but operationally hidden. */}
        {view === "overview" && now && (() => {
          // Build flat sorted list of all 16 slots with real next-date
          type EnrichedSlot = (typeof POSTING_CALENDAR)[number] & {
            realDate: Date | null;
            daysFromNow: number | null;
            idea: typeof SOCIAL_IDEAS[number] | undefined;
            sKey: string;
            isPosted: boolean;
          };
          const enriched: EnrichedSlot[] = POSTING_CALENDAR.map((s) => {
            const realDate = realDateForSlot(now, s.weekNumber, s.weekday);
            const daysFromNow = realDate
              ? Math.round((realDate.setHours(0, 0, 0, 0) - new Date(now).setHours(0, 0, 0, 0)) / 86400000)
              : null;
            const idea = SOCIAL_IDEAS.find((i) => i.id === s.ideaId);
            const sKey = slotKey(s.weekNumber, s.weekday, s.ideaId);
            return { ...s, realDate: realDate ? new Date(realDate.setHours(0, 0, 0, 0)) : null, daysFromNow, idea, sKey, isPosted: postedKeys.has(sKey) };
          });
          enriched.sort((a, b) => (a.daysFromNow ?? 999) - (b.daysFromNow ?? 999));
          const todaySlot = enriched.find((s) => s.daysFromNow === 0 && !s.isPosted) ?? enriched[0];

          const goToSlot = (s: EnrichedSlot) => {
            setView("calendar");
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const el = document.getElementById(`slot-${s.weekNumber}-${s.weekday}`);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              });
            });
          };

          const copyShareLink = async (s: EnrichedSlot) => {
            const url = `https://sculptclub.nl/nl/social?view=calendar#slot-${s.weekNumber}-${s.weekday}`;
            try {
              await navigator.clipboard.writeText(url);
            } catch { /* ignore */ }
          };

          const sideColor = (pillar: Pillar | undefined) => {
            if (!pillar) return "";
            const side = PILLAR_TO_AUDIENCE[pillar];
            return side === "demand" ? "text-emerald-300" : side === "supply" ? "text-amber-300" : "text-purple-300";
          };

          return (
            <FadeIn className="mt-8 space-y-6">
              {/* TODAY hero — biggest visual hit */}
              {todaySlot?.idea && (
                <Card className="border-brand/40 bg-brand/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand">
                          {todaySlot.daysFromNow === 0 ? "Today · post now" : todaySlot.daysFromNow === 1 ? "Tomorrow" : todaySlot.realDate ? `In ${todaySlot.daysFromNow}d · ${MONTH_NL[todaySlot.realDate.getMonth()]} ${todaySlot.realDate.getDate()}` : "Up next"}
                          {" · "}{todaySlot.weekdayLabel} {todaySlot.bestTime} · {todaySlot.platform.toUpperCase()} {todaySlot.idea.format}
                        </p>
                        <h2 className="mt-1 text-xl font-bold text-white">{todaySlot.idea.title}</h2>
                        <p className="mt-1 text-sm italic text-white/65">{todaySlot.rationale}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToSlot(todaySlot)}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:bg-brand/90"
                      >
                        Open full brief
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="rounded-lg bg-black/30 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/55">Hook concept</p>
                      <p className="mt-1 text-sm text-white/90 italic">{todaySlot.idea.brief.hookConcept}</p>
                    </div>
                    {/* Big copy button on the hero — operator's main "act now"
                        affordance. Copies platform-tailored block:
                          tiktok    = title + description + 5 hashtags
                          instagram = caption + 5 hashtags                  */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <CopyButton
                        text={buildPlatformCopy(todaySlot.idea, todaySlot.platform)}
                        label={todaySlot.platform === "tiktok" ? "Copy title + description + #" : "Copy caption + #"}
                      />
                      <span className="text-[11px] text-white/45">
                        {todaySlot.platform === "tiktok"
                          ? "Title + description + 5 hashtags → ready to paste into TikTok"
                          : "Caption + 5 hashtags → ready to paste into Instagram"}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                      <span className="rounded-full bg-white/10 px-2 py-0.5 font-semibold">{todaySlot.idea.pillar.replace("-", " ")}</span>
                      <span className={`font-semibold ${sideColor(todaySlot.idea.pillar)}`}>
                        {PILLAR_TO_AUDIENCE[todaySlot.idea.pillar]}
                      </span>
                      {todaySlot.idea.duration && (<span><Clock className="inline h-3 w-3" /> {todaySlot.idea.duration}</span>)}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All-posts table */}
              <Card>
                <CardContent className="p-0">
                  <div className="border-b border-white/10 px-5 py-4">
                    <h3 className="text-base font-bold text-white">All posts ({enriched.length})</h3>
                    <p className="mt-1 text-xs text-white/55">
                      Sorted by next occurrence · {postedKeys.size} of {enriched.length} marked posted ·
                      tap any row to open the full brief in the Calendar view
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[10px] font-semibold uppercase tracking-wider text-white/55">
                          <th className="px-4 py-2.5">When</th>
                          <th className="px-2 py-2.5">Platform</th>
                          <th className="px-2 py-2.5">Pillar</th>
                          <th className="px-2 py-2.5">Title</th>
                          <th className="px-2 py-2.5 text-center">Status</th>
                          <th className="px-2 py-2.5 text-right">Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enriched.map((s) => {
                          if (!s.idea) return null;
                          const dayLabel =
                            s.daysFromNow === 0 ? "Today" :
                            s.daysFromNow === 1 ? "Tomorrow" :
                            s.realDate ? `${MONTH_NL[s.realDate.getMonth()]} ${s.realDate.getDate()}` : "—";
                          return (
                            <tr
                              key={s.sKey}
                              className={`border-b border-white/5 transition hover:bg-white/[0.04] ${s.isPosted ? "opacity-50" : ""}`}
                            >
                              <td className="px-4 py-3 align-top">
                                <button
                                  type="button"
                                  onClick={() => goToSlot(s)}
                                  className="text-left"
                                >
                                  <p className="text-xs font-semibold text-white">{dayLabel}</p>
                                  <p className="text-[11px] text-white/50">{s.weekdayLabel} {s.bestTime}</p>
                                </button>
                              </td>
                              <td className="px-2 py-3 align-top">
                                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${s.platform === "tiktok" ? "bg-pink-500/20 text-pink-300" : "bg-purple-500/20 text-purple-300"}`}>
                                  {s.platform}
                                </span>
                              </td>
                              <td className="px-2 py-3 align-top">
                                <span className={`text-[11px] font-semibold uppercase tracking-wider ${sideColor(s.idea.pillar)}`}>
                                  {s.idea.pillar.replace("-", " ")}
                                </span>
                              </td>
                              <td className="px-2 py-3 align-top">
                                <button type="button" onClick={() => goToSlot(s)} className="text-left text-sm text-white/90 hover:text-brand">
                                  {s.idea.title}
                                </button>
                              </td>
                              <td className="px-2 py-3 text-center align-top">
                                <button
                                  type="button"
                                  onClick={() => togglePosted(s.sKey)}
                                  aria-label={s.isPosted ? "Mark not posted" : "Mark posted"}
                                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition ${s.isPosted ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"}`}
                                >
                                  {s.isPosted ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
                                </button>
                              </td>
                              <td className="px-2 py-3 text-right align-top">
                                <div className="flex items-center justify-end gap-1">
                                  {/* Copy platform-tailored post block (title+desc+# for TikTok,
                                      caption+# for Instagram) — operator 2026-05-22 */}
                                  <CopyIconButton
                                    text={buildPlatformCopy(s.idea, s.platform)}
                                    title={s.platform === "tiktok"
                                      ? "Copy title + description + 5 hashtags"
                                      : "Copy caption + 5 hashtags"}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => copyShareLink(s)}
                                    aria-label="Copy share link"
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/40 transition hover:bg-white/10 hover:text-white"
                                    title={`Copy share link to clipboard`}
                                  >
                                    <LinkIcon className="h-3.5 w-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => goToSlot(s)}
                                    aria-label="Open full brief"
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/60 transition hover:bg-white/10 hover:text-brand"
                                  >
                                    <ArrowRight className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Unscheduled ideas pool — operator 2026-05-22: "i think a lot
                  of posts you made are missing on /social". The data set has
                  52 SOCIAL_IDEAS but POSTING_CALENDAR only schedules 16. The
                  other 36 (trainer-spotlights for newer trainers, ads,
                  before/after, AEO posts, pricetag variants, alt tour/local
                  posts) are now surfaced here as an "evergreen pool" —
                  postable any time, not tied to a specific calendar slot. */}
              {(() => {
                const scheduledIds = new Set(POSTING_CALENDAR.map((s) => s.ideaId));
                const unscheduledIdeas = SOCIAL_IDEAS.filter((i) => !scheduledIds.has(i.id))
                  .sort((a, b) => {
                    // Ads at the bottom (different posting flow — paid not organic)
                    if (a.pillar === "paid-ad" && b.pillar !== "paid-ad") return 1;
                    if (b.pillar === "paid-ad" && a.pillar !== "paid-ad") return -1;
                    return a.id.localeCompare(b.id);
                  });
                if (unscheduledIdeas.length === 0) return null;

                const goToIdea = (ideaId: string) => {
                  setView("ideas");
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      const el = document.getElementById(`idea-${ideaId}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  });
                };

                const copyShareLinkIdea = async (ideaId: string) => {
                  try {
                    await navigator.clipboard.writeText(`https://sculptclub.nl/nl/social?view=ideas#idea-${ideaId}`);
                  } catch { /* ignore */ }
                };

                const sideColorPillar = (pillar: Pillar) => {
                  const side = PILLAR_TO_AUDIENCE[pillar];
                  return side === "demand" ? "text-emerald-300" : side === "supply" ? "text-amber-300" : "text-purple-300";
                };

                const adCount = unscheduledIdeas.filter((i) => i.pillar === "paid-ad").length;
                const organicCount = unscheduledIdeas.length - adCount;

                return (
                  <Card>
                    <CardContent className="p-0">
                      <div className="border-b border-white/10 px-5 py-4">
                        <h3 className="text-base font-bold text-white">Evergreen pool ({unscheduledIdeas.length})</h3>
                        <p className="mt-1 text-xs text-white/55">
                          Posts that exist but aren&apos;t on the 4-week rotation. Post any time — no fixed date.
                          {organicCount > 0 && ` ${organicCount} organic`}
                          {adCount > 0 && ` · ${adCount} paid ad${adCount === 1 ? "" : "s"} (separate posting flow via Meta Ads)`}
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[10px] font-semibold uppercase tracking-wider text-white/55">
                              <th className="px-4 py-2.5">Type</th>
                              <th className="px-2 py-2.5">Platform</th>
                              <th className="px-2 py-2.5">Pillar</th>
                              <th className="px-2 py-2.5">Title</th>
                              <th className="px-2 py-2.5 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {unscheduledIdeas.map((idea) => (
                              <tr key={idea.id} className="border-b border-white/5 transition hover:bg-white/[0.04]">
                                <td className="px-4 py-3 align-top">
                                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${idea.pillar === "paid-ad" ? "bg-orange-500/20 text-orange-300" : "bg-white/10 text-white/70"}`}>
                                    {idea.pillar === "paid-ad" ? "Ad" : "Evergreen"}
                                  </span>
                                </td>
                                <td className="px-2 py-3 align-top">
                                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${idea.platform === "tiktok" ? "bg-pink-500/20 text-pink-300" : "bg-purple-500/20 text-purple-300"}`}>
                                    {idea.platform}
                                  </span>
                                </td>
                                <td className="px-2 py-3 align-top">
                                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${sideColorPillar(idea.pillar)}`}>
                                    {idea.pillar.replace("-", " ")}
                                  </span>
                                </td>
                                <td className="px-2 py-3 align-top">
                                  <button type="button" onClick={() => goToIdea(idea.id)} className="text-left text-sm text-white/90 hover:text-brand">
                                    {idea.title}
                                  </button>
                                </td>
                                <td className="px-2 py-3 text-right align-top">
                                  <div className="flex items-center justify-end gap-1">
                                    <CopyIconButton
                                      text={buildPlatformCopy(idea, idea.platform)}
                                      title={idea.platform === "tiktok" ? "Copy title + description + 5 hashtags" : "Copy caption + 5 hashtags"}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => copyShareLinkIdea(idea.id)}
                                      aria-label="Copy share link"
                                      title="Copy share link to clipboard"
                                      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/40 transition hover:bg-white/10 hover:text-white"
                                    >
                                      <LinkIcon className="h-3.5 w-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => goToIdea(idea.id)}
                                      aria-label="Open full brief"
                                      className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white/60 transition hover:bg-white/10 hover:text-brand"
                                    >
                                      <ArrowRight className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                );
              })()}

              <p className="text-center text-xs text-white/45">
                Tip: bookmark <code className="rounded bg-white/10 px-1.5 py-0.5">sculptclub.nl/nl/social</code> as a home-screen
                shortcut on your phone — overview opens by default with today&apos;s post highlighted.
              </p>
            </FadeIn>
          );
        })()}

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
              16 posts sorted by upcoming date. Each card below has the full brief — hook, script, caption brief, hashtags, downloadable visuals + one-tap copy buttons. Operator 2026-05-22: "date based calendar, so for example, 22 may" — week-rotation grouping replaced with flat date-sorted layout.
            </p>
            {(() => {
              // Same enriched-sorted pattern as Overview view — flat list,
              // ascending by next-occurrence real date. Replaces the previous
              // 4-week-Card grouping (operator-confusing for date-driven
              // workflow).
              type EnrichedSlot = (typeof POSTING_CALENDAR)[number] & {
                realDate: Date | null;
                daysFromNow: number | null;
                idea: typeof SOCIAL_IDEAS[number] | undefined;
                sKey: string;
                isPosted: boolean;
              };
              const enriched: EnrichedSlot[] = POSTING_CALENDAR.map((s) => {
                const realDate = now ? realDateForSlot(now, s.weekNumber, s.weekday) : null;
                const daysFromNow = realDate && now
                  ? Math.round((new Date(realDate).setHours(0, 0, 0, 0) - new Date(now).setHours(0, 0, 0, 0)) / 86400000)
                  : null;
                const idea = SOCIAL_IDEAS.find((i) => i.id === s.ideaId);
                const sKey = slotKey(s.weekNumber, s.weekday, s.ideaId);
                return { ...s, realDate, daysFromNow, idea, sKey, isPosted: postedKeys.has(sKey) };
              });
              enriched.sort((a, b) => (a.daysFromNow ?? 999) - (b.daysFromNow ?? 999));

              return enriched.map((slot) => {
                const idea = slot.idea;
                if (!idea) return null;
                const side = PILLAR_TO_AUDIENCE[idea.pillar];
                const sideBadge = {
                  demand: { bg: "bg-emerald-500/20", text: "text-emerald-300", label: "demand" },
                  supply: { bg: "bg-amber-500/20", text: "text-amber-300", label: "supply" },
                  broad: { bg: "bg-purple-500/20", text: "text-purple-300", label: "broad" },
                }[side];
                const sKey = slot.sKey;
                const isPosted = slot.isPosted;
                const realDate = slot.realDate;
                const dayBig = realDate ? realDate.getDate() : "?";
                const monthShort = realDate ? MONTH_NL[realDate.getMonth()] : "—";
                const tagDateLabel =
                  slot.daysFromNow === 0
                    ? "Today"
                    : slot.daysFromNow === 1
                      ? "Tomorrow"
                      : slot.daysFromNow !== null && slot.daysFromNow >= 0
                        ? `+${slot.daysFromNow}d`
                        : "";
                return (
                  <div
                    key={slot.sKey}
                    id={`slot-${slot.weekNumber}-${slot.weekday}`}
                    className={`rounded-xl border p-4 space-y-4 transition ${
                      isPosted
                        ? "border-emerald-500/30 bg-emerald-500/[0.04] opacity-60"
                        : slot.daysFromNow === 0 && !isPosted
                          ? "border-brand/40 bg-brand/[0.06]"
                          : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    {/* Slot header — date is now the dominant visual */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                      <div className="flex flex-shrink-0 flex-col items-center justify-center rounded-lg bg-brand/15 border border-brand/30 px-3 py-3 sm:w-28">
                        <p className="text-3xl font-bold text-white leading-none">{dayBig}</p>
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand">{monthShort}</p>
                        <p className="mt-1.5 text-[10px] text-white/60">{slot.weekdayLabel}</p>
                        <p className="mt-1 text-sm font-bold text-white">{slot.bestTime}</p>
                        {tagDateLabel && (
                          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-brand/85">{tagDateLabel}</p>
                        )}
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
                    <div className="border-t border-white/10 pt-3 flex flex-wrap gap-2">
                      <CopyButton
                        text={buildPlatformCopy(idea, slot.platform)}
                        label={slot.platform === "tiktok" ? "Copy title + description + #" : "Copy caption + #"}
                      />
                      <CopyButton
                        text={`${slot.weekdayLabel} ${slot.bestTime} · ${slot.platform.toUpperCase()} · ${idea.format}\n\nHook concept: ${idea.brief.hookConcept}\n\nScript:\n${idea.script}\n\nCaption message:\n${idea.brief.message}\n\nFacts to include:\n${idea.brief.facts.map(f => `• ${f}`).join("\n")}\n\nCTA: ${idea.brief.cta}\nLength: ${idea.brief.targetLength}\n\nHashtags:\n${idea.hashtags}\n\nVisual notes:\n${idea.visualNote}`}
                        label="Copy everything"
                      />
                    </div>
                  </div>
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

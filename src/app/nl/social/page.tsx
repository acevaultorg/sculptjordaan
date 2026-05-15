"use client";

import { useState, useMemo } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Clock, Image as ImageIcon, Video, Download, Calendar, Sparkles } from "lucide-react";
import {
  SOCIAL_IDEAS,
  PILLARS,
  POSTING_CALENDAR,
  STRATEGY_SUMMARY,
  PILLAR_TO_AUDIENCE,
  type Platform,
  type Pillar,
} from "@/data/social-content";

type Filter = "all" | Pillar;
type View = "ideas" | "calendar" | "strategy";

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
                ? "border-brand bg-brand text-white"
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
                ? "border-brand bg-brand text-white"
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
                ? "border-brand bg-brand text-white"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Strategy
          </button>
        </FadeIn>

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
                  supply: "border-blue-500/30 bg-blue-500/5",
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
          <FadeIn className="mt-8 space-y-4">
            <p className="text-sm text-white/70">
              4-weken rotatieschema · 16 posts per maand · 4 per week op vaste tijden.
              Click a post to jump to the idea.
            </p>
            {[1, 2, 3, 4].map((weekNum) => {
              const weekSlots = POSTING_CALENDAR.filter((s) => s.weekNumber === weekNum);
              return (
                <Card key={weekNum} className="border-white/10 bg-white/[0.02]">
                  <CardContent className="p-5">
                    <h3 className="mb-3 text-base font-bold uppercase tracking-wider text-brand">Week {weekNum}</h3>
                    <div className="space-y-3">
                      {weekSlots.map((slot) => {
                        const idea = SOCIAL_IDEAS.find((i) => i.id === slot.ideaId);
                        if (!idea) return null;
                        const side = PILLAR_TO_AUDIENCE[idea.pillar];
                        const sideBadge = {
                          demand: { bg: "bg-emerald-500/20", text: "text-emerald-300", label: "demand" },
                          supply: { bg: "bg-blue-500/20", text: "text-blue-300", label: "supply" },
                          broad: { bg: "bg-purple-500/20", text: "text-purple-300", label: "broad" },
                        }[side];
                        return (
                          <div key={`${weekNum}-${slot.weekday}`} className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-3 sm:flex-row sm:items-center">
                            <div className="flex flex-shrink-0 flex-col items-center justify-center rounded bg-white/5 p-2 sm:w-24">
                              <p className="text-xs font-semibold text-white/60">{slot.weekdayLabel}</p>
                              <p className="text-base font-bold text-white">{slot.bestTime}</p>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 flex flex-wrap items-center gap-2">
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                    slot.platform === "tiktok"
                                      ? "bg-pink-500/20 text-pink-300"
                                      : "bg-purple-500/20 text-purple-300"
                                  }`}
                                >
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
                              </div>
                              <p className="text-sm font-semibold text-white">{idea.title}</p>
                              <p className="mt-1 text-xs text-white/65">{slot.rationale}</p>
                              <button
                                type="button"
                                onClick={() => {
                                  setView("ideas");
                                  setPlatform("all");
                                  setPillar("all");
                                  setTimeout(() => {
                                    const el = document.getElementById(`idea-${idea.id}`);
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                                  }, 100);
                                }}
                                className="mt-2 text-xs font-medium text-brand hover:underline"
                              >
                                → View idea + visuals
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
                ? "border-brand bg-brand text-white"
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
                ? "border-brand bg-brand text-white"
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
                ? "border-brand bg-brand text-white"
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
                                <span className="absolute left-1.5 top-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
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

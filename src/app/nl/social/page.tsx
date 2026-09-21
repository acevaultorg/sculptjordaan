"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import {
  SOCIAL_PACKS,
  AUDIENCE_BIO_LINK,
  type SocialPack,
  type StudioAudience,
} from "@/data/social-packs";
import {
  SOCIAL_IDEAS,
  PILLAR_TO_AUDIENCE,
  type AudienceSide,
} from "@/data/social-content";
import { saveSlidesToPhotos, saveOneSlide, copyText, type SlideFile } from "@/lib/social-studio";
import { PostComposer } from "@/components/social/post-composer";
import {
  Copy,
  Check,
  Download,
  ChevronDown,
  Search,
  ArrowRight,
  RotateCcw,
  Image as ImageIcon,
  ListChecks,
  Film,
  Music2,
  ExternalLink,
} from "lucide-react";

type Platform = "tiktok" | "instagram";
type AudienceFilter = "all" | StudioAudience;

const POSTED_KEY = "sculptclub-studio-posted-v1";
const PLATFORM_KEY = "sculptclub-studio-platform-v1";

const AUDIENCE_LABEL: Record<StudioAudience, string> = { client: "Klanten", trainer: "Trainers" };
const PLATFORM_LABEL: Record<Platform, string> = { tiktok: "TikTok", instagram: "Instagram" };

// public asset path + a friendly download filename per slide
const slideUrl = (packId: string, p: Platform, name: string) => `/social/${packId}/${p}-${name}.png`;
const slideFilename = (packId: string, p: Platform, label: string) =>
  `sculptclub-${packId}-${p}-slide-${label}.png`;

function audienceOf(side: AudienceSide): StudioAudience | "broad" {
  return side === "demand" ? "client" : side === "supply" ? "trainer" : "broad";
}

/* ── Button that runs an async action and flashes a short result ─────────── */
function FlashBtn({
  run,
  className = "",
  success = "✓ Gekopieerd",
  fail = "Niet gelukt",
  children,
}: {
  run: () => Promise<boolean | string | void>;
  className?: string;
  success?: string;
  fail?: string;
  children: React.ReactNode;
}) {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function onClick() {
    let result: string | null = null;
    try {
      const r = await run();
      if (r === undefined || r === true) result = success;
      else if (r === false) result = fail;
      else if (typeof r === "string") result = r === "" ? null : r;
    } catch {
      result = fail;
    }
    if (result) {
      setMsg(result);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMsg(null), 2200);
    }
  }
  return (
    <button type="button" onClick={onClick} className={className} aria-live="polite">
      {msg ?? children}
    </button>
  );
}

/* ── Segmented platform toggle ───────────────────────────────────────────── */
function PlatformToggle({ value, onChange }: { value: Platform; onChange: (p: Platform) => void }) {
  return (
    <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-muted border border-border" role="tablist" aria-label="Platform">
      {(["tiktok", "instagram"] as Platform[]).map((p) => {
        const active = value === p;
        return (
          <button
            key={p}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(p)}
            className={`rounded-xl py-2.5 text-sm font-bold transition-colors ${
              active ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {PLATFORM_LABEL[p]}
            <span className="block text-[0.65rem] font-medium opacity-80 mt-0.5">
              {p === "tiktok" ? "Video / 9:16" : "Carrousel / 1:1"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── One pack (accordion) ────────────────────────────────────────────────── */
function PackCard({
  pack,
  index,
  open,
  onToggle,
  platform,
  onPlatform,
  posted,
  onPosted,
}: {
  pack: SocialPack;
  index: number;
  open: boolean;
  onToggle: () => void;
  platform: Platform;
  onPlatform: (p: Platform) => void;
  posted: boolean;
  onPosted: (v: boolean) => void;
}) {
  const tt = platform === "tiktok";
  const vid = pack.video;
  const slideFiles: SlideFile[] = pack.slides.map((s) => ({
    url: slideUrl(pack.id, platform, s.name),
    filename: slideFilename(pack.id, platform, s.label),
  }));
  const captionText = tt
    ? `${pack.tiktok.description}\n\n${pack.tiktok.hashtags}`
    : `${pack.instagram.caption}\n\n${pack.instagram.hashtags}`;

  const steps = vid
    ? tt
      ? [
          "Bewaar de video in Foto's (knop hierboven).",
          "Open TikTok \u2192 \uff0b \u2192 upload de video uit Foto's.",
          "Voeg een trending sound toe, de clip zelf is stil (algoritme-signaal).",
          "Tag @almeidalexjr als collab: het is Alex' eigen clip.",
          "Kopieer titel + description en plak ze.",
          "Post \u2192 plak + pin de eerste reactie met de link \u2192 vink af.",
        ]
      : [
          "Bewaar de video in Foto's (knop hierboven).",
          "Open Instagram \u2192 \uff0b \u2192 Reel \u2192 kies de video.",
          "Voeg een sound toe, de clip zelf is stil.",
          "Tag @almeidalexjr als collab: het is Alex' eigen clip.",
          "Kopieer de caption + hashtags en plak.",
          "Post \u2192 vink af.",
        ]
    : tt
    ? [
        "Bewaar alle slides in Foto's (knop hierboven).",
        "Open TikTok → ＋ → Foto → voeg de slides toe op volgorde.",
        "Voeg een trending sound toe (algoritme-signaal).",
        "Kopieer titel + description en plak ze.",
        "Post → plak + pin de eerste reactie met de link → vink af.",
      ]
    : [
        "Bewaar alle slides in Foto's (knop hierboven).",
        "Open Instagram → ＋ → Post → selecteer de slides op volgorde.",
        "Kopieer de caption + hashtags en plak.",
        "Zet de bio-link op de juiste pagina (link in bio).",
        "Tip: post de TikTok 9:16-versie óók als Reel voor extra bereik.",
        "Post → vink af.",
      ];

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      {/* header */}
      <div className="flex items-center gap-3 px-4 py-3.5 min-h-[56px]">
        <label className="relative inline-flex w-6 h-6 shrink-0" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={posted}
            onChange={(e) => onPosted(e.target.checked)}
            className="peer absolute inset-0 opacity-0 cursor-pointer"
            aria-label={`Markeer ${pack.title} als gepost`}
          />
          <span className="absolute inset-0 rounded-lg border-2 border-border bg-background peer-checked:bg-brand peer-checked:border-brand grid place-items-center text-brand-foreground text-[0.8rem] font-extrabold">
            {posted ? "✓" : ""}
          </span>
        </label>
        <button type="button" onClick={onToggle} className="flex-1 flex items-center gap-3 text-left min-w-0">
          <span className="min-w-[1.4rem] text-muted-foreground tabular-nums text-sm">{index + 1}</span>
          <span className="flex-1 min-w-0">
            <span className={`block font-bold text-[0.97rem] leading-snug ${posted ? "line-through opacity-50" : ""}`}>
              {pack.title}
            </span>
          </span>
          <span
            className={`shrink-0 text-[0.7rem] font-bold px-2 py-0.5 rounded-full ${
              pack.audience === "client"
                ? "bg-brand/15 text-brand-dark dark:text-brand"
                : "bg-foreground/10 text-foreground"
            }`}
          >
            {AUDIENCE_LABEL[pack.audience]}
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* body */}
      {open && (
        <div className="px-4 pb-5 border-t border-border">
          <p className="mt-3 text-[0.85rem] text-muted-foreground leading-relaxed">{pack.blurb}</p>

          <div className="mt-3">
            <PlatformToggle value={platform} onChange={onPlatform} />
          </div>

          {vid ? (
            <>
              {/* finished video post \u2014 one 9:16 file serves TikTok + IG Reel */}
              <h4 className="mt-5 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" /> Video ({vid.durationLabel})
              </h4>
              <FlashBtn
                run={async () => {
                  const r = await saveOneSlide({ url: vid.src, filename: `${pack.id}.mp4` });
                  return r === "aborted" ? "" : r === "manual" ? "Long-press de video \u2193" : "\u2713 Bewaard in Foto's";
                }}
                success="\u2713 Bewaard in Foto's"
                className="mt-2.5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground font-bold text-[0.95rem] py-3.5 active:scale-[0.99] transition-transform"
              >
                <Download className="w-4 h-4" /> Bewaar video in Foto&apos;s
              </FlashBtn>
              <div className="mt-3 w-[132px]">
                <div className="rounded-lg overflow-hidden border border-border bg-muted aspect-[9/16]">
                  <video
                    src={vid.src}
                    poster={vid.poster}
                    controls
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
            {/* slides */}
            <h4 className="mt-5 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" /> Slides ({pack.slides.length})
            </h4>
            <FlashBtn
              run={async () => {
                const r = await saveSlidesToPhotos(slideFiles);
                return r === "aborted" ? "" : r === "manual" ? "Long-press de slides ↓" : "✓ Bewaard in Foto's";
              }}
              success="✓ Bewaard in Foto's"
              className="mt-2.5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground font-bold text-[0.95rem] py-3.5 active:scale-[0.99] transition-transform"
            >
              <Download className="w-4 h-4" /> Bewaar alle slides in Foto&apos;s
            </FlashBtn>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {pack.slides.map((s, i) => (
                <div key={s.name} className="shrink-0 w-[88px]">
                  <div className={`rounded-lg overflow-hidden border border-border bg-muted ${tt ? "aspect-[9/16]" : "aspect-square"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slideUrl(pack.id, platform, s.name)}
                      alt={`Slide ${s.label}, ${s.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <FlashBtn
                    run={async () => {
                      const r = await saveOneSlide(slideFiles[i]);
                      return r === "aborted" ? "" : "✓";
                    }}
                    success="✓"
                    className="mt-1 w-full text-[0.7rem] font-semibold text-muted-foreground hover:text-foreground py-1 rounded-md"
                  >
                    Slide {s.label}
                  </FlashBtn>
                </div>
              ))}
            </div>
            </>
          )}

          {/* copy */}
          <h4 className="mt-6 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
            <Copy className="w-3.5 h-3.5" /> {tt ? "Titel + description" : "Caption"}
          </h4>
          {tt && (
            <>
              <pre className="mt-2 text-[0.85rem] whitespace-pre-wrap font-sans bg-muted border border-border rounded-xl p-3 leading-relaxed">
                {pack.tiktok.title}
              </pre>
              <FlashBtn
                run={() => copyText(pack.tiktok.title)}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-foreground bg-foreground rounded-xl px-4 py-2.5 active:opacity-85"
              >
                <Copy className="w-3.5 h-3.5" /> Kopieer titel
              </FlashBtn>
            </>
          )}
          <pre className="mt-2 text-[0.85rem] whitespace-pre-wrap font-sans bg-muted border border-border rounded-xl p-3 leading-relaxed">
            {captionText}
          </pre>
          <div className="mt-2 flex flex-wrap gap-2">
            <FlashBtn
              run={() => copyText(captionText)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-foreground bg-foreground rounded-xl px-4 py-2.5 active:opacity-85"
            >
              <Copy className="w-3.5 h-3.5" /> {tt ? "Kopieer description + hashtags" : "Kopieer caption + hashtags"}
            </FlashBtn>
            {tt && (
              <FlashBtn
                run={() => copyText(`${pack.tiktok.title}\n\n${captionText}`)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand bg-brand/10 rounded-xl px-4 py-2.5 active:opacity-85"
              >
                Kopieer alles
              </FlashBtn>
            )}
          </div>

          {/* steps */}
          <h4 className="mt-6 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
            <ListChecks className="w-3.5 h-3.5" /> Stappen, {PLATFORM_LABEL[platform]}
          </h4>
          <ol className="mt-2 space-y-2">
            {steps.map((st, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed">
                <span className="mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full bg-brand/15 text-brand text-[0.7rem] font-extrabold">
                  {i + 1}
                </span>
                <span>{st}</span>
              </li>
            ))}
          </ol>

          <p className="mt-4 text-[0.78rem] text-muted-foreground">
            CTA-pagina: <span className="text-foreground font-medium">{pack.ctaUrl}</span>
          </p>

          <button
            type="button"
            onClick={() => onPosted(!posted)}
            className={`mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 font-bold text-[0.92rem] transition-colors ${
              posted ? "bg-muted text-muted-foreground" : "bg-foreground text-brand-foreground active:opacity-85"
            }`}
          >
            <Check className="w-4 h-4" /> {posted ? "Gepost, tik om terug te zetten" : "Markeer als gepost"}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function SocialPostingStudio() {
  const [mounted, setMounted] = useState(false);
  const [posted, setPosted] = useState<Record<string, boolean>>({});
  const [platform, setPlatform] = useState<Record<string, Platform>>({});
  const [openId, setOpenId] = useState<string | null>(null);
  const [audience, setAudience] = useState<AudienceFilter>("all");
  const [query, setQuery] = useState("");
  const [hidePosted, setHidePosted] = useState(false);

  // hydrate from localStorage after mount
  useEffect(() => {
    setMounted(true);
    try {
      const p = localStorage.getItem(POSTED_KEY);
      if (p) setPosted(JSON.parse(p));
      const pl = localStorage.getItem(PLATFORM_KEY);
      if (pl) setPlatform(JSON.parse(pl));
    } catch { /* ignore */ }
  }, []);
  useEffect(() => {
    if (mounted) try { localStorage.setItem(POSTED_KEY, JSON.stringify(posted)); } catch { /* ignore */ }
  }, [posted, mounted]);
  useEffect(() => {
    if (mounted) try { localStorage.setItem(PLATFORM_KEY, JSON.stringify(platform)); } catch { /* ignore */ }
  }, [platform, mounted]);

  const platformOf = useCallback((id: string): Platform => platform[id] ?? "tiktok", [platform]);
  const setPlatformOf = (id: string, p: Platform) => setPlatform((s) => ({ ...s, [id]: p }));
  const setPostedOf = (id: string, v: boolean) => setPosted((s) => ({ ...s, [id]: v }));

  const q = query.trim().toLowerCase();
  const visiblePacks = useMemo(
    () =>
      SOCIAL_PACKS.filter((p) => {
        if (audience !== "all" && p.audience !== audience) return false;
        if (hidePosted && posted[p.id]) return false;
        if (q && !`${p.title} ${p.blurb} ${p.id}`.toLowerCase().includes(q)) return false;
        return true;
      }),
    [audience, hidePosted, posted, q]
  );

  const total = SOCIAL_PACKS.length;
  const doneCount = SOCIAL_PACKS.filter((p) => posted[p.id]).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const nextPack = SOCIAL_PACKS.find((p) => !posted[p.id]);

  function openAndScroll(id: string) {
    setOpenId(id);
    requestAnimationFrame(() => {
      document.getElementById(`pack-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const ideas = useMemo(
    () =>
      SOCIAL_IDEAS.filter((idea) => {
        const a = audienceOf(PILLAR_TO_AUDIENCE[idea.pillar]);
        if (audience !== "all" && a !== "broad" && a !== audience) return false;
        if (q && !`${idea.title} ${idea.pillar}`.toLowerCase().includes(q)) return false;
        return true;
      }),
    [audience, q]
  );

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-24">
        {/* header */}
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-brand-foreground text-lg">📌</span>
          Posting Studio
        </h1>
        <p className="mt-2 text-[0.92rem] text-muted-foreground leading-relaxed">
          Genereer een nieuwe post in jouw stijl, of pak een kant-en-klaar pack. Onbeperkt materiaal voor TikTok &amp;
          Instagram.
        </p>

        {/* generate mode — endless brand-safe drafts (no LLM, verified facts only) */}
        <div className="mt-5">
          <PostComposer />
        </div>

        {/* ── pack library ─────────────────────────────────────────────────── */}
        <h2 className="mt-9 text-xl font-bold tracking-tight">Kant-en-klare packs</h2>
        <p className="mt-1 text-[0.86rem] text-muted-foreground">
          {total} uitgewerkte packs, slides of video, open → bewaar → kopieer → post.
        </p>

        {/* progress */}
        <div className="mt-5">
          <div className="text-sm text-muted-foreground">
            <b className="text-brand tabular-nums" suppressHydrationWarning>{mounted ? doneCount : 0}</b> van {total} gepost
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-brand transition-[width] duration-300" style={{ width: `${mounted ? pct : 0}%` }} />
          </div>
        </div>

        {/* coach / next */}
        <div className="mt-3 rounded-2xl border border-border bg-card shadow-sm p-3.5">
          {mounted && nextPack ? (
            <button type="button" onClick={() => openAndScroll(nextPack.id)} className="w-full flex items-center gap-3 text-left">
              <span className="flex-1 min-w-0">
                <span className="block text-[0.7rem] uppercase tracking-wide text-muted-foreground font-semibold">Volgende om te posten</span>
                <span className="block font-bold leading-snug truncate">{nextPack.title}</span>
              </span>
              <span className="shrink-0 inline-flex items-center gap-1 rounded-xl bg-brand text-brand-foreground font-bold text-sm px-3.5 py-2">
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ) : (
            <p className="text-[0.92rem] font-semibold text-foreground">{mounted ? "Alles gepost 🎉, mooi werk." : "Laden…"}</p>
          )}
        </div>

        {/* filters (sticky) */}
        <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 mt-4 bg-background/95 backdrop-blur border-b border-border">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-muted border border-border">
            {([
              ["all", "Alles"],
              ["client", "Klanten"],
              ["trainer", "Trainers"],
            ] as [AudienceFilter, string][]).map(([val, label]) => (
              <button
                key={val}
                type="button"
                onClick={() => setAudience(val)}
                className={`flex-1 rounded-xl py-2 text-sm font-bold transition-colors ${
                  audience === val ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek packs…"
                className="w-full rounded-xl border border-border bg-card pl-9 pr-3 py-2.5 text-[0.95rem] outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <label className="shrink-0 flex items-center gap-1.5 text-[0.8rem] text-muted-foreground cursor-pointer select-none">
              <input type="checkbox" checked={hidePosted} onChange={(e) => setHidePosted(e.target.checked)} className="accent-[var(--brand)]" />
              Verberg gepost
            </label>
          </div>
        </div>

        {/* bio reminder */}
        <details className="mt-4 rounded-2xl border border-border bg-card overflow-hidden">
          <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-[0.92rem] flex items-center justify-between">
            <span>🔗 Bio-link per campagne</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </summary>
          <div className="px-4 pb-4 text-[0.86rem] text-muted-foreground leading-relaxed space-y-2">
            <p>
              Captions zijn niet klikbaar op TikTok/Instagram → zet de <b className="text-foreground">link in bio</b> op de
              juiste pagina voor de campagne die je post:
            </p>
            {(["client", "trainer"] as StudioAudience[]).map((a) => (
              <p key={a} className="flex items-center gap-2">
                <span className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full ${a === "client" ? "bg-brand/15 text-brand-dark dark:text-brand" : "bg-foreground/10 text-foreground"}`}>
                  {AUDIENCE_LABEL[a]}
                </span>
                <span className="text-foreground font-medium">{AUDIENCE_BIO_LINK[a].url}</span>
              </p>
            ))}
            <p className="pt-1">
              IG-bio-link heeft <b className="text-foreground">geen follower-grens</b> (werkt nu). TikTok ontgrendelt de
              klikbare link bij 1.000 volgers, tot dan: pin de link in de <b className="text-foreground">eerste reactie</b>.
            </p>
          </div>
        </details>

        {/* flow tip */}
        <p className="mt-3 text-[0.8rem] text-muted-foreground leading-relaxed bg-muted/60 border border-border rounded-2xl p-3.5">
          📈 <b className="text-foreground">Voor bereik:</b> 1–2 posts/dag, 3–4 uur uit elkaar (nooit batchen) · altijd een
          trending sound op TikTok · open de hook met de winst + een getal · volg &amp; reageer dagelijks op een paar
          accounts. Instagram is de #1 acquisitie-bron, geef klanten-posts voorrang.
        </p>

        {/* packs */}
        <div className="mt-4 space-y-2.5">
          {visiblePacks.map((pack) => {
            const realIndex = SOCIAL_PACKS.indexOf(pack);
            return (
              <div id={`pack-${pack.id}`} key={pack.id} className="scroll-mt-24">
                <PackCard
                  pack={pack}
                  index={realIndex}
                  open={openId === pack.id}
                  onToggle={() => setOpenId((cur) => (cur === pack.id ? null : pack.id))}
                  platform={platformOf(pack.id)}
                  onPlatform={(p) => setPlatformOf(pack.id, p)}
                  posted={!!posted[pack.id]}
                  onPosted={(v) => setPostedOf(pack.id, v)}
                />
              </div>
            );
          })}
          {visiblePacks.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-8">Geen packs voor dit filter.</p>
          )}
        </div>

        {/* secondary: video ideas to film */}
        <details className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
          <summary className="cursor-pointer list-none px-4 py-3.5 font-bold flex items-center justify-between">
            <span className="flex items-center gap-2"><Film className="w-4 h-4 text-brand" /> Video-ideeën om zelf te filmen ({ideas.length})</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </summary>
          <div className="px-4 pb-4 space-y-2">
            <p className="text-[0.82rem] text-muted-foreground leading-relaxed">
              Geen kant-en-klare slides, dit zijn shotlists om zelf te filmen (de price-overlay studio-shots scoren het best).
            </p>
            {ideas.map((idea) => {
              const a = audienceOf(PILLAR_TO_AUDIENCE[idea.pillar]);
              return (
                <details key={idea.id} className="rounded-xl border border-border bg-background overflow-hidden">
                  <summary className="cursor-pointer list-none px-3 py-2.5 flex items-center gap-2 text-[0.9rem] font-semibold">
                    <span className="text-[0.62rem] font-bold px-1.5 py-0.5 rounded bg-muted text-muted-foreground uppercase">{idea.platform}</span>
                    {a !== "broad" && (
                      <span className={`text-[0.62rem] font-bold px-1.5 py-0.5 rounded-full ${a === "client" ? "bg-brand/15 text-brand-dark dark:text-brand" : "bg-foreground/10 text-foreground"}`}>
                        {AUDIENCE_LABEL[a]}
                      </span>
                    )}
                    <span className="flex-1 min-w-0 truncate">{idea.title}</span>
                  </summary>
                  <div className="px-3 pb-3 space-y-2">
                    <pre className="text-[0.82rem] whitespace-pre-wrap font-sans bg-muted border border-border rounded-lg p-2.5 leading-relaxed">{idea.script}</pre>
                    <p className="text-[0.78rem] text-muted-foreground"><b className="text-foreground">Hook:</b> {idea.brief.hookConcept}</p>
                    <FlashBtn
                      run={() => copyText(idea.script)}
                      className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-brand-foreground bg-foreground rounded-lg px-3 py-2 active:opacity-85"
                    >
                      <Copy className="w-3.5 h-3.5" /> Kopieer script
                    </FlashBtn>
                  </div>
                </details>
              );
            })}
            {ideas.length === 0 && <p className="text-center text-muted-foreground text-sm py-4">Geen ideeën voor dit filter.</p>}
          </div>
        </details>

        {/* secondary: rhythm */}
        <details className="mt-3 rounded-2xl border border-border bg-card overflow-hidden">
          <summary className="cursor-pointer list-none px-4 py-3.5 font-bold flex items-center justify-between">
            <span className="flex items-center gap-2"><Music2 className="w-4 h-4 text-brand" /> Ritme &amp; strategie</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </summary>
          <ul className="px-4 pb-4 space-y-2 text-[0.88rem] text-muted-foreground leading-relaxed list-disc pl-7">
            <li><b className="text-foreground">Cadans:</b> 1–2 posts per dag, 3–4 uur uit elkaar. Nooit batchen.</li>
            <li><b className="text-foreground">Sound:</b> altijd een trending sound op TikTok (algoritme-signaal). IG-carrousels spelen muted, post de slides óók als Reel (9:16 + sound) voor bereik buiten je volgers.</li>
            <li><b className="text-foreground">Hook:</b> open met de winst + een getal in de eerste 1–2 seconden (dat zet views om in likes, de 10,5K-views winnaar deed precies dat).</li>
            <li><b className="text-foreground">Voorrang:</b> Instagram is de #1 acquisitie-bron; klanten-posts (Open Gym / intake) eerst. Trainer-werving apart houden.</li>
            <li><b className="text-foreground">Account:</b> gebruik een Creator-account (gratis, houdt trending sounds). Schakel niet naar Business.</li>
          </ul>
        </details>

        {/* reset */}
        {mounted && doneCount > 0 && (
          <button
            type="button"
            onClick={() => { if (confirm("Voortgang resetten? (alle vinkjes weg)")) setPosted({}); }}
            className="mt-8 inline-flex items-center gap-1.5 text-[0.82rem] text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Voortgang resetten
          </button>
        )}

        <p className="mt-8 text-[0.72rem] text-muted-foreground/80 flex items-center gap-1.5">
          <ExternalLink className="w-3 h-3" /> Privé tool · niet geïndexeerd · voortgang lokaal op dit apparaat.
        </p>
      </div>
    </PageLayout>
  );
}

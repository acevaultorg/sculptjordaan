"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  COMPOSER_PILLARS,
  composePost,
  type ComposerAudience,
  type ComposerFormat,
} from "@/data/social-composer";
import { copyText } from "@/lib/social-studio";
import { Copy, RotateCcw, Sparkles, Image as ImageIcon, ListChecks } from "lucide-react";

const AUD_LABEL: Record<ComposerAudience, string> = { client: "Klanten", trainer: "Trainers" };
const FMT: { id: ComposerFormat; label: string; sub: string }[] = [
  { id: "tiktok", label: "TikTok", sub: "Video / 9:16" },
  { id: "instagram", label: "Instagram", sub: "Carrousel / 1:1" },
];

/* ── small copy button with a flash confirm ──────────────────────────────── */
function CopyBtn({
  text,
  label = "Kopieer",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const onClick = useCallback(async () => {
    const ok = await copyText(text);
    if (ok) {
      setDone(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setDone(false), 1800);
    }
  }, [text]);
  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={className || "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-foreground bg-foreground rounded-xl px-4 py-2.5 active:opacity-85"}
    >
      {done ? "✓ Gekopieerd" : (<><Copy className="w-3.5 h-3.5" /> {label}</>)}
    </button>
  );
}

export function PostComposer() {
  const [audience, setAudience] = useState<ComposerAudience>("client");
  const [format, setFormat] = useState<ComposerFormat>("tiktok");
  const [topic, setTopic] = useState("");
  const [roll, setRoll] = useState(0);

  const pillars = useMemo(() => COMPOSER_PILLARS.filter((p) => p.audience === audience), [audience]);
  const [pillarId, setPillarId] = useState(pillars[0].id);
  const pillar = pillars.find((p) => p.id === pillarId) ?? pillars[0];

  // when switching audience, snap to that audience's first pillar
  function switchAudience(a: ComposerAudience) {
    setAudience(a);
    const first = COMPOSER_PILLARS.find((p) => p.audience === a);
    if (first) setPillarId(first.id);
  }

  const post = useMemo(() => composePost(pillar, format, topic, roll), [pillar, format, topic, roll]);
  const slideText = post.slides.map((s, i) => `Slide ${i + 1}: ${s.headline} — ${s.sub}`).join("\n");
  const everything = `${post.caption}\n\n— Slide-tekst —\n${slideText}`;

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      {/* header */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid place-items-center w-8 h-8 rounded-xl bg-brand text-brand-foreground">
            <Sparkles className="w-4 h-4" />
          </span>
          Genereer een post
        </h3>
        <p className="mt-1 text-[0.84rem] text-muted-foreground leading-relaxed">
          Onbeperkt verse posts — alleen geverifieerde feiten, in de huisstijl. Kies → tik{" "}
          <b className="text-foreground">Andere variant</b> tot er één klopt → kopieer.
        </p>
      </div>

      <div className="px-4 pb-4 space-y-3.5">
        {/* audience */}
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-muted border border-border" role="tablist" aria-label="Publiek">
          {(["client", "trainer"] as ComposerAudience[]).map((a) => (
            <button
              key={a}
              type="button"
              role="tab"
              aria-selected={audience === a}
              onClick={() => switchAudience(a)}
              className={`rounded-xl py-2 text-sm font-bold transition-colors ${
                audience === a ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {AUD_LABEL[a]}
            </button>
          ))}
        </div>

        {/* pillar chips */}
        <div className="flex flex-wrap gap-1.5">
          {pillars.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPillarId(p.id)}
              aria-pressed={pillarId === p.id}
              title={p.blurb}
              className={`rounded-full px-3 py-1.5 text-[0.82rem] font-semibold border transition-colors ${
                pillarId === p.id
                  ? "bg-foreground text-brand-foreground border-foreground"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <p className="text-[0.78rem] text-muted-foreground -mt-1">{pillar.blurb}</p>

        {/* format */}
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-muted border border-border" role="tablist" aria-label="Format">
          {FMT.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={format === f.id}
              onClick={() => setFormat(f.id)}
              className={`rounded-xl py-2 text-sm font-bold transition-colors ${
                format === f.id ? "bg-brand text-brand-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
              <span className="block text-[0.65rem] font-medium opacity-80 mt-0.5">{f.sub}</span>
            </button>
          ))}
        </div>

        {/* optional topic */}
        <div>
          <label htmlFor="composer-topic" className="block text-[0.72rem] uppercase tracking-wider text-muted-foreground font-bold mb-1.5">
            Eigen onderwerp <span className="font-medium normal-case tracking-normal">(optioneel — jouw woorden)</span>
          </label>
          <input
            id="composer-topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="bijv. deadlift-techniek, waarom geen contract…"
            className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-[0.95rem] outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        {/* re-roll */}
        <button
          type="button"
          onClick={() => setRoll((r) => r + 1)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-brand-foreground font-bold text-[0.95rem] py-3.5 active:scale-[0.99] transition-transform"
        >
          <RotateCcw className="w-4 h-4" /> Andere variant
        </button>
      </div>

      {/* result */}
      <div className="px-4 pb-5 border-t border-border">
        {/* hook */}
        <h4 className="mt-4 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Hook {format === "tiktok" ? "(eerste frame / titel)" : "(eerste regel)"}
        </h4>
        <pre className="mt-2 text-[0.9rem] whitespace-pre-wrap font-sans bg-muted border border-border rounded-xl p-3 leading-relaxed">{post.hook}</pre>
        <CopyBtn text={post.hook} label="Kopieer hook" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand bg-brand/10 rounded-xl px-4 py-2.5 active:opacity-85" />

        {/* caption */}
        <h4 className="mt-5 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
          <Copy className="w-3.5 h-3.5" /> {format === "tiktok" ? "Caption + hashtags" : "Caption + hashtags"}
        </h4>
        <pre className="mt-2 text-[0.85rem] whitespace-pre-wrap font-sans bg-muted border border-border rounded-xl p-3 leading-relaxed">{post.caption}</pre>
        <div className="mt-2 flex flex-wrap gap-2">
          <CopyBtn text={post.caption} label="Kopieer caption" />
          <CopyBtn text={everything} label="Kopieer alles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand bg-brand/10 rounded-xl px-4 py-2.5 active:opacity-85" />
        </div>

        {/* slide text */}
        <h4 className="mt-5 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5" /> Slide-tekst ({post.slides.length})
        </h4>
        <ol className="mt-2 space-y-1.5">
          {post.slides.map((s, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[0.88rem] leading-relaxed">
              <span className="mt-0.5 grid place-items-center w-5 h-5 shrink-0 rounded-full bg-brand/15 text-brand text-[0.7rem] font-extrabold">{i + 1}</span>
              <span><b className="text-foreground">{s.headline}</b> — {s.sub}</span>
            </li>
          ))}
        </ol>
        <CopyBtn text={slideText} label="Kopieer slide-tekst" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand bg-brand/10 rounded-xl px-4 py-2.5 active:opacity-85" />

        {/* steps + note */}
        <h4 className="mt-5 text-[0.7rem] uppercase tracking-wider text-brand font-bold flex items-center gap-1.5">
          <ListChecks className="w-3.5 h-3.5" /> Zo post je 'm
        </h4>
        <ol className="mt-2 space-y-1.5 text-[0.86rem] text-muted-foreground leading-relaxed list-decimal pl-5">
          <li>Lees de tekst na in jouw stem — pas gerust een woord aan.</li>
          <li>Zet de slide-tekst als overlay op je foto/video (of film de hook).</li>
          <li>Kopieer de caption + hashtags en plak ze.</li>
          <li>
            Zet de bio-link op <span className="text-foreground font-medium">{post.bioLink}</span>
            {format === "tiktok" ? " (of pin 'm in de eerste reactie)" : ""}.
          </li>
          <li>Post.</li>
        </ol>

        <p className="mt-4 text-[0.78rem] text-muted-foreground bg-muted/60 border border-border rounded-xl p-3 leading-relaxed">
          ✍️ <b className="text-foreground">Concept in jouw huisstijl</b> — alle feiten kloppen (prijzen, adres, max 4),
          maar de stem ben jij. Pas gerust aan voor het post.
        </p>
      </div>
    </div>
  );
}

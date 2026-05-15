"use client";

import { useState, useMemo } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Clock, Image as ImageIcon, Video } from "lucide-react";
import { SOCIAL_IDEAS, PILLARS, type Platform, type Pillar } from "@/data/social-content";

type Filter = "all" | Pillar;

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
          Gekopieerd
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {label ?? "Kopieer"}
        </>
      )}
    </button>
  );
}

export default function SocialPage() {
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
          description="Kant-en-klare scripts, captions en hashtags voor SculptClub. Filter op platform of pilaar, kopieer wat je nodig hebt en post. Alles is gebaseerd op echte SculptClub feiten — geen verzinsels."
        />

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
              <Card className="h-full border-white/10 bg-white/[0.03]">
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
                        Hook
                      </span>
                      <CopyButton text={idea.hook} />
                    </div>
                    <p className="rounded-md bg-white/5 px-3 py-2 text-sm italic text-white/90">
                      "{idea.hook}"
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
                        Caption
                      </span>
                      <CopyButton text={idea.caption} />
                    </div>
                    <pre className="whitespace-pre-wrap rounded-md bg-white/5 px-3 py-2 text-xs leading-relaxed text-white/85 font-sans">
                      {idea.caption}
                    </pre>
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

                  <div className="border-t border-white/10 pt-3">
                    <CopyButton
                      text={`Hook: ${idea.hook}\n\nScript:\n${idea.script}\n\nCaption:\n${idea.caption}\n\nHashtags:\n${idea.hashtags}\n\nVisual:\n${idea.visualNote}`}
                      label="Kopieer alles"
                    />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {ideas.length === 0 && (
          <p className="mt-12 text-center text-sm text-white/60">
            Geen ideeën gevonden voor deze filter combinatie. Probeer een andere.
          </p>
        )}

        <FadeIn className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="mb-3 text-base font-semibold">Posting checklist</h2>
          <ul className="space-y-1.5 text-sm text-white/75">
            <li>✓ Klant-content? Vraag schriftelijke toestemming voor beeld (zeker bij voor/na shots)</li>
            <li>✓ Tag SculptClub @sculptclub niet @sculptjordaan</li>
            <li>✓ Locatie: Egelantiersgracht 424, Amsterdam Jordaan</li>
            <li>✓ Plaats link in bio actueel (sculptclub.nl)</li>
            <li>✓ TikTok: gebruik trending audio uit NL trends (check elke week)</li>
            <li>✓ Instagram: post tussen 19:00-21:00 voor maximaal bereik in Amsterdam</li>
            <li>✓ Plan 3-5 posts per week, mix pilaren (niet alleen PT showcase)</li>
            <li>✓ Reageer op DMs binnen 1 uur — meeste klanten boeken zo</li>
          </ul>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}

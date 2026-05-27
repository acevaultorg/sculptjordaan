"use client";

/**
 * Trainer-Match Quiz — 3-question interactive matcher.
 *
 * Lead-cap optimization shipped 2026-05-26 per @strategist analysis:
 * 10 trainers on /nl/gratis-intake = decision paralysis. The current
 * TrainerChoiceGrid shows all 10 + asks visitor to pick → many bounce
 * undecided. This quiz collapses choice to 1 tap × 3 questions →
 * recommends top-2 trainers with photos + per-trainer intake CTAs.
 *
 * Industry benchmark (boutique-PT decision-paralysis killers):
 *   12-18% completion start-to-finish · 35-50% finisher→intake within 14d
 *   → +5-8% absolute lead-rate lift on demand-side traffic
 *
 * Three questions:
 *   Q1 GOAL    → matches trainer specialization (highest signal weight)
 *   Q2 FREQ    → signals commitment level (sent in WhatsApp pre-fill, no filter)
 *   Q3 LANG    → hard filter (operator's UX directive: respect language need)
 *
 * Output: top-2 trainer cards with [Plan intake met <name>] buttons. No
 * email-required gate. Visitor lands on /nl/plan-gratis-intake-met-<id>
 * (the trainer's existing intake page with their own WhatsApp + bio).
 *
 * Tracking:
 *   - plausible('Quiz Start')                  (mount)
 *   - plausible('Quiz Step', { step: 1|2|3 })  (each answer tap)
 *   - plausible('Quiz Complete', { topMatch }) (final shown)
 *   - plausible('Quiz Lead', { trainer })      (CTA click — generate_lead also)
 *
 * Mobile-first: cards are 44×44+ tap targets, 1-column on small screens,
 * 2-column on sm+. Auto-advances on selection (no Submit button).
 */

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { trainers, type Trainer } from "@/config/trainers";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props: Record<string, unknown> }) => void;
  }
}

// ─── Goal categories ──────────────────────────────────────────────────────
//
// Each goal maps to a set of trainer-specialization tokens that score +3
// when matched. The scoring function picks the top-2 trainers by total
// score across all 3 questions. Tokens are case-insensitive substring
// matches against the trainer's locale-appropriate `specialization` array.
//
// "Algemeen fit" matches every trainer at +1 — non-discriminating tiebreak.
type GoalKey = "afvallen" | "kracht" | "herstel" | "vrouwen" | "skills" | "algemeen";
type FreqKey = "1x" | "2-3x" | "vaak" | "weet-niet";
type LangKey = "NL" | "EN" | "PT" | "any";

const GOAL_TOKENS_NL: Record<GoalKey, string[]> = {
  afvallen: ["Afvallen", "Voeding", "Lichaamsrecompositie"],
  kracht: ["Kracht", "Calisthenics", "Skills", "Atletische"],
  herstel: ["Herstel", "Revalidatie", "Houding", "Mobiliteit", "Ademwerk"],
  vrouwen: ["Vrouwentraining"],
  skills: ["Calisthenics", "Skills", "Mobiliteit", "Techniek"],
  algemeen: [], // matches everyone via +1 fallback
};

const GOAL_TOKENS_EN: Record<GoalKey, string[]> = {
  afvallen: ["Weight Loss", "Fat Loss", "Nutrition", "Body Recomposition"],
  kracht: ["Strength", "Calisthenics", "Skills", "Athletic"],
  herstel: ["Recovery", "Rehabilitation", "Posture", "Mobility", "Breathwork"],
  vrouwen: ["Women's Training"],
  skills: ["Calisthenics", "Skills", "Mobility", "Technique"],
  algemeen: [],
};

interface QuizCopy {
  intro: { title: string; sub: string; start: string };
  step: (n: number, total: number) => string;
  q1: { title: string; options: { key: GoalKey; label: string; sub: string }[] };
  q2: { title: string; options: { key: FreqKey; label: string; sub: string }[] };
  q3: { title: string; options: { key: LangKey; label: string }[] };
  result: {
    title: string;
    sub: string;
    bookLabel: (name: string) => string;
    whatsappLabel: string;
    reset: string;
    findOther: string;
    specialty: string;
    languages: string;
    rate: string;
    rateUnknown: string;
  };
  noMatch: { title: string; sub: string; cta: string };
}

const COPY_NL: QuizCopy = {
  intro: {
    title: "Match jezelf met de juiste trainer.",
    sub: "3 vragen · 30 seconden · we tonen je top-2 match.",
    start: "Start de match →",
  },
  step: (n, total) => `Stap ${n} van ${total}`,
  q1: {
    title: "Wat is je belangrijkste doel?",
    options: [
      { key: "afvallen", label: "Afvallen", sub: "Vetpercentage omlaag, fitter voelen" },
      { key: "kracht", label: "Spiermassa & kracht", sub: "Sterker, gespierder, betere prestaties" },
      { key: "herstel", label: "Herstel & houding", sub: "Na blessure, klacht of bureauwerk" },
      { key: "vrouwen", label: "Vrouwentraining", sub: "Training afgestemd op vrouwen" },
      { key: "skills", label: "Skills & calisthenics", sub: "Handstand, muscle-up, mobiliteit" },
      { key: "algemeen", label: "Algemeen fit blijven", sub: "Routine, energie, vol leven" },
    ],
  },
  q2: {
    title: "Hoe vaak wil je trainen?",
    options: [
      { key: "1x", label: "1× per week", sub: "Vaste afspraak" },
      { key: "2-3x", label: "2-3× per week", sub: "Consistente groei" },
      { key: "vaak", label: "Meerdere keren", sub: "Volledig programma" },
      { key: "weet-niet", label: "Nog niet zeker", sub: "Eerst kijken wat past" },
    ],
  },
  q3: {
    title: "In welke taal wil je trainen?",
    options: [
      { key: "NL", label: "Nederlands" },
      { key: "EN", label: "English" },
      { key: "PT", label: "Português" },
      { key: "any", label: "Maakt niet uit" },
    ],
  },
  result: {
    title: "Jouw top-2 match",
    sub: "Op basis van je doel, frequentie en taalvoorkeur.",
    bookLabel: (name) => `Plan gratis intake met ${name} →`,
    // Parity with lead-rescue-popup.tsx fix (2026-05-27) — "Of liever
    // WhatsApp?" had the same gek-taalgebruik issue as the rescue label.
    // Direct active form fits Dutch operator-action register.
    whatsappLabel: "Of WhatsApp ons",
    reset: "↺ Doe de match opnieuw",
    findOther: "Bekijk alle 10 trainers",
    specialty: "Specialisatie",
    languages: "Talen",
    rate: "Tarief",
    rateUnknown: "Op aanvraag",
  },
  noMatch: {
    title: "We hebben geen perfecte match in jouw taal.",
    sub: "Geen probleem — vraag het ons direct, we matchen je handmatig.",
    cta: "WhatsApp ons",
  },
};

const COPY_EN: QuizCopy = {
  intro: {
    title: "Match yourself with the right trainer.",
    sub: "3 questions · 30 seconds · we show your top-2 match.",
    start: "Start the match →",
  },
  step: (n, total) => `Step ${n} of ${total}`,
  q1: {
    title: "What's your main goal?",
    options: [
      { key: "afvallen", label: "Weight loss", sub: "Lower body fat, feel fitter" },
      { key: "kracht", label: "Muscle & strength", sub: "Stronger, more muscle, better performance" },
      { key: "herstel", label: "Recovery & posture", sub: "After injury, pain, or desk work" },
      { key: "vrouwen", label: "Women's training", sub: "Training tailored to women" },
      { key: "skills", label: "Skills & calisthenics", sub: "Handstand, muscle-up, mobility" },
      { key: "algemeen", label: "Stay generally fit", sub: "Routine, energy, full life" },
    ],
  },
  q2: {
    title: "How often do you want to train?",
    options: [
      { key: "1x", label: "1× per week", sub: "Steady rhythm" },
      { key: "2-3x", label: "2-3× per week", sub: "Consistent growth" },
      { key: "vaak", label: "Multiple times", sub: "Full program" },
      { key: "weet-niet", label: "Not sure yet", sub: "See what fits first" },
    ],
  },
  q3: {
    title: "Which language do you want to train in?",
    options: [
      { key: "NL", label: "Dutch" },
      { key: "EN", label: "English" },
      { key: "PT", label: "Português" },
      { key: "any", label: "Doesn't matter" },
    ],
  },
  result: {
    title: "Your top-2 match",
    sub: "Based on your goal, frequency and language preference.",
    bookLabel: (name) => `Book free intro with ${name} →`,
    whatsappLabel: "Or WhatsApp us?",
    reset: "↺ Run the match again",
    findOther: "See all 10 trainers",
    specialty: "Specialty",
    languages: "Languages",
    rate: "Rate",
    rateUnknown: "On request",
  },
  noMatch: {
    title: "No perfect match in your language.",
    sub: "No problem — ask us directly, we'll match you manually.",
    cta: "WhatsApp us",
  },
};

// ─── Scoring ──────────────────────────────────────────────────────────────
function scoreTrainer(
  trainer: Trainer,
  goal: GoalKey,
  lang: LangKey,
  locale: "nl" | "en"
): number {
  let score = 0;

  // Goal match: +3 per token hit, +1 fallback for "algemeen"
  const tokens = locale === "nl" ? GOAL_TOKENS_NL[goal] : GOAL_TOKENS_EN[goal];
  if (goal === "algemeen") {
    score += 1; // every trainer is fit-for-general
  } else {
    const specs = trainer.specialization[locale].join(" ").toLowerCase();
    for (const tok of tokens) {
      if (specs.includes(tok.toLowerCase())) score += 3;
    }
  }

  // Language match: +5 if exact, +5 fallback for "any"
  if (lang === "any") {
    score += 5;
  } else if (trainer.languages.includes(lang)) {
    score += 5;
  } else {
    // Hard filter: if visitor needs language X and trainer doesn't speak it,
    // zero them out completely (don't recommend a trainer who can't talk
    // to the visitor — the intake call would be awkward).
    return -1;
  }

  return score;
}

export function TrainerMatchQuiz({ locale }: { locale: "nl" | "en" }) {
  const t = locale === "nl" ? COPY_NL : COPY_EN;

  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0); // 0=intro, 4=result
  const [goal, setGoal] = useState<GoalKey | null>(null);
  // FreqKey is tracked but never read — Q2 is signal-only and sent inside
  // the Quiz Step plausible event; nothing else in the component consumes
  // it. Keep the setter to fire telemetry; drop the read value to satisfy
  // @typescript-eslint/no-unused-vars (was a leftover from the pre-Plausible
  // draft where Q2 fed into trainer scoring). Refactored 2026-05-27.
  const [, setFreq] = useState<FreqKey | null>(null);
  const [lang, setLang] = useState<LangKey | null>(null);

  // Fire Quiz Start on mount
  useEffect(() => {
    if (typeof window === "undefined" || !window.plausible) return;
    window.plausible("Quiz Start", { props: { locale } });
  }, [locale]);

  function track(event: string, props: Record<string, unknown>) {
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(event, { props: { locale, ...props } });
    }
  }

  function pickGoal(g: GoalKey) {
    setGoal(g);
    setStep(2);
    track("Quiz Step", { step: 1, goal: g });
  }

  function pickFreq(f: FreqKey) {
    setFreq(f);
    setStep(3);
    track("Quiz Step", { step: 2, freq: f });
  }

  function pickLang(l: LangKey) {
    setLang(l);
    setStep(4);
    track("Quiz Step", { step: 3, lang: l });
  }

  function reset() {
    setGoal(null);
    setFreq(null);
    setLang(null);
    setStep(0);
    track("Quiz Reset", {});
  }

  // Compute top-2 matches
  const matches = useMemo(() => {
    if (!goal || !lang) return [];
    const scored = trainers
      .map((tr) => ({ trainer: tr, score: scoreTrainer(tr, goal, lang, locale) }))
      .filter((x) => x.score >= 0)
      .sort((a, b) => b.score - a.score);
    return scored.slice(0, 2);
  }, [goal, lang, locale]);

  // Fire Quiz Complete on results render
  useEffect(() => {
    if (step !== 4) return;
    const topName = matches[0]?.trainer.name ?? "no-match";
    track("Quiz Complete", { topMatch: topName, hasMatches: matches.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const TOTAL = 3;

  // ── Intro screen ──
  if (step === 0) {
    return (
      <div className="rounded-2xl border border-border/40 bg-secondary p-6 sm:p-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-xs font-semibold text-brand mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{locale === "nl" ? "10 trainers · 30 sec match" : "10 trainers · 30 sec match"}</span>
        </div>
        {/* h1 (not h2) because the quiz is the ONLY content on /match-trainer
            — the page has no preceding SectionHeader. Without an h1, screen
            readers + Google's structured-page parsing both treat the heading
            tree as level-skipped (page → h2 with no h1). Component is only
            rendered on /nl/match-trainer + /en/match-trainer (grep-verified
            2026-05-27); no other usages exist that would conflict with a
            page-level h1. */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">{t.intro.title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto">{t.intro.sub}</p>
        <button
          onClick={() => setStep(1)}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm shadow-brand-md transition-colors min-h-[48px]"
        >
          {t.intro.start}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // ── Question screens ──
  if (step === 1 || step === 2 || step === 3) {
    const question = step === 1 ? t.q1 : step === 2 ? t.q2 : t.q3;
    const isLang = step === 3;

    return (
      <div className="rounded-2xl border border-border/40 bg-secondary p-6 sm:p-8">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`h-1.5 rounded-full transition-all ${
                n < step ? "w-8 bg-brand" : n === step ? "w-12 bg-brand" : "w-8 bg-border"
              }`}
              aria-hidden
            />
          ))}
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2">
          {t.step(step, TOTAL)}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">{question.title}</h3>

        <div className={`grid gap-3 ${isLang ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
          {question.options.map((opt) => {
            const onClick = () => {
              if (step === 1) pickGoal(opt.key as GoalKey);
              else if (step === 2) pickFreq(opt.key as FreqKey);
              else pickLang(opt.key as LangKey);
            };
            return (
              <button
                key={opt.key}
                onClick={onClick}
                className="text-left p-4 rounded-xl border border-border/50 bg-background hover:border-brand hover:bg-brand/5 transition-all min-h-[64px] group"
              >
                <p className="font-semibold text-sm sm:text-base group-hover:text-brand transition-colors">
                  {opt.label}
                </p>
                {"sub" in opt && opt.sub && (
                  <p className="text-xs text-muted-foreground mt-0.5">{opt.sub}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Result screen ──
  if (matches.length === 0) {
    // Hard-fail: visitor's language pref isn't covered by any trainer.
    // Send them to general WhatsApp with the operator for manual match.
    const waUrl = locale === "nl"
      ? `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik zocht een trainer maar geen match in mijn taal. Kunnen jullie me helpen?")}`
      : `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I was looking for a trainer but no match in my language. Can you help?")}`;

    return (
      <div className="rounded-2xl border border-border/40 bg-secondary p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{t.noMatch.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{t.noMatch.sub}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          {t.noMatch.cta}
        </a>
        <div className="mt-4">
          <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors">
            {t.result.reset}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-500 mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{locale === "nl" ? "Match gevonden" : "Match found"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{t.result.title}</h2>
        <p className="text-sm text-muted-foreground mt-2">{t.result.sub}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {matches.map(({ trainer }, i) => {
          const intakeHref = `/${locale}/${trainer.slug[locale]}`;
          const isPrimary = i === 0;

          return (
            <div
              key={trainer.id}
              className={`relative rounded-2xl border bg-secondary overflow-hidden ${
                isPrimary ? "border-brand shadow-brand-md" : "border-border/50"
              }`}
            >
              {isPrimary && (
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-wider">
                  {locale === "nl" ? "Beste match" : "Best match"}
                </div>
              )}
              <div className="aspect-[4/3] relative">
                {/* `priority` (not `loading="lazy"`) — these 2 trainer
                    photos ARE the primary content of the result screen.
                    The visitor just spent 30s answering 3 questions
                    expecting to SEE their top-2 match. Lazy-load made
                    the cards render as black rectangles until the
                    visitor scrolled (Chrome MCP audit 2026-05-27
                    confirmed the gap). Eager-load via `priority` ensures
                    the result is visible the moment the quiz completes,
                    preserving the "wow" moment. Only 2 images max, no
                    LCP impact. */}
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 672px) 100vw, 336px"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {trainer.name}
                  {trainer.credentials?.[locale] && (
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      · {trainer.credentials[locale]}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {trainer.specialization[locale].join(" · ")}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{trainer.languages.join(" · ")}</span>
                  <span>·</span>
                  <span>{trainer.rate ?? t.result.rateUnknown}</span>
                </div>

                <Link
                  href={intakeHref}
                  onClick={() =>
                    track("Quiz Lead", { trainer: trainer.id, position: i + 1 })
                  }
                  className={`mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-bold text-sm transition-colors min-h-[48px] ${
                    isPrimary
                      ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                      : "bg-background border border-border hover:border-brand hover:bg-brand/5 text-foreground"
                  }`}
                >
                  {t.result.bookLabel(trainer.name)}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground mb-3">{t.result.whatsappLabel}</p>
        <a
          href={
            locale === "nl"
              ? `https://wa.me/31683178934?text=${encodeURIComponent(`Hoi! Ik twijfel tussen ${matches.map((m) => m.trainer.name).join(" en ")} voor een gratis intake.`)}`
              : `https://wa.me/31683178934?text=${encodeURIComponent(`Hi! I'm torn between ${matches.map((m) => m.trainer.name).join(" and ")} for a free intro.`)}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand/40 bg-brand/10 hover:bg-brand/20 text-foreground text-sm font-semibold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-brand" />
          WhatsApp
        </a>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            {t.result.reset}
          </button>
          <span aria-hidden className="text-muted-foreground">·</span>
          <Link
            href={locale === "nl" ? "/nl/vind-jouw-personal-trainer" : "/en/find-personal-trainer"}
            className="text-xs text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
          >
            {t.result.findOther}
          </Link>
        </div>
      </div>
    </div>
  );
}

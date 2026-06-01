import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrintButton } from "@/components/marketing/print-button";

/**
 * /pt-cheat-sheet — printable "10 questions your PT must answer" lead magnet.
 *
 * Shipped 2026-05-26 lead-cap (task E). Companion to BlogEmailCapture.
 * After visitor submits email, they receive this URL (and operator's
 * follow-up email when service is wired). Locale-aware via ?locale=en.
 *
 * Same approach as /intake-plan — print-friendly @media print CSS, no
 * server-side PDF generation needed. Operator can also share this URL
 * directly via WhatsApp / social as a free-value piece.
 */

interface PageProps {
  searchParams: Promise<{ locale?: string }>;
}

export const metadata: Metadata = {
  title: { absolute: "10 vragen die jouw personal trainer moet kunnen beantwoorden · SculptClub" },
  description: "Een gratis cheat sheet van SculptClub — 10 quality-control vragen voor je personal trainer + scoring-rubric.",
  robots: { index: false, follow: false },
};

const COPY_NL = {
  title: "10 vragen die jouw personal trainer moet kunnen beantwoorden",
  intro: "Een goede personal trainer kan deze 10 vragen vlot beantwoorden. Stel ze tijdens je intake — of stuur ze vooraf via WhatsApp. Score je trainer:",
  scoring: [
    { range: "8-10/10", label: "Sterke kandidaat", desc: "Doe een intake. Je zoekt iemand die zo doordacht antwoordt." },
    { range: "5-7/10", label: "Twijfelgeval", desc: "Vraag om een 2e intake of vergelijk met een andere trainer." },
    { range: "0-4/10", label: "Zoek verder", desc: "Een PT die geen 5/10 haalt kost je tijd én geld." },
  ],
  questions: [
    { q: "Wat is je opleiding en heb je actuele bijscholing?", why: "Geen erkende opleiding = geen basis. Bijscholing = blijft up-to-date." },
    { q: "Hoe meet je vooruitgang concreet?", why: "Vaag antwoord = vaag resultaat. Goed antwoord: gewicht, reps, body composition, sessie-notes." },
    { q: "Wat doe je als ik een blessure heb of krijg?", why: "Een goede PT past de sessie aan + verwijst naar fysio als nodig. Niet: 'doorpushen'." },
    { q: "Kun je 2 oud-cliënten als referentie geven?", why: "Een PT met 0 cliënten waar je mee kan spreken is een rode vlag." },
    { q: "Hoe ziet een sessie precies eruit van A tot Z?", why: "Goed antwoord: warming-up, kernoefeningen, accessory, cooling-down. Geen antwoord = geen structuur." },
    { q: "Wat doe je als ik na 6 weken geen vooruitgang zie?", why: "De PT past het programma aan. Niet: 'je doet vast iets verkeerd'." },
    { q: "Hoe combineer je training met voeding?", why: "Hoeft geen diëtist te zijn (die heten Eva 😉) maar moet de basics kennen: macros, timing, hydratatie." },
    { q: "Wat is jouw eigen trainings- en eet-gewoonte?", why: "Een PT die niet zelf traint = niet authentiek. Niet de Olympisch atleet, maar wel: consequent." },
    { q: "Wat als ik niet meer wil — geld terug?", why: "Een goede PT heeft een eerlijke teruggave-policy. Bij SculptClub: pakketten kun je gewoon stopzetten." },
    { q: "Kan ik je tijdens de eerste sessie alles vragen zonder dat het hij of zij in zijn op zijn neemt?", why: "Een PT die zich aangevallen voelt door vragen = niet de juiste. Een goede PT vindt het juist goed." },
  ],
  next: "Klaar voor een intake?",
  nextSub: "Doe de 30-sec match-quiz en je krijgt 2 trainers die bij jouw doel passen.",
  matchUrl: "/nl/match-trainer",
  matchLabel: "Match je trainer →",
  contact: "Of stel je vraag direct via WhatsApp · +31 6 15 14 79 52",
  footerNote: "Wil je deze cheat sheet bewaren? Browser → Bestand → Print → 'Save as PDF'.",
  printLabel: "📄 Print of bewaar als PDF",
};

const COPY_EN = {
  title: "10 questions your personal trainer must be able to answer",
  intro: "A good personal trainer can answer these 10 questions easily. Ask them at your intro — or send them ahead via WhatsApp. Score your trainer:",
  scoring: [
    { range: "8-10/10", label: "Strong candidate", desc: "Book an intro. You want someone who answers this carefully." },
    { range: "5-7/10", label: "Borderline", desc: "Ask for a 2nd intro or compare with another trainer." },
    { range: "0-4/10", label: "Look elsewhere", desc: "A PT scoring below 5/10 costs you time AND money." },
  ],
  questions: [
    { q: "What's your training and certification — and your recent continuing-ed?", why: "No recognized cert = no foundation. Continuing-ed = stays current." },
    { q: "How do you measure progress concretely?", why: "Vague answer = vague results. Good answer: weight, reps, body composition, session notes." },
    { q: "What do you do if I get injured?", why: "A good PT adjusts the session + refers to physio when needed. Not: 'push through it'." },
    { q: "Can you give me 2 former clients as references?", why: "A PT with 0 clients you can speak to is a red flag." },
    { q: "Walk me through a typical session A to Z.", why: "Good answer: warm-up, main lifts, accessories, cool-down. No answer = no structure." },
    { q: "What if I see no progress after 6 weeks?", why: "The PT adjusts the program. Not: 'you must be doing something wrong'." },
    { q: "How do you combine training with nutrition?", why: "Doesn't need to be a dietitian (those are called Eva 😉) but must know basics: macros, timing, hydration." },
    { q: "What's your own training + eating habit?", why: "A PT who doesn't train themselves = not authentic. Doesn't need to be elite — consistent works." },
    { q: "Refund policy if I don't want to continue?", why: "A good PT has a fair refund policy. At SculptClub: packages cancel anytime." },
    { q: "Can I ask anything during the first session without you taking it personally?", why: "A PT who feels attacked by questions = wrong fit. A good PT welcomes questions." },
  ],
  next: "Ready for an intro?",
  nextSub: "Take the 30-sec match quiz and you'll get 2 trainers that match your goal.",
  matchUrl: "/en/match-trainer",
  matchLabel: "Match your trainer →",
  contact: "Or ask your question directly via WhatsApp · +31 6 15 14 79 52",
  footerNote: "Want to save this cheat sheet? Browser → File → Print → 'Save as PDF'.",
  printLabel: "📄 Print or save as PDF",
};

export default async function PtCheatSheetPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const isEn = params.locale === "en";
  const t = isEn ? COPY_EN : COPY_NL;

  return (
    <div className="min-h-screen bg-white text-neutral-900 print:bg-white print:text-black">
      <style>{`
        @media print {
          @page { size: A4; margin: 16mm 14mm; }
          .no-print { display: none !important; }
          body { background: white !important; }
        }
      `}</style>

      <header className="no-print bg-neutral-900 text-white py-4 px-4 flex items-center justify-center gap-3">
        <Link href={isEn ? "/en" : "/"} aria-label="Homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={120}
            height={10}
            className="h-3 w-auto invert"
          />
        </Link>
        <span className="text-xs text-white/60">·</span>
        <span className="text-xs text-white/70">{isEn ? "PT cheat sheet" : "PT cheat sheet"}</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-8 sm:py-10 print:py-0">
        <div className="hidden print:block mb-6 text-center">
          <Image src="/images/logo-sculptclub.png" alt="SculptClub" width={140} height={10} className="h-3.5 w-auto mx-auto" />
          <p className="text-xs text-neutral-500 mt-1">SculptClub · Amsterdam Jordaan · sculptclub.nl</p>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3 print:text-xl">{t.title}</h1>
        <p className="text-sm text-neutral-700 mb-5 print:text-xs">{t.intro}</p>

        {/* Scoring rubric */}
        <div className="grid sm:grid-cols-3 gap-2 mb-6 print:gap-1 print:mb-4">
          {t.scoring.map((s) => (
            <div key={s.range} className="border border-neutral-200 rounded-lg p-3 print:p-2">
              <p className="text-xs font-bold text-orange-600 print:text-black">{s.range}</p>
              <p className="text-sm font-semibold mt-0.5 print:text-xs">{s.label}</p>
              <p className="text-xs text-neutral-600 mt-1 print:text-[10px]">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 10 questions */}
        <ol className="space-y-3 print:space-y-2 mb-8">
          {t.questions.map((q, i) => (
            <li key={i} className="border-l-2 border-orange-500 pl-3 print:border-neutral-400 print:pl-2">
              <p className="text-sm font-semibold print:text-xs">
                <span className="text-orange-600 print:text-black mr-1">{i + 1}.</span>
                {q.q}
              </p>
              <p className="text-xs text-neutral-600 mt-1 italic print:text-[10px]">Waarom: {q.why}</p>
            </li>
          ))}
        </ol>

        <section className="rounded-xl bg-orange-50 border border-orange-200 p-5 print:bg-transparent print:border-neutral-300">
          <h2 className="text-base font-bold print:text-sm">{t.next}</h2>
          <p className="text-sm text-neutral-700 mt-1 print:text-xs">{t.nextSub}</p>
          <Link
            href={t.matchUrl}
            className="inline-flex items-center justify-center gap-1.5 mt-3 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-colors no-print"
          >
            {t.matchLabel}
          </Link>
          <p className="text-xs text-neutral-500 mt-3 print:text-[10px]">{t.contact}</p>
        </section>

        <div className="no-print mt-8 text-center">
          <PrintButton label={t.printLabel} />
          <p className="mt-2 text-xs text-neutral-500">{t.footerNote}</p>
        </div>
      </main>
    </div>
  );
}

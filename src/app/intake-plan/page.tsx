import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrintButton } from "@/components/marketing/print-button";

/**
 * /intake-plan — printable 4-week training plan artifact.
 *
 * Shipped 2026-05-26 lead-cap (task C). Reframes the intake from
 * "free trial session" to "free PLAN + intake". Industry benchmark:
 * a takeable artifact with the offer lifts intake-show rate +15-25%.
 *
 * Approach: operator shares this URL via WhatsApp with each new
 * intake-booker, pre-filled with their goal + trainer via query params.
 * The visitor opens it, sees their personal 4-week plan template, and
 * can print to PDF locally (browser → File → Print → Save as PDF).
 *
 * v1 deliberately avoids server-side PDF generation (no @react-pdf or
 * Puppeteer dependency) — keeps it fast to ship + iterate. v2 can add
 * PDF download endpoint if operator wants the file emailed directly.
 *
 * Query params:
 *   ?name=Jan         → personalize headline
 *   ?goal=afvallen    → personalize program focus
 *   ?trainer=alex     → personalize trainer attribution
 *
 * Print discipline: @media print CSS hides nav + footer, A4-friendly
 * margins, brand-color text rendered as black for printer-friendliness
 * unless the visitor has color enabled.
 *
 * CONTENT IS PLACEHOLDER — operator validates + iterates the actual
 * exercises + nutrition principles. The template structure is the ship.
 */

interface PageProps {
  searchParams: Promise<{ name?: string; goal?: string; trainer?: string }>;
}

export const metadata: Metadata = {
  title: { absolute: "Jouw 4-week plan · SculptClub" },
  description: "Persoonlijk 4-week trainingsplan bij SculptClub Personal Training in Amsterdam Jordaan.",
  robots: { index: false, follow: false },
};

const GOAL_CONTENT: Record<string, { focus: string; nutrition: string }> = {
  afvallen: {
    focus: "Lichaamssamenstelling: vetverlies + spierbehoud. 3-4× per week kracht + 1-2× cardio.",
    nutrition: "Calorisch tekort 300-500 kcal/dag · 2g eiwit per kg lichaamsgewicht · groenten elke maaltijd.",
  },
  kracht: {
    focus: "Spiermassa + maximale kracht. 4× per week kracht (push/pull/legs/full-body). Progressive overload.",
    nutrition: "Calorisch surplus 200-400 kcal/dag · 1.8-2.2g eiwit per kg · koolhydraten rond training.",
  },
  herstel: {
    focus: "Mobiliteit + herstel + houding. Lage-impact kracht 2-3× per week + dagelijkse mobiliteit.",
    nutrition: "Onderhoudscalorieën · 1.6g eiwit per kg · ontstekingsremmend (omega-3, groenten, fruit).",
  },
  algemeen: {
    focus: "Algemene fitness: kracht + uithoudingsvermogen + flexibiliteit. 3× per week kracht + 1× cardio + 1× mobiliteit.",
    nutrition: "Onderhoudscalorieën · 1.6-1.8g eiwit per kg · 80/20 regel (gezond eten met ruimte voor flexibiliteit).",
  },
};

const TRAINER_NAMES: Record<string, string> = {
  alex: "Alex",
  eva: "Eva",
  bryan: "Bryan",
  joey: "Joey",
  ibrahim: "Ibrahim",
  gezina: "Gezina",
  andrea: "Andrea",
  sergei: "Sergei",
  dara: "Dara",
  jearmey: "Jearmey",
};

export default async function IntakePlanPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const name = params.name?.trim() || "";
  const goalKey = params.goal?.toLowerCase() || "algemeen";
  const trainerKey = params.trainer?.toLowerCase() || "";
  const goal = GOAL_CONTENT[goalKey] || GOAL_CONTENT.algemeen;
  const trainer = TRAINER_NAMES[trainerKey] || "je trainer";

  return (
    <div className="min-h-screen bg-white text-neutral-900 print:bg-white print:text-black">
      {/* Print-only screen-styling */}
      <style>{`
        @media print {
          @page { size: A4; margin: 18mm 16mm; }
          .no-print { display: none !important; }
          body { background: white !important; }
          .print-page-break { page-break-after: always; }
        }
        @media screen and (max-width: 640px) {
          .intake-plan-wrap { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>

      {/* Screen-only header — hidden in print */}
      <header className="no-print bg-neutral-900 text-white py-4 px-4 flex items-center justify-center gap-3">
        <Link href="/" aria-label="Naar homepage">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={120}
            height={10}
            className="h-3 w-auto invert"
          />
        </Link>
        <span className="text-xs text-white/60">·</span>
        <span className="text-xs text-white/70">Jouw 4-week plan</span>
      </header>

      <main className="intake-plan-wrap max-w-3xl mx-auto px-8 py-10 print:py-0">
        {/* Print-only logo at top */}
        <div className="hidden print:block mb-6 text-center">
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={140}
            height={10}
            className="h-3.5 w-auto mx-auto"
          />
          <p className="text-xs text-neutral-500 mt-1">Personal training studio · Amsterdam Jordaan</p>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2 print:text-2xl">
          {name ? `${name}'s` : "Jouw"} <span className="text-orange-600 print:text-black">4-week plan</span>
        </h1>
        <p className="text-sm text-neutral-600 mb-6 print:text-xs">
          Persoonlijk plan voorbereid door <strong className="text-neutral-900">{trainer}</strong> · SculptClub Personal Training · Jordaan
        </p>

        {/* Focus */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold mb-2 print:text-base">Jouw focus</h2>
          <p className="text-sm leading-relaxed print:text-xs">{goal.focus}</p>
        </section>

        {/* Week-by-week */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold mb-3 print:text-base">Week-voor-week</h2>
          <div className="grid gap-3">
            {[
              { wk: "Week 1", title: "Baseline + techniek", content: "Beoordeel beweegpatronen, hartslag, kracht-baseline. Focus op TECHNIEK boven gewicht. 3 sessies." },
              { wk: "Week 2", title: "Opbouwen", content: "Volume omhoog (+10-15%). Eerste progressieve overload. Track elke werkset. 3-4 sessies." },
              { wk: "Week 3", title: "Intensiteit", content: "Zwaardere gewichten, lagere reps op kernoefeningen. Toevoegen: 1 hoog-intensiteit cardio. 3-4 sessies." },
              { wk: "Week 4", title: "Test + evalueer", content: "Re-test baseline. Vergelijk vs week 1. Bespreek met trainer wat werkt + week 5+. 3 sessies." },
            ].map((w) => (
              <div key={w.wk} className="border border-neutral-200 rounded-lg p-3 print:border-neutral-300 print:p-2">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider print:text-black">{w.wk}</span>
                  <span className="text-sm font-semibold print:text-xs">{w.title}</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed print:text-[11px]">{w.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition */}
        <section className="mb-6 print:mb-4">
          <h2 className="text-lg font-bold mb-2 print:text-base">Voeding (kort)</h2>
          <p className="text-sm leading-relaxed print:text-xs">{goal.nutrition}</p>
          <p className="text-xs text-neutral-500 mt-2 print:text-[10px]">
            Voor uitgebreid voedingsadvies plan een sessie met Eva (diëtist + PT).
          </p>
        </section>

        {/* Page break for print */}
        <div className="print-page-break" />

        {/* Next steps */}
        <section className="mb-6 print:mb-4 print:mt-6">
          <h2 className="text-lg font-bold mb-3 print:text-base">Volgende stap</h2>
          <ol className="text-sm space-y-2 list-decimal list-inside print:text-xs">
            <li>Bevestig je intake-afspraak via WhatsApp met {trainer}.</li>
            <li>Kom 5 min vroeger voor een rondleiding (Egelantiersgracht 424).</li>
            <li>Draag comfortabele kleding · waterfles · doe optioneel je sportschoenen aan vóór je komt.</li>
            <li>Na de intake: je beslist of je verder wilt. Geen verplichting.</li>
          </ol>
        </section>

        {/* Pricing */}
        <section className="mb-6 print:mb-4 border-t border-neutral-200 pt-5 print:border-neutral-300">
          <h2 className="text-lg font-bold mb-2 print:text-base">Pakketten (na intake)</h2>
          <div className="text-sm space-y-1 print:text-xs">
            <p><strong>Starter</strong> · 4 sessies · €179 (€44,75/sessie) · 10% korting</p>
            <p><strong>Routine</strong> · 8 sessies · €319 (€39,88/sessie) · 15% korting</p>
            <p><strong>Pro</strong> · 12 sessies · €449 (€37,42/sessie) · 20% korting</p>
            <p className="text-xs text-neutral-500 mt-2 print:text-[10px]">
              Pakket-keuze bespreek je na de intake — geen verplichting bij boeking.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 print:bg-transparent print:border-neutral-300 print:p-3">
          <h2 className="text-sm font-bold mb-2 print:text-xs">Bereik ons direct</h2>
          <div className="text-xs space-y-1 print:text-[11px]">
            <p>📱 WhatsApp: +31 6 15 14 79 52</p>
            <p>📞 Bel: +31 6 15 14 79 52 (dagelijks 09-21)</p>
            <p>📍 Egelantiersgracht 424 · 1015 RR Amsterdam</p>
            <p>🌐 sculptclub.nl</p>
          </div>
        </section>

        {/* Print CTA — only visible on screen */}
        <div className="no-print mt-8 text-center">
          <PrintButton label="📄 Print of bewaar als PDF" />
          <p className="mt-2 text-xs text-neutral-500">Tip: in je browser → Bestand → Print → &quot;Save as PDF&quot;</p>
        </div>
      </main>
    </div>
  );
}

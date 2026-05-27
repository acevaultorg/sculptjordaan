"use client";

/**
 * PrintButton — small client component that wraps window.print().
 * Used on /intake-plan + /pt-cheat-sheet (server components that can't
 * inline onClick handlers in Next.js 16+).
 */

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export function PrintButton({ label = "📄 Print or save as PDF", className }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className={
        className ||
        "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm transition-colors"
      }
    >
      {label}
    </button>
  );
}

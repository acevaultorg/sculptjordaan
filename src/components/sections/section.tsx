"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "default" | "muted" | "surface" | "dark";
  id?: string;
  wide?: boolean;
}

const bgMap = {
  default: "",
  muted: "bg-secondary/50",
  surface: "bg-surface",
  dark: "bg-[#0B0907] text-[#EDE5DA]",
};

export function Section({ children, className, bg = "default", id, wide }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", bgMap[bg], className)}>
      <div className={cn("mx-auto px-4 sm:px-6", wide ? "max-w-7xl" : "max-w-5xl")}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  overline,
  title,
  description,
  center = true,
  className,
  as: Tag = "h2",
}: {
  overline?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  // Above-fold heroes (`as="h1"`) render WITHOUT motion entirely.
  //
  // Background: Framer Motion's `whileInView` (used for below-fold sections)
  // doesn't reliably fire its IntersectionObserver for elements already in
  // viewport on initial mount under Next.js 16 + React 19 + framer-motion 12.
  // First fix attempt (2026-05-06 commit 4d00126) switched hero to `animate`
  // on mount, expecting framer-motion to transition initial→animate. Did not
  // work in production: motion.div stayed locked at opacity:0,
  // transform:translateY(19.26px) — animation started but never completed.
  // Verified via Chrome MCP: visitors landed, saw a blank dark void above
  // the fold, bounced within seconds. /nl/studio-huren had 53% bounce + 3s
  // avg visit; /en/find-personal-trainer had 83% bounce + 0s.
  //
  // The animation is a UX nicety; the bug actively destroyed conversion on
  // multiple entry pages. Rendering hero as plain div (no motion at all)
  // eliminates the entire failure mode. Below-fold SectionHeaders keep the
  // scroll-triggered fade-in (no perceived delay since they're invisible
  // until scrolled into view, and below-fold whileInView works fine).
  const isHero = Tag === "h1";
  if (isHero) {
    return (
      <div className={cn("mb-10 sm:mb-14", center && "text-center", className)}>
        {overline && <p className="overline mb-3">{overline}</p>}
        <Tag className="text-[1.625rem] sm:text-4xl lg:text-5xl font-bold text-balance break-words">{title}</Tag>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    );
  }
  // Below-fold scroll-triggered fade-in (replaces framer-motion's whileInView).
  // Plain IntersectionObserver + CSS transition. Lighter than framer-motion +
  // also more reliable per the 2026-05-06 incident (rules/section.tsx comment
  // above) where framer-motion's IntersectionObserver was missing initial-mount
  // viewport elements.
  return (
    <FadeInOnScroll className={cn("mb-10 sm:mb-14", center && "text-center", className)}>
      {overline && <p className="overline mb-3">{overline}</p>}
      <Tag className="text-[1.625rem] sm:text-4xl lg:text-5xl font-bold text-balance break-words">{title}</Tag>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </FadeInOnScroll>
  );
}

function FadeInOnScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in viewport on mount (or IntersectionObserver unsupported),
    // show immediately. Same defensive behavior as the FadeIn fix below.
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 0) + 80 && rect.bottom > -80) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "transition-[opacity,transform] duration-500 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
    >
      {children}
    </div>
  );
}

export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  /** Kept for API compat — animation is now always-visible; delay has no effect. */
  delay?: number;
  className?: string;
}) {
  // Was: motion.div with initial opacity:0 + whileInView opacity:1.
  // Bug (verified live 2026-05-06): for above-fold FadeIns, framer-motion's
  // IntersectionObserver doesn't reliably fire on initial mount in
  // Next.js 16 + React 19 + framer-motion 12. Result: content stays
  // invisible above the fold, devastating bounce rate (e.g. /nl/studio-huren
  // 53% bounce + 3s avg visit, /en/find-personal-trainer 83% bounce + 0s).
  // Fix: render plain div, always visible. The 0.5s fade-in animation
  // is a UX nicety; visibility is a conversion requirement.
  // 121 file usages across the site keep working without caller changes —
  // they just no longer animate in. Acceptable trade-off vs the bug.
  return <div className={className}>{children}</div>;
}

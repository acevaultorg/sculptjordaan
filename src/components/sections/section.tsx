"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  dark: "bg-[#0A0C12] text-white",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-10 sm:mb-14", center && "text-center", className)}
    >
      {overline && <p className="overline mb-3">{overline}</p>}
      <Tag className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</Tag>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

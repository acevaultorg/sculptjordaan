"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  external,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (external || href.startsWith("http") || href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

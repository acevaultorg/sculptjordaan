"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { isAcuityUrl, detectBookingType, trackBeginBooking } from "@/lib/tracking";
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
  onClick,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Auto-track Acuity booking link clicks
    if (isAcuityUrl(href)) {
      const { bookingType, planName } = detectBookingType(href);
      trackBeginBooking(bookingType, planName);
    }
    onClick?.(e);
  };

  if (external || href.startsWith("http") || href.startsWith("https")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

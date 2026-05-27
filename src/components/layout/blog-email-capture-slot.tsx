"use client";

/**
 * BlogEmailCaptureSlot — route-aware mounter for BlogEmailCapture.
 *
 * Renders the email-capture component ONLY on blog routes:
 *   /nl/blog/<post-slug> + /en/blog/<post-slug>
 *
 * Does NOT render on:
 *   - /nl/blog (blog index)
 *   - /en/blog (blog index)
 *   - non-blog routes
 *
 * Page-layout-level mount means every blog post automatically gets
 * the capture without editing each of ~60 individual blog files.
 */

import { usePathname } from "next/navigation";
import { BlogEmailCapture } from "@/components/marketing/blog-email-capture";
import { Section } from "@/components/sections/section";

export function BlogEmailCaptureSlot() {
  const pathname = usePathname() ?? "/";

  // Match /nl/blog/<slug>/ or /en/blog/<slug>/ but NOT the index page itself
  const isBlogPost =
    (pathname.startsWith("/nl/blog/") || pathname.startsWith("/en/blog/")) &&
    !/^\/(nl|en)\/blog\/?$/.test(pathname);

  if (!isBlogPost) return null;

  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <BlogEmailCapture />
      </div>
    </Section>
  );
}

import { Header } from "./header";
import { Footer } from "./footer";
import { BlogEmailCaptureSlot } from "./blog-email-capture-slot";

/**
 * audience: which button colour this page's filled CTAs get in the CTA A/B
 * test (see the end of globals.css). "rental" = trainers renting the studio,
 * "member" = open gym and finding a trainer. Leave it out on mixed pages and
 * set data-audience on the sections instead (the home page does this).
 */
export function PageLayout({
  children,
  audience,
}: {
  children: React.ReactNode;
  audience?: "rental" | "member";
}) {
  return (
    <>
      <Header />
      {/* MobileBottomCTABar (app/layout.tsx) renders its own h-20 mobile
          spacer, so no bottom padding is needed here. (The redundant always-on
          MobileLeadBar was removed 2026-06-20 — two sticky bars overlapped.) */}
      {/* Header is TWO rows (≈109px) below lg and ONE row (≈61px) at lg+ — so
          pt-32 (128px) under lg, pt-20 (80px) at lg+. */}
      <main id="main-content" data-audience={audience} className="flex-1 pt-32 lg:pt-20">
        {children}
        {/* Blog-only inline email-capture — auto-renders after main content
            on /nl/blog/* + /en/blog/* routes only (task E, 2026-05-26). */}
        <BlogEmailCaptureSlot />
      </main>
      <Footer />
    </>
  );
}

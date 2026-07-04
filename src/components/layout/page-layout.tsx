import { Header } from "./header";
import { Footer } from "./footer";
import { BlogEmailCaptureSlot } from "./blog-email-capture-slot";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* MobileBottomCTABar (app/layout.tsx) renders its own h-20 mobile
          spacer, so no bottom padding is needed here. (The redundant always-on
          MobileLeadBar was removed 2026-06-20 — two sticky bars overlapped.) */}
      {/* Header is TWO rows (≈109px) below lg and ONE row (≈61px) at lg+ — so
          pt-32 (128px) under lg, pt-20 (80px) at lg+. */}
      <main id="main-content" className="flex-1 pt-32 lg:pt-20">
        {children}
        {/* Blog-only inline email-capture — auto-renders after main content
            on /nl/blog/* + /en/blog/* routes only (task E, 2026-05-26). */}
        <BlogEmailCaptureSlot />
      </main>
      <Footer />
    </>
  );
}

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
      {/* pt-32 (128px) on all breakpoints: since the 2026-07-04 header redesign
          the header is TWO rows (utility + category tiles ≈ 122px) at every
          breakpoint, not just mobile. */}
      <main id="main-content" className="flex-1 pt-32">
        {children}
        {/* Blog-only inline email-capture — auto-renders after main content
            on /nl/blog/* + /en/blog/* routes only (task E, 2026-05-26). */}
        <BlogEmailCaptureSlot />
      </main>
      <Footer />
    </>
  );
}

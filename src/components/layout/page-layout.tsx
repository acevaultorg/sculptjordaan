import { Header } from "./header";
import { Footer } from "./footer";
import { MobileLeadBar } from "./mobile-lead-bar";
import { BlogEmailCaptureSlot } from "./blog-email-capture-slot";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* pb-20 on mobile: leave room for the sticky MobileLeadBar so the
          footer + page-bottom content isn't covered by the fixed 60px bar.
          md+ has no bar so no padding needed. */}
      <main id="main-content" className="flex-1 pt-20 pb-20 md:pb-0">
        {children}
        {/* Blog-only inline email-capture — auto-renders after main content
            on /nl/blog/* + /en/blog/* routes only (task E, 2026-05-26). */}
        <BlogEmailCaptureSlot />
      </main>
      <Footer />
      <MobileLeadBar />
    </>
  );
}

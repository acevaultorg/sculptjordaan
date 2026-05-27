import { Header } from "./header";
import { Footer } from "./footer";
import { MobileLeadBar } from "./mobile-lead-bar";
import { LeadRescuePopup } from "./lead-rescue-popup";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* pb-20 on mobile: leave room for the sticky MobileLeadBar so the
          footer + page-bottom content isn't covered by the fixed 60px bar.
          md+ has no bar so no padding needed. */}
      <main id="main-content" className="flex-1 pt-20 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileLeadBar />
      {/* LeadRescuePopup — second-chance lead-cap; fires on exit-intent
          (desktop mouseleave) or 30s+timed (mobile fallback). Once per
          session. Routes to match-quiz primary + WhatsApp + Acuity. */}
      <LeadRescuePopup />
    </>
  );
}

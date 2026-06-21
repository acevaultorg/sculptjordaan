import type { Metadata } from "next";

// /nl/social is the operator's private Posting Studio — never index it.
export const metadata: Metadata = {
  title: "Posting Studio — SculptClub",
  robots: { index: false, follow: false },
};

export default function SocialStudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

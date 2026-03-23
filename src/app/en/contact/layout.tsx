import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — SculptClub Amsterdam Jordaan",
  description:
    "Get in touch with SculptClub via WhatsApp, email or phone. Egelantiersgracht 424, Amsterdam Jordaan. We usually reply within 1 hour.",
  alternates: {
    canonical: "/en/contact",
    languages: {
      nl: "/nl/contact",
      en: "/en/contact",
    },
  },
};

export default function ContactLayoutEN({ children }: { children: React.ReactNode }) {
  return children;
}

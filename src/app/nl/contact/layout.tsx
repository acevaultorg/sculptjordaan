import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — SculptClub Amsterdam Jordaan",
  description:
    "Neem contact op met SculptClub via WhatsApp, e-mail of telefoon. Egelantiersgracht 424, Amsterdam Jordaan. Meestal reageren we binnen 1 uur.",
  alternates: {
    canonical: "/nl/contact",
    languages: {
      nl: "/nl/contact",
      en: "/en/contact",
    },
  },
};

export default function ContactLayoutNL({ children }: { children: React.ReactNode }) {
  return children;
}

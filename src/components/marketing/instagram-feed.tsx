"use client";

import Image from "next/image";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/config/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/sculptclub.nl/";

const images = [
  { src: "/images/studio/studio-interior-1.jpeg", alt: "SculptClub studio interior" },
  { src: "/images/trainers/hamish.jpg", alt: "Personal training session" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Professional dumbbells" },
  { src: "/images/trainers/eva.jpg", alt: "Trainer Eva at SculptClub" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack setup" },
  { src: "/images/studio/studio-interior-2.jpeg", alt: "SculptClub gym space" },
];

const t = {
  nl: {
    overline: "Instagram",
    title: "Volg ons op Instagram",
    description: "Bekijk onze studio, trainers en community op Instagram.",
    cta: "Volg @sculptclub.nl",
  },
  en: {
    overline: "Instagram",
    title: "Follow us on Instagram",
    description: "Check out our studio, trainers and community on Instagram.",
    cta: "Follow @sculptclub.nl",
  },
};

export function InstagramFeed({ locale }: { locale: Locale }) {
  const content = t[locale];

  return (
    <Section>
      <SectionHeader
        overline={content.overline}
        title={content.title}
        description={content.description}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.08}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="flex justify-center mt-8">
        <ButtonLink
          href={INSTAGRAM_URL}
          external
          size="lg"
          variant="outline"
        >
          <InstagramIcon className="mr-2 w-4 h-4" />
          {content.cta}
        </ButtonLink>
      </FadeIn>
    </Section>
  );
}

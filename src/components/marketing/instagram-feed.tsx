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

const INSTAGRAM_URL = "https://instagram.com/sculptclubjordaan";

const images = [
  { src: "/images/studio/training-bike-energy.jpg", alt: "Training on assault bike at SculptClub" },
  { src: "/images/studio/facade-sculptclub.jpg", alt: "SculptClub Private Gym entrance at Egelantiersgracht 424 Amsterdam" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang training at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "View from SculptClub to Egelantiersgracht canal Amsterdam" },
  { src: "/images/studio/training-dumbbells-joy.jpg", alt: "Joyful dumbbell training at SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "SculptClub boutique dumbbell rack with plants and vinyl" },
  { src: "/images/studio/training-barbell-dramatic.jpg", alt: "Barbell training at SculptClub" },
  { src: "/images/studio/turf-lane-canal.jpg", alt: "SculptClub turf training lane with canal view" },
  { src: "/images/studio/model-facade-relaxed.jpg", alt: "Athlete at SculptClub Private Gym entrance Egelantiersgracht 424" },
];

const t = {
  nl: {
    overline: "Instagram",
    title: "Volg ons op Instagram",
    description: "Studio, trainers en sessies. Zonder filter.",
    cta: "Volg @sculptclubjordaan",
  },
  en: {
    overline: "Instagram",
    title: "Follow us on Instagram",
    description: "Studio, trainers and sessions. No filter.",
    cta: "Follow @sculptclubjordaan",
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
              className="group relative block aspect-square overflow-hidden"
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
          <InstagramIcon className="w-4 h-4" />
          {content.cta}
        </ButtonLink>
      </FadeIn>
    </Section>
  );
}

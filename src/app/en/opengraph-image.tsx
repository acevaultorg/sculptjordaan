import { ImageResponse } from "next/og";

// English OG image — applies to every /en/* route via Next.js opengraph-image
// inheritance. Mirrors the Dutch generator at src/app/opengraph-image.tsx with
// English-localized strings. Same Satori system-sans fallback rationale
// (woff2 brand fonts not supported by next/og's underlying renderer).
//
// Why a per-locale OG image:
// - Pre-2026-05-20: only one /opengraph-image.tsx existed, in Dutch. EN routes
//   (/en/, /en/become-trainer, /en/studio-rental, etc.) all inherited the
//   Dutch image. LinkedIn shares from English-speaking visitors saw "€12/uur"
//   + "Privé studio voor personal trainers" — language mismatch.
// - With /en/opengraph-image.tsx, every /en/* route now serves an English OG.
//   NL routes (/) still inherit the parent Dutch OG. Operator's trainer-
//   recruitment shares on LinkedIn now land in the recipient's language.
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "SculptClub — Private gym in Amsterdam Jordaan · €12/hour studio rental · 0% commission for trainers";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px 72px 96px",
          background:
            "radial-gradient(ellipse at top right, rgba(234, 88, 12, 0.22) 0%, rgba(14, 12, 10, 0) 55%), linear-gradient(135deg, #0B0907 0%, #1A1410 50%, #0B0907 100%)",
          color: "#EDE5DA",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left accent rail — brand orange */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 16,
            background: "linear-gradient(180deg, #EA580C 0%, #9A3412 100%)",
          }}
        />

        {/* Top row: wordmark + 5★ proof badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#FFFFFF",
            }}
          >
            SCULPT CLUB
          </div>
          {/* Inline SVG stars — ★ glyph renders as tofu in Satori's system sans. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 22px",
              background: "rgba(255, 215, 0, 0.14)",
              borderRadius: 999,
              border: "1px solid rgba(255, 215, 0, 0.5)",
              color: "#fde68a",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#fbbf24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span>5.0 Google</span>
          </div>
        </div>

        {/* Middle: value-prop headline (price-first, scroll-stop) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 1040,
          }}
        >
          {/* Price hook — biggest text on the page */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 140,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -5,
                color: "#FFFFFF",
              }}
            >
              €12
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: 600,
                color: "#A69D98",
                letterSpacing: -1,
              }}
            >
              /hr · 0% commission
            </div>
          </div>
          {/* Sub-headline — what SculptClub IS */}
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 500,
              color: "#A69D98",
              letterSpacing: -0.5,
              lineHeight: 1.2,
              maxWidth: 960,
            }}
          >
            Private studio for personal trainers in the Jordaan, Amsterdam.
          </div>
        </div>

        {/* Bottom row: trust pills + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                background: "rgba(234, 88, 12, 0.22)",
                borderRadius: 999,
                border: "1px solid rgba(234, 88, 12, 0.6)",
                color: "#EDE5DA",
                fontWeight: 600,
              }}
            >
              Free test session
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                background: "rgba(16, 185, 129, 0.14)",
                borderRadius: 999,
                border: "1px solid rgba(16, 185, 129, 0.5)",
                color: "#86efac",
                fontWeight: 600,
              }}
            >
              No contract
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#A69D98",
                fontWeight: 500,
              }}
            >
              Daily 06:30–22:00
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: 1,
            }}
          >
            sculptclub.nl
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

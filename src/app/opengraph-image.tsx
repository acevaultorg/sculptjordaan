import { ImageResponse } from "next/og";

// Satori (next/og's underlying renderer) only supports TTF/OTF, not WOFF2.
// Loading brand fonts from /public/fonts/*.woff2 fails with "Unsupported
// OpenType signature wOF2". Verified 2026-05-16 deploy ERROR. Falling back
// to system sans-serif with explicit weight + letter-spacing styling that
// approximates the brand feel (Inter is the macOS/Windows default sans for
// most users, which is what InstrumentSans is based on anyway). For now this
// is the right trade — getting brand fonts into OG images would require
// converting woff2→ttf + checking-in a duplicate font asset, which doubles
// the font cost for a small social-share polish gain.
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
            "radial-gradient(ellipse at top right, rgba(19, 77, 225, 0.22) 0%, rgba(10, 10, 10, 0) 55%), linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Left accent rail — brand blue */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 16,
            background: "linear-gradient(180deg, #134DE1 0%, #0a3aa0 100%)",
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
              color: "#ffffff",
            }}
          >
            SCULPT CLUB
          </div>
          {/* Star icons rendered as inline SVG — the ★ glyph (U+2605) renders as
              tofu/boxes in Satori's default sans-serif. Inline SVG paths render
              reliably across the system fontset. */}
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
                color: "#ffffff",
              }}
            >
              €12
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                fontWeight: 600,
                color: "#94a3b8",
                letterSpacing: -1,
              }}
            >
              /uur · 0% commissie
            </div>
          </div>
          {/* Sub-headline — what SculptClub IS */}
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 500,
              color: "#cbd5e1",
              letterSpacing: -0.5,
              lineHeight: 1.2,
              maxWidth: 960,
            }}
          >
            Privé studio voor personal trainers in de Jordaan, Amsterdam.
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
                background: "rgba(19, 77, 225, 0.22)",
                borderRadius: 999,
                border: "1px solid rgba(19, 77, 225, 0.6)",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Eerste test gratis
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
              Geen contract
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 22px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#cbd5e1",
                fontWeight: 500,
              }}
            >
              Dagelijks 06:30–22:00
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
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

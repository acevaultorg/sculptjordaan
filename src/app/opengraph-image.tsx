import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Edge runtime can't read filesystem — use Node runtime so brand fonts (Syne
// for display + Instrument Sans for body) load reliably into the OG image.
// Without these, ImageResponse falls back to a generic sans-serif and the
// social preview looks off-brand on Twitter/LinkedIn/WhatsApp shares.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "SculptClub — Private gym in Amsterdam Jordaan · €12/hour studio rental · 0% commission for trainers";

export default async function OgImage() {
  // Load brand fonts from /public/fonts so the OG image text matches site typography.
  const syneFont = await readFile(
    path.join(process.cwd(), "public/fonts/Syne-Variable.woff2"),
  );
  const instrumentSansFont = await readFile(
    path.join(process.cwd(), "public/fonts/InstrumentSans-Variable.woff2"),
  );

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
          fontFamily: "InstrumentSans, sans-serif",
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
              fontFamily: "Syne, sans-serif",
              letterSpacing: 1.5,
              color: "#ffffff",
            }}
          >
            SCULPT CLUB
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: "rgba(255, 215, 0, 0.12)",
              borderRadius: 999,
              border: "1px solid rgba(255, 215, 0, 0.45)",
              color: "#fde68a",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            ★★★★★ 5.0 Google
          </div>
        </div>

        {/* Middle: value-prop headline (price-first, scroll-stop) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1040,
          }}
        >
          {/* Price hook — biggest text on the page, brand-blue accent */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 132,
                fontWeight: 800,
                fontFamily: "Syne, sans-serif",
                lineHeight: 0.9,
                letterSpacing: -4,
                color: "#ffffff",
              }}
            >
              €12
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 46,
                fontWeight: 600,
                fontFamily: "Syne, sans-serif",
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
              fontSize: 38,
              fontWeight: 500,
              color: "#cbd5e1",
              letterSpacing: -0.5,
              lineHeight: 1.2,
              maxWidth: 920,
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
                background: "rgba(19, 77, 225, 0.18)",
                borderRadius: 999,
                border: "1px solid rgba(19, 77, 225, 0.55)",
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
                background: "rgba(16, 185, 129, 0.12)",
                borderRadius: 999,
                border: "1px solid rgba(16, 185, 129, 0.4)",
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
              fontSize: 26,
              fontWeight: 700,
              fontFamily: "Syne, sans-serif",
              color: "#ffffff",
              letterSpacing: 0.5,
            }}
          >
            sculptclub.nl
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syneFont,
          style: "normal",
          weight: 700,
        },
        {
          name: "InstrumentSans",
          data: instrumentSansFont,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}

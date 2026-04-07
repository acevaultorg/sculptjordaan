import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SculptClub — Boutique Personal Training Amsterdam Jordaan";

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
          padding: "80px 88px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent rail */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 16,
            background: "#134DE1",
          }}
        />

        {/* Top: brandmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -0.5,
            color: "#ffffff",
          }}
        >
          SculptClub
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -2.5,
              color: "#ffffff",
              maxWidth: 1000,
            }}
          >
            Boutique Personal Training
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "#94a3b8",
              letterSpacing: -0.5,
            }}
          >
            Amsterdam Jordaan
          </div>
        </div>

        {/* Bottom: proof row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: "rgba(19, 77, 225, 0.15)",
                borderRadius: 999,
                border: "1px solid rgba(19, 77, 225, 0.4)",
                color: "#ffffff",
              }}
            >
              ★ 5.0 Google
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Daily 06:30 – 22:00
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
            sculptclub.nl
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

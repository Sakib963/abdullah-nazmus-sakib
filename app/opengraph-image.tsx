import { ImageResponse } from "next/og";

// Static social-share card (1200×630) generated at build time.
// Replaces the missing /og-image.png so every share renders a real preview.
export const alt = "Abdullah Nazmus Sakib — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0f0c1c 0%, #161126 55%, #1d1533 100%)",
          color: "#ece5fc",
          fontFamily: "sans-serif",
        }}
      >
        {/* soft lavender glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(199,185,245,0.30) 0%, rgba(199,185,245,0) 70%)",
            display: "flex",
          }}
        />

        {/* top row: role + location */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(199,185,245,0.35)",
              background: "rgba(199,185,245,0.08)",
              color: "#c7b9f5",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              color: "#aea8be",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Dhaka, Bangladesh
          </div>
        </div>

        {/* name + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Abdullah Nazmus Sakib
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              color: "#aea8be",
            }}
          >
            <span style={{ color: "#c9e8ee" }}>{"// "}</span>
            <span style={{ marginLeft: 12 }}>
              Building enterprise web systems, clean APIs &amp; production UIs
            </span>
          </div>
        </div>

        {/* bottom row: stack + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {["Angular", "Node.js", "PostgreSQL", "TypeScript"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#ece5fc",
                  fontSize: 26,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{ display: "flex", color: "#c7b9f5", fontSize: 30, fontWeight: 600 }}
          >
            sakib.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

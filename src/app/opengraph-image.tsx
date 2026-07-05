import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Harsh Tuli — Full-Stack Developer & AI Engineer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #0d2b1f 0%, #09090b 65%)",
          color: "#e4e4e7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#34d399",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Hi, my name is
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: -3,
            marginTop: 16,
            color: "#fafafa",
          }}
        >
          Harsh Tuli
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 18,
            color: "#a1a1aa",
          }}
        >
          Full-Stack Developer · AI Engineer — Mumbai, India
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 44,
          }}
        >
          {["Shopify", "Angular", "Next.js", "AI / ASR"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(52,211,153,0.4)",
                background: "rgba(52,211,153,0.08)",
                color: "#6ee7b7",
                fontSize: 24,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

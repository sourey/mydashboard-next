import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saurav Sitaula - Senior Full Stack Software Engineer from Nepal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFFEF5 0%, #FFF9DB 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #0A0A0A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.1,
          }}
        />

        {/* Decorative shapes */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            background: "#FFE500",
            border: "6px solid #0A0A0A",
            transform: "rotate(12deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 60,
            width: 100,
            height: 100,
            background: "#FF6B6B",
            border: "6px solid #0A0A0A",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 100,
            width: 60,
            height: 120,
            background: "#A855F7",
            border: "6px solid #0A0A0A",
          }}
        />

        {/* Main Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "60px 80px",
            border: "8px solid #0A0A0A",
            boxShadow: "16px 16px 0px #0A0A0A",
            position: "relative",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            <div
              style={{
                background: "#C4F82A",
                color: "#0A0A0A",
                padding: "8px 20px",
                fontSize: 16,
                fontWeight: 900,
                textTransform: "uppercase",
                border: "4px solid #0A0A0A",
              }}
            >
              Full Stack Engineer
            </div>
            <div
              style={{
                background: "#FF6B6B",
                color: "white",
                padding: "8px 20px",
                fontSize: 16,
                fontWeight: 900,
                textTransform: "uppercase",
                border: "4px solid #0A0A0A",
              }}
            >
              Nepal 🇳🇵
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#0A0A0A",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 0.9,
              textAlign: "center",
            }}
          >
            SAURAV
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "transparent",
              textTransform: "uppercase",
              letterSpacing: "-2px",
              lineHeight: 0.9,
              WebkitTextStroke: "3px #0A0A0A",
              textAlign: "center",
            }}
          >
            SITAULA
          </div>

          {/* Skills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 30,
            }}
          >
            {["React", "Node.js", "TypeScript", "Next.js"].map((skill) => (
              <div
                key={skill}
                style={{
                  background: "#0A0A0A",
                  color: "white",
                  padding: "8px 16px",
                  fontSize: 16,
                  fontWeight: 700,
                  border: "3px solid #0A0A0A",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            fontWeight: 700,
            color: "#0A0A0A",
            fontFamily: "monospace",
          }}
        >
          sauravsitaula.com.np
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #fce4ec 0%, #f48fb1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "Georgia, serif",
          }}
        >
          S
        </span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}

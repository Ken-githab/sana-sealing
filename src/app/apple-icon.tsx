import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          position: "relative",
        }}
      >
        {/* 外側の円（シーリングスタンプ風） */}
        <div
          style={{
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "4px solid #e91e8c55",
            background: "linear-gradient(145deg, #fce4ec, #f06292)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px #f0629244",
            position: "relative",
          }}
        >
          {/* 内側の装飾円 */}
          <div
            style={{
              position: "absolute",
              width: 110,
              height: 110,
              borderRadius: "50%",
              border: "2px dashed #ffffff88",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          {/* S の文字 */}
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "Georgia, serif",
              letterSpacing: "-2px",
              textShadow: "0 2px 8px #c2185b66",
            }}
          >
            S
          </span>
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}

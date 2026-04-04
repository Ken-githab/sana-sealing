import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana.Sealing",
  description:
    "心をつなぐ、一滴のワックス。シーリングスタンプ作家 Sana のポートフォリオサイト。",
  openGraph: {
    title: "Sana.Sealing",
    description: "心をつなぐ、一滴のワックス。",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    title: "Sana.Sealing",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

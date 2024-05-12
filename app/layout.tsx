import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "TakaOriginal®", template: "%s | TakaOriginal" },
  description: "TakaOriginal® is a brand that sells high-quality products.",
  icons:
    "https://takaoriginal.com/cdn/shop/files/1ab05c48d91765e7e83f8187d7404888_cf348a43-f472-4511-b981-65a013ebad28.png?crop=center&height=32&v=1713709913&width=32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

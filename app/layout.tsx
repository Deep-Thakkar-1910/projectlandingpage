import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "NanaHana®", template: "%s | NanaHana" },
  description: "NanaHana® is a brand that sells high-quality products.",
  icons: "/Logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

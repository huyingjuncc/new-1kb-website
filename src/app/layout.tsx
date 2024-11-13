import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdaptiveFontSize from "@/components/adaptiveFontSize";


export const metadata: Metadata = {
  title: "1kB Capital",
  description: "1kB Capital",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`text-white antialiased`}>
        <AdaptiveFontSize></AdaptiveFontSize>
        {children}
      </body>
    </html>
  );
}

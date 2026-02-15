import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";
// Ensures all gallery assets are part of the build dependency graph for deploy
import "./gallery-assets";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Landscaping Brothers | Professional Landscaping & Lawn Care",
  description:
    "Transform your outdoor space with The Landscaping Brothers. Lawn care, design, hardscaping, and maintenance for residential and commercial properties.",
  icons: {
    icon: "/gallery/landscaping-bros-mountain-white.png",
    apple: "/gallery/landscaping-bros-mountain-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} min-h-full antialiased font-sans overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

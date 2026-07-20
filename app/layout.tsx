import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "https://dariotana.it"),
  title: {
    default: "Dario Tana — Consulente e Docente E-commerce",
    template: "%s | Dario Tana",
  },
  description:
    "Consulenza e formazione e-commerce indipendenti per prendere decisioni migliori. Oltre 20 anni di esperienza diretta nel commercio elettronico.",
  keywords: ["consulente ecommerce", "formazione ecommerce", "docente ecommerce", "Dario Tana"],
  authors: [{ name: "Dario Tana" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://dariotana.it",
    siteName: "Dario Tana",
    title: "Dario Tana — Consulente e Docente E-commerce",
    description: "Consulenza e formazione e-commerce indipendenti per prendere decisioni migliori.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${geistMono.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
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
    "Consulenza e formazione e-commerce per prendere decisioni migliori. Oltre 20 anni di esperienza nel commercio elettronico.",
  keywords: ["consulente ecommerce", "formazione ecommerce", "docente ecommerce", "Dario Tana", "DT Ecommerce Consulting"],
  authors: [{ name: "Dario Tana" }],
  creator: "Dario Tana",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://dariotana.it",
    siteName: "Dario Tana",
    title: "Dario Tana — Consulente e Docente E-commerce",
    description:
      "Consulenza e formazione e-commerce per prendere decisioni migliori. Oltre 20 anni di esperienza nel commercio elettronico.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Tana — Consulente e Docente E-commerce",
    description:
      "Consulenza e formazione e-commerce per prendere decisioni migliori.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhenixHive | Enterprise Cybersecurity & Resilient Defense",
  description:
    "PhenixHive helps businesses defend systems, networks, applications, and sensitive data against advanced cyber threats. Penetration testing, vulnerability assessments, cloud hardening, and security advisory.",
  keywords: [
    "PhenixHive",
    "cybersecurity startup",
    "penetration testing",
    "vulnerability assessment",
    "network security",
    "web application security",
    "cloud security",
    "incident response",
    "ISO 27001",
    "SOC 2",
    "cyber defense Nigeria",
    "threat modeling",
  ],
  authors: [{ name: "PhenixHive Security Advisory" }],
  creator: "PhenixHive",
  publisher: "PhenixHive",
  metadataBase: new URL("https://phenixhive.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhenixHive | Enterprise Cybersecurity & Resilient Defense",
    description:
      "Protect your business systems, networks, applications, and data with proactive, industry-standard cybersecurity services from PhenixHive.",
    url: "https://phenixhive.com",
    siteName: "PhenixHive",
    images: [
      {
        url: "/logo-emblem.png",
        width: 800,
        height: 800,
        alt: "PhenixHive Cybersecurity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhenixHive | Enterprise Cybersecurity & Resilient Defense",
    description:
      "Proactive cybersecurity solutions for modern organizations: penetration testing, cloud hardening, vulnerability scanning, and incident response.",
    images: ["/logo-emblem.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} bg-[#070B14] text-slate-100 font-sans antialiased selection:bg-red-500/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

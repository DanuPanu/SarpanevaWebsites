import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/hero5-header";
import FooterSection from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarpaneva Websites – Verkkosivut yrityksille ja yrittäjille",
  description:
    "Räätälöityjä ja nopeita verkkosivuratkaisuja pienyrittäjille ja yrityksille. Toteutan modernit sivut opiskelun ohella nopeasti ja selkeästi.",
  keywords: [
    "verkkosivut",
    "nettisivut",
    "web design",
    "react",
    "next.js",
    "sivustot yrityksille",
    "opiskelija web developer",
  ],
  authors: [{ name: "Daniel Sarpaneva" }],
  creator: "Daniel Sarpaneva",
  metadataBase: new URL("https://sarpanevawebsites.com"), // Vaihda oma domain kun valmis
  openGraph: {
    title: "Sarpaneva Websites",
    description:
      "Modernit ja nopeat verkkosivut pienyrittäjille ja yrityksille – opiskelijan tekemänä.",
    url: "https://sarpanevawebsites.com",
    siteName: "Sarpaneva Websites",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="w5c4H5nZV57UHsQg2pD4QhsEZUjIND5KOeeKUbG-Wps" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sarpaneva Websites",
              url: "https://sarpanevawebsites.com",
            }),
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <HeroHeader />
        <main className="flex flex-col flex-grow">
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}

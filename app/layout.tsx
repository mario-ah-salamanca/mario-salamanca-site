import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const siteUrl = "https://mario-ah-salamanca.com";
const siteTitle = "Mario Salamanca | Software Engineer & Systems Builder";
const siteDescription =
  "I help founders, creators, and small teams turn messy ideas into clear websites, workflows, prototypes, and digital systems.";
const ogImage = {
  url: "/og/mario-salamanca-og.png",
  width: 1200,
  height: 630,
  alt: "Mario Salamanca - Software Engineer, Systems Builder, Creative Founder",
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Mario Salamanca",
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: {
      url: ogImage.url,
      alt: ogImage.alt,
    },
  },
  icons: {
    icon: [
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/icons/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/icons/favicon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/icons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

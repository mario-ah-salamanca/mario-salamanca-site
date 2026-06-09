import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

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

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "mario-salamanca-site";
const basePath = isGitHubActions ? `/${repositoryName}` : "";
const withBasePath = (path: `/${string}`) => `${basePath}${path}`;

export const metadata: Metadata = {
  title: "Mario Salamanca | Software Developer & Systems Builder",
  description:
    "I help founders, creators, and small teams turn messy ideas into clear websites, workflows, prototypes, and digital systems.",
  icons: {
    icon: [
      {
        url: withBasePath("/icons/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-48x48.png"),
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-64x64.png"),
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-128x128.png"),
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: withBasePath("/icons/favicon-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: withBasePath("/icons/apple-touch-icon.png"),
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
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Inventory Management | Next.js, Prisma & PostgreSQL";
const description =
  "Full-stack inventory management app built with Next.js, TypeScript, Tailwind CSS, Prisma and PostgreSQL. Track products, monitor stock levels and analyse inventory trends from a secure dashboard.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Inventory Management",
  },
  description,
  applicationName: "Inventory Management",
  keywords: [
    "inventory management",
    "stock tracking",
    "dashboard",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
  ],
  authors: [
    {
      name: "Mohamed Abdelbaset",
      url: "https://mohamed-abdelbaset-portfolio.vercel.app",
    },
  ],
  creator: "Mohamed Abdelbaset",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Inventory Management",
    title,
    description,
    images: [
      {
        url: "/inventory-cover.png",
        width: 1867,
        height: 922,
        alt: "Inventory Management dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/inventory-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme>{children}</StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}

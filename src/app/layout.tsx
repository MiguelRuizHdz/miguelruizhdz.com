'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio | Miguel Angel Ruiz Hernandez</title>
        <meta name="description" content="Software Engineer & Solutions Architect specialized in .NET, Next.js, and scalable cloud solutions." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miguelruizhdz.com/" />
        <meta property="og:title" content="Miguel Angel Ruiz Hernandez | Portfolio" />
        <meta property="og:description" content="Senior Software Engineer building high-performance solutions." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://miguelruizhdz.com/" />
        <meta property="twitter:title" content="Miguel Angel Ruiz Hernandez | Portfolio" />
        <meta property="twitter:description" content="Senior Software Engineer building high-performance solutions." />
        <meta property="twitter:image" content="/og-image.png" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

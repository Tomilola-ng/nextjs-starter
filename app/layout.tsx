import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { siteConfig } from "@/lib/site";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const heading = Geist_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
        className={`${body.variable} ${heading.variable} antialiased`}>
      <body
        className={`${body.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

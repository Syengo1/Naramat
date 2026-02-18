import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// 1. Load the fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Naramat Academy | Determined to Excel",
  description: "A premier mixed day primary school in Ngong, Kajiado North.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-naramat-surface text-gray-900 antialiased`}>
        <Navbar />
        <main className="pt-16">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
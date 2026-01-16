import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const myFont = localFont({
  src: "../public/Helvetica.ttf",
});

export const metadata: Metadata = {
  title: "26labs",
  description: "Just Greate Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="bg-mainBg ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

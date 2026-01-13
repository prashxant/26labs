import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src:"../public/Helvetica.ttf"
})

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
      <body
      >
        {children}
      </body>
    </html>
  );
}

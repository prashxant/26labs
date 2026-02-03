import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import ScrollProgress from "@/components/shared/ScroolProcress";
import { Footer } from "@/components/shared/Footer Section/Footer";
import { FooterSvg } from "@/components/icons/footerSvg";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "26labs",
  description: "Just Great Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openSans.variable} ${roboto.variable}`}
    >
      <body className="bg-[#F5F5F5] font-sans antialiased ">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 rounded bg-blue1 px-10 py-2 text-sm shadow"
        >
          Skip to main content
        </a>
        <header>
          <Navbar />
        </header>
        <ScrollProgress aria-hidden="true" />
        <main id="main">{children}</main>
        <footer className="relative">
          {/* <FooterSvg/> */}
             <Footer />
        </footer>
        <Toaster className="" />
      </body>
    </html>
  );
}

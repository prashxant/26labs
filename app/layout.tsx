import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar/Navbar";
import ScrollProgress from "@/components/layout/scrollProgress";
import { Footer } from "@/components/layout/footerSection/Footer";
import { FooterSvg } from "@/components/icons/footerSvg";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import "@/instrumentation-client";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "26labs",
  url: "https://26labs.live",
  logo: "https://26labs.live/LogoOne.svg",
  description:
    "26labs builds high-performance websites and growth systems for businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://26labs.live/contact",
  },
};

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
  title: "26labs | Creating the Future of Web Design",
  description: "Web design and visibility optimization that turns visitors into revenue.",
  alternates: {
    canonical: "https://26labs.live/"
  }
}

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="bg-[#F5F5F5] font-sans antialiased ">
        <PostHogProvider>
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
          <footer className="relative sm:py-20 overflow-hidden">
            <FooterSvg />
            <Footer />
          </footer>
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}

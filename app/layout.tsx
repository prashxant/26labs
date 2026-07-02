import type { Metadata } from "next";
import { Open_Sans, Roboto, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
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

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
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
  description:
    "Web design and visibility optimization that turns visitors into revenue.",
  alternates: {
    canonical: "https://26labs.live/",
  },
  openGraph: {
    title: "26labs | Web Design & Growth Optimization",
    description:
      "We create high-converting websites with AI-driven targeting and SEO optimization.",
    url: "https://26labs.live/",
    type: "website",
    images: [
      {
        url: "https://26labs.live/LogoOne.svg",
        width: 400,
        height: 400,
        alt: "26labs - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "26labs | Web Design & Growth Optimization",
    description: "High-converting websites with AI-driven targeting.",
    images: ["https://26labs.live/LogoOne.svg"],
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
      suppressHydrationWarning
      className={`${openSans.variable} ${roboto.variable} ${pressStart2P.variable}`}
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
          {children}
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}

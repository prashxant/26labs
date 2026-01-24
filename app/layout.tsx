import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar/Navbar";
import ScrollProgress from "@/components/shared/ScroolProcress";



export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
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
    <html lang="en" className={openSans.variable}>
      <body className="bg-[#F5F5F5] font-sans antialiased ">
        <Navbar/>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

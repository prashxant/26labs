import { Navbar } from "@/components/layout/navbar/Navbar";
import ScrollProgress from "@/components/layout/scrollProgress";
import { Footer } from "@/components/layout/footerSection/Footer";
import { FooterSvg } from "@/components/icons/footerSvg";
import CursorTrail from "@/components/layout/CursorTrail";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CursorTrail />
      <header>
        <Navbar />
      </header>
      <ScrollProgress aria-hidden="true" />
      <main id="main">{children}</main>
      <footer className="relative sm:py-20 overflow-hidden">
        <FooterSvg />
        <Footer />
      </footer>
    </>
  );
} 
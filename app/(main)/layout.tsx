import { Navbar } from "@/components/layout/navbar/Navbar";
import ScrollProgress from "@/components/layout/scrollProgress";
import { Footer } from "@/components/layout/footerSection/Footer";
import { FooterSvg } from "@/components/icons/footerSvg";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
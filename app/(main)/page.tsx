import dynamic from "next/dynamic";

import { Hero } from "@/components/shared/Hero Section/Hero";
import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";
import Brand from "@/components/shared/Brand Section/Brand";
import Fueling from "@/components/shared/Fueling Section/Fueling";
import Need from "@/components/shared/Need Section/Need";
import Growth from "@/components/shared/Growth Section/Growth";
import ScrollProgress from "@/components/shared/ScroolProcress";

// Dynamically import GSAP-heavy component for better code splitting
const HorizontalScrollSection = dynamic(
  () => import("@/components/sections/HorizontalScroll")
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress aria-hidden="true" />
      <Hero />
      <ToolkitPage />
      <LiveProductPage />
      <Brand />

      {/* Avoid rendering on small screens */}
      <div className="hidden sm:block">
        <HorizontalScrollSection />
      </div>

      <Fueling />
      <Need />
      <Growth />
    </div>
  );
}

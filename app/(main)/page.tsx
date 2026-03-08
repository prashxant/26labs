

import { Hero } from "@/components/home/heroSection/Hero";
import { LiveProductPage } from "@/components/home/liveProduct/LiveProductPage";
import ToolkitPage from "@/components/home/toolkit/ToolkitPage";
import Fueling from "@/components/home/fuelingSection/Fueling";
import Need from "@/components/home/needSection/Need";
import Growth from "@/components/home/growthSection/Growth";
import ScrollProgress from "@/components/layout/scrollProgress";
import { Brand } from "@/components/home/brandSection/Brand";


export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress aria-hidden="true" />
      <Hero />
      <ToolkitPage />
      <LiveProductPage />
      <Brand />
      <Fueling />
      <Need />
      <Growth />
    </div>
  );
}

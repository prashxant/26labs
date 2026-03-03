

import { Hero } from "@/components/shared/Hero Section/Hero";
import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";
import Fueling from "@/components/shared/Fueling Section/Fueling";
import Need from "@/components/shared/Need Section/Need";
import Growth from "@/components/shared/Growth Section/Growth";
import ScrollProgress from "@/components/shared/ScroolProcress";
import { Brand } from "@/components/shared/Brand Section/Brand";


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


import { Hero } from "@/components/shared/Hero Section/Hero";
import HorizontalScrollSection from "@/components/sections/HorizontalScroll";

import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";
import  Brand  from "@/components/shared/Brand Section/Brand";
import Fueling from "@/components/shared/Fueling Section/Fueling";



export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <ToolkitPage />
        <LiveProductPage />
        <Brand />
        <HorizontalScrollSection />
        <Fueling />
      </main>
    </>
  );
}



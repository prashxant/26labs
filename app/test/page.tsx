
import { Hero } from "@/components/shared/Hero Section/Hero";
import HorizontalScrollSection from "@/components/sections/HorizontalScroll";

import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";


export default function Home() {
  return (
    <div>
      <Hero />
      <ToolkitPage />
      <LiveProductPage />
      <HorizontalScrollSection />
    </div>
  );
}

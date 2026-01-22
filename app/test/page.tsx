
import { Hero } from "@/components/shared/Hero Section/Hero";
import HorizontalScrollSection from "@/components/sections/HorizontalScroll";

import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";
import  Brand  from "@/components/shared/Brand Section/Brand";


export default function Home() {
  return (
    <div >
      
      <Hero />
        <ToolkitPage/>
        <LiveProductPage/>
        <Brand/>
           <HorizontalScrollSection />
        
    </div>
  );
}
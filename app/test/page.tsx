import { Container } from "@/components/shared/Container";
import { Hero } from "@/components/shared/Hero Section/Hero";
import { LiveProductPage } from "@/components/shared/Live Product/LiveProductPage";
import ToolkitPage from "@/components/shared/Toolkit/ToolkitPage";


export default function Home() {
  return (
    <div >

        <Hero />
        <ToolkitPage/>
        <LiveProductPage/>
    </div>
  );
}

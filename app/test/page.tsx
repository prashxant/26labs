import { Card } from "@/components/cards/Card";
import { Container } from "@/components/shared/Container";
import { GrowthPlan } from "@/components/sections/GrowthPlan";
import { Hero } from "@/components/sections/Hero";
import { Third } from "@/components/sections/Third";
import { Sliding } from "@/components/sections/Sliding";
import HorizontalScrollSection from "@/components/sections/HorizontalScroll";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <Card />
      </Container>
      <HorizontalScrollSection />
      <Container>
        <Third />
        <Sliding />
        <GrowthPlan />
      </Container>
    </div>
  );
}
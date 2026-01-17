
import { Card } from "@/components/cards/Card";
import { Container } from "@/components/shared/Container";
import { GrowthPlan } from "@/components/sections/GrowthPlan";
import { Hero } from "@/components/sections/Hero";
import { Third } from "@/components/sections/Third";
import HorizontalScrollSection from "@/components/layout/HorizontalScrollSection";


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
        <GrowthPlan />
      </Container>
    </div>
  );
}

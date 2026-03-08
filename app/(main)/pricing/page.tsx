import { ComparisonTable } from "@/components/pricing/pricing/Comparision";
import { GrowthPel } from "@/components/pricing/pricing/GrowthPel";
import { PriceSlider } from "@/components/pricing/pricing/PriceSlider";
import { PricingHero } from "@/components/pricing/pricing/PricingHero";
import ScrollProgress from "@/components/layout/scrollProgress";

export default function page() {
  return (
    <main className="min-h-screen p-4">
       <ScrollProgress aria-hidden="true" />
      <PricingHero />
      <GrowthPel />
      <PriceSlider />
      <ComparisonTable />
    </main>
  );
}

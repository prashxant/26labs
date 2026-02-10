import { ComparisonTable } from "@/components/shared/Pricing/Comparision";
import { GrowthPel } from "@/components/shared/Pricing/GrowthPel";
import { PriceSlider } from "@/components/shared/Pricing/PriceSlider";
import { PricingHero } from "@/components/shared/Pricing/PricingHero";
import ScrollProgress from "@/components/shared/ScroolProcress";

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

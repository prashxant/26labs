import { GrowthPel } from "@/components/shared/Pricing/GrowthPel";
import { PriceSlider } from "@/components/shared/Pricing/PriceSlider";
import { PricingHero } from "@/components/shared/Pricing/PricingHero";

export default function page() {
  return (
    <main className="min-h-screen p-4">
      <PricingHero />
      <GrowthPel />
      <PriceSlider />
    </main>
  );
}

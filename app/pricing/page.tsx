import { PriceSlider } from "@/components/shared/Pricing/PriceSlider";
import { PricingHero } from "@/components/shared/Pricing/PricingHero";

export default function page() {
  return (
    <main className="min-h-screen md:pt-20">
      <PricingHero />
      <PriceSlider />
    </main>
  );
}

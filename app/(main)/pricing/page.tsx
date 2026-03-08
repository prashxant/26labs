import { ComparisonTable } from "@/components/pricing/pricing/Comparision";
import { GrowthPel } from "@/components/pricing/pricing/GrowthPel";
import { PriceSlider } from "@/components/pricing/pricing/PriceSlider";
import { PricingHero } from "@/components/pricing/pricing/PricingHero";
import ScrollProgress from "@/components/layout/scrollProgress";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Web Design & Development Services | 26labs",
  description:
    "Transparent pricing for web design, development and growth services. From starter plans at $249 to enterprise custom quotes.",
  alternates: {
    canonical: "https://26labs.live/pricing",
  },
};

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

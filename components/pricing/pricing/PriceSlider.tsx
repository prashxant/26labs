"use client";

import { PriceCard } from "./PriceCard";
import { PRICING_CARDS } from "./pricingData";
import { useLocalizedPricing } from "./useLocalizedPricing";

export const PriceSlider = () => {
  const { currency, formatPrice } = useLocalizedPricing();

  return (
    <div
      className="
        mx-auto lg:my-24 my-8 px-4
        flex flex-col gap-8
        sm:gap-10
        md:flex-row md:flex-wrap md:justify-center
        lg:flex-nowrap lg:gap-6
        max-w-7xl
      "
    >
      {PRICING_CARDS.map((card) => (
        <PriceCard
          key={card.key}
          title={card.title}
          displayPrice={formatPrice(card.priceUsd, card.priceLabel)}
          priceUsd={card.priceUsd}
          currency={currency}
          description={card.description}
          features={card.features}
        />
      ))}
    </div>
  );
};

import { PriceCard } from "./PriceCard";
import { PRICING_CARDS } from "./pricingData";

export const PriceSlider = () => {
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
          key={card.price}
          title={card.title}
          price={card.price}
          description={card.description}
          features={card.features}
        />
      ))}
    </div>
  );
};

"use client";

import { useRouter } from "next/navigation";

import { Tick } from "@/components/icons/Tick";

const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

type PriceCardProps = {
  title: string;
  displayPrice: string;
  priceUsd: number | null;
  currency: string;
  description: string;
  features: string[];
};

export const PriceCard = ({
  title,
  displayPrice,
  priceUsd,
  currency,
  description,
  features,
}: PriceCardProps) => {
  const router = useRouter();

  const handleGetStarted = () => {
    trackEvent("pricing_plan_selected", {
      plan_name: title,
      plan_price: displayPrice,
      plan_price_usd: priceUsd,
      display_currency: currency,
      features_count: features.length,
    });

    router.push("/contact");
  };
  return (
    <div
      className="
        flex flex-col h-full
        w-full sm:max-w-85
        transition-transform duration-300
        md:hover:scale-105
      "
    >
      <h3
        className="
          text-lg sm:text-xl md:text-2xl
          font-semibold mb-4 text-center
        "
      >
        {title}
      </h3>

      <div className="bg-linear-to-b from-[#8CA9FF] to-[#FFF0E7] p-1 rounded-md">
        <div
          className="
            flex flex-col h-full
            p-4 sm:p-5 md:p-6
            rounded-md
            bg-[#FFF0E7]
          "
        >
          <div className="flex flex-col justify-start min-h-27.5 sm:min-h-30">
            <p className="text-sm font-semibold sm:text-base pl-1">for</p>

            <p
              className="
                text-[#3766F0] font-bold leading-none
                text-3xl sm:text-4xl md:text-[42px]
                wrap-break-word
              "
            >
              {displayPrice}
              <span className="ml-1 text-sm sm:text-base text-black">
                /project
              </span>
            </p>

            <p className="text-[11px] sm:text-xs pt-2 pl-2 max-w-65">
              {description}
            </p>
          </div>

          <ul
            className="
              flex-1 sm:min-h-55
              space-y-2 sm:space-y-2.5
              my-8 sm:my-10 md:my-12
            "
          >
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Tick />
                <span className="text-xs sm:text-sm leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleGetStarted}
            className="
              mt-auto mx-auto
              w-36 sm:w-40
              rounded-lg
              bg-blue1
              p-3 sm:p-4
              text-sm sm:text-base
              font-bold
              transition-[background-color,box-shadow,transform]
              hover:bg-blue2
              active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue2
            "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

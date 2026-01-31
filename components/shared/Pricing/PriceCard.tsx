import { Tick } from "@/components/icons/Tick";

type PriceCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

export const PriceCard = ({
  title,
  price,
  description,
  features,
}: PriceCardProps) => {
  return (
    <div
      className="
        flex flex-col h-full
        w-full sm:max-w-[340px]
        transition-transform duration-300
        md:hover:scale-105
      "
    >
      {/* Title */}
      <h3
        className="
          text-lg sm:text-xl md:text-2xl
          font-bold mb-4 text-center
        "
      >
        {title}
      </h3>

      {/* Card */}
      <div
        className="
          flex flex-col h-full
          p-4 sm:p-5 md:p-6
          border-[#8CA9FF] border-4
          shadow-xl rounded-md
          bg-[#FFF0E7]
        "
      >
        {/* Header */}
        <div className="flex flex-col justify-start min-h-[110px] sm:min-h-[120px]">
          <p className="text-sm sm:text-base pl-1">for</p>

          <p
            className="text-[#3766F0] font-bold leading-none
            text-3xl sm:text-4xl md:text-[46px]"
          >
            {price}
            <span className="ml-1 text-sm sm:text-base text-black">
              /project
            </span>
          </p>

          <p className="text-[11px] sm:text-xs pt-2 pl-2 max-w-[260px]">
            {description}
          </p>
        </div>

        {/* Features */}
        <ul
          className="
            flex-1 min-h-[220px]
            space-y-2 sm:space-y-2.5
            my-8 sm:my-10 md:my-12
          "
        >
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Tick />
              <span className="text-xs sm:text-sm leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="
            mt-auto mx-auto
            w-36 sm:w-40
            rounded-lg
            bg-blue1
            p-3 sm:p-4
            text-sm sm:text-base
            font-bold
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

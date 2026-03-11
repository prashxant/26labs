import Link from "next/link";
import React from "react";

export const PricingResCon = () => {
  return (
    <div className="mx-auto max-w-7xl w-full px-4 pb-10 sm:px-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 text-center text-[18px] sm:text-xl md:text-2xl lg:text-[31px] font-normal font-family-roboto">
        <Link href='/pricing'>Pricing</Link>
        <Link href='/resources'>Resource</Link>
        <Link href='/contact'>Contact</Link>
      </div>

      <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-[20px] text-black/80 font-family-roboto">
        {[
          ["Basic", "Design", "Blog"],
          ["Standard", "Development", "About"],
          ["Premium", "Maintenance", "Custom"],

        ].map((row, i) => (
          <div key={i}>
            <div
              className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-16 lg:gap-24
              text-center">
              <p>{row[0]}</p>
              <p>{row[1]}</p>
              <p>{row[2]}</p>
            </div>
            <div className="mt-3 h-px w-full bg-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
};


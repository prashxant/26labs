import React from "react";

export const GrowthPel = () => {
  return (
    <section className="relative mx-auto mb-20 flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:gap-6 sm:px-6 lg:gap-8 py-10  lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="bg-blue1 blur-3xl absolute -z-10 inset-0 pointer-events-none"></div>
      </div>
      {/* Heading */}
      <h2
        className="
          font-extrabold text-white
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          text-shadow-[0_4px_0_rgba(255,133,53,1)]
        "
      >
        Get personalized growth plan
      </h2>

      <p
        className="
          max-w-3xl text-black
          text-xs sm:text-sm md:text-base lg:text-lg
          font-medium
        "
      >
        We&apos;ll identify your biggest revenue bottlenecks and map out a
        proven outbound strategy to fix them — based on what&apos;s working for
        our other clients.
      </p>


      <p
        className="
          flex flex-wrap items-center justify-center gap-2
          text-xs sm:text-sm md:text-base lg:text-xl
          font-semibold text-black
        "
      >
        Consult and get a 3 months growth plan at
        <span className="text-white text-shadow-[0_2px_0_rgba(255,133,53,1)]">$149</span>
      </p>
    </section>
  );
};

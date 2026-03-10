"use client";

import { Descripton, Typography } from "@/components/ui/Typography";

// Lazy load PostHog to defer third-party code
const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

const steps = [
  {
    label: "Discover",
    textColor: "text-green-500",
    bgColor: "bg-green-300",
  },
  {
    label: "Define",
    textColor: "text-yellow-400",
    bgColor: "bg-yellow-400",
  },
  {
    label: "Derive",
    textColor: "text-red-400",
    bgColor: "bg-red-300",
  },
  {
    label: "Deliver",
    textColor: "text-blue-500",
    bgColor: "bg-blue-300",
  },
];

const Growth = () => {
  return (
    <section className="relative mx-auto mt-31 md:mt-44 lg:mt-48 mb-4 max-w-6xl px-4 text-center overflow-hidden">
      <div className="">
        <Typography
          variant="h2"
          popUp="Get personalized"
          className="text-orange2"
          line1=""
        />
        <Typography
          variant="h2"
          popUp="growth plan"
          className="text-orange2"
          line1=""
        />
      </div>

      <div className="relative mx-auto py-16 flex max-w-225 items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -inset-6 ${step.bgColor} opacity-30 blur-3xl rounded-full`}
            ></div>
            <span
              className={`relative ${step.textColor} text-[14px] md:text-3xl`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <span className="text-[16px] md:text-2xl text-[#8ca9ff]">
          Consultancy Fees
        </span>
        <span className="rounded bg-[#8ca9ff] px-6 py-1 text-[14px] md:text-2xl font-semibold text-white border border-blue-800">
          $149
        </span>
      </div>

      <div className="mb-3 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="https://calendly.com/26labs-live/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("booking_cta_clicked", {
              source: "growth_section",
              destination: "calendly",
              pricing: "$149",
            });
          }}
          className="px-9 py-2 font-bold text-gray-800 bg-white border border-gray-300 shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-[box-shadow,transform,background-color,color] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8ca9ff]"
        >
          <span className="hidden sm:inline">Book Now</span>
          <span className="sm:hidden">Book</span>
        </a>

        <a
          href="/pricing"
          onClick={() => {
            trackEvent("nav_link_clicked", {
              link_name: "Visit Pricing",
              destination: "/pricing",
              source: "growth_section",
            });
          }}
          className="px-9 py-2 border border-orange-500 bg-[#8ca9ff] text-white font-semibold transition-[background-color,transform,color] hover:bg-[#7c98ff] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8ca9ff]"
        >
          Visit Pricing
        </a>
      </div>

      <p className="mb-8 px-4 sm:px-0 text-sm md:text-base text-blue-500">
        Bookings are filling fast. Book now at an offer price.
      </p>

      <div className=" sm:mt-25">
        <Descripton
          description="We'll identify your biggest revenue bottlenecks and map out a proven outbound strategy to fix them - based on what's working for our other clients."
          className="mx-auto max-w-2xl text-center "
        />
      </div>
    </section>
  );
};

export default Growth;

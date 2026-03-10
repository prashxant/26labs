"use client";

import { Descripton, Typography } from "@/components/ui/Typography";


const trackEvent = async (eventName: string, properties?: object) => {
  const { default: posthog } = await import("posthog-js");
  posthog.capture(eventName, properties || {});
};

const steps = [
  {
    label: "Discover",
    textColor: "text-[#27C840]",
    bgColor: "bg-green-300",
    shadow: "0px 0px 50px #27C840",
  },
  {
    label: "Define",
    textColor: "text-[#FEBC2F]",
    bgColor: "bg-yellow-400",
    shadow: "0px 0px 50px #FEBC2F",
  },
  {
    label: "Derive",
    textColor: "text-[#FF5F57]",
    bgColor: "bg-red-300",
    shadow: "0px 0px 50px #FF5F57",
  },
  {
    label: "Deliver",
    textColor: "text-[#0088FF]",
    bgColor: "bg-blue-300",
    shadow: "0px 0px 50px #0088FF",
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
              className={`relative ${step.textColor} font-family-roboto font-normal text-base md:text-xl lg:text-[31px]`}
              style={{ textShadow: step.shadow }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <span className="text-base md:text-xl lg:text-[29px] font-semibold text-[#8CA9FF]">
          Consultancy Fees
        </span>
        <span className="rounded-[5px] bg-[#8CA9FF] px-6 py-1 font-family-roboto font-normal text-base md:text-xl lg:text-[31px] text-[#F5F5F5] border border-blue-800">
          149$
        </span>
      </div>

      <div className="mb-16 flex flex-col justify-center items-center gap-6 sm:gap-10 sm:flex-row">
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
          className="relative w-[211px] h-[44px] flex items-center justify-center rounded-[5px] bg-[#F4F6FF] shadow-[0px_2px_9.7px_0px_rgba(0,0,0,0.25)] text-[#161616] font-semibold text-sm md:text-lg lg:text-[29px] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-[box-shadow,transform] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8ca9ff]"
        >
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_3px_1px_#a4a4a4]" />
          <span className="relative hidden sm:inline">Book Now</span>
          <span className="relative sm:hidden">Book</span>
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
          className="relative w-[211px] h-[44px] flex items-center justify-center rounded-[5px] bg-[#8CA9FF] shadow-[0px_2px_9.7px_0px_rgba(0,0,0,0.25)] text-[#F5F5F5] font-semibold text-sm md:text-lg lg:text-[29px] hover:bg-[#7c98ff] transition-[background-color,transform,box-shadow] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8ca9ff]"
        >
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_3px_1px_#ffaa72]" />
          <span className="relative">Visit Pricing</span>
        </a>
      </div>

      <p className="mb-8 px-4 sm:px-0 text-sm md:text-base lg:text-[20px] font-family-roboto text-[#8CA9FF]">
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

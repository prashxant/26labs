import { Descripton, Typography } from "@/components/ui/Typography";

export const GrowthPlan = () => {
  return (
    <section className="w-full space-y-12 md:space-y-16 lg:space-y-24 text-center px-4 md:px-8">
      <div className="space-y-4 md:space-y-6">
        <Typography
          variant="h2"
          className="text-orange2 my-6 md:my-8 lg:my-10"
          line1="Get personalized"
          popUp="growth plan"      />

        <Descripton
          className="max-w-lg my-6 md:my-8 lg:my-10 px-4"
          description="We'll identify your biggest revenue bottlenecks and map out a proven outbound strategy to fix them - based on what's working for our other client"     />

        <div className="flex flex-wrap font-bold text-base md:text-xl lg:text-[28.5px] justify-center gap-4 md:gap-16 lg:gap-32">
          <span className="text-[#27C840]">Discover</span>
          <span className="text-[#FEBC2F]">Define</span>
          <span className="text-[#FF5F57]">Derive</span>
          <span className="text-[#0088FF]">Deliver</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16 pt-4">
          <span className="text-xs md:text-sm text-[#8CA9FF]">
            Consultancy Fees
          </span>
          <button
            className="
            text-mainBg
            bg-blue2
            h-9.5
            w-full md:w-24 lg:w-29
            px-2
            rounded-[5px]
            ring-1 ring-blue3
            shadow-[inset_0_0_3px_0.5px_rgba(0,136,255,1)]
          "
          >
            Claim it
          </button>
        </div>

        <div className="space-y-2">
          <button className="px-4 md:px-6 my-6 md:my-8 lg:my-10 py-2 rounded-md bg-orange2 text-white text-xs md:text-sm shadow-sm font-medium hover:bg-orange-500 transition">
            Book your slot now
          </button>
          <p className="text-xs text-center my-3 md:my-5 text-[#8CA9FF]">
            Bookings are filling fast. Book now at an offer price.
          </p>
        </div>
      </div>
    </section>
  );
};


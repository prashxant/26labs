import { Descripton, Typography } from '../Typography';

const Growth = () => {
  return (
    <section className="relative mx-auto mt-32 md:mt-40 lg:mt-48 mb-12 max-w-6xl px-4 text-center overflow-hidden">

      <div className="mb-10">
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



      <div className="flex flex-wrap justify-center gap-8 md:gap-24 mb-18 relative">


        <div className="relative">
          <div className="absolute -inset-4 md:-inset-10 bg-green-300 opacity-30 blur-2xl md:blur-3xl rounded-full"></div>
          <span className="relative text-green-500 text-xl md:text-3xl">
            Discover
          </span>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 md:-inset-10 bg-yellow-400 opacity-30 blur-2xl md:blur-3xl rounded-full"></div>
          <span className="relative text-yellow-400 text-xl md:text-3xl">
            Define
          </span>
        </div>


        <div className="relative">
          <div className="absolute -inset-4 md:-inset-10 bg-red-300 opacity-30 blur-2xl md:blur-3xl rounded-full"></div>
          <span className="relative text-red-400 text-xl md:text-3xl">
            Derive
          </span>
        </div>


        <div className="relative">
          <div className="absolute -inset-4 md:-inset-10 bg-blue-300 opacity-30 blur-2xl md:blur-3xl rounded-full"></div>
          <span className="relative text-blue-500 text-xl md:text-3xl">
            Deliver
          </span>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-14">
        <span className="text-xl md:text-2xl font-bold text-[#8ca9ff]">
          Consultancy Fees
        </span>
        <span className="px-6 py-1 rounded bg-[#8ca9ff] border border-blue-800 text-white text-xl md:text-2xl font-semibold">
          149 $
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
        <button
          className="px-9 py-2 font-bold text-gray-800 bg-white border border-gray-300 shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition"   >
             <a
          href="https://calendly.com/26labs-live/30min"
          target="_blank"
          rel="noopener noreferrer"
          className=" ">
          <span className="hidden sm:inline">Book now</span>
          <span className="sm:hidden">Book</span>
        </a>
        </button>
        <button className="px-9 py-2 border border-orange-500 bg-[#8ca9ff] text-white">
        <a
         href="/pricing"
         className="">
         Visit Pricing
        </a>
        </button>
      </div>


      <p className="text-sm md:text-base text-blue-500 mb-8">
        Booking are filling faster. Book now in a offer price
      </p>


      <Descripton
        description="We'll identify your biggest revenue bottlenecks and map out a proven outbound strategy to fix them - based on what's working for our other clients."
        className="max-w-2xl mx-auto text-center"    />
    </section>
  );
};

export default Growth;

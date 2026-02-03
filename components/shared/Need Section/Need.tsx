import Image from "next/image";
const Need = () => {
  return (
    <section className="relative mx-auto mt-27 mb-26 max-w-5xl px-4 overflow-hidden">
      <div className="absolute inset-0
    bg-[radial-gradient(ellipse_at_center,rgba(207,227,255,0.8)_0%,rgba(230,222,255,0.6)_40%,transparent_75%)]" />
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-15">
        <div className="text-center md:text-left">
             <h2
              className="font-bold text-gray-900
              text-xl sm:text-2xl md:text-5xl xl:text-[75px] leading-[1.05]" >

        <span className="block whitespace-nowrap">
            Your <span className="text-orange1">website</span>
        </span>

        <span className="block text-center">
        need us.
         </span>
            </h2>
        </div>
        <FloatingDashboard />
      </div>

      <p className="relative mt-11 max-w-3xl mx-auto text-center text-sm md:text-base font-bold text-gray-600">
        <span className="block mb-1">
          By combining thoughtful design, smart AI-driven targeting, and modern technology, we ensure
        </span>
        <span className="block mb-1 ">
          your site speaks to the right people at the right time.
        </span>
        <span className="block mb-1">
          Every interaction is crafted to build trust, engagement, and clarity.
        </span>
        <span className="block mb-1">
          With us, your website doesn’t just exist, it performs, connects, and grows your brand.
        </span>
      </p>
    </section>
  );
};

export default Need;

const FloatingDashboard = () => {
  return (
    <div className="relative flex justify-center md:justify-end">
      <div className="relative w-193 h-86 rounded-2xl p-4 transition-all duration-300">
        <Image
          src="/Group 97.png"
          alt="Dashboard UI"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

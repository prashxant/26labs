import Image from "next/image";

const Need = () => {
  return (
    <section className="relative mx-auto mt-20 mb-24 max-w-6xl px-4 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 
        bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_70%)]
        blur-2xl h-125"  />
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12">     
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Your <span className="text-orange-500">website</span>
            <br />
            need us.
          </h2>
        </div>   
        <FloatingDashboard />
      </div>
         <p className="relative mt-11 max-w-3xl mx-auto text-center text-sm md:text-base font-bold text-gray-600 leading-relaxed">
            <span className="block mb-2">
                      By combining thoughtful design, smart AI-driven targeting, and modern technology,  we ensure                     
             </span>
             <span className="block mb-2">
                     your site speaks to the right people at the right time.
             </span>
             <span className="block mb-2">
                   Every interaction is crafted to build trust, engagement, and clarity.
             </span>

            <span className="block">
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
      <div className="relative w-[320px] h-65 rounded-2xl  p-4 
                      transition-all duration-300  ">
        <Image
          src="/Group 97.png"
          alt="Dashboard UI"
          fill
          className="object-contain"
          priority  />
      </div> 
    </div>
  );
};


import Image from "next/image";

export const Thanks = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-5 animate-marque z-0">
          <Image
            loading="lazy"
            alt="logo"
            src="/last.svg"
            height={79}
            width={676}
            className="w-full h-auto px-2 sm:px-4 md:px-6 lg:px-0"
          />
        </div>
        <div className="relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20 z-20">
          <div className="absolute -top-1 sm:-top-2 md:-top-2 lg:-top-2 left-8 sm:left-12 md:left-16 lg:left-20 z-10 -translate-x-1/2">
            <Image
              loading="lazy"
              alt="logo"
              src="/rihno.svg"
              height={32}
              width={32}
              className="w-6 sm:w-7 md:w-8 lg:w-8 h-auto"
            />
          </div>
          <div className="relative w-full overflow-hidden h-20 sm:h-24 md:h-32 lg:h-40">
            <div className="absolute -inset-x-[50%] bottom-0 h-20 sm:h-24 md:h-32 lg:h-40 rotate-3 origin-bottom-left">
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-200" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-300 translate-y-3 sm:translate-y-4 md:translate-y-6 lg:translate-y-6" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-400 translate-y-6 sm:translate-y-8 md:translate-y-12 lg:translate-y-12" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-600 translate-y-9 sm:translate-y-12 md:translate-y-18 lg:translate-y-18" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-800 translate-y-12 sm:translate-y-16 md:translate-y-24 lg:translate-y-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";

export const Email = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center w-full">
      <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          className="bg-red-100 ring-[#FFF0E7] ring-2 text-xs sm:text-sm md:text-base font-light rounded-md px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 placeholder:font-light placeholder:text-gray-500 w-full sm:flex-1 focus:outline-none focus:ring-[#0088FF] transition-all"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
        />
        <button className="text-mainBg ring-2 bg-blue1 ring-[#0088FF] shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] rounded-md px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-2 sm:py-2.5 md:py-3 lg:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium whitespace-nowrap hover:bg-[#0077EE] transition-all duration-200 active:scale-95 w-1/2 sm:w-auto sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] mx-auto sm:mx-0">
          Claim It
        </button>
      </div>
      <div className="rounded-full flex gap-1.5 sm:gap-2 md:gap-2.5 p-1.5 sm:p-2 md:p-2.5 shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] bg-white/5">
        <Image
          src="/pfp3.png"
          width={32}
          height={32}
          alt="Customer profile 1"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
        />
        <Image
          src="/pfp2.png"
          width={32}
          height={32}
          alt="Customer profile 2"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
        />
        <Image
          src="/pfp1.png"
          width={32}
          height={32}
          alt="Customer profile 3"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
        />
        <div className="rounded-full text-gray-600 font-medium p-0.5 px-2 sm:p-1 sm:px-3 md:px-4 text-xs sm:text-sm md:text-base shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] bg-white/90 flex items-center">
          +99
        </div>
      </div>
    </div>
  );
};

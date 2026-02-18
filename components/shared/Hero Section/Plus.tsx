import Image from "next/image";

export const Plus = () => {
  return (
    <div className="rounded-full items-center flex gap-1  py-1.5 px-2 shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] bg-white/5">
      <Image
        src="/avengers/superman.png"
        width={32}
        height={32}
        alt="Customer profile 1"
        className="w-5 shadow-[0px_1px_6px_rgba(0,136,255,1)] hover:scale-125 transition-transform duration-200 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
      />
      <Image
        src="/avengers/batman.png"
        width={32}
        height={32}
        alt="Customer profile 2"
        className="w-5 shadow-[0px_1px_6px_rgba(0,136,255,1)] hover:scale-125 transition-transform duration-200  h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
      />
      <Image
        src="/avengers/captain.png"
        width={32}
        height={32}
        alt="Customer profile 3"
        className="w-5 shadow-[0px_1px_6px_rgba(0,136,255,1)] hover:scale-125 transition-transform duration-200  h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full object-cover"
      />
      <div className="rounded-full hover:scale-125 transition-transform duration-200  text-gray-600 font-medium p-0.5 px-2 sm:p-1 sm:px-3 md:px-4 text-xs sm:text-sm md:text-base shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] flex items-center">
        +20
      </div>
    </div>
  );
};

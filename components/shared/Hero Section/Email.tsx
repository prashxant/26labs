import Image from "next/image";

export const Email = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center w-full">
      <div className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-6 md:gap-10 w-full max-w-md sm:max-w-none">
        <input
          className="bg-gray-300 ring-[#FFF0E7] ring-2 text-xs sm:text-[13px] font-light rounded-[5px] px-3 sm:px-4 py-2 sm:py-2.5 placeholder:font-light w-full sm:w-auto"
          type="text"
          placeholder="Email"z
        />
        <button className="text-mainBg ring-2 bg-blue1 ring-[#0088FF] shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] rounded-[5px] px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base whitespace-nowrap">
          Claim It{" "}
        </button>
      </div>
      <div className="rounded-full flex gap-1.5 sm:gap-2 p-1.5 sm:p-2 shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]">
        <Image
          src="/pfp3.png"
          width={24}
          height={24}
          alt="pfp1"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <Image
          src="/pfp2.png"
          width={24}
          height={24}
          alt="pfp2"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <Image
          src="/pfp1.png"
          width={24}
          height={24}
          alt="pfp3"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <div className="rounded-full text-gray-600 p-0.5 px-2 sm:p-1 sm:px-3 text-xs sm:text-sm shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]">
          +99
        </div>
      </div>
    </div>
  );
};

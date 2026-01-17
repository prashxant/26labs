import Image from "next/image";
import { Descripton, Typography } from "../shared/Typography";
import { Toolkit } from "./Toolkit";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src="/image.png" alt="bg" fill priority className="" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">
        <Typography
          variant="h1"
          className="pt-20 md:pt-32 lg:pt-40"
          line1="One Problem One Service"
          line2="One "
          popUp="Audience"
        />
        <Descripton
          className="max-w-xl px-4"
          description="Delivering warm opportunities and optimizing your visibility process to ensure nothing stands between you and your revenue goals."
        />
        <Email />
        <Toolkit />
      </div>
    </div>
  );
};

export const Email = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 md:mt-12 lg:mt-16.25 px-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-14 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your mail"
          className="
            bg-gray-300
            rounded-sm
            px-2
            h-9
            w-full md:w-60 lg:w-71.25
            ring-1 ring-white
          "
        />
        <button
          className="
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

      <div className="mt-4 md:mt-5 lg:mt-6.25 flex flex-col items-center">
        <div
          className="
            w-24 md:w-28 lg:w-29
            h-6 md:h-7 lg:h-7.5
            rounded-3xl
            ring-1 ring-blue2
            shadow-[inset_0_0_3px_0.5px_rgba(0,136,255,1)]
          "
        />

        <p className="text-gray-500 tracking-tight text-xs mt-1">
          Already Claimed
        </p>
      </div>
    </div>
  );
};

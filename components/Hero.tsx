
import Image from "next/image";
import { Descripton, Typography } from "./Typography";


export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/image.png"
        alt="bg"
        fill
        priority
        className=" z-0"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <Typography
          variant="h1"
          className="pt-60 "
          line1="One Problem One Service"
          line2="One "
          popUp="Audience"
        />
        <Descripton
          className="max-w-xl "
          description="Delivering warm opportunities and optimizing your visibility process to ensure nothing stands between you and your revenue goals."
        />
        <Email />
      </div>
    </div>
  );
}

export const Email = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[65px]">
      <div className="flex items-center gap-14">
        <input
          type="email"
          placeholder="Enter your mail"
          className="
            bg-gray-300
            rounded-sm
            px-2
            h-[36px]
            w-[285px]
            ring-1 ring-white
          "
        />
       <button
          className="
            bg-blue2
            h-[38px]
            w-[116px]
            px-2
            rounded-[5px]
            ring-1 ring-blue3
            shadow-[inset_0_0_3px_0.5px_rgba(0,136,255,1)]
          "
        >
          Claim it
        </button>
      </div>


      <div className="mt-[25px] flex flex-col items-center">
        <div
          className="
            w-[117px]
            h-[30px]
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

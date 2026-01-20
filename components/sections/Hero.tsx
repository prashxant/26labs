import Image from "next/image";
import { Descripton, Typography } from "../shared/Typography";
import { Toolkit } from "./Toolkit";

export const Heroo = () => {
  return (
    <div className="relative  w-full min-h-screen overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:mx-0">
      <Image
        
        fill
        priority
        alt="bg"
        className="absolute inset-0 z-10 -translate-y-30 rotate-30 sm:-translate-y-12 lg:-translate-y-40 lg:-rotate-30"
      />
      <div className="absolute z-20 inset-0  mx-auto flex max-w-6xl flex-col items-center text-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 gap-6">
        <Typography
          variant="h1"
          className="leading-tight fixed"
          line1="One Problem One Service"
          line2="One "
          popUp="Audience"
        />
        <Descripton
          className="max-w-2xl px-4"
          description="Delivering warm opportunities and optimizing your visibility process to ensure nothing stands between you and your revenue goals."
        />
        <Email />
        <Toolkit />
      </div>
    </div>
  );
};


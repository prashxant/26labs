import React from "react";
import { Descripton, Typography } from "../Typography";

import { Email } from "./Email";

export const Hero = () => {
  return (
    <div className="min-h-screen h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-0 relative flex justify-center items-start md:items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
      <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 flex-col justify-center items-center w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="w-full">
          <Typography
            variant="h1"
            line1="One Problem One Service"
            line2="One"
            popUp="Audience"
            className=""
          />
          <Descripton
            className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-2 sm:px-4"
            description="Delivering warm opportunities and optimizing your visibility process to ensure nothing stands between you and your revenue goals."
          />
        </div>
        <Email />
      </div>
    </div>
  );
};

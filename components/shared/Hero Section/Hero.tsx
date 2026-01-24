import React from "react";
import { Descripton, Typography } from "../Typography";

import { Email } from "./Email";


export const Hero = () => {
  return (
    <div className="h-screen  pt-20 sm:pt-24 md:pt-0 md:mt-16 lg:mt-20 relative  flex justify-center items-start md:items-center px-4 sm:px-6 lg:px-8  pb-4 md:pb-8">

      <div className="flex gap-6 sm:gap-8 md:gap-10 flex-col justify-center items-center w-full max-w-4xl">
        <div>
          <Typography
            variant="h1"
            line1="One Problem One Service"
            line2="One"
            popUp="Audience"
            className=""
          />
          <Descripton
            className="max-w-2xl "
            description="Delivering warm opportunities and optimizing your visibility process to ensure
          nothing stands between you and your revenue goals."
          />
        </div>
        <Email />
      </div>
    </div>
  );
};

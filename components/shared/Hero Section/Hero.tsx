import React from "react";
import { Descripton, Typography } from "../Typography";

import { Email } from "./Email";
import { HeroSvg } from "@/components/icons/HeroSvg";

export const Hero = () => {
  return (

      <div className="flex   h-screen pt-20 flex-col justify-center items-center">
        <HeroSvg />
        <Typography
          variant="h1"
          className=""
          line1="One Problem One Service"
          line2="One"
          popUp="Audience"
        />

        <Descripton
          className="font-family-roboto max-w-2xl text-shadow-lg"
          description="Delivering warm opportunities and optimizing your visibility process to ensure
          nothing stands between you and your revenue goals."
        />
        <Email />

    </div>
  );
};

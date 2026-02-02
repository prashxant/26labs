
import { Descripton, Typography } from "../Typography";
import { Email } from "./Email";

export const Hero = () => {
  return (
    <div className="relative h-screen mt-20  w-full ">
      {/* <HeroSvg  /> */}

      <div className="absolute inset-0 z-10  flex h-full pt-20 flex-col justify-center items-center text-center">
        <Typography
          className=""
          variant="h1"
          line1="One Problem One Service"
          line2="One"
          popUp="Audience"
        />

        <Descripton
          className="font-family-roboto text-[20px] max-w-2xl"
          description="Delivering warm opportunities and optimizing your visibility process to ensure
          nothing stands between you and your revenue goals."
        />

        <Email />
      </div>
    </div>
  );
};

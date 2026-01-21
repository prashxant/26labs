import React from 'react'
import { Descripton, Typography } from '../Typography'
import Image from 'next/image';
import { Email } from './Email';


export const Hero = () => {

  return (
    <div className="h-screen mt-20 relative w-full flex justify-center items-center ">
      <Image
        src="/ii.png"
        alt="mainbg"
        fill
        className=" max-w-6xl animate-spin-slow -z-10  max-w-9xl translate-x-80 absolute inset-0  "
      />
      <div className="flex gap-10 flex-col justify-center items-center">
        <div className="mt-5">
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
}

import Image from 'next/image';
import React from 'react'

type Phoolprops = {
  Line1: string;
  Line2: string;
  src: string;
};

export const Phool = ({Line1,Line2,src}:Phoolprops) => {
  return (<div className="">
      <div className="flex flex-col md:flex-row my-8 md:my-12 lg:my-15 justify-center items-center gap-3 md:gap-4 py-8 text-xs md:text-sm lg:text-lg font-semibold text-black">
        <span>{Line1}</span>
        <Image
          width={64}
          height={64}
          src={src}
          alt="lgog"
          className="md:w-20 animate-spin-slow md:h-20 lg:w-26 lg:h-26"
        />
        <span>{Line2}</span>
      </div>
    </div>
  );
}

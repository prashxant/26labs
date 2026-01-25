import Image from 'next/image';
import React from 'react'

type Phoolprops = {
  Line1: string;
  Line2: string;
  src: string;
};

export const Phool = ({Line1,Line2,src}:Phoolprops) => {
  return (
  <div className=" grid grid-cols-3 place-items-center font-semibold lg:text-[18px] text-[10px] gap-6 px-4 py-16 ">
        <p>{Line1}</p>
        <Image
          width={128}
          height={128}
          src={src}
          alt="lgog"
          className="animate-spin-slow"
        />
        <p>{Line2}</p>
      </div>
  );
}

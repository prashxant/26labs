import Image from 'next/image';
import React from 'react'

type Phoolprops = {
  Line1: string;
  Line2: string;
  src: string;
};

export const Phool = ({Line1,Line2,src}:Phoolprops) => {
  return (
  <div className="flex font-semibold text-[18px] justify-center items-center gap-6 py-16 ">
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

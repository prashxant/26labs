import React from 'react'
import { Descripton } from './Typography'
import Image from 'next/image';


export const MainFooter2 = () => {
  return (
    <div className="mt-10 max-w-5xl mx-auto">
        <div className="w-full  absolute inset-0">
          <Image
            loading="lazy"
            alt="logo"
            src="/bgF.svg"
            height={79}
            width={1610}
          />
        </div>
        <div className=" absolute right-20 top-18">
          <Image
            loading="lazy"
            alt="logo"
            src="/rihno.svg"
            height={32}
            width={32}
          />
        </div>
      </div>
  );
}


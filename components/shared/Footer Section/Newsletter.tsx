import { NewSvg } from '@/components/icons/New';
import Image from 'next/image';
import React from 'react'


export const Newsletter = () => {
  return (
    <div className="border relative flex flex-col min-w-5xl p-10 justify-center items-center gap-8 border-black  ">
      <div className='absolute top-0 left-0 -translate-y-1/4 -translate-x-1/12'>
          <div className='absolute translate-x-8 text-[18px] font-semibold text-white '>New</div>
        <NewSvg />
      </div>
      <div className="tracking-wider font-bold text-[46px]">
        <h1>
          We give you more . A monthly <br />{" "}
          <span className="text-orange1 ">Newsletter</span> to keep you updated.
        </h1>
      </div>
      <div className="flex  ">
        <input
          type="text"
          placeholder="Email Address"
          className="ring p-1 w-full md:w-fit"
        />
        <div className="bg-orange1 justify-center ring items-center flex p-1 w-full md:w-auto">
          <Image
            alt="logo"
            width={48}
            height={48}
            src="/logo.svg"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>
      </div>
      <p className="max-w-lg text-[18px] text-center font-semibold">
        Be the first to receive ideas, trends, and strategies that help your
        brand grow smarter and stand out.
      </p>
    </div>
  );
}

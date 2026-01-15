import React from 'react'
import { Descripton } from './Typography'
import Image from 'next/image';


export const MainFooter2 = () => {
  return (
    <div className="mt-10">
      <Descripton
        className="max-w-3xl"
        description="Say goodbye to outdated enterprise software and welcome the smoother one.
      We lead you from design to product innovation to shape your path from idea to success"
      />
      <div className="flex gap-10 justify-center items-center text-center">
        <div className="bg-red-400 size-10">icon</div>
        <div className="bg-red-500 size-10">icon</div>
        <div className="bg-red-600 size-10">icon </div>
        <div className="bg-red-700 size-10">icon </div>
      </div>
      <div className="max-w-3xl mx-auto m-5 flex justify-between text-blue2">
        <p>© 2026 26labs. All Rights Reserved.</p>
        <p>Terms & Conditions Privacy Policy</p>
      </div>

      <div className="relative mt-10">
        <div className=" animate-marque flex pt-5 ">
          <Image
            loading="lazy"
            alt="logo"
            src="/last.svg"
            height={79}
            width={676}
          />
        </div>
        <div className="w-full absolute inset-0">
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
    </div>
  );
}


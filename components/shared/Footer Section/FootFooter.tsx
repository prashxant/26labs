import React from 'react'

export const FootFooter = () => {
  return (
    <div className="relative">
      <div className=" flex flex-col justify-center items-center  text-lg text-gray-500 ">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>© 2026 26labs. All Rights Reserved.</p>
      </div>
      <div className="flex text-transparent bg-clip-text bg-linear-to-r  from-[#FF8535] to-[#8CA9FF] text-[100px] tracking-wide font-bold justify-between items-center w-6xl">
        <p>26 . labs </p>
        <p> Design</p>
        <div className="h-3 w-full bg-linear-to-r from-[#FF8535] to-[#8CA9FF]  absolute bottom-1/8 bg-black"></div>
      </div>
    </div>
  );
}

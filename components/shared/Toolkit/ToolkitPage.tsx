import React from "react";

import ProcessGrid from "./Cards";

function ToolkitPage() {
  return (
    <div className="flex  justify-center flex-col gap-6 md:gap-12 items-center mt-8 md:mt-12">
      <div className="lg:text-3xl sm:text-xl py-8 relative text-center w-[70vw] font-semibold">
        <div className='absolute -inset-10  bg-[#8CA9FF] opacity-50 blur-3xl rounded-full"'></div>
        <p className="relative z-30 "> Our Toolkit</p>
      </div>

      <div className="text-center lg:mt-16 mt-4 md:mt-8   md:text-left">
          <h2 className="text-4xl text-center md:text-5xl font-bold leading-tight text-gray-900">
         Everything You Need
          <br />
            <span className="text-black-500">to Launch Your</span>
            <span className="text-orange2 ml-2">Own Website</span>
            <span className="text-black-500 ml-2">.</span>
          </h2>
        </div>
      <ProcessGrid />
    </div>
  );
}

export default ToolkitPage;

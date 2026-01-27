import React from "react";
import { Typography } from "../Typography";
import ProcessGrid from "./Cards";

function ToolkitPage() {
  return (
    <div className="flex  justify-center flex-col gap-6 md:gap-12 items-center mt-8 md:mt-12">
      <div className="lg:text-3xl sm:text-xl py-8 relative text-center w-[70vw] font-semibold">
        <div className='absolute -inset-10  bg-[#8CA9FF] opacity-50 blur-3xl rounded-full"'></div>
        <p className="relative z-30 "> Our Toolkit</p>
      </div>

      <Typography
        variant="h2"
        className="tracking-wider "
        line1="Everything You Need"
        line2="to Launch Your "
        popUp="Own Website."
      />
      <ProcessGrid />
    </div>
  );
}

export default ToolkitPage;

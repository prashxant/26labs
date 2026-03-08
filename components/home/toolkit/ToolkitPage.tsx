import React from "react";

import ProcessGrid from "./Cards";
import { Typography } from "@/components/ui/Typography";

function ToolkitPage() {
  return (
    <div className="flex  justify-center flex-col gap-6 md:gap-12 items-center mt-6 md:mt-12">
      <div className="lg:text-3xl sm:text-xl py-8 relative text-center w-[70vw] font-semibold">
        <div className='absolute -inset-10 -z-100  bg-[#8CA9FF] opacity-50 blur-3xl rounded-full"'></div>
        <p className="relative z-30 text-[12px] sm:text-xl">Our Toolkit</p>
      </div>

      <Typography
        className=""
        variant="h2"
        line1="Everything You Need"
        line2="to Launch Your"
        popUp="Own Website"
      />
      <ProcessGrid />
    </div>
  );
}

export default ToolkitPage;

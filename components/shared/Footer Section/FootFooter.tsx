import { div } from "motion/react-client";
import React from "react";

export const FootFooter = () => {
  return (
    <div className="w-7xl leading-none text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 relative flex justify-between font-bold text-[100px] ">
      <p className="">26.labs</p>
      <p>Design</p>
      <div className=" bg-linear-to-r from-cyan-500 to-blue-500 h-5 absolute bottom-0 right-0 left-0"></div>
    </div>
  );
};

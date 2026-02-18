import { HeroSvg } from "@/components/icons/HeroSvg";
import { UFO } from "@/components/icons/UFO";
import React from "react";

function page() {
  return (
    <div className="h-screen relative w-full text-7xl flex text-shadow-sm  flex-col gap-10 justify-center items-center">
      <div className=" absolute -z-1000">
        <HeroSvg />
      </div>
      <p className="text-orange2 ">Coming Soon…</p>
    </div>
  );
}

export default page;

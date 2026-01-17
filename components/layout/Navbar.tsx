"use client";
import Image from "next/image";
import { useState } from "react";
import ScrollProgress from "../shared/ScroolProcress";

export const Navbar = () => {
  return (
    <nav className="sticky top-2 md:top-4 lg:top-8 z-50">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-12 sm:h-13 md:h-14 lg:h-13.75
          w-11/12 sm:w-5/6 md:w-4/5 lg:w-178.75
          rounded-lg
          bg-blue1
          px-3 sm:px-4 md:px-5 lg:px-4
          mt-4 sm:mt-6 md:mt-12 lg:mt-20
          shadow-lg"
      >
        <Menu />

        <Image
          alt="Company logo"
          width={100}
          height={40}
          src="/logo.svg"
          className="w-20 sm:w-24 md:w-28 lg:w-[100px] h-auto"
        />

        <button className="bg-orange2 text-sm sm:text-base md:text-lg lg:text-[22.5px] text-shadow-sm rounded-md text-mainBg px-2 sm:px-3 md:px-4 lg:px-4 py-1">
          Book now
        </button>
       
      </div>
    </nav>
  );
};

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen((v) => !v)} className="flex items-center">
      <div
        className={`
          flex items-center
          transition-transform duration-300
          ${open ? "rotate-90" : "rotate-0"}
        `}
      >
        <span className="bg-black h-6 sm:h-7 md:h-8 lg:h-8.75 w-1 sm:w-1.5 mx-0.5 sm:mx-0.75 rounded-lg sm:rounded-[5px] md:rounded-[6px] lg:rounded-[6.5px]" />
        <span className="bg-black h-6 sm:h-7 md:h-8 lg:h-8.75 w-1.5 sm:w-2 mx-0.5 sm:mx-0.75 rounded-[5px] sm:rounded-[6px] md:rounded-[7px] lg:rounded-[8.5px]" />
      </div>

      <p className="ml-1.5 sm:ml-2 md:ml-3 lg:ml-[9.5px] text-base sm:text-lg md:text-xl lg:text-[22.5px] font-bold">
        Menu
      </p>
    </button>

  );
};

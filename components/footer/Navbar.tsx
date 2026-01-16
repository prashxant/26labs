"use client";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  return (
    <nav className="sticky top-8 z-50">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-13.75
          w-178.75
          rounded-lg
          bg-blue1
          px-4
          mt-20
          shadow-lg"
      >
        <Menu />

        <Image alt="Company logo" width={100} height={40} src="/logo.svg" />

        <button className="bg-orange2 text-[22.5px] text-shadow-sm rounded-md text-mainBg px-4 py-1">
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
      {/* ICON WRAPPER (THIS rotates) */}
      <div
        className={`
          flex items-center
          transition-transform duration-300
          ${open ? "rotate-90" : "rotate-0"}
        `}
      >
        <span className="bg-black h-8.75 w-1.5 mx-0.75 rounded-[6.5px]" />
        <span className="bg-black h-8.75 w-1.5 mx-0.75  rounded-[8.5px]" />
      </div>

      <p className="ml-[9.5px] text-[22.5px] font-bold">Menu</p>
    </button>
  );
};

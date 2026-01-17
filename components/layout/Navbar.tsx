"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

        <Link href='/test' >
          <Image
            alt="Company logo"
            width={100}
            height={40}
            src="/logo.svg"
            className="w-20 sm:w-24 md:w-28 lg:w-25 h-auto"
          />
        </Link>
        <button className="bg-orange2 text-sm sm:text-base md:text-lg lg:text-[22.5px] text-shadow-sm rounded-md text-mainBg px-2 sm:px-3 md:px-4 lg:px-4 py-1">
          Book now
        </button>
      </div>
    </nav>
  );
};

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2"
      >
        <div
          className={`
            flex items-center
            transition-transform duration-300
            ${open ? "rotate-90" : "rotate-0"}
          `}
        >
          <span className="bg-black h-6 w-1 rounded-lg mx-0.5" />
          <span className="bg-black h-6 w-1.5 rounded-lg mx-0.5" />
        </div>

        <span className="text-lg font-bold">Menu</span>
      </button>


      <MenuDropdown open={open} />
    </div>
  );
};

import Link from "next/link";

export const MenuDropdown = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`
        absolute left-0 mt-4 w-[260px]
        rounded-xl
        bg-linear-to-b from-[#9db2ff] to-[#6b6b6b]
        p-6
        shadow-xl
        transition-all duration-300 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      <nav className="space-y-4 text-lg font-semibold">
        <Link
          href="/resources"
          className="block text-white underline underline-offset-4"
        >
          Resource
        </Link>
        <Link href="/pricing" className="block text-black">
          Pricing
        </Link>
        <Link href="/blog" className="block text-white">
          Blog
        </Link>
        <Link href="/Contact" className="block text-white">
          Contact
        </Link>
      </nav>
    </div>
  );
};

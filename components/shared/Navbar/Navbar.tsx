'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./navMenu";


export const Navbar = () => {
  return (
    <nav className="sticky top-2 md:top-4 lg:top-8 z-50">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-12 sm:h-13 md:h-14 lg:h-13.75 xl:h-15
          w-11/12 sm:w-5/6 md:w-4/5 lg:w-178.75 xl:max-w-[50vw]
          rounded-lg
          bg-blue1
          px-3 sm:px-4 md:px-5 lg:px-4
          mt-4 sm:mt-6 md:mt-12 lg:mt-20
          shadow-lg"
      >
        <Menu/>

        <Link href="/test">
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


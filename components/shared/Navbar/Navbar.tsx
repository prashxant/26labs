"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "./navMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 md:top-8 lg:top-12 z-50">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-12 sm:h-13 md:h-14 lg:h-13.75 xl:h-15
          w-11/12 sm:w-5/6 md:w-4/5 lg:w-178.75 xl:max-w-[50vw]
          rounded-lg
          bg-blue1
          px-3 sm:px-4 md:px-5 lg:px-4
          shadow-lg
        "
      >
        {/* Left: Menu / Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className="hidden md:block">
          <Menu />
        </div>

        {/* Center: Logo */}
        <Link href="/test" className="flex items-center">
          <Image
            alt="Company logo"
            width={100}
            height={40}
            src="/logo.svg"
            priority
            className="w-20 sm:w-24 md:w-28 lg:w-25 h-auto"
          />
        </Link>

        {/* Right: CTA */}
        <a
          href="https://calendly.com/26labs-live/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-md
            bg-orange2
            px-2 sm:px-3 md:px-4 lg:px-4
            py-1.5
            text-sm sm:text-base md:text-lg lg:text-[22.5px]
            text-mainBg
            font-medium
            shadow-md
            hover:bg-orange-500/90 hover:text-white
            transition
            focus:outline-none focus:ring-2 focus:ring-orange2 focus:ring-offset-2
          "
        >
          Book now
        </a>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 mx-auto w-11/12 sm:w-5/6 rounded-lg bg-blue1 p-4 shadow-lg space-y-4">
          <Link href="/test" className="block text-white">
            Test
          </Link>

          <a
            href="https://calendly.com/26labs-live/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md bg-orange2 px-4 py-3 text-center text-mainBg font-medium"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

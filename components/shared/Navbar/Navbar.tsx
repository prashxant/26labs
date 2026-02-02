"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "./navMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed inset-x-0 top-2 sm:top-4 md:top-6 lg:top-8 xl:top-12 z-50 px-3 sm:px-4 md:px-6 lg:px-8">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-14 sm:h-16 md:h-18 lg:h-20
          w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:max-w-[50vw]
          rounded-2xl sm:rounded-2xl md:rounded-2xl
    bg-linear-to-r from-[#cbd6f9] to-[#A0B8FF]
          px-3 sm:px-4 md:px-6 lg:px-8
          shadow-lg
        "
      >
        {/* Left: Menu / Hamburger */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-white text-xl sm:text-2xl p-1.5 sm:p-2 hover:bg-white/10 rounded-md transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className="hidden md:block">
          <Menu />
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            alt="Company logo"
            width={100}
            height={40}
            src="/logo.svg"
            priority
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
          />
        </Link>

        {/* Right: CTA */}
        <a
          href="https://calendly.com/26labs-live/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-md sm:rounded-lg md:rounded-xl
            bg-orange2
            px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7
            py-2 sm:py-2.5 md:py-3 lg:py-3.5
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            text-mainBg
            font-medium sm:font-semibold
            shadow-md
            hover:bg-orange-500/90 hover:text-white
            transition-all duration-200
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-orange2 focus:ring-offset-2
            whitespace-nowrap
            shrink-0"
        >
          <span className="hidden sm:inline">Book now</span>
          <span className="sm:hidden">Book</span>
        </a>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 mx-3 sm:mx-auto w-auto sm:w-11/12 rounded-lg sm:rounded-xl bg-blue1 p-4 sm:p-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="space-y-2 sm:space-y-3">
            <Link
              href="/resources"
              className="block text-white text-sm sm:text-base hover:text-orange2  py-2 sm:py-2.5 hover:pl-2 transition-colors duration-200"
            >
              Resource
            </Link>
            <Link
              href="/pricing"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2 sm:py-2.5 hover:pl-2  duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2 sm:py-2.5 hover:pl-2  duration-200"
            >
              Blog
            </Link>
            <a
              href="https://calendly.com/26labs-live/30min"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2 sm:py-2.5 hover:pl-2 duration-200"
            >
              Contact
            </a>

            <div className="pt-3 sm:pt-4 mt-2 sm:mt-3 border-t border-white/20">
              <a
                href="https://calendly.com/26labs-live/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md sm:rounded-lg bg-orange2 px-4 py-2.5 sm:py-3 text-center text-mainBg font-medium sm:font-semibold text-sm sm:text-base hover:bg-orange-500/90 transition-all duration-200 active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "./navMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-3 sm:top-4 md:top-6 lg:top-8 xl:top-12 z-50 px-2 sm:px-4">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-12 sm:h-13 md:h-14 lg:h-15
          w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:max-w-[50vw]
          rounded-lg
          bg-blue1
          px-3 sm:px-4 md:px-5 lg:px-6
          shadow-lg
        "
      >
        {/* Left: Menu / Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
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
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto"
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
            px-2 sm:px-3 md:px-4 lg:px-5
            py-1.5 sm:py-2
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22.5px]
            text-mainBg
            font-medium
            shadow-md
            hover:bg-orange-500/90 hover:text-white
            transition
            focus:outline-none focus:ring-2 focus:ring-orange2 focus:ring-offset-2
            whitespace-nowrap
          "
        >
          Book now
        </a>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 mx-2 sm:mx-auto w-auto sm:w-11/12 rounded-lg bg-blue1 p-4 shadow-lg">
          <nav className="space-y-3">
            <Link
              href="/resources"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Resource
            </Link>
            <Link
              href="/pricing"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/Contact"
              className="block text-white text-sm sm:text-base hover:text-orange2 transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-2 mt-2 border-t border-white/20">
              <a
                href="https://calendly.com/26labs-live/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-orange2 px-4 py-2.5 sm:py-3 text-center text-mainBg font-medium text-sm sm:text-base hover:bg-orange-500/90 transition-colors"
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

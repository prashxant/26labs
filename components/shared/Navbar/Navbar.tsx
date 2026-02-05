"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "./navMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ NEW: scroll state
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuToggle = () => {
    setOpen(!open);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // scrolling DOWN → hide
      } else {
        setHidden(false); // scrolling UP → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-200%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-2 sm:top-4 md:top-6 lg:top-8 xl:top-12 z-50 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div
        className="
          mx-auto
          flex items-center justify-between
          w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:max-w-[50vw]
          rounded-lg
          bg-linear-to-r from-[#cbd6f9] to-[#A0B8FF]
          shadow-lg
          px-2 md:px-3
          py-0.5 md:py-1.5 lg:py-2
        "
      >

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


        <Link href="/" className="flex items-center shrink-0">
          <Image
            draggable='false'
            alt="Company logo"
            width={100}
            height={40}
            src="/logo.svg"
            priority
            className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
          />
        </Link>


        <a
          href="https://calendly.com/26labs-live/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-[5px]
            bg-orange2
            px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7
            py-2 sm:py-2.5 md:py-3 lg:py-3.5
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            text-white
            font-medium sm:font-semibold
            shadow-md
            hover:bg-orange-500/90 hover:text-white
            transition-all duration-200
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-orange2 focus:ring-offset-2
            whitespace-nowrap
            shrink-0"
        >
          <span className="hidden font-extrabold sm:inline">Book now</span>
          <span className="sm:hidden font-bold">Book</span>
        </a>
      </div>


      {open && (
        <div className="md:hidden mt-2 mx-3 sm:mx-auto w-auto sm:w-11/12 rounded-lg sm:rounded-xl bg-blue1 p-4 sm:p-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="space-y-2 sm:space-y-3">
            <Link
              href="/resources"
              className="block text-white hover:text-orange2 py-2"
            >
              Resource
            </Link>
            <Link
              href="/pricing"
              className="block text-white hover:text-orange2 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-white hover:text-orange2 py-2"
            >
              Blog
            </Link>
            <a
              href="https://calendly.com/26labs-live/30min"
              className="block text-white hover:text-orange2 py-2"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </motion.nav>
  );
};

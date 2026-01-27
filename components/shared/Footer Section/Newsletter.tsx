"use client";

import { NewSvg } from "@/components/icons/New";
import Image from "next/image";
import React from "react";
import posthog from "posthog-js";

export const Newsletter = () => {
  const handleNewsletterClick = () => {
    posthog.capture("newsletter_signup_clicked", {
      location: "footer_section",
    });
  };

  return (
    <div className="border relative flex flex-col w-full p-6 sm:p-8 md:p-10 justify-center items-center gap-4 sm:gap-6 md:gap-8 border-black">
      <div className="absolute top-0 left-0 sm:left-2  md:left-0 -translate-y-1/4 -translate-x-1/12">
        <div className="absolute translate-x-6 sm:translate-x-6 text-sm sm:text-base md:text-[18px] font-semibold text-white">
          New
        </div>
        <NewSvg />
      </div>
      <div className="tracking-wider font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-center">
        <h1>
          We give you more . A monthly <br className="hidden sm:block" />{" "}
          <span className="text-orange1">Newsletter</span> to keep you updated.
        </h1>
      </div>
      <div className="flex w-full max-w-md sm:max-w-lg">
        <input
          type="text"
          placeholder="Email Address"
          className="ring p-2 sm:p-3 w-full text-sm sm:text-base"
        />
        <button
          onClick={handleNewsletterClick}
          className="bg-orange1 justify-center ring items-center flex p-2 sm:p-3 shrink-0 cursor-pointer hover:bg-orange-600 transition-colors"
        >
          <Image
            alt="logo"
            width={48}
            height={48}
            src="/logo.svg"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </button>
      </div>
      <p className="max-w-lg text-sm sm:text-base md:text-[18px] text-center font-semibold px-4">
        Be the first to receive ideas, trends, and strategies that help your
        brand grow smarter and stand out.
      </p>
    </div>
  );
};

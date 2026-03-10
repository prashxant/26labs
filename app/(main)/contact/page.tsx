import { HeroSvg } from "@/components/icons/HeroSvg";
import { Contact } from "@/components/contact/contactPage/Contact";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Web Design Quote | 26labs",
  description:
    "Get in touch with 26labs. Schedule a free consultation or inquire about web design and growth services.",
  alternates: {
    canonical: "https://26labs.live/contact",
  },
};

function page() {
  return (
    <div className="min-h-screen pt-20 sm:pt-30  p-4">
      <div className=" absolute -z-1000">
        <HeroSvg />
      </div>
      <Contact />
    </div>
  );
}

export default page;

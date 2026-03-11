import { HeroSvg } from "@/components/icons/HeroSvg";
import { Typography } from "@/components/ui/Typography";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | 26labs",
  description: "Web design and development insights coming soon.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://26labs.live/blog",
  },
};

function page() {
  return (
    <div className="h-screen relative w-full flex flex-col gap-10 justify-center items-center">
      <div className=" absolute -z-1000">
        <HeroSvg />
      </div>
      <Typography
        variant="h2"
        className="text-orange2"
        line1=""
        popUp="Coming Soon…"
      />
    </div>
  );
}

export default page;


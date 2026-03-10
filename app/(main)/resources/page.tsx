import { HeroSvg } from "@/components/icons/HeroSvg";
import { Resources } from "@/components/resources/resources/Resources";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Web Design Learning Materials | 26labs",
  description:
    "Free design and development resources from 26labs. Learn about web design best practices, performance optimization, and growth strategies.",
  alternates: {
    canonical: "https://26labs.live/resources",
  },
};

function page() {
  return (
    <div className="p-2 overflow-hidden relative">
      <div className=" absolute -z-1000">
        <HeroSvg />
      </div>
      <Resources />
    </div>
  );
}

export default page;

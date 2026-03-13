import Image from "next/image";
import HeroTextAnimation from "./HeroTextAnimation";

export const HeroTxt = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center mx-auto">
      {/* Not Backed by YC badge */}
      <div className="flex items-center gap-2 border border-neutral-600 rounded-full px-4 py-1.5 text-sm text-neutral-200">
        <span>Not Backed by</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center bg-[#FF6600] text-white font-bold text-xs w-5 h-5 rounded-sm leading-none">
            Y
          </span>
          <span className="text-neutral-200">Combinator</span>
        </span>
      </div>

      <div className="bg-linear-to-t leading-14 flex  flex-col items-center font-bold text-[64px]  text-center from-neutral-800 to-neutral-200   bg-clip-text text-transparent ">
        <HeroTextAnimation />
        Component Collection{" "}
      </div>
      <div className="w-222 text-center justify-start text-white tracking-tight text-xl font-normal">
        The fastest, most reliable component library built for modern web
        development. Beautifully designed, easy to integrate, and ready to ship
        — from your first project to your largest product.
      </div>
      <div className="flex gap-3  p-4">
        <Image width={16} height={16} src="/plus/React.png" alt="React" />
        <Image width={16} height={16} src="/plus/TS.png" alt="React" />
        <Image width={110} height={16} src="/plus/Tailwind.png" alt="React" />
      </div>
    </div>
  );
};

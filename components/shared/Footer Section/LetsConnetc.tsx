import { UFO } from "@/components/icons/UFO";





export const LetsConnect = () => {
  return (
    <div className="flex sm:items-end sm:flex-row sm:justify-between  relative w-full px-4 sm:px-6">
      <div className="relative  leading-[0.9] text-4xl sm:text-5xl md:text-7xl lg:text-[95px]">
        <h1>Let&apos;s</h1>
        <h1 className="">Connect </h1>
        <UFO className="absolute h-full w-full right-4 md:-translate-y-8  -translate-y-5 lg:-translate-y-12 " />
      </div>
    </div>
  );
};

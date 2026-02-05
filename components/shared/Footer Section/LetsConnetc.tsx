
import { Socials } from "./Socials";



export const LetsConnect = () => {
  return (
    <div className="flex flex-col items-center gap-10 sm:items-end sm:flex-row sm:justify-between  relative w-full px-4 sm:px-6">
      <div className="relative leading-[0.9] text-4xl sm:text-5xl md:text-7xl lg:text-[95px]">
        <h1>Let&apos;s</h1>
        <h1 className="-rotate-2">Connect </h1>
      </div>
      <p>sales@26labs.live</p>

      <div className="">
        <Socials/>
      </div>
    </div>
  );
};

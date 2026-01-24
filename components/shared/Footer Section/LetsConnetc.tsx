import Image from "next/image";

export const LetsConnect = () => {
  return (
    <div className="flex relative w-full px-4 sm:px-6">
      <div className="relative leading-[0.9] text-4xl sm:text-5xl md:text-7xl lg:text-[95px]">
        <h1>Let&apos;s</h1>
        <h1>Connect </h1>
        <div>
          <Image
            alt="logo"
            width={400}
            height={100}
            src="aa.svg"
            className="absolute -bottom-4 md:-bottom-6 lg:-bottom-7 z-10 w-48 md:w-72 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

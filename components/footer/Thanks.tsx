import Image from "next/image"


export const Thanks = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className=" pt-5 animate-marque ">
          <Image
            loading="lazy"
            alt="logo"
            src="/last.svg"
            height={79}
            width={676}
            className=""
          />
        </div>
        <div className="absolute inset-0 z-10">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-2 left-20 z-10 -translate-x-1/2 ">
              <Image
                loading="lazy"
                alt="logo"
                src="/rihno.svg"
                height={32}
                width={32}
              />
            </div>
            <div className="absolute -inset-x-[15%] bottom-0 h-32 md:h-40 rotate-3 origin-bottom-left">
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-200" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-300 translate-y-6" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-400 translate-y-12" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-600 translate-y-18" />
              <div className="absolute inset-x-0 bottom-0 h-full bg-blue-800 translate-y-24" />
            </div>

            {/* Spacer */}
            <div className="h-32 md:h-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

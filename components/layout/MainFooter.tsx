import Image from "next/image";
import MailFilledIcon from "@/components/ui/mail-filled-icon";

export const LetsConnect = () => {
  return (
    <div className="flex relative justify-between max-w-3xl">
      <div className=" relative  leading-[0.9] text-[95px] ">
        <h1>Let&apos;s</h1>
        <h1>Connect </h1>
        <div>
          <Image
            alt="logo"
            width={400}
            height={100}
            src="aa.svg"
            className="absolute -bottom-7 z-10"
          />
        </div>
      </div>
      <div className="size-10 absolute bottom-0 right-0">
        <MailFilledIcon className="text-blue2 size-12 hover:text-blue-600/90" />
      </div>
    </div>
  );
};

import Image from "next/image";
import { Descripton } from "@/components/shared/Typography";

export const Newsletter = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 md:my-16 lg:my-20 justify-start space-y-1 px-4">
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        We give you more. A monthly
      </h2>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        <span className="text-orange2 tracking-widest">Newsletter</span> to keep
        you updated.
      </h2>
      <div className="flex flex-col md:flex-row my-6 md:my-10 gap-2 md:gap-0">
        <input
          type="text"
          placeholder="Email Address"
          className="ring p-1 w-full md:w-fit"
        />
        <div className="bg-orange1 justify-center ring items-center flex p-1 w-full md:w-auto">
          <Image
            alt="logo"
            width={48}
            height={48}
            src="/logo.svg"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>
      </div>
      <Descripton
        className="text-start text-gray-500"
        description="Be the first to receive ideas, trends, and strategies that help your brand grow smarter and stand out."
      />
    </div>
  );
};

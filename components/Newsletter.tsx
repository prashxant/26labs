import Image from "next/image";
import { Descripton } from "./Typography";


export const Newsletter = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 justify-start space-y-1">
      <h2 className="font-bold  text-4xl ">We give you more. A monthly</h2>
      <h2 className="font-bold  text-4xl ">
        <span className="text-orange2 tracking-widest">Newsletter</span> to keep
        you updated.
      </h2>
      <div className="flex  my-5">
        <input
          type="text"
          placeholder="Email Address"
          className=" ring p-1 w-fit "
        />
        <div className="bg-orange1 justify-center ring items-center flex p-1 ">
          <Image alt="logo" width={48} height={48} src="/logo.svg" />
        </div>
      </div>
      <Descripton
        className="text-start text-gray-500"
        description="Be the first to receive ideas, trends, and strategies that help your brand grow smarter and stand out."
      />
    </div>
  );

}

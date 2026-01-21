import Image from "next/image"


export const Email = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="flex gap-10 ">
        <input
          className="bg-gray-300 ring-[#FFF0E7] ring-2  text-[13px] font-light rounded-[5px] px-2 placeholder:font-light  "
          type="text"
          placeholder="Email"
        />
        <button className="text-mainBg ring-2 bg-blue1 ring-[#0088FF]      shadow-[inset_0px_1px_6px_rgba(0,136,255,1)] rounded-[5px] px-6 py-2">
          Claim It{" "}
        </button>
      </div>
      <div className="rounded-full  flex gap-2 p-2  shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]">
        <Image src="/pfp3.png" width={24} height={24} alt="pfp1" />
        <Image src="/pfp2.png" width={24} height={24} alt="pfp2" />
        <Image src="/pfp1.png" width={24} height={24} alt="pfp3" />
        <div className="rounded-full text-gray-600 p-1 px-3 shadow-[inset_0px_1px_6px_rgba(0,136,255,1)]">
          +99
        </div>
      </div>
    </div>
  );};

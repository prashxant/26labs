import Image from 'next/image';



export const MainFooter = () => {
  return (
    <div className=" max-w-2xl ml-10 flex justify-start p-10">
      <div className=" relative leading-[0.9] text-[95px] ">
        <h1>Let&apos;s</h1>
        <h1>Connect </h1>
        <div>
          <Image
            alt="logo"
            width={400}
            height={100}
            src="aa.svg"
            className="absolute -bottom-7  z-10"
          />
        </div>
      </div>

    </div>
  );
}

import Image from "next/image"


export const Thanks = () => {
  return (
    <div className="bg-amber-300 w-full">
      <div className="">
        <div className=" animate-marque ">
          <Image
            loading="lazy"
            alt="logo"
            src="/last.svg"
            height={79}
            width={676}
          />
        </div>
      </div>
    </div>
  );
}

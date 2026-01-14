import Image from "next/image"


export const Navbar = () => {
  return (
    <div className="bg-blue1 shadow-lg mx-auto px-5 w-178.75 h-13.75 rounded-lg flex justify-between items-center">
      <Menu />
      <Image alt="Company logo" width={116} height={44} src="/logo.svg" />

      <button className="bg-orange2 text-[22.5px] text-shadow-sm rounded-md text-mainBg px-4 py-2">
        Book now
      </button>
    </div>
  );
}


export const Menu = () => {
  return (
    <div className="flex">
        <span className="bg-black h-8.75 w-1.75 mx-0.75 rounded-[6.5px]"></span>
        <span className="bg-black h-8.75 w-2.75 mx-0.75 rounded-[8.5px]"></span>
        <p className="text-[22.5px] text-shadow-sm font-bold ml-[9.5px] ">Menu</p>
    </div>
  )
}

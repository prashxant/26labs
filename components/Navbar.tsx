import Image from "next/image"


export const Navbar = () => {
  return (
    <nav className="sticky top-8 z-50">
      <div
        className="
          mx-auto
          flex items-center justify-between
          h-[55px]
          w-[715px]
          rounded-lg
          bg-blue1
          px-4
          mt-20
          shadow-lg
        "
      >
        <Menu />
        <Image alt="Company logo" width={100} height={40} src="/logo.svg" />

        <button className="bg-orange2 text-[22.5px] text-shadow-sm rounded-md text-mainBg px-4 py-1">
          Book now
        </button>
      </div>
    </nav>
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

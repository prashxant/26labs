import { Typography } from "@/components/ui/Typography";



export const Second = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-21.25 mb-8 h-17.75 font-bold  text-[22.5px]">
        Our Toolkit
      </div>
      <Typography
        variant="h2"
        className="mb-25 "
        line1="Everything You Need"
        line2="to Launch Your"
        popUp="Own Website"
      />
    </div>
  );
}





export const Toolkit = () => {
  return (
    <div className="relative w-full py-32 overflow-hidden bg-[#f3f3f3]">
      
      <div
        className=" pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_70%)]
      blur-2xl"/>

      
      <h2 className="relative z-10 text-center text-xl font-semibold text-black">
        Our Toolkit
      </h2>
    </div>
  );
}




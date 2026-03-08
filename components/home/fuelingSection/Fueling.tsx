



import { USvg } from '@/components/icons/uSvg';
import { Descripton, Typography } from "@/components/ui/Typography";

import  Sliding  from '@/components/home/Sliding';



const Fueling = () => {
  return (
    <div className="relative  ">
      <div className="max-w-6xl flex flex-col items-center mx-auto mt-29 ">
        <Typography
          variant="h2"
          line1="Fueling Growth With"
          popUp="Smart Technology"
          className="mb-6"
        />

        <Descripton
          description="We partner with industry leading platforms to help you automate,scale, and simplify your business operations,so you can focus on what matters most : growth."
          className="max-w-xl px-6 sm:px-0 sm:mb-16"
        />
        <Sliding />
      </div>
    </div>
  );
};
export default Fueling;

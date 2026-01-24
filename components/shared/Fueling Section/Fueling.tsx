import Image from 'next/image';
import { Descripton, Typography } from '../Typography';
import { Fuel } from 'lucide-react';
import { Sliding } from '@/components/sections/Sliding';

const Fueling = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mx-auto my-30 max-w-6xl">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-16 w-full text-center mb-8">
        <Typography
          className="absolute inset-0 -top-20"
          variant="h2"
          line1="Fueling Growth With"
          popUp="Smart Technology" />
      </div>

      <Descripton
        description="We partner with industry-leading platforms to help you automate, scale, and simplify your business operations - so you can focus on what matters most: growth."
        className="max-w-xl text-center mt-8"/>

      <div className="absolute  translate-x-4 translate-y-34 ">
        <Sliding />
      </div>
    </div>
  );
};
export default Fueling;

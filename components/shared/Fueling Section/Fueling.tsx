
import { Descripton, Typography } from '../Typography';
import Image from 'next/image';
import  Sliding  from '@/components/sections/Sliding';


const Fueling = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto mt-29 max-w-6xl text-center">
      
      <Typography
        variant="h2"
        line1="Fueling Growth With"
        popUp="Smart Technology"
        className="mb-6"/>

      <Descripton
        description="We partner with industry leading platforms to help you automate,scale, and simplify your business operations,so you can focus on what matters most : growth."
        className="max-w-xl mb-16"/>

      <Sliding />
    </div>
  );                   
};

export default Fueling;

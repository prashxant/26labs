import Image from 'next/image';
import { Descripton, Typography } from '../Typography';

const Need = () => {
  return (
    <section className="relative mx-auto mt-55 mb-24 max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-9 mb-15">       
        <div className="text-left">
          <Typography
            variant="h2"
            line1="Your"
            popUp="website" className={''}/>
          <Typography
            variant="h2"
            line1="need us." className={''} popUp={''}/>
        </div> 
        <OneCard5 />
      </div>
      <Descripton
        description="By combining thoughtful design, smart AI-driven targeting, and modern technology, we ensure your site speaks to the right people at the right time. Every interaction is crafted to build trust, engagement, and clarity. With us, your website doesn’t just exist — it performs, connects, and grows your brand."
        className="max-w-3xl mx-auto text-center" />
    </section>
  );
};

  export const OneCard5 = () => {
  return (
    <div className="relative w-full flex justify-center md:justify-end">  
      <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[24px] overflow-hidden">
        <Image
          src="/Group 97.png"
          alt="Main dashboard"
          fill
          sizes="(max-width: 788px) 288px, 320px"
          className="object-contain"
          priority />
      </div>
    </div>
  );
};

export default Need;

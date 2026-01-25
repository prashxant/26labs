import Image from 'next/image';
import { Descripton, Typography } from '../Typography';

const Fueling = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mx-auto my-78 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full text-center mb-8">
        <Typography
          className=""
          variant="h2"
          line1="Your website"
          popUp="need us" />
        
      </div>
      <Descripton
        description="By combining thoughtful design, smart AI-driven targeting, and modern technology, we ensure your site speaks to the right people at the right time.  Every interaction is crafted to build trust, engagement, and clarity. With us, your website doesn’t just exist it performs, connects, and grows your brand."
        className="max-w-3xl text-center  "/>  
    </div>
  );
};
export default Fueling;

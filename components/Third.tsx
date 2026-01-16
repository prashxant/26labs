
import { Descripton, Typography } from './Typography'

export const Third = () => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center">
      <Typography
        className=" my-10"
        variant="h2"
        line1="We takes you from"
        line2="Idea to"
        popUp="Live Product."
      />

      <ThreeCards />
      <Descripton
        description="With over 4+ years of experience, we collaborate with businesses of all sizes, from ambitious SaaS startups to established B2B leaders, to transform and improve their presence in the digital space and gain traction."
        className="max-w-xl "
      />
      <Descripton
        description="From strategy and positioning to a fully functional website, every step is covered with a clear, full-cycle process. With our team experts acting as an extension of your business, our research-driven approach ensures websites that reach the right audience, reflect your brand, and drive real growth."
        className="max-w-2xl "
      />

    </div>
  );
}




export const ThreeCards = () => {
  return (
    <div className='grid grid-cols-3 gap-40 pt-10'>
      <div className="w-45 h-45 rounded-[10px] bg-red-300 shadow-2xs"></div>
      <div className="w-45 h-45 rounded-[10px] bg-red-300 shadow-2xs"></div>
      <div className="w-45 h-45 rounded-[10px] bg-red-300 shadow-2xs"></div>
    </div>
  );
}


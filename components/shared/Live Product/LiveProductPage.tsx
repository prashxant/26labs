import Image from 'next/image';
import { Descripton} from '../Typography';

export const LiveProductPage = () => {
  return (
    <div className="flex  flex-col gap-10 justify-center mx-auto items-center my-30">
      <div className="relative">
        <div className="bg-blue1 blur-3xl absolute -z-10 inset-0 pointer-events-none"></div>
        <h2 className="text-4xl text-center md:text-5xl font-bold leading-tight text-gray-900">
          We takes you from
          <br />
          <span className="text-black-500">Idea to</span>
          <span className="text-orange1 ml-2">Live Product</span>
          <span className="text-black-500 ml-2">.</span>
        </h2>
      </div>
      <ThreeCards />
      <Descripton
        description="With over 4+ years of experience, we collaborate with businesses of all sizes, from ambitious SaaS startups to established B2B leaders, to transform and improve their presence in the digital space and gain traction."
        className="max-w-4xl"
      />
      <Descripton
        description="From strategy and positioning to a fully functional website, every step is covered with a clear, full-cycle process. With our team experts acting as an extension of your business, our research-driven approach ensures websites that reach the right audience, reflect your brand, and drive real growth."
        className="max-w-4xl "
      />
    </div>
  );
};



export const ThreeCards = () => {
  const cards = [
    {
      id: 1,
      src: "/Image pack/gt1.svg",
      alt: "Design tools",
      title: "Custom Designs",
    },
    {
      id: 2,
      src: "/Image pack/gt2.svg",
      alt: "Development tools",
      title: "Shipping Faster",
    },
    {
      id: 3,
      src: "/Image pack/gt3.svg",
      alt: "Deployment tools",
      title: "Higher Conversion",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-40 pt-6 md:pt-8 lg:pt-10">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center ">

          <div
            className="  relative
              w-32 h-32 md:w-36 md:h-36 lg:w-45 lg:h-45
              rounded-[14px]
              overflow-hidden
              mx-auto"    >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-contain p-2 md:p-3 lg:p-4"
              priority={card.id === 1}
            />
          </div>
          <p className="text-sm md:text-base font-semibold text-black text-center">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );
};

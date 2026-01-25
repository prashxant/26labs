import Image from 'next/image';
import { Descripton, Typography } from '../Typography';

const Brand = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto my-30 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full text-center mb-8">
        <Typography
          className=""
          variant="h3"
          line1="Website that carry your"
          popUp="Brand Emotion" />
        <Typography
          className="" 
          variant="h3"
          line1="Website Target Based on"
          popUp="AI and Internet" />
      </div>
      <TwoCards />

      <Descripton
        description="We build websites that truly carry your brand’s emotion, translating your vision, values, and personality into meaningful digital experiences, while leveraging AI and internet-driven targeting to reach the right audience with precision. By combining emotional design with data backed intelligence, our websites adapt to user behavior, deliver personalized interactions, and turn attention into engagement and growth."
        className="max-w-3xl text-center mt-8"/>

      <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6">
        <Icon1 />
      </div>
    </div>
  );
};

export const TwoCards = () => {
  const cards = [
    {
      id: 1,
      src: "/Image pack/Brand Emotion.svg",
      alt: "Design tools",
    },
    {
      id: 2,
      src: "/Image pack/Ai and Internet.svg",
      alt: "Development tools",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-25 w-full justify-items-center">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center">
          <div
            className="relative w-48 h-48  md:w-64 md:h-64 lg:w-72 lg:h-72  rounded-[24px] overflow-hidden">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-contain p-4"
              priority={card.id === 1} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const Icon1 = () => {
  return (
    <div className="relative w-29 h-29 rotate-12">
      <Image
        src="/union.svg"
        alt="Decoration"
        fill
        className="object-contain" />
    </div>
  );
};

export default Brand;

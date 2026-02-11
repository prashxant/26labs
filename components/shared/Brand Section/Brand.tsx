import Image from 'next/image';
import { Descripton, Typography } from '../Typography';

export const Brand = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto my-25 max-w-7xl">

      <TwoCards />

      <Descripton
        description="We build websites that truly carry your brand’s emotion, translating your vision, values, and personality into meaningful digital experiences, while leveraging AI and internet-driven targeting to reach the right audience with precision. By combining emotional design with data backed intelligence, our websites adapt to user behavior, deliver personalized interactions, and turn attention into engagement and growth."
        className="max-w-3xl text-center mt-8"/>
    </div>
  );
};


export const TwoCards = () => {
  const cards = [
    {
      id: 1,
      line1: "Website that carry your",
      popUp: "Brand Emotion",
      src: "/Image pack/Brand Emotion.svg",
      alt: "Brand Emotion",
    },
    {
      id: 2,
      line1: "Website Target Based on",
      popUp: "AI and Internet",
      src: "/Image pack/Ai and Internet.svg",
      alt: "AI and Internet",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center text-center">

          <Typography className='' variant="h3" line1={card.line1} popUp={card.popUp} />


          <div className="relative w-full max-w-108 h-70 md:h-75 lg:h-85 rounded-[24px] overflow-hidden  mt-6">
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-contain"
              priority={card.id === 1}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

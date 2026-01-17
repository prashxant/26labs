import { Descripton, Typography } from "@/components/shared/Typography";
import Image from "next/image";

export const Third = () => {
  return (
    <div className=" flex flex-col justify-center mx-auto items-center">
      <div className="relative">
        <div
          className="
      absolute inset-0
      bg-[#8CA9FF]/70
     mask-x-from-60% mask-x-to-100%
    mask-y-from-70% mask-y-to-100%
      z-0
    "
        />
        <Typography
          className="relative z-10 py-5 w-full"
          variant="h2"
          line1="We takes you from"
          line2="Idea to"
          popUp="Live Product."
        />
      </div>

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
};

export const ThreeCards = () => {
  const cards = [
    {
      id: 1,
      src: "/Image pack/gt1.svg",
      alt: "Design tools",
    },
    {
      id: 2,
      src: "/Image pack/gt2.svg",
      alt: "Development tools",
    },
    {
      id: 3,
      src: "/Image pack/gt3.svg",
      alt: "Deployment tools",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-40 pt-6 md:pt-8 lg:pt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            relative
            w-32 h-32 md:w-36 md:h-36 lg:w-45 lg:h-45
            rounded-[10px]
            bg-linear-to-t from-gray-300 to-[#8CA9FF]/50
            shadow-2xs
            overflow-hidden
            mx-auto
          "
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            className="object-contain p-2 md:p-3 lg:p-4"
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 180px"
            priority={card.id === 1}
          />
        </div>
      ))}
    </div>
  );
};

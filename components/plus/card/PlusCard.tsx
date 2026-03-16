const cards = [
  {
    title: "Cards",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
  {
    title: "Buttons",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
  {
    title: "Bars",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
  {
    title: "Iconation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
  {
    title: "Interaction",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
  {
    title: "Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit vel blandit vitae tortor integer.",
  },
];

import { MoveRight } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
};

export const Cardd = ({ title, description }: CardProps) => {
  return (
    <div className="w-[392px]  p-5 border hover:scale-110 transition duration-200 hover:shadow-md shadow-orange-400/50 border-white/20 flex flex-col justify-between gap-4 rounded-xl h-[156px]">
      <div className="flex border-b border-dashed border-white/30 justify-between items-end pb-3">
        <div className="text-white text-[20px] font-medium">{title}</div>

        <div className="size-9 rounded-md border border-orange-400 flex items-center justify-center"></div>
      </div>

      <div className="relative flex justify-between items-end pb-1">
        <p className="text-[13px] text-white/70 pr-10">{description}</p>

        <MoveRight className="text-white absolute right-0 bottom-0 w-5 h-5" />
      </div>
    </div>
  );
};

export const PlusCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Cardd key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

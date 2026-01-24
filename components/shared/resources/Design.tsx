import { Typography } from "../Typography";
import { Card } from "../Toolkit/Cards";
import { Phool } from "../Phool";

const TOP_CARDS = [
  {
    title: "Design.",
    cta: "Explore Design Content",
    description:
      "We use a modern design stack powered by Adobe Creative Suite, Figma, and Framer to craft visually striking and highly functional digital experiences.",
    icons: [
      "/Image pack/Icon/adobe.svg",
      "/Image pack/Icon/figma.svg",
      "/Image pack/Icon/framer.svg",
    ],
  },
  {
    title: "Develop.",
    cta: "Find more about Development",
    description:
      "We convert design specifications into efficient, scalable, and reliable code with emphasis on performance, structure, and long-term maintainability.",
    icons: [
      "/Image pack/Icon/react.svg",
      "/Image pack/Icon/Next js.svg",
      "/Image pack/Icon/Tailwind.svg",
    ],
  },
  {
    title: "Deploy.",
    cta: "Know about Deployment",
    description:
      "We take products live through a secure deployment process with monitoring, optimization, and scalability in mind.",
    icons: [
      "/Image pack/Icon/vercel.svg",
      "/Image pack/Icon/netlify.svg",
      "/Image pack/Icon/docker.svg",
    ],
  },
];

export const Design = () => {
  return (
    <section className=" flex flex-col  mx-auto max-w-7xl">
      
      <div className="py-16 flex justify-center">

        <Typography
          variant="h2"
          className=""
          line1=""
          line2=""
          popUp="Design Resources"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
        {TOP_CARDS.map((card, i) => (
          <Card
            key={card.title}
            {...card}
            className={`
              ${i !== TOP_CARDS.length - 1 ? "md:border-r border-black" : ""}
              border-b md:border-b-0
            `}
          />
        ))}
      </div>
      <Phool
        Line1="Develop for Society"
        Line2="Develop better Humanity"
        src="Image pack/phool.svg"
      />
      <div className="pb-32 flex flex-col justify-center items-center">
        <Typography
          variant="h2"
          className="py-16"
          line1=""
          line2=""
          popUp="Design Resources"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 border border-black">
          {TOP_CARDS.map((card, i) => (
            <Card
              key={card.title}
              {...card}
              className={`
              ${i !== TOP_CARDS.length - 1 ? "md:border-r border-black" : ""}
              border-b md:border-b-0
            `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

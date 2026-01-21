import Image from "next/image";
import { cn } from "@/lib/utils";

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
    className: "",
  },
  {
    title: "Develop.",
    cta: "Find more about Development",
    description:
      "We convert design specifications into efficient, scalable, and reliable code. By applying contemporary frameworks and established development practices, we create websites and applications that demonstrate consistent performance, fast load times, and compatibility across devices. Emphasis is placed on code quality, structural clarity, and sustainable scalability, ensuring long-term functionality and maintainability.",
    icons: [
      "/Image pack/Icon/react.svg",
      "/Image pack/Icon/Next js.svg",
      "/Image pack/Icon/Tweal wind.svg",
    ],
    className: "border-x border-black",
  },
  {
    title: "Deploy.",
    cta: "Know about Deployment",
    description:
      "We take products live through a secure and well-planned deployment process. This includes hosting configuration and performance optimization to ensure the product is fully production-ready and capable of scaling as requirements grow. The launch is supported by system monitoring and optimization practices that promote stability and long-term reliability.",
    icons: [
      "/Image pack/Icon/vercel.svg",
      "/Image pack/Icon/neglefer.svg",
      "/Image pack/Icon/Docker.svg",
    ],
    className: "",
  },
];

const BOTTOM_CARDS = [
  {
    title: "Maintain.",
    cta: "Maintenance need consistency",
    description:
      "Effective digital products require consistency and structured oversight. We maintain websites through regular updates, performance optimization, and issue resolution to ensure continued reliability as requirements evolve. Ongoing improvements and maintenance tasks are managed systematically to support long-term performance and stability.",
    icons: [
      "/Image pack/Icon/Docker.svg",
      "/Image pack/Icon/github.svg",
      "/Image pack/Icon/cloudflear.svg",
    ],
    className: "",
  },
  {
    title: "Support (24x7)",
    cta: "2am push a update",
    description:
      "Technical issues are not limited to standard working hours, and our support services reflect that reality. Whether addressing minor fixes or urgent updates, our team remains available around the clock to ensure uninterrupted operation and consistent performance.",
    icons: [
      "/Image pack/Icon/gmail.svg",
      "/Image pack/Icon/slake.svg",
      "/Image pack/Icon/call.svg",
    ],
    className: "border-r border-l border-black",
  },
];

export default function ProcessGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      {/* TOP GRID */}
      <div className="grid grid-cols-3 border border-black gap-px">
        {TOP_CARDS.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      {/* BOTTOM GRID (CENTERED) */}
      <div className="py-px">
        <div className="mx-auto grid w-[66.6667%] grid-cols-2 border-b border-l border-black gap-px">
          {BOTTOM_CARDS.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Card({
  title,
  cta,
  description,
  icons,
  className,
}: {
  title: string;
  cta: string;
  description: string;
  icons: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-10 flex h-full flex-col justify-between gap-6",
        className,
      )}
    >
      {/* ICONS */}
      <div className="flex pt-5 gap-3">
        {icons.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={34}
            height={34}
            className="rounded"
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="space-y-3">
        <h3 className="text-lg pl-2 font-semibold">{title}</h3>
        <p className="text-[13px] leading-relaxed font-light text-neutral-600">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>↓</span>
        <span>{cta}</span>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { MessageIcon } from "@/components/icons/message";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import TwitterXIcon from "@/components/ui/twitter-x-icon";
import YoutubeIcon from "@/components/ui/youtube-icon";
import { Typography } from "@/components/shared/Typography";

interface Service {
  icons?: React.ReactNode[];
  title: string;
  description: string;
  linkText: string;
}

export const Card = () => {
  return (
    <div className="">
      <ServicesGrid />
    </div>
  );
};

const ServiceCard = ({ icons = [], title, description, linkText }: Service) => {
  return (
    <div className="border  border-black  p-8  h-full flex flex-col">
      {icons.length > 0 && (
        <div className="flex gap-3 mb-6">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center"
            >
              {icon}
            </div>
          ))}
        </div>
      )}

      <h3 className="text-2xl font-semibold pl-2 mb-4">{title}</h3>

      <p className="text-gray-700 mb-6 leading-relaxed grow">{description}</p>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
      >
        <span>↓</span> {linkText}
      </a>
    </div>
  );
};

const ServicesGrid = () => {
  const services: Service[] = [
    {
      icons: [
        <div
          key="ps"
          className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold"
        >
          Ps
        </div>,
        <div
          key="figma"
          className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white"
        >
          <Image src="/logo.svg" alt="Figma" width={24} height={24} />
        </div>,
        <div
          key="framer"
          className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white"
        >
          <Image src="/fevicon.svg" alt="Framer" width={24} height={24} />
        </div>,
      ],
      title: "Design.",
      description:
        "We use a modern design stack powered by Adobe Creative Suite, Figma, and Framer to craft visually striking and highly functional digital experiences.",
      linkText: "Explore Design Content",
    },
    {
      icons: [
        <div
          key="react"
          className="w-10 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 text-xl"
        >
          ⚛
        </div>,
        <div
          key="next"
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white"
        >
          <Image src="/union.svg" alt="Next.js" width={20} height={20} />
        </div>,
        <div
          key="tailwind"
          className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white text-xl"
        >
          〜
        </div>,
      ],
      title: "Develop.",
      description:
        "Building powerful web applications with React, Next.js, and Tailwind CSS. Our development process focuses on performance, scalability, and modern best practices.",
      linkText: "Find more about Development",
    },
    {
      icons: [
        <div
          key="vercel"
          className="w-10 h-10 bg-black rounded flex items-center justify-center text-white text-xl"
        >
          ▲
        </div>,
        <div
          key="aws"
          className="w-10 h-10 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 rounded flex items-center justify-center text-white"
        >
          <Image src="/aa.svg" alt="AWS" width={24} height={24} />
        </div>,
        <div
          key="netlify"
          className="w-10 h-10 bg-teal-400 rounded flex items-center justify-center text-white text-xl"
        >
          -n-
        </div>,
      ],
      title: "Deploy.",
      description:
        "Seamless deployment on modern platforms like Vercel, AWS, and Netlify. We ensure your applications are live with optimal performance and reliability.",
      linkText: "Know about Deployment",
    },
    {
      icons: [
        <div
          key="github"
          className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white"
        >
          <Image
            src="/bgF.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="invert"
          />
        </div>,
        <div
          key="support"
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white"
        >
          <MessageIcon />
        </div>,
        <div
          key="cloud"
          className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl"
        >
          ☁
        </div>,
      ],
      title: "Maintain.",
      description:
        "Continuous monitoring and maintenance to keep your website running smoothly. We provide regular updates, security patches, and performance optimization.",
      linkText: "Maintenance needs consistency",
    },
    {
      icons: [
        <LinkedinIcon key="linkedin" size={40} className="text-gray-700" />,
        <TwitterXIcon key="twitter" size={40} className="text-gray-700" />,
        <YoutubeIcon key="youtube" size={40} className="text-gray-700" />,
      ],
      title: "Support (24×7)",
      description:
        "Round-the-clock support for your digital presence. Whether it's a late-night emergency or a scheduled update, we're here to help anytime.",
      linkText: "2am push an update",
    },
  ];

  return (
    <section className="min-h-screen bg-mainBg p-8 flex items-center justify-center">
      <div className="max-w-6xl my-10 w-full">
        <Typography
          variant="h2"
          className=""
          line1="Everything You Need"
          line2="to Launch Your "
          popUp="Own Website."
        />

        <div className="flex mt-20 flex-col">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1  md:grid-cols-2  md:w-2/3">
              {services.slice(3).map((service, i) => (
                <ServiceCard key={i} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

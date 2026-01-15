import Image from "next/image";

export const Sliding = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center mb-12.5 mt-12.5 justify-center overflow-hidden  mask-x-from-70% mask-x-to-95%">
      <Slider />
    </div>
  );
};

const Slider = () => {
  const Logo = [
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
    { src: "/logo.svg", alt: "Somthing" },
  ];

  const loopLogos = [...Logo, ...Logo];

  return (
    <div className="animate-marque flex gap-15 ">
      {loopLogos.map((item, index) => (
        <Image
          loading="lazy"
          key={index}
          alt={item.alt}
          src={item.src}
          height={48}
          width={100}
        />
      ))}
    </div>
  );
};

import Image from "next/image";

export const Sliding = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center mb-12.5 mt-12.5 justify-center overflow-hidden  mask-x-from-70% mask-x-to-95%">
      <Slider/>
    </div>
  );
};

const Slider = () => {
  const Logo = [
    { src: "Image pack/Icon/Docker.svg", alt: "Somthing"},
    { src: "/n8n-color.svg", alt: "Somthing" },
    { src: "/icons8-supabase-240.png", alt: "Somthing" },
    { src: "/amazon_web_services_icon.jpeg.png", alt: "Somthing" },   
    { src: "/clickup_symbol.png.png", alt: "Somthing" },
    { src: "/zapier-icon.png", alt: "Somthing" },  
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
          height={64}
          width={90}/>
      ))}
    </div>
  );
};

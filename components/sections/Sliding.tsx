import Image from "next/image";

export const Sliding = () => {
  return (
    <div className="w-full flex flex-col items-center my-12 justify-center overflow-hidden">
      <SlidingLogos />
    </div>
  );
};

function SlidingLogos() {
  const logos = [
    { src: "/Image pack/Icon/Docker.svg", alt: "Docker" },
    { src: "/n8n-color.svg", alt: "n8n" },
    { src: "/icons8-supabase-240.png", alt: "Supabase" },
    { src: "/zapier-icon.png", alt: "Zapier" },
    { src: "/aistudio11.svg", alt: "AI Studio" },
    { src: "/cloudflare2.svg", alt: "Cloudflare" },
    { src: "/lambda.svg", alt: "Lambda" },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="marquee flex">
        {loopLogos.map((logo, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-24 sm:h-20 flex items-center justify-center shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={82}
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliding;

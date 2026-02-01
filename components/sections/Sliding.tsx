import Image from "next/image";

export const Sliding = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center mb-12.5 mt-12.5 justify-center overflow-hidden  mask-x-from-70% mask-x-to-95%">
      <SlidingLogos/>
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
    <div className="max-w-5xl mx-auto overflow-hidden py-12">
      <div className="marquee">
        {loopLogos.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-20 flex items-center justify-center shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliding;

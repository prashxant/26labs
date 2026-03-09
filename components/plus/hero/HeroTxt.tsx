import Image from 'next/image';
import HeroTextAnimation from './HeroTextAnimation';


export const HeroTxt = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center mx-auto">
      <div className="bg-linear-to-t leading-14 flex  flex-col items-center font-bold text-[64px]  text-center from-neutral-800 to-neutral-200   bg-clip-text text-transparent "><HeroTextAnimation/>Component Collection </div>
      <div className="w-222 text-center justify-start text-white tracking-tight text-xl font-normal">
        The fastest, most reliable component library built for modern web
        development. Beautifully designed, easy to integrate, and ready to ship
        — from your first project to your largest product.
      </div>
      <div className="flex gap-3  p-4">
        <Image width={16} height={16} src="/plus/React.png" alt="React" />
        <Image width={16} height={16} src="/plus/TS.png" alt="React" />
        <Image width={110} height={16} src="/plus/Tailwind.png" alt="React" />
      </div>
    </div>
  );
}

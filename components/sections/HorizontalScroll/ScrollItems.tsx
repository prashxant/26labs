import Image from "next/image";
import { cn } from "@/lib/utils";
import { Flower } from "lucide-react";


export const Point = ({ 
  children, 
  x, 
  y 
}: { 
  children: React.ReactNode; 
  x: number; 
  y: number; 
}) => {
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {children}
    </div>
  );
};

export const PhotoCard = ({ src, className }: { src: string; className?: string }) => (
  <div >
    <Image 
      src={src} 
      alt="Project" 
      width={390} 
      height={300} 
      className="object-cover w-full h-full"
    />
  </div>
);

export const IconCard = ({ src }: { src?: string }) => (
  <div className="relative w-24 h-24 hover:scale-110 transition-transform">
    {src ? (
      <Image src={src} alt="Icon" fill className="object-contain" />
    ) : (
      <Flower className="w-16 h-16 text-orange-400 fill-current" />
    )}
  </div>
);
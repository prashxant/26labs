import Image from "next/image";
import { cn } from "@/lib/utils";
import { Flower } from "lucide-react";

// The Wrapper that handles the XY positioning
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
  <div className={cn("w-[450px] aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white", className)}>
    <Image 
      src={src} 
      alt="Project" 
      width={450} 
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
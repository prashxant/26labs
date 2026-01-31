import Image from "next/image";
import React from "react";




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
      style={{ left: `${x}px`, top: `${y}px` }}   >
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
      className="object-cover w-full h-full"  />
  </div>
);

export const Phool = () => {
  return (
    <div className="relative w-29 h-29 rotate-12">
      <Image
        src="/union.svg"
        alt="Decoration"
        fill
        className="animate-spin-slow" />
    </div>
  );
};
export const Phool2 = () => {
  return (
    <div className="relative w-35 h-35 rotate-12">
      <Image
        src="/Image pack/phool.svg"
        alt="Decoration"
        fill
        className="animate-spin-slow" />
    </div>
  );
};
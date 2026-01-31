import Image from "next/image";
import React from "react";

export const Point = ({
  children,
  x,
  y,
}: {
  children: React.ReactNode;
  x: number;
  y: number;
}) => {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {children}
    </div>
  );
};

export const PhotoCard = ({
  src,
  width = 390,
  height = 300,
  className = "",
}: {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image
        src={src}
        alt="Project"
        fill
        className="rounded-xl "
        sizes="(max-width: 768px) 100vw, auto"
        priority={false}
      />
    </div>
  );
};

export const Phool = () => {
  return (
    <div className="relative w-29 h-29 rotate-12">
      <Image
        src="/union.svg"
        alt="Decoration"
        fill
        className="animate-spin-slow"
      />
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
        className="animate-spin-slow"
      />
    </div>
  );
};

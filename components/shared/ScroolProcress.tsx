"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(barRef.current, {
          scaleX: self.progress,
          transformOrigin: "left center",
          ease: "none",
          overwrite: true,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-9999 h-0.75 w-full bg-transparent">
      <div ref={barRef} className="h-full w-full bg-orange2 scale-x-0" />
    </div>
  );
}

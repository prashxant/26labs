"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Point, PhotoCard, Phool2 } from "./ScrollItems";
import WaveBackground from "./WaveBackground";
import { Phool } from "@/components/shared/Phool";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const componentRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    if (!componentRef.current || !scrollContentRef.current || !waveRef.current) return;

    const totalWidth = 8572;
    const scrollLength = totalWidth - window.innerWidth;

    const wave = waveRef.current;

   
    ScrollTrigger.create({
      trigger: componentRef.current,
      start: "top top",
      end: `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
       
        gsap.set(scrollContentRef.current!, {
          x: -scrollLength * self.progress,
        });

        
        const amplitude = 50; 
        const frequency = Math.PI * 2; 

        const yOffset = Math.sin(self.progress * frequency) * amplitude;

        gsap.set(wave, {
          y: yOffset,
        });
      },
    });
  }, componentRef);

  return () => ctx.revert();
}, []);



  return (
    <section
      ref={componentRef}
      className="relative h-screen w-full overflow-hidden bg-[#F5F5F5]"  >
      <div
        ref={scrollContentRef}
        className="absolute top-0 left-0 h-full w-2143 will-change-transform"     >
        
        <WaveBackground ref={waveRef} />     
        <Point x={300} y={200}>
             <div className="flex justify-center">
                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
                       Take a Look at Some of <br />
                        Our{" "}
                 <span className="relative inline-block text-orange-500">
                      Featured Projects                 
                </span>
                </h2>
             </div>
        </Point>

        <Point x={800} y={400}>
          <PhotoCard src="/HorizontalScroll/Project 1.svg" />
        </Point>

        <Point x={1000} y={550}>
          <PhotoCard src="/HorizontalScroll/Rectangle.png" />
        </Point>

        <Point x={1150} y={330}>
          <div className="w-75 font-bold text-gray-600">
            <span className="text-orange-500">Diagnose AI</span>
            is a health-tech project that runs on an in-house server hosted in our lab.
          </div>
        </Point>

        <Point x={1670} y={300}>
          <Phool />
        </Point>

        <Point x={2000} y={400}>
          <PhotoCard src="/HorizontalScroll/Project 2.svg" />
        </Point>

        <Point x={2340} y={450}>
          <div className="w-76 font-bold text-gray-600">
            It's a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={2520} y={620}>
         <Phool2 />
        </Point>

        <Point x={3090} y={670}>
          <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 3.svg" />
          </div>
        </Point>

        <Point x={3040} y={470}>
          <div className="w-76 font-bold text-gray-600">
            Its a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={3990} y={220}>
           <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 4.svg" />
          </div>
        </Point>

        <Point x={4350} y={220}>
         <Phool />
        </Point>

        <Point x={4900} y={350}>
           <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 5.svg" />
          </div>
        </Point>

        <Point x={5600} y={930}>
        <Phool />
        </Point>

        <Point x={6500} y={360}>
          <PhotoCard src="/HorizontalScroll/mockuuups-free-imac-mockup.png" />
        </Point>

          <Point x={7990} y={270}>
          <Phool2 />
        </Point>
      </div>
    </section>
  );
}

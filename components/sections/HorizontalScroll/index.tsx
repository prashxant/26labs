"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Point, PhotoCard, IconCard } from "./ScrollItems";
import WaveBackground from "./WaveBackground";

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
      className="relative h-screen w-full overflow-hidden bg-[#F5F5F5]"
    >
      <div
        ref={scrollContentRef}
        className="absolute top-0 left-0 h-full w-2143 will-change-transform"
      >
        
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

        <Point x={910} y={550}>
          <PhotoCard src="/HorizontalScroll/Project 1.svg" />
        </Point>

        <Point x={1250} y={750}>
          <PhotoCard src="/HorizontalScroll/Rectangle.png" />
        </Point>

        <Point x={1250} y={490}>
          <div className="w-75 font-bold text-gray-600">
            <span className="text-orange-500">Diagnose AI </span>
            is a health-tech project that runs on an in-house server hosted in our lab.
          </div>
        </Point>

        <Point x={1750} y={300}>
          <IconCard src="/union.svg" />
        </Point>

        <Point x={2040} y={450}>
          <PhotoCard src="/HorizontalScroll/Project 2.svg" />
        </Point>

        <Point x={2440} y={500}>
          <div className="w-76 font-bold text-gray-600">
          1  Its a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses .
          </div>
        </Point>

        <Point x={2650} y={720}>
          <IconCard src="Image pack/phool.svg" />
        </Point>

        <Point x={3090} y={670}>
          <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 3.svg" />
          </div>
        </Point>

        <Point x={3040} y={470}>
          <div className="w-76 font-bold text-gray-600">
            Its a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesse.
          </div>
        </Point>

        <Point x={3990} y={220}>
           <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 4.svg" />
          </div>
        </Point>

        <Point x={4350} y={220}>
          <IconCard src="Image pack/phool.svg" />
        </Point>

        <Point x={4900} y={350}>
           <div className="w-100 h-62.5">
          <PhotoCard src="/HorizontalScroll/Project 5.svg" />
          </div>
        </Point>

        <Point x={5600} y={930}>
          <IconCard src="/union.svg" />
        </Point>

        <Point x={6500} y={360}>
          <PhotoCard src="/HorizontalScroll/mockuuups-free-imac-mockup.png" />
        </Point>

          <Point x={7990} y={370}>
          <IconCard src="Image pack/phool.svg" />
        </Point>
      </div>
    </section>
  );
}

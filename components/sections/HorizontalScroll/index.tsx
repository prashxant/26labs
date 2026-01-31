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
  <PhotoCard
    src="/HorizontalScroll/Rectangle.png"
    width={460}
    height={300}
  />
</Point>



        <Point x={1150} y={330}>
          <div className="w-75 font-bold text-gray-600">
            <span className="text-orange-500">Diagnose AI </span>
                is a health-tech project that runs on an in-house server hosted in our lab.
          </div>
        </Point>

        <Point x={1670} y={300}>
          <Phool />
        </Point>

        <Point x={1960} y={400}>
          <PhotoCard src="/HorizontalScroll/Project 2.svg" />
        </Point>

        <Point x={2300} y={250}>
         <PhotoCard
         src="/HorizontalScroll/Rectangle 2.png"
          width={460}
         height={300}
         />
        </Point>

        <Point x={2340} y={450}>
          <div className="w-76 font-bold text-gray-600">
            It's a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={2520} y={620}>
         <Phool2 />
        </Point>

       <Point x={3090} y={520}>
         <div className="relative w-140">
             <div className="absolute -top-25 left-6 px-5 py-3 rounded-xl z-20">
             <p className="text-md font-semibold text-gray-700 leading-snug">
             Communication gap between the <br />
             Consumer and Dental industry
            </p>
            <p className="text-orange-500 text-sm font-bold mt-1">
            Oro a Oral product
            </p>
            </div>

            <div className="absolute -right-6 top-8 w-full h-full bg-orange-300 rounded-2xl z-0" />

            <div className="relative rounded-2xl shadow-lg p-4 z-10">
            <PhotoCard src="/HorizontalScroll/Project 3.svg" />
            </div>
            <div className="absolute bottom-4 right-10 bg-sky-400 text-white px-6 py-2 rounded-xl font-bold shadow-lg z-20">
             Solves
            </div>
           </div>
           </Point>

        <Point x={3990} y={230}>
           <div className="w-100 h-63.5">
          <PhotoCard src="/HorizontalScroll/Project 4.svg" />
          </div>
        </Point>

        <Point x={4350} y={220}>
         <Phool2 />
        </Point>

        <Point x={5200} y={590}>        
          <PhotoCard src="/HorizontalScroll/Mockup Scene 52.png"  width={490} height={390} />       
        </Point>
        <Point x={5600} y={590}>        
          <PhotoCard src="/HorizontalScroll/Frame 18.png" width={360} height={200} />      
        </Point>
        <Point x={5990} y={750}>
        <Phool />
        </Point>


        <Point x={6500} y={360}>
          <PhotoCard src="/HorizontalScroll/Group 109.png" width={490} height={390} />
        </Point>

          <Point x={7990} y={270}>
          <Phool2 />
        </Point>
        
        <Point x={7800} y={670}>
          <PhotoCard src="/HorizontalScroll/Frame 201.png" />
        </Point>
         <Point x={8150} y={550}>
          <PhotoCard src="/HorizontalScroll/Rectangle666.png"  width={490} height={390}/>
        </Point>







      </div>
    </section>
  );
}
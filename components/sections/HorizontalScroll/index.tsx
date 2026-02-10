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

   const DESIGN_WIDTH = 1440;
const scale = Math.min(window.innerWidth / DESIGN_WIDTH, 1);

const totalWidth = 8572 * scale;
const scrollLength = totalWidth - window.innerWidth;


gsap.set(scrollContentRef.current, {
  scale,
  transformOrigin: "top left",
});


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
      className="relative  h-screen w-full overflow-hidden bg-[#F5F5F5]"  >
      <div
        ref={scrollContentRef}
        className="absolute top-0 left-0 h-full w-2143 will-change-transform">

        <WaveBackground ref={waveRef} />


        
        <Point x={300} y={200}>
             <div className="flex justify-center">
                 <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
                       Take a Look at Some of <br />
                        Our{" "}
                 <span className="relative inline-block text-[#FF8535]                     ">
                      Featured Projects
                </span>
                </h2>
             </div>
        </Point>

        <Point x={800} y={400}>
          <PhotoCard src="/HorizontalScroll/Project 1.svg" />
        </Point>

        <Point x={1002} y={550}>
        <PhotoCard
          src="/HorizontalScroll/Rectangle.png"
          width={460}
          height={300}/>
        </Point>

        <Point x={1150} y={330}>
          <div className="w-75 font-bold text-gray-600">
            <span className="text-orange2">Diagnose AI </span>
                is a health-tech project that runs on an in-house server hosted in our lab.
          </div>
        </Point>

        <Point x={1670} y={290}>
          <Phool/>
        </Point>

        <Point x={1960} y={400}>
          <PhotoCard src="/HorizontalScroll/Project 2.svg" />
        </Point>

        <Point x={2310} y={290}>
         <PhotoCard
         src="/HorizontalScroll/Rectangle 2.png"
          width={460}
         height={300}
         />
        </Point>

        <Point x={2340} y={490}>
          <div className="w-76 font-bold text-gray-600">
            It&apos;s a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={2520} y={620}>
         <Phool2 />
        </Point>

       <Point x={3090} y={630}>
         <div className="relative w-140">
             <div className="absolute -top-21 left-1 px-5 py-3 rounded-xl z-20">
             <p className="text-md font-semibold text-gray-700 leading-snug">
             Communication gap between the <br />
             Consumer and Dental industry
            </p>
            <p className="text-orange2 text-md font-bold mt-1">
            Oro a Oral product
            </p>
            </div>
            <div className="relative rounded-2xl  p-4 z-10">
            <PhotoCard className="" src="/HorizontalScroll/Project 3.svg" />
            </div>
           </div>
           </Point>

        <Point x={4100} y={340}>   
          <PhotoCard src="/HorizontalScroll/Project 4.svg" width={520} height={420}/>    
        </Point>
        <Point x={3700} y={250}>
         <div className="relative w-140">
            <div className="absolute -top-21 left-1 px-5 py-3 font-semibold rounded-xl z-20">
             <p className="text-md font-semibold leading-snug">
            <span className="text-orange2">Finta</span> is a startup-focused financial platform that
            <br />
            simplifies accounting and tax processes with
            <br />
            automated bookkeeping and real-time insights.
            <br />
            We mainly focus on the UI/UX part here.
            <br />
            </p>
            </div>
           </div>
           </Point>


        <Point x={4450} y={430}>
         <Phool2 />
        </Point>

        <Point x={5200} y={590}>
          <PhotoCard src="/HorizontalScroll/Mockup Scene 52.png"  width={420} height={320} />
        </Point>
        <Point x={5520} y={590}>
          <PhotoCard src="/HorizontalScroll/Frame 18.png" width={290} height={150} />
        </Point>
        
       <Point x={5690} y={510}>
         <div className="relative w-140">
             <div className="absolute -top-21 left-1 px-5 py-3 font-semibold rounded-xl z-20">
              <p className="text-orange2 text-md mt-1">
              GlobeWork 
              </p>
              <p className="text-md font-semibold text-gray-700 leading-snug">
              It is a web application build <br />
              using Nest.js and TypeScript
             </p>        
            </div>
           </div>
           </Point>
        <Point x={5990} y={750}>
        <Phool />
        </Point>


        <Point x={6500} y={360}>
          <PhotoCard src="/HorizontalScroll/Group 109.png" width={490} height={390} />
        </Point>
         <Point x={6890} y={290}>
         <div className="relative w-140">
            <div className="absolute -top-21 left-1 px-5 py-3 font-semibold rounded-xl z-20">
             <p className="text-md font-semibold leading-snug">
            <span className="text-orange2">Boogymen</span> is a seamless solution for 
            <br />
            hostel students to get food from 
            <br />
            outside the campus.
            </p>
            </div>
           </div>
           </Point>
                 

          <Point x={8300} y={360}>
          <Phool2 />
        </Point>

        <Point x={7800} y={620}>
          <PhotoCard src="/HorizontalScroll/Frame 201.png" width={290} height={190} />
        </Point>
         <Point x={8070} y={550}>
          <PhotoCard src="/HorizontalScroll/Rectangle666.png"  width={490} height={390}/>
        </Point>
        <Point x={7850} y={500}>
         <div className="relative w-140">
            <div className="absolute -top-21 left-1 px-5 py-3 font-semibold rounded-xl z-20">
             <p className="text-md font-semibold leading-snug">
            <span className="text-orange2">TWNTY1</span> Closet is our own fashion brand focused on 
            <br />
            modern, street inspired clothing. Although we did not
            <br />
            develop the website, the products and brand are 
            <br />
           entirely ours.
            <br />
            </p>
            </div>
           </div>
           </Point>

      </div>
    </section>
  );
}

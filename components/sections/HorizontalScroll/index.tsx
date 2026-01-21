"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Point, PhotoCard, IconCard} from "./ScrollItems";
import WaveBackground from "./WaveBackground";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const componentRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollContentRef.current || !componentRef.current) return;

      const totalWidth = 8572; 
      const scrollLength = totalWidth - window.innerWidth;

      gsap.to(scrollContentRef.current, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="relative h-screen w-full overflow-hidden bg-[#F5F5F5]">
      <div ref={scrollContentRef} className="absolute top-0 left-0 h-full w-[8572px] will-change-transform">
        
      
        <WaveBackground />

      
        
        <Point x={400} y={300}>
          <div className="text-4xl font-bold w-[500px]">
          Take a Look at Some of {" Our "} 
          <span className="text-orange-500">featured projects</span>
          </div>
         </Point>

        <Point x={1000} y={700}>
          <PhotoCard src="/HorizontalScroll/Project 1.svg" />
        </Point>

        <Point x={1400} y={590}>
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
            Its a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={2650} y={720}> 
          <IconCard src="Image pack/phool.svg" />
        </Point>

         <Point x={3090} y={670}>
          <PhotoCard src="/HorizontalScroll/Project 3.svg" />
        </Point>

        <Point x={3040} y={470}>
          <div className="w-76 font-bold text-gray-600">
            Its a tax and financial services software platform made for Simplifying tax management and financial guidance for individuals and businesses.
          </div>
        </Point>

        <Point x={3990} y={220}>
          <PhotoCard src="/HorizontalScroll/Project 4.svg" />
        </Point>

        <Point x={4350} y={220}> 
          <IconCard src="Image pack/phool.svg" />
        </Point>

          <Point x={4900} y={350}>
          <PhotoCard src="/HorizontalScroll/Project 5.svg" />
        </Point>

         <Point x={5600} y={930}>
          <IconCard src="/union.svg" />
        </Point>

         <Point x={6500} y={360}>
          <PhotoCard src="/HorizontalScroll/Project 5.svg" />
        </Point>







        

      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------ Item Wrapper ------------------ */
function HorizontalItem({ children }: { children: React.ReactNode }) {
  return <div className="shrink-0 w-[420px]">{children}</div>;
}

/* ------------------ Main Section ------------------ */
export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const svg = svgRef.current;

    if (!section || !track || !svg) return;

    const scrollLength = track.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollLength}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Horizontal content scroll
    tl.to(
      track,
      {
        x: -scrollLength,
        ease: "none",
      },
      0,
    );

    // Decorative SVG parallax (slower)
    tl.to(
      svg,
      {
        x: -scrollLength * 2, // 👈 control parallax strength here
        ease: "none",
      },
      0,
    );

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden


      "
    >
      {/* Decorative SVG */}
      <DecorativeWave svgRef={svgRef} />

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="relative z-10 flex h-full w-max items-center gap-32 px-40"
      >
        <HorizontalItem >
          <Photo1 />

        </HorizontalItem>
        <HorizontalItem>
          <FeatureBlock />
        </HorizontalItem>
        <HorizontalItem>
          <Photo2 />
        </HorizontalItem>
        <HorizontalItem>
          <FeatureBlock />
        </HorizontalItem>
        <HorizontalItem>
          <Photo1 />
        </HorizontalItem>
        <HorizontalItem>
          <FeatureBlock />
        </HorizontalItem>
        <HorizontalItem>
          <Photo2 />
        </HorizontalItem>
        <HorizontalItem>
          <FeatureBlock />
        </HorizontalItem>
      </div>
    </section>
  );
}

/* ------------------ Decorative SVG ------------------ */
/* ------------------ Decorative SVG ------------------ */
export function DecorativeWave({
  svgRef,
}: {
  svgRef: React.RefObject<SVGSVGElement | null>;
}) {
  return (
    <svg
      ref={svgRef}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      className="
        pointer-events-none
        absolute
        left-0
        top-1/2
        -translate-y-1/2
        -z-10
        w-[500vw]
        max-w-none
      "
      height="954"
      viewBox="0 0 8572 954"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M-1523 874.162
           s1418.79-363.353 1863.638-446.32
           c444.847-82.966 514.07 440.323 911.162 408.336
           c397.09-31.988 390.65-497.8 753.39-555.277
           c362.75-57.477 725.5 593.261 1150.49 523.289
           c424.99-69.971 500.66-357.356 952.48-414.832
           c451.82-57.477 722.81 209.915 1082.34 446.82
           c359.52 236.902 977.7-114.912 1278.2-415.333
           c300.5-300.421 1076.43-424.829 1103.26 38.984
           C7598.79 923.642 8639.5 21.5 8639.5 21.5"
        stroke="#8CA9FF"
        strokeWidth={78}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ------------------ Demo Components ------------------ */

function Photo1() {
  return (
    <div className=" rounded-xl  bg-red-400 flex items-center justify-center">
      Photo 1
    </div>
  );
}

function Photo2() {
  return (
    <div className="h-[300px] rounded-xl bg-green-400 flex items-center justify-center">
      Photo 2
    </div>
  );
}

function FeatureBlock() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-xl">
      <h3 className="text-xl font-semibold">Feature</h3>
      <p className="mt-2 text-sm text-gray-600">Some feature description.</p>
    </div>
  );
}

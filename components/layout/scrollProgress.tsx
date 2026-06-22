"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(
          Math.max(progress, 0),
          1
        )})`;
      }
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-9999 h-0.75 w-full bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-orange2"
      />
    </div>
  );
}

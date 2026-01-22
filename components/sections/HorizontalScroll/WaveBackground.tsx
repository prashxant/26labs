import React, { forwardRef } from "react";

const WaveBackground = forwardRef<SVGSVGElement, {}>((props, ref) => {
  return (
    <svg
      ref={ref}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-0 top-0 w-[8572px] h-full z-0"
      viewBox="0 0 8572 1024"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
    
      <path
        d="M-1523 874.162 s1418.79-363.353 1863.638-446.32 c444.847-82.966 514.07 440.323 911.162 408.336 c397.09-31.988 390.65-497.8 753.39-555.277 c362.75-57.477 725.5 593.261 1150.49 523.289 c424.99-69.971 500.66-357.356 952.48-414.832 c451.82-57.477 722.81 209.915 1082.34 446.82 c359.52 236.902 977.7-114.912 1278.2-415.333 c300.5-300.421 1076.43-424.829 1103.26 38.984 C7598.79 923.642 8639.5 21.5 8639.5 21.5"
        stroke="#8CA9FF"
        strokeWidth={60}
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.3 }}
      />

     
      <path
        className="wave-tracer"
        d="M-1523 874.162 s1418.79-363.353 1863.638-446.32 c444.847-82.966 514.07 440.323 911.162 408.336 c397.09-31.988 390.65-497.8 753.39-555.277 c362.75-57.477 725.5 593.261 1150.49 523.289 c424.99-69.971 500.66-357.356 952.48-414.832 c451.82-57.477 722.81 209.915 1082.34 446.82 c359.52 236.902 977.7-114.912 1278.2-415.333 c300.5-300.421 1076.43-424.829 1103.26 38.984 C7598.79 923.642 8639.5 21.5 8639.5 21.5"
        stroke="#4F7BFF"
        strokeWidth={70}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
});

WaveBackground.displayName = "WaveBackground";
export default WaveBackground;

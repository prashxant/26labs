import React from "react";

export const FooterSvg = () => {
  return (
    <svg
      width="1440"
      height="1477"
      viewBox="0 0 1440 1477"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-screen bg-red-200 absolute -z-5000"
    >
      <g filter="url(#filter0_d_1006_40)">
        <path
          d="M1583.49  53.7803C1583.49 53.7803 914.501 224.78 867.5 458.78C820.499 692.78 1335.5 706.391 1101.5 927.28C867.5 1148.17 -286 1414.78 -286 1414.78 1500"
          stroke="url(#paint0_linear_1006_40)"
          stroke-width="78"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1006_40"
          x="-314.775"
          y="0"
          width="1927.93"
          height="1476.77"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1006_40"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1006_40"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1006_40"
          x1="997"
          y1="579.78"
          x2="1470"
          y2="729.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8CA9FF" />
          <stop offset="1" stop-color="#E9EBF8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

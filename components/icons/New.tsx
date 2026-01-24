import React from 'react'

export const NewSvg = () => {
  return (<svg
  width="105"
  height="31"
  viewBox="0 0 105 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_0_1)">
    <path
      d="M3.5 14C3.5 7.64873 8.64873 2.5 15 2.5H99.5V10.5C99.5 18.7843 92.7843 25.5 84.5 25.5H3.5V14Z"
      fill="#FFAA72"
    />
  </g>
  <path d="M104.5 7.5L99.5 2.5V7.5H104.5Z" fill="#FF8535" />
  <path d="M3.5 25.5L7.5 30.5L7.5 25.5L3.5 25.5Z" fill="#FF8535" />
  <defs>
    <filter
      id="filter0_d_0_1"
      x="0"
      y="0"
      width="103"
      height="30"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="1" />
      <feGaussianBlur stdDeviation="1.75" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_0_1"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_0_1"
        result="shape"
      />
    </filter>
  </defs>
</svg>
  )
}

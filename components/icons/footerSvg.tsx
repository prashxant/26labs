import { cn } from '@/lib/utils';

type FooterSvgProps = {
  className: string;
};


export const FooterSvg = ( {className} : FooterSvgProps) => {
  return (
    <svg
      className={cn("w-full mask-x-from-65% mask-r-to-85% ", className)}
      width="1440"
      height="1427"
      viewBox="0 0 1440 1427"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_732_2)">
        <path
          d="M1458.5 52.4551C1458.5 52.4551 1096.04 189.968 954.142 478.365C832.983 724.622 736.362 823.25 187.824 528.622C187.824 538.622 26.7005 395.607 -24.8431 528.622C-88.0365 691.7 164.308 901.776 164.308 901.776C349.199 1038.1 778.897 1247.79 1018.56 1200.006C1258.22 1168.222 1466.04 1178.4 1540 1300 "
          stroke="url(#paint0_linear_732_2)"
          strokeWidth="78"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_732_2"
          x="-94.0029"
          y="0"
          width="1691.38"
          height="1462.08"
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
            result="effect1_dropShadow_732_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_732_2"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_732_2"
          x1="834.517"
          y1="715.827"
          x2="1333.44"
          y2="844.153"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8CA9FF" />
          <stop offset="1" stopColor="#E9EBF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

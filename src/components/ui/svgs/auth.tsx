import type { SVGProps } from "react";

const Auth = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path
      d="M128 16l80 32v72c0 56-36 104-80 120-44-16-80-64-80-120V48l80-32z"
      fill="#2563EB"
    />
    <rect
      x="96"
      y="112"
      width="64"
      height="56"
      rx="8"
      fill="#fff"
    />
    <path
      d="M112 112v-16a16 16 0 0132 0v16"
      stroke="#fff"
      strokeWidth="8"
      fill="none"
    />
  </svg>
);

export { Auth };
    
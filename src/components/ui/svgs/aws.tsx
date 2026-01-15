import type { SVGProps } from "react";

const AWS = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <polygon
      points="128,16 224,72 224,184 128,240 32,184 32,72"
      fill="#FF9900"
    />
    <path
      d="M80 140c40 20 96 20 136 0"
      fill="none"
      stroke="#232F3E"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

export { AWS };

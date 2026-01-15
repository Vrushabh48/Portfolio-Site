import type { SVGProps } from "react";

const Express = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" rx="24" fill="#000" />
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      fill="#fff"
      fontSize="72"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
    >
      express
    </text>
  </svg>
);

export { Express };

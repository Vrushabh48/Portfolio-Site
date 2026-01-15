import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path
      d="M128 16c-24 32-48 72-48 120 0 56 48 104 48 104s48-48 48-104c0-48-24-88-48-120z"
      fill="#47A248"
    />
    <path
      d="M128 32v192"
      stroke="#2F7D32"
      strokeWidth="8"
    />
  </svg>
);

export { MongoDB };

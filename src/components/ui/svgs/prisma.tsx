import type { SVGProps } from "react";

const Prisma = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <polygon
      points="128,24 224,216 32,216"
      fill="#0C344B"
    />
    <polygon
      points="128,72 184,200 72,200"
      fill="#1B5E7A"
    />
  </svg>
);

export { Prisma };

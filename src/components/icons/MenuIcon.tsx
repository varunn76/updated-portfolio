import * as React from "react";

const SvgIcon = ({ size }: { size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || "1rem"}
    height={size || "1rem"}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="48"
      d="M88 152h336M88 256h336M88 360h336"
    ></path>
  </svg>
);

export default SvgIcon;

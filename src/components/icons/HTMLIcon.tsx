import * as React from "react";

const SvgIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    className={className}
  >
    <path
      stroke="none"
      d="m0 32 34.9 395.8L191.5 480l157.6-52.2L384 32zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1z"
    ></path>
  </svg>
);

export default SvgIcon;

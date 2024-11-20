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
      d="m0 32 34.9 395.8L192 480l157.1-52.2L384 32zm313.1 80-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112z"
    ></path>
  </svg>
);

export default SvgIcon;

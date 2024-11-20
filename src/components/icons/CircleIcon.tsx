import * as React from "react";

const SvgIcon = ({ className, size }: { className?: string; size: string }) => (
  <svg
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
  </svg>
);

export default SvgIcon;

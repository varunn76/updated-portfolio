import * as React from "react";

const SvgIcon = ({ className, size }: { className?: string; size: string }) => (
  <svg
    fill=""
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-emerald-300/20`}
  >
    <path
      d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIcon;

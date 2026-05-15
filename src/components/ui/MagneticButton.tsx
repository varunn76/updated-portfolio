"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react"
import { twMerge } from "tailwind-merge";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton = ({ children, className, onClick }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(
        "px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-colors duration-300 relative cursor-pointer overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
};

export default MagneticButton;

"use client";
import { motion, useMotionValue, useSpring } from "motion/react"
import React, { useEffect, useState } from "react";

const BackgroundGrid = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.1]"></div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(16, 185, 129, 0.08), transparent 80%),
            radial-gradient(600px circle at ${dimensions.width - smoothX.get()}px ${dimensions.height - smoothY.get()}px, rgba(14, 165, 233, 0.05), transparent 80%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

export default BackgroundGrid;

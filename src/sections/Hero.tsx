"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { memojiImage, grainImage, ArrowRight } from "@/assets/index";
import HeroOrbit from "@/components/HeroOrbit";
import { ORBITSETTINGS } from "@/utils/index";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";

import AnimatedTitle from "@/components/ui/AnimatedTitle";
import MagneticButton from "@/components/ui/MagneticButton";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 20;
    const y = (clientY - innerHeight / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-32"
    >
      <BackgroundGrid />

      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="relative w-full h-full flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]"
        >
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <motion.div
            style={{
              x: useSpring(mouseX, { damping: 30 }),
              y: useSpring(mouseY, { damping: 30 }),
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="hero-ring size-[620px]"
          />
          <motion.div
            style={{
              x: useSpring(mouseX, { damping: 40 }),
              y: useSpring(mouseY, { damping: 40 }),
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="hero-ring size-[820px]"
          />
          <motion.div
            style={{
              x: useSpring(mouseX, { damping: 50 }),
              y: useSpring(mouseY, { damping: 50 }),
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="hero-ring size-[1020px]"
          />
          <motion.div
            style={{
              x: useSpring(mouseX, { damping: 60 }),
              y: useSpring(mouseY, { damping: 60 }),
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="hero-ring size-[1220px]"
          />

          {ORBITSETTINGS.map((orbit, index) => (
            <HeroOrbit
              key={index}
              size={orbit.size}
              rotation={orbit.rotation}
              shouldOrbit
              orbitDuration={orbit.orbitDuration}
              shouldSpin={!!orbit.spinDuration}
              spinDuration={orbit.spinDuration}
            >
              <div className="opacity-40 hover:opacity-100 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                {orbit.icon}
              </div>
            </HeroOrbit>
          ))}
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center justify-center mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            style={{
              x: useSpring(mouseX, { damping: 40 }),
              y: useSpring(mouseY, { damping: 40 }),
            }}
            className="relative mb-14 group"
          >
            <div className="absolute inset-0 bg-cyber-emerald/30 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-cyber-sky/20 blur-[80px] rounded-full translate-x-10 translate-y-10 animate-pulse-slow"></div>

            <div className="relative z-10 size-32 md:size-44 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              <Image
                src={memojiImage}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                alt="Varun Kumar"
              />
              <motion.div
                animate={{ translateY: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-emerald/20 to-transparent h-1/2 w-full -rotate-45 pointer-events-none"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-cyber-emerald/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dotted border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-cyber-sky/20 rounded-full opacity-20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.07] transition-colors"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-white/70">
                System Active <span className="text-white/20 mx-1">•</span>{" "}
                <span className="text-emerald-400 font-semibold">
                  Available for Work
                </span>
              </span>
            </Link>
          </motion.div>

          <AnimatedTitle
            text="Building Things That Matter"
            className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[0.9] max-w-4xl mx-auto bg-gradient-to-b from-white via-white to-cyber-emerald/50 bg-clip-text text-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            I&apos;m{" "}
            <span className="text-white font-semibold relative group cursor-default">
              Varun Kumar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-emerald transition-all duration-500 group-hover:w-full"></span>
            </span>
            . A Full Stack Developer and I turn{" "}
            <span className="text-cyber-emerald/90 font-medium italic">
              ideas, friction, and real-world
            </span>{" "}
            problems into thoughtful digital products .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
          >
            <Link href="#project">
              <MagneticButton className="relative bg-cyber-emerald text-cyber-black flex items-center gap-2 group overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />

                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </MagneticButton>
            </Link>

            <a href="mailto:varunnkumar4@gmail.com">
              <MagneticButton className="border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 group">
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <div className="size-1.5 rounded-full bg-white/20 group-hover:bg-cyber-sky animate-pulse" />
                </span>
              </MagneticButton>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 vertical-text [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-emerald to-transparent opacity-50"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

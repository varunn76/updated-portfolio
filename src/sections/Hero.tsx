"use client";
import React from "react";
import Image from "next/image";

import { memojiImage, grainImage, ArrowDown, ArrowRight } from "@/assets/index";
import HeroOrbit from "@/components/HeroOrbit";
import { ORBITSETTINGS } from "@/utils/index";
import Link from "next/link";
const HeroSection = () => {
  const handleClick = () => {
    console.log("Working....");
  };
  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* {[620, 820, 1020, 1220].map((size) => (
          <div key={size} className={`hero-ring size-[${size}px]`}></div>
        ))} */}
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        {ORBITSETTINGS.map((orbit, index) => (
          <HeroOrbit
            key={index}
            size={orbit.size}
            rotation={orbit.rotation}
            shouldOrbit
            orbitDuration={orbit.orbitDuration}
            shoulSpin
            SpinDuration={orbit.SpinDuration}
          >
            {orbit.icon}
          </HeroOrbit>
        ))}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 relative size-2.5 rounded-full">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide">
            Varun Kumar
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
            I&apos;m Front End Developer
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href={`#project`}>
            <button
              type="button"
              className="inline-flex group items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowRight className="size-4 group-hover:rotate-90 transition-all duration-500" />
            </button>
          </Link>
          <a href="mailto:varunnkumar4@gmail.com">
            <button
              type="button"
              className="inline-flex items-center gap-2 group border cursor-pointer border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
            >
              <span className="group-hover:-rotate-12  transitiona-all duration-500 group-hover:scale-150">
                👋
              </span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion } from "motion/react";
import { grainImage } from "@/assets/index";

const WORDS = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-cyber-emerald via-cyber-sky to-cyber-emerald bg-[length:200%_auto] -rotate-3 -mx-1 relative overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
        
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none"></div>

        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-3 md:py-4">
          <motion.div 
            className="flex flex-none gap-6 md:gap-10 pr-6 md:pr-10"
            animate={{ x: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: "default" }}
          >
            {[...new Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {WORDS.map((word) => (
                  <div key={word} className="inline-flex gap-4 md:gap-6 items-center group">
                    <span className="text-gray-950 uppercase font-black text-xs md:text-sm tracking-[0.2em] select-none group-hover:text-white transition-colors duration-300">
                      {word}
                    </span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <StarIcon className="size-5 md:size-6 text-gray-950 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </motion.div>
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="h-20 w-full bg-gradient-to-b from-cyber-emerald/5 to-transparent blur-3xl -mt-10 -z-10 opacity-30"></div>
    </div>
  );
};

export default TapeSection;


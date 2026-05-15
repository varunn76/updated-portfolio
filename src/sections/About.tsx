"use client";
import Card from "@/components/Card";
import SectionHeaders from "@/components/SectionHeaders";
import React, { useRef } from "react";
import Image from "next/image";
import { MapImage, smileEmoji } from "@/assets/index";
import { HOBBIES, TOOLBOXITEMS } from "@/utils";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "motion/react";

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-20 md:py-28" id="about">
      <div className="container">
        <SectionHeaders
          eyebrow="A Glimpse Into My World"
          title="About Me"
          description="Learn more about who I am, what I do, and what inspires me to build."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[400px] col-span-full relative group overflow-hidden border border-white/5">
             
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

              <CardHeader
                title="My Toolbox"
                description="The cutting-edge technology and tools I use to craft high-performance digital experiences."
                className="px-6 pt-6"
              />
              <div className="mt-2">
                <ToolBoxItems
                  items={TOOLBOXITEMS}
                  itemsWrapperClassName="animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]"
                />
                <ToolBoxItems
                  items={TOOLBOXITEMS}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:35s] hover:[animation-play-state:paused]"
                />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />

              <CardHeader
                title="Beyond the Code"
                description="What fuels my creativity outside the digital realm."
                className="px-6 py-6"
              />
              <div
                className="relative flex-1 cursor-grab active:cursor-grabbing"
                ref={constraintRef}
              >
                {HOBBIES.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-cyber-emerald to-cyber-sky rounded-full py-2 absolute shadow-[0_10px_20px_rgba(16,185,129,0.2)] border border-white/10"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    whileDrag={{ scale: 0.95 }}
                  >
                    <span className="font-bold text-gray-950 text-sm tracking-wide">
                      {item.title}
                    </span>
                    <span className="text-xl">{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 border border-white/5 group overflow-hidden">
              <Image
                src={MapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20">
                <div className="absolute inset-0 rounded-full bg-cyber-emerald/20 animate-ping [animation-duration:3s]"></div>
                <div className="absolute inset-0 rounded-full bg-cyber-emerald/40 animate-pulse [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-emerald to-cyber-sky p-1 shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                  <div className="w-full h-full rounded-full bg-cyber-black overflow-hidden relative border border-white/20">
                    <Image
                      src={smileEmoji}
                      alt="smile emoji"
                      className="size-full object-cover p-1"
                    />
                    <motion.div
                      animate={{ top: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 right-0 h-1 bg-cyber-emerald/50 blur-[2px]"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-cyber-black/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-cyber-emerald">
                Based in Delhi, IN
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

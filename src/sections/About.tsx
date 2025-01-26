"use client";
import Card from "@/components/Card";
import SectionHeaders from "@/components/SectionHeaders";
import React, { useRef } from "react";
import Image from "next/image";
import { bookImage, MapImage, smileEmoji } from "@/assets/index";
import { HOBBIES, TOOLBOXITEMS } from "@/utils";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section className="py-20 md:py-28" id="about">
      <div className="container">
        <SectionHeaders
          eyebrow="A Glimpse Into My World"
          title="About Me"
          description="Learn more about who I am, what I do, what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card> */}
            <Card className="h-[320px]  col-span-full">
              <CardHeader
                title="My Toolbox"
                description="Explore the technology and tools I use to craft exceptional
              digital experiences."
                className=""
              />
              <div>
                <ToolBoxItems
                  items={TOOLBOXITEMS}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItems
                  items={TOOLBOXITEMS}
                  className="mt-6 "
                  itemsWrapperClassName="animate-move-right [animation-duration:30s]"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {HOBBIES.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300  to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300  to-sky-400 -z-10"></div>
                <Image src={smileEmoji} alt="smile emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

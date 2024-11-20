import { ArrowUpRightIcon, grainImage } from "@/assets/index";
import React from "react";

const FOOTERLINKS = [
  {
    title: "Github",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. ALl rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {FOOTERLINKS.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex gap-1.5 items-center"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

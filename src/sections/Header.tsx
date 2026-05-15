"use client";
import { MenuIcon } from "@/components/icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { twMerge } from "tailwind-merge";

const resumeUrl = "/varunkumarCV.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#project" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -10% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyber-emerald z-[60] origin-left"
        style={{ scaleX }}
      />

      <header className="fixed top-6 left-0 w-full z-50 flex items-center justify-center pointer-events-none">
        <nav className="hidden md:flex gap-1 p-1 border border-white/10 rounded-full bg-cyber-gray/40 backdrop-blur-md pointer-events-auto shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={twMerge(
                "relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300",
                activeSection === link.href.slice(1)
                  ? "text-white"
                  : "text-white/40 hover:text-white",
              )}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
          <div className="w-[1px] h-4 bg-white/10 self-center mx-2" />
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-sm font-bold bg-white text-cyber-black hover:bg-cyber-emerald transition-colors duration-300"
          >
            Resume
          </a>
        </nav>

        <div className="md:hidden flex items-center justify-end w-full px-6 pointer-events-auto">
          <button
            className="p-3 rounded-2xl bg-cyber-gray/80 border border-white/10 backdrop-blur-lg shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className=" size-6 flex items-center justify-center font-serif text-xl">
                ×
              </span>
            ) : (
              <MenuIcon size="6" />
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-24 left-6 right-6 p-6 flex flex-col gap-4 bg-cyber-gray/95 backdrop-blur-2xl border border-white/10 rounded-3xl md:hidden pointer-events-auto shadow-3xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={twMerge(
                    "text-lg font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-cyber-emerald"
                      : "text-white/60 hover:text-white",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 p-4 text-center rounded-2xl bg-cyber-emerald text-cyber-black font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;

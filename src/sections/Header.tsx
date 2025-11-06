"use client";
import { MenuIcon } from "@/components/icons";
import { useState } from "react";

const resumeUrl = "/varunkumarCV.pdf";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 w-full z-10 flex items-center justify-center">
      <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#project" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
        <a
          href={resumeUrl}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>

      <div className="md:hidden flex items-center justify-between w-full px-5">
        <button
          className="p-2 rounded-md bg-white/10 border border-white/20 backdrop-blur"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <p>x</p> : <MenuIcon />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 mx-auto left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center gap-3 bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-4 md:hidden">
          <a href="#home" className="nav-item" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a
            href="#project"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href={resumeUrl}
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

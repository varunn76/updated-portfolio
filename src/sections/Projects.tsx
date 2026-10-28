"use client";
import React from "react";
import {
  proj1,
  proj5,
  ArrowUpRightIcon,
  proj4,
  proj2,
  spendwizze,
} from "@/assets/index";
import { GithubIcon } from "@/components/icons/index";
import Image from "next/image";
import SectionHeaders from "@/components/SectionHeaders";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    projectName: "SpendWizze",
    year: "2026",
    badge: "Production APK v1.0.0",
    category: "Mobile Application",
    title: "Privacy-First Personal Finance & Expense Tracker",
    isMobile: true,
    results: [
      {
        title:
          "Automatically tracks bank & UPI expenses from SMS with 100% privacy — no cloud servers or bank credentials needed.",
      },
      {
        title:
          "Smart on-device ledger that filters transaction spam and prevents double-counting on self-transfers and refunds.",
      },
      {
        title:
          "Interactive spending analytics and visual charts to monitor cash flow, categories, and monthly budgets.",
      },
    ],
    techStack:
      "React Native, Expo 57, TypeScript, expo-sqlite, NativeWind, Reanimated",
    link: "https://spendwizze.vercel.app",
    github: "https://github.com/varunn76",
    image: spendwizze,
    disable: false,
  },
  {
    projectName: "Halfway",
    year: "2025",
    title: "Fair Meeting Place Finder Web Application",
    results: [
      {
        title:
          "Built a web app that helps users find fair meeting places between multiple locations.",
      },
      {
        title:
          "Implemented map-based search, vibe filters, and distance balancing logic for smarter meetup decisions.",
      },
      {
        title:
          "Designed a clean, mobile-first UI focused on fast decision-making and real-world usability.",
      },
    ],
    techStack: "Next.js, TypeScript, Tailwind CSS v4, OpenStreetMap, shadcn/ui",
    link: "https://halfwayy.vercel.app/",
    image: proj2,
    disable: false,
  },
  {
    projectName: "The Thai Tourism",
    year: "2024 - 2025",
    title: "Thailand Travel Booking Web Application",
    results: [
      {
        title:
          "Developed a travel booking web application for tourism services.",
      },
      {
        title: "Implemented search, listings, and booking-ready UI flows.",
      },
    ],
    techStack:
      "Next Js, Tailwind CSS, Redux RTK, TanStack Query, shadcn/ui, Stripe, Typescript,",
    link: "",
    image: proj5,
    disable: true,
  },
  {
    projectName: "Quick Watch",
    year: "2024 - 2025",
    title: "Online movie streaming platform",
    results: [
      {
        title:
          "Built a Netflix-like movie & TV streaming platform using TMDB API.",
      },
      {
        title:
          "Implemented real-time data fetching, trending lists, and personalized recommendations.",
      },
      {
        title: "Optimized state management with Redux RTK and TanStack Query.",
      },
    ],
    techStack:
      "Next Js, Tailwind CSS, Redux RTK, TanStack Query, MongoDB, Typescript",
    link: "https://quickwatch.vercel.app/home",
    image: proj1,
    disable: false,
  },
  {
    projectName: "Fitclub Gym CRM",
    year: "2024 - 2025",
    title: "CRM Dashboard",
    results: [
      {
        title:
          "Developed a full-featured CRM for gym operations and client management.",
      },
      {
        title:
          "Implemented attendance tracking, invoicing, and role-based access.",
      },
      {
        title: "Improved workflow efficiency for staff and trainers.",
      },
    ],
    techStack: "React Js, Tailwind CSS, Node Js, Express Js, PostGresSQL, JWT",
    link: "",
    image: proj4,
    disable: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeaders
          title="Portfolio Highlights"
          eyebrow="Recent Projects"
          description="Turning ideas into successful and functional digital solutions."
        />

        <div className="flex flex-col mt-10 md:mt-16 gap-20 md:gap-28 lg:gap-32">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group/card sticky top-16 overflow-hidden px-5 pt-5 pb-0 md:px-8 md:pt-8 lg:px-12 lg:pt-12 border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,183,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.16),transparent_30%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="relative lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:pb-12">
                  <div className="mb-4 hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    <span className="flex size-7 items-center justify-center rounded-full bg-white text-gray-950 tracking-normal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{project.projectName}</span>
                    <span className="size-1 rounded-full bg-emerald-300" />
                    <span>{project.year}</span>
                    {project.badge && (
                      <>
                        <span className="size-1 rounded-full bg-emerald-300" />
                        <span className="text-emerald-300 tracking-normal text-[11px] font-bold">
                          {project.badge}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight">
                    {project.title}
                  </h3>

                  <div className="mt-3.5 hidden md:block h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

                  <ul className="mt-4 hidden md:flex flex-col gap-2.5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2.5 text-sm leading-relaxed text-white/65"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.55)]" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 hidden md:flex flex-wrap gap-2">
                    {project.techStack.split(",").map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 pb-6 lg:pb-0">
                    {project.disable ? (
                      <button
                        disabled
                        className="h-11 w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/10 px-6 text-sm font-semibold text-white/40 md:w-auto"
                      >
                        Private Project
                      </button>
                    ) : (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-white/90 md:w-auto"
                        >
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 md:w-auto"
                          >
                            <GithubIcon className="size-4" />
                            <span>GitHub</span>
                            <ArrowUpRightIcon className="size-3.5 opacity-60" />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Preview */}
                {project.isMobile ? (
                  <div className="relative mt-8 h-[280px] sm:h-[320px] md:h-[360px] lg:h-auto lg:mt-0 lg:min-h-[420px] flex items-end justify-center overflow-hidden lg:overflow-visible">
                    {/* Glowing ambient backdrop */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="size-64 md:size-80 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-sky-400/20 blur-3xl transition duration-700 group-hover/card:scale-110 group-hover/card:bg-emerald-400/30" />
                    </div>

                    {/* Android Mockup showing 70-80% like other cards */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit SpendWizze live website"
                      className="relative z-10 block w-[220px] sm:w-[245px] md:w-[260px] lg:w-[275px] -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-36 left-1/2 -translate-x-1/2 transition-all duration-700 ease-out group-hover/card:-translate-y-2 group-hover/card:scale-[1.02] filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] cursor-pointer"
                    >
                      <Image
                        src={project.image}
                        alt="SpendWizze Android Application"
                        priority
                        className="w-full h-auto object-contain select-none pointer-events-none"
                      />
                    </a>
                  </div>
                ) : (
                  <div className="relative mt-10 min-h-[200px] md:min-h-[340px] lg:mt-0 lg:min-h-[420px]">
                    <div className="absolute inset-x-8 top-12 h-40 rounded-full bg-sky-400/20 blur-3xl transition duration-500 group-hover/card:bg-emerald-300/20" />

                    <div className="relative overflow-hidden rounded-t-[2rem] border border-white/10 bg-gray-950/80 shadow-2xl ring-1 ring-white/10 transition duration-500 group-hover/card:-translate-y-2 group-hover/card:rotate-[-1deg] lg:absolute lg:bottom-0 lg:left-0 lg:w-[720px]">
                      <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4">
                        <span className="size-2.5 rounded-full bg-red-400/80" />
                        <span className="size-2.5 rounded-full bg-yellow-400/80" />
                        <span className="size-2.5 rounded-full bg-emerald-400/80" />

                        <div className="ml-3 hidden h-4 flex-1 rounded-full bg-white/[0.06] md:block" />
                      </div>

                      <Image
                        src={project.image}
                        alt={project.title}
                        className="h-auto w-full object-cover object-left-top transition duration-700 group-hover/card:scale-[1.03]"
                      />

                      <div className="pointer-events-none absolute inset-0  bg-gradient-to-b from-gray-950/40 via-transparent to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

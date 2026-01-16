import {
  proj1,
  proj5,
  ArrowUpRightIcon,
  proj4,
} from "@/assets/index";
import Image from "next/image";
import SectionHeaders from "@/components/SectionHeaders";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    projectName: "The Thai Tourism",
    year: "2024 - 2025",
    title: "Thailand Travel Booking Web Application",
    results: [
      {
        title:
          "Developed a travel booking web application for tourism services.",
      },
      { title: "Implemented search, listings, and booking-ready UI flows." },
    ],

    techStack: "Next Js, Tailwind CSS, Redux RTK, TanStack Query, shadcn/ui, Stripe",
    link: "",
    image: proj5,
    disable:true,
  },
  {
    projectName: "Quick Watch",
    year: "2024 - present",
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

    techStack: "Next Js, Tailwind CSS, Redux RTK, TanStack Query, MongoDB",
    link: "https://quickwatch.vercel.app/home",
    image: proj1,
     disable:false,
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
      { title: "Improved workflow efficiency for staff and trainers." },
    ],

    techStack: "React Js, Tailwind CSS, Node Js, Express Js, PostGresSQL, JWT",
    link: "",
    image: proj4,
    disable:true,
  },
  // {
  //   projectName: "YC Directory",
  //   year: "2024",
  //   title: "Startup Idea Showcase Platform",
  //   results: [
  //     {
  //       title:
  //         "Built a startup idea showcase platform with dynamic content updates.",
  //     },
  //     { title: "Integrated Sanity CMS for real-time content management." },
  //     { title: "Implemented authentication and protected routes." },
  //   ],

  //   techStack: "Next.js, Tailwind CSS, Sanity, Auth.js",
  //   link: "https://yc-directory-eight-zeta.vercel.app/",
  //   image: proj2,
  //   disable: false,
  // },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeaders
          title={"Portfolio Highlights"}
          eyebrow="Recent Projects"
          description="Turning ideas into successful and functional digital solutions."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 lg:pt-16  lg:px-20 md:px-10 sticky top-16"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 text-transparent bg-clip-text inline-flex uppercase font-bold text-sm tracking-widest">
                    <span>{project.projectName}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 leading-relaxed mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm w-full  md:text-base text-white/50"
                      >
                        {/* <CircleCheckIcon className="size-5 " /> */}
                        {/* <p className="font-bold flex items-start">.</p> */}
                        <span className="text-sm">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[1rem] pt-4 text-gray-100">
                    {project?.techStack}
                  </p>
                  <a href={project.link} target="_blank">
                    <button
                      disabled={project.disable}
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 "
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

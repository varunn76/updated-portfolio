import {
  proj1,
  proj2,
  proj3,
  CircleCheckIcon,
  ArrowUpRightIcon,
} from "@/assets/index";
import Image from "next/image";
import SectionHeaders from "@/components/SectionHeaders";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    projectName: "Quick Watch",
    year: "2024 - present",
    title: "Online movie streaming platform",
    results: [],
    link: "https://quickwatch.vercel.app/",
    image: proj1,
  },
  {
    projectName: "YC Directory",
    year: "2024",
    title: "Startup Idea Showcase Platform",
    results: [],
    link: "https://yc-directory-eight-zeta.vercel.app/",
    image: proj2,
  },
  // {
  //   projectName: "Spotify Downloader",
  //   year: "2024",
  //   title: "Spotify Song Downloader",
  //   results: [],
  //   link: "https://www.spotify-downloaders.com/",
  //   image: proj3,
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
                  <ul className="flex flex-col   gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm  md:text-base text-white/50"
                      >
                        {/* <CircleCheckIcon className="size-5 md:size-5" /> */}
                        <p className="font-bold">.</p>
                        {/* <span className="text-sm">{result.title}</span> */}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
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
{
  /* <div className="flex justify-center">
<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text">
  Real-world Results
</p>
</div>
<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
Featured Projects
</h2>
<p className="text-center md:text-lg lg:text-xl mt-4 max-w-md mx-auto text-white/60">
See how I transformed concepts into engaging didgital experiences.
</p> */
}

import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import ProjectCard from "./ProjectCard";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
});

export default function ProjectSection() {
  return (
    <div className="lg:ml-[108px] lg:mr-[108px] ml-6 mr-6 mt-10 lg:mt-1 lg:h-[2700px] h-[3800px]">
      <div className="lg:w-[500px] lg:h-[300px] w-[400px] h-[204px] lg:mt-[100px]">
        <h1
          className={`${bebasNeue.variable} text-white lg:text-[7.2rem] text-7xl font-sans`}
        >
          Projects
        </h1>
        <p className={`${manrope.variable} text-[#C7C7C7] font-manrope`}>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-[120px]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

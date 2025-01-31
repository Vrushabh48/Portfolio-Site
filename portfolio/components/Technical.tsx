"use client"
import { Bebas_Neue } from "next/font/google";
import { Manrope } from "next/font/google";
import Skill from "./Skill";

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

export default function Technical() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-16 lg:mr-16 ml-8 mr-8 mt-10 gap-10 mb-10">
      <div>
        <h1
          className={`${bebasNeue.variable} font-sans text-white lg:text-7xl text-5xl mt-10 hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-500`}
        >
          Technical Skills
        </h1>
      </div>
      <div className="lg:w-[500px] lg:mt-10">
        <p className={`${manrope.variable} font-manrope text-[#C7C7C7] text-lg`}>
          I am always looking to add more skills to my skill set. The Passion and interest on tech drives me through to get my hands on more and more skills.{" "}
        </p>
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 mt-5">
          <Skill Skill="JavaScript" />
          <Skill Skill="TypeScript" />
          <Skill Skill="TailwindCSS" />
          </div>
          <div className="flex gap-4 mt-5">
          <Skill Skill="React.js" />
          <Skill Skill="Next.js" />
          <Skill Skill="Node.js" />
          <Skill Skill="Express.js" />
          </div>
          <div className="flex gap-4 mt-5">
          <Skill Skill="PostgresSQL" />
          <Skill Skill="MongoDB" />
          <Skill Skill="Docker" />
          </div>
        </div>
      </div>
    </div>
  );
}

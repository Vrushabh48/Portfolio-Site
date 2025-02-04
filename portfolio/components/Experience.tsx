"use client";
import { Bebas_Neue } from "next/font/google";
import { Manrope } from "next/font/google";

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

export default function Experience() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-16 lg:mr-16 ml-8 mr-8 mt-10 gap-10 mb-14">
      <div>
        <h1
          className={`${bebasNeue.variable} font-sans text-white lg:text-7xl text-5xl mt-10 hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-500`}
        >
          My Experience
        </h1>
      </div>
      <div className="lg:w-[500px] lg:mt-10 mb-10">
        <div className="lg:w-[600px] lg:h-[128px]">
          <div className="lg:flex flex-col justify-between">
            <h1
              className={`text-white ${manrope.variable} font-manrope text-2xl`}
            >
              Full Stack Developer {"(Project Based)"}
            </h1>
            <p
              className={`text-lime-300 ${manrope.variable} font-manrope mt-2`}
            >
              September 2024 - December 2024
            </p>
          </div>
          <div className="mt-5">
            <p
              className={`${manrope.variable} font-manrope text-[#C7C7C7] text-lg`}
            >
              Designed and developed a GenAI model for generating marketing
              content related to a technology. Contributed in developing the
              application by integrating API&apos;s and developing an
              interactive interface for the application.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

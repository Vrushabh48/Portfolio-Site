"use client"

import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import quizly from '../public/quizly.png'
import medium from '../public/medium.png'
import codingal from '../public/codingal.png'
import ProjectCard from "./ProjectCard";
import Link from "next/link";

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
    <div className="lg:ml-[108px] lg:mr-[108px] ml-6 mr-6 mt-10 lg:mt-1 lg:h-[2800px] h-[3900px]">
      <div className="lg:w-[500px] lg:h-[300px] w-[400px] h-[204px] lg:mt-[100px]">
        <h1
          className={`${bebasNeue.variable} text-white lg:text-[7.2rem] text-7xl font-sans hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-500`}
        >
          Projects
        </h1>
        <p className={`${manrope.variable} text-[#C7C7C7] font-manrope`}>
          Here are some of the selected projects that showcase my passion for development.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-[120px]">
      <ProjectCard
            title="Quizly"
            description="Quizly is a Quiz application where User's are able to create a quiz and attempt the quiz. A realtime Leaderboard keeps the track of users who have attempted the specific Quiz along with their scores of that particular quiz. The score for each test is displayed right after submitting the test."
            skills="React.js, TypeScript, Hono, Prisma, PostgreSQL, Tailwind CSS"
            imglink={quizly}
          />
          <ProjectCard
            title="Paytm"
            description="A Payment Application built with Next.js. Utilised the Next-Auth for the authentication and implemented Webhooks for the banks to let Users add money to the wallet from their Bank. The registered users are able to transfer the amount to another user in the database."
            skills=" Next.Js, Node.js, Express.js, Postgres, Prisma"
            imglink={quizly}
          />
          <ProjectCard
            title="Medium Clone"
            description="This is clone of the blogging site Medium. Here user's can publish their own blogs and also read the blogs published by other authors/writers."
            skills=" React.js, Node.js, Hono, TypeScript, Prisma, PostgreSQL"
            imglink={medium}
          />
          <ProjectCard
            title="Codingal Landing Page"
            description="Landing Page Design of Codingal a YC Backed Startup."
            skills="React.js, TailwindCSS"
            imglink={codingal}
          />
      </div>
      <div className="flex justify-center lg:mt-10 mt-10">
      <Link href='/projects' className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}>
        Browse all Projects
        <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
      </Link>
      </div>
    </div>
  );
}

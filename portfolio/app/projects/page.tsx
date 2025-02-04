'use client'
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Bebas_Neue } from "next/font/google";
import { Manrope } from "next/font/google";
import quizly from "../../public/quizly.png";
import medium from '../../public/medium.png'
import codingal from '../../public/codingal.png'
import staycation from '../../public/staycation.png'
import swipe from '../../public/swipe.png'
import rentify from '../../public/rentify.png'
import paytm from '../../public/paytm.png'

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

export default function Projects() {
  return (
    <div className="bg-[#0A0A0A] lg:h-[4900px] h-[6700px]">
      <Navbar />
      <div className="lg:ml-[108px] lg:mr-[108px] ml-6 mr-6 mt-10 lg:mt-1 lg:h-[2700px] h-[3800px]">
        <div className="lg:w-[500px] lg:h-[300px] w-[400px] h-[204px] lg:mt-[100px]">
          <h1
            className={`${bebasNeue.variable} text-white lg:text-[7.2rem] text-7xl font-sans hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-500`}
          >
            Projects
          </h1>
          <p className={`${manrope.variable} text-[#C7C7C7] font-manrope`}>
            Here are all of my Projects. Share your views on these!
          </p>
        </div>
        <div className="flex flex-col justify-between gap-[120px]">
        <ProjectCard
            title="Quizly"
            description="Quizly is a Quiz application where User's are able to create a quiz and attempt the quiz. A realtime Leaderboard keeps the track of users who have attempted the specific Quiz along with their scores of that particular quiz. The score for each test is displayed right after submitting the test."
            skills="React.js, TypeScript, Hono, Prisma, PostgreSQL, Tailwind CSS"
            imglink={quizly}
            livelink="https://quizly-delta.vercel.app/"
            gitlink="https://github.com/Vrushabh48/quizly"
          />
          <ProjectCard
            title="Paytm"
            description="A Payment Application built with Next.js. Utilised the Next-Auth for the authentication and implemented Webhooks for the banks to let Users add money to the wallet from their Bank. The registered users are able to transfer the amount to another user in the database."
            skills=" Next.Js, Node.js, Express.js, Postgres, Prisma"
            imglink={paytm}
            livelink="https://github.com/Vrushabh48/Paytm"
            gitlink="https://github.com/Vrushabh48/Paytm"
          />
          <ProjectCard
            title="Medium Clone"
            description="This is clone of the blogging site Medium. Here user's can publish their own blogs and also read the blogs published by other authors/writers."
            skills=" React.js, Node.js, Hono, TypeScript, Prisma, PostgreSQL"
            imglink={medium}
            livelink="https://medium-blog-site-gray.vercel.app/"
            gitlink="https://github.com/Vrushabh48/medium-blog-site"
          />
          <ProjectCard
            title="Rentify"
            description="Rentify is a Product renting applications where users can list their products out for rent and get paid for it."
            skills="Next.js, PostgresSQL, Prisma"
            imglink={rentify}
            livelink="https://github.com/Vrushabh48/Rentify"
            gitlink="https://github.com/Vrushabh48/Rentify"
          />
          <ProjectCard
            title="Swipe Landing Page"
            description="Landing Page implementation of Swipe."
            skills="React.js, TailwindCSS"
            imglink={swipe}
            livelink="https://swipe-landing-page-one.vercel.app/"
            gitlink="https://github.com/Vrushabh48/swipe-landing-page"
          />
          <ProjectCard
            title="Codingal Landing Page"
            description="Landing Page Design of Codingal a YC Backed Startup."
            skills="React.js, TailwindCSS"
            imglink={codingal}
            livelink="https://codingal-landing-page.vercel.app/"
            gitlink="https://github.com/Vrushabh48/Codingal-Landing-Page"
          />
          <ProjectCard
            title="StayCation Landing Page"
            description="Landing Page implementation of Staycation."
            skills="React.js, TailwindCSS"
            imglink={staycation}
            livelink="https://staycation-three.vercel.app/"
            gitlink="https://github.com/Vrushabh48/staycation"
          />
        </div>
      </div>
    </div>
  );
}

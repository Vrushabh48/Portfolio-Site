import Image from "next/image";
import photo from "../public/photo1.jpg";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
});

export default function ProjectCard() {
  return (
    <div className="lg:grid-cols-2 grid grid-cols-1 gap-1 outline-solid outline-white">
      <div className="bg-[#1A1A1A] lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] flex items-center justify-center rounded-xl lg:ml-0 ml-12">
        <Image
          src={photo}
          alt="Basic placeholder image"
          className="rounded-lg lg:w-[300px] lg:h-[300px] w-[180px] h-[200px]"
        />
      </div>
      <div className="mt-10 ml-12 lg:mt-14 lg:mb-14 lg:w-[576px] w-[400px] h-[350px] flex flex-col justify-between">
        <div>
          <h1 className={`${manrope.variable} text-[#FFFFFF] lg:text-6xl text-4xl font-manrope`}>
            Title of Project
          </h1>
          <p className={`${manrope.variable} font-manrope text-[#C7C7C7] text-xl mt-12  `}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            consequatur nostrum blanditiis, voluptate maiores veritatis quo
            libero ut quisquam, nemo ullam, tempore incidunt atque nam debitis
            esse? Nesciunt, velit provident?
          </p>
        </div>
        <div className=" flex justify-between w-[380px]">
          <button
            className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}
          >
            Live Link
            <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
          </button>
          <button
            className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}
          >
            See on GitHub
            <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

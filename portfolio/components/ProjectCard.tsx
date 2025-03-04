import Image, { StaticImageData } from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
});

interface Props {
  title: string;
  description: string;
  imglink: StaticImageData;
  skills: string;
  livelink: string;
  gitlink: string;
}

export default function ProjectCard({
  title,
  description,
  imglink,
  skills,
  livelink,
  gitlink,
}: Props) {
  return (
    <div className="lg:grid-cols-2 grid grid-cols-1 gap-1 outline-solid outline-white">
      <div className="bg-[#1A1A1A] lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] flex items-center justify-center rounded-xl lg:ml-0 ml-12">
        <Image
          src={imglink}
          alt="Basic placeholder image"
          className="rounded-lg lg:w-[400px] lg:h-[300px] w-[280px] h-[200px] hover:scale-105 ease-in duration-300"
        />
      </div>
      <div className="mt-10 ml-12 lg:mt-14 lg:mb-14 lg:w-[576px] w-[400px] h-[350px] flex flex-col justify-between">
        <div>
          <h1
            className={`${manrope.variable} text-[#FFFFFF] lg:text-6xl text-4xl font-manrope`}
          >
            {title}
          </h1>
          <p
            className={`${manrope.variable} font-manrope text-lime-400 text-xl mt-10  `}
          >
            {skills}
          </p>
          <p
            className={`${manrope.variable} font-manrope text-[#C7C7C7] text-xl mt-12  `}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-between w-[380px] mt-5">
          <button
            onClick={() => window.open(livelink, "_blank")}
            className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}
          >
            Live Link
            <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
          </button>

          <button
            onClick={() => window.open(gitlink, "_blank")}
            className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}
          >
            GitHub Link
            <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

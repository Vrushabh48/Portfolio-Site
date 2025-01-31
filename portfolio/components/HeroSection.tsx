"use client";

import Image from "next/image";
import photo from "../public/photo1.jpg";
import BtnLinks from "./BtnLinks";
import Navbar from "./Navbar";
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
})

export default function HeroSection() {
  return (
    <div className={`border-white border-b lg:h-[750px] h-[1120px]`}>
      <Navbar />
      <div>
        <div className="lg:flex lg:ml-[108px] ml-4 mr-4 mt-20 lg:mt-2">
          <div className="lg:w-[630px] lg:h-[300px] w-[520px] h-[204px] lg:mt-[200px]">
            <h1 className={`${bebasNeue.variable} text-white lg:text-[7.2rem] text-7xl font-sans hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-1000`}>
              Hi, I am Vrushabh Patil.
            </h1>
            <p className={`${manrope.variable} text-[#C7C7C7] font-manrope`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              similique dolor.
            </p>
            <BtnLinks />
          </div>
          <div className="lg:ml-32 lg:mt-0 mt-24 ml-10">
            <Image
              src={photo}
              alt="Basic placeholder image"
              width={430}
              height={490}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

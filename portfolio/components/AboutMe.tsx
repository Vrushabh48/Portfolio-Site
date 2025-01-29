import { Manrope } from "next/font/google";
import BtnLinks from "./BtnLinks";
import { Bebas_Neue } from "next/font/google";

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

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-10 lg:mr-10 ml-4 mr-4 mt-10 gap-10">
      <div className="w-[350px] h-[91px] lg:ml-10 lg:mt-20">
        <h1 className={`${bebasNeue.variable} font-sans text-white lg:text-7xl text-5xl`}>About Me</h1>
      </div>
      <div className="lg:mt-20">
        <h1
          className={`${manrope.variable} text-[#FFFFFF] lg:text-4xl text-2xl font-manrope`}
        >
          I am a front-end developer based in Sydney. Has Mechanical Engineering
          background.
        </h1>
        <p
          className={`${manrope.variable} font-manrope text-[#C7C7C7] text-xl mt-12`}
        >
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I’m exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill
        </p>
        <BtnLinks />
      </div>
    </div>
  );
}

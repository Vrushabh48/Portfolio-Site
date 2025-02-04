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
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-16 lg:mr-16 ml-8 mr-8 mt-10 gap-10 mb-12">
      <div className="w-[350px] h-[91px] lg:ml-10 lg:mt-20">
        <h1
          className={`${bebasNeue.variable} font-sans text-white lg:text-7xl text-5xl hover:underline hover:decoration-lime-400 hover:transition-all hover:duration-500`}
        >
          About Me
        </h1>
      </div>
      <div className="lg:mt-20">
        <h1
          className={`${manrope.variable} text-[#FFFFFF] lg:text-4xl text-2xl font-manrope`}
        >
          I am a Full Stack developer based in India.
        </h1>
        <p
          className={`${manrope.variable} font-manrope text-[#C7C7C7] text-xl mt-12`}
        >
          A skilled Full-Stack Developer with a strong foundation in modern web
          technologies, including React.js, Next.js, Node.js, Prisma, and
          PostgreSQL. Passionate about designing, developing, and deploying
          scalable and secure applications with a keen focus on seamless user
          experiences and API integrations. Adept at building full-stack
          solutions from scratch, ensuring performance optimization, robust
          database management, and secure authentication using tools like
          next-auth.
        </p>
        <BtnLinks />
      </div>
    </div>
  );
}

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
});

interface SkillProps {
  Skill: string;
}

export default function Skill({ Skill }: SkillProps) {
  return (
    <div>
      <button
        className={`${manrope.variable} font-manrope text-xl p-4 text-white hover:shadow-md hover:shadow-lime-200 outline outline-[1px] hover:text-lime-400 hover:outline-lime-400 rounded-3xl border border-white w-fit`}
      >
        {Skill}
      </button>
    </div>
  );
}

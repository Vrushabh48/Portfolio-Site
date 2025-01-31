import { Linkedin, Github, Instagram } from "lucide-react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
})

export default function BtnLinks() {
  return (
    <div className="flex items-center space-x-4 bg-[#0A0A0A] mt-6">
      {/* Contact Button */}
      <button className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}>
        CONTACT ME
        <span className="ml-3 w-3 h-3 bg-black rounded-full"></span>
      </button>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-neutral-800 rounded-full flex justify-center items-center"
        >
          <Linkedin className="text-lime-400 w-5 h-5" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-neutral-800 rounded-full flex justify-center items-center"
        >
          <Github className="text-lime-400 w-5 h-5" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-neutral-800 rounded-full flex justify-center items-center"
        >
          <Instagram className="text-lime-400 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

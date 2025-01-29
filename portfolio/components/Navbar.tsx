"use client"
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-inter",
})
const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bebas-neue",
  });


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="flex justify-between items-center text-white lg:w-[1515px] lg:h-[96px] w-[545px] h-[76px]">
        <div className="lg:ml-[60px] ml-[16px] mt-6 mb-6 lg:w-[190px] lg:h-[38px] w-[155px] h-[28px]">
          <h1 className={`${bebasNeue.variable} font-sans lg:text-3xl text-2xl text-[#C7C7C7]`}>Vrushabh Patil</h1>
        </div>
        <div className="lg:hidden mt-4 mb-4">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } ${inter.variable} font-top lg:flex flex-col lg:flex-row lg:justify-between lg:w-[207px] h-auto lg:h-[24px] lg:mr-[30px] mr-4 lg:mt-9 mt-28 mb-9 space-y-2 lg:space-y-0`}
        >
          <Link href="/" className="block lg:inline-block">
            Work
          </Link>
          <Link href="/about" className="block lg:inline-block">
            About
          </Link>
          <Link href="/" className="block lg:inline-block">
            Contact
          </Link>
        </div>
      </div>
    )
}
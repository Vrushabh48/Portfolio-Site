'use client'
import About from "@/components/AboutMe";
import Navbar from "@/components/Navbar";

export default function AboutPage(){
    return(
        <div className="bg-[#0A0A0A] lg:h-[4834px] h-[5500px]">
            <Navbar />
            <About />
        </div>
    )
}
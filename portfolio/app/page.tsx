import About from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Technical from "@/components/Technical";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] lg:h-[5600px] h-[7620px]">
      <HeroSection />
      <div id="projects" className="border-b-[1px]">
      <ProjectSection />
      </div>
      <div id="about" className="border-b-[1px]">
      <About />
      </div>
      <div id="skills" className="border-b-[1px]">
        <Technical />
      </div>
      <div id="experience" className="border-b-[1px]">
        <Experience />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

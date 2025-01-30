import About from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] lg:h-[4900px] h-[6500px]">
      <HeroSection />
      <div className="border-b-2">
      <ProjectSection />
      </div>
      <div className="border-b-2">
      <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

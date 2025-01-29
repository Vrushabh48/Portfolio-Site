import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] lg:h-[4834px] h-[5500px]">
      <HeroSection />
      <div className="border-b-2">
      <ProjectSection />
      </div>
    </div>
  );
}

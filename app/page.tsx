import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="defer-render">
          <AboutSection />
        </div>
        <div className="defer-render">
          <ProjectsSection />
        </div>
        <div className="defer-render">
          <ExperienceSection />
        </div>
        <div className="defer-render">
          <CertificatesSection />
        </div>
        <div className="defer-render">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

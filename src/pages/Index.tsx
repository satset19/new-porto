import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import anime from "animejs";
import { initializeParallaxEffect } from "@/utils/scrollEffects";

const Index = () => {
  useEffect(() => {
    // Initialize page animations
    anime({
      targets: "body",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Initialize parallax effects and get cleanup function
    const cleanupParallax = initializeParallaxEffect();

    // Set perspective origin based on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--x-position", `${x}%`);
      document.documentElement.style.setProperty("--y-position", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cleanupParallax();
    };
  }, []);

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <div
        id="home"
        className="parallax-element snap-start min-h-screen z-10"
        data-speed="0.02"
      >
        <HeroSection />
      </div>
      <div
        id="skills"
        className="parallax-element snap-start min-h-screen py-16 z-30"
        data-speed="0.01"
        data-mobile-speed="0"
      >
        <SkillsSection />
      </div>
      <div
        id="projects"
        className="parallax-element snap-start min-h-screen py-16 z-20"
        data-speed="0.015"
        data-mobile-speed="0"
      >
        <ProjectsSection />
      </div>
      <div id="contact" className="snap-start z-40">
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;

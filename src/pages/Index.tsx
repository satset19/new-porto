import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialize3DScrollScene } from "@/utils/scrollEffects";

const Index = () => {
  const animatedBackgroundRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<() => void>();
  const parallaxElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize scroll effects
    cleanupRef.current = initialize3DScrollScene();

    // Simple background animation
    const canvas = animatedBackgroundRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const ctx = canvas.getContext("2d");
      const particles = Array(20)
        .fill(0)
        .map(() => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.3 + 0.1,
        }));

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.y += particle.speed;
          if (particle.y > canvas.height) particle.y = 0;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
          ctx.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <>
      {/* Animated Background Canvas */}
      <canvas
        ref={animatedBackgroundRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(99,102,241,0.05) 100%)",
        }}
      />

      {/* Floating Geometric Shapes */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <div
          className="absolute border border-indigo-200 opacity-20"
          style={{
            width: "8rem",
            height: "8rem",
            top: "10%",
            left: "5%",
            transform: "rotate(45deg)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "6rem",
            height: "6rem",
            top: "60%",
            right: "10%",
            background:
              "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute border-2 border-blue-300 opacity-30"
          style={{
            width: "4rem",
            height: "4rem",
            top: "30%",
            right: "20%",
            animation: "float 4s ease-in-out infinite",
          }}
        />
      </div>

      <main className="relative overflow-x-hidden" style={{ zIndex: 10 }}>
        <Navbar />

        <div
          id="home"
          ref={(el) => (parallaxElementsRef.current[0] = el)}
          className="parallax-element min-h-screen relative"
          data-speed="0.02"
          data-parallax-disabled="false"
          style={{
            zIndex: 10,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <HeroSection />
        </div>

        <div
          id="skills"
          ref={(el) => (parallaxElementsRef.current[1] = el)}
          className="parallax-element min-h-screen py-16 relative"
          data-speed="0.01"
          data-mobile-speed="0"
          style={{
            zIndex: 30,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <SkillsSection />
        </div>

        <div
          id="projects"
          ref={(el) => (parallaxElementsRef.current[2] = el)}
          className="parallax-element min-h-screen py-16 relative"
          data-speed="0.015"
          data-mobile-speed="0"
          style={{
            zIndex: 20,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <ProjectsSection />
        </div>

        <div id="contact" className="relative" style={{ zIndex: 40 }}>
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;

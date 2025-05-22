import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Initialize parallax effect
    if (containerRef.current) {
      containerRef.current.style.setProperty("--parallax-speed", "0.1");
    }

    // Smooth aura cursor follower
    const container = containerRef.current;
    if (!container) return;

    // Create the main cursor dot (fast-moving)
    const cursorDot = document.createElement("div");
    cursorDot.className = "absolute pointer-events-none rounded-full";
    cursorDot.style.cssText = `
      width: 8px;
      height: 8px;
      background: rgba(255, 255, 255, 0.95);
      transform: translate(-50%, -50%);
      z-index: 20;
      box-shadow: 0 0 10px rgba(88, 101, 242, 0.8);
    `;
    container.appendChild(cursorDot);

    const mainCursor = {
      element: cursorDot,
      x: 0,
      y: 0,
    };

    // Create multiple aura layers for depth effect (slower following)
    const auraLayers = Array.from({ length: 4 }, (_, i) => {
      const aura = document.createElement("div");
      const size = 60 + i * 40; // Increasing size for each layer
      const opacity = 0.6 - i * 0.12; // Decreasing opacity for outer layers

      aura.className = "absolute pointer-events-none rounded-full";
      aura.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(88, 101, 242, ${opacity}) 0%, rgba(88, 101, 242, ${
        opacity * 0.3
      }) 40%, transparent 70%);
        transform: translate(-50%, -50%);
        filter: blur(${i * 2}px);
        z-index: ${10 - i};
      `;

      container.appendChild(aura);
      return {
        element: aura,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        speed: 0.04 + i * 0.015, // Much slower speeds for trailing effect
      };
    });

    // Add inner bright core (medium speed)
    const core = document.createElement("div");
    core.className = "absolute pointer-events-none rounded-full";
    core.style.cssText = `
      width: 24px;
      height: 24px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(88, 101, 242, 0.6) 50%, transparent 80%);
      transform: translate(-50%, -50%);
      z-index: 15;
    `;
    container.appendChild(core);

    const coreLayer = {
      element: core,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      speed: 0.12, // Medium speed between cursor and aura
    };

    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;
    let isMouseInside = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      isMouseInside = true;
      // Fade in all cursor elements when mouse enters
      mainCursor.element.style.opacity = "1";
      [...auraLayers, coreLayer].forEach((layer) => {
        layer.element.style.opacity = "1";
      });
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
      // Fade out all cursor elements when mouse leaves
      mainCursor.element.style.opacity = "0";
      [...auraLayers, coreLayer].forEach((layer) => {
        layer.element.style.opacity = "0";
      });
    };

    const animate = () => {
      if (isMouseInside) {
        // Update main cursor dot (instant following)
        mainCursor.x = mouseX;
        mainCursor.y = mouseY;
        mainCursor.element.style.left = `${mainCursor.x}px`;
        mainCursor.element.style.top = `${mainCursor.y}px`;

        // Update aura layers and core with delay
        [...auraLayers, coreLayer].forEach((layer) => {
          layer.targetX = mouseX;
          layer.targetY = mouseY;

          // Smooth interpolation for trailing effect
          layer.x += (layer.targetX - layer.x) * layer.speed;
          layer.y += (layer.targetY - layer.y) * layer.speed;

          // Update position
          layer.element.style.left = `${layer.x}px`;
          layer.element.style.top = `${layer.y}px`;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    // Continuous looping line animation
    anime({
      targets: "#namePath path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeOutQuad",
      duration: 2000,
      delay: 500,
      loop: true,
      direction: "alternate",
      complete: function () {
        anime({
          targets: "#namePath path",
          strokeWidth: [2, 3],
          opacity: [1, 0.8],
          duration: 1500,
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
        });
      },
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      [...auraLayers, coreLayer, mainCursor].forEach((layer) =>
        layer.element.remove()
      );
    };
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 bg-[#1e1e1e] cursor-none"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#5865F2]/20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            ref={(el) => {
              if (el) {
                anime({
                  targets: el,
                  translateX: () => anime.random(-100, 100),
                  translateY: () => anime.random(-100, 100),
                  duration: () => anime.random(5000, 15000),
                  easing: "easeInOutQuad",
                  loop: true,
                  direction: "alternate",
                });
              }
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div
            id="namePath"
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#5865F2]"
          >
            <svg width="100%" height="80" viewBox="0 0 600 80">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M20,40 C20,40 50,10 80,40 S140,10 170,40 S230,10 260,40 S320,10 350,40 S410,10 440,40 S500,10 530,40 S560,70 580,40"
                stroke-linecap="round"
              />
              <text x="300" y="70" textAnchor="middle" fontSize="60">
                <tspan fill="#5865F2">Satriyo</tspan>
                <tspan fill="white"> Laksono</tspan>
              </text>
            </svg>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300"
        >
          Frontend Developer | Backend Developer | AI Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "bg-[#5865F2] hover:bg-[#4752C4]",
              "text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all text-sm sm:text-base cursor-none"
            )}
          >
            <span className="flex items-center">
              <LightningBoltIcon className="mr-2" /> View My Work
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "border-2 border-[#5865F2] hover:bg-[#5865F2]/10",
              "text-white font-bold py-3 px-8 rounded-lg transition-all cursor-none"
            )}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

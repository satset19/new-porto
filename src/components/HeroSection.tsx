import React, { useEffect, useRef } from "react";
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
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 bg-[#1e1e1e]"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            <span className="text-[#5865F2]">Satriyo</span> Laksono
          </h1>
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
              "text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all text-sm sm:text-base"
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
              "text-white font-bold py-3 px-8 rounded-lg transition-all"
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

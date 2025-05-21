import React from "react";
import { motion } from "motion/react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GitHubLogoIcon className="w-5 h-5" />,
      url: "https://github.com/satset19",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInLogoIcon className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/satriyo-laksono/",
    },
  ];

  const quickLinks = ["Home", "Projects", "Skills", "About", "Contact"];
  const services = [
    // "3D Animation",
    // "Character Design",
    // "VFX Creation",
    // "Motion Graphics",
    // "Product Visualization",
  ];

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#3a3a3a] py-8 sm:py-12 px-4 sm:px-6 w-full mt-auto z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 overflow-hidden">
        <div className="md:col-span-2">
          <a
            href="#"
            className="text-2xl sm:text-3xl font-bold text-white hover:text-[#5865F2] transition-colors"
          >
            <span className="text-[#5865F2]">SAT</span>Portfolio
          </a>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
            Designing and building scalable systems, clean code, and intuitive
            interfaces that power modern digital products.
          </p>
          <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                aria-label={`${social.name} profile`}
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2b2b2b] flex items-center justify-center",
                  "hover:bg-[#5865F2]/20 transition-colors"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-0">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <motion.li
                key={link}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#5865F2] transition-colors"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-0">
          <h3 className="text-lg sm:text-xl font-bold text-white">Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <motion.li
                key={service}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#5865F2] transition-colors"
                >
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#3a3a3a]/30 flex flex-col md:flex-row justify-between items-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Satriyo Portfolio. All rights
          reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <motion.a
            href="#"
            className="text-gray-400 hover:text-[#5865F2] text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-400 hover:text-[#5865F2] text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Terms of Service
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

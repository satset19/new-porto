import React, { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  ImageIcon,
  VideoIcon,
  CubeIcon,
  MagicWandIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Discord Roast Bot",
    description:
      "A humorous Discord bot that delivers roast messages to users.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?q=80&w=800&auto=format&fit=crop",
    category: "Discord Bot",
    icon: <RocketIcon className="w-5 h-5" />,
    link: "https://github.com/satset19/discord-roast",
  },
  {
    id: 2,
    title: "Olla Chatbot",
    description:
      "An AI-powered chatbot designed for interactive conversations.",
    image:
      "https://images.unsplash.com/photo-1612832021036-4d7b3c4e1c4d?q=80&w=800&auto=format&fit=crop",
    category: "AI Chatbot",
    icon: <MagicWandIcon className="w-5 h-5" />,
    link: "https://github.com/satset19/olla-chatbot",
  },
  {
    id: 3,
    title: "Async Broadcast",
    description: "A TypeScript library for asynchronous event broadcasting.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8a5b9f7d5c?q=80&w=800&auto=format&fit=crop",
    category: "Library",
    icon: <CodeIcon className="w-5 h-5" />,
    link: "https://github.com/satset19/async-broadcast",
  },
  {
    id: 4,
    title: "Portofolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1502882705085-cb3c9e8e8f1e?q=80&w=800&auto=format&fit=crop",
    category: "Web Development",
    icon: <ImageIcon className="w-5 h-5" />,
    link: "https://github.com/satset19/portofolio",
  },
  {
    id: 5,
    title: "MXOne Backend",
    description: "Backend services for the MXOne application.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79da63d8a5c4?q=80&w=800&auto=format&fit=crop",
    category: "Backend Development",
    icon: <CubeIcon className="w-5 h-5" />,
    link: "https://github.com/satset19/mxone-backend",
  },
  {
    id: 6,
    title: "Casco Energi – Partners Page",
    description:
      "Responsive web section showcasing Casco Energi's official partners.",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=800&auto=format&fit=crop",
    category: "Frontend Web",
    icon: <ImageIcon className="w-5 h-5" />,
    link: "https://cascoenergi.com/",
  },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-8 sm:py-20 px-4 sm:px-6 relative bg-[#1e1e1e]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-16 text-center text-white"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[#5865F2]">Featured</span> Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={cn(
                "bg-[#2b2b2b] rounded-lg overflow-hidden",
                "border border-[#3a3a3a] hover:border-[#5865F2]",
                "transition-all duration-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(88, 101, 242, 0.3)",
              }}
            >
              <div className="relative overflow-hidden aspect-video group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-[#5865F2] text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md flex items-center">
                  {project.icon}
                  <span className="ml-1">{project.category}</span>
                </div>
              </div>
              <div className="p-3 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-300 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <button className="text-[#5865F2] font-medium hover:text-[#4752C4] transition-colors">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details →
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;

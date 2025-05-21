import React from "react";
import { motion } from "motion/react";

interface ContentWrapperProps {
  title: string;
  description?: string;
  thumbnail?: string;
  className?: string;
}

export const ContentWrapper = ({
  title,
  description,
  thumbnail,
  className,
}: ContentWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mx-auto p-8 ${className}`}
    >
      <div className="flex flex-col items-center gap-6">
        {thumbnail && (
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h2 className="text-4xl font-bold text-center">{title}</h2>
        {description && (
          <p className="text-lg text-center text-gray-400">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

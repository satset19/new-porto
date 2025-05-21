"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const cardHeight = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="relative h-[300vh] overflow-hidden">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ height: cardHeight }}
          className="relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex max-w-7xl items-start px-4">
            <div className="w-full max-w-2xl">
              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  style={{ y: translateY }}
                  className="my-20"
                >
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="text-2xl font-bold text-white"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="mt-4 max-w-sm text-gray-300"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
            <div
              className={cn(
                "sticky top-0 h-60 w-full max-w-md overflow-hidden rounded-xl",
                contentClassName
              )}
            >
              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className="h-full w-full"
                >
                  {item.content ?? null}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

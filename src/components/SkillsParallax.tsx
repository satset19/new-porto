"use client";
import React, { memo } from "react";
import { motion } from "motion/react";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface SkillsParallaxProps {
  products: Product[];
}

const SkillsParallax: React.FC<SkillsParallaxProps> = memo(({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      className="skills-parallax-container parallax-element relative flex flex-col antialiased py-16 h-full"
      data-speed="0.03"
      data-mobile-speed="0.01"
    >
      <Header />
      <div className="space-y-20">
        <div className="flex flex-wrap justify-center gap-10 max-md:gap-5">
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-10 max-md:gap-5">
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-10 max-md:gap-5">
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </div>
    </div>
  );
});

const Header: React.FC = memo(() => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1 className="text-2xl font-bold md:text-7xl dark:text-white">
        Tech Stack & <br /> Development Tools
      </h1>
    </div>
  );
});

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  return (
    <motion.div
      className="group/product parallax-element relative h-72 w-[25rem] max-md:h-40 max-md:w-[8rem]"
      data-speed="0.05"
      data-mobile-speed="0.02"
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="absolute inset-0 h-full w-full object-contain"
          alt={product.title}
          loading="lazy"
          width="400"
          height="288"
        />
      </a>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100 max-md:text-xs">
        {product.title}
      </h2>
    </motion.div>
  );
});

export { SkillsParallax };

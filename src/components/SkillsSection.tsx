import React from "react";
import { SkillsParallax } from "./SkillsParallax";

const skills = [
  {
    title: "NodeJS",
    link: "#",
    thumbnail: "https://img.icons8.com/color/512/nodejs.png",
  },
  {
    title: "React",
    link: "#",
    thumbnail:
      "https://th.bing.com/th/id/R.692adb35708d9279ca7eb56c71bfc102?rik=hNgh9iAYWQWBkw&riu=http%3a%2f%2fangular.github.io%2freact-native-renderer%2fassets%2freact.png&ehk=8iIITJSxQoapFfYG36FJh80Iaoof0dOE6HcLjoUAU1I%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "TypeScript",
    link: "#",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    title: "MongoDB",
    link: "#",
    thumbnail:
      "https://th.bing.com/th/id/R.0e23481b805fa66eb9ff0c177ff27030?rik=00LN9yVT3nMAyw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-mongodb-png-mongodb-1600.png&ehk=YwJU48GqAzZ6V3Zlafc4pyilw%2biV5XBxEO7chpNV3M8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "PostgreSQL",
    link: "#",
    thumbnail:
      "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
  },
  {
    title: "Tailwind CSS",
    link: "#",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    title: "Express.js",
    link: "#",
    thumbnail:
      "https://inapp.com/wp-content/uploads/elementor/thumbs/express-js-01-1-q05uw85vt1jqloiy5k82sfy7tgvysgt1uqld8slsbc.png",
  },
  {
    title: "Vue.js",
    link: "#",
    thumbnail:
      "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
  },
  {
    title: "Firebase",
    link: "#",
    thumbnail:
      "https://cdn.freebiesupply.com/logos/large/2x/firebase-1-logo-png-transparent.png",
  },
  {
    title: "GraphQL",
    link: "#",
    thumbnail:
      "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/graphql-logo-freelogovectors.net_.png",
  },
  {
    title: "Next.js",
    link: "#",
    thumbnail:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png",
  },
  {
    title: "Docker",
    link: "#",
    thumbnail:
      "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png",
  },
  {
    title: "UmiJS",
    link: "#",
    thumbnail:
      "https://camo.githubusercontent.com/97cb723599338711d9b37dda160b0e9f1dd9b813952bdb905b67b40d4793384e/68747470733a2f2f696d672e616c6963646e2e636f6d2f696d6765787472612f69332f4f31434e3031654269793631316236374b4c464f7869335f2121363030303030303030333431352d322d7470732d3230302d3230302e706e67",
  },
  {
    title: "n8n",
    link: "#",
    thumbnail:
      "https://serpapi.com/blog/content/images/2025/03/nnio_4425_logo_1606482778_slu2t.png",
  },
  {
    title: "Supabase",
    link: "#",
    thumbnail:
      "https://supabase.com/docs/assets/images/supabase-logo-wordmark.png",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="relative py-20 flex items-center justify-center px-4 sm:px-6 my-10 sm:my-20 z-10">
      <div className="w-full mt-10">
        <SkillsParallax products={skills} />
      </div>
    </section>
  );
};

export default SkillsSection;

import anime from "animejs";

export const initializeParallaxEffect = () => {
  const elements = document.querySelectorAll(".parallax-element");

  // Optimized scroll handler with requestAnimationFrame
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateElements = () => {
    const scrollTop = lastScrollY;

    elements.forEach((element) => {
      // Skip elements with parallax disabled
      // Skip disabled elements except HeroSection
      if (
        element.getAttribute("data-parallax-disabled") === "true" &&
        !element.id.includes("home")
      ) {
        return;
      }

      const speed = element.getAttribute("data-speed") || "0.1";
      const yPos = -(scrollTop * Number(speed));

      // Apply transform directly for better performance
      (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  };

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(updateElements);
      ticking = true;
    }
  };

  // Initialize will-change property
  elements.forEach((element) => {
    (element as HTMLElement).style.willChange = "transform";
  });

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Initial update
  updateElements();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const create3DScrollEffect = () => {
  const sections = document.querySelectorAll(".scroll-3d-section");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const distance = scrollTop - sectionTop;
      const speed = section.getAttribute("data-speed") || "0.1";

      if (Math.abs(distance) < window.innerHeight) {
        const rotateX = distance * Number(speed) * 0.05;
        const translateZ = Math.abs(distance) * -0.1;
        const opacity = 1 - Math.abs(distance) / (window.innerHeight * 0.8);

        anime({
          targets: section,
          rotateX: `${rotateX}deg`,
          translateZ: `${translateZ}px`,
          opacity: Math.max(0.4, Math.min(1, opacity)),
          duration: 0,
          easing: "linear",
        });
      }
    });
  });
};

export const initialize3DScrollScene = () => {
  // Skip initialization if SkillsParallax is present
  if (document.querySelector(".skills-parallax-container")) {
    return;
  }

  // Fix: Convert NodeList to array before passing to anime.js
  const convertNodeListToArray = (nodeList: NodeList): HTMLElement[] => {
    return Array.from(nodeList) as HTMLElement[];
  };

  // Create 3D space for sections
  const sections = document.querySelectorAll(
    ".section-3d:not(.skills-parallax-container)"
  );
  if (sections.length > 0) {
    anime({
      targets: convertNodeListToArray(sections),
      perspective: "1000px",
      duration: 0,
    });

    create3DScrollEffect();
  }

  // Initialize parallax effect only for non-SkillsParallax elements
  initializeParallaxEffect();
};

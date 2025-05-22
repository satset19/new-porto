import anime from "animejs";

export const initializeParallaxEffect = () => {
  const elements = document.querySelectorAll(".parallax-element");
  let lastScrollY = window.scrollY;
  let ticking = false;
  let lastTime = 0;
  const debounceTime = 16; // ~60fps

  const updateElements = (timestamp: number) => {
    // Debounce to prevent jank
    if (timestamp - lastTime < debounceTime) {
      ticking = false;
      return;
    }
    lastTime = timestamp;

    const scrollTop = lastScrollY;
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      if (element.getAttribute("data-parallax-disabled") === "true") {
        return;
      }

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const speed = parseFloat(element.getAttribute("data-speed") || "0.1");
      const mobileSpeed = parseFloat(
        element.getAttribute("data-mobile-speed") || speed.toString()
      );
      const isMobile = window.innerWidth <= 768;
      const actualSpeed = isMobile ? mobileSpeed : speed;

      // Only animate elements in or near viewport
      if (rect.top < windowHeight * 1.5 && rect.bottom > -windowHeight * 0.5) {
        const yPos = -(scrollTop - elementTop) * actualSpeed;
        (
          element as HTMLElement
        ).style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
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

  // Initialize elements
  elements.forEach((element) => {
    (element as HTMLElement).style.willChange = "transform";
    (element as HTMLElement).style.backfaceVisibility = "hidden";
    (element as HTMLElement).style.transformStyle = "preserve-3d";
  });

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateElements(performance.now());

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const create3DScrollEffect = () => {
  const sections = document.querySelectorAll(".scroll-3d-section");
  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateSections = () => {
    const scrollTop = lastScrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const distance = scrollTop - sectionTop;
      const speed = parseFloat(section.getAttribute("data-speed") || "0.1");

      // Only animate sections in or near viewport
      if (Math.abs(distance) < windowHeight * 1.5) {
        const rotateX = distance * speed * 0.05;
        const translateZ = Math.abs(distance) * -0.1;
        const opacityVal = Math.max(
          0.4,
          Math.min(1, 1 - Math.abs(distance) / (windowHeight * 0.8))
        );

        (section as HTMLElement).style.transform = `
          rotateX(${rotateX}deg)
          translateZ(${translateZ}px)
        `;
        (section as HTMLElement).style.opacity = opacityVal.toString();
      }
    });

    ticking = false;
  };

  const handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(updateSections);
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateSections();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const initialize3DScrollScene = () => {
  // Initialize both effects with proper cleanup
  const cleanupParallax = initializeParallaxEffect();
  const cleanup3D = create3DScrollEffect();

  // Set up perspective for 3D effects
  document.body.style.perspective = "1000px";
  document.body.style.perspectiveOrigin = "50% 50%";

  return () => {
    cleanupParallax();
    cleanup3D();
    document.body.style.perspective = "";
    document.body.style.perspectiveOrigin = "";
  };
};


import anime from 'animejs';

export const fadeIn = (element: string | HTMLElement, delay = 0, duration = 800) => {
  return anime({
    targets: element,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    duration,
    delay
  });
};

export const slideIn = (element: string | HTMLElement, direction = 'left', delay = 0, duration = 800) => {
  const x = direction === 'left' ? [-100, 0] : [100, 0];
  
  return anime({
    targets: element,
    translateX: x,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration,
    delay
  });
};

export const rotateElement = (element: string | HTMLElement, delay = 0) => {
  return anime({
    targets: element,
    rotateY: '1turn',
    easing: 'easeInOutQuad',
    duration: 1200,
    delay
  });
};

export const animateProgressBar = (element: string | HTMLElement, finalValue: number, delay = 0) => {
  return anime({
    targets: element,
    width: `${finalValue}%`,
    easing: 'easeInOutQuad',
    duration: 800,
    delay
  });
};

export const createStaggerAnimation = (elements: string | HTMLElement, delay = 50) => {
  return anime({
    targets: elements,
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: anime.stagger(delay)
  });
};

export const hoverEffect = (element: HTMLElement) => {
  element.addEventListener('mouseenter', () => {
    anime({
      targets: element,
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      duration: 300,
      easing: 'easeOutQuad'
    });
  });

  element.addEventListener('mouseleave', () => {
    anime({
      targets: element,
      scale: 1,
      boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
      duration: 300,
      easing: 'easeOutQuad'
    });
  });
};

export const animateShapes = (element: string | HTMLElement) => {
  return anime({
    targets: element,
    translateY: function() { return anime.random(-15, 15); },
    translateX: function() { return anime.random(-15, 15); },
    rotate: function() { return anime.random(-15, 15); },
    easing: 'easeInOutQuad',
    duration: 3000,
    complete: function(anim) {
      animateShapes(element);
    }
  });
};

export const textTypingAnimation = (element: string | HTMLElement, text: string, delay = 0) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  el.innerHTML = '';
  
  return anime({
    targets: element,
    delay,
    update: function(anim) {
      const progress = Math.floor((text.length * anim.progress) / 100);
      if (el) {
        el.innerHTML = text.substring(0, progress);
      }
    },
    easing: 'linear',
    duration: text.length * 50
  });
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const targetY = section.getBoundingClientRect().top + window.pageYOffset;
    const initialY = window.pageYOffset;
    const distance = targetY - initialY;
    const duration = 500; // Scroll duration in milliseconds
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      const ease = easeInOutCubic(Math.min(progress / duration, 1));

      window.scrollTo(0, initialY + distance * ease);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
};

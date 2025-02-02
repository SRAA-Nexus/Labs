// Scroll Animations using GSAP
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
  gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from('.cta-btn', { opacity: 0, y: 50, duration: 1, delay: 1 });

  gsap.from('.about h2', { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  gsap.from('.about-gallery img', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });

  gsap.from('.projects h2', { opacity: 0, y: 50, duration: 1, delay: 2 });
  gsap.from('.project-card', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });

  gsap.from('.collaborate h2', { opacity: 0, y: 50, duration: 1, delay: 2.5 });
  gsap.from('.collaborate .cta-btn', { opacity: 0, y: 50, duration: 1, delay: 3 });
});
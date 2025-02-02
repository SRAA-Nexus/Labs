// Simple Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const projectsSection = document.querySelector('#projects');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
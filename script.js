// Nav name fade on scroll past hero
const nav = document.querySelector('nav');
const hero = document.querySelector('header');

const heroObserver = new IntersectionObserver(([entry]) => {
  nav.classList.toggle('scrolled', !entry.isIntersecting);
}, { threshold: 0 });

heroObserver.observe(hero);

// Subtle fade-in for projects and skill rows
const fadeEls = document.querySelectorAll('.project, .skill-row');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

fadeEls.forEach(el => {
  if (el.classList.contains('project-dim')) return;
  el.style.opacity = '0';
  el.style.transform = 'translateY(10px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

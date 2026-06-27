// Smooth scroll para os links do menu
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efeito de hover nos cards de jogadores
const playerImages = document.querySelectorAll('.player img');

playerImages.forEach(img => {
  img.style.transition = 'transform .3s';

  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

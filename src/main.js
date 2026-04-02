// Dark mode
const html = document.documentElement;
const toggleBtn = document.getElementById('dark-toggle');

function applyTheme(dark) {
  html.classList.toggle('dark', dark);
  toggleBtn.textContent = dark ? '☀️' : '🌙';
}

applyTheme(localStorage.getItem('theme') === 'dark');

toggleBtn.addEventListener('click', () => {
  const dark = !html.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  applyTheme(dark);
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Carousels
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');
  let current = 0;

  function show(index) {
    slides.forEach((s, i) => s.classList.toggle('hidden', i !== index));
    dots.forEach((d, i) => {
      d.classList.toggle('bg-white', i === index);
      d.classList.toggle('bg-white/40', i !== index);
    });
    current = index;
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', e => {
    e.preventDefault();
    show((current - 1 + slides.length) % slides.length);
  });

  carousel.querySelector('.carousel-next').addEventListener('click', e => {
    e.preventDefault();
    show((current + 1) % slides.length);
  });

  dots.forEach((dot, i) => dot.addEventListener('click', e => {
    e.preventDefault();
    show(i);
  }));
});

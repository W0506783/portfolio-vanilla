// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 'journey',
    title: 'Journey Rideshare App',
    subtitle: 'Capstone',
    description: 'A collaborative rideshare platform developed at NSCC. Connects drivers and passengers within the campus community, with real-time matching, route planning, and user profiles.',
    tech: [],
    links: {},
    featured: true,
    images: ['images/013_Journey_Ride_Share.png', 'images/014_Journey_Ride_Share.png', 'images/015_Journey_Ride_Share.png'],
  },
  {
    id: 'corah',
    title: 'Corah Event Booking',
    subtitle: 'Django + Tailwind',
    description: 'An event booking web app built for CORAH (Center of Rural Aging and Health), a community hub and active living centre that promotes health and wellbeing for people 55 years of age plus. Allows staff to manage events and seniors to register, built with Django and styled with Tailwind CSS.',
    tech: ['Python', 'Django', 'Tailwind CSS', 'SQLite'],
    links: {},
    featured: true,
    images: ['images/004_Corah.png', 'images/005_Corah.png', 'images/006_Corah.png'],
  },
  {
    id: 'luckybug',
    title: 'Lucky Bug Threads',
    subtitle: 'Web Presence',
    description: "A clean, modern web presence site built for a friend's sewing brand. Designed and developed in an afternoon, showcasing what a fast, focused client build can look like.",
    tech: ['React', 'Vite', 'Tailwind CSS'],
    links: { live: 'https://lucky-bug-threads.netlify.app/' },
    featured: false,
    images: ['images/007_Lucky-Bug-Threads.png', 'images/008_Lucky-Bug-Threads.png', 'images/009_Lucky-Bug-Threads.png'],
  },
  {
    id: 'rfo',
    title: 'RFO Central',
    subtitle: 'Data Analyst, Software Development Team',
    description: 'Bespoke software/Project-based SaaS. Spent 4+ years on this project not as a technical developer but as the person in between. Gathered client requirements, communicated them to the dev team, tested builds against real user needs, and flagged the gaps. The software continued development after my time on it and is still active today.',
    tech: [],
    links: { live: 'http://www.rfocentral.ca/' },
    featured: false,
    images: ['images/001_RFO-Central.png', 'images/002_RFO-Central.png', 'images/003_RFO-Central.png'],
  },
  {
    id: 'trivia',
    title: 'React Trivia Game',
    subtitle: 'Interactive App',
    description: 'A trivia game built in React featuring multiple categories, score tracking, and a fast-paced question flow. My first venture into React — a fun project that deepened my understanding of React state and component design.',
    tech: ['React', 'Vite', 'CSS'],
    links: { live: 'https://w0506783.github.io/trivia-game-sonnet/' },
    featured: false,
    images: ['images/010_Trivia_Game.png', 'images/011_Trivia_Game.png', 'images/012_Trivia_Game.png'],
  },
];

const skills = [
  { category: 'Frontend',    items: ['React', 'Vite', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'] },
  { category: 'Backend',     items: ['Python', 'Django', 'REST APIs'] },
  { category: 'Tools',       items: ['Git', 'VS Code', 'Figma', 'Claude Code'] },
  { category: 'Soft Skills', items: ['Communication', 'Collaboration', 'Client Work', 'Agile'] },
];

// ─── Render: Projects ─────────────────────────────────────────────────────────

function createCarouselHTML(images, title) {
  const slides = images.map((src, i) => `
    <img src="${src}" alt="${title} screenshot ${i + 1}"
      class="carousel-slide absolute inset-0 w-full h-full object-cover${i > 0 ? ' hidden' : ''}" />
  `).join('');

  const dots = images.map((_, i) => `
    <button class="carousel-dot w-1.5 h-1.5 rounded-full transition-colors ${i === 0 ? 'bg-white' : 'bg-white/40'}"></button>
  `).join('');

  return `
    <div class="relative w-full aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden" data-carousel>
      ${slides}
      <button class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs flex items-center justify-center transition-colors">‹</button>
      <button class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs flex items-center justify-center transition-colors">›</button>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">${dots}</div>
    </div>
  `;
}

function createProjectCard(project) {
  const { title, subtitle, description, tech, links, featured, images } = project;

  const featuredBadge = featured
    ? `<span class="text-xs bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300 px-2 py-0.5 rounded-full shrink-0">Featured</span>`
    : '';

  const techPills = tech.length > 0
    ? `<div class="flex flex-wrap gap-1.5 pt-1">
        ${tech.map(t => `<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">${t}</span>`).join('')}
       </div>`
    : '';

  let linksHTML = '';
  if (links.github) linksHTML += `<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub →</a>`;
  if (links.live)   linksHTML += `<a href="${links.live}" target="_blank" rel="noopener noreferrer" class="text-sm text-accent-600 dark:text-accent-400 hover:underline">Live Site →</a>`;
  if (!links.github && !links.live) linksHTML = `<span class="text-xs text-gray-400 dark:text-gray-600 italic">Links coming soon</span>`;

  const card = document.createElement('div');
  card.className = `group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow${featured ? ' ring-2 ring-accent-500/20' : ''}`;

  card.innerHTML = `
    ${createCarouselHTML(images, title)}
    <div class="flex flex-col gap-2 flex-1">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white text-lg leading-snug">${title}</h3>
          ${subtitle ? `<p class="text-xs text-accent-600 dark:text-accent-400 font-medium mt-0.5">${subtitle}</p>` : ''}
        </div>
        ${featuredBadge}
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">${description}</p>
      ${techPills}
    </div>
    <div class="flex gap-3 pt-1 border-t border-gray-100 dark:border-gray-800">${linksHTML}</div>
  `;

  return card;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');

  const sorted = [...projects].sort((a, b) => {
    if (a.id === 'journey') return -1;
    if (b.id === 'journey') return 1;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  sorted.forEach(project => grid.appendChild(createProjectCard(project)));
}

// ─── Render: Skills ───────────────────────────────────────────────────────────

function renderSkills() {
  const grid = document.getElementById('skills-grid');

  skills.forEach(({ category, items }) => {
    const group = document.createElement('div');

    const pills = items.map(skill =>
      `<span class="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">${skill}</span>`
    ).join('');

    group.innerHTML = `
      <p class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-3">${category}</p>
      <div class="flex flex-wrap gap-2">${pills}</div>
    `;

    grid.appendChild(group);
  });
}

// ─── Carousels ────────────────────────────────────────────────────────────────

function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots   = carousel.querySelectorAll('.carousel-dot');
    let current  = 0;

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
}

// ─── Dark mode ────────────────────────────────────────────────────────────────

function initDarkMode() {
  const html      = document.documentElement;
  const toggleBtn = document.getElementById('dark-toggle');

  function applyTheme(dark) {
    html.classList.toggle('dark', dark);
    toggleBtn.textContent = dark ? '☀️' : '🌙';
  }

  applyTheme(localStorage.getItem('theme') !== 'light');

  toggleBtn.addEventListener('click', () => {
    const dark = !html.classList.contains('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    applyTheme(dark);
  });
}

// ─── Footer year ──────────────────────────────────────────────────────────────

function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

// ─── GitHub API ───────────────────────────────────────────────────────────────

async function loadRepos(username) {
  const status = document.getElementById('github-status');
  const grid   = document.getElementById('github-grid');

  status.textContent = 'Loading repositories...';

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const repos = await res.json();

    status.textContent = '';

    if (repos.length === 0) {
      status.textContent = 'No public repositories found.';
      return;
    }

    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex flex-col gap-3';

      card.innerHTML = `
        <h3 class="font-semibold text-gray-900 dark:text-white">${repo.name}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 flex-1">${repo.description ?? 'No description provided.'}</p>
        <div class="flex items-center justify-between text-xs text-gray-400 dark:text-gray-600">
          <span>${repo.language ?? 'Unknown'}</span>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
            class="text-accent-500 hover:text-accent-400 transition-colors">View Repo</a>
        </div>
      `;

      grid.appendChild(card);
    });

  } catch (err) {
    status.textContent = 'Could not load repositories. Please try again later.';
    console.error(err);
  }
}

// ─── Audio ────────────────────────────────────────────────────────────────────

function initAudio() {
  const tracks = [
    'audio/song01.mp3',
    'audio/song02.mp3',
    'audio/song03.mp3',
    'audio/song04.mp3',
  ];

  const muteBtn     = document.getElementById('mute-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const audio       = new Audio();
  let playlist      = [];
  let trackIndex    = 0;
  let started       = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function playNext() {
    trackIndex++;
    if (trackIndex >= playlist.length) {
      playlist  = shuffle(tracks);
      trackIndex = 0;
    }
    audio.src = playlist[trackIndex];
    audio.play();
  }

  function start() {
    if (started) return;
    started       = true;
    playlist      = shuffle(tracks);
    trackIndex    = 0;
    audio.src     = playlist[0];
    audio.volume  = parseFloat(volumeSlider.value);
    audio.play();
  }

  audio.addEventListener('ended', playNext);

  muteBtn.addEventListener('click', () => {
    start();
    audio.muted    = !audio.muted;
    muteBtn.textContent = audio.muted ? '🔇' : '🔊';
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume  = parseFloat(volumeSlider.value);
    if (audio.muted && audio.volume > 0) {
      audio.muted = false;
      muteBtn.textContent = '🔊';
    }
  });

  return start;
}

// ─── Splash ───────────────────────────────────────────────────────────────────

function initSplash(onEnter) {
  const splash   = document.getElementById('splash');
  const enterBtn = document.getElementById('splash-enter');

  enterBtn.addEventListener('click', () => {
    onEnter();
    splash.style.transition = 'opacity 0.5s ease';
    splash.style.opacity    = '0';
    setTimeout(() => splash.remove(), 500);
  });
}

// ─── Button Spotlight ─────────────────────────────────────────────────────────

function initButtonSpotlight() {
  document.querySelectorAll('.btn-spotlight').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--sx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--sy', `${e.clientY - r.top}px`);
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--sx', '-100px');
      btn.style.setProperty('--sy', '-100px');
    });
  });
}

// ─── Theme Picker ─────────────────────────────────────────────────────────────

function initTheme() {
  const html   = document.documentElement;
  const saved  = localStorage.getItem('theme-color') || 'emerald';
  html.dataset.theme = saved;

  function setActive(theme) {
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      const active = btn.dataset.themeBtn === theme;
      btn.classList.toggle('ring-gray-500', active);
      btn.classList.toggle('ring-transparent', !active);
    });
  }

  setActive(saved);

  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.themeBtn;
      html.dataset.theme = theme;
      localStorage.setItem('theme-color', theme);
      setActive(theme);
    });
  });
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      await fetch('/', { method: 'POST', body: data });

      form.innerHTML = `
        <div class="py-10 text-center">
          <p class="text-2xl mb-2">✅</p>
          <p class="font-semibold text-gray-900 dark:text-white text-lg">Message sent!</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Thanks for reaching out — I'll get back to you soon.</p>
        </div>
      `;
    } catch {
      form.insertAdjacentHTML('beforeend', `
        <p class="text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>
      `);
    }
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

initTheme();
initButtonSpotlight();
renderProjects();
renderSkills();
initCarousels();
initDarkMode();
setYear();

const startAudio = initAudio();
initSplash(startAudio);
loadRepos('W0506783');
initContactForm();

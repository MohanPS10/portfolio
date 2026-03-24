// ─── Portfolio filter ────────────────────────────────────────────────────────
const pills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.project-card');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const filter = pill.dataset.filter;
    cards.forEach(card => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter;
      card.style.display = show ? '' : 'none';
    });
  });

  // keyboard accessibility
  pill.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pill.click();
    }
  });
});

// ─── Active nav link on scroll ───────────────────────────────────────────────
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('nav.primary-nav a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`nav.primary-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => observer.observe(s));

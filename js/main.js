// ── Hamburger ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Active nav link ────────────────────────────
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentFile) link.classList.add('active');
});

// ── Skill bar animation ────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
if (skillFills.length) {
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(f => skillObs.observe(f));
}

// ── Timeline scroll reveal ─────────────────────
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length) {
  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  const tlObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        tlObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  timelineItems.forEach(item => tlObs.observe(item));
}

// ── Contact form ───────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = "Thanks for your message! I'll get back to you soon.";
  note.style.display = 'block';
  e.target.reset();
}

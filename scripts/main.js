/* ============================================================
   MAIN.JS — Core interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Theme Toggle ----
  initTheme();

  // ---- Navbar ----
  initNavbar();

  // ---- Scroll Reveal ----
  initScrollReveal();

  // ---- Timeline Expand/Collapse ----
  initTimelineExpanders();

  // ---- Smooth Scroll ----
  initSmoothScroll();

  // ---- Active Nav Highlight ----
  initActiveNav();
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });
  }
}

/* ============================================================
   NAVBAR — Scroll effect & hamburger
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('navbar-hamburger');
  const links = document.getElementById('navbar-links');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Hamburger menu
  if (hamburger && links) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      links.classList.toggle('open');
    });

    // Close menu when clicking a link
    links.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
}

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ============================================================
   TIMELINE EXPANDERS
   ============================================================ */
function initTimelineExpanders() {
  document.querySelectorAll('.timeline__expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const extra = btn.previousElementSibling;
      if (!extra) return;

      const isExpanded = extra.classList.contains('expanded');
      extra.classList.toggle('expanded');
      btn.textContent = isExpanded ? '+ Show more' : '− Show less';
    });
  });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================================
   ACTIVE NAV HIGHLIGHTING
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

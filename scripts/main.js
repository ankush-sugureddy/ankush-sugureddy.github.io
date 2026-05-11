import { resumeData } from './data.js';

/* ============================================================
   MAIN.JS — Core interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Render Dynamic Content ----
  renderTimeline();
  renderCertifications();
  renderSkills();

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

/* ============================================================
   DYNAMIC RENDERING
   ============================================================ */
function renderTimeline() {
  const t = document.getElementById('timeline');
  if (!t) return;
  const colors = ["#f6821f", "#ff9900", "#0071dc", "#e4002b", "#6c5ce7", "#0033a0", "#0077c8", "#8c1d40", "#003087", "#2d9cdb"];
  t.innerHTML = resumeData.experience.map((d, i) => {
    const dir = i % 2 === 0 ? 'reveal-left' : 'reveal-right';
    const color = colors[i % colors.length];
    
    const processedHighlights = d.highlights.map(h => h.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
    const techTags = d.tech ? `<div class="timeline__tech">${d.tech.split(', ').map(tech => `<span class="timeline__tech-tag">${tech}</span>`).join('')}</div>` : '';
    
    return `<div class="timeline__item ${dir}">
      <div class="timeline__dot" style="border-color:${color}"></div>
      <div class="timeline__card glass-card">
        <div class="timeline__company">
          <span class="timeline__company-badge" style="background:${color}"></span>
          <span class="timeline__company-name">${d.company}</span>
        </div>
        <h3 class="timeline__role">${d.role}</h3>
        <span class="timeline__date">${d.date}</span>
        <ul class="timeline__highlights">
          ${processedHighlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        ${techTags}
      </div>
    </div>`;
  }).join('');
}

function renderCertifications() {
  const grid = document.getElementById('certifications-grid');
  if (!grid) return;
  grid.innerHTML = resumeData.certifications.map((cert, i) => {
    const stagger = (i % 5) + 1;
    return `<div class="cert-card glass-card reveal stagger-${stagger}">
        <div class="cert-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div class="cert-card__content">
          <h3 class="cert-card__title">${cert.name}</h3>
          <p class="cert-card__issuer">${cert.issuer}</p>
          ${cert.date ? `<span class="cert-card__date">${cert.date}</span>` : ''}
          ${cert.id ? `<span class="cert-card__id">Credential ID: ${cert.id} ${cert.url ? `<a href="${cert.url}" target="_blank" style="color:var(--accent-primary);text-decoration:none;font-weight:600;">[Verify]</a>` : ''}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  const categoryIcons = {
    "AI & Machine Learning": "🤖",
    "Cloud Platforms": "☁️",
    "Data Engineering": "⚡",
    "Programming & Infra": "💻",
    "Databases": "🗄️"
  };
  grid.innerHTML = resumeData.skills.map((skill, i) => {
    const stagger = (i % 6) + 1;
    const icon = categoryIcons[skill.category] || "🚀";
    const tags = skill.items.split(', ').map(tag => `<span class="skill-tag">${tag}</span>`).join('');
    return `<div class="skill-category glass-card reveal stagger-${stagger}">
        <div class="skill-category__icon">${icon}</div>
        <h3 class="skill-category__title">${skill.category}</h3>
        <div class="skill-category__items">${tags}</div>
      </div>`;
  }).join('');
}

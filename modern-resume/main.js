import './style.css'
import { resumeData } from '../../scripts/data.js'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1 class="name">${resumeData.name}</h1>
    <div class="title">${resumeData.title}</div>
    <div class="contact-info">
      <a href="mailto:${resumeData.contact.email}">📧 ${resumeData.contact.email}</a>
      <a href="${resumeData.contact.phoneUrl}">📱 ${resumeData.contact.phone}</a>
      <a href="${resumeData.contact.linkedinUrl}" target="_blank">🔗 ${resumeData.contact.linkedin}</a>
      <a href="${resumeData.contact.scholarUrl}" target="_blank">🎓 ${resumeData.contact.scholar}</a>
      <a href="${resumeData.contact.portfolioUrl}" target="_blank">🌐 ${resumeData.contact.portfolio}</a>
      <span>📍 ${resumeData.contact.location}</span>
    </div>
  </header>

  <section class="summary">
    ${resumeData.summary}
  </section>

  <section class="experience">
    <h2 class="section-title">Experience</h2>
    ${resumeData.experience.map(exp => `
      <div class="experience-item">
        <div class="experience-header">
          <div class="experience-role">${exp.role} <span class="experience-company">@ ${exp.company}</span></div>
          <div class="experience-date">${exp.date}</div>
        </div>
        <ul class="experience-highlights">
          ${exp.highlights.map(h => `<li>${h.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}
        </ul>
        ${exp.tech ? `<div class="experience-tech">Tech: ${exp.tech}</div>` : ''}
      </div>
    `).join('')}
  </section>

  <div class="grid-2">
    <section class="skills">
      <h2 class="section-title">Skills & Technologies</h2>
      ${resumeData.skills.map(skill => `
        <div class="skill-category">
          <div class="skill-name">${skill.category}</div>
          <div class="skill-items">${skill.items}</div>
        </div>
      `).join('')}
    </section>

    <section class="certifications">
      <h2 class="section-title">Certifications</h2>
      ${resumeData.certifications.map(cert => `
        <div class="cert-item">
          <div class="cert-name">${cert.name}</div>
          <div class="cert-details">
            ${cert.issuer}${cert.date ? ` • ${cert.date}` : ''}
            ${cert.id ? `<br>ID: ${cert.id}${cert.url ? ` <a href="${cert.url}" target="_blank">[Verify]</a>` : ''}` : ''}
          </div>
        </div>
      `).join('')}
    </section>
  </div>
`

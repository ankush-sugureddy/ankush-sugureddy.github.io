/* ============================================================
   TYPING EFFECT — Hero subtitle animation
   ============================================================ */
class TypingEffect {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseTime = options.pauseTime || 2000;
    this.loop = options.loop !== undefined ? options.loop : true;

    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      // Deleting
      this.element.textContent = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(() => this.type(), 300);
        return;
      }

      setTimeout(() => this.type(), this.deleteSpeed);
    } else {
      // Typing
      this.element.textContent = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        // Pause before deleting
        this.isDeleting = true;
        setTimeout(() => this.type(), this.pauseTime);
        return;
      }

      setTimeout(() => this.type(), this.typeSpeed);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    new TypingEffect(typingElement, [
      'Lead Engineer',
      'AI Architect',
      'Cloud Data Expert',
      'Platform Builder',
      'GenAI Strategist'
    ], {
      typeSpeed: 80,
      deleteSpeed: 40,
      pauseTime: 2200
    });
  }
});

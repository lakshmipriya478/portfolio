document.addEventListener('DOMContentLoaded', function() {
  // Flip cards for all pages (certifications, education, contact, etc.)
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    // Only add flip handler if not the contact form card (let contact.html handle its own flip logic)
    if (!card.classList.contains('contact-form-card')) {
      card.addEventListener('click', function(event) {
        this.classList.toggle('flipped');
      });
      card.addEventListener('keypress', function(e) {
        if ((e.key === 'Enter' || e.key === ' ')) {
          this.classList.toggle('flipped');
        }
      });
    }
  });

  // Close flip on click outside
  document.addEventListener('click', function(event) {
    // Don't close flip if click is inside a form or on form elements
    if (event.target.closest('form') || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.tagName === 'BUTTON' || event.target.classList.contains('btn')) return;
    const isClickInside = event.target.closest('.flip-card');
    if (!isClickInside) {
      flipCards.forEach(card => {
        // Only close non-contact-form cards globally
        if (!card.classList.contains('contact-form-card')) {
          card.classList.remove('flipped');
        }
      });
    }
  });
  // Ensure contact form submit works on all pages
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // If there's a custom message handler (contact.html), let it handle it
      if (form.querySelector('#contact-success')) return;
      alert('Thank you for contacting!');
      this.reset();
    });
  });
});

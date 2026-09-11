/* ==========================================================================
   NATURA GLOW COSMÉTICA - MÉTODO CAPILAR SCENT™
   Interactive UI Script (Accordions, Sticky Mobile CTA, Smooth Scroll)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Module Accordion Logic
  const moduleHeaders = document.querySelectorAll('.module-header');

  moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const moduleItem = header.parentElement;
      const isActive = moduleItem.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        moduleItem.classList.add('active');
      }
    });
  });

  // Open first module by default
  const firstModule = document.querySelector('.module-item');
  if (firstModule) {
    firstModule.classList.add('active');
  }

  // 2. FAQ Accordion Logic
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Open first FAQ by default
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) {
    firstFaq.classList.add('active');
  }

  // 3. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 4. Sticky Mobile CTA visibility check
  const stickyCta = document.querySelector('.sticky-mobile-cta');
  const heroCta = document.querySelector('.hero .btn-primary');

  if (stickyCta && heroCta) {
    window.addEventListener('scroll', () => {
      const heroCtaPosition = heroCta.getBoundingClientRect().bottom;
      if (heroCtaPosition < 0) {
        stickyCta.style.display = 'block';
      } else {
        if (window.innerWidth <= 768) {
          stickyCta.style.display = 'none';
        }
      }
    });
  }
});

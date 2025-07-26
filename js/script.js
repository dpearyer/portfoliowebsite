document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const container = document.getElementById('main-container');

  // Load sections from external files
  sections.forEach(section => {
    const src = section.getAttribute('data-src');
    fetch(src)
      .then(res => res.text())
      .then(html => {
        section.innerHTML = html;

        // Animate fade-in elements after HTML is loaded
        const fadeIns = section.querySelectorAll('.fade-in');
        fadeIns.forEach(el => {
          el.classList.add('visible'); // Adds visible to trigger animation (handled by CSS)
        });
      });
  });
 

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggle.textContent = isDark ? '🌞' : '🌓';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth scroll if scrollToSection is used
  window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll listener on the scroll-container
  container.addEventListener('scroll', () => {
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - container.getBoundingClientRect().top);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    if (closestSection) {
      const id = closestSection.getAttribute('id');

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
});

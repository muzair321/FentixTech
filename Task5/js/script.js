// ===================== Mobile nav toggle =====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===================== Gallery filtering =====================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // update active tab
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // show/hide gallery items
    galleryItems.forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});

// ===================== Contact form (no backend — basic feedback) =====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.reset();
    alert('Thanks! Your message has been noted. (Hook this up to a real backend or form service before going live.)');
  });
}

// ===================== Scroll spy: highlight active nav link =====================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' }); // triggers when section crosses the middle of the viewport

sections.forEach(section => spyObserver.observe(section));


// ===================== Lightbox for gallery images =====================
const lightbox = document.getElementById('image-view');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close-btn');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'auto';
    setTimeout(() => {
      lightbox.style.opacity = 1;
    }, 10);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.opacity = 0;
  lightbox.style.pointerEvents = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.opacity = 0;
    lightbox.style.pointerEvents = 'none';
  }
});
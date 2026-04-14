// hamburger toggle
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

// add shadow on scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  }
});

// fade in cards when they come into view (Optimized)
function revealOnScroll() {
  var els = document.querySelectorAll('.product-card, .why-card, .value-item, .prod-card, .gallery-item');
  els.forEach(function(el) {
    var top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.product-card, .why-card, .value-item, .prod-card, .gallery-item');
  cards.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)'; /* Increased distance for a smoother float up effect */
    el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; /* Adjusted cubic bezier for smooth stopping */
  });
  setTimeout(revealOnScroll, 100);
});

window.addEventListener('scroll', revealOnScroll);

// product filter
var filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length > 0) {
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      var cards = document.querySelectorAll('.prod-card');

      cards.forEach(function(card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          // Ensure they reveal nicely when filtered
          setTimeout(function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
        }
      });
    });
  });
}

// gallery lightbox - for CSS background div items
function openLightbox(el) {
  var imgDiv = el.querySelector('.gal-img');
  var caption = el.querySelector('.gal-overlay span').textContent;
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  var lbImgTag = document.getElementById('lightboxImgTag');
  var lbCaption = document.getElementById('lightboxCaption');
  if (lbImgTag) lbImgTag.style.display = 'none';
  lbImg.style.display = 'block';
  lbImg.style.background = window.getComputedStyle(imgDiv).background;
  lbCaption.textContent = caption;
  lightbox.classList.add('open');
}

// for real photo items (Used in the new Gallery layout)
function openLightboxImg(src, caption) {
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightboxImg');
  var lbImgTag = document.getElementById('lightboxImgTag');
  var lbCaption = document.getElementById('lightboxCaption');
  lbImg.style.display = 'none';
  if (lbImgTag) {
    lbImgTag.src = src;
    lbImgTag.style.display = 'block';
  }
  lbCaption.textContent = caption;
  lightbox.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// contact form
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    var msg = document.getElementById('formSuccess');
    msg.style.display = 'block';
    contactForm.reset();
    setTimeout(function() { msg.style.display = 'none'; }, 4000);
  });
}

// get in touch form on homepage
var touchForm = document.getElementById('touchForm');
if (touchForm) {
  touchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('t-name').value.trim();
    var phone = document.getElementById('t-phone').value.trim();
    if (!name || !phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    var msg = document.getElementById('touchSuccess');
    msg.style.display = 'block';
    touchForm.reset();
    setTimeout(function() { msg.style.display = 'none'; }, 4000);
  });
}

// hover effect on stone blocks
var stoneBlocks = document.querySelectorAll('.stone-block');
stoneBlocks.forEach(function(block, i) {
  block.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
});

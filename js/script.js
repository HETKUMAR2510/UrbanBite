// HERO SLIDER
let slides = document.querySelectorAll('.slides');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// SCROLL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add('active');
    }
  });
});

// FORM
document.getElementById("bookingForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Booking Confirmed!");
  e.target.reset();
});

// Bootstrap form validation
(() => {
  'use strict';

  const form = document.getElementById('bookingForm');

  if (form) {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('✅ Your table has been successfully booked!');
        form.reset();
        form.classList.remove('was-validated');
        return;
      }
      form.classList.add('was-validated');
    });
  }
})();

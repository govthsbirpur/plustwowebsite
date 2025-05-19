

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds


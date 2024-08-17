const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Initial slide
showSlide(slideIndex);

// Automatic slide change (optional)
setInterval(() => {
  showSlide(slideIndex + 1);
}, 3000); // Change interval time as needed

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

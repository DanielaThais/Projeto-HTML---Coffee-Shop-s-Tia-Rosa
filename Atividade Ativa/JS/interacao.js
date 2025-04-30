let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Auto slide
setInterval(() => {
  plusSlides(1);
}, 3000);

// Mostra o primeiro slide ao carregar
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});
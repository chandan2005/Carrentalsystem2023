let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function showSlides(n) {
  let i;
  const slides = document
    .getElementsByClassName("slideshow-images")[0]
    .getElementsByTagName("img");
  const thumbnails = document
    .getElementsByClassName("thumbnails")[0]
    .getElementsByTagName("img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

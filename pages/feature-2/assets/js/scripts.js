let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Initialize the first slide
moveSlide(0);




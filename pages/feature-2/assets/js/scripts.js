let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Initialize the first slide
moveSlide(0);

function scrollToSection(event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the target ID
    const targetElement = document.getElementById(targetId); // Get the target element

    targetElement.scrollIntoView({
        behavior: "smooth"
    });
}

// Attach the smooth scrolling function to all relevant links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", scrollToSection);
});


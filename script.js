let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.display = "none";
    }


    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        slides[slideIndex - 1].style.opacity = "1";
    }, 100); // Add a delay for the fade-in effect
    dots[slideIndex - 1].className += " active";
}

/* =====================================================
   BMW SHOWROOM - CAR SLIDER
   ===================================================== */


/* Get all slides */

const slides = document.querySelectorAll(".car-slide");


/* Get navigation buttons */

const nextButton = document.getElementById("nextButton");

const previousButton = document.getElementById("previousButton");


/* Get all dots */

const dots = document.querySelectorAll(".dot");


/* Current slide */

let currentSlide = 0;


/* Automatic slider timer */

let sliderTimer;


/* =====================================================
   SHOW SLIDE
   ===================================================== */

function showSlide(index) {

    /* Remove active class from all slides */

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    /* Remove active class from all dots */

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    /* Add active class to selected slide */

    slides[index].classList.add("active");


    /* Add active class to selected dot */

    dots[index].classList.add("active");


    /* Update current slide */

    currentSlide = index;
}


/* =====================================================
   NEXT SLIDE
   ===================================================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);
}


/* =====================================================
   PREVIOUS SLIDE
   ===================================================== */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);
}


/* =====================================================
   START AUTOMATIC SLIDER
   ===================================================== */

function startSlider() {

    sliderTimer = setInterval(function () {

        nextSlide();

    }, 5000);

}


/* =====================================================
   RESTART AUTOMATIC SLIDER
   ===================================================== */

function restartSlider() {

    clearInterval(sliderTimer);

    startSlider();

}


/* =====================================================
   NEXT BUTTON
   ===================================================== */

nextButton.addEventListener("click", function () {

    nextSlide();

    restartSlider();

});


/* =====================================================
   PREVIOUS BUTTON
   ===================================================== */

previousButton.addEventListener("click", function () {

    previousSlide();

    restartSlider();

});


/* =====================================================
   DOT BUTTONS
   ===================================================== */

dots.forEach(function (dot) {

    dot.addEventListener("click", function () {

        const slideNumber =
            Number(dot.getAttribute("data-slide"));

        showSlide(slideNumber);

        restartSlider();

    });

});


/* =====================================================
   KEYBOARD CONTROL
   ===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {

        nextSlide();

        restartSlider();

    }


    if (event.key === "ArrowLeft") {

        previousSlide();

        restartSlider();

    }

});


/* =====================================================
   START
   ===================================================== */

showSlide(0);

startSlider();
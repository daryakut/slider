let random;
function randomNum() {
  random = Math.floor(Math.random() * 6);
  console.log(random);
}

function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide"); //array of slides

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

randomNum();
slidesPlugin(random);

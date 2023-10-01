let random;
randomNum();
function randomNum() {
  random = Math.floor(Math.random() * 6);
  console.log(random);
}

function slidesPlugin(random) {
  const slides = document.querySelectorAll(".slide"); //array of slides

  slides[random].classList.add("active");

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


slidesPlugin(random);

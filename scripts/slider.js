// Slider
const slider = document.querySelector('.slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;

function updateSliderPosition() {
    const slideWidth = slider.children[0].offsetWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slider.children.length - 2 : currentSlide - 1;
    updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slider.children.length - 2) ? 0 : currentSlide + 1;
    updateSliderPosition();
    });

    window.addEventListener('resize', updateSliderPosition);

    // login and signup
    let productsBtn = document.querySelectorAll(".album-item-btn");

    productsBtn.forEach((productBtn) => {
      window.addEventListener("load", () => {
        if (localStorage.getItem("hideElement") === "true") {
          productBtn.onclick = () => {
            window.location.href = "#";
          }
        }
      });
    });


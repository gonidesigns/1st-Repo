//Menu
function setUpEvents() {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle Nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      // burger Animation
      burger.classList.toggle("toggle");
    });
  };

  navSlide();

  //Sroll To Top Button
  const scrollTop = document.querySelector(".scroll-top");

}

window.onload = function () {
  setUpEvents();
};



// Carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button=>{
  button.addEventListener("click", () =>{
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel").querySelector('[data-slides]')

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// End Carousel

//  Header Show Scroll
let previousScrollPosition = 0;

window.addEventListener('scroll', function(){
  let currentScrollPosition = this.window.scrollY;

  if(currentScrollPosition > previousScrollPosition){
    document.querySelector('.navbar').style.top = '-70px';
    previousScrollPosition = currentScrollPosition;
  }else {
      document.querySelector('.navbar').style.top = '0';
      previousScrollPosition = currentScrollPosition;
  }
});

// End Header Show Scroll
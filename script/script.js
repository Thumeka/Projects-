document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader-container");
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 2000);
  });
  
  document.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("navbar-scrolled", window.scrollY > 50);
  });
  
  const landingBackground = document.querySelector("#landing-background");
  const images = ["Ocean.jpg", "ME.jpg", "Mont.jpg", "sun.jpg", "Motiv-6.jpg"];
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = `assets/backgrounds/${image}`;
    img.classList.add("landing-background-image");
    landingBackground.appendChild(img);
  });
  
  const backgroundIndicators = document.querySelector("#background-indicators");
  images.forEach((image, index) => {
    const indicator = document.createElement("div");
    if (index === 0) {
      indicator.classList.add("active");
    }
    indicator.classList.add("background-indicator");
    indicator.addEventListener("click", () => {
      index = images.indexOf(image);
      slideImages();
    });
    backgroundIndicators.appendChild(indicator);
  });
  
  const landingBackgroundImages = document.querySelectorAll(
    "#landing-background img"
  );
  
  let index = 0;
  const nextSlide = () => {
    index++;
    if (index > landingBackgroundImages.length - 1) {
      index = 0;
    }
    slideImages();
  };
  
  landingBackgroundImages.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
  });
  
  let autoSlide = setInterval(nextSlide, 7000);
  
  const slideImages = () => {
    landingBackgroundImages.forEach((image) => {
      image.style.transform = `translateX(-${index * 100}%)`;
    });
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 7000);
    backgroundIndicators.querySelectorAll("div").forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  };
  
  const prevSlide = () => {
    index--;
    if (index < 0) {
      index = landingBackgroundImages.length - 1;
    }
    slideImages();
  };
  
  backgroundIndicators.querySelectorAll("div").forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      index = i;
      slideImages();
    });
  });

// scrollbar
const scroll = document.querySelector(".scrollbar");
document.addEventListener("scroll", () => {
  scroll.style.height = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }vh`;
});
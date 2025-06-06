let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("carouselDots");

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial load
showSlide(0);
setInterval(nextSlide, 5000);

// Navbar scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Sidebar toggle
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}


function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }


// sidebar
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}


// caruselarrowe
  function scrollToContent() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }


  // navbar sticky

    const navbar = document.getElementById("navbar");
  const announcement = document.querySelector(".announcement-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("sticky");
      announcement.classList.add("hide");
    } else {
      navbar.classList.remove("sticky");
      announcement.classList.remove("hide");
    }
  });




  // animation on section  five
    const swiper = new Swiper(".heroSwiper", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // video animation

function playPromoVideo() {
  alert("You clicked play!");
}


// looks
// videos url
function openVideo(url) {
  const isYouTube = url.includes("youtube.com");
  document.getElementById("videoPopup").style.display = "flex";

  if (isYouTube) {
    document.getElementById("popupVideo").style.display = "none";
    document.getElementById("popupIframe").style.display = "block";
    document.getElementById("popupIframe").src = url + "?autoplay=1";
  } else {
    document.getElementById("popupIframe").style.display = "none";
    document.getElementById("popupVideo").style.display = "block";
    document.getElementById("popupSource").src = url;
    document.getElementById("popupVideo").load();
    document.getElementById("popupVideo").play();
  }
}

function closeVideo() {
  document.getElementById("popupIframe").src = "";
  document.getElementById("popupVideo").pause();
  document.getElementById("popupVideo").currentTime = 0;
  document.getElementById("videoPopup").style.display = "none";
}
// scroller video

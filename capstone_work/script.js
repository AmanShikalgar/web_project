let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

console.log(menu, navbar);
menu.onclick = () => {
   menu.classList.toggle('fa-times');
   menu.classList.toggle('active');

}
window.onscroll = () => {
   menu.classList.remove('fa-times');
   menu.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
   document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
   document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 7500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   loop: true
});

var swiper2 = new Swiper(".review-slider", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
   },
   loop: true,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      640: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});

function loader() {
   document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
   setInterval(loader, 2500);
}

window.onload = fadeOut;

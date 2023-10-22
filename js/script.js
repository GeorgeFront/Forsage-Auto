// BURGER
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

headerBurger.addEventListener("click", function (event) {
   headerBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   document.querySelector("body").classList.toggle("lock");
});


const phoneInfo = document.querySelector(".header__info");
const menu = document.querySelector(".header__menu");
function checkDisplayStyle() {
   const mobileScreen = window.matchMedia("(max-width: 767.98px)").matches;
   if (mobileScreen) {
      menu.append(phoneInfo);
   } else {
      menu.after(phoneInfo);
   }
}
// Вызываем функцию при загрузке страницы
checkDisplayStyle();

// Обработчик события resize с использованием debounce
let resizeTimer;
window.addEventListener("resize", function () {
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(checkDisplayStyle, 250);
});



// Phone number copying
const phoneNumber = document.querySelector(".info-header__phone");
const copyButton = document.querySelector(".info-header__copy-button");
copyButton.addEventListener("click", function (event) {
   navigator.clipboard.writeText(phoneNumber.innerHTML).then(function () {
      // Номер телефона скопійовано
   }).catch(function (err) {
      // Не вдалося скопіювати номер телефона
   });
});

// Phone number transfering
// const phoneInfo = document.querySelector(".header__info");
// const menu = document.querySelector(".header__menu");

// window.addEventListener("resize", function () {
//    if (window.matchMedia("(max-width: 767.98px)").matches) {
//       menu.append(phoneInfo);
//    } else {
//       menu.after(phoneInfo);
//    }
// });



const swiper = new Swiper('.swiper', {
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const spoilerHeaders = document.querySelectorAll(".item-spoilers__header");
spoilerHeaders.forEach((spoilerHeader) => {
   spoilerHeader.addEventListener("click", function (event) {
      event.preventDefault;
      spoilerHeader.classList.toggle("active");
      spoilerHeader.nextElementSibling.classList.toggle("active");
      spoilerHeader.parentElement.classList.toggle("active");
   });
});

// Header background after scroll
window.addEventListener("scroll", function (event) {
   if (scrollY > 0) {
      document.querySelector(".header").classList.add("scroll");
   } else {
      document.querySelector(".header").classList.remove("scroll");
   }
});

const advantagesLinks = document.querySelectorAll('a[href="#advantages"]');
const advantagesTitle = document.getElementById("advantages");
advantagesLinks.forEach((advantagesLink) => {
   advantagesLink.addEventListener("click", function (event) {
      event.preventDefault();
      advantagesTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

const servicesLinks = document.querySelectorAll('a[href="#services"]');
const servicesTitle = document.getElementById("services");
servicesLinks.forEach((servicesLink) => {
   servicesLink.addEventListener("click", function (event) {
      event.preventDefault();
      servicesTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

const carsLinks = document.querySelectorAll('a[href="#cars"]');
const carsTitle = document.getElementById("cars");
carsLinks.forEach((carsLink) => {
   carsLink.addEventListener("click", function (event) {
      event.preventDefault();
      carsTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

const reviewsLinks = document.querySelectorAll('a[href="#reviews"]');
const reviewsTitle = document.getElementById("reviews");
reviewsLinks.forEach((reviewsLink) => {
   reviewsLink.addEventListener("click", function (event) {
      event.preventDefault();
      reviewsTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});


const questionsLinks = document.querySelectorAll('a[href="#questions"]');
const questionsTitle = document.getElementById("questions");
questionsLinks.forEach((questionsLink) => {
   questionsLink.addEventListener("click", function (event) {
      event.preventDefault();
      questionsTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

const workLinks = document.querySelectorAll('a[href="#work"]');
const workTitle = document.getElementById("work");
workLinks.forEach((workLink) => {
   workLink.addEventListener("click", function (event) {
      event.preventDefault();
      workTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

const registrationLinks = document.querySelectorAll('a[href="#registration"]');
const registrationTitle = document.getElementById("registration");
registrationLinks.forEach((registrationLink) => {
   registrationLink.addEventListener("click", function (event) {
      event.preventDefault();
      registrationTitle.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   });
});

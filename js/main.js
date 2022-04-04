$(".qa-list dd").hide();
$(".qa-list dl").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl").toggleClass("active");
});

// // hamburger menu animation
const hamburger = document.getElementById("hamburger");
const hamburgerBorder = document.querySelector(".header_box_right");
// const hamburgerBorderText = document.querySelector(".header_box_right_text");
const sm = document.querySelector(".sm");
// const MessageNav = document.getElementById("message-nav");
// const MoviesNav = document.getElementById("movies-nav");
// const NewsNav = document.getElementById("news-nav");
// const HistoryNav = document.getElementById("history-nav");
// const FaqNav = document.getElementById("faq-nav");
// const ContactNav = document.getElementById("contact-nav");

// slideUp
const slideUp = (el, duration = 700) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideDown
const slideDown = (el, duration = 700) => {
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};
// slideToggle
const slideToggle = (el, duration = 700) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};
// 連続クリック防止フラグ
let clickFlg = false;
const navigation = function () {
  slideToggle(sm, 500);
  hamburgerBorder.classList.toggle("close");
};

function check_renda() {
  if (clickFlg) {
    return;
  } else {
    clickFlg = true;
    navigation();
    setTimeout(() => {
      clickFlg = false;
    }, 650);
  }
}
hamburger.onclick = function () {
  check_renda();
};

// MessageNav.onclick = function () {
//   check_renda();
// };
// MoviesNav.onclick = function () {
//   check_renda();
// };
// NewsNav.onclick = function () {
//   check_renda();
// };
// HistoryNav.onclick = function () {
//   check_renda();
// };
// FaqNav.onclick = function () {
//   check_renda();
// };
// ContactNav.onclick = function () {
//   check_renda();
// };

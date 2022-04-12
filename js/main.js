// get Element
const hamburger = document.getElementById("hamburger");
const hamburgerBorder = document.querySelector(".header_box_right");
// const hamburgerBorderText = document.querySelector(".header_box_right_text");
const sm = document.querySelector(".sm");
// PCメニュー
const Introduce = document.getElementById("Introduce");
const Function = document.getElementById("Function");
const Plan = document.getElementById("Plan");
const Result = document.getElementById("Result");
// スマホメニュー
const IntroduceSp = document.getElementById("Introduce_sp");
const FunctionSp = document.getElementById("Function_sp");
const PlanSp = document.getElementById("Plan_sp");
const ResultSp = document.getElementById("Result_sp");
const IntroduceContent = document.getElementById("Problem");
const FunctionContent = document.getElementById("function");
const PlanContent = document.getElementById("plan");
const ResultContent = document.getElementById("result");

// ハンバーガーメニュー
$(".dd1").hide();
$(".dl1").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl1").toggleClass("active");
});
$(".dd2").hide();
$(".dl2").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl2").toggleClass("active");
});
$(".dd3").hide();
$(".dl3").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl3").toggleClass("active");
});
$(".dd4").hide();
$(".dl4").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl4").toggleClass("active");
});
$(".dd5").hide();
$(".dl5").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
  $("dl5").toggleClass("active");
});

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

//navigatino auto scroll
Introduce.onclick = function () {
  if (!Introduce.classList.contains("active")) {
    // 押したやつ
    Introduce.classList.add("active");
    Introduce.classList.remove("a__border");
    // その他
    if (Function.classList.contains("active")) {
      Function.classList.remove("active");
      Introduce.classList.add("a__border");
    }
    if (Plan.classList.contains("active")) {
      Plan.classList.remove("active");
      Introduce.classList.add("a__border");
    }
    if (Result.classList.contains("active")) {
      Result.classList.remove("active");
      Introduce.classList.add("a__border");
    }
  }
  const IntroduceContentPosition =
    window.pageYOffset + IntroduceContent.getBoundingClientRect().top;
  window.scrollTo({
    top: IntroduceContentPosition,
    behavior: "smooth",
  });
};
IntroduceSp.onclick = function () {
  const IntroduceContentPosition =
    window.pageYOffset + IntroduceContent.getBoundingClientRect().top;
  window.scrollTo({
    top: IntroduceContentPosition,
    behavior: "smooth",
  });

  slideToggle(sm, 500);
  hamburgerBorder.classList.toggle("close");
};
Function.onclick = function () {
  if (!Function.classList.contains("active")) {
    // 押したやつ
    Function.classList.add("active");
    Function.classList.remove("a__border");
    // その他
    if (Introduce.classList.contains("active")) {
      Introduce.classList.remove("active");
      Introduce.classList.add("a__border");
    }
    if (Plan.classList.contains("active")) {
      Plan.classList.remove("active");
      Plan.classList.add("a__border");
    }
    if (Result.classList.contains("active")) {
      Result.classList.remove("active");
      Result.classList.add("a__border");
    }
  }
  const FunctionContentPosition =
    window.pageYOffset + FunctionContent.getBoundingClientRect().top;
  window.scrollTo({
    top: FunctionContentPosition,
    behavior: "smooth",
  });
};
FunctionSp.onclick = function () {
  const FunctionContentPosition =
    window.pageYOffset + FunctionContent.getBoundingClientRect().top;
  window.scrollTo({
    top: FunctionContentPosition,
    behavior: "smooth",
  });

  slideToggle(sm, 500);
  hamburgerBorder.classList.toggle("close");
};

Plan.onclick = function () {
  if (!Plan.classList.contains("active")) {
    // 押したやつ
    Plan.classList.add("active");
    Plan.classList.remove("a__border");
    // その他
    if (Function.classList.contains("active")) {
      Function.classList.remove("active");
      Function.classList.add("a__border");
    }
    if (Introduce.classList.contains("active")) {
      Introduce.classList.remove("active");
      Introduce.classList.add("a__border");
    }
    if (Result.classList.contains("active")) {
      Result.classList.remove("active");
      Result.classList.add("a__border");
    }
  }
  const PlanContentPosition =
    window.pageYOffset + PlanContent.getBoundingClientRect().top;
  window.scrollTo({
    top: PlanContentPosition,
    behavior: "smooth",
  });
};

PlanSp.onclick = function () {
  const PlanContentPosition =
    window.pageYOffset + PlanContent.getBoundingClientRect().top;
  window.scrollTo({
    top: PlanContentPosition,
    behavior: "smooth",
  });
  slideToggle(sm, 500);
  hamburgerBorder.classList.toggle("close");
};
Result.onclick = function () {
  if (!Result.classList.contains("active")) {
    // 押したやつ
    Result.classList.add("active");
    Result.classList.remove("a__border");
    // その他
    if (Function.classList.contains("active")) {
      Function.classList.remove("active");
      Function.classList.add("a__border");
    }
    if (Plan.classList.contains("active")) {
      Plan.classList.remove("active");
      Plan.classList.add("a__border");
    }
    if (Introduce.classList.contains("active")) {
      Introduce.classList.remove("active");
      Introduce.classList.add("a__border");
    }
  }
  const ResultontentPosition =
    window.pageYOffset + ResultContent.getBoundingClientRect().top;
  window.scrollTo({
    top: ResultontentPosition,
    behavior: "smooth",
  });
};
ResultSp.onclick = function () {
  const ResultontentPosition =
    window.pageYOffset + ResultContent.getBoundingClientRect().top;
  window.scrollTo({
    top: ResultontentPosition,
    behavior: "smooth",
  });

  slideToggle(sm, 500);
  hamburgerBorder.classList.toggle("close");
};

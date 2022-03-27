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

// HTML CSS JSResult Skip Results Iframe
// EDIT ON
// $(function () {
//   $(".box__text__q").click(function () {});
// });

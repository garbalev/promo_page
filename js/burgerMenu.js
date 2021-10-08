$(".humburger-menu").click(function () {
    $(".menu").toggleClass("menu-active");
    $(".humburger-menu").toggleClass("humburger-menu-active")
});


$(document).click(function (e) {
    if (
      !$(".menu").is(e.target) &&
      !$(".humburger-menu").is(e.target) &&
      !$(".menu").children().is(e.target)
    ) {
        $(".menu").removeClass("menu-active");
        $(".humburger-menu").removeClass("humburger-menu-active")
    }
  });
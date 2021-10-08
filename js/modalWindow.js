$(".more").click(function () {
    $(".modal").removeClass("hidden");
});

$(".modal__close, .overlay").click(function () {
    $(".modal").addClass("hidden");
});


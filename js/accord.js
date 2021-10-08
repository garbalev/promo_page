$(".feature__link").click( function () {
    const subMenu = $(this).siblings();
    $(".feature__link").not(this).removeClass("feature__link_active");
    $(this).toggleClass("feature__link_active", 1000);
    $(".feature-sub").not(subMenu).addClass('hidden');
    subMenu.toggleClass("hidden", 1000);

});
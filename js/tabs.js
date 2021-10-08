
$(".design-list__item").click(function () {
    $(".design-list__item").removeClass("design-list__item_active");
    $(this).addClass("design-list__item_active");
    const currentData = $(this).data("tabs-handler");
    $('[data-tabs-field]').addClass("hidden");
    $(`[data-tabs-field=${currentData}]`).removeClass("hidden");
    
})
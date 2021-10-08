$(".menu-list__link, .main__scroll, .main__button").click( function (e) {
    e.preventDefault();
    const position =  $(this).attr("href");
    $('html, body').animate({scrollTop: $(position).offset().top}, 1500);
    
});
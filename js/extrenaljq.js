//Will add class on nav if window scroll down to 100%
$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});



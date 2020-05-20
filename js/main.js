// Плавная прокрутка к якорю
$("body").on('click', '[href*="#"]', function (e) {
    if (document.documentElement.clientWidth > 767) {
        var fixed_offset = 88;
    } else {
        var fixed_offset = 58;
    }
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

// Меню и бургер для телефонов
$(document).ready(function () {
    $(".header__burger").click(function (e) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass('lock');
    });
    $(".header__link").click(function (e) { 
        $(".header__burger").removeClass("active");
        $(".header__menu").removeClass("active");
        $("body").removeClass("lock");
    });
});
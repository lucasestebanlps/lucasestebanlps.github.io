$(document).ready(function () {
    //effect menu
    $('.menu a').each(function (index) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 800 + (index * 200));
    });

    //effect header

    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1000);
    }

    //scroll elements menu
        projects = $('#sectionCarousel').offset().top,
        videos = $('#videos').offset().top,
        contact = $('#social-media').offset().top,

    $('#btn-projets').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: projects
        }, 100);
    });

    $('#btn-videos').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: videos
        }, 100);
    });

    $('#btn-contact').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact
        }, 100);
    });
});

    // Btn go Up
    goUp = $('#menu').offset().top;

    $('#btn-goUp').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: goUp
        }, 100);
    });


$(document).ready(function () {
    let $topsectionMarginTop = $('.topsection').css('margin-top');
    let $headerHeight = $('.header').css('height');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 10) {
            $('.header').css({
                'backgroundColor': '#c9a78c',
                'height': '4rem',
                // 'margin-top': '.5rem',
            });
            $('.topsection').css({
                'margin-top': '.5rem',
            });
            $('.header-section.one .header-content').css({
                padding: '.2rem 0',
            });
        } else {
           $('.header').css({
                'backgroundColor': '',
                'height': $headerHeight,
            });
           $('.topsection').css({
                'margin-top': $topsectionMarginTop,
            });
            $('.header-section.one .header-content').css({
                padding: '1rem 0',
            });
        }

        if ($(window).scrollTop() >= 100) {
            $('.header-section.two').css({top: '-100%', duration: 300});
        } else if ($(window).scrollTop() < 100) {
            $('.header-section.two').css({top: '100%', duration: 300});
        }

    });
});
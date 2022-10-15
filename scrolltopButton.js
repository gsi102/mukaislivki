$(document).ready(function() {
    let $scrolltopButton = $('.scrolltop-button');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
            $scrolltopButton.show(200);
        } else {
            $scrolltopButton.hide(200);
        }
    });
    $scrolltopButton.on('click', function() {
        $(window).scrollTop({top: 0, behavior: 'smooth'});
    });
});
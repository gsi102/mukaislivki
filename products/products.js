$(document).ready(function() {
    let $bottomSpan = $('.gradient').find('span:first-child').css('bottom');
    let $slideDuration = 300;

    $('.decoration-item').on({
        mouseenter: function() {
            $(this).find($('.gradient')).fadeIn($slideDuration / 2);
            $(this).find($('span:first-child')).animate({bottom: '24%'}, $slideDuration);
            $(this).find($('.learn-more')).css('display', 'none').fadeIn($slideDuration).toggleClass('active');
            },
        mouseleave: function () {
            $('.learn-more').removeClass('active');
            $('span:first-child').css({bottom: $bottomSpan});
            $('.gradient').stop(true, true).hide();
            },
    });
});
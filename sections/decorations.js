$(document).ready(function() {
    let $bottomSpan = $('.gradient').find('span:first-child').css('bottom');
    let $bottomPrice = $('.price').css('bottom');
    let $slideDuration = 300;
    if ($(window).width() > 768) {
        $('.decoration-item').on({
            mouseenter: function() {
                $(this).find($('.gradient')).fadeIn($slideDuration / 2);
                $(this).find($('span:first-child')).animate({bottom: '34%'}, $slideDuration);
                $(this).find($('.price')).animate({bottom: '24%'}, $slideDuration);
                $(this).find($('.learn-more')).css('display', 'none').fadeIn($slideDuration).toggleClass('active');
                },
            mouseleave: function () {
                $('.learn-more').removeClass('active');
                $('span:first-child').css({bottom: $bottomSpan});
                $('.price').css({bottom: $bottomPrice});
                $('.gradient').stop(true, true).hide();
                },
        });
    }
});
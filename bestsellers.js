$(document).ready(function() {

    let $spanBottom = parseInt($('.bestsellers-item').find('span:first').css('bottom'), 10);
    let $spanPaddingsBottom = parseInt($('.bestsellers-item').find('span:first').css('padding-top'), 10) * 0;
    let $orderFontSize = parseInt($('.bestsellers-order').css('font-size'), 10);
    let $orderPaddings = parseInt($('.bestsellers-order').css('padding-top'), 10) * 2;

    let $orderHeight = $orderFontSize + $orderPaddings + $spanPaddingsBottom;

    $('.bestsellers-item').on({
        mouseenter: function() {
            $(this).find('span:first').animate({
                bottom: $orderHeight,
            }, 100, 'linear');
        },

        mouseleave: function() {
            $(this).find('span:first').stop(true, true).animate({
                bottom: $spanBottom,
            }, 100, 'linear');
        },
    });
});
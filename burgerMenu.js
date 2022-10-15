$(document).ready( function() {
    let $clickContainer = $('.header-burger-container-for-click');
    let $burgerMenuContainer = $('.burger-menu-container');
    let $headerBurger = $('.header-burger');
    let $spoilerMobItem = $('.spoiler-mob-item');
    let $spoilerMobData = $('.spoiler-mob-data');
    let $wrapper = $('.wrapper');
    let $delaySlide = 400;

    let closeBurger = function (that) {
        // checking for open options before close burger menu
        if ($spoilerMobItem.hasClass('active')) {
            $spoilerMobData.slideUp($delaySlide);
            $spoilerMobItem.not(that).removeClass('active');
        }
        $wrapper.animate({opacity: 0}, $delaySlide, 'linear');
        setTimeout(function () {
            $burgerMenuContainer.toggle();
            $wrapper.css({top: '-88vh'});
        }, $delaySlide);
    }

    $(window).on('scroll', function () {
        if ($headerBurger.hasClass('active')) {
           closeBurger();
           $headerBurger.removeClass('active');
        }
    });

     // Open burger

    $clickContainer.on('click', function() {

        // Smooth open burger

        if ($headerBurger.hasClass('active')) {
            closeBurger($(this));
        } else {
            $burgerMenuContainer.toggle();
            $wrapper.animate({top: '0', opacity: 1}, 300, 'linear');

        }

        $headerBurger.toggleClass('active');
        // $('html').toggleClass('locked');
        // $('body').toggleClass('locked');
        // $('.mycontent').toggleClass('locked');
    });
    
    // Spoilers inside opened burger

    $('.spoiler-mob-item').on('click', function () {
        let $wrapperHeight = $wrapper.height();

        let $isAlreadyOpen = $spoilerMobItem.not($(this)).hasClass('active');
        if ($isAlreadyOpen) {
            $spoilerMobData.not($(this)).slideUp($delaySlide);
            $spoilerMobItem.not($(this)).removeClass('active');
        }

        $(this).toggleClass('active').next().slideToggle($delaySlide);

        if ($(window).height() < 429) {
            $wrapper.css({height: $wrapperHeight});
        }  
    });
});
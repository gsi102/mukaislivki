$(document).ready(function(){
    let $spoilerData = $('.spoiler-data');
    // let $spoiler = $('.spoiler');
    let $spoilerDataContainer = $('.spoiler-data-container');
    // let $counter = 0;

    $('.spoiler').on({
        mouseenter: function() {
            if ($spoilerDataContainer.length > 0) {
                $(this).find($spoilerDataContainer)
                .fadeIn({duration: 300, queue: false })
                .css('display', 'none')
                .slideDown(300);
            } else {
                $(this).find($spoilerData)
                .fadeIn({duration: 300, queue: false })
                .css('display', 'none')
                .slideDown(300);
            }
        },

        mouseleave: function() {
            if ($spoilerDataContainer.length > 0) {
                $spoilerDataContainer.stop(true, true).hide();
            } else {
                $spoilerData.stop(true, true).hide();
            }
        },
    });

    $spoilerData.find('div').on({
        mouseenter: function() {
            $(this).css({
                cursor: 'pointer',
            });
            $(this).find('a').css({
                fontWeight: 'bold',
                color: 'rgba(104, 57, 26, 1)',
            });
        },

        mouseleave: function() {
            $(this).css({
                cursor: 'auto',
            });
            $(this).find('a').css({
                fontWeight: 'normal',
                color: 'rgba(255, 255, 255, 1)',
            });
        },
    });
});
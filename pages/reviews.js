$(document).ready(function() {
    const $reviewsItem = $('.reviews-item');
    $reviewsItem.css({width: $reviewsItem.width(),});
    const $reviewsScreenshot = $('.reviews-screenshot');
    
    for (let i = 0; i <= $reviewsScreenshot.length; i++) {
        if (i >= 9) {
            $($reviewsScreenshot[i]).find('span').text(i + 1); 
        } else {
            $($reviewsScreenshot[i]).find('span').text('0' + (i + 1)); 
        }
    }
});
$(document).ready(function() {
    const $spoilerItems = [
        '.catalog-link',
        '.cakes-link',
        '.cupcakes-link',
        '.trifles-link',
        '.others-link',
        '.decoration-link',
        '.delivery-link',
        '.reviews-link',
        '.aboutus-link',
        '.contactus-link',
    ];

    const $spoilerItemsLinks = [
        '/sections/catalog.html',
        '/products/cakes.html',
        '/products/cupcakes.html',
        '/products/trifles.html',
        '/products/others.html',
        '/sections/decoration.html',
        '/pages/delivery.html',
        '/pages/reviews.html',
        '/pages/aboutus.html',
        '/sections/contactus.html',
    ];

    for (let $i = 0; $i <= $spoilerItems.length-1; $i++) {
        $($spoilerItems[$i]).on('click', function() {
            location.href = $spoilerItemsLinks[$i];
        });
    };

    $('.contacts').append(`
            <p>Мы всегда готовы обсудить и реализовать ваши идеи по оформлению тортов.</p>
            <p>Свяжитесь с нами в соцсетях и мессенджерах или напишите через форму обратной связи!</p>
            <div class="socials">
                <div><span>Тел. +7 961 187-50-02</span></div>
                <div><a href="https://www.instagram.com/mukaislivki/"><img src="/img/IG.webp"><span>Instagram</span></a></div>
                <div><a href="https://vk.com/icookyoueat"><img src="/img/VK.webp"><span>ВКонтакте</span></a></div>
                <div><a href="tg://resolve?domain=icookyoueat"><img src="/img/TG.webp"><span>Telegram</span></a></div>
                <div><a href="https://wa.me/79611875002"><img src="/img/WA.webp"><span>WhatsApp</span></a></div>
                <div><a href="viber://add?number=79611875002"><img src="/img/VI.webp"><span>Viber</span></a></div>
            </div>
        `);
});
$(document).ready( function() {
    $('footer').append(`
        <div class="footer-wrapper">
            <div class="footer-contacts">
                <div>
                    <span>Контакты</span>
                </div>
                <div>
                    <i class="fas fa-phone"></i>
                    <span>+7 961 187-50-02</span>
                </div>
                
                <div>
                    <i class="fas fa-envelope"></i>
                    <span>info@mukaislivki.ru</span>
                </div>
                <div>
                    ООО "Торты Воронеж"
                </div>
                <div>
                    ОГРН 1155524329610
                </div>
                <div>
                    Воронеж, ул. Кулибина, д. 17, кв. 34
                </div>
            </div>
            <div class="footer-categories">
                <div><span>Категории десертов</span></div>
                <div><span><a href="/products/cakes.html">Торты</a></span></div>
                <div><span><a href="/products/cupcakes.html">Капкейки</a></span></div>
                <div><span><a href="/products/trifles.html">Трайфлы</a></span></div>
                <div><span><a href="/products/others.html">Дополнительно</a></span></div>
            </div>
            <div class="footer-menu">
                <div><span>Навигация по сайту</span></div>
                <div><span><a href="/sections/catalog.html">Каталог десертов</a></span></div>
                <div><span><a href="/sections/decoration.html">Оформление тортов</a></span></div>
                <div><span><a href="/pages/delivery.html">Доставка и самовывоз</a></span></div>
                <div><span><a href="/pages/aboutus.html">О нас</a></span></div>
                <div><span><a href="/pages/reviews.html">Отзывы</a></span></div>
            </div>
            <div class="footer-social">
                <div><span>Мы в соцсетях</span></div>
                <div id="socials-row">
                    <div><span><a href="https://www.instagram.com/mukaislivki/"><img src="/img/IG.webp"></a></span></div>
                    <div><span><a href="https://vk.com/icookyoueat"><img src="/img/VK.webp"></a></span></div>
                    <div><span><a href="tg://resolve?domain=icookyoueat"><img src="/img/TG.webp"></a></span></div>
                    <div><span><a href="https://wa.me/79611875002"><img src="/img/WA.webp"></a></span></div>
                    <div><span><a href="viber://add?number=79611875002"><img src="/img/VI.webp"></a></span></div>
                </div>
                <div class="footer-rules">
                    <div><span class="footer-caption">Правила</span></div>
                    <div><span><a href="/pages/user-agreement.html">Пользовательское соглашение</a></span></div>
                    <div><span><a href="/pages/confidentiality-policy.html">Политика конфиденциальности</a></span></div>
                    <div><span><a href="/pages/personal-data.html">Согласие на обработку персональных данных</a></span></div>
                </div>
            </div>
        </div>`);
});
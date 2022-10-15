$(document).ready(function() {
    const $leftside = $('.leftside');
    const $bigpic = $('.leftside').find('.bigpic');
    let $smallpicsLastBlock;
    // creating the new row('.smallpics.block') of smallpics
    const $createNewBlock = function () {
        $leftside.append($('<div></div>').addClass('smallpics block'));
        $smallpicsLastBlock = $('.smallpics').last();   
    };
    $createNewBlock();

    const $appendLeftside = function ($picsArr, $smallPicsArr) {
        // DESKTOP
        if ($(window).width() > 768) {
            // adding the first pic to bigpic section
            $bigpic.append($('<img>').attr('src', $picsArr[0]));


            
            // counter for quantity of pics in a row
            let $counter = 0;
            // adding rows to the DOM
            for (let $pic of $smallPicsArr) {
                if ($counter >= 4) {
                    $createNewBlock();
                    $counter = 0;
                }
                let $smallpicsItem = $('<div></div>').addClass('smallpics-item');
                let $gradient = $('<div></div>').addClass('gradient');
                let $image = $('<img>').attr('src', $pic);
                $smallpicsItem.append($gradient, $image);
                $smallpicsLastBlock.append($smallpicsItem);
                $leftside.append($smallpicsLastBlock);
                $counter++;
            }

            // small pics alignment
            const $marginsSmallpicsItem = parseFloat($('.smallpics-item').first().css('margin-right')) * 6;
            const $maxWidthSmallPics = (parseFloat($('.smallpics').first().width()) - $marginsSmallpicsItem) / 4;
            $('.smallpics-item').find('img').css('max-width', $maxWidthSmallPics);
            $('.smallpics-item').first().addClass('active');
        } else {
            // MOBILE 
            
            // Adding clones at the end and at the begin for the slider
            for (let i = 0; i < 2; i++) {
                $smallPicsArr.push($smallPicsArr[i]);
                $picsArr.push($picsArr[i]);
            }
            for (let j = $smallPicsArr.length - 3; j > $smallPicsArr.length - 5; j - 2) {
                $smallPicsArr.unshift($smallPicsArr[j]);
                $picsArr.unshift($picsArr[j]);
            }

            // adding first pic to bigpic section
            $bigpic.append($('<img>').attr('src', $picsArr[2]));
            // wrappers for slider 
            let $smallpicsSliderWrapper = $('<div></div>').addClass('smallpics-slider-wrapper');
            let $smallpicsSlider = $('<div></div>').addClass('smallpics-slider');
             // adding rows to the DOM
            for (let $pic of $smallPicsArr) {
                let $smallpicsItem = $('<div></div>').addClass('smallpics-item');
                let $gradient = $('<div></div>').addClass('gradient');
                let $image = $('<img>').attr('src', $pic);
                $smallpicsItem.append($gradient, $image);
                $smallpicsSlider.append($smallpicsItem);
            }
            let $controls = $(`
                <div id="leftProductSlider"><i class="fas fa-chevron-left"></i></div>
                <div id="rightProductSlider"><i class="fas fa-chevron-right"></i></div>
            `);
            $smallpicsSliderWrapper.append($smallpicsSlider);
            $smallpicsLastBlock.append($smallpicsSliderWrapper, $controls);
            $leftside.append($smallpicsLastBlock);

            // slider
            const $leftBtn = $('#leftProductSlider');
            const $rightBtn = $('#rightProductSlider');
            const $smallpicsWidth = $('.smallpics-item').width() + 2 * parseFloat($('.smallpics-item').css('margin-right'));
            const $smallpicsAll = $('.smallpics-item');
            $smallpicsAll.first().attr('id', 'lastClone');
            $smallpicsAll.eq($smallpicsAll.length - 3).attr('id', 'firstClone');

            let $counter = 2;
            let $shift = $smallpicsWidth * $counter;

            $smallpicsSlider.css({
                transform: `translateX(-${$shift}px)`,
            });

            const $shiftFunc = transitionVal => {
                $shift = $smallpicsWidth * $counter;
                $smallpicsSlider.css({
                    transition: transitionVal,
                    transform: `translateX(-${$shift}px)`,
                });
            }

            // to the left
            $leftBtn.on('click', function() {
                if ($counter <= 0) return;
                $counter--;
                $shiftFunc('all .5s ease');
            });
            // to the right
            $rightBtn.on('click', function() {
                if ($counter >= $smallPicsArr.length - 3) return;
                $counter++;
                $shiftFunc('all .5s ease');
            });

            // infinite slider
            $smallpicsSlider.on('transitionend', function() {
                if ($smallpicsAll.eq($counter).attr('id') === 'lastClone') {
                    $counter = $smallPicsArr.length - 4;
                    $shiftFunc('none');
                } else if ($smallpicsAll.eq($counter).attr('id') === 'firstClone') {
                    $counter = 1;
                    $shiftFunc('none');
                }
            });
            $('.smallpics-item').eq(2).addClass('active');
        }
    }

    // different photos for different product pages
    const $whichProductPage = $bigpic.parent().attr('class');
    // Pushing array with smallpics. Required to name all smallpics files with '-small.webp' at the end 
    const $smallPicsCreate = picsArr => 
        picsArr.map(item => 
           item.slice(0, -5) + '-small.webp');

    switch($whichProductPage){
        case 'leftside cakes':
            const $picsArrCake = [
                '../img/img-products/cakes/cake1.webp', 
                '../img/img-products/cakes/cake2.webp', 
                '../img/img-products/cakes/cake3.webp', 
                '../img/img-products/cakes/cake4.webp', 
                '../img/img-products/cakes/cake5.webp', 
                '../img/img-products/cakes/cake6.webp',
                '../img/img-products/cakes/cake7.webp',
                '../img/img-products/cakes/cake8.webp',
                '../img/img-products/cakes/cake9.webp',
                '../img/img-products/cakes/cake10.webp',
                '../img/img-products/cakes/cake11.webp',
                '../img/img-products/cakes/cake12.webp',
                '../img/img-products/cakes/cake13.webp',
                '../img/img-products/cakes/cake14.webp',
                '../img/img-products/cakes/cake15.webp',
                '../img/img-products/cakes/cake16.webp',
            ];
            let $smallPicsArrCake = $smallPicsCreate($picsArrCake);
            $appendLeftside($picsArrCake, $smallPicsArrCake);
        break;
        case 'leftside cupcakes':
            const $picsArrCupcakes = [
                '../img/img-products/cupcakes/cupcake1.webp', 
                '../img/img-products/cupcakes/cupcake2.webp', 
                '../img/img-products/cupcakes/cupcake3.webp', 
                '../img/img-products/cupcakes/cupcake4.webp', 
                '../img/img-products/cupcakes/cupcake5.webp', 
                '../img/img-products/cupcakes/cupcake6.webp',
                '../img/img-products/cupcakes/cupcake7.webp',
            ];
            let $smallPicsArrCupcakes = $smallPicsCreate($picsArrCupcakes);
            $appendLeftside($picsArrCupcakes, $smallPicsArrCupcakes);
        break;
        case 'leftside trifles':
            const $picsArrTrifles = [
                '../img/img-products/trifles/trifle1.webp', 
                '../img/img-products/trifles/trifle2.webp', 
                '../img/img-products/trifles/trifle3.webp', 
                '../img/img-products/trifles/trifle4.webp', 
            ];
            let $smallPicsArrTrifles = $smallPicsCreate($picsArrTrifles);
            $appendLeftside($picsArrTrifles, $smallPicsArrTrifles);
        break;
        case 'leftside others':
            const $picsArrOthers = [
                '../img/img-products/others/others1.webp', 
                '../img/img-products/others/others2.webp', 
                '../img/img-products/others/others3.webp', 
                '../img/img-products/others/others4.webp', 
                '../img/img-products/others/others8.webp',
                '../img/img-products/others/others9.webp',
                '../img/img-products/others/others10.webp',
                '../img/img-products/others/others11.webp',
                '../img/img-products/others/others12.webp',
                '../img/img-products/others/others13.webp',
                '../img/img-products/others/others14.webp',
                '../img/img-products/others/others15.webp',
                '../img/img-products/others/others16.webp',
                '../img/img-products/others/others5.webp', 
                '../img/img-products/others/others6.webp',
                '../img/img-products/others/others7.webp',
            ];
            let $smallPicsArrOthers = $smallPicsCreate($picsArrOthers);
            $appendLeftside($picsArrOthers, $smallPicsArrOthers);
        break;
        case 'leftside gingerbread':
            const $picsArrGingerbreads = [
                '../../img/img-decoration/gingerbread/gingerbread1.webp', 
                '../../img/img-decoration/gingerbread/gingerbread2.webp',
                '../../img/img-decoration/gingerbread/gingerbread3.webp', 
                '../../img/img-decoration/gingerbread/gingerbread4.webp', 
                '../../img/img-decoration/gingerbread/gingerbread5.webp', 
                '../../img/img-decoration/gingerbread/gingerbread6.webp', 
                '../../img/img-decoration/gingerbread/gingerbread7.webp', 
                '../../img/img-decoration/gingerbread/gingerbread8.webp', 
            ];
            let $smallPicsArrGingerbreads = $smallPicsCreate($picsArrGingerbreads);
            $appendLeftside($picsArrGingerbreads, $smallPicsArrGingerbreads);
        break;
        case 'leftside mastic-decor':
            const $picsArrMasticDecor = [
                '../../img/img-decoration/mastic-decor/mastic-decor1.webp', 
                '../../img/img-decoration/mastic-decor/mastic-decor2.webp',
                '../../img/img-decoration/mastic-decor/mastic-decor3.webp', 
                '../../img/img-decoration/mastic-decor/mastic-decor4.webp', 
                '../../img/img-decoration/mastic-decor/mastic-decor5.webp', 
                '../../img/img-decoration/mastic-decor/mastic-decor6.webp', 
            ];
            let $smallPicsArrMasticDecor = $smallPicsCreate($picsArrMasticDecor);
            $appendLeftside($picsArrMasticDecor, $smallPicsArrMasticDecor);
        break;
        case 'leftside floral-decor':
            const $picsArrFloralDecor = [
                '../../img/img-decoration/floral-decor/floral-decor3.webp', 
                '../../img/img-decoration/floral-decor/floral-decor1.webp', 
                '../../img/img-decoration/floral-decor/floral-decor2.webp',
                '../../img/img-decoration/floral-decor/floral-decor4.webp', 
            ];
            let $smallPicsArrFloralDecor = $smallPicsCreate($picsArrFloralDecor);
            $appendLeftside($picsArrFloralDecor, $smallPicsArrFloralDecor);
        break;
        case 'leftside chokolate-decor':
            const $picsArrChokolateDecor = [
                '../../img/img-decoration/chokolate-decor/chokolate-decor4.webp',
                '../../img/img-decoration/chokolate-decor/chokolate-decor1.webp', 
                '../../img/img-decoration/chokolate-decor/chokolate-decor2.webp',
                '../../img/img-decoration/chokolate-decor/chokolate-decor3.webp', 
            ];
            let $smallPicsArrChokolateDecor = $smallPicsCreate($picsArrChokolateDecor);
            $appendLeftside($picsArrChokolateDecor, $smallPicsArrChokolateDecor);
        break;
        case 'leftside berries':
            const $picsArrBerries = [
                '../../img/img-decoration/berries/berries1.webp', 
                '../../img/img-decoration/berries/berries2.webp',
                '../../img/img-decoration/berries/berries3.webp', 
                '../../img/img-decoration/berries/berries4.webp', 
                '../../img/img-decoration/berries/berries5.webp', 
                '../../img/img-decoration/berries/berries6.webp',
                '../../img/img-decoration/berries/berries7.webp',
            ];
            let $smallPicsArrBerries = $smallPicsCreate($picsArrBerries);
            $appendLeftside($picsArrBerries, $smallPicsArrBerries);
        break;
        default:
           $appendLeftside($picsArrCake, $smallPicsArrCake);
    };

    // bigpic change
    $('.smallpics-item').on('click', function() {
        $('.smallpics-item').removeClass('active');
        $(this).addClass('active');
        let $currentPic = $(this).find('img').attr('src');
        $bigpic.find($('img')).attr('src', $currentPic.slice(0, -11) + '.webp');
    });
});
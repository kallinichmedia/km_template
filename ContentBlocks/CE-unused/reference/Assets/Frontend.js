/* Created by Content Blocks */


function initRefBoxSlider () {
    console.log('initRefBoxSlider');

    var refBoxSlider = document.querySelectorAll('.km-reference .swiper');

    refBoxSlider.forEach(function (slider) {

        const maxDelay = 5000;

        // set local timeout before start of each slider
        var delay = Math.floor(Math.random() * maxDelay);
        console.log('delay', delay);
        setTimeout(function () {
            // small swiper no gap, bullets only, slide to the left
            var swiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                autoplay: true,
                speed: 500,
                
                autoplay: {
                    delay: 5000,
                },
                
                // pagination

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        }, delay);
    });
}

document.addEventListener("DOMContentLoaded", initRefBoxSlider , { once: true });
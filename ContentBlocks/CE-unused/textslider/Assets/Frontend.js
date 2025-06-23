/* Created by Content Blocks */


console.log('TextSlider: lets got!');

document.addEventListener('DOMContentLoaded', function() {
    // get all .SwiperTextslider

    var textSliders = document.querySelectorAll('.SwiperTextslider');

    // loop through all .SwiperTextslider

    

    textSliders.forEach(function(textSlider) {

    

        console.log(textSlider);
        var thisSwiper = new Swiper(textSlider, {
            parallax: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            speed: 500,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"><span class="pane"><span>' + (index + 1) + '</span><span>' + (index + 1) + "</span></span></span>";
                },
            },
        }).on('slideNextTransitionEnd', function () {
            // add gsap animation slide up from bottom
            var swiper = this;
            var currentSlide = swiper.slides[swiper.activeIndex];
            
        });
    });

});
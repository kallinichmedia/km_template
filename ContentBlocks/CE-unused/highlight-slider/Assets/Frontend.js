/* Created by Content Blocks */

/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function() {
    let refsliders = document.querySelectorAll('.ce-highlight-slider')
    
    // add Swiper to all refsliders

    refsliders.forEach(refslider => {
        let swiper = new Swiper(refslider.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 30,
            draggable: true,
            loop: true,
            autoplay: {
                delay: 5000,
            },

            // set next-button
            navigation: {
                nextEl: refslider.querySelector('.swiper-button-next'),                
            },
            
            pagination: false,

            breakpoints: {
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
            }
        })
    })
})
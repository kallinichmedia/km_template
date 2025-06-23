/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function() {
    let refsliders = document.querySelectorAll('.ce-refslider')
    
    // add Swiper to all refsliders

    refsliders.forEach(refslider => {
        let swiper = new Swiper(refslider.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 30,
            draggable: true,
            loop: true,
            autoplay: {
                delay: 3500,
            },
            speed: 1500,
            pagination: false,

            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
            }
        })
    })
})
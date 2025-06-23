/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function imglinkmatrix() {

    console.group('imglinkmatrix');
    // register GSAP ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);


    let imglinkmatrices = document.querySelectorAll('.ce-imglinkmatrix');

    imglinkmatrices.forEach(function(imglinkmatrix) {
        let imglinkmatrixItems = imglinkmatrix.querySelectorAll('.linkbox');

        console.log(imglinkmatrixItems);
        // asume a two column layout, square images
        // let the odds be sticky while the next even scrolls in and vice versa


        imglinkmatrixItems.forEach(function(item, index) {

            let viewportHeight = window.innerHeight;
            let itemHeight = item.offsetHeight;

            let scrollerStart = (viewportHeight - itemHeight)/2;
            let scrollerSnd = viewportHeight - itemHeight;

            console.log('viewportHeight: ' + viewportHeight);


            // if not last item
            if (index < imglinkmatrixItems.length - 1) {
                
                let tl = gsap.timeline({
                    scrollTrigger: {
                        
                        trigger: item,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.5,
                        pin: true,
                        anticipatePin: 1,
                        markers: false
                    }
                });
            }

                

        });

    });

    console.groupEnd();
});



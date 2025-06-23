export function maskedVideo() {
    
    const ceMaskedvideos = document.querySelectorAll('.ce-maskedvideo');

    ceMaskedvideos.forEach(function(ceMaskedvideo) {
        const big = ceMaskedvideo.querySelector('.big');
        const small = ceMaskedvideo.querySelector('.small');

        // create gsap timeline
        const tl = gsap.timeline({paused: true});
        // slide in from right to left big
        tl.from(big, {x: '100%', duration: 2, ease: 'power2.out'}, 0);
        // slide in from left to right small
        tl.from(small, {x: '-100%', duration: 2, ease: 'power2.out'}, 0);

        // pay on window loaded
        window.addEventListener('load', function() {
            tl.play();
        });


    });
    

    


}
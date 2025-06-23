/* Created by Content Blocks */

/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function() {

    
    // check gsap, register ScrollTrigger
    
    if (typeof gsap === 'undefined') {
        console.error('gsap is not loaded');
        return;
    }
    
    
    gsap.registerPlugin(ScrollTrigger);
    
    if (typeof ScrollTrigger === 'undefined') {
        console.error('ScrollTrigger is not loaded');
        return;
    }
    
    
    
    // find all .cb-boxmatrix
    var staffmatrices = document.querySelectorAll('.ce-staffmatrix');
    
    staffmatrices.forEach(function(element) {
        
        // find all .item, stagger fadeIn, 0.5s interval, when in viewport

        var items = element.querySelectorAll('.person .infoblock');

        gsap.from(items, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none none',
                scrub: 0.5,
                markers: false
            },
            opacity: 0,
            y: 50,
            stagger: 0.5
        });


    });
});
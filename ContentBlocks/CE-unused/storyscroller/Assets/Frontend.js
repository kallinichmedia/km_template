/* Created by Content Blocks */

document.addEventListener('DOMContentLoaded', function() {
    

    
    
    gsap.registerPlugin(ScrollTrigger);
    
    console.group('Storyscroller');
    
    console.log('Storyscroller loaded');
    
    var storyScroller = document.querySelectorAll('.ce-storyscroller');
    if (!storyScroller) {
        console.log('No storyscroller found');
        console.groupEnd();
        return;
    }
    
    storyScroller.forEach(function (storyScroller) {
        
        // find all .ce-storyscroller-item
        var items = storyScroller.querySelectorAll('.ce-storyscroller-item');
        
        
        items.forEach(function (item, index) {

            let punchline = item.querySelector('.punchline');
            let subline = item.querySelector('.subline');
            let buttonrow = item.querySelector('.buttonrow');

            // if last item, we don't need to pin it
            if (index != items.length - 1) {


                let nextbtn = item.querySelector('.nextbtn');
                let nextitem = items[index + 1];

                // scroll to next item, use ScrollToPlugin
                nextbtn.addEventListener('click', function () {
                    gsap.to(window, {duration: 1, scrollTo: nextitem, ease: "power2.inOut"});
                });

                

                ScrollTrigger.create({
                    trigger: item,
                    start: () => item.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                    pin: true, 
                    pinSpacing: false 
                });
            }

            // animate: fade in from bottom
            // punchline, subline, buttonrow one after another

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%",
                    end: "top top",
                    scrub: 1,
                    markers: false
                },
                defaults: {opacity: 0, y: 50}
            });

            tl.from(punchline, {opacity: 0, y: 100, duration: 1});
            tl.from(subline, {opacity: 0, y: 100, duration: 1});
            tl.from(buttonrow, {opacity: 0, y: 100, duration: 1});
          
            
            
        });



        
        
        
        
    });
    
    console.groupEnd();
    

});
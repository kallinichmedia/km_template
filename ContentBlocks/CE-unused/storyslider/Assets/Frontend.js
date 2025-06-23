/* Created by Content Blocks */

document.addEventListener('DOMContentLoaded', function() {
    
    return;

    let trigger = document.querySelectorAll('.ce-storyslide-button');
    
    if (!trigger) {
        return;
    }
    
    trigger.forEach(function(button) {
        let targetID = button.getAttribute('data-target');
        let target = document.getElementById(targetID);

        button.addEventListener('click', function() {
            console.log(target);
            openStoryModal(target);
        });        
    });

    closers = document.querySelectorAll('.ce-storyslide-close');

    closers.forEach(function(closer) {
        let targetID = closer.getAttribute('data-target');
        let target = document.getElementById(targetID);
        // if no target is set, we assume the closer is a child of the modal
        if (!target) {
            // find parent .e-storyslide-modal
            target = closer.closest('.ce-storyslide-modal');           
        }
        
        
        closer.addEventListener('click', function() {
            console.log(target);
            closeStoryModal(target);
        });
    });


    let openStoryModal = function( modalObj) {
        
        // init swiper
        let swiper = new Swiper(modalObj.querySelector('.swiper'), {
            // Navigation arrows
            navigation: {
                nextEl: '.storyslider-button-next',
                prevEl: '.storyslider-button-prev',
            },
        });
        
        // use GSAP to animate the modal from center to full screen
        let tl = gsap.timeline();

        tl.to(modalObj, {
            duration: 0.25,
            scale: 1,
            ease: 'power2.out',
            zIndex: 100,
            onComplete: function() {
                modalObj.classList.add('modal--open');
            }
        });
    }


    let closeStoryModal = function( modalObj) {
        // use GSAP to animate the modal from center to full screen

        let tl = gsap.timeline();

        tl.to(modalObj, {
            duration: 0.25,
            scale: 0,
            // set pointer
            ease: 'power2.out',
            zIndex: 00,
            onComplete: function() {
                modalObj.classList.add('modal--open');
            }
        });
    }


});
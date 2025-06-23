export function header() {     
    document.addEventListener('DOMContentLoaded', function() {

        console.log('Header: lets go!')
        // get #mainmenutoggle


        var speed = 0.25;
        var mainMenuToggle = document.getElementById('mainmenutoggle');
        
        let menupanel = document.querySelector('.menupanel')
        let menubox = document.querySelector('.menu-animation')
        let bodyObj = document.querySelector('body')

        var isOpen = false;

        
        // let menubox scale from height 0 to auto, fade in afterwards, transform origin top left
        var tlopen = gsap.timeline({paused: true});
        tlopen.to(menupanel, {duration: speed, width: 'min(100%, 500px)', height: '100svh', ease: 'power1.inOut'})
        tlopen.to(menubox, {duration: speed, opacity: 1, ease: 'power1.inOut'})
        
        // let menubox scale from height auto to 0, fade out afterwards, transform origin top left
        var tlclose = gsap.timeline({paused: true});
        tlclose.to(menubox, {duration: speed, opacity: 0, ease: 'power1.inOut'})
        tlclose.to(menubox, {duration: speed, width: "12rem", height: 0, left: -80, ease: 'power1.inOut'})

        mainMenuToggle.addEventListener('click', function() {
            // use gsap to animate the menu from height 0 to auto, fade in afterwards

            if ( !isOpen ) {   
                console.log('opening')             
                bodyObj.classList.add('open')
                isOpen = true; 
                // reset timeline
                /* tlopen.restart()
                tlopen.play()
                */
          
            } else {
                console.log('closeing')
                bodyObj.classList.remove('open')
                isOpen = false; 
                // reset timeline
                // play tlopen reverse
                // tlclose.restart()
                /* tlopen.reverse()     

                */
            }

        });

        const searchtoggle = document.getElementById('searchtoggle');
        const searchfomrmini = document.getElementById('searchformmini');

        // toggle class open on searchtoggle
        searchtoggle.addEventListener('click', function() {
            searchfomrmini.classList.toggle('open');
        });

        // close menu when item is clicked, .mainmenu a in menubox
        const mainmenuLinks = document.querySelectorAll('.mainmenu a');
        mainmenuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                bodyObj.classList.remove('open');
                isOpen = false;
            });
        });
        // close menu when clicking outside of menupanel
        document.addEventListener('click', function(event) {
            if (!menupanel.contains(event.target) && !mainMenuToggle.contains(event.target) && isOpen) {
                bodyObj.classList.remove('open');
                isOpen = false;
            }
        }
        );
        // close menu when pressing escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && isOpen) {
                bodyObj.classList.remove('open');
                isOpen = false;
            }
        });
        
        


    });
}
/* Created by Content Blocks */


// #small2, small3 .overlay-block

document.addEventListener("DOMContentLoaded", function() {
    // find all ce-hero elements

    let heroElements = document.querySelectorAll('.ce-hero');
    if (!heroElements) {
        return;
    }
    
    // loop through all ce-hero elements
    heroElements.forEach(function(heroElement) {


        let introwrap = heroElement.querySelector('.stage-0-wrap'); // Container
        let bgobject = heroElement.querySelector('.bgcolorobject');  // Raute gross

        let accentSmall1 = heroElement.querySelector('.accent-small1'); // Raute klein
        let accentSmall2 = heroElement.querySelector('.accent-small2'); // Raute klein
        let accentMain = heroElement.querySelector('.accent-main'); // Raute riesig

        let heroLetterB = heroElement.querySelector('.hero-letter-b'); //  Bevor
        let textBlock = heroElement.querySelector('.text'); // wir irgendwas zusammen starten

        let ceStoryslideButton = heroElement.querySelector('#ce-storyslide-startStory'); // starten single

        // pick up story objects

        let storybox1 = heroElement.querySelector('.story-part1');   // story 1
        let punchline1 = heroElement.querySelector('.story-part1 .punchline');
        let subline1 = heroElement.querySelector('.story-part1 .subline');
        let nextButton1 = heroElement.querySelector('.story-part1 .btnani');   

        let storybox2 = heroElement.querySelector('.story-part2');   // story 2
        let punchline2 = heroElement.querySelector('.story-part2 .punchline');
        let subline2 = heroElement.querySelector('.story-part2 .subline');
        let nextButton2 = heroElement.querySelector('.story-part2 .btnani');

        let storybox3 = heroElement.querySelector('.story-part3');   // story 3
        let punchline3 = heroElement.querySelector('.story-part3 .punchline');
        let subline3 = heroElement.querySelector('.story-part3 .subline');
        let nextButton3 = heroElement.querySelector('.story-part3 .btnani');

      

        let scrolldown = heroElement.querySelector('.scroll-down'); // scrolldown button

        
        let scrolldownTL = gsap.timeline({ paused: false });
        scrolldownTL
            .from(scrolldown, {
                duration: 1,
                y: -30,
                opacity: 0,
                ease: "bounce.out",
                delay: 3,
            }); 

        // create gsap.TL instance
        let introLoadingTL = gsap.timeline({paused: true});
      
        introLoadingTL
            .from(accentSmall1, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            })        
            .from(accentMain, {
                duration: 1,
                x: -200,
                opacity: 0,
                scale: 0.95,
                ease: "power2.out",
            }, "-=0.7")
            .from(accentSmall2, {
                duration: 0.25,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "-=0.4")
            .from(heroLetterB, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "-=0.6")
            .from(textBlock, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "-=0.5")
            .from(ceStoryslideButton, {
                duration: 0.8,
                y: 30, // Small upward slide for subtle emphasis
                opacity: 0,
                scale: 1.1, // Slight scale-in to draw attention
                ease: "back.out(1.7)", // Gentle "pop" effect
            }, "+=0.3") // Delayed start for emphasis


        

        // animate out the hero elements

        let introDisolveTL = gsap.timeline({ paused: true });

        introDisolveTL
            .to(accentSmall1, {
                duration: 0.25,
                x: -200,
                opacity: 0,                
                ease: "power2.out",
            }, 0.25 );
            introDisolveTL.to(accentSmall1, {
                duration: 0.25,
                x: -200,
                opacity: 0,                
                ease: "power2.out",
            }, 0.25 );
            introDisolveTL.to(accentSmall2, {
                duration: 0.25,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, 0.25 );

            introDisolveTL.to(accentMain, {
                duration: 0.25,
                x: -200,
                opacity: 0,                
                ease: "power2.out",
            }, "-=0.1");

            introDisolveTL.to(heroLetterB, {
                duration: 0.25,
                x: -200,
                opacity: 0,                
                ease: "power2.out",
            }, "-=0.2");

            introDisolveTL.to(textBlock, {
                duration: 0.25,
                x: -200,
                opacity: 0,                
                ease: "power2.out",
            }, "-=0.3")
            // make unclickable
            .to(introwrap, { pointerEvents: "none" }, "-=0.3")



        // animate in the 1. story elements

        let story1inTL = gsap.timeline({ paused: true });

        story1inTL
            .to(storybox1, {
                duration: 0,
                opacity: 1,
                onComplete: () => { storybox1.style.pointerEvents = "auto" }
            })
            .to(bgobject,{
                duration: 1,
                backgroundColor: "#661067",
                ease: "power2.out",
            })
            .from(punchline1, {
                duration: 1,
                x: -200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out",
            }, "-=1")
            .from(subline1, {
                duration: 1,
                x: 200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out",
            }, "-=0.7")
            .from(nextButton1, {
                duration: 1,
                x: -200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out",
            })

        
        // animate out the 1. story elements

        let story1outTL = gsap.timeline({ paused: true });
        
        story1outTL            
            .to( punchline1, {
                duration: 0.5,
                x: -200,
                opacity: 0,  
                pointerEvents: "none",              
                ease: "power2.out",
            })
            .to( subline1, {
                duration: 1,
                x: 200,
                opacity: 0, 
                pointerEvents: "none",               
                ease: "power2.out",
            }, "-=0.5")
            .to(nextButton1, {
                duration: 0.25,
                x: -200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out"
            }, "-=0.5")
            .to(storybox1, {
                duration: 0,
                opacity: 0,
                onComplete: () => { storybox1.style.pointerEvents = "none" }
            })


        // animate in the 2. story elements

        let story2inTL = gsap.timeline({ paused: true });

        // simple version
        /*
        story2inTL
            .to(bgobject,{
                duration: 2,
                backgroundColor: "#9e005d",
                ease: "power2.out",
            })
            .from(punchline2, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "+=1");
        */

        // complex verison
        
        // wrap each letter in a span element for individual animation
        punchline2.innerHTML = punchline2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");       


        let letters = punchline2.querySelectorAll('.letter');
        letters.forEach(function(letter) {
            letter.style.display = "inline-block";
        });


        story2inTL
            .to(storybox2, {
                duration: 0,
                opacity: 1,
                onComplete: () => { storybox2.style.pointerEvents = "auto" }
            })
            .to(bgobject,{
                duration: 1,
                backgroundColor: "#9e005d",
                ease: "power2.out",
            })         
            .from(letters, {
                duration: 0.5,
                y: -30,
                opacity: 0,                
                scale: 0.5,
                ease: "power2.out",                
                stagger: 0.1,
            }, "+=1")
            .from(subline2, {
                duration: 1,
                x: 200,
                opacity: 0,
                ease: "power2.out",               
            }, "-=0.7")
            .from(nextButton2, {
                duration: 1,
                x: -200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out",                
            })

        // animate out the 2. story elements

        let story2outTL = gsap.timeline({ paused: true });
        story2outTL
            .to( punchline2, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "+=1")

            .to( subline2, {
                duration: 1,
                x: 200,
                opacity: 0,
                ease: "power2.out",
            }, "-=0.7")
            .to(storybox2, {
                duration: 0,
                opacity: 0,
                onComplete: () => { storybox1.style.pointerEvents = "none" }
            })

       

        let story3inTL = gsap.timeline({ paused: true });
        story3inTL
            .to(storybox3, {
                duration: 0,
                opacity: 1,
                onComplete: () => { storybox3.style.pointerEvents = "auto" }
            })
            .to(bgobject,{
                duration: 2,
                backgroundColor: "#02103e",
                ease: "power2.out",
            })
            .from(punchline3, {
                duration: 1,
                x: -200,
                opacity: 0,
                ease: "power2.out",
            }, "+=1")

            .from(subline3, {
                duration: 1,
                x: 200,
                opacity: 0,
                ease: "power2.out",
            })
            .from(nextButton3, {
                duration: 1,
                x: -200,
                opacity: 0,
                pointerEvents: "none",
                ease: "power2.out",                
            })

      



        // add click event to nextButton
        // scroll to "#c328", animated scrolling

       /*  nextButton.addEventListener('click', function() {
            document.querySelector('#c328').scrollIntoView({ behavior: 'smooth' });
        }); */



        // start the introLoadingTL
        introLoadingTL.play();

        // ceStoryslideButton on click ScrollTo #storyscroller
        ceStoryslideButton.addEventListener('click', function() {
            // start introDisolveTL
            introDisolveTL.play().eventCallback("onComplete", function() {
                // start story1TL
                story1inTL.play();
            });
        });

        nextButton1.addEventListener('click', function() {
            story1outTL.play()
            story2inTL.play();
        });

        nextButton2.addEventListener('click', function() {
            story2outTL.play();
            story3inTL.play();
        });



        const scrollMoveEvent = () => {          
            // scrolle zu 0 + 100vh
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });            
        }

        // scrolldown button click event, scroll smoothly down 1 screen
        scrolldown.addEventListener('click', scrollMoveEvent);
        nextButton3.addEventListener('click', scrollMoveEvent);






    });
});
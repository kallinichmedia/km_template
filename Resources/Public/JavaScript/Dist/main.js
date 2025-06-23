import { header } from "./modules/header.js";
/* import { ceTextslider } from "./modules/ce-textslider.js";
import { ceTopiccloud } from "./modules/ce-topiccloud.js"; */
import { kmTracking } from "./modules/tracking.js";
import { ceLamellas } from "./modules/ce-lamellas.js";
import { maskedVideo } from "./modules/ce-maskedvideo.js";
import JobFilterFlip from './modules/ce-jobsfilter.js';
import { bewerbungsform } from "./modules/bewerbungsform.js";
import { initMasonries } from "./modules/tool-masonry.js";

/* import { ceRefMatrix } from "./modules/ce-refmatrix.js"; */
import { ceAccordion } from "./modules/ce-accordion.js";
/* import { powermailTweaks } from "./modules/powermail.js"; */

// register gsap plugins

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollToPlugin);


initMasonries();
ceLamellas();
maskedVideo();
bewerbungsform();

const lenis = new Lenis({
  smooth: true,
  gestureOrientation: 'vertical',
})

// 2️⃣ Menu Panel Scroll (Optional Smooth Scrolling)
const menuScrollbox = document.querySelector('.menupanel .scrollbox');

/* // Optional: Use Lenis for smooth scrolling inside the menu
const menuLenis = new Lenis({
  wrapper: menuScrollbox,
  content: menuScrollbox,
  smooth: true,
  gestureOrientation: 'vertical',
  wheelMultiplier: 1.2, // Adjust scroll speed if needed
  touchMultiplier: 1.5, // For touch devices
}); */



lenis.on('scroll', (e) => {
  //console.log(e)
})


document.addEventListener('DOMContentLoaded', () => {
  //console.log('DOMContentLoaded')
  kmTracking();

  JobFilterFlip.init();
});




//lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
  /* menuLenis.raf(time) */
})

gsap.ticker.lagSmoothing(0)


function raf(time) {
  lenis.raf(time)
  /* menuLenis.raf(time) */
  requestAnimationFrame(raf)

}

requestAnimationFrame(raf)


// add resize event
window.addEventListener('resize', () => {
  lenis.resize()
  ScrollTrigger.refresh()
})

header(lenis);
ceAccordion();




// asume there ist .page-preloadscreen

document.addEventListener('DOMContentLoaded', () => {

  const jumpToHash = () => {
    // check if there is a hash in the URL
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        // Get the scroll padding from CSS
        const scrollPaddingTop = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        
        // Calculate the absolute position of the target
        const targetPosition = target.offsetTop - scrollPaddingTop;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
}


  // scroll to top
  gsap.to(window, {
    scrollTo: 0,
    duration: 0
  })

  gsap.to('.page-preloadscreen', {
    autoAlpha: 0,
    duration: 0.25,
    onComplete: () => {
      document.body.classList.remove('preload')
      // jump to hash if there is one
      jumpToHash();
    }
  })
})

// init AOS.js
AOS.init({
  duration: 1000,
  once: true,
  mirror: false
}); 




// boxes with flip effect

// doc read

document.addEventListener('DOMContentLoaded', () => {

  let SeoBoxesDesktop = document.querySelectorAll('#seo-boxes-desktop > *');
  let SeoBoxesMobile = document.querySelectorAll('#seo-boxes-mobile > *');

  // desktop boxes

  // stagger the boxes, flip them and add a scrolltrigger

  gsap.from(SeoBoxesDesktop, {
    y: 100,
    autoAlpha: 0,
    duration: 0.25,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#seo-boxes-desktop',
      start: 'top 80%',
      // replay when reentering
      toggleActions: 'play none none reverse',

    }
  });


  
  gsap.from(SeoBoxesMobile, {
    y: 100,
    autoAlpha: 0,
    duration: 0.25,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#seo-boxes-desktop',
      start: 'top 80%',
      // replay when reentering
      toggleActions: 'play none none reverse',

    }
  });



});




// Vogel

document.addEventListener('DOMContentLoaded', () => {
  let voegel = document.querySelectorAll('.svgogel');

  voegel.forEach((vogel, index) => {
    let tl = gsap.timeline({
      repeat: -1,
      delay: index * 0.35 // stagger the start time of each vogel animation
    });

    tl.to(vogel, {
      y: 10,
      duration: 1,
      // add smooth easing
      ease: 'sine.inOut'
      
    });
    tl.to(vogel, {
      y: 0,
      duration: 1,
      ease: 'sine.inOut'
    });
  });
});

// add scrolled class to body after 150px
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.body.classList.add('scrolled')
  } else {
    document.body.classList.remove('scrolled')
  }
})
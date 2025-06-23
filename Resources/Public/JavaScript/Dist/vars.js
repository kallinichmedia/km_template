gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)
gsap.config({nullTargetWarn: false,});


// VARIABLES
/* const bodyTag = document.querySelector("body"),
htmlTag = document.querySelector("html"),
logoTag = document.querySelector("#logo"),
wrapperTag = document.querySelector("#smooth-wrapper"),
contentTag = document.querySelector("#smooth-content"),
introMaster = gsap.timeline({paused: false})
pageToPageAnim = gsap.timeline({paused: true})
 */

// IS MOBILE CONDITION
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
} 

/* // DEFINE OUR CUSTOM EASE
let customVal = "M0,0 C0.25,0 0.288,-0.004 0.404,0.112 0.54,0.248 0.487,0.707 0.594,0.882 0.65,0.974 0.698,1 1,1 "
let customEase = CustomEase.create("custom",customVal)
 */

// SMOOTH SCROLLING /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* let smoother
function smoothScroll() {
    if(!isMobile() && window.innerWidth > 768 ) {
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: true, // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true, 
            normalizeScroll: true
        });

       smoother.effects(".parallax-img img", { speed: ".75" })
    
        const scrollTo = gsap.utils.toArray(".scroll-to")
        scrollTo.forEach(st => {
            const scrollTarget = st.dataset.scroll
            st.addEventListener("click", function(e) {
                gsap.to(smoother, {
                    scrollTop: smoother.offset("#" + scrollTarget, "top 0%"),
                    duration: 1,
                    ease: "power2.inOut"
                })
            })
        })
        return smoother   
    }
} */
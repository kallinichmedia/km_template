/* Created by Content Blocks */

document.addEventListener("DOMContentLoaded", function() {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate the textwrap (fade in + move up slightly)
    timeline.from(".title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });

    timeline.from(".subtitle", {
        opacity: 0,
        y: 50,
        duration: 0.5,
    }); 
    

    // Animate the accents (scale up and fade in)
    timeline.from(
      ".accent",
      {
        scale: 0,
        opacity: 0,
        stagger: 0.2, // Stagger each accent animation by 0.2 seconds
      },
      "-=0.8" // Overlap with previous animation
    );

    // Animate the video zoom-in effect
    timeline.from(
      ".imgmask",
      {
        x: -100, // Start slightly zoomed in
        opacity: 0,
      },
      "-=0.6" // Overlap with previous animation
    );
});
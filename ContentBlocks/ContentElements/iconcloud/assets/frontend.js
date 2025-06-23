function removeLastInRowBorders() {
 const containers = document.querySelectorAll('.itemcloud');
 
 containers.forEach(container => {
   const items = container.querySelectorAll('.iconitem');
   
   // Reset all borders first
   items.forEach(item => item.style.borderRight = '2px solid #fff');
   
   let currentRowTop = null;
   let lastInRow = null;
   
   items.forEach(item => {
     const rect = item.getBoundingClientRect();
     
     // If we're on a new row, remove border from previous row's last item
     if (currentRowTop !== null && rect.top > currentRowTop) {
       if (lastInRow) lastInRow.style.borderRight = 'none';
     }
     
     currentRowTop = rect.top;
     lastInRow = item;
   });
   
   // Handle the last item in the final row
   if (lastInRow) lastInRow.style.borderLeft = 'none';
 });
}

// Call on load and resize
window.addEventListener('load', removeLastInRowBorders);
window.addEventListener('resize', removeLastInRowBorders);


/* 
    * add fade-in animation to every icon item, 
    * use GSAP and ScrollTrigger
    * let itemcloud be the trigger
    * fade-in animation should start when the itemcloud is in view
    * fade-in animation should be staggered by 0.1 seconds
    * fade-in animation should last 0.5 seconds
    * fade-in animation should start with opacity 0 and end with opacity 1
    * let come from the bottom a little bit
    * fade-in animation should have a y offset of 20px
    * fade-in animation should have a delay of 0.1 seconds
    * fade-in animation should have a ease of "power1.out"
    * asume multiple itemclouds on the page
*/ 

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.itemcloud').forEach(itemcloud => {
  gsap.from(itemcloud.querySelectorAll('.iconitem'), {
    scrollTrigger: {
      trigger: itemcloud,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,
    delay: 0.1
  });
});


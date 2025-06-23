/**
 * Sharing Logo Animation with ScrollTrigger
 * Supports multiple instances on the same page
 * Compatible with Lenis smooth scrolling
 */

// Initialize animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Make sure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP library not found. Please include: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>');
    return;
  }
  
  if (typeof ScrollTrigger === 'undefined') {
    console.error('ScrollTrigger plugin not found. Please include: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>');
    return;
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Setup Lenis integration with ScrollTrigger if Lenis exists
  setupLenisIntegration();
  
  // Find all sharing logo components and initialize each one
  const sharingComponents = document.querySelectorAll('.ce-covered-image');
  sharingComponents.forEach((component, index) => {
    initComponentAnimation(component, index);
  });
});

/**
 * Initializes animation for a specific component instance
 * @param {HTMLElement} component - The component container element
 * @param {number} index - Index of the component for unique identification
 */
function initComponentAnimation(component, index) {
  // Find SVG elements within this specific component
  const svg = component.querySelector('svg#sharing');
  if (!svg) return;
  
  // Get all animatable elements within this SVG
  const shar = svg.querySelector('#shar');
  const ing = svg.querySelector('#ing');
  const bigtail = svg.querySelector('#bigtail');
  const smalltail = svg.querySelector('#smalltail');
  const dottop = svg.querySelector('#dottop');
  const dotright = svg.querySelector('#dotright');
  const subtext = svg.querySelector('#subtext');
  
  // Find tagline if it exists
  const tagline = component.querySelector('.tagline');
  
  // Set initial states for this component's elements
  if (shar) gsap.set(shar, { opacity: 0, x: -50 });
  if (ing) gsap.set(ing, { opacity: 0, x: 50 });
  if (bigtail) gsap.set(bigtail, { opacity: 0, scale: 0.9, transformOrigin: 'right center' });
  if (smalltail) gsap.set(smalltail, { opacity: 0, scale: 0.9, transformOrigin: 'right center' });
  if (dottop) gsap.set(dottop, { opacity: 0, scale: 0, transformOrigin: 'center center' });
  if (dotright) gsap.set(dotright, { opacity: 0, scale: 0, transformOrigin: 'center center' });
  if (subtext) gsap.set(subtext, { opacity: 0, y: 10 });
  if (tagline) gsap.set(tagline, { opacity: 0, y: 10 });
  
  // Create a timeline for this component
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: component,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reset',
      markers: false,
      id: `sharing-animation-${index}`
    },
    defaults: { 
      ease: 'power2.out' 
    }
  });
  
  // Build animation sequence for available elements
  if (shar) {
    tl.to(shar, { 
      duration: 0.8, 
      opacity: 1, 
      x: 0, 
      ease: 'back.out(1.2)'
    });
  }
  
  if (ing) {
    tl.to(ing, { 
      duration: 0.8, 
      opacity: 1, 
      x: 0, 
      ease: 'back.out(1.2)'
    }, "-=0.4");
  }
  
  if (bigtail) {
    tl.to(bigtail, { 
      duration: 0.6, 
      opacity: 1,
      scale: 1,
      ease: 'power1.out'
    }, "-=0.2");
  }
  
  if (smalltail) {
    tl.to(smalltail, { 
      duration: 0.6, 
      opacity: 1,
      scale: 1,
      ease: 'power1.out'
    }, "-=0.3");
  }
  
  if (dottop) {
    tl.to(dottop, { 
      duration: 0.6, 
      opacity: 1, 
      scale: 1,
      ease: 'back.out(1.7)'
    }, "-=0.2");
  }
  
  if (dotright) {
    tl.to(dotright, { 
      duration: 0.6, 
      opacity: 1, 
      scale: 1,
      ease: 'back.out(1.7)'
    }, "-=0.3");
  }
  
  if (subtext) {
    tl.to(subtext, { 
      duration: 1, 
      opacity: 1, 
      y: 0 
    }, "-=0.3");
  }
  
  if (tagline) {
    tl.to(tagline, { 
      duration: 1, 
      opacity: 1, 
      y: 0 
    }, "-=0.8");
  }
  
  // Add hover effects for this component
  addHoverEffects(svg);
}

/**
 * Sets up integration between Lenis smooth scrolling and GSAP ScrollTrigger
 */
function setupLenisIntegration() {
  // Find Lenis instance by checking various common patterns
  const lenis = findLenisInstance();
  
  if (lenis) {
    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Use RAF loop for GSAP to sync with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Force GSAP to use the regular RAF
    gsap.ticker.lagSmoothing(0);
  } else {
    console.warn('Lenis not found. ScrollTrigger will work without Lenis integration.');
  }
}

/**
 * Helper function to find Lenis instance in the global scope
 * @returns {Object|null} Lenis instance if found, null otherwise
 */
function findLenisInstance() {
  // Common Lenis instance locations
  return window.lenis || 
         window.Lenis || 
         document.lenis || 
         (window.scroll && window.scroll.lenis) || 
         null;
}

/**
 * Adds hover effects to geometric elements within a specific SVG
 * @param {SVGElement} svg - The SVG element containing hover targets
 */
function addHoverEffects(svg) {
  if (!svg) return;
  
  const hoverElementIds = ['smalltail', 'bigtail', 'dottop', 'dotright'];
  
  hoverElementIds.forEach(id => {
    const el = svg.querySelector(`#${id}`);
    
    if (el) {
      // Store original color
      const originalFill = el.getAttribute('fill') || '#ffffff';
      
      // Add mouseenter event
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { 
          duration: 0.3, 
          scale: 1.05,
          fill: lightenColor(originalFill, 20),
          ease: 'power1.out' 
        });
      });
      
      // Add mouseleave event
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { 
          duration: 0.3, 
          scale: 1,
          fill: originalFill,
          ease: 'power1.in' 
        });
      });
    }
  });
}

/**
 * Helper function to lighten a color
 * @param {string} hex - Hex color code
 * @param {number} percent - Percentage to lighten
 * @returns {string} Lightened hex color
 */
function lightenColor(hex, percent) {
  // Handle non-hex colors (like #fff or named colors)
  if (!hex || hex.indexOf('#') !== 0 || hex.length < 7) {
    return hex; // Return original if not a proper hex
  }

  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Lighten
  r = Math.min(255, Math.floor(r * (100 + percent) / 100));
  g = Math.min(255, Math.floor(g * (100 + percent) / 100));
  b = Math.min(255, Math.floor(b * (100 + percent) / 100));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
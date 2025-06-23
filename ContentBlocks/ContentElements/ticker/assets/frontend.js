/**
 * CE Ticker - A customizable horizontal ticker using GSAP
 * 
 * Usage:
 * 1. Include GSAP v3: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
 * 2. Include this script: <script src="ce-ticker.js"></script>
 * 3. Add your HTML: <div class="ce-ticker" data-speed="500" data-direction="left" data-stopponhover="1">Your content</div>
 */

(function() {

    class CETicker {
        constructor(element) {
            this.originalElement = element;
            this.speed = parseInt(element.dataset.speed) || 500;
            this.direction = element.dataset.direction || 'left';
            this.stopOnHover = parseInt(element.dataset.stopponhover) || 0;
            this.content = element.innerHTML.trim();
            
            this.init();
        }
        
        init() {
            // Create the ticker structure
            this.container = document.createElement('div');
            this.container.className = 'ce-ticker-container';
            
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'ce-ticker-wrapper';
            
            // Create two items for seamless looping
            this.item1 = document.createElement('div');
            this.item1.className = 'ce-ticker-item';
            this.item1.innerHTML = this.content;
            
            this.item2 = document.createElement('div');
            this.item2.className = 'ce-ticker-item';
            this.item2.innerHTML = this.content;
            
            // Build the structure
            this.wrapper.appendChild(this.item1);
            this.wrapper.appendChild(this.item2);
            this.container.appendChild(this.wrapper);
            
            // Replace the original element
            this.originalElement.parentNode.replaceChild(this.container, this.originalElement);
            
            // Start the animation
            this.animate();
            
            // Add hover events if needed
            if (this.stopOnHover) {
                this.addHoverEvents();
            }
        }
        
        animate() {
            // Kill any existing animation
            if (this.timeline) {
                this.timeline.kill();
            }
            
            // Set the initial position
            gsap.set(this.wrapper, { xPercent: 0 });
            
            // Create the timeline
            this.timeline = gsap.timeline();
            
            // Get item width for duration calculation
            const itemWidth = this.item1.offsetWidth;
            
            // Calculate duration based on speed (higher speed value = faster animation)
            const duration = itemWidth / this.speed;
            
            // Set the animation
            this.timeline.to(this.wrapper, {
                xPercent: this.direction === 'left' ? -100 : 100,
                repeat: -1,
                duration: duration,
                ease: "none",
                modifiers: {
                    xPercent: (xPercent) => {
                        return this.direction === 'left' ? 
                            xPercent % -100 : 
                            xPercent % 100;
                    }
                }
            });
        }
        
        addHoverEvents() {
            this.container.addEventListener('mouseenter', () => {
                this.timeline.pause();
            });
            
            this.container.addEventListener('mouseleave', () => {
                this.timeline.play();
            });
        }
    }
    
    // Initialize all tickers when the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        const tickerElements = document.querySelectorAll('.ce-ticker');
        const tickers = [];
        
        tickerElements.forEach((element) => {
            tickers.push(new CETicker(element));
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            tickers.forEach(ticker => ticker.animate());
        });
    });
})();
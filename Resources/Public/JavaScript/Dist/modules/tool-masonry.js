class MasonryLayout {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.options = {
            gap: options.gap || 20,
            breakpoints: options.breakpoints || {
                1: 0,     // 1 column from 0px
                2: 768,   // 2 columns from 768px  
                3: 1024   // 3 columns from 1024px
            }
        };
        
        this.columns = 1;
        this.columnHeights = [];
        this.resizeTimeout = null;
        this.isLayouting = false;
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.error('Masonry container not found');
            return;
        }
        
        this.container.style.position = 'relative';
        this.calculateColumns();
        
        // Initial layout after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.refresh(), 100);
            });
        } else {
            // DOM already loaded, delay slightly for any pending renders
            setTimeout(() => this.refresh(), 100);
        }        
   
        this.bindEvents();
    }

    getItemTotalHeight(item) {
        const computedStyle = getComputedStyle(item);
        const marginTop = parseInt(computedStyle.marginTop) || 0;
        const marginBottom = parseInt(computedStyle.marginBottom) || 0;
        return item.offsetHeight + marginTop + marginBottom;
    }
    
    calculateColumns() {
        const containerWidth = this.container.offsetWidth;
        const { breakpoints } = this.options;
        
        this.columns = 1;
        for (const [cols, minWidth] of Object.entries(breakpoints)) {
            if (containerWidth >= minWidth) {
                this.columns = parseInt(cols);
            }
        }
        
        // Calculate item width
        const totalGaps = (this.columns - 1) * this.options.gap;
        const availableWidth = containerWidth - totalGaps;
        this.itemWidth = Math.floor(availableWidth / this.columns);
        
        // Reset column heights
        this.columnHeights = new Array(this.columns).fill(0);
        
        this.updateLayoutInfo();
    }
    
    updateLayoutInfo() {
        const info = document.getElementById('layoutInfo');
        if (info) {
            info.textContent = `${this.columns} columns, ${this.itemWidth}px width, ${this.options.gap}px gap`;
        }
    }
    
    async layout() {
        if (this.isLayouting) return;
        this.isLayouting = true;
        
        const items = Array.from(this.container.children);
        const visibleItems = items.filter(item => 
            item.style.display !== 'none' && !item.hidden
        );
        
        // Reset column heights
        this.columnHeights.fill(0);
        
        // First pass: set width and position to get accurate heights
        visibleItems.forEach(item => {
            item.style.position = 'absolute';
            item.style.width = `${this.itemWidth}px`;
            item.style.left = '0px';
            item.style.top = '0px';
            item.classList.remove('positioned');
        });
        
        // Wait for reflow
        await this.waitForReflow();
        
        // Second pass: position items properly
        for (let i = 0; i < visibleItems.length; i++) {
            const item = visibleItems[i];
            
            // Find shortest column
            const shortestColumnIndex = this.columnHeights.indexOf(Math.min(...this.columnHeights));
            
            // Calculate position
            const x = shortestColumnIndex * (this.itemWidth + this.options.gap);
            const y = this.columnHeights[shortestColumnIndex];
            
            // Apply position
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            
            // Wait for positioning to take effect
            await this.waitForReflow();
            
            // Get actual height after positioning
            const itemHeight = this.getItemTotalHeight(item);
            this.columnHeights[shortestColumnIndex] += itemHeight + this.options.gap;
            
            // Show the item
            item.classList.add('positioned');
        }
        
        // Update container height
        this.updateContainerHeight();
        this.isLayouting = false;
    }
    
    waitForReflow() {
        return new Promise(resolve => {
            requestAnimationFrame(() => {
                requestAnimationFrame(resolve);
            });
        });
    }
    
    updateContainerHeight() {
        const maxHeight = Math.max(...this.columnHeights);
        this.container.style.height = `${maxHeight - this.options.gap}px`;
    }
    
    bindEvents() {
        // Debounced resize handler
        const resizeHandler = () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.calculateColumns();
                this.layout();
            }, 150);
        };
        
        window.addEventListener('resize', resizeHandler);
        
        // Store reference for cleanup
        this.resizeHandler = resizeHandler;
        
        // Observer for content changes
        if (window.MutationObserver) {
            this.observer = new MutationObserver((mutations) => {
                let shouldRefresh = false;
                
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        shouldRefresh = true;
                    }
                });
                
                if (shouldRefresh && !this.isLayouting) {
                    setTimeout(() => this.refresh(), 100);
                }
            });
            
            this.observer.observe(this.container, {
                childList: true
            });
        }
    }
    
    refresh() {
        this.calculateColumns();
        this.layout();
    }
    
    destroy() {
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // Reset styles
        Array.from(this.container.children).forEach(item => {
            item.style.position = '';
            item.style.width = '';
            item.style.left = '';
            item.style.top = '';
            item.classList.remove('positioned');
        });
        
        this.container.style.height = '';
    }
}

export function initMasonries() {
    const containers = document.querySelectorAll('[data-masonry]');
    console.log(`Found ${containers.length} masonry containers`);
    containers.forEach(container => {
        const options = JSON.parse(container.getAttribute('data-masonry') || '{}');
        new MasonryLayout(container, options);        
    });

    
    
}

// example: 
/*
<div data-masonry='{"gap": 20, "breakpoints": {"1": 0, "2": 768, "3": 1024}}'>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>      
</div>
*/

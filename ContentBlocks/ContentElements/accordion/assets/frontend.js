// Accordion Implementation

document.addEventListener('DOMContentLoaded', function() {
    // Find all accordion instances on the page
    const accordions = document.querySelectorAll('.ce-iconaccordion');
    
    // Process each accordion instance independently
    accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.collapsingItem');
      
      // Add click event listener to each item's heading
      items.forEach(item => {
        const heading = item.querySelector('.heading');
        const content = item.querySelector('.content');
        const toggleIcon = item.querySelector('.toggleIcon svg');
        
        // Set initial state - all closed by default
        //content.style.display = 'none';
        item.setAttribute('aria-expanded', 'false');
        
        // Add click handler
        heading.addEventListener('click', function() {
          const isExpanded = item.getAttribute('aria-expanded') === 'true';
          
          // Close all items in this accordion instance
          items.forEach(siblingItem => {
            const siblingContent = siblingItem.querySelector('.content');
            const siblingToggleIcon = siblingItem.querySelector('.toggleIcon svg');
            
            //siblingContent.style.display = 'none';
            siblingItem.setAttribute('aria-expanded', 'false');
            siblingToggleIcon.classList.remove('active');
          });
          
          // Toggle current item if it wasn't already open
          if (!isExpanded) {
            // content.style.display = 'block';
            item.setAttribute('aria-expanded', 'true');
            toggleIcon.classList.add('active');
          }
        });
        
        // Add keyboard support for accessibility
        heading.setAttribute('tabindex', '0');
        heading.setAttribute('role', 'button');
        heading.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            heading.click();
          }
        });
      });
    });
  });
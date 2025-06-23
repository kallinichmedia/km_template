// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tab navigations
    initTabNavigation();
  
    function initTabNavigation() {
      // Find all tabbed page containers
      const tabbedPageContainers = document.querySelectorAll('.ce-pagestabbed');
      
      // Initialize each tabbed page container separately
      tabbedPageContainers.forEach(container => {
        // Select tab elements within this container
        const tabNavItems = container.querySelectorAll('.tab-nav-item');
        const tabContentPanels = container.querySelectorAll('.tab-content-panel');
        const tabShortcutLinks = container.querySelectorAll('.ce-shortcutlist a');
        
        // connect click events of shortcut links to the tab navigation
        tabShortcutLinks.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            // get data-tab value from the link
            const targetTabId = link.getAttribute('data-tab');
            const targetTab = container.querySelector(`.tab-nav-item[data-tab="${targetTabId}"]`);
            console.log(targetTabId, targetTab);
            if (targetTab) {
              // scroll smoothly to the top of container -100px
              const containerTop = container.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({
                top: containerTop,
                behavior: 'smooth'
              });
              

              // trigger after 500 ms to allow scrolling
              setTimeout(() => {
                targetTab.click(); // Trigger the click event on the tab
              }, 500);
            }
          });
            
        });

        // Initialize - find the active tab
        let activeTab = container.querySelector('.tab-nav-item.active');
        
        // If no active tab is found, set the first tab as active
        if (!activeTab && tabNavItems.length > 0) {
          activeTab = tabNavItems[0];
          activeTab.classList.add('active');
          
          // Find and activate the corresponding content panel within this container
          const activeTabId = activeTab.getAttribute('data-tab');
          const firstContentPanel = container.querySelector('#' + activeTabId);
          if (firstContentPanel) {
            firstContentPanel.classList.add('active');
          }
        }
        
        // Add click event listeners to all tabs in this container
        tabNavItems.forEach(tab => {
          tab.addEventListener('click', handleTabClick);
        });
      });
      
      /**
       * Handle tab click events
       * @param {Event} event - The click event
       */
      function handleTabClick(event) {
        const clickedTab = event.currentTarget;
        const newTabId = clickedTab.getAttribute('data-tab');
        
        // Find the container this tab belongs to
        const container = clickedTab.closest('.ce-pagestabbed');
        
        // Get the current active tab in this container
        const currentActiveTab = container.querySelector('.tab-nav-item.active');
        
        // Don't do anything if we clicked the active tab
        if (clickedTab === currentActiveTab) return;
        
        // Get the active tab ID for finding the active panel
        const currentActiveTabId = currentActiveTab ? currentActiveTab.getAttribute('data-tab') : '';
        
        // Update tab navigation - remove active class from all tabs in this container
        const tabsInContainer = container.querySelectorAll('.tab-nav-item');
        tabsInContainer.forEach(tab => {
          tab.classList.remove('active');
        });
        
        // Add active class to clicked tab
        clickedTab.classList.add('active');
        
        // Get the panels for transition
        const previousContentPanel = container.querySelector('#' + currentActiveTabId);
        const newContentPanel = container.querySelector('#' + newTabId);
        
        // If both panels exist, animate the transition
        if (previousContentPanel && newContentPanel) {
          animateTabTransition(previousContentPanel, newContentPanel);
        } else if (newContentPanel) {
          // If only the new panel exists, just show it
          const panelsInContainer = container.querySelectorAll('.tab-content-panel');
          panelsInContainer.forEach(panel => {
            panel.classList.remove('active');
          });
          newContentPanel.classList.add('active');
        }
      }
      
      /**
       * Animate tab transition using GSAP
       * @param {HTMLElement} outgoingPanel - The panel to hide
       * @param {HTMLElement} incomingPanel - The panel to show
       */
      function animateTabTransition(outgoingPanel, incomingPanel) {
        // Set up initial states
        incomingPanel.style.display = 'block';
        
        // Create the animation timeline
        const tl = gsap.timeline({
          onComplete: () => {
            // Clean up after animation
            outgoingPanel.classList.remove('active');
            incomingPanel.classList.add('active');
            outgoingPanel.style.display = '';
            incomingPanel.style.opacity = '';
            incomingPanel.style.transform = '';
          }
        });
        
        // Add animations to timeline
        tl.to(outgoingPanel, {
          opacity: 0,
          x: -20,
          duration: 0.3,
          ease: "power2.out"
        })
        .set(incomingPanel, {
          opacity: 0,
          x: 20
        }, "<")
        .to(incomingPanel, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
    

  });
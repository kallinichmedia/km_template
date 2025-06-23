document.addEventListener('DOMContentLoaded', function() {
    console.log('Contacts Array initialized');
    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
      console.error('GSAP is not loaded. Please include GSAP v3 library.');
      return;
    }
  
    // Initialize variables
    const personCards = document.querySelectorAll('.the-person');
    const detailsContainer = document.querySelector('.detailscontainer');
    const detailsInner = document.querySelector('.detailscontainer > .inner');
    let activeCard = null;
  
    // Register GSAP plugins if available
    if (gsap.plugins.ScrollToPlugin) {
      gsap.registerPlugin(ScrollToPlugin);
    }
  
    // Setup click events for each person card
    personCards.forEach(card => {
      card.addEventListener('click', function() {
        const descriptionContent = this.querySelector('.descriptionwrap').innerHTML;
        
        // If clicking the same card that's already active
        if (activeCard === this) {
          closeDetails();
          return;
        }
        
        // If a different card is active, close it first
        if (activeCard) {
          resetActiveCard();
        }
        
        // Set the new active card
        activeCard = this;
        this.classList.add('active');
        
        // Animate the plus icon to become a minus
        const iconBars = this.querySelectorAll('.toggleIcon svg rect');
        gsap.to(iconBars[1], { 
          duration: 0.3, 
          rotation: 0, 
          transformOrigin: 'center' 
        });
        
        // Update the details container with the new content
        if (detailsContainer.style.display === 'block') {
          // If container is already open, fade out the content first
          gsap.to(detailsInner, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
              detailsInner.innerHTML = descriptionContent;
              gsap.to(detailsInner, { duration: 0.3, opacity: 1 });
            }
          });
        } else {
          // If container is closed, set the content and show it
          detailsInner.innerHTML = descriptionContent;
          
          // Position the details container after the correct row
          positionDetailsContainer(this);
          
          // Show and animate the details container
          detailsContainer.style.display = 'block';
          gsap.fromTo(detailsContainer, 
            { height: 0, opacity: 0 }, 
            { 
              duration: 0.5, 
              height: 'auto', 
              opacity: 1,
              onComplete: () => {
                // Scroll to the details container
                gsap.to(window, {
                  duration: 0.7,
                  scrollTo: { y: detailsContainer, offsetY: 20 },
                  ease: 'power2.inOut'
                });
              }
            }
          );
        }
      });
    });
  
    // Function to close the details container
    function closeDetails() {
      if (!detailsContainer) return;
      
      gsap.to(detailsContainer, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        onComplete: () => {
          detailsContainer.style.display = 'none';
          detailsInner.innerHTML = '';
        }
      });
      
      resetActiveCard();
      activeCard = null;
    }
  
    // Function to reset the active card
    function resetActiveCard() {
      if (!activeCard) return;
      
      activeCard.classList.remove('active');
      
      // Reset the icon to plus
      const iconBars = activeCard.querySelectorAll('.toggleIcon svg rect');
      gsap.to(iconBars[1], { 
        duration: 0.3, 
        rotation: 90, 
        transformOrigin: 'center' 
      });
    }
  
    // Function to position the details container after the correct row
    function positionDetailsContainer(clickedCard) {
      // Get all cards
      const allCards = Array.from(personCards);
      const cardsPerRow = getCardsPerRow();
      
      // Find the index of the clicked card
      const index = allCards.indexOf(clickedCard);
      
      // Calculate which row this card is in
      const row = Math.floor(index / cardsPerRow);
      
      // Get the last card in this row
      const lastCardInRow = allCards[Math.min((row + 1) * cardsPerRow - 1, allCards.length - 1)];
      
      // Insert the details container after this card
      lastCardInRow.parentNode.insertBefore(detailsContainer, lastCardInRow.nextSibling);
    }
  
    // Function to determine how many cards are in a row based on viewport
    function getCardsPerRow() {
      const viewportWidth = window.innerWidth;
      
      if (viewportWidth >= 1024) {
        return 4; // 25% width each
      } else if (viewportWidth >= 768) {
        return 3; // 33.3333% width each
      } else {
        return 2; // 50% width each
      }
    }
  
    // Initialize the plus icons rotation
    personCards.forEach(card => {
      const iconBars = card.querySelectorAll('.toggleIcon svg rect');
      gsap.set(iconBars[1], { rotation: 90, transformOrigin: 'center' });
    });
  
    // Handle window resize to reposition the details container if needed
    window.addEventListener('resize', function() {
      if (activeCard && detailsContainer.style.display === 'block') {
        positionDetailsContainer(activeCard);
      }
    });
  
    // Add a subtle hover effect to cards
    personCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        if (this !== activeCard) {
          gsap.to(this, { duration: 0.3, y: -5, ease: 'power2.out' });
        }
      });
      
      card.addEventListener('mouseleave', function() {
        if (this !== activeCard) {
          gsap.to(this, { duration: 0.3, y: 0, ease: 'power2.out' });
        }
      });
    });
  });